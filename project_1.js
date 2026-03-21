let computerNumber = (Math.random()*100)+1;
let userNumber;

while (userNumber !== computerNumber) {
    userNumber = Number(prompt("Enter a number = "));
    
    if (userNumber > computerNumber) {
        console.log("Lesser Number!!");
    }
    else if(userNumber < computerNumber){
        console.log("Greater Number!!");
    }
    
}
console.log("Right Guessed!! 🎉");
