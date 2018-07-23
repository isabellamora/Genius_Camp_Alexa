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
      var speechOutput = "Hi! What would you like me to sing? I can sing Ice Cream And Cake And Cake, the pokemon intro, and the duck song. Just an FYI, i am a really good singer!";
      this.response.speak(speechOutput).listen("What would you like to do?");
      this.emit(':responseReady');
    },
    'SingIntent': function () {
        var userChoice = this.event.request.intent.slots.myChoice.value;
        userChoice = userChoice.toLowerCase();
        var songArray = ["I wanna be the very best like no one ever was. <break time ='2s'/> to catch them is my real test, " 
       + "to train them is my cause!  <break time='2s'/> i will travel across the land, searching far and wide.  <break time = '1s'/> teach pokemon to understand the power "
        + "thats inside! pokemon! gotta catch 'em aaaaall! it's you and me! <break time ='1s'/> I know it's my destiny! pokemon! oooh, you're my best friend, "
        +"in a world we must defend! <break time ='1s'/> Pokemon! gotta catch 'em all, a heart so true! Our courage will pull us through! you teach me and i'll teach you. " 
        + "Pokemon! gotta catch 'em all, gotta catch 'em all! pokemon!", "bom bom bom, budda bodom. a duck walked up to a lemonade stand and he said to the man, running the stand, "
        + "hey, bom bom bom, got any grapes?  <break time='2s'/> the man said no we just sell lemonade, but it's cold and it's fresh and it's all home made. can i get you a glass? "
         + "the duck said, i'll pass. and he waddles away, waddle waddle. 'til the very next day bom bom bom bom bom bada dom.", "ice cream and cake and cake, ice cream and cake and cake,"
         + "ice cream and cake and cake, ice cream and cake and cake, ice cream and cake do the ice cream and cake, ice cream and cake do the ice cream and cake, ice cream and cake do the ice cream and cake,"
         + "ice cream and cake do the ice cream and cake, now slip slip slip slide slip slip slip an slide slip slip slip an slide slip slip slip and slide stop hold up tag team!"];
       
        var speechOutput;
        
        if (userChoice == "intro") {
            speechOutput = songArray[0];
        } else if (userChoice == "song" || userChoice == "the duck song") {
            speechOutput = songArray[1];
        } else if (userChoice == "ice cream and cake and cake") {
            speechOutput = songArray[2];
        } else {
            speechOutput = "Wow, you have no taste in talent!";
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
