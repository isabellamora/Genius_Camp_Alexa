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
      var speechOutput = "This is your toy box. What would you like to play with?";
      this.response.speak(speechOutput).listen("What would you like to do?");
      this.emit(':responseReady');
    },
    'DiceIntent': function () {
        var number = Math.floor(Math.random()*6) + 1; 
        var speechOutput = "The number that I chose is " + number.toString();
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'ToyIntent': function () {
        var toyArray = ["transformer", "slinky", "nerf gun", "cabbage patch kids", "play-doh"];
        var number = Math.floor(Math.random()*5); 
        var speechOutput = "The toy that I choose is " + toyArray[number];
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'MagicBallIntent': function () {
        var magicBallArray = ["Possibly", "Doubt it", "No", "Impossible", "Maybe", "Absolutely", "Yes"];
        var choice = randomChoice(magicBallArray); 
        var speechOutput = choice;
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'WhoWillWinIntent': function () {
        var nameOne = this.event.request.intent.slots.nameOne.value; 
        var nameTwo = this.event.request.intent.slots.nameTwo.value; 
        var nameArray = []; 
        nameArray.push(nameOne); 
        nameArray.push(nameTwo); 
        this.attributes.choice = randomChoice(nameArray); 
        var speechOutput = "Alright. I've got the winner!";
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'WinnerIntent': function () {
        var speechOutput = "And the winner is " + this.attributes.choice;
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
function randomChoice(arr){
  
  //we are choosing a random value that is as big as the number of items in our array
  var randomValue = Math.random() * arr.length;
  //then we are rounding down that value, since it can give decimal values and we can't use those in arrays
  //which will replace the old value in randomValue with the new rounded down value
  randomValue = Math.floor(randomValue);
  var choice = arr[randomValue];
  
  return choice;
}
