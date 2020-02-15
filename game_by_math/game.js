//gassing game
//gase a number from 1 to 5
//generate a rando number; then show massege won else lost
//run the game for 5 time
//show the number of wons and lost

var numOfwon=0;
var numOfLost=0;

for(var i=1; i<=5; i++){ 
    var guessNumber= parseInt(prompt("Enter a number from 1 to 5"));
    var randomNumber=Math.floor(math.random()*5)+1;
    if(guessNumber==randomNumber){
        console.log("you have won");
    }
    else{
        console.log("you have lost. The random number was "+ randomNumber);
    }
}
console.log("Number of own="+ numOfwon+ "<br>");
console.log("Total Number of lost ="+numOfLost+"<br>");