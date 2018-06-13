'use strict';
const Alexa = require('alexa-sdk');

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this: const APP_ID = 'amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1';
const APP_ID = undefined;

//Alexa will speak out the help message when a user says help
//For an idea of what you should say
//-> "You can say tell me a space fact, or, you can say exit... What can I help you with?"
const HELP_MESSAGE = 'This skill is going to compliment you, try saying something like compliment me';
const HELP_REPROMPT = 'What can I help you with?';

//Alexa will speak out the stop message when the program ends
const STOP_MESSAGE = 'Goodbye! Have a wonderful day';

const handlers = {
    'LaunchRequest': function () {
      var speechOutput = "This skill is going to compliment you";
      this.response.speak(speechOutput).listen("Would you like to say something?");
      this.emit(':responseReady');
    },
    'ComplimentIntent': function () {
        var speechOutput = "You are an awesome teacher, Hector";
        this.response.speak(speechOutput);
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
        this.response.speak("Hmm... I didn't understand that").listen("Try something like compliment me");
        this.emit(':responseReady');
    },
    //Doesn't matter what order you place your intents, as long it is within the handlers it will be fine
    'AlexaComplimentIntent': function () {
        //To grab the spoken word of the user we need to use...
        //  this.event.request.intent.slots.myKey.value
        //myKey would be the name of whatever is in the {} in the intent of your ADC
        //  in this case we have {myCompliment} in our intent in the ADC
        
        var compliment = this.event.request.intent.slots.myCompliment.value;
        var speechOutput = "Oh thanks, I already knew I was " + compliment;
        this.response.speak(speechOutput).listen();
        this.emit(':responseReady');
    },
    'SuperComplimentIntent': function() {
        //You're allowed to continue your array in a new line as long as it has a comma
        var myComplimentList = ["I like your hair", "You are beautiful", 
        "Your shoes are dope", "You are awesome", "You are smarter than I am"];
        
        //var randomNum = Math.floor(Math.random()*myComplimentList.length); 
        //var choice = myComplimentList[randomNum];
        
        var speechOutput = randomChoice(myComplimentList);
        var reprompt = "I already complimented you";
        this.response.speak(speechOutput).listen(reprompt); 
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

//helper functions will be outside of handlers

function randomChoice(arr){
  
  //we are choosing a random value that is as big as the number of items in our array
  var randomValue = Math.random() * arr.length;
  
  //then we are rounding down that value, since it can give decimal values and we can't use those in arrays
  //which will replace the old value in randomValue with the new rounded down value
  randomValue = Math.floor(randomValue);
  var choice = arr[randomValue];
  
  return choice;
}
