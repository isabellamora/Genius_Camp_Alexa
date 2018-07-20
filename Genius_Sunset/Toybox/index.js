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
      var speechOutput = "Welcome to my toy box! Some toys I have are: dice, toy box, magic 8 ball";
      this.response.speak(speechOutput).listen("What would you like to do?");
      this.emit(':responseReady');
    },
    'DiceIntent': function () {
        var randomNum = Math.floor(Math.random()*6 + 1); 
        var speechOutput = "I rolled " + randomNum ;
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'ToyBoxIntent': function () {
        var toyArray = ["stuffed animal", "revive pheonix", "ball", "nerf gun", "barbie", "toy computer"];
        var randomNum = Math.floor(Math.random()*6); 
        var toyChoice = toyArray[randomNum]; 
        var speechOutput = "I picked " + toyChoice;
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'MagicEightBallIntent': function () {
        var answerArray = ["yes", "no", "maybe so", "no dur", "I cannot answer that", "ask again", "obviously"];
        var randomNum = Math.floor(Math.random()*answerArray.length); 
        var answerChoice = answerArray[randomNum]; 
        var speechOutput = answerChoice;
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },  
    'WhoWillWinIntent': function () {
        var firstName = this.event.request.intent.slots.firstName.value; 
        var secondName = this.event.request.intent.slots.secondName.value; 
        var nameArray = [firstName, secondName]; 
        var randomNum = Math.floor(Math.random()*nameArray.length); 
        var nameChoice = nameArray[randomNum]; 
        var speechOutput = "The winner is " + nameChoice;
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
