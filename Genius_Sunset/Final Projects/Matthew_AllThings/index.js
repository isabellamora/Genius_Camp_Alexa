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
const STOP_MESSAGE = 'oof!';
const FALLBACK_MESSAGE = 'I dont recognize that';

const handlers = {
    'LaunchRequest': function () {
      var speechOutput = "This skill can help you learn the news, play sports, open a fortune cookie, tell you a spicy food, tell you rhymes, tell you skills of life, and tell you a story, a two, a three, and a four.";
      this.response.speak(speechOutput).listen("What would you like to do?");
      this.emit(':responseReady');
    },
    'cookieIntent': function () {
        var fortuneArray = ["you will die", "life is gonna be mean to you", "life is kind to you", "You will eat chicken this week.", "you will never become the president", "kim jung oon is gonna capture you", "Trump will grant you a million dollars", "Do it again", "you will become homeless.", "your lamborghini will break or be stolen by a skinny cat.", "your mama is going to eat your bones when you die.", "your only friends will be pigs and chicken.", "you will go to heaven", "you're gonna live for one more month.", "your eyeballs will pop out.", "booger king will haunt you forever."];
        var random = Math.floor(Math.random()*fortuneArray.length);
        var fortune = fortuneArray[random];
        var speechOutput = fortune;
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'sportsIntent': function () {
        var speechOutput = " In basketball, you bounce the ball. In baseball, you throw and catch the balls. In tennis you hit the ball with the rackets. In soccer you kick the ball";
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'spicyIntent': function () {
        var speechOutput = "Spicy chicken rice is a spicy food.";
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'newsIntent': function () {
        var life = this.event.request.intent.slots.news.value;
        var speechOutput;
        if (life == "Donald trump"){
            speechOutput = "Trump is the  <say-as interpret-as='ordinal'>45</say-as>. president. He is over 70 years old. he weighs 236 pounds. ";
        }
        else if (life == "Kim Jung oon"){
            speechOutput = "Kim is a north Korean president. He likes nukes and is very popular. He is liked by korean woman. he weighs 290 pounds. ";
        }
        else if (life == "japanese sumos"){
            speechOutput = "Japanese sumos are awesome people that have wars in arenas. You should see them! their average wieght is 330 pounds. ";
        }
        else if (life == "the heaviest person"){
            speechOutput = "jon brower minnoch is the fattest man, weighing 1,400 pounds.";
        }
        else if (life == "China"){
            speechOutput = "The wall of china will soon fall down and china will become sad. China explores find cave that have stone worriors.";
        }
        else if (life == "America"){
            speechOutput = "America has very greasy foods, and a lot of people in america have obeisety. The most fattest person is from america";
        }
        else if (life == "Korea"){
            speechOutput = "Korea is at war with other korea. This sucks.";
        }
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'YoMamaIntent': function () {
        var theArray = ["you should smile when you do not have teeth. do not be cheerful until you are old.", "that you should eat midnight snacks. why not? there is a light in the fridge, after all.", "cut the cheese ten times today. your insides will feel good (except your nose!)", "dont live. just die."];
        var random = Math.floor(Math.random()*theArray.length);
        var the = theArray[random];
        var speechOutput = "A skill you should have for life is " + the ;
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'RhymesIntent': function () {
        var ttong = ["Turds are nice, I like spice, eat my lice, lick the mice, chicken rice. all credits too hilo", "Big fat ben, eats all the hens, eats juicy pens. all credits to hilo", "There once was a dog, he ate a frog, then for karma, got rolled over by a giant log", "There was a big pig, he likes to eat wigs, when he ate too much, he was too heavy he needed a crutch", "there was a head, it was almost dead, so he laid in his bed, munching on human legs"];
        var random = Math.floor(Math.random()*ttong.length);
        var life = ttong[random];
        var speechOutput = life;
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'storyIntent': function () {
        var turkeysound="<audio src='https://s3.amazonaws.com/ask-soundlibrary/animals/amzn_sfx_turkey_gobbling_01.mp3'/>";
        var twinklesound="<audio src='https://s3.amazonaws.com/ask-soundlibrary/magic/amzn_sfx_fairy_sparkle_chimes_01.mp3'/>";
        var boomsound="<audio src='https://s3.amazonaws.com/ask-soundlibrary/magic/amzn_sfx_magic_blast_1x_01.mp3'/>";
        var speechOutput = "Once apon a time, I ate turkey " + turkeysound + "on the day Trump became president. " + twinklesound + " But then, something happened! " + boomsound + "Trump died! " + boomsound + "ByeBye";
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'storyTwoIntent': function () {
        var turkeysound="<audio src='https://s3.amazonaws.com/ask-soundlibrary/animals/amzn_sfx_turkey_gobbling_01.mp3'/>";
        var twinklesound="<audio src='https://s3.amazonaws.com/ask-soundlibrary/magic/amzn_sfx_fairy_sparkle_chimes_01.mp3'/>";
        var boomsound="<audio src='https://s3.amazonaws.com/ask-soundlibrary/magic/amzn_sfx_magic_blast_1x_01.mp3'/>";
        var juicysound="<audio src='https://s3.amazonaws.com/ask-soundlibrary/human/amzn_sfx_drinking_slurp_01.mp3'/>";
        var carsound="<audio src='https://s3.amazonaws.com/ask-soundlibrary/transportation/amzn_sfx_car_accelerate_02.mp3'/>";
        var speechOutput = "Once apon a time I ate very juicy turkey. " + turkeysound + juicysound + " It was yummy. " + twinklesound + "I was full. But then, my stomach popped! " + boomsound + " I had to go to the ER." + carsound + "They did a surgury on me and then I died. The end.";
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'storyThreeIntent': function () {
        var turkeysound="<audio src='https://s3.amazonaws.com/ask-soundlibrary/animals/amzn_sfx_turkey_gobbling_01.mp3'/>";
        var twinklesound="<audio src='https://s3.amazonaws.com/ask-soundlibrary/magic/amzn_sfx_fairy_sparkle_chimes_01.mp3'/>";
        var boomsound="<audio src='https://s3.amazonaws.com/ask-soundlibrary/magic/amzn_sfx_magic_blast_1x_01.mp3'/>";
        var juicysound="<audio src='https://s3.amazonaws.com/ask-soundlibrary/human/amzn_sfx_drinking_slurp_01.mp3'/>";
        var carsound="<audio src='https://s3.amazonaws.com/ask-soundlibrary/transportation/amzn_sfx_car_accelerate_02.mp3'/>";
        var speechOutput = "Once apon a time, I was in a race. " + carsound + " Then I crashed! " + boomsound + " I went to the ER. " + carsound + "I did not want to die like my friend. Then, miraculously, I lived!" + twinklesound + "But then, the next day, I got killed by active shooters. " + boomsound + "Good bye earth! ";
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'storyFourIntent': function () {
        var whampsound="<audio src='https://s3.amazonaws.com/ask-soundlibrary/scifi/amzn_sfx_scifi_alien_voice_05.mp3'/>";
        var turkeysound="<audio src='https://s3.amazonaws.com/ask-soundlibrary/animals/amzn_sfx_turkey_gobbling_01.mp3'/>";
        var twinklesound="<audio src='https://s3.amazonaws.com/ask-soundlibrary/magic/amzn_sfx_fairy_sparkle_chimes_01.mp3'/>";
        var boomsound="<audio src='https://s3.amazonaws.com/ask-soundlibrary/magic/amzn_sfx_magic_blast_1x_01.mp3'/>";
        var juicysound="<audio src='https://s3.amazonaws.com/ask-soundlibrary/human/amzn_sfx_drinking_slurp_01.mp3'/>";
        var carsound="<audio src='https://s3.amazonaws.com/ask-soundlibrary/transportation/amzn_sfx_car_accelerate_02.mp3'/>";
        var speechOutput = "Once opon a time, I lived with animals because I was poor. " + turkeysound + " I ate pickles off the trees. I was sad. then, something miraculous happened. I got rich " + twinklesound + "then I got poor again" + whampsound + whampsound + whampsound + "Then I got rich! " + twinklesound + "then I got poor again" + whampsound + whampsound + whampsound + "Then I got rich! " + twinklesound + "then I got poor again" + whampsound + whampsound + whampsound + "Then I got rich! " + twinklesound + "then I got poor again" + whampsound + whampsound + whampsound + "I got tired of this and tried to kill myself. " + boomsound + "I missed! I hit the wall and it came down. still, I did not die. I hated myself for being so dumb. then, Kim Jong Un nuked my head, but still I did not die. " + whampsound + "a sumo wrestler sat on my head, and finally, I died. I went to the ER" + carsound + "And got revived. I was triggered. the end.";
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'storyFiveIntent': function () {
        var whampsound="<audio src='https://s3.amazonaws.com/ask-soundlibrary/scifi/amzn_sfx_scifi_alien_voice_05.mp3'/>";
        var turkeysound="<audio src='https://s3.amazonaws.com/ask-soundlibrary/animals/amzn_sfx_turkey_gobbling_01.mp3'/>";
        var twinklesound="<audio src='https://s3.amazonaws.com/ask-soundlibrary/magic/amzn_sfx_fairy_sparkle_chimes_01.mp3'/>";
        var boomsound="<audio src='https://s3.amazonaws.com/ask-soundlibrary/magic/amzn_sfx_magic_blast_1x_01.mp3'/>";
        var juicysound="<audio src='https://s3.amazonaws.com/ask-soundlibrary/human/amzn_sfx_drinking_slurp_01.mp3'/>";
        var carsound="<audio src='https://s3.amazonaws.com/ask-soundlibrary/transportation/amzn_sfx_car_accelerate_02.mp3'/>";
        var speechOutput = "This is the war of turtle mama and her army of flying, huge turtles, Kim jong un and his happy, explosive nukes, and donald wall and his walls of mexico. donald wall starts the battle by placing a stack of mexicos in the middle of the arena. Kim jong un counterattacts by rolling around in the mexico pile, killing all the fake mexicos. the turtle mama uses a turtle fart gun to knock them both out, then uses the turtle ttong to cover them. but, of course, donald wall had some smell repulsive walls in his pokets. he burst one out, but the turtle ttong broke the wall into pieces. then the spirit of the most high fat-o-mama came out of the wall and used her fatness to cover the ttong. Then the fatness killed all of them. the end.";
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

