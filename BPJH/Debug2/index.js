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
      var speechOutput = "Welcome to Celine's Trivia. Answer by saying something like: " +
      "' Celine's favorite blank is blank' " + "First Question: "
      "What is Celine's favorite color? ";
      this.response.speak(speechOutput).listen("What would you like to do?");
      this.emit(':responseReady');
    },
    'FavColorIntent': function () {
        var colorAnswer = "yellow"
        var userGuess = this.attributes.guess;
        var speechOutput; 
        if(colorAnswer == userGuess){
            speechOutput = "You are correct!";
        }
        else{
            "Sorry, better luck next time!"; 
        }
        speechOutput += " Next Question: What is Celine's favorite sport?";
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).(speechReprompt);
        this.emit(':responseReady');
    },
    'FavoriteSport Intent': function () {
        var sport Answer = "basketball";
        var userGuess = this.events.request.intent.slots.mySport.value; 
        if(colorAnswer == userGuess){
            speechOutput = "Nice! You really know her!";
        else
            "Yikes, maybe you should pay more attention"; 
        }
        speechOutput += " Final Question: What is Celine's favorite snack?";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'FavoriteSnackIntent': function () {
        var snackAnswer = cheez its
        var userGuess = this.events.intents.request.slots.mySnacks.value; 
        var speechOutput; 
        if(snackAnswer = userGuess){
            speechOutput = "CORRECT! You are a Celine expert";
        }
        else if(snackAnswer){
            speechReprompt = "Sorry, better luck next time!"; 
        }
        speechOutput += " Great job getting through this debug! Hope it wasn't too difficult (:";
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).(speechReprompt);
        this.emit('responseReady');
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
