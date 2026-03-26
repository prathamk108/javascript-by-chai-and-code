// SHOPPING CART

function shoppingCart(...price) {
    let sum = 0;
    for (let index = 0; index<=2; index++) {
        sum = sum + price[index];
    }
    console.log(sum);
    return price;
}

console.log(shoppingCart(25, 35, 50));


//IMPRTANT NTE DETERMINING THE VALUE OF PRICE IN THE BELOW STATEMENT 
function shoppingCart(num1, num2, ...price) {
    return price;
}

console.log(shoppingCart(25, 35, 50, 100));

//OBJECT HANDLING
const studentDetails={
    name : "pratham",
    batch : "1A52",

};
// USED THE BELOW STEP TO REFER NAME JUST BY NAME AND NOT BY STUDENTDETAILS.NAME AND SIMILAR FOR BATCH JUST FOR CONVINIENCE
const {name} = studentDetails;
const {batch} = studentDetails;


function objectHandling(object_Name){   
    console.log(`My name is ${name} and batch is ${batch}.`);
}
objectHandling(studentDetails)

const myNewArray = [200, 400, 100, 600]

function arrayHandling(anyArray){
    console.log(`second value is: ${anyArray[1]}`)
}
arrayHandling(myNewArray)