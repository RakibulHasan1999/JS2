const name='rakib';
const age= 20;
const job= 'engineer';
const city='dhaka';
let html;
function hello(){
    return 'EEE';
}

//without template string

html='<ul> <li>name: '+ name +' </li>  <li>age: '+ age +' </li><li>job: '+ job +' </li>  <li>city: '+ city +' </li>  </ul>';
document.body.innerHTML=html;
//or
html='<ul>'+
         '<li>my name: '+ name  +' </li>' +
         '<li>age: '+ age +' </li>' +
         '<li>job: '+ job +' </li>' +
         '<li>city: '+ city +' </li>' +
     '</ul>';
document.body.innerHTML=html;



//with templates string
html= `<ul>
         <li>name:  ${name} </li>
         <li>age:  ${age} </li>
         <li>job:  ${job}  </li>
         <li>city:  ${city} </li>
         <li> ${hello()} </li>
      </ul>`
    ;
document.body.innerHTML=html;