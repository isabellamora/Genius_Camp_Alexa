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
      var speechOutput = "Do you want to know what house you are in? You will "
      + "have to take a test. Just ask what house you are in and you will get tested.";
      this.attributes.slytherin = 0;
      this.attributes.hufflepuff = 0 ;
      this.attributes.griffindor= 0 ;
      this.attributes.ravenclaw = 0 ;
      this.response.speak(speechOutput).listen("What would you like to do?");
      this.emit(':responseReady');
    },
    'HouseIntent': function () {
        //ask questions
        var speechOutput = "Now you will start your test. What House would you like to be in?";
        //var questionArray = ["What house would you like to be in?", "What house do you like the least?", + 
        //"If you were going to your most favorite place what would you?", "What is your most favorite color in the rainbow?" ];
        var speechReprompt = "What house would you like to be in?";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'firstAnswerIntent': function () {
      //get user answers
        var answer = this.event.request.intent.slots.myAnswer.value;
        var speechOutput;
        
        if(answer == "griffindor") {
            this.attributes.griffindor++;
        }else if(answer == "slytherin") {
            this.attributes.slytherin++;
        }else if(answer == "Hufflepuff") {
           this.attributes.hufflepuff++; 
        }else (answer == "ravenclaw");
            this.attributes.ravenclaw++;
        
        
        speechOutput = "Next Question, What is your least favorite house?";
        
         var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
        
    'secondAnswerIntent': function () {
      //get user answers
        var answer = this.event.request.intent.slots.myAnswer.value;
        //var speechOutput = '';
        
        if(answer == "griffindor") {
            this.attributes.griffindor--;
        }else if(answer == "slytherin") {
            this.attributes.slytherin--;
        }else if(answer == "Hufflepuff") {
           this.attributes.Hufflepuff--; 
        }else  {
            this.attributes.ravenclaw--;
    }
            
        var speechOutput = "Next Question, what is your most favorite color in the rainbow?";
        var speechReprompt ='let me say this again, this is my very first intent';
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'thirdAnswerIntent': function () {
      //get user answers
        var answer = this.event.request.intent.slots.myAnswer.value;
        var speechOutput;
        
        if(answer == "red") {
            this.attributes.griffindor++;
        }else if(answer == "orange") {
            this.attributes.griffindor++;
        }else if(answer == "yellow") {
           this.attributes.Hufflepuff++; 
        }else if(answer == "green") {
            this.attributes.slytherin++;
        }else if (answer == "blue") {
            this.attributes.Ravenclaw;
        }else if(answer == "purple") {
            this.attributes.Ravenclaw++;
        }
        speechOutput = "Next Question If you were going to your most favorite place, what would you do?"
        + "(Cry happy tears, have a big fat smile on your face, do nothing, or something else.";
         var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
        
    'fourthAnswerIntent': function () {
      //get user answers
        var answer = this.event.request.intent.slots.myAnswer.value;
        var speechOutput;
        
        if(answer == "cry happy tears") {
            this.attributes.hufflepuff++;
        }else if(answer == "have a big fat smile on your face") {
            this.attributes.ravenclaw++;
        }else if(answer == "do nothing") {
           this.attributes.slythrin--; 
        }else  {
            this.attributes.griffindor--;
    }
            
            speechOutput = "Next Question If you were going to your most favorite place, what would you do?"
        + "(Cry happy tears, have a big fat smile on your face, do nothing, or something else.";
             var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    
        'AnswerIntent': function () {
            //say house
            var speechOutput;
            
            if (this.attributes.Griffindor>this.attributes.HufflePuff && this.attributes.Griffindor>this.attributes.Slythrin && this.attributes.Griffindor>this.attributes.Ravenclaw) {
                speechOutput = "Griffindor";
            }
            else if(this.attributes.HufflePuff>this.attributes.Slythrin && this.attributes.HufflePuff > this.attributes.Ravenclaw) {
                
            }
            else if(this.attributes.Slythrin>this.attributes.Ravenclaw)

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
