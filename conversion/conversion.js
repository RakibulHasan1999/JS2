
//number to string
val=5
val2=5+10
console.log(val,val2 );
console.log(typeof val, typeof val2);
console.log(val.length, val2.length);//here 5,10, etc is only number, so it has no length

val= String(1010)
console.log(val);
console.log(typeof val);
console.log(val.length);

val="rakib,atik"
console.log(val);
console.log(typeof val);
console.log(val.length);

val= String(5+10+7+29+1999)
console.log(val);
console.log(typeof val);
console.log(val.length);//sum is 2050. here is 4 character. so length of string i s 4



//Boolean to string
val=true
val2= false
console.log(val, val2);
console.log(typeof val, typeof val2);
console.log(val.length, val2.length);

val=String(true)
val2=String(false)
console.log(val, val2);
console.log(typeof val, typeof val2);
console.log(val.length, val2.length);




//date to string  *** Date Showing
val=(Date());
console.log(val);
console.log(typeof val);
console.log(val.length);

val=String(Date());
console.log(val);
console.log(typeof val);
console.log(val.length);




//array to string
val=[1,2,3,4]
console.log(val);
console.log(typeof val); //object data type
console.log(val.length);

val=String([1,2,3,4])
console.log(val);
console.log(typeof val);
console.log(val.length); //when a num convert to string then its count also (,)




//tostring
val=(5).toString
console.log(val);
console.log(typeof val);
console.log(val.length);

val=(true).toString
console.log(val);
console.log(typeof val);
console.log(val.length);



// string to number
val= Number('55')
console.log(val);
console.log(typeof val);
console.log(val.toFixed());

val= Number('100.50')
console.log(val);
console.log(typeof val);
console.log(val.toFixed());




//Boolean to Number
val= Number(true)
console.log(val);
console.log(typeof val);
console.log(val.toFixed());

val= Number(false)
console.log(val);
console.log(typeof val);
console.log(val.toFixed());












