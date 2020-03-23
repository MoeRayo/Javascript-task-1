let name = "Moronfolu Olufunke";
let courses = ['HTML', 'CSS', 'JavaScript'];
console.log("My name is: " + name);
console.log("I am offering the following courses: ");
for (let i=0; i<courses.length; i++){
console.log(courses[i]);
}


if (courses.length%2 !== 0){
        console.log("I am doing an odd number of courses, hence the odd numbers between 1 and 200 are: ");
for(let i=0; i<=200; i++){
        if(i%2 !==0 ){
        console.log(i);
  }
    }
}
