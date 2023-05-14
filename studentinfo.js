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


const students = [
    {name:"Amit", age:"28", grades:"70", hobbies: "reading" },
    {name:"Sumit", age:"26", grades:"85", hobbies: "reading" },
    {name:"Sanjay", age:"220", grades:"90", hobbies: "reading" }
]

function findTopStudents(arr,threshold )
{
    let result=[];
for(let student of arr)
{
    if(student.grades>85)
    {
result.push(student);
    }
}
console.log(result);
}

findTopStudents(students, 85);