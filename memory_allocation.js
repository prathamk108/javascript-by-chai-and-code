// STACK (PRIMTIVE), HEAP (NON PRIMTIVE)

let myYotubeName = "prathamkhattervlogs";

let anotherName = myYotubeName;
anotherName = "techexplained";

console.log(myYotubeName);
console.log(anotherName);

// hence this does not change both the values because its copy of the original it just changes anotherName.

let userOne ={
    email : "prathamkhatter108@gmail.com",
    age : 18
};

let userTwo = userOne;
userTwo.email = "techexplained108@gmail.com";
userTwo.age = 20;

console.log(userOne.email);
console.log(userTwo.email);
console.log(userOne.age);

// HERE I AM CHANGING THE AGE OF USERTWO AND PRINTING THE VALUE OF USERONE HOW THE VALUE OF USERONE IS CHANGING THIS IS CAED CALL BY REFERENCE.