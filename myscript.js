let humanScore=0;
let computerScore=0;
let humanChoice;
let playerChoiceElement=document.getElementById('playerChoice');
let computerChoiceElement=document.getElementById('computerChoice');
let displayResElement=document.getElementById('displayResults');
let finalResElement=document.getElementById('finalResult');

const button1=document.getElementById('rock');
if(button1){
    button1.addEventListener('click', function(){
        humanChoice="rock";
        playRound(humanChoice);
    });
}else{console.error("button1 not found");}
const button2=document.getElementById('paper');
if(button2){
    button2.addEventListener('click', function(){
        humanChoice="paper";
        playRound(humanChoice);
    });
}else{console.error("button2 not found");}
const button3=document.getElementById('scissors');
if(button3){
    button3.addEventListener('click', function(){
        humanChoice="scissors";
        playRound(humanChoice);
    });
}else{console.error("button3 not found");}

function playRound(humanChoice){
    let computerChoice=getComputerChoice();

    playerChoiceElement.textContent=`you: ${humanChoice}`;

    computerChoiceElement.textContent=`computer: ${computerChoice}`;
    
    if(humanChoice===computerChoice){
    }
    else if((humanChoice==="rock" && computerChoice==="scissors") || 
    (humanChoice==="paper" && computerChoice==="rock") || 
    (humanChoice==="scissors" && computerChoice==="paper")){
        humanScore++;
    }else{
        computerScore++;
    }
    res();
}

function getComputerChoice(){
    let choices=["rock", "paper", "scissors"];
    let index=Math.floor(Math.random()*3);
    return choices[index];
}
function res(){
    finalResElement.textContent=`you: ${humanScore} | computer: ${computerScore}`;
    if(humanScore==5 || computerScore==5){
            if(humanScore>computerScore){
                displayResElement.textContent="you win";
            }else{
                displayResElement.textContent="computer wins";
            }
    }
}