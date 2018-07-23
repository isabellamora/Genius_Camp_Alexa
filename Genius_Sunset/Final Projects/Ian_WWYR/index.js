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
const FALLBACK_MESSAGE = 'What did you say?';

const handlers = {
    'LaunchRequest': function () {
      var speechOutput = "You will be playing ian's would you rather game say start when you're ready!";
      this.response.speak(speechOutput).listen("What would you like to do?");
      this.emit(':responseReady');
    },
    'WouldYouRatherIntent': function () {
        var speechOutput;
        var questOneArr = ["eat poop", "touch a jellyfish", "lick the floor", " brush your teeth with a toilet brush",
        "drink spoiled milk", "sky dive from 500 miles away from  earth", "eat rotten eggs", "break your phone", "stay in desert with 10 jackets on",
        "break you're x box", "die in lava", "get killed by kim-jong-un", "becoming kim-jung-un","be small but fast",
        "be big but slow", "drown to death", "loose your dog", "bring the ones you love", ""];
        var questTwoArr = ["smell a toenail", "eat plastic", "kiss a snake", "touch someone's brain", "scuba dive in lava",
       "be pikachu", "be charizard", "kill a dog", "kill a cat", "scuba dive in lava", "eat worms",
         "know when you will die", "know how you will die", "eat someone's vomit", "eat a lolipop made out of bugs",
         "have a cat with a dog personality", "have a dog with a cat personality", "be a ninja", "be a pirate",
         "be stupid and have a brilliant kid", "be smart and have a stupid kid", "bring the ones that helped the world"];
  
        var randomNum1 = Math.floor(Math.random()*questOneArr.length);
        var randomNum2 = Math.floor(Math.random()*questTwoArr.length);
        speechOutput = "Would you rather " + questOneArr[randomNum1] + " or " + questTwoArr[randomNum2];
        this.response.speak(speechOutput).listen("What would you like to do?");
        this.emit(':responseReady');
    },
    'AnswerIntent': function () {
        var myChoice = this.event.request.intent.slots.myChoice.value;
        var speechOutput = "You would rather " + myChoice + "? You're weird!";
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
