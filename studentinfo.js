// 2. Create an array of objects called `students`. Each object should have keys called `name`, `age`, `grades`, and `hobbies`. Then, create the following functions:

//    a. `findTopStudents` - Returns an array of students who have an average grade above a specified threshold.
   
//    b. `addHobby` - Adds a hobby to a student with a given name, only if the student exists.
   
//    c. `updateStudent` - Updates a student's information only if the student exists. This function should be able to update the student's name, age, grades, and hobbies.

// ```js
// const students = [
//   // ... (Your array of students with their information)
// ];

// // Example usage:

// findTopStudents(students, 85);
// // Output: Returns an array of students with an average grade greater than 85

// addHobby(students, 'Alice', 'painting');
// // Output: Adds 'painting' to the hobbies array of the student with name 'Alice'

// updateStudent(students, 'Alice', { age: 20, grades: [90, 80, 95], hobbies: ['reading', 'painting'] });
// // Output: Updates the student with name 'Alice' to have age 20, new grades, and updated hobbies array


//Students information database
const students = [
    {name:"Amit", age:"28", grades: [70,65,80], hobbies: ["videogame" ,"Surfing Internaet"] },
    {name:"Sumit", age:"26", grades: [90,95,92], hobbies: ["reading", "travelling"] },
    {name:"Alice", age:"25", grades:[85,85,88], hobbies: ["music", "travelling"] }
]

// 2.a Returns an array of students with an average grade greater than 85

function findTopStudents(students,threshold )
{
//Filtering data 
let result = students.filter((student) =>{
    //calculating average grade of each student
    const average = student.grades.reduce((sum, grade)=> sum= sum +grade, 0)/student.grades.length; 
    //checking condition to return
    return average> threshold;
} );
console.log(result);
}

findTopStudents(students, 85); // Need to call


//2.b Adds 'painting' to the hobbies array of the student with name 'Alice'

function addHobby(students, studentname, hobbiesitem )
{
//using Map to iterate Students array and checking student name matched of not
//if its getting match pushing give hobbies item in particular stundent hobbies list.  
   return students.map((student)=>{ if(student.name == studentname) {
        student.hobbies.push(hobbiesitem);
    }
    return student});

}
// console.log(addHobby(students, 'Alice', 'painting')); //Need to call

//2.c Updates the student with name 'Alice' to have age 20, new grades, and updated hobbies array
function updateStudent(students, studentname, {age,grades,hobbies})
{
return students.map((student)=>{
    if(student.name===studentname){
student.age=age;
student.grades=grades;
student.hobbies=hobbies;
    }
    return student;
})

}
console.log(updateStudent(students, 'Alice', { age: 20, grades: [90, 80, 95], hobbies: ['reading', 'painting'] }));


