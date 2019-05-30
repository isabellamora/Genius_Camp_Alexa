# Spring at Sage High School 

    Day 1: Hello World, Madlibs
    Day 2: Guessing Game, Rock Paper Scissors

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

## How to interpret speech
In your intent...

```
var interpret = "<say-as interpret-as='cardinal'>12345</say-as>.";
var speechOutput = "I'm going to properly say the number ";

this.response.speak(speechOutput).listen(speechOutput);
```

## We can combine speech interpretation and sound effects too!
In your intent...

```
var interpretEffect = "<amazon:effect name='whispered'> <say-as interpret-as='cardinal'>12345</say-as> </amazon:effect>."
var speechOutput = "I'm a spooky ghost that knows her numbers "

this.response.speak(speechOutput).listen(speechOutput);
```

## We can differentiate between past tense and present tense
In your intent...

```
var spellOut = "<say-as interpret-as='characters'>read</say-as>";
var present = "<w role='amazon:VB'>read</w>";
var past = "<w role='amazon:VBD'>read</w>";
var speechOutput = "The word read " + spellOut +
            "may be interpreted " + spellOut + 
            "as either the present simple form " + present + ", " + 
            "or the past participle form " + past + ".";

this.response.speak(speechOutput).listen("wow how neat");
```

## We can also have alexa say words with the proper dialect
In your intent... Also make sure you spell our the words properly

```
var someFrench = "<say-as interpret-as='interjection'>Bon Appetit</say-as>";
var speechOutput = "I can say bon appetit in french, listen " + someFrench;

this.response.speak(speechOutput).listen("wow how neat");
```
