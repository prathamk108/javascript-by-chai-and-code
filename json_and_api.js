const obj1 = {
    name : "Pratham",
    rollNumber : 1025150109,
    batch : "1A52",
}
console.log(obj1.rollNumber);

const {batch} = obj1;
console.log(batch);

const {batch: pool} = obj1;
console.log(pool);
console.log(batch)