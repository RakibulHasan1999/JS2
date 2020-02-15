
// switch, case, break, default

 //check number
var digit=prompt("enter any number within 10: ");
switch(digit){
    case "0":
        console.log("you Enter zero ");
        break;
    case "1":
        console.log("you Enter one ");
        break;
    case "2":
        console.log("you Enter two ");
        break;
    case "3":
        console.log("you Enter three ");
        break;
    case "4":
        console.log("you Enter four ");
        break;
     case "5":
        console.log("you Enter five ");
        break;
    case "6":
        console.log("you Enter six ");
        break;
    case "7":
        console.log("you Enter seven ");
        break;
    case "8":
        console.log("you Enter eight ");
        break;
    case "9":
        console.log("you Enter nine ");
        break;
    default:
        console.log(" invelid number");
}



//check vowel or consonent
var letter=prompt("enter any letter");
letter= letter.toLowerCase();
switch(letter){
    case"a":
        console.log(letter+ " is vowel");
         break;
    case"e":
        console.log(letter+ " is vowel");
         break;
    case"i":
        console.log(letter+ " is vowel");
         break;
    case"o":
        console.log(letter+ " is vowel");
         break;
    case"u":
        console.log(letter+ " is vowel");
         break;

    default:
        console.log(letter+ " is consonent");
        break;
}



let val;
today=new Date();
val=today.getDate();
console.log("Date: "+val);
val=today.getDay();
  console.log(val);
switch(val){
    case 1:
       console.log(" today is Sunday");
       break;
    case 2:
       console.log(" today is monday");
       break;
    case 3: 
      console.log(" today is tuseday");
       break;
    case 4:
       console.log(" today is wednessday");
       break;
    case 5:
       console.log(" today is thursday");
       break;
    case 6: 
      console.log(" today is friday");
       break;
    case 7: 
       console.log(" today is saturday");
       break;
}
