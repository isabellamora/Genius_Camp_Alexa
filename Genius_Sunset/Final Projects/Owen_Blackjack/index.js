'use strict';
const Alexa = require('alexa-sdk');

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this: const APP_ID = 'amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1';
const APP_ID = undefined;

//Alexa will speak out the help message when a user says help
//For an idea of what you should say
//-> "You can say tell me a space fact, or, you can say exit... What can I help you with?"
const HELP_MESSAGE = 'Saying hit or stand allows you to draw or stop drawing a card in blackjack.';
const HELP_REPROMPT = 'Saying hit or stand allows you to draw or stop drawing a card in blackjack.';

//Alexa will speak out the stop message when the program ends
const STOP_MESSAGE = 'Goodbye! Hope to see you soon!';
const FALLBACK_MESSAGE = 'Sorry! But I dont recognize that';

const handlers = {
    'LaunchRequest': function () {
        var speechOutput = "Welcome to Blackjack! A fun game of chance. Say start when you are ready.";
        this.response.speak(speechOutput).listen("Say start when you are ready.");
        this.emit(':responseReady');
    },
    'startIntent': function () {
        this.attributes.shuffleSound = "<audio src='https://s3.amazonaws.com/ask-soundlibrary/office/amzn_sfx_typing_typewriter_01.mp3'/>";
        
        this.attributes.cards = ["ace", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king"];
        
        this.attributes.randomNum1 = Math.floor(Math.random() * this.attributes.cards.length);
        this.attributes.dealerCardOne = this.attributes.cards[this.attributes.randomNum1];
        
        this.attributes.randomNum2 = Math.floor(Math.random() * this.attributes.cards.length);
        this.attributes.dealerCardTwo = this.attributes.cards[this.attributes.randomNum2];
        
        this.attributes.dealerTotal = this.attributes.randomNum1 + this.attributes.randomNum2 + 2;
        if (this.attributes.dealerCardOne == this.attributes.cards[10]){
            this.attributes.dealerTotal -= 1;
        }
        else if (this.attributes.dealerCardOne == this.attributes.cards[11]){
            this.attributes.dealerTotal -= 2;
        }
        else if (this.attributes.dealerCardOne == this.attributes.cards[12]){
            this.attributes.dealerTotal -= 3;
        }
        else if (this.attributes.dealerCardTwo == this.attributes.cards[10]){
            this.attributes.dealerTotal -= 1;
        }
        else if (this.attributes.dealerCardTwo == this.attributes.cards[11]){
            this.attributes.dealerTotal -= 2;
        }
        else if (this.attributes.dealerCardTwo == this.attributes.cards[12]){
            this.attributes.dealerTotal -= 3;
        }
        
        this.attributes.randomNum3 = Math.floor(Math.random() * this.attributes.cards.length);
        this.attributes.playerCardOne = this.attributes.cards[this.attributes.randomNum3];
        
        this.attributes.randomNum4 = Math.floor(Math.random() * this.attributes.cards.length);
        this.attributes.playerCardTwo = this.attributes.cards[this.attributes.randomNum4];
        
        this.attributes.playerTotal = this.attributes.randomNum3 + this.attributes.randomNum4 + 2;
        if (this.attributes.playerCardOne == this.attributes.cards[10]){
            this.attributes.playerTotal -= 1;
        }
        else if (this.attributes.playerCardOne == this.attributes.cards[11]){
            this.attributes.playerTotal -= 2;
        }
        else if (this.attributes.playerCardOne == this.attributes.cards[12]){
            this.attributes.playerTotal -= 3;
        }
        if (this.attributes.playerCardTwo == this.attributes.cards[10]){
            this.attributes.playerTotal -= 1;
        }
        else if (this.attributes.playerCardTwo == this.attributes.cards[11]){
            this.attributes.playerTotal -= 2;
        }
        else if (this.attributes.playerCardTwo == this.attributes.cards[12]){
            this.attributes.playerTotal -= 3;
        }
        
        var speechOutput = "The dealer has one face down card and the card " + this.attributes.dealerCardOne + ". You have the cards " + this.attributes.playerCardOne + " and " + this.attributes.playerCardTwo + ". Your total is " + this.attributes.playerTotal + ". Would you like to hit or stand?";
        var speechReprompt = "Would you like to hit or stand?";
        
        if ((this.attributes.dealerCardOne == this.attributes.cards[0] && this.attributes.dealerTotal == 11) || (this.attributes.dealerCardTwo == this.attributes.cards[0] && this.attributes.dealerTotal == 11)){
            speechOutput = "The dealer has blackjack and wins. Would you like to play again?";
            speechReprompt = "Woud you like to play again?";
        }
        else if ((this.attributes.playerCardOne == this.attributes.cards[0] && this.attributes.playerTotal == 11) || (this.attributes.playerCardTwo == this.attributes.cards[0] && this.attributes.playerTotal == 11)){
            speechOutput = "The player has blackjack and wins. Would you like to play again?";
            speechReprompt = "Woud you like to play again?";
        }
        this.response.speak(this.attributes.shuffleSound + speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'hitIntent': function () {
        this.attributes.randomNum5 = Math.floor(Math.random() * this.attributes.cards.length);
        this.attributes.nextCard = this.attributes.cards[this.attributes.randomNum5];
        if (this.attributes.nextCard == this.attributes.cards[10]){
            this.attributes.playerTotal -= 1;
        }
        else if (this.attributes.nextCard == this.attributes.cards[11]){
            this.attributes.playerTotal -= 2;
        }
        else if (this.attributes.nextCard == this.attributes.cards[12]){
            this.attributes.playerTotal -= 3;
        }

        this.attributes.playerTotal += this.attributes.randomNum5 + 1;
        
        var speechOutput = "You have drawn the card " + this.attributes.nextCard + ". And you have a total of " + this.attributes.playerTotal + ". Would you like to hit or stand?";
        var speechReprompt = "Would you like to hit or stand?";
        
        if (this.attributes.playerTotal > 21) {
            speechOutput = "You have drawn the card " + this.attributes.nextCard + ". You are bust. Dealer wins. Would you like to play again?";
        }

        this.response.speak(this.attributes.shuffleSound + speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'standIntent': function () {
        var speechOutput = "The dealer has drawn the cards";
        var speechReprompt;
        
        var flag = true;
        if (this.attributes.dealerTotal >= 17) {
            flag = false;
        }
        
        while (this.attributes.dealerTotal < 17 && flag) {
            this.attributes.randomNum6 = Math.floor(Math.random() * this.attributes.cards.length);
            this.attributes.nextDealerCard = this.attributes.cards[this.attributes.randomNum6];
            speechOutput += " " + this.attributes.nextDealerCard;
            if (this.attributes.nextDealerCard == this.attributes.cards[10]){
                this.attributes.dealerTotal -= 1;
            }
            else if (this.attributes.nextDealerCard == this.attributes.cards[11]){
                this.attributes.dealerTotal -= 2;
            }
            else if (this.attributes.nextDealerCard == this.attributes.cards[12]){
                this.attributes.dealerTotal -= 3;
            }

            this.attributes.dealerTotal += this.attributes.randomNum6 + 1;
        }
        speechOutput += ". His face up card was " + this.attributes.dealerCardOne + ". And his face down card was " + this.attributes.dealerCardTwo + ". The dealer's total is " + this.attributes.dealerTotal + ".";
        
        if (this.attributes.dealerTotal >= 17 && flag == false) {
            speechOutput = "The dealer didn't draw any cards. The dealer stands on " + this.attributes.dealerTotal + ". His face down card was " + this.attributes.dealerCardTwo + ".";
        }
        
        if (this.attributes.dealerTotal == 21 && this.attributes.playerTotal !== 21) {
            speechOutput += " The player has lost. Would you like to play again?";
            speechReprompt = "Would you like to play again?";
        }
        else if (this.attributes.dealerTotal == 21 && this.attributes.playerTotal == 21) {
            speechOutput += " The player also has 21. It is a push. Would you like to play again?";
            speechReprompt = "Would you like to play again?";
        }
        else if (this.attributes.dealerTotal > 21) {
            speechOutput += " The dealer has bust. The player wins. Would you like to play again?";
            speechReprompt = "Would you like to play again?";
        }
        else if (this.attributes.dealerTotal == this.attributes.playerTotal){
            speechOutput += " It is a push. Neither wins. Would you like to play again?";
            speechReprompt = "Would you like to play again?";
        }
        else if (this.attributes.dealerTotal > this.attributes.playerTotal){
            speechOutput += " The dealer wins. Would you like to play again?";
            speechReprompt = "Would you like to play again?";
        }
        else if (this.attributes.dealerTotal < this.attributes.playerTotal){
            speechOutput += " The dealer loses and the player wins. Would you like to play again?";
            speechReprompt = "Would you like to play again?";
        }
        
        this.response.speak(this.attributes.shuffleSound + speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'yesPlayAgainIntent': function () {
        var speechOutput = "To play again say start blackjack.";
        var speechReprompt = "To play again say start blackjack.";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'directionsIntent': function () {
        var speechOutput = "The rules are simple. 1 the objective of the game is to get as close to 21 as possible."
        + " 2 you can hit to draw a card, and stand to stop drawing."
        + " 3 at the end, your cards are totaled for a number."
        + " 4 if you get over 21, you bust and you lose."
        + " 5 the dealer has one card that is shown and one card that is hid."
        + " 6 the winner is determined by who is closest to 21."
        + " 7 if you have a card with a ten value and a ace, it is called blackjack and you instantly win unless the dealer has blackjack, and it is a tie."
        + " 8 every card has its face value and royales are worth ten."
        + " 9 have fun!";
        var speechReprompt = "To play again say start blackjack.";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    
//Amazon Built In Intents - DO NOT EDIT
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
