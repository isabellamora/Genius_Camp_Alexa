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
        this.attributes.scores = [0, 0, 0, 0];
        this.attributes.scoreMap = {"A": 0, "B": 1, "C": 2, "D": 3};
        this.attributes.houseList = ["Gryffindor", "Ravenclaw", "Slytherin", "Hufflepuff"];
        
      var speechOutput = "Welcome to the Sorting Hat Quiz. "
      + " You will need to answer some questions to determine which house you are in."
      + " The first question is";
      
      this.attributes.count = 0;
    this.attributes.answerArray = [" What would you save from a burning house, A: A valuable picture of your family. "
    + " B: a box filled with ancient rules. " + " C: Your chest of gold. " + " D: Your family member. ",
    
    " What would you like to be remembered as, A: Brave B: Wise C: Bold D: Loyal. ",
    
    " What pet would you bring to Hogwarts? A: Owl B: Cat C: Rat D: Toad. ,",
    
    " You have four goblets to choose from, which one would you choose."
    + " A: The plain goblet B: The silver goblet C: The shiny black goblet D: The gold goblet. ,",
    
    " If you were to choose a potion which potion would you choose. A: A glory potion B: A wisdom potion" 
   +  " C: A power potion D: A kind potion.",];
    for (let i = this.attributes.answerArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.attributes.answerArray[i], this.attributes.answerArray[j]] = [this.attributes.answerArray[j], 
        this.attributes.answerArray[i]];
    }
      speechOutput += this.attributes.answerArray[this.attributes.count++];
      this.response.speak(speechOutput).listen("What would you like to do?");
      this.emit(':responseReady');
    },
    'AnswerIntent': function () {
        var myAnswer = this.event.request.intent.slots.myAnswer.value;
        myAnswer = myAnswer.toUpperCase();
        var speechOutput;
        if(this.attributes.count >= this.attributes.answerArray.length) {//count is the current index of the question array
            var max = Math.max(...this.attributes.scores);
            var maxIndex = this.attributes.scores.indexOf(max);
            speechOutput = " You have finished the quiz. "
            + " Based on your answers to the quiz the sorting hat has picked you to be in the house of " + this.attributes.houseList[maxIndex];
        }
        else {
            this.attributes.scores[this.attributes.scoreMap[myAnswer]]++;
            speechOutput = this.attributes.answerArray[this.attributes.count++];
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
