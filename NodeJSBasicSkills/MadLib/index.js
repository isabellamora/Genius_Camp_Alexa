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
const STOP_MESSAGE = 'Ok! Thank you for playing!!';
const FALLBACK_MESSAGE = 'I dont recognize that';

const handlers = {
    'LaunchRequest': function () {
      var speechOutput = "This is a Madlib. Please give me a noun";
      this.response.speak(speechOutput).listen("");
      this.emit(':responseReady');
    },
    'NounIntent': function () {
        this.attributes.noun = this.event.request.intent.slots.myNoun.value; 
        var speechOutput = "Ok. Give me an adjective";
        this.response.speak(speechOutput).listen("Please give me a adjective");
        this.emit(':responseReady');
    },
    'VerbIntent': function () {
        this.attributes.verb = this.event.request.intent.slots.myVerb.value; 
        var speechOutput = "Ok let me know when you're ready";
        var speechReprompt = "";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'AdjIntent': function () {
        this.attributes.adj = this.event.request.intent.slots.myAdj.value; 
        var speechOutput = "Ok. Now give me a verb";
        var speechReprompt = "Please give me an verb";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'FinishedIntent': function () {
        var speechOutput = "Once upon a time there was a " + this.attributes.noun + 
        " who saw a " + this.attributes.adj + 
        " Mitchell " + this.attributes.verb +"ing." ;
        this.response.speak(speechOutput + "Do you want to play again?").listen(); 
        this.emit(':responseReady');
    },
    'PlayAgainIntent' : function () {
        this.emit('LaunchRequest'); 
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
        this.response.speak(FALLBACK_MESSAGE).listen();
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
