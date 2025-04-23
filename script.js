function getComputerChoice() {
    const x = Math.floor(Math.random() * 3);
    if (x === 0) {
        return 'rock';
    } else if (x === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

console.log(getComputerChoice());

function getHumanChoice() {
    const choice = prompt("Enter your choice (rock, paper, or scissors):");
    return choice;
}

console.log(getHumanChoice());

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    
     if (humanChoice === computerChoice) {
        return  "It's a tie!";
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
             return `You win! ${humanChoice} beats ${computerChoice}`;
        
    } else {
         return `You lose! ${computerChoice} beats ${humanChoice}`;
        
    }
}     
let humanScore=0;
let computerScore=0;
    
     function playGame(){
       
        for(let i=1;i<=5;i++){
            const humanChoice=getHumanChoice();
            const computerChoice=getComputerChoice();
            const result=(playRound(humanChoice,computerChoice))
            console.log(result);
            if(result===`You win! ${humanChoice} beats ${computerChoice}`){
                humanScore++;
            } else if(result===`You lose! ${computerChoice} beats ${humanChoice}`){
                computerScore++;
            }

        }
     }
     playGame();
     if(humanScore > computerScore){
        console.log(`you win by${humanScore}`)
     } else if(computerScore>humanScore){
        console.log(`you lose by ${computerScore}`)
     }

     
       


   

