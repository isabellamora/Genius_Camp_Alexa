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
      var speechOutput = "Hello you can ask about dogs, or you're family.";
      this.response.speak(speechOutput).listen("What would you like to do?");
      this.emit(':responseReady');
    },
    'DogCheerIntent': function () {
        var speechOutput = "You can play with you're dog if it is sad."
        + "You can also give it food. Or you can just pet them.";
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'DogFactsIntent': function () {
        var speechOutput = "Some dog facts are, they love running around, unless they are lap dogs."
        + "Another fact is when dogs are puppies most of them are super hyper";
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'DangerIntent': function () {
        var dangerArray = ["Fire ants are some type of ant you should stay away from.", 
        "Bullet ants are a danger, because if they bite you it feels like a bullet",
        "the Cow Killer is a bug, that has a stinger, that could possibly kill a cow.",
        "A lion doesn't always hurt you, but does have the power to.",
        " A kangaroo can kick and punch you and you could get knocked out."];
        var randomNumber = Math.floor(Math.random()*dangerArray.length);
        var speechOutput = dangerArray[randomNumber];
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'HelpFamilyIntent': function () {
        var speechOutput = "Clean the dishes, do laundry, make them happy.";
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'SisterIntent': function () {
        var speechOutput = "Be nice, help her, tell her to wake up, tell her to stop going on the phone.";
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


