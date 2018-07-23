'use strict';
const Alexa = require('alexa-sdk');

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this: const APP_ID = 'amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1';
const APP_ID = undefined;

//Alexa will speak out the help message when a user says help
//For an idea of what you should say
//-> "You can say tell me a space fact, or, you can say exit... What can I help you with?"
const HELP_MESSAGE = 'You can ask me for math practice and a calculator. You can also ask me how to make lemonade or pasta. Also ask for rock paper scissors!';
const HELP_REPROMPT = 'What can I help you with?';

//Alexa will speak out the stop message when the program ends
const STOP_MESSAGE = 'Goodbye!';
const FALLBACK_MESSAGE = 'I dont recognize that';

const handlers = {
    'LaunchRequest': function () {
      var speechOutput = "Welcome! You can ask me for math practice and a calculator. You can also ask me how to make lemonade or pasta. Also ask for rock paper scissors! Say help for help";
      this.response.speak(speechOutput).listen("What would you like to do?");
      this.emit(':responseReady');
    },
    'additionIntent': function () {
        var firstAddNum = Number(this.event.request.intent.slots.firstNumberAdding.value);
        var secondAddNum = Number(this.event.request.intent.slots.secondNumberAdding.value);        
        var addAnswer = firstAddNum + secondAddNum;
        var speechOutput = firstAddNum + " plus " + secondAddNum + " equals " + addAnswer + ".";
        var speechReprompt = "Say help if you need help and say stop if you want me to stop";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'subtractionIntent': function () {
        var firstSubNum = Number(this.event.request.intent.slots.firstNumberSubtracting.value);
        var secondSubNum = Number(this.event.request.intent.slots.secondNumberSubtracting.value);        
        var subAnswer = firstSubNum - secondSubNum;
        var speechOutput = firstSubNum + " minus " + secondSubNum + " equals " + subAnswer + ".";
        var speechReprompt = "Say help if you need help and say stop if you want me to stop";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'multiplicationIntent': function () {
        var firstMulNum = Number(this.event.request.intent.slots.firstNumberMultiplying.value);
        var secondMulNum = Number(this.event.request.intent.slots.secondNumberMultiplying.value);        
        var mulAnswer = firstMulNum * secondMulNum;
        var speechOutput = firstMulNum + " times " + secondMulNum + " equals " + mulAnswer + ".";
        var speechReprompt = "Say help if you need help and say stop if you want me to stop";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'divisionIntent': function () {
        var firstDivNum = Number(this.event.request.intent.slots.firstNumberDivision.value);
        var secondDivNum = Number(this.event.request.intent.slots.secondNumberDivision.value);        
        var divAnswer = firstDivNum / secondDivNum;
        var speechOutput = firstDivNum + " divided " + secondDivNum + " equals " + divAnswer + ".";
        var speechReprompt = "Say help if you need help and say stop if you want me to stop";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'QuestionAddIntent': function () {
        this.attributes.randomNumber1Add = Math.floor(Math.random()*100);
        this.attributes.randomNumber2Add = Math.floor(Math.random()*100);
        var speechOutput = "Whats " + this.attributes.randomNumber1Add + " + " + this.attributes.randomNumber2Add + "?";
        var speechReprompt = "Say help if you need help and say stop if you want me to stop";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'AnswerAddIntent': function () {
        var addAnswer = this.event.request.intent.slots.myAddingAnswer.value;
        var speechOutput;
        if(this.attributes.randomNumber1Add + this.attributes.randomNumber2Add == addAnswer){
            speechOutput = "Correct!";
        }
        else{
            speechOutput = "Wrong";
        }
        var speechReprompt = "Say help if you need help and say stop if you want me to stop";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'QuestionSubtractIntent': function () {
        this.attributes.randomNumber1Subtract = Math.floor(Math.random()*100);
        this.attributes.randomNumber2Subtract = Math.floor(Math.random()*100);
        var speechOutput = "Whats " + this.attributes.randomNumber1Subtract + " minus " + this.attributes.randomNumber2Subtract + "?";
        var speechReprompt = "Say help if you need help and say stop if you want me to stop";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'AnswerSubtractIntent': function () {
        var SubtractingAnswer = this.event.request.intent.slots.mySubtractingAnswer.value;
        var speechOutput;
        if(this.attributes.randomNumber1Subtract - this.attributes.randomNumber2Subtract == SubtractingAnswer){
            speechOutput = "Correct!";
        }
        else{
            speechOutput = "Wrong";
        }
        var speechReprompt = "Say help if you need help and say stop if you want me to stop";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'QuestionMultiplyIntent': function () {
        this.attributes.randomNumber1Multiply = Math.floor(Math.random()*12);
        this.attributes.randomNumber2Multiply = Math.floor(Math.random()*12);
        var speechOutput = "Whats " + this.attributes.randomNumber1Multiply + " times " + this.attributes.randomNumber2Multiply + "?";
        var speechReprompt = "Say help if you need help and say stop if you want me to stop";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'AnswerMultiplyIntent': function () {
        var MultiplyAnswer = this.event.request.intent.slots.myMultiplyingAnswer.value;
        var speechOutput;
        if(this.attributes.randomNumber1Multiply * this.attributes.randomNumber2Multiply == MultiplyAnswer){
            speechOutput = "Correct!";
        }
        else{
            speechOutput = "Wrong";
        }
        var speechReprompt = "Say help if you need help and say stop if you want me to stop";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'RecipeIntent': function () {
        var recipe = this.event.request.intent.slots.myRecipe.value;
        var speechOutput;
        if (recipe == "pasta"){
            speechOutput = "You will need, one pound of  penne pasta, 3 TB butter, 2 tsp. minced garlic,"
            +    "3 tablespoons flour, 1 cup chicken broth, 1 cup milk, 2 teaspoons dried parsley, half a cup grated parmesan cheese,"
            +    " and salt and pepper to taste. Cook pasta according to packaged directions. Melt butter in a medium sa"
            +    "uce pan, add garlic. Cook for 1 minute over medium heat. Add flour and cook for an additional minute,"
            +    "stirring constantly. Add milk and broth, stirring constantly. Cook until sauce boils and thickens."
            +    "Add parsley and parmesan cheese. Add desired salt and pepper. Continue stirring until cheese has melted."
            +    "Serve immediately. Pour sauce over pasta and serve.";
        }
        else if (recipe == "lemonade"){
            speechOutput = "You will need, lemons, sugar, a pitcher, and water. First, get 1 cup of fresh squeezed lemon juice. It has the most flavor. Then, get 1 cup of sugar. Pour them both in the pitcher. Then get 6 cups of water and pour it in the pitcher. Finally, mix and enjoy!";
        }
        else{
            speechOutput = "I do not have that recipe.";
        }
        var speechReprompt = "Say help if you need help and say stop if you want me to stop";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'RPSIntent': function () {
        var speechOutput;     
        var myChoice = this.event.request.intent.slots.myChoice.value;
        var results = ["tie", "draw"];
        var gresults = ["You win!", "Great job!", "You're good at this."];
        var rps = ["rock", "paper", "scissors"];
        var computerChoice = rps[Math.floor(Math.random()*3)];
        if(myChoice == computerChoice) {
            speechOutput = "It's a " + results[Math.floor(Math.random()*2)];
        }
        else if(myChoice == "paper" && computerChoice == "rock" || myChoice == "rock" && computerChoice == "scissors" || myChoice == "scissors" && computerChoice == "paper"){
            speechOutput = gresults[Math.floor(Math.random()*3)];
        }
        else{
            speechOutput = "You lose.";
        }
        this.response.speak(speechOutput).listen("");
        this.emit(':responseReady');
    },
    'randomIntent': function () {
        var operators = ["times", "minus", "plus"];
        this.attributes.value = Math.floor(Math.random()*3);
        this.attributes.thing = operators[this.attributes.value];
        this.attributes.randomNumber1Random = Math.floor(Math.random()*100);
        this.attributes.randomNumber2Random = Math.floor(Math.random()*100);
        var speechOutput = "Whats " + this.attributes.randomNumber1Random + " " + this.attributes.thing + " " + this.attributes.randomNumber2Random + "?";
        var speechReprompt = "Say help if you need help and say stop if you want me to stop";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },    
    'answerRandomIntent': function () {
        var userChoice = this.event.request.intent.slots.myAnswer.value;
        var speechOutput;        
        if (this.attributes.value == 0){
            if (this.attributes.randomNumber1Random * this.attributes.randomNumber2Random == userChoice){
                speechOutput = "Correct!";
            }
            else{
                speechOutput = "Wrong";
            }
            
        }
        else if (this.attributes.value == 1){
            if (this.attributes.randomNumber1Random - this.attributes.randomNumber2Random == userChoice){
                speechOutput = "Correct!";
            }
            else{
                speechOutput = "Wrong";
            }
            
        }
        else if (this.attributes.value == 2){
            if (this.attributes.randomNumber1Random + this.attributes.randomNumber2Random == userChoice){
                speechOutput = "Correct!";
            }
            else{
                speechOutput = "Wrong";
            }
            
        
        }
        var speechReprompt = "Say help if you need help and say stop if you want me to stop";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },    
    'RPSIntroIntent': function () {
        var speechOutput = "To play, say I choose rock, paper, or scissors.";
        var speechReprompt = "Say help if you need help and say stop if you want me to stop";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'MathIntent': function () {
        var speechOutput = "Say, give me an addition question, or a subraction, or if you want a random, just say give me a math question. Answers must be like the sum is,  or the difference is , or if it is random, just say the answer is.";
        var speechReprompt = "Say help if you need help and say stop if you want me to stop";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },    
    'calculatorIntent': function () {
        var speechOutput = "To use the calculator, for example, say, whats one plus one, or whats 5 times 5, etcetera.";
        var speechReprompt = "Say help if you need help and say stop if you want me to stop";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },    
    'thankIntent': function () {
        var speechOutput = "Thank you.";
        var speechReprompt = "Say help if you need help and say stop if you want me to stop";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'hateIntent': function () {
        var speechOutput = "Thanks for telling me. I'll work harder in the future.";
        var speechReprompt = "Say help if you need help and say stop if you want me to stop";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'hiIntent': function () {
        var speechOutput = "Hi.";
        var speechReprompt = "Say help if you need help and say stop if you want me to stop";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },    
    'upIntent': function () {
        var speechOutput = "Everything's going good, thanks.";
        var speechReprompt = "Say help if you need help and say stop if you want me to stop";
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
            speechOutput = "Correct!";
        }
        else{
            speechOutput = "Wrong";
        }
        var speechReprompt = "Say help if you need help and say stop if you want me to stop";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'QuestionSubtractIntent': function () {
        this.attributes.randomNumber1Subtract = Math.floor(Math.random()*100);
        this.attributes.randomNumber2Subtract = Math.floor(Math.random()*100);
        var speechOutput = "Whats " + this.attributes.randomNumber1Subtract + " minus " + this.attributes.randomNumber2Subtract + "?";
        var speechReprompt = "Say help if you need help and say stop if you want me to stop";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'AnswerSubtractIntent': function () {
        var SubtractingAnswer = this.event.request.intent.slots.mySubtractingAnswer.value;
        var speechOutput;
        if(this.attributes.randomNumber1Subtract - this.attributes.randomNumber2Subtract == SubtractingAnswer){
            speechOutput = "Correct!";
        }
        else{
            speechOutput = "Wrong";
        }
        var speechReprompt = "Say help if you need help and say stop if you want me to stop";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'QuestionMultiplyIntent': function () {
        this.attributes.randomNumber1Multiply = Math.floor(Math.random()*12);
        this.attributes.randomNumber2Multiply = Math.floor(Math.random()*12);
        var speechOutput = "Whats " + this.attributes.randomNumber1Multiply + " times " + this.attributes.randomNumber2Multiply + "?";
        var speechReprompt = "Say help if you need help and say stop if you want me to stop";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'AnswerMultiplyIntent': function () {
        var MultiplyAnswer = this.event.request.intent.slots.myMultiplyingAnswer.value;
        var speechOutput;
        if(this.attributes.randomNumber1Multiply * this.attributes.randomNumber2Multiply == MultiplyAnswer){
            speechOutput = "Correct!";
        }
        else{
            speechOutput = "Wrong";
        }
        var speechReprompt = "Say help if you need help and say stop if you want me to stop";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'RecipeIntent': function () {
        var recipe = this.event.request.intent.slots.myRecipe.value;
        var speechOutput;
        if (recipe == "pasta"){
            speechOutput = "You will need, one pound of  penne pasta, 3 TB butter, 2 tsp. minced garlic,"
            +    "3 tablespoons flour, 1 cup chicken broth, 1 cup milk, 2 teaspoons dried parsley, half a cup grated parmesan cheese,"
            +    " and salt and pepper to taste. Cook pasta according to packaged directions. Melt butter in a medium sa"
            +    "uce pan, add garlic. Cook for 1 minute over medium heat. Add flour and cook for an additional minute,"
            +    "stirring constantly. Add milk and broth, stirring constantly. Cook until sauce boils and thickens."
            +    "Add parsley and parmesan cheese. Add desired salt and pepper. Continue stirring until cheese has melted."
            +    "Serve immediately. Pour sauce over pasta and serve.";
        }
        else if (recipe == "lemonade"){
            speechOutput = "You will need, lemons, sugar, a pitcher, and water. First, get 1 cup of fresh squeezed lemon juice. It has the most flavor. Then, get 1 cup of sugar. Pour them both in the pitcher. Then get 6 cups of water and pour it in the pitcher. Finally, mix and enjoy!";
        }
        else{
            speechOutput = "I do not have that recipe.";
        }
        var speechReprompt = "Say help if you need help and say stop if you want me to stop";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'RPSIntent': function () {
        var speechOutput;     
        var myChoice = this.event.request.intent.slots.myChoice.value;
        var results = ["tie", "draw"];
        var gresults = ["You win!", "Great job!", "You're good at this."];
        var rps = ["rock", "paper", "scissors"];
        var computerChoice = rps[Math.floor(Math.random()*3)];
        if(myChoice == computerChoice) {
            speechOutput = "It's a " + results[Math.floor(Math.random()*2)];
        }
        else if(myChoice == "paper" && computerChoice == "rock" || myChoice == "rock" && computerChoice == "scissors" || myChoice == "scissors" && computerChoice == "paper"){
            speechOutput = gresults[Math.floor(Math.random()*3)];
        }
        else{
            speechOutput = "You lose.";
        }
        this.response.speak(speechOutput).listen("");
        this.emit(':responseReady');
    },
    'randomIntent': function () {
        var operators = ["times", "minus", "plus"];
        this.attributes.value = Math.floor(Math.random()*3);
        this.attributes.thing = operators[this.attributes.value];
        this.attributes.randomNumber1Random = Math.floor(Math.random()*100);
        this.attributes.randomNumber2Random = Math.floor(Math.random()*100);
        var speechOutput = "Whats " + this.attributes.randomNumber1Random + " " + this.attributes.thing + " " + this.attributes.randomNumber2Random + "?";
        var speechReprompt = "Say help if you need help and say stop if you want me to stop";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },    
    'answerRandomIntent': function () {
        var userChoice = this.event.request.intent.slots.myAnswer.value;
        var speechOutput;        
        if (this.attributes.value == 0){
            if (this.attributes.randomNumber1Random * this.attributes.randomNumber2Random == userChoice){
                speechOutput = "Correct!";
            }
            else{
                speechOutput = "Wrong";
            }
            
        }
        else if (this.attributes.value == 1){
            if (this.attributes.randomNumber1Random - this.attributes.randomNumber2Random == userChoice){
                speechOutput = "Correct!";
            }
            else{
                speechOutput = "Wrong";
            }
            
        }
        else if (this.attributes.value == 2){
            if (this.attributes.randomNumber1Random + this.attributes.randomNumber2Random == userChoice){
                speechOutput = "Correct!";
            }
            else{
                speechOutput = "Wrong";
            }
            
        
        }
        var speechReprompt = "Say help if you need help and say stop if you want me to stop";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },    
    'RPSIntroIntent': function () {
        var speechOutput = "To play, say I choose rock, paper, or scissors.";
        var speechReprompt = "Say help if you need help and say stop if you want me to stop";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'MathIntent': function () {
        var speechOutput = "Say, give me an addition question, or a subraction, or if you want a random, just say give me a math question. Answers must be like the sum is,  or the difference is , or if it is random, just say the answer is.";
        var speechReprompt = "Say help if you need help and say stop if you want me to stop";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },    
    'calculatorIntent': function () {
        var speechOutput = "To use the calculator, for example, say, whats one plus one, or whats 5 times 5, etcetera.";
        var speechReprompt = "Say help if you need help and say stop if you want me to stop";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },    
    'thankIntent': function () {
        var speechOutput = "Thank you.";
        var speechReprompt = "Say help if you need help and say stop if you want me to stop";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'hateIntent': function () {
        var speechOutput = "Thanks for telling me. I'll work harder in the future.";
        var speechReprompt = "Say help if you need help and say stop if you want me to stop";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'hiIntent': function () {
        var speechOutput = "Hi.";
        var speechReprompt = "Say help if you need help and say stop if you want me to stop";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },    
    'upIntent': function () {
        var speechOutput = "Everything's going good, thanks.";
        var speechReprompt = "Say help if you need help and say stop if you want me to stop";
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
