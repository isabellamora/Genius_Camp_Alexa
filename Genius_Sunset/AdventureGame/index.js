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
      var speechOutput = "Welcome to Celine's Adventure Game! You are walking through a pet store. "
      + "You see dogs, cats and birds. You're in an aisle of cats and dogs. "
      + "Do you want to see the cats or dogs?";
      this.response.speak(speechOutput).listen("What would you like to do?");
      this.emit(':responseReady');
    },
    'DogIntent': function () {
        var speechOutput = "You walk over to the dogs. One of the dogs break loose "
        + "and bites you. Several minutes pass and you realize you're losing blood quickly. "
        + "A man approaches you with a super potion. Do you take the super potion or go to the ER?";
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'CatIntent': function () {
        var catArray = ["You die.", "You respawn as a cat.", "You run outside and get a bandaid."]
        var randomNum = Math.floor(Math.random()*catArray.length);
        var speechOutput = "You walk over to the cats and all of a sudden, you hear a screech. "
        + "A black cat jumps at you and scratches you. " + catArray[randomNum];
        if (randomNum == 0){
            speechOutput += "Game Over"; 
        }
        else if (randomNum == 1){
            speechOutput += "You live an awesome life as a lion ruling over the savannah";
        }
        else {
            speechOutput += "You successfully apply your bandaid and it heals."
        }
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
