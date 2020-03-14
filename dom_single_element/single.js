//document.getElemen By Id()

console.log(document.getElementById("task-title"));

//get things from the element
console.log(document.getElementById("task-title").id);
console.log(document.getElementById("task-title").className);



const taskTitle=document.getElementById('task-title');
//change styling
taskTitle.style.background="green";
taskTitle.style.color="white";
taskTitle.style.padding='5px';
//document.getElementById("task-title").style.display="none";


//change content
taskTitle.textContent="task bar";
taskTitle.innerText="my tasks"; //same work as textContent
taskTitle.innerHTML='<span style= "color:red">Task list</span>';



//document.querySelector()
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('card-title'));
console.log(document.querySelector('h5'));

//change color
document.querySelector('li').style.color='red';
document.querySelector('ul li').style.color='blue';

document.querySelector('li:last-child').style.color='red';
document.querySelector('li:nth-child(3)').style.color='orange';

document.querySelector('li:nth-child(1)').style.background='gray';
document.querySelector('li:nth-child(2)').style.background='violet';

//change line conent
document.querySelector('li:nth-child(4)').textContent='hellow world';//change line text



