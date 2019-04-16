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
      var speechOutput = "You have found Miss Celine's Adventure game! ";
      speechOutput += "Let's begin our journey! "
      speechOutput += "It is a sunny Friday afternoon and you are walking home from school after your favorite class, Alexa, of course. "
      speechOutput += "You're excited to go home because your cousins are visiting for the weekend. "
      speechOutput += "As you cross the street you notice the McDonald's and you suddenly feel hungry. "
      speechOutput += "Do you go grab some chicken nuggets or head home because your cousins are waiting?"
      this.response.speak(speechOutput).listen("What would you like to do?");
      this.emit(':responseReady');
    },
    'McDonaldsIntent': function () {
        var speechOutput = "Ahhhhh you've succumbed to your stomach and start walking towards McDonalds ";
        speechOutput += "Upon entering, you gaze at the menu when suddenly an ad on one of the walls catches your attention. "
        speechOutput += "You quickly walk over and read that there's a challenge going on. "
        speechOutput += "The ad says that there's a $300 prize to whoever can tell the best story. "
        speechOutput += "You think to yourself, I can either go home right now and start brainstorming or I can buy my food "; 
        speechOutput += "What do you do? "
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'HomeIntent': function () {
        var speechOutput = "Excited to see your cousins, you head home. "; 
        speechOutput += "After what seems like the longest walk of your life, you finally end up at the front door of your house. "; 
        speechOutput += "You turn the knob like you always do but wait... Why isn't the door opening? "; 
        speechOutput += "A little confused, you knock. Maybe your cousins locked it. "; 
        speechOutput += "No one answers. Hmm you think. Maybe they just went out for a little bit and they'll be back soon. "; 
        speechOutput += "Do you sit and wait or call the police?"
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
