// creat object
var student1={
    name: "rakib",
    age: 20,
    cgpa: 3.023,
    hobbies:['travelling','music','cooking']
}
var student2={
    name: "nirob",
    age: 24,
    cgpa: 3.50,
    hobbies:['travelling','debating','teaching']
}
console.log("name=  "+ student1.name, "age=  " +student1.age, "hobbies= " +student1.hobbies);
console.log("name=  "+ student2.name, "age=  " +student2.age, "hobbies= " +student2.hobbies);



// formula 2
//adding constructor
function student(name, age, cgpa, hobbies){  //this is constrctor
    this.name=name;
    this.age=age;
    this.cgpa=cgpa;
    this.hobbies= hobbies;
}

var student1=new student("rakib",20,3.023,['travelling','music','cooking']);
var student2=new student("nirob",24,3.50,['travelling','debating','teaching']);

console.log(student1.name);
console.log(student1.age);
console.log(student1.hobbies);

console.log(student2.name);
console.log(student2.age);
console.log(student2.hobbies);




//formula 3

function student(name, age, cgpa, hobbies){  //this is constrctor
    this.name=name;
    this.age=age;
    this.cgpa=cgpa;
    this.hobbies= hobbies;

    this.display=function(){    // function call in constructor
           console.log(student1.name);
           console.log(student1.age);
           console.log(student1.hobbies);
 
    }
}

var student1=new student("rakib",20,3.023,['travelling','music','cooking']);
var student2=new student("nirob",24,3.50,['travelling','debating','teaching']);


student1.display();
student2.display();

