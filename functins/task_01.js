function Loggin_In (username = "psc"){
    if(username === undefined){
        console.log("Please enter a name: ");
        return;
    }
    return `${username} successfully logged in your account.`;
}

console.log(Loggin_In());
