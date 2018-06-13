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
      var speechOutput = "I can tell you something about yourself";
      this.response.speak(speechOutput).listen();
      this.emit(':responseReady');
    },
    'FactIntent': function () {
        
        var myFactsList = ["Your favorite color is yellow", "Your favorite sport is basketball", 
        "You also enjoy running", "Your favorite food is Mac N Cheese"]; 
        var fact = randomChoice(myFactsList); 
        
        //var fact = myFactsList[Math.floor(Math.random()*myFactsList.length)]; 
        
        var speechOutput = "A fact about yourself is " + fact;
 
        this.response.speak(speechOutput).listen();
        this.emit(':responseReady');
    },
    'FavoriteIntent' : function (){
        var speechOutput = ""; 
        var favoritesList = {
            "food" : "Celine's favorite food is Ice Cream",
            "color" : "Celine's favorite color is yellow", 
            "band" : "Celine's favorite band is White Stripes"
        };
        var favorite = this.event.request.intent.slots.myFavorite.value; 
        if (favoritesList[favorite]) { 
            speechOutput = favoritesList[favorite];
        }
        else {
            speechOutput = "Sorry I don't know Celne's favorite " + favorite; 
        }
        this.response.speak(speechOutput).listen(""); 
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
        this.response.speak(FALLBACK_MESSAGE);
        this.emit(':responseReady').listen(HELP_REPROMPT);
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
