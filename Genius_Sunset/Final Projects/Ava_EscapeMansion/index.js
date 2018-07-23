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
const FALLBACK_MESSAGE = 'I dont understand, you can maybe check your spelling, or use a different command';

const handlers = {
    'LaunchRequest': function () {
        this.attributes.room = 1;
        this.attributes.tied = true;
        this.attributes.redkey = false;
        this.attributes.yellowkey = false;
        this.attributes.chair = false;
        this.attributes.glasstable = false;
        this.attributes.crowbar = false;
        this.attributes.sledgehammer = false;
        
      var speechOutput = "December 25,  1973. You were attending a Christmas Party, you arrived with a group of your friends." 
      + " It was a very crowded party, your friends were dancing and talking beside the grand Christmas tree."
      + " You were very overwhelmed, so you slowly walked away from everyone."
      + " Once you got out of the room, you ran towards the bathroom. On your way to the restroom you met a strange cloaked figure."
      + " They came over to you and then you lost consciousness <break time='3s'/>"
      + ". You are in a dark room, You can see a bed, a candle on a bedside table, and a rusty stool. Your arms are tied to a chair with a strong rope." 
      + " You look up and see a vent, to your right you can see a sharp object, to the left you see a door, but you need a key." 
      + " You need to get the rope off of you and get out of the room.";
      this.response.speak(speechOutput).listen("What would you like to do?");
      this.emit(':responseReady');
    },
    'stoolIntent': function () {
        //if not tied, if in first room
        //climb in vent
        //die
        
        if (this.attributes.tied != true && this.attributes.room == 1) {
          var speechOutput = " You got on the stool, went into the vent, then fell. You can reopen this game to try again!";
        }
        
        if(this.attributes.tied == true) {
            speechOutput = "You're tied up!";
        }
        if(this.attributes.room != 1) {
            speechOutput = "You aren't in a room with a stool";
        }
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
     'bedIntent': function () {
         //if not tied, if in first room
         //flavor text
         //nothing happens
         var speechOutput;
         if(this.attributes.room == 1) {
             if(this.attributes.tied != true){
                speechOutput = " There is nothing there";
            }
            else {
                speechOutput = " You are tied up!";
            }
         }
         else {
             speechOutput = " You are not in Room 1";
         }
         
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
     'tableIntent': function () {
         var speechOutput;
         if(this.attributes.room == 1) {
             if (this.attributes.tied == false) {
                 //check table
                 if(this.attributes.redkey == false) {
                     //find key
                     speechOutput = " You found the key";
                     this.attributes.redkey = true;
                 }
                 else {
                     //already have key
                     speechOutput = " You already have the key";
                 }
             }
             else {
                 speechOutput = " You can't reach the key, since you are tied";
             }
         }
         else{
             speechOutput = " I don't regognize that command";
         }
            
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
     'cutIntent': function () {
         //they cut themselves and die
         //end game
        var speechOutput;
        if(this.attributes.tied) {
            speechOutput = "You cut yourself and died, open this game to try again";
        }
        else {
            speechOutput = "not recognized";
        }
        //reset game
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
     'burnIntent': function () {
         //they burn the rope
         //set tied up to false
         var speechOutput;
         if(this.attributes.tied) {
             speechOutput = "You burned the rope!";
            this.attributes.tied = false;
         }
         else {
             speechOutput = "not recognized";
         }
        
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
     'doorIntent': function () {
         var speechOutput = "This is my very first intent";
         if(this.attributes.room ==1) {
             if(this.attributes.redkey) {
                 speechOutput = " You opened the door, and moved to the next room.";
                 speechOutput += "  Well done! You got to the next room. This room has a bookshelf, it is a fairly small room."
                 + " There is a grand chair on the side of the fireplace, You can see a round glass table, a grand bookshelf with a large book. "
                 + " To the right is a door. You are able to move around and find objects to climb on ";
                 this.attributes.room = 2;
             }
             else {
                 speechOutput = "The door is locked";
             }
         }
         else if(this.attributes.room == 2){
             if(this.attributes.yellowkey) {
                 speechOutput = " You opened the door, and moved to the next room.";
                 speechOutput += "  Well done! It seems as if you are now in the room, before the exit of the home." 
                 + " You can see a crowbar on a coat hanger and you can see the exit to leave in front of you! "
                 + " You can also see a sledgehammer. Which one do you want to use to get out?";
                 this.attributes.room = 3;
             }
             else {
                 speechOutput = "The door is locked";
             }
         }
         else {
             if(this.attributes.crowbar) {
                 speechOutput = " You opened the door, and escaped.";
                 speechOutput += " After you left the mansion you ran back to your family, "
                 + " you didn’t know where you were but you managed to make it back. Once you got back, "
                 + " your parents had tears in their eyes, you were confused why they were so relieved since you had been gone for only a few hours. "
                 + " Your parents explained that you had been missing for over a year! "
                 + " You knew that you were not missing for that long. After 5 years you saw on a newspaper that the cloaked ‘man’ "
                 + " was a hardened criminal who kidnapped people for years." 
                 + " He would force people live a miserable life in the mansion once they got caught trying to leave.";
             }
             else if(this.attributes.sledgehammer == true) {
                 
                 speechOutput = "You got CAUGHT!";
                 speechOutput += " The cloaked man grabbed you from behind after you created a ruckus with the sledgehammer! "
                 + " He dragged you back into a cell-like prison where you would eventually shrivel away, "
                 + " you never got to see your family and the cloaked man never got caught.";
             }
             else {
                 speechOutput = " The door is locked!";
             }
         }
        
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'bookIntent' : function () {
         var speechOutput;
         if(this.attributes.room == 2) {
             if (this.attributes.chair != false) {
                 //check table
                 if(this.attributes.yellowkey == false) {
                     //find key
                     speechOutput = " You found the key";
                     this.attributes.yellowkey = true;
                 }
                 else {
                     //already have key
                     speechOutput = " You already have the key";
                 }
             }
             else if(this.attributes.glasstable) {
                 speechOutput = " You died! Because you stepped on glass! You can reopen the game to try again!";
             }
             else {
                 speechOutput = " You can't reach the key, since you didn't get the book";
             }
         }
         else{
             speechOutput = " I don't regognize that command";
         }
            
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
        
    },
     'chairIntent': function () {
         var speechOutput;
         if(this.attributes.room == 2){
            if(this.attributes.chair == false) {
                 speechOutput = "You moved the chair!";
                this.attributes.chair = true;
             }
             else if(this.attributes.glasstable){
                 speechOutput = " The table is in the way";
             }
             else {
                 speechOutput = " The chair is already moved";
             }
         }
         else{
             speechOutput = "not recognized";
         }
        
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
     },
      'glasstableIntent': function () {
         var speechOutput;
         if(this.attributes.room == 2){
             if(this.attributes.glasstable == false) {
                 speechOutput = "You moved the table!";
                this.attributes.glasstable = true;
             }
             else if(this.attributes.chair){
                 speechOutput = " The chair is in the way";
             }
             else {
                 speechOutput = " The table is already moved"; 
             }
         }
         else {
             speechOutput = "not recognized";
         }
        
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
     },
     'crowbarIntent': function () {
         var speechOutput = "";
         if(this.attributes.room == 3){
             if(this.attributes.sledgehammer){
                 speechOutput = "You put down the sledgehammer and ";
                 this.attributes.sledgehammer = false;
             }
             if(this.attributes.crowbar == false) {
                 speechOutput += "You picked up the crowbar!";
                this.attributes.crowbar = true;
             }
         }
         else {
             speechOutput = "not recognized";
         }
         var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
     },
        'sledgehammerIntent': function () {
         var speechOutput = "";
         this.attributes.sledgehammer = true;
         if(this.attributes.room == 3){
             if(this.attributes.crowbar){
                 speechOutput = "You put down the crowbar and ";
                 this.attributes.crowbar = false;
             }
             if(this.attributes.sledgehammer == true) {
                 speechOutput += "You picked up the sledgehammer!";
                this.attributes.crowbar = false;
             }
         }
         else {
             speechOutput = "not recognized";
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

