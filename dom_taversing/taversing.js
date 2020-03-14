let val;
const list = document.querySelector('ul.collection');
const listItem=document.querySelector('li.collection-item:first-child');
val=listItem;
val=list;
console.log(val);

//get child nodes
val= list.childNodes;
console.log(val);
val= list.childNodes[0];
console.log(val);
val= list.childNodes[1];
console.log(val);
val= list.childNodes[3].nodeType;
console.log(val);



//get children element nodes
val=list.children;
console.log(val);
val=list.children[2];
console.log(val);
list.children[2].textContent='rakib';
console.log(val);

//children of children
list.children[3].children[0].id='Hello';
val=list.children[3].children[0];

//first child 
val=list.firstChild;
console.log(val);
val=list.firstElementChild;
console.log(val);

//last child
val=list.lastChild;
console.log(val);
val=list.lastElementChild;
console.log(val);

//count child element
val=list.childElementCount;
console.log(val);

//get parent node
val=listItem.parentNode;
console.log(val);
val=listItem.parentElement;
console.log(val);
val=listItem.parentElement.parentElement;
console.log(val);

//get next sibling
val=listItem.nextSibling;
listItem.nextElementSibling.nextElementSibling.previousElementSibling;
console.log(val);

//get prev sibling
val=listItem.previousElementSibling;
val=listItem.previousElementSibling;
console.log(val);