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
      var speechOutput = "Welcome to skill bill / funny bunny!";
      this.response.speak(speechOutput).listen("What would you like to do?");
      this.emit(':responseReady');
    },
    'storyIntent': function () {
        var sound   = "<audio src='https://s3.amazonaws.com/ask-soundlibrary/magic/amzn_sfx_magic_blast_1x_01.mp3'/>";
        var sound1  = "<audio src='https://s3.amazonaws.com/ask-soundlibrary/battle/amzn_sfx_battle_yells_men_01.mp3'/>";
        var sound2  = "<audio src='https://s3.amazonaws.com/ask-soundlibrary/impacts/amzn_sfx_punch_01.mp3'/>";
        var sound3  = "<audio src='https://s3.amazonaws.com/ask-soundlibrary/impacts/amzn_sfx_fireworks_firecrackers_01.mp3'/>";
        //var sound4  = "<audio src='https://s3.amazonaws.com/ask-soundlibrary/scifi/amzn_sfx_scifi_alarm_02.mp3'/>";
        var sound5  = "<audio src='https://s3.amazonaws.com/ask-soundlibrary/scifi/amzn_sfx_scifi_alien_voice_05.mp3'/>";
        var sound6  = "<audio src='https://s3.amazonaws.com/ask-soundlibrary/animals/amzn_sfx_monkey_chimp_01.mp3'/>";
        var sound7  = "<audio src='https://s3.amazonaws.com/ask-soundlibrary/foley/amzn_sfx_glasses_clink_03.mp3'/>";
        var speechOutput = "Once apon a time trump became president. Wait that's real!" + sound + sound1 
        + "Johnsena to the rescue!" + sound2 + "yay trump is an amazing president!"+ sound3 + sound5 + "Oh no! Alien OON IS HERE"+ sound6 
        + "eat da potatoes ya "
        + sound7 
        + "Oh no not my plate Then I will eat chilli Om nom nom nom nom " 
        + "How will I survive the kim jung oon with the chilli?" 
        + "Find out on story borie 2 my friend.";
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'WouldYouRatherIntent': function () {
        var ratherArray = ["Would you rather be the only happy person or be the only sad person",
        "Would you rather have a cat with a dog personality or a dog with a cat personality",
        "Would you rather be homeless and be liked by every one or be a millionaire, but everybody dislikes you",
        "Would you rather be married or be lonely without friends or family.",
        "Would you rather join trump or kim jung oon.",
        "Would you rather stay a kid forever or always be an adult.",
        "Would you rather help a grandma who's about to die, your best friend, or the love of your life",
        "Would you rather betray your mom, your best friend, or your girlfriend",
        "Would you rather save your daughther, your son, your mom, or your dad",
        "Would you rather let two puppies die or never eat things with sugar again",
        "Would you rather be dumped by your girlfriend or by your best friend",
        "Would you rather drink poison or eat bombs fed by your mother",
        "Would you save a dog, somebody's kid, or a million dollars",
        "Would you rather save your mom and dad or unlimited riches"];
        var randomNum = Math.floor(Math.random()*ratherArray.length);
        var ratherChoice = ratherArray[randomNum];
        var speechOutput = ratherChoice;
        var speechReprompt = "Oof";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'ChoiceIntent': function () {
        var speechOutput = "That's a very good choice my friend.";
        var speechReprompt = "Meh Beh!";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'PartTwoIntent': function () {
        var sound8  = "<audio src='https://s3.amazonaws.com/ask-soundlibrary/human/amzn_sfx_drinking_slurp_01.mp3'/>";
        var sound9  = "<audio src='https://s3.amazonaws.com/ask-soundlibrary/scifi/amzn_sfx_scifi_radar_high_ping_01.mp3'/>";
        var sound10 = "<audio src='https://s3.amazonaws.com/ask-soundlibrary/battle/amzn_sfx_battle_men_horses_01.mp3'/>";
        var sound11 = "<audio src='https://s3.amazonaws.com/ask-soundlibrary/transportation/amzn_sfx_car_accelerate_01.mp3'/>";
        var speechOutput = sound8
        + "<amazon:effect name='whispered'>Too smelly</amazon:effect>"
        + sound9
        + "Oh no! Now the fat-o-meter is sensing something." + sound10 + "It's the rolling of the sumos! Run before they take your lives."
        + "I broke my arm, I must go to the ER." + sound11 + "Three decades passed and then I came out alive. Five seconds later, I was hit by a flying turd." 
        + "While I couldn't see, I got hit by a train carrrying turds." 
        + "Turns out it was the plan of turd-o-bama" + "I go home to relax." 
        + "Five minutes later my house gets kicked down a giant robot turd." 
        + "Inside the giant robot turd, there is turd-o-boma and his wife, the turd motherlord." 
        + "Now I am homeless, but how will I defeat turd-o-boma and his army of the flying destructo, ultra smelly turds." 
        + "Find out on the next story borie.";
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'PartThreeIntent': function () {
        var sound18 = "<audio src='https://s3.amazonaws.com/ask-soundlibrary/home/amzn_sfx_toilet_flush_02.mp3'/>";
        var sound19 = "<audio src='https://s3.amazonaws.com/ask-soundlibrary/scifi/amzn_sfx_scifi_explosion_03.mp3'/>";
        var speechOutput = "First I must eat my chicken rice" + "I pull a mini mama out of my pocket and throw it at the giant robot turd" 
        + "The mini mama expands to full in the sunshine. It expands so much she blocked the sun completely. The mini mama becomes not so mini and crushes the robot." 
        + sound19 + "Now we  must flush the turd-o-boma down the toilet" + sound18 + "Then something squishy splashes agaist my head. It's the flying destructo turds!" 
        + "I must put on my extra orange trump suit. Then I take minature mexico, the wall of china bina lina tina, and my kim jung oon action figure." 
        + "Then I use my magic princess wand and zap them all." + " I made the ultimate wall that can block out mexico and kill a the destucto turds." 
        + "You will now be haunted by the savage cabbage.";
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
