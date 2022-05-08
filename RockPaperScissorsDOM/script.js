
let playerScore = 0;
let computerScore = 0;
let rounds = 0;
//for loop rounds[i] into function then ${rounds}

let rockpaperscissors = ['rock', 'paper', 'scissors'];

let playerSelection;
const container = document.querySelector("#container");
const score = document.createElement('p');
score.classList.add('content');
container.appendChild(score);

const selections = document.querySelector(".selections");
const playerComputerSelection = document.createElement('p');
playerComputerSelection.classList.add('selectionscontent');
selections.appendChild(playerComputerSelection)

function computerPlay(){
    let rockpaperscissors = ['rock','paper','scissors'];
    let choice = rockpaperscissors[Math.floor(Math.random()  * rockpaperscissors.length)];
     return choice;
}
//computerPlay()

const btn1 = document.getElementById("Rock")
const btn2 = document.getElementById("Paper")
const btn3 = document.getElementById("Scissors")
btn1.addEventListener("click", (e) => {
    playerSelection = 'rock'
    playRound(playerSelection,game())
   score.textContent = `The score is ${(playerScore)} || ${computerScore}`
   //playerComputerSelection.textContent = `The selections are: ${playerSelection} || ${computerSelection}`
    game();
})
btn2.addEventListener("click", (e) => {
    playerSelection = 'paper'
    playRound(playerSelection,game())
    score.textContent = `The score is ${(playerScore)} || ${computerScore}`
   game();
})
btn3.addEventListener("click", (e) => {
    playerSelection = 'scissors'
    playRound(playerSelection,game())
    score.textContent = `The score is ${(playerScore)} || ${computerScore}`
    //playerComputerSelection.textContent = `The selections are: ${playerSelection} || ${computerSelection}`
    game();
})

function playRound(playerSelection, computerSelection){
    console.log(playerSelection, computerSelection)
     if(playerSelection === 'rock' && computerSelection === 'rock'){
        playerScore+=1 
        computerScore +=1;
        //return "Its a tie! Rock and Rock!!!";
    } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        playerScore+=1
        computerScore +=0
        //return "You Won! Rock beats Scissors!!!";
    } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        playerScore+=1
        //computerScore +=0
        return "You Won! Scissors beats Paper!!!";
    } else if (playerSelection === 'paper' && computerSelection === 'rock'){
        playerScore+=1
        computerScore +=0
        //return "You Won! Paper beats Rock!!!";
    }else if (playerSelection === 'rock' && computerSelection === 'paper'){
        playerScore+=0
        computerScore +=1
        //return"You Lost! Rock loses to Paper!!!";
    }else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        playerScore+=0
        computerScore +=1
        //return "You Lost! Scissors loses to Rock!!!";
    }else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        playerScore+=0
        computerScore +=1
        //return "You Lost! Paper loses to Scissors!!!";
    }if(playerSelection === 'paper' && computerSelection === 'paper'){
        playerScore+=1 
        computerScore +=1;
        //return "Its a tie! Paper and Paper!!!";
    }if(playerSelection === 'scissors' && computerSelection === 'scissors'){
        playerScore+=1 
        computerScore +=1;
        //placed before return function so that the code can be accessed and the for loop can access the playerScore and computerScore
        //return "Its a tie! Scissors and Scissors!!!";
    }

}


function game(){

    for (let i = 0; i < 5; i++){
        const computerSelection = computerPlay();
         playerComputerSelection.textContent = `The selections are: ${playerSelection} || ${computerSelection}`
        return computerSelection;

        

        //passes computerPlay(); through to computerSelection and playerPlay(); into playerSelection          
    //runs the game 5 times and tells the pc to randomize the computerPlay 5 times as well as tells the player to enter 5 strings
    //also runs playRound 5 times
    }
   
}

game()

function whoWon(){
    playRound(computerScore, playerScore);
    if(playerScore > computerScore){
       return "You won the game!";
    }else if (playerScore < computerScore){
        return "You lose the game!";
    }else if (playerScore === computerScore){
        return "Its a tie!"
    }
    

}

//console.log(playerScore, computerScore)


/*computerSelection is assigned with computerPlay(), that only happens once so how could it ever change, 
but that's another thing for you to get to, and then when it decides a winner is returns a string to 
where it was called from, where was it called from? */

//function buttonPlay(){
    //const buttons = document.getElementsByClassName("btn1 btn2 btn3")
    //let playerChoice = buttons;
    for (let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener("click", true, () => {
            if(i[0]){
                //return "rock"
            } else if (i += 1){
               // return "paper"
            } else {
                //return "scissors"
            }
        });
}
    //console.log(playerChoice);
//}





