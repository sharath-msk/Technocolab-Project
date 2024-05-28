const prompt = require('prompt-sync')();

const getUserChoice = (userInput) => {
     userInput = userInput.toLowerCase();

     if(userInput === "rock" || userInput === "paper" || userInput==="scissors") return userInput;
     else return "error"
}

const getComputerChoice = () => {
    let choice = Math.floor(Math.random()*3);
    if(choice === 0) return "rock";
    else if(choice === 1) return "paper";
    else return "scissors";
}

function determineWinner(userChoice , computerChoice){
    if(userChoice === "bomb") return "User wins!"
    if(userChoice === computerChoice) return "tie";

    else{
        if(userChoice === "paper"){
            if(computerChoice === "scissors") return "Computer wins!"
            else if(computerChoice === "rock") return "User wins!";

        }

        else if(userChoice === "rock"){
            if(computerChoice === "paper") return "Computer wins!"
            else if(computerChoice === "scissors") return "User wins!";

        }

        else{
            if(computerChoice === "rock") return "Computer wins!"
            else if(computerChoice === "paper") return "User wins!";
        }
    }

}

function playGame(){
    let userInput = prompt("Enter your choice : ")
    let userChoice = getUserChoice(userInput);
    let computerChoice = getComputerChoice();
    console.log(`User's choice: ${userChoice}, Computer's Choice: ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
}

playGame()




