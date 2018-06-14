# Amazon Sound Clip Library

https://developer.amazon.com/docs/custom-skills/ask-soundlibrary.html

## How to include a sound byte
In your intent...
```
var soundByte = "<audio src=’https://s3.amazonaws.com/ask-soundlibrary/musical/amzn_sfx_trumpet_bugle_03.mp3'/>";
var speechOutput = "Hey, look I'm a bear! " + soundByte;

this.response.speak(speechOutput);
```
