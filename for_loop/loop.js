
// structure of for loop
// for( initiaization; condition; increasing/decreasing)

//1,2,3,4,5,6,7,8,9,......
for(var x = 1; x<=30; x=x+1){
    console.log(x);
}
console.log("the end");


//even num(2,4,6,8,10....)
for(var x = 2; x<=30; x=x+2){
    if(x==16){
        console.log("stop the loop");
        break;
    }
    console.log(x);
}
console.log("the end");



//odd number(1,3,5,7,9,...)
for(var x = 1; x<=30; x=x+2){
    if(x==29){
        console.log("29 is my favourit num");
        continue;
    }
    console.log(x);
}
console.log("the end");


//decreasing odd (29,27,25...)
for(var x=29; x>=1; x=x-2){
    console.log(x);
}
console.log("the end");



//sum by loop
var m =parseInt(prompt("enter starting number: ")); //parseInt is used for converting from user's enter number to integer num
var n= parseInt(prompt("enteer last number:  "));
var sum=0;
for(i=m; i<=n; i=i+1){
    sum=sum+i;
    console.log(i);
}
console.log("sum= "+ sum);



// indivudual sum num in 3 times
for(var x=m; x<=n; x=x+1){
    var m =parseInt(prompt("enter first number: ")); 
    var n= parseInt(prompt("enteer last number:  "));
    var sum= m+n;
    console.log("sum ="+sum);
}
console.log("sum ="+sum);