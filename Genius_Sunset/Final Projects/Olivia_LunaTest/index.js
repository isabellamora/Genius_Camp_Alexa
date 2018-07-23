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
      var speechOutput = "Hi welcome to the loonie- i mean luna lovegood test, question one what does a wrakspurt do";
      this.response.speak(speechOutput).listen("What would you like to do?");
      this.emit(':responseReady');
    },
    'DeathHorseIntent': function () {
   var speechOutput;
        var answer = this.event.request.intent.slots.myAnswer.value;
       if(answer.includes("death")){
           speechOutput = "Correct to see thestrals you have too see death,three,what is an item that luna loses the most";
        }
        else {
           speechOutput = "wrong to see thestrals you have to see death,three,what is an item that luna loses the most";
        }
       
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },        
    'HouseIntent': function () {
     var speechOutput;
        var answer = this.event.request.intent.slots.myAnswer.value;
       if(answer.includes("ravenclaw")){
           speechOutput = "Correct her house is ravenclaw,congrats you finished my test";
        }
        else {
           speechOutput = "wrong her house is raven claw,good job you finished my test";
        }
       
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },  
    'PatronusIntent': function () {
          var speechOutput;
        var answer = this.event.request.intent.slots.myAnswer.value;
       if(answer.includes("hare")){
           speechOutput = "correct her patronus is a hare,five,who is the actor for luna";
        }
        else {
           speechOutput = "wrong her patronus is a hare,five,who is the actor for luna";
        }
       
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'LostIntent': function () {
      var speechOutput;
        var answer = this.event.request.intent.slots.myAnswer.value;
       if(answer.includes("shoes")){
           speechOutput = "correct she most commonly loses her shoes,four,what is luna's patronus";
        }
        else {
           speechOutput = "wrong she most commonly loses her shoes,four,what is luna's patronus";
        }
       
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },  
    'CreatureIntent': function () {
        var speechOutput;
        var answer = this.event.request.intent.slots.myAnswer.value;
       if(answer.includes("fuzzy")){
           speechOutput = "Correct wrakspurt make your brain fuzzy, two, how can you see thestrals";
        }
        else {
           speechOutput = "wrong wrakspurt make your brain fuzzy, two, how can you see thestrals";
        }
       
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },    
    'PersonIntent': function () {
          var speechOutput;
        var answer = this.event.request.intent.slots.myAnswer.value;
       if(answer.includes("evana lynch")){
           speechOutput = "Correct evana lynch was the actor for luna,six,what house is luna in";
        }
        else {
           speechOutput = "wrong evena lynch was the actor for luna,six,what house is luna in";
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
