# Rock Paper Scissors 

## I have included my code that I typed up at the end of class yesterday if you want to take a look at it. 

# Process: 

In 'LaunchRequest'
1. We need to create an array that stores the options the computer can choose from 
    var options = ["Rock", "Paper", "Scissors"]; 
    
2. We need to create a random number so that it chooses randomly from the options above.
    var randomNumber = Math.floor(Math.random()*3);
    // We multiply by 3 because there are 3 options

3. We need to associate the number with the option. To do this, we create another variable that stores the choice. 
    var computerChoice = options[randomNumber]; 
    //Note: I use options because that's what my variable is called. 

4. Because we need to use the computerChoice in the next intent, we should change it from var to this.attributes
    this.attributes.computerChoice = options[randomNumber]; 
    
    
NEXT! 
1. We need to change intent name, 'MyFirstIntent' to match the one we created in the front end 

2. We need to create a variable that stores the user's choice 
  //Hint this would require the slot from the front end 
  
3. Next we need to compare the user's choice and the computer's choice to see who would win. 
    Hint: You need to use "if-elseif-else" statements 
    Hint2: Think about how many different scenarios there would be. 
          Ex. Rock vs Paper, Rock vs Scissors, Rock vs Paper
