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
      var speechOutput = "You can play dog, cat, or bird noises";
      this.response.speak(speechOutput).listen("What would you like to do?");
      this.emit(':responseReady');
    },
    'catIntent': function () {
        var sound = "<audio src='https://s3.amazonaws.com/ask-soundlibrary/animals/amzn_sfx_cat_meow_1x_02.mp3'/>";
        var speechOutput = sound; 
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'birdIntent': function () {
        var sound = "<audio src='https://s3.amazonaws.com/ask-soundlibrary/animals/amzn_sfx_bird_robin_chirp_1x_01.mp3'/>"; 
        var speechOutput = sound;
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'dogIntent': function () {
        var sound = "<audio src='https://s3.amazonaws.com/ask-soundlibrary/animals/amzn_sfx_dog_med_bark_1x_02.mp3'/>"; 
        var speechOutput = sound;
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'spookyIntent': function () {
        var speechOutput = "<amazon:effect name='whispered'>Are you scared because I am spooky?</amazon:effect>";
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'storyIntent': function () {
        var dogSound = "<audio src='https://s3.amazonaws.com/ask-soundlibrary/animals/amzn_sfx_dog_med_bark_1x_02.mp3'/>"; 
        var punchSound = "<audio src='https://s3.amazonaws.com/ask-soundlibrary/impacts/amzn_sfx_punch_01.mp3'/>";
        var speechOutput = "Once upon a time, I was walking through a forest and saw a dog " 
        + dogSound + "Then the dog "
        + "stood up and punched me with its paw" + punchSound ;
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
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
