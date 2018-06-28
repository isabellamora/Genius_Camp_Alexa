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
      this.emit('FirstPathIntent');
    },
    'FirstPathIntent': function () {
        var speechOutput = "It's 3 in the morning. You are in your house "
        + "during the Cold War. You're running out of supplies. "
        + "You can go out onto the front and search for food "
        + "or stay and starve.";
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'SearchForFoodIntent': function () {
        var speechOutput = "You walk outside and some soldiers approach you. "
        + "They offer you a bag of saltine crakers and seawater. "
        + "Do you want to accept the saltine crackers or seawater? "
        + "Or do you want to walk away and search more? ";
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'StarveIntent': function () {
        var optionsArray = ["You feel your stomach growling for food. "
        + "You feel yourself getting weaker by the second. "
        + "You slowly die of starvation.",
        "An air drop comes and it has food, water and war supplies. ", 
        "Enemy soldiers come to your door and offer you food, " 
        + "with the condition that you join their side."]; 
        var num = Math.floor(Math.random()*3);
        var choice; 
        var speechOutput;
        if (num == 0){
            choice = optionsArray[0]; 
            speechOutput = choice + " Thanks for playing.";
        }
        else if (num == 1){
            choice = optionsArray[1]; 
            speechOutput = choice + " Congratulations you survived starvation."; 
        }
        else {
            choice = optionsArray[2]; 
            speechOutput = choice + " Will you join the enemy's side "
            + "or choose to starve?";
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
