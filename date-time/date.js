let val;

today = new Date();
val= today;
console.log(val);
console.log(typeof val);

let birthday = new Date('26-12-1999');
val=birthday;
console.log(val);

birthday= new Date('december 26,1999');
val=birthday;
console.log(val);

val= today.getDate();
console.log(val);
val=today.getMonth();
console.log(val);
val= today.getDay(); //numerical representation of sunday,monday,tuesday,thursday,wednesday,friday
console.log(val);
val= today.getFullYear();
console.log(val);
val=today.getHours();
console.log(val);
val=today.getMinutes();
console.log(val);
val=today.getSeconds(); // after every refresh it will be change 
console.log(val);
val=today.getTime();
console.log(val);
