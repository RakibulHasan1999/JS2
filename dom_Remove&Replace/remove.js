//replsce element
//creat element 
const newHeading=document.createElement('h2');
console.log(newHeading);

//add id
newHeading.id='task-title';
//new text node
newHeading.appendChild(document.createTextNode('task List'));
//get the old heading
const oldHeading=document.getElementById('task-title');
console.log(newHeading);
//paren
const cardAction= document.querySelector('.card-action');
//replace
cardAction.replaceChild(newHeading, oldHeading);
console.log(newHeading);




//Remove Element
const lis =document.querySelectorAll('li');
const List=document.querySelector('ul');
//Remove list item
lis[0].remove();

//remove child element
List.removeChild(lis[3]);
//class & ATTR
const firstLi = document.querySelector('li:first-child');
const link= firstLi.children[0];
console.log(firstLi.children[0]);

let val;
//classes
val=link.className;
val=link.classList;
console.log(val);
val=link.classList[0];
console.log(val);
link.classList.add('test');
link.classList.remove('test');
val=link;
console.log(val);

//atributes
val= link.getAttribute('href');
val= link.setAttribute('href','http://rakibul.6te.net/');
console.log(val);
val=link.hasAttribute('title','goolge');
val=link.hasAttribute('tile');
link.removeAttribute('title');
val=link;
console.log(val);

