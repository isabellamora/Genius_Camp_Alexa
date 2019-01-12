# Buena Park Junior High Alexa Class


This folder will have all your resources as well as links to code. 

# Amazon Sound Clip Library

https://developer.amazon.com/docs/custom-skills/ask-soundlibrary.html

Alexa allows you to include sound bytes to your skill that can be used across all alexa products.

#### Sound clips must come from a website that has `https` in the url.
#### Sound clips must be `.mp3` format

# Speech Synthesis Markup Language (SSML) Reference

https://developer.amazon.com/docs/custom-skills/speech-synthesis-markup-language-ssml-reference.html

SSML allows alexa to change her voice to create a livelier skill experience.

https://developer.amazon.com/de/docs/custom-skills/speech-synthesis-markup-language-ssml-reference.html#supported-speechcons

Have alexa say words with the right dialect.

## How to include a sound byte
In your intent...

```
var soundByte = "<audio src='https://s3.amazonaws.com/ask-soundlibrary/animals/amzn_sfx_bear_groan_roar_01.mp3'/>";
var speechOutput = "Hey, look I'm a bear! " + soundByte;

this.response.speak(speechOutput).listen(speechOutput);
```

## How to make sound effects
In your intent...

```
var effect = "<amazon:effect name='whispered'>I'm a spooky ghost now, boo!</amazon:effect>.";
var speechOutput = "I'm going to say this number, " + effect;
 
this.response.speak(speechOutput).listen(speechOutput);
```
