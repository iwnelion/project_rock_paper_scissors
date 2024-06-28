let humanScore=0;
let computerScore=0;

function getComputerChoice(){
    let choices=["rock", "paper", "scissors"];
    let index=Math.floor(Math.random()*3);
    return choices[index];
}

function playRound(){
    let humanChoice=prompt("what's your option?").toLowerCase();
    let computerChoice=getComputerChoice();
    console.log(`you: ${humanChoice}`);
    console.log(`computer: ${computerChoice}`);

    if(humanChoice===computerChoice){
        console.log("tie");
    }
    else if((humanChoice==="rock" && computerChoice==="scissors") || 
    (humanChoice==="paper" && computerChoice==="rock") || 
    (humanChoice==="scissors" && computerChoice==="paper")){
        console.log("you win");
        humanScore++;
    }else{
        console.log("computer wins");
        computerScore++;
    }
    console.log("score:");
        console.log("you: "+humanScore);
        console.log("computer: "+computerScore);

}

function playGame(){
    for(let i=0; i<5; i++){
        playRound();
        console.log("=================");
    }
}

playGame();