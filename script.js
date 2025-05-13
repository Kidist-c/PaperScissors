//ROCK PAPER SCISSORS 


const choices=['rock','paper','scissor'];
const playerDisplay=document.getElementById('playerDisplay');
const computerDisplay=document.getElementById('computerDisplay');
const resultDisplay=document.getElementById('result');

function playGame(playerChoice){
    const computerChoice=choices[Math.floor(Math.random()*3)];
    let result="";
    if(playerChoice===computerChoice){
        result="It's A Tie!"
    }else{
        switch(playerChoice){
            case "rock":
                result=computerChoice==="scissor"? "YOU WIN!" :"YOU LOSE!";
                break;
            case "paper":
                result=computerChoice==="rock"? "YOU WIN!" :"YOU LOSE!";
                break;  
            case "scissor":
                result=computerChoice==="paper"? "YOU WIN!" :"YOU LOSE!";
                break;   
        }
    }
    
       playerDisplay.textContent = `PLAYER: ${playerChoice}`;
       computerDisplay.textContent=`Computer:${computerChoice}`;
       resultDisplay.textContent=result;
       resultDisplay.classList.remove('green','red');
       switch(result){
        case "YOU WIN!":
            resultDisplay.classList.add('green');
            break
        case "YOU LOSE!":
            resultDisplay.classList.add('red');
            break
       }
       
           
   

    

     
     
}
