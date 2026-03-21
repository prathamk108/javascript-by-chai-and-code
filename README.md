# javascript-by-chai-and-code
Learning javascript through this series and further making projects
## Basics
## Datatypes
Datatypes are of 2 types:
1. Primitive datatype are datatypes which incude: numbers, strings, boolean null and undefined  
2. Non Primitive Datatypes     which are made from primitive datatypes are: Object which furthur incudes array and function.
3. interconversion of datatypes

# Video 10: Memory allocation
[CLICK THIS TO SEE CODE.](./memory_allocation.js)

In this video we learn about memory allocation in js. 

In this we study that there are two types of process :
1. Stack: for PRIMITIVE DATA TYPES
2. Heap: for NON PRIMTIVE DATA TYPES.

Difference between Stack and Heap

|Points of difference    |STACK  |HEAP     |
|------------------------|-------|---------|
|style of data storing   |copying|reference|
|updates the original data|NO     |YES      |


Call By Reference : WHEN I AM CHANGING THE AGE OF USERTWO AND PRINTING THE VALUE OF USERONE HOW THE VALUE OF USERONE IS CHANGING THIS IS CALLED CALL BY REFERENCE.

# Video 11: Strings
[This is the code to strings.](/string.js)

Strings are primitive datatypes.

To learn string the best is to learn string methods the best method are on MDN REFERENCE.  

Some Methods are:  
1. [toUpperCase().](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase "MDN REFERENCE")  
2. [toLowerCase().](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase "MDN REFERENCE")  
3. [slice().](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/sice "MDN REFERENCE")  
4. [split().](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split "MDN REFERENCE")  

# Video 12: Numbers and Maths
[This is the code to Numbers and Maths](./number_maths.js)   

In this video we learn about function of number and maths.  

Some important functions are:  
1. Math.random()  
2. Math.round(number_to_be_rounded)
3. Math.floor(number)  
4. Math.ceil(number)  

I WANT A RANDOM NUMBER BETWEEN 10-20;

    - javascript
        const min = 10; 
        const max = 20;
        console.log(Math.round(Math.random()*(max-min+1)+min));


# Number Guessing Game (Project 1):
[This is Game Code.](/project_1.js)  

In this game user has to guess a number between 1-100. We use the following:
- In this game we use number property like 
    - Math.random()
    - Math.round()
- Also we use  " === " to compare userNumber and computerNumber.
    - " === " is used not " == " to compare both nunmber and type.