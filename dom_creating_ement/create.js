//creat element
const li =document.createElement('li');
 console.log(li);

 //add class
 li.className='collection-item';
 console.log(li);

//add Id
li.id='new-item';
console.log(li);

//add atribute
li.setAttribute('title','New Item');
console.log(li);

// //creat text note and append
li.appendChild(document.createTextNode('hello Rakib'));
console.log(li);

         // //creat new link element
         // const link=document.createElement('a');

         // //add classes
         // link.className='delete-item secondary-content';

         // //add icon html
         //  link.innerHTML= '<i class="fa fa-remove"></i>';

         // //append link into 
         //  li.appendChild(link);

//append li as child to ul
 document.querySelector('ul.collection').appendChild(li); //use for add list
 console.log(li);



 
 //new
 const la =document.createElement('li');
 la.className='collection-item';
 la.id='item';
 la.appendChild(document.createTextNode(' Rakib'));

 //creat new link element
 const link1=document.createElement('a');
 //add classes
 link1.className='delete-item secondary-content';

 //add icon html
 link1.innerHTML= '<i class="fa fa-remove"></i>';
 //append link into li
 la.appendChild(link1);

 document.querySelector('ul.collection').appendChild(la); 