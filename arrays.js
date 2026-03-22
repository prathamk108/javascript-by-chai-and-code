// ARRAYS

const arr = [1, 2, 3, 4, 5];
console.log(arr);

console.log(arr[2]);

// ARRAY METHODS
const arr2 = [11, 13, 15, 14, 12, 16, 17, 19, 18, 20];

console.log(arr2.indexOf(15));

arr2.push(21);
console.log(arr2);

arr2.pop();
console.log(arr2);

arr2.unshift(21);
arr2.shift();

const newArr2 = arr2.join();
console.log(newArr2);
console.log(typeof newArr2);

//slice, splice
const arrayNumbers = [1,2,3,4,5,6,7,8,9,10]

console.log("Original Array :",arrayNumbers);

arrayNumbers2 = arrayNumbers.slice(1,4)
console.log("Array after using slice : ",arrayNumbers2);
console.log("Original Array : ",arrayNumbers);

arrayNumbers3 = arrayNumbers.splice(1,4);
console.log("Array after using splice : ", arrayNumbers3);
console.log("Changed Original Array : ", arrayNumbers);