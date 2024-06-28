function playRound(humanChoice, computerChoice){
    if(humanChoice>computerChoice){
        console.log("you win!")
        humanScore++;
    }
    else if(humanChoice<computerChoice){
        console.log("computer wins!")
        computerScore++;
    }
}
function displayScore(){
    console.log("score:");
        console.log("you: "+humanScore);
        console.log("computer: "+computerScore);
}

// let ch1="rock";     //1
// let ch2="paper";    //2
// let ch3="scissors"; //3

let humanScore=0;
let computerScore=0;

function getComputerChoice(comp){
    let comp=Math.random();
    return comp;
}

function getHumanChoice(player){
    let player=prompt("what's your option?").toLowerCase();
    return player;
}

console.log(getHumanChoice());
console.log(getComputerChoice());

const humanSelection=getHumanChoice();
const computerSelection=getComputerChoice();

playRound(humanSelection, computerSelection);
displayScore();