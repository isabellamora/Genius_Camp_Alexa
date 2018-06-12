/*

This is a function that we will place outside of our "handlers".
It takes in an array that we will call arr inside of the function
and it will randomly choose something from the array.

The return statement will send that random choice back to a function call
*/
// You will be copy-pasting this part outside of handlers

function randomChoice(arr){
  
  //we are choosing a random value that is as big as the number of items in our array
  var randomValue = Math.random() * arr.length;
  
  //then we are rounding down that value, since it can give decimal values and we can't use those in arrays
  var choice = arr[Math.floor(randomValue)];
  
  return choice;
}

//=========================================================================
//Example of a funcion call inside of an intent

'RandomIntent' : function () {
  //We will make an array that has some different items inside of it
  // notice how we use brackets with arrays, and each item is seperated with a comma
  // in this case we have apples oranges and peaches as dialogues
  var myArray = ["apples", "oranges", "peaches"];
  
  //if we want specific items in an array we can access it using [] brackets, and placing a number inside
  // myArray[0] -> "apples"
  // myArray[1] -> "oranges"
  // myArray[2] -> "peaches"
  // Arrays start at 0, and so apples is in the 0th position, etc.

  
  //we call randomChoice and give it the array we are working with
  //Then it will give us some sort of choice
  choice = randomChoice(myArray);
  
  //then we can do whatever we want with choice!
  var speechOutput = "This is what I chose, " + choice;
  this.response.speak(speechOutput);
  this.emit(':responseReady');
  
}
