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
      this.attributes.toDoList = {};
      var speechOutput = "Welcome to the to do list app.Would you like to add something to your to do list,  add a to do list, or would you like to take away something from your to do list";
      this.response.speak(speechOutput).listen("What would you like to do?");
      this.emit(':responseReady');
    },
    'addIntent': function () {
        var thing = this.event.request.intent.slots.myThing.value;
        var subject = this.event.request.intent.slots.mySubject.value;
        var speechOutput = "Okay, I have added " + thing + " to the " + subject + " to do list.";
        this.attributes.toDoList[subject].push(thing);
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'deleteIntent': function () {
        var thing = this.event.request.intent.slots.myThing.value;
        var subject = this.event.request.intent.slots.mySubject.value;
        var speechOutput = "Okay, I have deleted " + thing + " from the " + subject + " to do list";
        var index = this.attributes.toDoList[subject].indexOf(thing);
        this.attributes.toDoList[subject].splice(index, 1);
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'makeIntent': function () {
        var subject = this.event.request.intent.slots.mySubject.value;
        this.attributes.toDoList[subject] = [];
        var speechOutput = "Okay, I have created a " + subject + " to do list.";
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'checkIntent': function () {
        var subject = this.event.request.intent.slots.mySubject.value;
        var speechOutput = "In your " + subject + " to do list, you have :";
        for(var i = 0; i < this.attributes.toDoList[subject].length; i++) {
            speechOutput += this.attributes.toDoList[subject][i] + ", ";
        }
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'takeIntent': function () {
        var subject = this.event.request.intent.slots.mySubject.value;
        var speechOutput = "Okay, I will delete the " + subject + " to do list.";
        delete this.attributes.toDoList[subject];
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

