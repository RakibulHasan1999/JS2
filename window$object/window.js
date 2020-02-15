
//(1) window methods/objects/properties
console.log(123);


//(2) alert
alert("hello world");


//(3) prompt
const input= prompt();
alert(input);



//(4) confirm
if (confirm("enter oky"))
    console.log("Thanks");
 else
 console.log("sorry!");   



//(5) outer/inner  height and weidth in window
let val;
val= window.outerHeight;
console.log("this moment window height= " +val);
val= window.outerWidth;
console.log("this moment window width= " +val);

//inner height
val= window.innerHeight;
console.log("this moment window height= " +val);
val= window.innerWidth;
console.log("this moment window width= " +val);



//(6) scroll point
// let val;
val= window.scrollY;
console.log(val);
val= window.scrollX;
console.log(val);


//(7) location object
// let val;
val= window.location;
console.log(val);
val= window.location.host;
console.log(val);
val= window.location.port;
console.log(val);
val= window.location.href;
console.log(val);

//Redirect
// window.location.href="http://google.com";
// console.log(val);

// //Reload
// window.location.reload();
// console.log(val);



// //(8) history objet
// // to know/ check your history
// //let val;
// window.history.go();
// console.log(val);



//(9) Navigator object
// let val;
val= window.navigator;
console.log(val);
val= window.navigator.appName;
console.log(val);
val= window.navigator.appVersion;
console.log(val);
val= window.navigator.appCodeName;
console.log(val);
val= window.navigator.userAgent;
console.log(val);
val= window.navigator.platform;
console.log(val);
val= window.navigator.vendor;
console.log(val);
val= window.navigator.language;
console.log(val);