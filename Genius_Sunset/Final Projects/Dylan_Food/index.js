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
      var speechOutput = "Sup! Here you can find recipes, take math practice for addition,subtraction, multiplication, "
      + "Rock Paper Scissors. Also you can play the guessing game and be complimented by Alexa ";
      this.response.speak(speechOutput).listen("What would you like to do?");
      this.emit(':responseReady');
    },
 
    'RecipeIntent': function () {
        var food = this.event.request.intent.slots.myfood.value;
        var speechOutput;
        if( food == "lemonade"){
            speechOutput = " Ok  to make lemonade you need water, sugar, and lemondes. With these recipes you Cut lemons in half. "
       + "Juice each lemon through a strainer into a large measuring cup. Keep juicing until you have "
       + "2 cups of lemon juice.Pour water into a medium-size saucepan over medium-high heat." 
       + "Stir in sugar. Continue cooking over heat until sugar is dissolved and liquid looks clear again. "
       + "Combine sugar solution with lemon juice. This is a lemonade concentrate. When ready to serve, " 
       + "add water to taste. ";
        }
        else if(food == "pasta"){
             speechOutput = "Cook pasta according to packaged directions."
        + "Melt butter in a medium sauce pan, add garlic."
        + "Cook for 1 minute over medium heat."
        + "Add flour and cook for an additional minute, stirring constantly."
        + "Add milk and broth, stirring constantly."
        + "Add parsley and parmesan cheese."
        + "Pour sauce over pasta and serve.";
        }
        else if(food == "pizza"){
         speechOutput = "In large bowl, dissolve yeast and sugar in water; let"
        + "stand for 5 minutes. Add oil and salt."
        + "Turn onto floured surface; knead until smooth and elastic, about 2-3 minutes. "
        + "Punch down dough; divide in half."
        + "Bake at 400° for 25-30 minutes or until crust is lightly browned.";
        }
        else if(food == "chicken soup "){
           speechOutput = "Put the chicken, carrots, celery"
           + "and onion in a large soup pot and cover with cold water."
           + "Heat and simmer, uncovered, until the chicken meat falls"
           + "off of the bones (skim off foam every so often)."
           + "Take everything out of the pot. Strain the broth.";
        }
        else if(food == "french fries"){
             speechOutput = "Slice potatoes into French fries, and place into"
             + "cold water so they won't turn brown while you prepare the oil."
             + "Heat oil in a large skillet over medium-high heat. While the oil" 
             + "is heating, sift the flour, garlic salt, onion salt, (regular) salt,"
             + "and paprika into a large bowl.";
        }
        else{
            speechOutput = "NaN";
        }
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },

    
      'QuestionAddIntent': function () {
        this.attributes.randomNumber1Add = Number(Math.floor(Math.random()*101));
        this.attributes.randomNumber2Add = Number(Math.floor(Math.random()*101));
        var speechOutput = " What is "  +  this.attributes.randomNumber1Add  +" + "+  this.attributes.randomNumber2Add  +  "?" ;
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },  
     'AnswerAddIntent': function () {
        var AddingAnswer = this.event.request.intent.slots.myAddingAnswer.value;
        var speechOutput;
        if( (this.attributes.randomNumber1Add  +  this.attributes.randomNumber2Add) == AddingAnswer){
            speechOutput = "Correct";
        }
        else{
            speechOutput = "SUCKER INCORRECT";
        }
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    }, 
     'QuestionSubtractIntent': function () {
        this.attributes.randomNumber1Subtract = Math.floor(Math.random()*101);
        this.attributes.randomNumber2Subtract = Math.floor(Math.random()*101);
        var speechOutput = "What's" + this.attributes.randomNumber1Subtract   + " - " +  this.attributes.randomNumber2Subtract + "?";
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'AnswerSubtractIntent': function () {
        var SubtractingAnswer = this.event.request.intent.slots.mySubtractingAnswer.value;
        var speechOutput;
        if(this.attributes.randomNumber1Subtract - this.attributes.randomNumber2Subtract == SubtractingAnswer){
            speechOutput = "Correct";
        }
        else{
            speechOutput = "Sucker INCORRECT";
        } 
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    }, 
     'QuestionMultiplicationIntent': function () {
        this.attributes.randomNumber1Multiplication = Math.floor(Math.random()*12);
        this.attributes.randomNumber2Multiplication  = Math.floor(Math.random()*12);
        var speechOutput = "What's" + this.attributes.randomNumber1Multiplication + " times " + this.attributes.randomNumber2Multiplication + "?";
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
     'AnswerMultiplicationIntent': function () {
        var MultiplicationAnswer = this.event.request.intent.slots.myMultiplicationAnswer.value;
        var speechOutput;
        var correctAnswer = this.attributes.randomNumber1Multiplication * this.attributes.randomNumber2Multiplication; 
        if(correctAnswer== MultiplicationAnswer){
            speechOutput = "Correct";
        }
        else{
            speechOutput = "Sucker INCORRECT";
        }
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
     },
      'RPSIntent': function () {
        var rps = ["rock", "paper", "scissors"];
        var computerChoice = rps[Math.floor (Math.random()*3)];
        var myChoice = this.event.request.intent.slots.myChoice.value;
        var speechOutput;
        if(myChoice == computerChoice){
            speechOutput = "It's a tie sucka";
        }
        else if(myChoice == "paper" && computerChoice == "rock" ||
                myChoice == "rock" && computerChoice == "scissors" ||
                myChoice == "scissors" && computerChoice == "paper"){
                    speechOutput = "You win BOI!";
                }
        else{
            speechOutput = "SUCKA!";
        }
        
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },

  'StartIntent': function () {
        this.attributes.Level = this.event.request.intent.slots.myLevel.value;
        if(this.attributes.Level=="easy"){
            this.attributes.randomNumber= Math.floor(Math.random()*10 + 1);
        }
        if(this.attributes.Level=="medium"){
            this.attributes.randomNumber= Math.floor(Math.random()*50 + 1);
        }
        if(this.attributes.Level=="hard"){
            this.attributes.randomNumber= Math.floor(Math.random()*100 + 1);
        }
         if(this.attributes.Level=="imposible"){
            this.attributes.randomNumber= Math.floor(Math.random()*99999999 + 1);
        }
        var speechOutput = "Ok! I've got my number! Try guessing!";
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
        
    },
        'GuessIntent': function () {
        var speechOutput;
        var playerGuess = this.event.request.intent.slots.myGuess.value;
        if (this.attributes.randomNumber == playerGuess){
            speechOutput = "Hoooooooray!! You've guessed it!";
        }
        else if (this.attributes.randomNumber < playerGuess){
            speechOutput = "You suck! The number is to high. Try again";
        }
        else if (this.attributes.randomNumber > playerGuess) {
            speechOutput = " Sucker! The number is so low. Try again";
            speechOutput = " DUDE AGAIN! YOU SUCK! Its to low" ;
            speechOutput = " You really do suck! TRY AGAIN";
            speechOutput = " I hate you! Try AGAIN";
        }
        var speechReprompt = "One more time baby!!!, this is my very first intent";
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
