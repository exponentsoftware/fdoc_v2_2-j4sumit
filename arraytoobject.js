// 1. Create a function that takes an array of numbers and returns an array of objects. Each object should have a key called `number` with the original number, a key called `isEven` with a boolean value indicating whether the number is even, and a key called `double` with double the value of the number.

// ```js
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// createNumberObjects(numbers);
// // Output:
// [
//   { number: 1, isEven: false, double: 2 },
//   { number: 2, isEven: true, double: 4 },
//   // ... (rest of the numbers)
// ]

function createNumberObjects(arr)
{
    let newarr=[];
for(let i=0; i<arr.length; i++)
{
    let num =arr[i];
    let Even = arr[i]%2===0;
    let double = arr[i]*2;
    newarr.push({number:num, isEven:Even, double:double})
}
console.log(newarr);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
createNumberObjects(numbers);
