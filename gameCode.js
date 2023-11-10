function theGame() {
    /*this is a function to play craps in game.html
    for sum of 7 or 11 loses, even doubles grants you a win
    Jeremy Gurzynski
    jgurzynski85952@uat.edu
    18OCT23*/
    console.log("playCraps() started");

    //Generates results for die 1
    var die1 = Math.ceil(Math.random() * 6);
    console.log("die1 result = " + die1);
    document.getElementById("die1Res").innerHTML = "Result = " + die1

    //Generates results for die2
    var die2 = Math.ceil(Math.random() * 6);
    console.log("die2 result = " + die2);
    document.getElementById("die2Res").innerHTML = "Result = " + die2

    //Adds both of the due to create the sum
    var sum = die1 + die2;
    console.log("sum result = " + sum);
    document.getElementById("sumRes").innerHTML = "Result = " + sum


    /*Working on way to randomize text so it is not the same three phrases each time,
     will change in future once figure out how*/
    //check for 7 or 11 meaning loss
    if (sum == 7 || sum == 11) {
        document.getElementById("gameRes").innerHTML = "Game Over. Venom defeated you.";

    }
    //check for doubles and even for the win
    else if (die1 == die2 && die1 % 2 == 0) {
        document.getElementById("gameRes").innerHTML = "Oh man you did it! You defeated Venom!";
        
        
    }
    //did not win, did not lose so a push 
    else {
        document.getElementById("gameRes").innerHTML = "You didn't win or lose, but you landed a pretty good blow! \
         Keep going, we have to finish Venom!";
        
    }


    
    

}

