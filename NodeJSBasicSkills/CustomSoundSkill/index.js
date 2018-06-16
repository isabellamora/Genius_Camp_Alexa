'use strict';
const Alexa = require('alexa-sdk');

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this: const APP_ID = 'amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1';
const APP_ID = undefined;

//Alexa will speak out the help message when a user says help
//For an idea of what you should say
//-> "You can say tell me a space fact, or, you can say exit... What can I help you with?"
const HELP_MESSAGE = 'HELP MESSAGE';
const HELP_REPROMPT = 'What can I help you with?';

//Alexa will speak out the stop message when the program ends
const STOP_MESSAGE = 'Goodbye!';
const FALLBACK_MESSAGE = 'I dont recognize that';

const handlers = {
    'LaunchRequest': function () {
      var speechOutput = "This skill is just an example to show custom sounds, what would you like to do?";
      this.response.speak(speechOutput).listen("What would you like to do?");
      this.emit(':responseReady');
    },
    'DogIntent': function () {
        var soundByte = "<audio src='https://s3.amazonaws.com/ask-soundlibrary/animals/amzn_sfx_dog_med_bark_1x_02.mp3'/>";
        var speechOutput = "Woof I'm a dog " + soundByte;
        var speechReprompt = "I just talked like a dog";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'NatureIntent': function () {
        var soundByte1 = "<audio src='https://s3.amazonaws.com/ask-soundlibrary/nature/amzn_sfx_water_droplets_01.mp3'/>";
        var soundByte2 = "<audio src='https://s3.amazonaws.com/ask-soundlibrary/nature/amzn_sfx_ocean_wave_on_rocks_1x_01.mp3'/>";
        var soundByte3 = "<audio src='https://s3.amazonaws.com/ask-soundlibrary/nature/amzn_sfx_small_stream_02.mp3'/>";
        var speechOutput = "I'm going to make a lot of nature sounds! " + soundByte1 + soundByte2 + soundByte3;
        var speechReprompt = "Did you look all of my nature sounds";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'SpookyIntent': function () {
        var effect = "<amazon:effect name='whispered'>I'm a spooky ghost now, boo!</amazon:effect>.";
        var speechOutput = "I'm going to scare you now, " + effect;
        this.response.speak(speechOutput).listen(speechOutput);
        this.emit(':responseReady');
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
     'AMAZON.FallbackIntent': function () {
        this.response.speak(FALLBACK_MESSAGE).listen(HELP_REPROMPT);
        this.emit(':responseReady');
    },
};

//=========================================================================================================================================
//Editing anything below this line might break your skill.
//=========================================================================================================================================

exports.handler = function (event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
