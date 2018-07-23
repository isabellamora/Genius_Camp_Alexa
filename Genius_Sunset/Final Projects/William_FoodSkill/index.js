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
      var speechOutput = "Welcome to William's Food Recipes! You can ask for recipes for pizza, lemonade, pasta, bannana bread, hamburgers, french fries, fried chicken, and corn dogs. ";
      this.response.speak(speechOutput).listen("What would you like to do?");
      this.emit(':responseReady');
    },
    'RecipeIntent': function () {
        var recipes = this.event.request.intent.slots.myFood.value;
        var speechOutput; 
        if (recipes=="pizza"){
             speechOutput = "In large bowl, dissolve yeast and sugar in water; let stand for 5 minutes. Add oil and salt. ..."
        + "Turn onto floured surface; knead until smooth and elastic, about 2-3 minutes. ..."
        + "Punch down dough; divide in half. ..."  + "Bake at 400° for 25-30 minutes or until crust is lightly browned.";
        }
        else if (recipes == "lemonade"){
            speechOutput = "You will need, lemons, sugar, a pitcher, and water."
            + "First, get 1 cup of fresh squeezed lemon juice. It has most flavor. " 
            + "Then, get 1 cup of sugar. Pour them both in the pitcher. Finally, mix and enjoy.";
        }
        else if (recipes == "pasta"){
            speechOutput = "You will need tomatoes, cucumbers, bell peppers, ham cubes, green onions, bacon, salami, and mozzarella cheese balls. "
        + "Boil the pasta noodles as instructed on the package.When they’re cooked, drain and rinse with cold water."
        + "Add in your desired amount of other ingredients (we always use olives, cheese, and pepperonis, sometimes tomatoes and peppers)."
        + "Pour at least half of the Italian dressing on the salad, and mix well. "
        + "Refrigerate for at least 2 hours, and pour the remaining dressing on right before serving!";
        }
        else if (recipes == "banana bread"){
            speechOutput = "You will need, 2 to 3 very ripe bananas, peeled, 1/3 cup melted butter,1 teaspoon baking soda, "
        + "Pinch of salt, 3/4 cup sugar (1/2 cup if you would like it less sweet, 1 cup if more sweet), 1 large egg, beaten.1 teaspoon vanilla extract. "
        + "1 1/2 cups of all-purpose flour." + "Preheat oven to 350 degrees F (175 degrees C). Lightly grease a 9x5 inch loaf pan."
        + "In a large bowl, combine flour, baking soda and salt. In a separate bowl, cream together butter and brown sugar. ..."
        + "Bake in preheated oven for 60 to 65 minutes, until a toothpick inserted into center of the loaf comes out clean.";
        } 
        else if (recipes == "hamburgers"){
            speechOutput = "You will need, 1 egg, 1/2 of salt, 1/2 of pepper, 1 pound of ground beef, and 1/2 breadcrumbs. "
        + "Preheat an outdoor grill for high heat and lightly oil grate. In a medium bowl, whisk together egg, salt and pepper. " 
        + "Place ground beef and bread crumbs into the mixture. With hands or a fork, mix until well blended. Form into 4 patties approximately 3/4 inch thick. "
        + "Place patties on the prepared grill. Cover and cook 6 to 8 minutes per side, or to desired doneness.";
        }
        else if (recipes == "French fries"){
            speechOutput = "You will need 2 1/2 pounds of russel potatoes, 1 cup of flour, 1 teaspoon of onion salt, 1 teaspoon of paprika, 1/2 of water, and 1 cup of vegetable oil. "
        + "Slice potatoes into French fries, and place into cold water so they won't turn brown while you prepare the oil. Heat oil in a large skillet over medium-high heat. "
        + "While the oil is heating, sift the flour, garlic salt, onion salt, (regular) salt, and paprika into a large bowl. " 
        + "Gradually stir in enough water so that the mixture can be drizzled from a spoon. " 
        + "Dip potato slices into the batter one at a time, and place in the hot oil so they are not touching at first. " 
        + "The fries must be placed into the skillet one at a time, or they will clump together. Fry until golden brown and crispy. Remove and drain on paper towels. ";
        }
        else if (recipes == "fried chicken"){
            speechOutput = "You will need 1 (4pound) chicken, 1 cup buttermilk, 2 cups of all-purpose flour, 1 teaspoon of paprika, and 2 quarts of vegetable. "
        + "Take your cut up chicken pieces and skin them if you prefer. Put the flour in a large plastic bag. "
        +  "Season the flour with paprika, salt and pepper to taste (paprika helps to brown the chicken). "
        + "Dip chicken pieces in buttermilk then, a few at a time, put them in the bag with the flour, seal the bag and shake to coat well. " 
        + "Place the coated chicken on a cookie sheet or tray, and cover with a clean dish towel or waxed paper. LET SIT UNTIL THE FLOUR IS OF A PASTE-LIKE CONSISTENCY."
        + "THIS IS CRUCIAL! Fill a large skillet (cast iron is best) about 1/3 to 1/2 full with vegetable oil. Heat until VERY hot. "
        + "Put in as many chicken pieces as the skillet can hold. Brown the chicken in HOT oil on both sides. When browned, reduce heat and cover skillet; let cook for 30 minutes."
        +  "Remove cover, raise heat again and continue to fry until crispy. "
        +"Drain the fried chicken on paper towels. Depending on how much chicken you have, you may have to fry in a few shifts. "
        + "Keep the finished chicken in a slightly warm oven while preparing the rest.";
        }
        else if (recipes == "corn dogs")
            speechOutput= "You will need 1 cup yellow cornmeal, 1 cup all purpose flour, 1/4 teaspoon of salt, 1/8 "
        + "teaspoon of pepper, 1 egg, 1 cup of milk, 1 quart of vegetable oil, and 2(16ounce) of sausages, and a bunch of wood skewers. "
        +    "In a medium bowl, combine cornmeal, flour, salt, pepper, sugar and baking powder. Stir in eggs and milk. "
        + "Preheat oil in a deep saucepan over medium heat. Insert wooden skewers into frankfurters. Roll frankfurters in batter until well coated. "
        + "Fry 2 or 3 corn dogs at a time until lightly browned, about 3 minutes. Drain on paper towels. ";
        else {
            speechOutput = " I'm sorry, I dont have that recipe.";
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
