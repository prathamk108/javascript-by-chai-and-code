const studentDetails = {
    name : "pratham",
    rollNumber : 1025150109,
    contactNumber :  9056677138,
    pool : "A",
    subsection : "1A52",
    lastAttended : ["MONDAY", "TUESDAY"],
}
// // 1st way to print thr elements of the objects
console.log(studentDetails.rollNumber);

// 2nd way to print the elements of the object
console.log(studentDetails["subsection"]);
console.log(studentDetails["pool"]);
console.log(studentDetails["lastAttended"][0])


// OBJECT METHODS
console.log(studentDetails.hasOwnProperty("name"));
console.log(studentDetails.hasOwnProperty("age"));
console.log(studentDetails.hasOwnProperty("pool"));


console.log(studentDetails.toLocaleString());



console.log(studentDetails["pool"]);


studentDetails.pool = "B";
console.log(studentDetails["pool"]);

Object.freeze(studentDetails);
studentDetails.pool = "C";

console.log(studentDetails["pool"]);


//SHORT FORM TO WRITE AN OBJECT IS:

console.log(studentDetails.rollNumber);

const {pool} = studentDetails ;
console.log(pool);

const { pool: batch} = studentDetails;
console.log(pool);
console.log(batch)