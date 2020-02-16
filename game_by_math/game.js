// gassing game
// gase a number from 1 to 5
// generate a rando number; then show massege won else lost
// run the game for 5 time
// show the number of wons and lost



var numOfwon=0;
var numOfLost=0;

for(var i=1; i<=5; i++){
    var guessNumber= prompt("Enter a number from 1 to 5");
    var randomNumber=Math.floor(Math.random()*5)+1; 
    if(guessNumber==randomNumber){
        console.log("you have won");
        numOfwon++;
    }
    else{
        console.log("you have lost. The random number was "+ randomNumber);
        numOfLost++;
    }
}

document.write("Number of own="+ numOfwon+ "<br>");
document.write("Total Number of lost ="+numOfLost+"<br>");



//another process

// var own=0;
// var lost=0;
// let val;
// for(i=1; i<=5; i++){
// val1=prompt("enter a number from 1 to 5");
// val2= Math.floor(Math.random()*5)+1; 
// console.log("you enter "+ val1);
// if(val1==val2){
//     console.log("you have own");
//     own++;
// }
// else{
//     console.log("you have lost. The random is "+ val2);
//     lost++;
// }
// }
// document.write("Total number of own ="+ own+ "<br>");
// document.write("Total num of lost= "+ lost+ "<br>");