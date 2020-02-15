
const firstName= prompt("Please Enter your first name");
const lastName= prompt("please enter your last name");
const fullName= firstName+lastName;

const uppercase1= firstName.toUpperCase();
const uppercase2 =lastName.toUpperCase();

const lowercase1=firstName.toLowerCase();
const lowercase2=lastName.toLowerCase();

const firstlength=firstName.length;
const lastlength=lastName.length;
const totallength= fullName.length;


const age= prompt("please enter your age");

const city= prompt("please enter your city");
const cityuppercase=city.toUpperCase();
const citylowercase=city.toLowerCase();
const citylength=city.length;



let val;
val1=uppercase1.substring(0,1);
val2=lowercase1.substring(1,firstlength);
val3=val1+val2;

val4=uppercase2.substring(0,1);
val5=lowercase2.substring(1,lastlength);
val6=val4+val5;




let cit;
cit1=cityuppercase.substring(0,1);
cit2=citylowercase.substring(1,citylength);
cit=cit1+cit2;

console.log("your address: ");
console.log("Full name: "+ val3+" " +val6);

let x;
today = new Date();
valx1= today.getFullYear();
valx2=today.getMonth();
valx3=valx1+valx2;
valxy=valx1-age;
valz=valx1+valx2;
console.log("Birth year: "+ valxy);
valz1=30-age;
valz2= valx3+60;


if(!isNaN(age)){
    console.log("age: "+age);
    if(age> 0 && age < 12){
        console.log( val3 +"is a child");
    }
    else if (age >= 13 && age <= 19){
        console.log(val3+" is teenager");
    }
    else{
        console.log (val3 + " is adult");
    }
 }
 else{
    console.log("undidined age");
}
console.log("city: " +cit);
console.log("apply time for govt job: "+ valz1 +" years");
console.log("Retired from job: "+ valz2);
console.log("Today: "+today);
if((valx1%4==0 && valx1%100!=0)){
    console.log("This year is leap year");
}
else{
    console.log("This year is not a leap year");
}