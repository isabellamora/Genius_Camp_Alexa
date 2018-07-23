'use strict';
const Alexa = require('alexa-sdk');

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this: const APP_ID = 'amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1';
const APP_ID = undefined;

//Alexa will speak out the help message when a user says help
//For an idea of what you should say
//-> "You can say tell me a space fact, or, you can say exit... What can I help you with?"
const HELP_MESSAGE = 'This is an Alexa smartphone that is intended to make your life easier. Just ask me to open an such as the travel app, baking app, calculator, or personality app.';
const HELP_REPROMPT = 'What can I help you with?';

//Alexa will speak out the stop message when the program ends
const STOP_MESSAGE = 'Goodbye!';
const FALLBACK_MESSAGE = 'I dont recognize that';

const handlers = {
    'LaunchRequest': function () {
      var speechOutput = "Welcome to the Alexa smartphone! "
      + "This friendly vocal device will make your life easier and filled with fun! "
      +" To begin, what app would you like to access, the travel app, baking app, the calculator, "
      + "or the personality app?";
      this.response.speak(speechOutput).listen("What would you like to do?");
      this.emit(':responseReady');
    },
    'travelStartIntent': function () {
        var speechOutput = "Welcome to the travel app! This app recommends popular places in countries."
        + "When ask me for the food or attractions country, make sure that you say food in or attractions in. "
        + "To begin, choose a country, America, China, Japan, France, and Italy";
        var speechReprompt = "";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'americaIntent': function () {
        var speechOutput = "Welcome to America, the second most popular country. "
        + "Would you like recommendations of food or popular attracitons?";
        var speechReprompt = "";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'foodAmericaIntent': function () {
        var foodArray = ["steak", "pizza", "hot dogs"];
        var randomNum = Math.floor(Math.random()*foodArray.length);
        var speechOutput;
        if (randomNum == 0) {
            speechOutput = "A traditional American food is steak. "
            + "It is an American style of barbecue.";
        }
        else if (randomNum == 1) {
            speechOutput = "A popular American food is pizza. "
            + "People purchase this food for parties. ";
        }
        else {
            speechOutput = "Most Americans enjoy eating hotdogs. "
            + "This food is made from sausage inside a bun.";
        }
        var speechReprompt = "";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'attractionsAmericaIntent': function () {
        var attractionArray = ["Las Vegas", "Yellowstone", "Niagara Falls", "Disney"];
        var randomNum = Math.floor(Math.random()*attractionArray.length);
        var speechOutput;
        if (randomNum == 0) {
            speechOutput = "Las Vegas is located in Nevada is known for their casinos.";
        }
        else if (randomNum == 1) {
            speechOutput = "Yellowstone is a national park that is located in Utah and "
            + "crosses borders with a few other states. This national park is known for their hot springs.";
        }
        else if (randomNum == 2) {
            speechOutput = "Niagara Falls is located on the border of New York, Canada, and Ontario. "
            + "It is made up of 3 waterfalls, the American Falls, the Bridal Veil Falls, and the Horseshoe Falls.";
        }
        else {
            speechOutput = "Disneyland is located in Anaheim, California. "
            + "The workers there believe that it is the happiest place on Earth.";
        }
        var speechReprompt = "";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'chinaIntent': function () {
        var speechOutput = "Welcome to China where the streets and markets are filled with popularity. "
        + "Would you like recommendations of food and popular attractions?";
        var speechReprompt = "";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'foodChinaIntent': function () {
        var foodArray = ["dim sum", "peking duck", "wontons"];
        var randomNum = Math.floor(Math.random()*foodArray.length);
        var speechOutput;
        if (randomNum == 0) {
            speechOutput = "Dim sum is a Chinese traditional way to eat many dishes with a small amount of food.";
        }
        else if (randomNum == 1) {
            speechOutput = "Peking duck is a famous Chinese dish where people enjoy to a big plate in which it "
            + "contains a lot of small side dishes to eat with the meat.";
        }
        else {
            speechOutput = "Wontons are small bite size food that look like dumplings. "
            + "Most Chinese poeple make it with their friends and family during a party.";
        }
        var speechReprompt = "";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'attractionsChinaIntent': function () {
        var attractionArray = ["Great Wall of China", "Oriental Pearl Tower", "Terracotta Army"];
        var randomNum = Math.floor(Math.random()*attractionArray.length);
        var speechOutput;
        if (randomNum == 0) {
            speechOutput = "The Great Wall of China is an ancient wall rebuilt by the Min dynasty. "
            + "The total length of the wall was 69.541273 million feet.";
        }
        else if (randomNum == 1) {
            speechOutput = "The Oriental Pearl Tower is located in Shanghai and has been the "
            + "icon and landmark of Shanghai.";
        }
        else {
            speechOutput = "The Terracotta Army is a collection of the terracotta soldiers.";
        }
        var speechReprompt = "Let me say this again, this is my very first intent";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'japanIntent': function () {
        var speechOutput = "Welcome to Japan where the distinct traditions attract tourists. "
        + "Would you like recommendations of food and popular attractions?";
        var speechReprompt = "";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'foodJapanIntent': function () {
        var foodArray = ["sushi,", "tempura", "ramen"];
        var randomNum = Math.floor(Math.random()*foodArray.length);
        var speechOutput;
        if (randomNum == 0) {
            speechOutput = "Sushi is a Japanese dish of specially prepared vinegared rice.";
        }
        else if (randomNum == 1) {
            speechOutput = "Tempura is a traditional Japanese food that is deep-fried after coated with mixtures.";
        }
        else {
            speechOutput = "Ramen is Japan's favourite late night meal which contains egg-noodles in salty broth.";
        }
        var speechReprompt = "";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'attractionsJapanIntent': function () {
        var attractionArray = ["Mount Fuji", "Tokyo Skytree", "Tokyo Disneyland"];
        var randomNum = Math.floor(Math.random()*attractionArray.length);
        var speechOutput;
        if (randomNum == 0) {
            speechOutput = "Mount Fuji is the tallest mountain in Japan and is an active volcano.";
        }
        else if (randomNum == 1) {
            speechOutput = "Tokyo Skytree is an observation tower and the tallest structure in Japan.";
        }
        else {
            speechOutput = "Tokyo Disneyland is a popular attraction and has hosted 16.6 million visitors, "
            + "making it the world's third-most visited theme park";
        }
        var speechReprompt = "";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'franceIntent': function () {
        var speechOutput = "Welcome to France, the country in which attractions are popular and filled with popularity "
        + "Would you like recommendations of food and popular attractions?";
        var speechReprompt = "";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'foodFranceIntent': function () {
        var foodArray = ["croissants", "baguette", "macaroon"];
        var randomNum = Math.floor(Math.random()*foodArray.length);
        var speechOutput;
        if (randomNum == 0) {
            speechOutput = "Croissants is a buttery, flaky pastry named after its shape. "
            + "French people eat this as their breakfast.";
        }
        else if (randomNum == 1) {
            speechOutput = "A baguette is a long, narrow loaf of French bread.";
        }
        else {
            speechOutput = "Macaroons are traditional deserts that are made of biscuits and a "
            + "layer of filling in the middle.";
        }
        var speechReprompt = "";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'attractionsFranceIntent': function () {
        var attractionArray = ["Eiffel Tower", "Palace of Versailles", "French Riviera"];
        var randomNum = Math.floor(Math.random()*attractionArray.length);
        var speechOutput;
        if (randomNum == 0) {
            speechOutput = "The Eiffel Tower is the landmark of France and was origianlly "
            + "the entrance arch for the World's Fair.";
        }
        else if (randomNum == 1) {
            speechOutput = "The Palace of Versailles covers more than 30,000 acres. King Louis XIV used to live there.";
        }
        else {
            speechOutput = "The French Riviera is the Mediterranean coast of southeastern France. "
            + "It includes glamorous beach resorts with amazing views.";
        }
        var speechReprompt = "";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'italyIntent': function () {
        var speechOutput = "Welcome to Italy where traditional food is made and popular all around the world. "
        + "Would you like recommendations of food and popular attractions?";
        var speechReprompt = "";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'foodItalyIntent': function () {
        var foodArray = ["pasta", "gelato", "tiramisu"];
        var randomNum = Math.floor(Math.random()*foodArray.length);
        var speechOutput;
        if (randomNum == 0) {
            speechOutput = "Pasta is a traditional dish in Italy. "
            + "It usually contains tomato sauce, meat, and cheese. ";
        }
        else if (randomNum == 1) {
            speechOutput = "Gelato is traditional Italian ice-cream with a base of milk and sugar.";
        }
        else {
            speechOutput = "Bolognese is the national dish of France. "
            + "It is a meat base sauce that can be served in many dishes.";
        }
        var speechReprompt = "";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'attractionsItalyIntent': function () {
        var attractionArray = ["Leaning Tower of Piza", "Mount Vesuvius", "lakes"];
        var randomNum = Math.floor(Math.random()*attractionArray.length);
        var speechOutput;
        if (randomNum == 0) {
            speechOutput = "The Leaning Tower of Piza is a popular attractions in Italy. "
            + "The soft ground caused the tower to lean when the workers were working on the third floor.";
        }
        else if (randomNum == 1) {
            speechOutput = "Mount Vesuvius is an active volcano. "
            + "It is one of several volcanoes which form the Campanian volcanic arc.";
        }
        else {
            speechOutput = "The lakes are special insights in Italy. "
            + "Examples of these are Lake Como and Lake Garma.";
        }
        var speechReprompt = "";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'bakingStartIntent': function () {
        var speechOutput = "Welcome to the baking app! "
        + "You can learn to make delicious treats for your family and friends. "
        + "I will give a recipe for treats such as brownies and cookies.";
        + "Say start when you are ready.";
        var speechReprompt = "";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'bakingBeginIntent': function () {
        var treatArray = ["brownies", "cookies"];
        var randomNum = Math.floor(Math.random()*treatArray.length);
        var speechOutput;
        if (randomNum == 0) {
            speechOutput = "This is the recipe for brownies. Are you ready to learn how to make it?";
        }
        else {
            speechOutput = "This is the recipe for cookies. Are you ready to learn how to make it?";
        }
        var speechReprompt = "";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'brownieRecipeIntent': function () {
        var speechOutput = "1. Turn on the oven to 325 degrees F. "
        + "2. Put the following ingredients into the bowl: 1 1/4 cups of flour, 1/3 cup of cocoa, "
        + "1 cup of sugar, 1/2 teaspoon of salt, and 3/4 teaspoon of baking soda. "
        + "3. Mix it slowly with a whisk until it is completely light brown. "
        + "4. Make 4 dents in the mixture - 2 large and 2 small. "
        + "5. Pour 1 cup of water into one of the large dents. " 
        + "6. Pour 1/3 cup of oil into the other large dent. "
        + "7. Pour 1 teaspoon of vanilla extract into one of the small dents. "
        + "8. Pour 1 teaspoon of cider vinegar or white vinegar into the other small dent. "
        + "9. Mix all the ingredients together with a whisk until all the ingerdients are evenly combined. "
        + "10. Pour the batter into the 8-inch square baking pan. "
        + "11. Put the pan in the oven and take it out after it bakes for 30 minutes. "
        + "12. Let the brownies cool for 30 minutes before cutting it into squares. Enjoy!";
        var speechReprompt = "";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'cookieRecipeIntent': function () {
        var speechOutput = "1. Preheat the oven to 350 degrees F. "
        + "Put parchment paper into a baking sheet. "
        + "In a bowl, rub the 2 cups of flour and 9 tbsp of cubed butter together until they resemble bread crumbs. "
        + "2. Mix in 1 cup of sugar and 1 tsp of cinnamon. In a small bowl, beat 1 egg and  corn syrup with a fork, "
        + "then add it to the mixure. Stir with a wooden spoon until it forms a ball. "
        + "3. Wrap the bowl with batter in plastic wrap and place it in the fridge for 10 minutes. "
        + "4. After 10 minutes, roll the dough on floured surface to 1/4 inches thick and cut into stars. "
        + "5. Place the stars slightly apart on the baking sheets and bake for 10-12 minutes, until golden. "
        + "6. Let the cookies cool for 2 minutes. "
        + "7. Sift 2 1/2 cups of confectioner's sugar into a mixing bowl and stir 2-3 cups of water to create a mixture. "
        + "8. Divide the mixture into 3 bowls and stir in the coloring to make 3 different icings. "
        + "9. Carefully spread the icing onto the cookies using a knife or drizzle it on top "
        + "using a teaspoon or piping bag to create stripes and patterns. Put aside until the icing sets. Enjoy!";
        var speechReprompt = "";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'calculatorStartIntent': function () {
        var speechOutput = "Welcome to the calculator! "
        + "Ask me any addition, subtraction, multiplication, and division problem and I will solve it for you. "
        + "Make sure that the equation results a positive integer.";
        var speechReprompt = "";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'additionIntent': function () {
        var myNumberOne = this.event.request.intent.slots.myNumberOne.value;
        var myNumberTwo = this.event.request.intent.slots.myNumberTwo.value;
        this.attributes['myNumberOne'] = myNumberOne;
        this.attributes['myNumberTwo'] = myNumberTwo;
        myNumberOne = Number(myNumberOne);
        myNumberTwo = Number(myNumberTwo);
        var additionAnswer = myNumberOne + myNumberTwo;
        var speechOutput = "The answer is " + additionAnswer;
        var speechReprompt = "";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'subtractionIntent': function () {
        var myNumberOne = this.event.request.intent.slots.myNumberOne.value;
        var myNumberTwo = this.event.request.intent.slots.myNumberTwo.value;
        this.attributes['myNumberOne'] = myNumberOne;
        this.attributes['myNumberTwo'] = myNumberTwo;
        myNumberOne = Number(myNumberOne);
        myNumberTwo = Number(myNumberTwo);
        var subtractionAnswer = myNumberOne - myNumberTwo;
        var speechOutput = "The answer is " + subtractionAnswer;
        var speechReprompt = "";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'multiplicationIntent': function () {
        var myNumberOne = this.event.request.intent.slots.myNumberOne.value;
        var myNumberTwo = this.event.request.intent.slots.myNumberTwo.value;
        this.attributes['myNumberOne'] = myNumberOne;
        this.attributes['myNumberTwo'] = myNumberTwo;
        myNumberOne = Number(myNumberOne);
        myNumberTwo = Number(myNumberTwo);
        var multiplicationAnswer = myNumberOne * myNumberTwo;
        var speechOutput = "The answer is " + multiplicationAnswer;
        var speechReprompt = "";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'divisionIntent': function () {
        var myNumberOne = this.event.request.intent.slots.myNumberOne.value;
        var myNumberTwo = this.event.request.intent.slots.myNumberTwo.value;
        this.attributes['myNumberOne'] = myNumberOne;
        this.attributes['myNumberTwo'] = myNumberTwo;
        myNumberOne = Number(myNumberOne);
        myNumberTwo = Number(myNumberTwo);
        var divisionAnswer = myNumberOne / myNumberTwo;
        var speechOutput = "The answer is " + divisionAnswer;
        var speechReprompt = "";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'personalityStartIntent': function () { 
        var speechOutput = "Welcome to the personality app! "
        + "I will ask you a few questions that you will answer to find out what bedroom design and sport. "
        + "When you answer, say things like my favorite color is or my favorite subject is. Are you ready?";
        var speechReprompt = "";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'startPersonalityIntent': function () { 
        this.attributes.myFootball;
        this.attributes.myDance;
        this.attributes.myFootball = 0;
        this.attributes.myDance = 0;
        var speechOutput = "What is your favorite color group, dark colors or pastel colors?";
        var speechReprompt = "";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'colorPersonalityIntent': function () { 
        var speechOutput;
        if (this.attributes.myDance == "pastel colors") {
            this.attributes.myDance ++;
            speechOutput = "Cool! What is your favorite design, tie dye or stripes?";
        }
        else {
            this.attributes.myFootball ++;
            speechOutput = "Cool! What is your favorite design, tie dye or stripes?";
        }
        var speechReprompt = "";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'designPersonalityIntent': function () { 
        var speechOutput;
        if  (this.attributes.myFootball == "stripes") {
            this.attributes.myFootball++;
            speechOutput = "Great! What is your favorite subject, math or reading?";
        }
        else {
            this.attributes.myDance++;
            speechOutput = "Great! What is your favorite subject, math or reading?";
        }
        var speechReprompt = "";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'subjectPersonalityIntent': function () { 
        var speechOutput;
        if (this.attributes.myFootball == "math") {
            this.attributes.myFootball++;
            speechOutput = "Amazing! What is your favorite thing to do during your free time, play with friends at the "
            + "park or go outside for a nature walk?";
        }
        else {
            this.attributes.myDance++;
            speechOutput = "Amazing! What is your favorite thing to do during your free time, play with friends at the "
            + "park or go outside for a nature walk?";
        }
        var speechReprompt = "";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'freeTimePersonalityIntent': function () { 
        var speechOutput;
        if (this.attributes.myDance == "nature walk") {
            this.attributes.myDance++;
            speechOutput = "Cool! Last question, what is your personality, ongoing or calm?";
        }
        else {
            this.attributes.myFootball++;
            speechOutput = "Cool! Last question, what is your personality, ongoing or calm?";
        }
        var speechReprompt = "";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'personalityIntent': function () { 
        var speechOutput;
        if (this.attributes.myFootball == "ongoing") {
            this.attributes.myFootball++;
            speechOutput = "Can I tell you your results now?";
        }
        else {
            this.attributes.myDance++;
            speechOutput = "Can I tell you your results now?";
        }
        var speechReprompt = "";
        this.response.speak(speechOutput).listen(speechReprompt);
        this.emit(':responseReady');
    },
    'resultsIntent': function () { 
        var speechOutput;
        if (this.attributes.myFootball > this.attributes.myDance) {
            speechOutput = "<audio src='https://s3.amazonaws.com/ask-soundlibrary/magic/amzn_sfx_fairy_melodic_chimes_01.mp3'/>"
            + "Team sports are your thing. You enjoy being around friends. "
            + "The perfect bedroom design for you would be packed and colorful. "
            + "Hanging posters of your favorite sports team would make your room look well decorated.";
        }
        else {
            speechOutput = "<audio src='https://s3.amazonaws.com/ask-soundlibrary/magic/amzn_sfx_fairy_melodic_chimes_01.mp3'/>"
            + "Solo sports match you. The perfect bedroom design for you is neat, tidy, and formal."
            + "Hanging pictures of scenery around the world would make your bedroom look nice too!";
        }
        var speechReprompt = "";
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
