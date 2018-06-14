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
      var speechOutput = "This skill will test your abilities to debug. "+
      "If you pass then I will make an animal noise for you. "+
      "You can say, talk like a cat, talk like a dog, or talk like a lion";
      
      this.response.speak(speechOutput).listen("You can say, talk like a cat, talk like a dog, or talk like a lion");
      this.emit(':responseReady');
    },
    'CatIntent': function () {
        speechOutput = "Meow meow meeeoooow look im a cat! congrats you passed the kitty cat test. Now say, talk like a dog or talk like a lion";
        speechReprompt = "you passed the cat test. Now say talk like a dog";
        this.response.speak();
        this.emit(':responseReady');
    },
    'dogIntent': function () {
        var speechOutput = "Woof! Woof woof. look im a dog! congrats you passed the puppy test. Now say, talk like a lion or talk like a cat";
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speek(speechOutput).listen(speechReprompt);
        this.emit('responseReady');
    },
    'LionIntent' : function () {
        var speechOutput = "Before I go on and speak like a lion. First, tell me your favorite color.";
        var speechReprompt = "Tell me your favorite color";
        this.response.speak.speechOutput.listen.speechReprompt;
        this.emit(':responseReady');
    },
    'AfterLionIntent': function () {
        this.attribute.favoriteColor = this.event.intent.slots.myColor.value;
        var speechOutput = "Rawr! look at me i'm a " + this.attributes.favoriteColor + " lion.";
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
//=========================================================================================================================================
//Editing anything below this line might break your skill.
//=========================================================================================================================================

exports.handler = function (event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
