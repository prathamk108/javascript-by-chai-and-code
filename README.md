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

<h1>Video 14 : Arrays and Array Methods</h1>  

[This is array code.](./arrays.js)

<p>In this video we learnt about syntax of array and some methods of arrays.</p>

<h2>What are arrays?</h2>
<p>Array are nothing but non primitive datatypes which are used to structure/stre a data in organised manner.  

<b>Array are shallow copies that if you make two arrays equal to each other and you change one of the two array other will be changed automatically this is very similar to CALL BY REFERNCE.</b></p>

<h2>ARRAY METHODS</h2>
<p>Some important array methods are:  

1. indexof()
2. push()
3. pop()
4. slice()
5. splice() 
</p>


<h1>Something Important for Beginners</h1>
<p>When i was practicing js on my vs code app i was facing some problem i.e. <b>i was not able to use prompt feature on vs node so i found it difficult to take input. </b></p>
So while browsing the solution to it i found that i can download a package to make a prompt feature.
<h3>SOLUTION:</h3>

<b>STEP 1: </b>  

1. Open PowerShell on your laptop and type `Set-ExecutionPolicy RemoteSigned` to give vs code permission to download packages.
2. TYPE `Y`.

<b>STEP 2: </b>  
1. Open Terminal in your vs code and type `npm install prompt-sync`.

<b>STEP 3: </b>  
1. Write this code in workspace/codespace
```
javascript
    const prompt = require("prompt-sync")();

    let userNumber = prompt("enter your number : ");
    console.log(userNumber);
```
<b>Hence you are ready to code and take input in vs code.</b>

<h1> Video 16 : OBJECTS</h1>
[this is code to objects] (./object.js) 

<h3><b>What are objects?</b></h3>

<p>
it is a way to organise data.<br>

Objects in javascript are of two types: <br>
1. Literals, 
2. Constructor.

In this video we will talk about literals.<br>

<b>Points to Rememmber : When we make an object through literals then the object is singleton.</b>
</p>

Two ways to print the elements of the objects: 
1. 1st way to print thr elements of the objects `console.log(studentDetails.rollNumber);`
2. <b>2nd way to print the elements of the object(Preferred and correct way)
 `console.log(studentDetails["subsection"]);`</b> 

 <p>Why 2nd way is preferred because injavascript the object are treated as string so best way is to access it as strings.</p>

 <h2>Object Methods</h2>
 <p>
 1. hasOwnProperty().<br>
 2. freeze().
 </p>

 <h1> Video 18: Object De-Structuring and JSON</h1><br>

[FOR REFERENCE CLICK HERE.](./object.js)

 <p>in this video we learn how to <b>de-structure an object</b>.</p>
 It is very difficult and impractical to write<br> 

 `console.log(studentDetails.rollNumber)`<br>

 again and again so as an easy transformation we write it once as this<br>
 `const {rollNumber} = studentDetails`<br>
 and now we can print by only writing 
 `rollNumber`.<br>
  
 Also if i want short name for rollNumber i can write it as<br>
 `const {rollNumber: roll} = studentDetails`<br>
 and now i can just write roll for printing roll number. 

 <h1>Video 19: Functions</h1>
 [CLICK HERE FOR REFERENCE.](./functins/01_function.js)

 <b><h3>What are Functions??</h3>
 Function are package which once defined can be used anywhere in the program.</b>

<b><H3>How can you use a Function?? </h3>
It involves three steps that is  

1. Function Definition: In this we give the function what it has to perform.

2. Function Call: In this we instruct a function to execute a block  of code.

3. Function Execution: In this the code finally executes. </b>

<h3>Some terminologies used in Functions(FOR INTERVIEW PURPOSE)</h3>
1. Parameters: are variables defined in function definition step.
2. Arguments: are the constants defined in function calling steps.

```
function addTwoNumber(a, b){     Here a and b are parameters
    return a+b;
}
addTwoNumber(1, 6)               1 and 6 are arguments.
console.log(addTwoNumber(1, 6))
```

<H1>FUNCTION: TASK 1</H1>
<p><b>TASK STATEMENT :</b> In this task we have to make a simple message that a user should see after logging In.  
(GIVE ANY MESSAGE OF YOUR CHOICE. )</p>

[CLICK FOR SOLUTION.](./functins/task_01.js)<br>

<b>Reason for using `If` statement : so that when the argument is not given it will take undefined by itself so to avoid that `if` is used it will ask your name in that case.
<br>
Also to give default value we can define it along with the parameter.</b>


<h1>Video 20 : Function with Array and Object.</h1>
[CLICK FOR CODE REFERENCE.](./functins/task_02.js)
in this video we learnt about object and array handling with functions. <br>
We were building a shopping cart in this as we donot know number of thing in cart before the shopping so we use `REST PARAMETER`
  