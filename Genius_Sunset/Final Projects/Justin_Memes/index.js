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
      var speechOutput = "Welcome to Justin's memes. Ask me to tell you a meme";
      this.response.speak(speechOutput).listen("What would you like to do?");
      this.emit(':responseReady');
    },
    'MemeIntent': function () {
        var memeArray = ["We are not old, we are recycled teenagers",
        "What’s my favorite childhood memory? Not paying bills", 
        "Don’t be afraid to gain a few extra pounds, fat people are harder to kidnap",
        "Sleep is my drug, my bed is my dealer, and my alarm clock is the police",
        "Is your body is from mcdonald's, cuz i'm lov'in it",
        "Hey, bum bum bum, got any grapes",
        "Sometimes, i wish i was a octopus, so i could slap 8 people at once",
        "Number fifteen, burger king foot lettuce",
        "If stress burned calories, I’d be a super model",
        "Waking up before 7:30am should be illegal",
        "Don’t grow up. It’s a trap",
        "The worst three words to hear, tomorrow is monday",
        "To avoid injury, STOP ASKING ME HOW TO DO MY JOB!",
        "Exercise? I thought you said 'extra fries'",
        "I am one step away from becoming poor to rich, i need 500 million dollars",
        "A balanced diet is chocolate in both hands",
        "I’m not fat. I’m just easier to see",
        "On my first day on a diet, i removed all the junk food from my house. It was delicous",
        "M.A.T.H = Mental Abuse to Humans",
        "I didn’t fall, the floor needed a hug",
        "Don’t text me when I’m in the middle texting you. I have to change my whole text",
        "Don’t make me calm me down when you made me mad cuz it’s like shooting me and wondering why I’m bleeding",
        "I licked it, so it’s mine",
        "Is everything expensive, or am i just poor",
        "I don’t insult people, i just describe them",
        "When you really want to slap someone, slap them and say 'mosquito'",
        "My diet plan: make my friends eat cupcakes to get them fat so i look skinny",
        "Holy shoot, tomorrow is Monday. It comes so fast",
        "Admit it. You pushed a door that said pull",
        "The only reason im fat is that a tiny body wouldn’t store all its personality ",
        "Never sleep when you’re mad. Instead, plot revenge"];
        var randomNum = Math.floor(Math.random()*memeArray.length);
        var speechOutput = memeArray[randomNum];
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
