'use strict';
const Alexa = require('alexa-sdk');

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this: const APP_ID = 'amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1';
const APP_ID = undefined;

//Alexa will speak out the help message when a user says help
//For an idea of what you should say
//-> "You can say tell me a space fact, or, you can say exit... What can I help you with?"
const HELP_MESSAGE = 'Guess a number between 1 and 10';
const HELP_REPROMPT = 'What can I help you with?';

//Alexa will speak out the stop message when the program ends
const STOP_MESSAGE = 'Goodbye!';
const FALLBACK_MESSAGE = 'I dont recognize that';

const handlers = {
    'LaunchRequest': function () {
      // chooses a random number between 1-100
      this.attributes.randomNumber = Math.floor( Math.random() * 100 + 1 );
      this.attributes.score = 0; //keeps track of how many tries
      var speechOutput = "Welcome to the guessing game! Guess a number between 1 and 10. ";
      this.response.speak(speechOutput).listen("What would you like to do?");
      this.emit(':responseReady');
    },
    'GuessIntent': function () {
        this.attributes.score++; // increments tries
        var userGuess = this.event.request.intent.slots.myGuess.value; //gets slot value from the front end
        var speechOutput;
        if(userGuess > this.attributes.randomNumber){
            speechOutput = "Too high! Guess lower ";
        }
        else if(userGuess < this.attributes.randomNumber){
            speechOutput = "Too low! Guess higher ";
        }
        else{
            this.attributes.randomNumber = Math.floor(Math.random()*100 + 1); 
            if(this.attributes.score == 1){
                speechOutput = "You got it! It took you " + this.attributes.score + " try. "; 
            }
            else {
                speechOutput = "You got it! It took you " + this.attributes.score + " tries. ";
            }
            speechOutput += "Alright, I've got a new number. You can guess again or say stop to quit."
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
