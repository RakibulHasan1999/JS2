let val;
val=document;
console.log(val);

val=document.all;
console.log(val);

val=document.all[2];
console.log(val);

val=document.all.length;
console.log(val);

val=document.head;
console.log(val);

val=document.body;
console.log(val);


val=document.doctype;
console.log(val);


val=document.domain;
console.log(val);


val=document.URL;
console.log(val);

val=document.characterSet;
console.log(val);

val=document.contentType;
console.log(val);

val=document.forms;
console.log(val);

val=document.forms[0];
console.log(val);


val=document.images;
console.log(val);

val=document.scripts;
console.log(val);

let scripts= document.scripts;
console.log(val);

let scriptsArr= Array.from(scripts);
console.log(val);

scriptsArr.forEach(function(script){
    console.log(script);
});

console.log(val);