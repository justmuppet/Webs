const randomNumber = Math.floor(Math.random() *10) +1;

function checkGuess(){
    const userGuess = parseInt(document.getElementById("userGuessInput").value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10){
        document.getElementById("message").textContent = "Please enter a vaild number between 1 and 10";
    }else{
        if (userGuess === randomNumber) {
            document.getElementById("message").textContent =
            "congratulations! you guessed the correct number!";      
        }else{
            document.getElementById("message").textContent = 
            "sorry, wrong guess. try again!";     
         }
    }
}


// var toy = "ball";

// function sayHello(){
//     //Insider here, we write what the function should do
//     console.log("Hello" + name + "Friends!")
// }

// sayHello();

// if (isRaining){
//     //if its you stay inside
//     console.log("It's raining! Stay inside!");
// }else{
//     //if it's not raining, go outside
//     console.log("It's not raining! Go outside!")
// }

// alert("Do not click!!!")
// var name = prompt("Enter your name:")


