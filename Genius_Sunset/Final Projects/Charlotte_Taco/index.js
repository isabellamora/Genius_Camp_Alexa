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
      var speechOutput = "Hi welcome to build-a-taco, where you can build virtual tacos. Let’s start with the tortilla. Would you like flour, or corn?";
      this.response.speak(speechOutput).listen("What would you like to do?");
      this.emit(':responseReady');
    },
    'TortillaIntent': function () {
       this.attributes.tortilla = this.event.request.intent.slots.mytortilla.value;
        var speechOutput = "I like " + this.attributes.tortilla + ", what type of meat?";
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'MeatIntent': function () {
        this.attributes.meat = this.event.request.intent.slots.mymeat.value;
        var speechOutput = "Ok what about cheese?";
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'CheeseIntent': function () {
         this.attributes.cheese = this.event.request.intent.slots.mycheese.value;
        var speechOutput = "what about veggies?";
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'VeggieOneIntent': function () {
        this.attributes.veggieone = this.event.request.intent.slots.myveggieone.value;
        var speechOutput = "what about another veggie?";
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'VeggieTwoIntent': function () {
      this.attributes.veggietwo = this.event.request.intent.slots.myveggietwo.value;
        var speechOutput = "want some more veggies?";
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'VeggieThreeIntent': function () {
        this.attributes.veggiethree = this.event.request.intent.slots.myveggiethree.value;
        var speechOutput = "what about more veggies?";
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'VeggieFourIntent': function () {
       this.attributes.veggiefour = this.event.request.intent.slots.myveggiefour.value;
        var speechOutput = "How about cilantro?";
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'CilantroIntent': function () {
        var cilantro = this.event.request.intent.slots.mycilantro.value;
        var speechOutput = "On your taco, you have " + this.attributes.tortilla  + ", " + this.attributes.meat  +  ", " + 
        this.attributes.cheese  + ", " + this.attributes.veggieone + ", "   + this.attributes.veggietwo + ", " 
        + this.attributes.veggiethree +  ", "  + this.attributes.veggiefour + " and " + cilantro + ".";
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'StoryIntent': function () {
        var storyArray = ["you trip, falling into a sewer. ", "you go to a party ", " you put the taco in your fridge at home,"];
        var randomNum = Math.floor(Math.random()*storyArray.length);
        var speechOutput = "You walk out of build-a-taco and " +storyArray[randomNum];
        if (randomNum == 0){
            speechOutput += "An alligator was waiting for you. To live you have to give the taco to the gator. I  guess you have to go to build a taco again";
        
        }
      else if (randomNum == 1){ 
       speechOutput += "you walk in with your taco and then the queen bumps into you and says 'if you give me the taco you can live in the best mansion'"
       + " I guess you'll have to go to build a taco again";
      } 
      else {
          speechOutput += "then you go on vacation and come back to see, it's moldy it, smells, you have to throw it out, I guess you have to go to build-a-taco again";
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
