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
      var speechOutput = "Hello! Welcome to the best fit golf club. Please say 'Start' to begin.";
      this.response.speak(speechOutput).listen("What would you like to do?");
      this.emit(':responseReady');
    },
    'beginIntent': function () {
        var speechOutput = "Great! To start I will need your gender.";
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
     'genderIntent': function () {
        this.attributes.gender = this.event.request.intent.slots.myGender.value;
        var speechOutput = "Thanks! Now I will need your age. If you are 15 to 44 years old, please say 'first'. "
        + "If you are 45 to 54 years old, please say 'second'. If you are 55 or above, please say 'third'.";
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
     'ageFirstIntent': function () {
        var speechOutput = "Perfect! Now tell me your basic height in inches from your head to the bottom "
        + "of your feet. For the best results, please stand up as straight as possible.";
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
      'ageSecondIntent': function () {
        var speechOutput = "Perfect! Now tell me your basic height in inches from your head to the bottom "
        + "of your feet. For the best results, please stand up as straight as possible.";
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
      'ageThirdIntent': function () {
        var speechOutput = "Perfect! Now tell me your basic height in inches from your head to the bottom "
        + "of your feet. For the best results, please stand up as straight as possible.";
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
     'heightIntent': function () {
        var speechOutput = "Great! Now I need your wrist-floor length. For the best results, stand up "
        + "as straight as possible letting your arms hang loosely at your side. Ask a helper to measure "
        + "from the top of your wrist, where the top of the club would be, to the floor.";
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
     'wristFloorIntent': function () {
        this.attributes.wristFloor = this.event.request.intent.slots.myWristFloor.value;
        var speechOutput = "Perfect! Now can I get your skill level. Are you a beginner, experienced, or expert.";
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
     'beginnerIntent': function () {
        var speechOutput = "Thanks! Now I need to know how fast you swing a golf club or your estimated swing speed.";
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'experiencedIntent': function () {
        var speechOutput = "Thanks! Now I need to know how fast you swing a golf club or your estimated swing speed.";
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'expertIntent': function () {
        var speechOutput = "Thanks! Now I need to know how fast you swing a golf club or your estimated swing speed.";
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
     'speedIntent': function () {
        this.attributes.speed = this.event.request.intent.slots.mySpeed.value;
        var speechOutput = "Great! Finally, I need to know what number iron you use at the 150 yard marker.";
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'numberIntent': function () {
        this.attributes.club = this.event.request.intent.slots.myClub.value;
        var speechOutput = "Perfect! I have found your best fits. Would you like your results?";
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
     'resultsIntent': function () {
        var speechOutput = "Perfect! I have found the best clubs for you. ";
        if (this.attributes.gender == "male" || "boy") {
            speechOutput += "Because you are a male, I recommend steel shafted irons, wedges, and putter and a graphite shaft driver, woods, and hybrids. ";
        }
        else {
            speechOutput += "Because you are a female, I recommend graphite shaft clubs. Although, your putter shaft should be steel. ";
        }
        
        if (this.attributes.wristFloor == "40" || this.attributes.wristFloor == "41") {
            speechOutput += "Your shafts should also be 2 inches longer than standard length. ";
        }
        else if (this.attributes.wristFloor == "38" || this.attributes.wristFloor == "39") {
            speechOutput += "Your shafts should also be 1 and one fourth inches longer than standard length. ";
        }
        else if (this.attributes.wristFloor == "36" || this.attributes.wristFloor == "37") {
            speechOutput += "Your shafts should also be half an inch longer than standard length. ";
        }
        else if (this.attributes.wristFloor == "34" || this.attributes.wristFloor == "35") {
            speechOutput += "Your shafts should also be standard length. ";
        }
        else if (this.attributes.wristFloor == "32" || this.attributes.wristFloor == "33") {
            speechOutput += "Your shafts should also be half an inch shorter than standard length. ";
        }
        else if (this.attributes.wristFloor == "30" || this.attributes.wristFloor == "31") {
            speechOutput += "Your shafts should also be 1 inch shorter than standard length. ";
        }
        else if (this.attributes.wristFloor == "38" || this.attributes.wristFloor == "39") {
            speechOutput += "Your shafts should also be 1 and a half inches shorter than standard length. ";
        }
        
        if (this.attributes.speed < "75") {
            speechOutput += "Your irons should also be ladies' flex and 60 or less grams. Your driver and woods should also be ladies' flex and 45 grams or less. ";
        }
        else if (this.attributes.speed > "75" && this.attributes.speed < "85") {
            speechOutput += "Your irons should also be senior flex and 60 grams. Your driver and woods should also be senior flex and 45 grams. ";
        }
        else if (this.attributes.speed > "86" && this.attributes.speed < "95" && this.attributes.club == "9" || "8") {
            speechOutput += "Your irons should also be regular flex and 95 grams. Your driver and woods should be stiff and 70 grams. ";
        }
        else if (this.attributes.speed > "86" && this.attributes.speed < "95" && this.attributes.club == "7" || "6") {
            speechOutput += "Your irons should also be regular flex and 85 grams. Your driver and woods should be 60 grams. ";
        }
        else if (this.attributes.speed > "86" && this.attributes.speed < "95" && this.attributes.club == "5" || "4") {
            speechOutput += "Your irons should also be regular flex and 75 grams. Your driver and woods should be 50 grams. ";
        }
        else if (this.attributes.speed > "96" && this.attributes.speed < "110" && this.attributes.club == "9" || "8") {
            speechOutput += "Your irons should also be stiff or firm and 100 to 110 grams. Your driver should also be stiff and 80 grams. ";
        }
        else if (this.attributes.speed > "111") {
            speechOutput += "They should also be extra stiff and 110 to 125 grams. Your driver should also be extra stiff and 90 grams. ";
        }
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
