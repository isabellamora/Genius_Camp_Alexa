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
      var speechOutput = "This skill is where you can type a letter from a to z and you can get a character name and the beyblade. You can type give me information to get few facts.";
      this.response.speak(speechOutput).listen("What would you like to do?");
      this.emit(':responseReady');
    },
    'AlphabetIntent': function () {
        this.attributes.letter = this.event.request.intent.slots.myLetter.value;
        var speechOutput;
        if (this.attributes.letter == "A" || this.attributes.letter == "a"){
            speechOutput = "A is for Aiga and Achilles.";
        }
        else if (this.attributes.letter == "B" || this.attributes.letter == "b"){
            speechOutput = "B is for Boa and Bahamut.";
        }
        else if (this.attributes.letter == "C" || this.attributes.letter == "c"){
            speechOutput = "C is for Clio and Chaos.";
        }
        else if (this.attributes.letter == "D" || this.attributes.letter == "d"){
            speechOutput = "D is for Daigo and Deathscyther.";
        }
        else if (this.attributes.letter == "E" || this.attributes.letter == "e"){
            speechOutput = "E is for Eclipse.";
        }
        else if (this.attributes.letter == "F" || this.attributes.letter == "f"){
            speechOutput = "F is for Free and Fafnir or Fubuki and Fornius.";
        }
        else if (this.attributes.letter == "G" || this.attributes.letter == "g"){
            speechOutput = "G is for Gossim and Garuda.";
        }
        else if (this.attributes.letter == "H" || this.attributes.letter == "h"){
            speechOutput = "H is for Houi and Hercules.";
        }
        else if (this.attributes.letter == "I" || this.attributes.letter == "i"){
            speechOutput = "I is for Ifrit.";
        }
        else if (this.attributes.letter == "J" || this.attributes.letter == "j"){
            speechOutput = "J is for Jin and Jormuntor.";
        }
        else if (this.attributes.letter == "K" || this.attributes.letter == "k"){
            speechOutput = "K is for Ken and Kerbeus.";
        }
        else if (this.attributes.letter == "L" || this.attributes.letter == "l"){
            speechOutput = "L is for Lui and Longinus.";
        }
        else if (this.attributes.letter == "M" || this.attributes.letter == "m"){
            speechOutput = "M is for Miniboros.";
        }
        else if (this.attributes.letter == "N" || this.attributes.letter == "n"){
            speechOutput = "N is for Naoki and Neptune or Norman and Nemesis.";
        }
        else if (this.attributes.letter == "O" || this.attributes.letter == "o"){
            speechOutput = "O is for Orochi and Odin.";
        }
        else if (this.attributes.letter == "P" || this.attributes.letter == "p"){
            speechOutput = "P is for Phi and Pheonix.";
        }
        else if (this.attributes.letter == "Q" || this.attributes.letter == "q"){
            speechOutput = "Q is for Quon and Quetziko.";
        }
        else if (this.attributes.letter == "R" || this.attributes.letter == "r"){
            speechOutput = "R is for Rantaro/Ranjaro and Ragnarok.";
        }
        else if (this.attributes.letter == "S" || this.attributes.letter == "s"){
            speechOutput = "S is for Shu and Spriggan or Sisco and Satan or Suou and Salamander.";
        }
        else if (this.attributes.letter == "T" || this.attributes.letter == "t"){
            speechOutput = "T is for Toko and Trident.";
        }
        else if (this.attributes.letter == "U" || this.attributes.letter == "u"){
            speechOutput = "U is for Ukyo and Unicorn.";
        }
        else if (this.attributes.letter == "V" || this.attributes.letter == "v"){
            speechOutput = "V is for Valt and Valkriye.";
        }
        else if (this.attributes.letter == "W" || this.attributes.letter == "w"){
            speechOutput = "W is for Wakiya and Wyvern.";
        }
        else if (this.attributes.letter == "X" || this.attributes.letter == "x"){
            speechOutput = "X is for Xander and Xcaliber.";
        }
        else if (this.attributes.letter == "Y" || this.attributes.letter == "y"){
            speechOutput = "Y is for Yugo and Yggdrasil.";
        }
        else if (this.attributes.letter == "Z" || this.attributes.letter == "z"){
            speechOutput = "Z is for Zac and Zeus.";
        }
        else {
            speechOutput = "I didn't understand your letter. Please repeat it";
        }
        speechOutput += " Do you want to hear some information?";
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'FactIntent': function () {
        var factchoice = this.event.request.intent.slots.myFactChoice.value;

        var speechOutput; 
        
        if (factchoice == "information"){
            if (this.attributes.letter == "a" || this.attributes.letter == "A"){
                speechOutput = "Aiga is a wild boy who was inspired by Valt and started beyblade. He wants to be the best of the best and someday beat his hero Valt with his partner, Z Achilles.";
            }
            else if (this.attributes.letter == "b" || this.attributes.letter == "B"){
              speechOutput = "Boa is a nice kid who uses Ark Bahamut and looks up to Red Eye wanting to one day challenge him.";  
            }
            else if (this.attributes.letter == "c" || this.attributes.letter == "C"){
                speechOutput = "Clio is very creepy and owns Deep Chaos.";
            }
            else if (this.attributes.letter == "d" || this.attributes.letter == "D"){
                speechOutput = "Daigo is a calm blader who owns Killer Deathscyther and can do damage!";
            }
            else if (this.attributes.letter == "e" || this.attributes.letter == "E"){
                speechOutput = "Duo Eclips is actually half of 2 layers combined in to 1 so you don't know what to use to counter it.";
            }
            else if (this.attributes.letter == "f" || this.attributes.letter == "F"){
                speechOutput = "Free is a crazy good blader who uses Turn Fafnir and can drain the spin power from the opponents bey and Fubuki is a hardworking blader who never gives up with Emperor Forneus.";
            }
            else if (this.attributes.letter == "g" || this.attributes.letter == "G"){
                speechOutput = "Gossim and Maximum Garuda have nice gracefull movements and can burst a beyblade easy it is very hard to burst it.";
            }
            else if (this.attributes.letter == "h" || this.attributes.letter == "H"){
                speechOutput = "Houi is strong, good at archery, and an amazing blader with Archer Hercules.";
            }
            else if (this.attributes.letter == "i" || this.attributes.letter == "I"){
                speechOutput = "Inferno Ifrit is a peculiar beyblade with a very wierd driver which is a wheel.";
            }
            else if (this.attributes.letter == "j" || this.attributes.letter == "J"){
                speechOutput = "Jin  is a blader with Jumbo Jormuntor and has 323 guardian spirits.";
            }
            else if (this.attributes.letter == "k" || this.attributes.letter == "K"){
                speechOutput = "Ken is an awesome blader owning Hazard Kerbeus.";
            }
            else if (this.attributes.letter == "l" || this.attributes.letter == "L"){
                speechOutput = "Lui is a blader owning Bloody Longinus his attack power is almost unriveled";
            }
            else if (this.attributes.letter == "m" || this.attributes.letter == "M"){
                speechOutput = "Mad Miniboros is a cool beyblade which has the quake driver which jumps.";
            }
            else if (this.attributes.letter == "n" || this.attributes.letter == "N"){
                speechOutput = "Naoki is a smart blader possesing Nova Nepstrius and uses his smartness to calculate a victory. Norman is a blader who has Twin Nemesis and has 2 modes.";
            }
            else if (this.attributes.letter == "o" || this.attributes.letter == "O"){
                speechOutput = "Orochi is an awesome blader that likes listening to loud music and and crushing with Omni Odin.";
            }
            else if (this.attributes.letter == "p" || this.attributes.letter == "P"){
                speechOutput = "Phi is an overpowering blader and if you  are unfortunate enough to battle him you will be haunted for life. ";
            }
            else if (this.attributes.letter == "q" || this.attributes.letter == "Q"){
                speechOutput = "Quon is a skateboarder owning Quill Qtruetziko.";
            }
            else if (this.attributes.letter == "r" || this.attributes.letter == "R"){
                speechOutput = "Rantaro and Rangjaro are brothers and own Crash Ragnarok.";
            }
            else if (this.attributes.letter == "s" || this.attributes.letter == "S"){
                speechOutput = "Shu and Spriggan Requiem are op and will break your unfortunate beys. Sisco and Kreis Satan use cool roller defense tactics to win. Suou suddenly got a beyblade and became op with Hell Salamander.";
            }
            else if (this.attributes.letter == "t" || this.attributes.letter == "T"){
                speechOutput = "Toko is Valt's little brother and he finnaly started beyblade with his Screw Trident.";
            }
            else if (this.attributes.letter == "u" || this.attributes.letter == "U"){
                speechOutput = "Ukyo is a ninja owning Unlock Unicorn.";
            }
            else if (this.attributes.letter == "v" || this.attributes.letter == "V"){
                speechOutput = "Valt is an enthusiastic blader with Winning Valkriye which lives up to its name.";
            }
            else if (this.attributes.letter == "w" || this.attributes.letter == "W"){
                speechOutput = "Wakiya is a cool blader with Tornado Wyvern.";
            }
            else if (this.attributes.letter == "x" || this.attributes.letter == "X"){
                speechOutput = "Xander is a buff blader owning Buster Xcaliber.";
            }
            else if (this.attributes.letter == "y" || this.attributes.letter == "Y"){
                speechOutput = "Yugo and Yaeger Yggdrasil are very foucused in beyblade.";
            }
            else if (this.attributes.letter == "z" || this.attributes.letter == "Z"){
                speechOutput = "Zac and Galaxy Zeus are hard core stamina bladers.";
            }else{
                speechOutput = "not matching any alphabet";
            }
        }
        speechOutput += " Ok, pick another letter.";
        var reprompt = "pick another letter again";
        this.response.speak(speechOutput).listen(reprompt);
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
