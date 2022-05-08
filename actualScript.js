let rockpaperscissors = ['rock','paper','scissors'];
let playerScore = 0;
let computerScore = 0;
let messages;
let winnermessage;

const buttons = document.querySelectorAll(".btn");
const container = document.querySelector("#container");
const score = document.createElement('p');
score.classList.add('content');
container.appendChild(score);

const selections = document.querySelector(".selections");
const playerComputerSelection = document.createElement('p');
playerComputerSelection.classList.add('selectionscontent');
selections.appendChild(playerComputerSelection)

const winners = document.querySelector(".winnercontainer");
const winnerSelection = document.createElement('p');
winnerSelection.classList.add('winnerscontent');
winners.appendChild(winnerSelection);

const won = document.querySelector(".won");
const whoWon = document.createElement('p');
whoWon.classList.add('wonselect');
won.appendChild(whoWon);


function buttonPlay(){
    const btn1 = document.getElementById("Rock")
    const btn2 = document.getElementById("Paper")
    const btn3 = document.getElementById("Scissors")
    btn1.addEventListener("click", (e) => {
        playerSelection = 'rock'
        game(playerSelection, computerSelection)
        score.textContent = `The score is ${(playerScore)} || ${computerScore}`
        winnerSelection.textContent = `${messages}`
        
        
    })
    btn2.addEventListener("click", (e) => {
        playerSelection = 'paper'
        game(playerSelection, computerSelection)
        score.textContent = `The score is ${(playerScore)} || ${computerScore}`
        winnerSelection.textContent = `${messages}`

    })
    btn3.addEventListener("click", (e) => {
        playerSelection = 'scissors'
        game(playerSelection, computerSelection)
        score.textContent = `The score is ${(playerScore)} || ${computerScore}`
        winnerSelection.textContent = `${messages}`

    })

}

function computerPlay(){
    let computerChoice = rockpaperscissors[Math.floor(Math.random()* rockpaperscissors.length)];
    return computerChoice;

}

function playRound(playerSelection, computerSelection){
    //console.log(playerSelection, computerSelection)
    let msg1= 'A tie!'
    let msg2= 'You Won!'
    let msg3= 'You lost!'
    if (playerSelection === computerSelection){
        playerScore +=1;
        computerScore+=1;
        messages = msg1;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection ===
        'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection
        === 'paper'){
        playerScore+=1;
        computerScore+=0;
        messages = msg2;
    } else if (playerSelection === 'rock' && computerSelection === 'paper' || playerSelection ===
    'paper' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection
    === 'rock'){
        playerScore+=0;
        computerScore+=1;
        messages = msg3;
    }

    //returns a string based on the final score of the game "===" is a tie > is a win and < is a loss!!!
}


function game(playerSelection, computerSelection){

    for (let i = 0; i < 5; i++){
        computerSelection = computerPlay();
    }
    if(playerScore === 5 || computerScore === 5 || playerScore === 5 && computerScore === 5){
        if(playerScore > computerScore){
            playerScore = 0;
            computerScore =0;
            winnermessage = "You won the game!"
            whoWon.textContent = `${winnermessage}`
        }else if (playerScore < computerScore){
            playerScore = 0;
            computerScore = 0;
            winnermessage = "You lost the game"
            whoWon.textContent = `${winnermessage}`
        }else if (playerScore === computerScore){
            playerScore = 0;
            computerScore = 0;
            winnermessage= "You tied the game!"
            whoWon.textContent = `${winnermessage}`
    } 
}
playRound(playerSelection,computerSelection)
window.addEventListener('click', ()=>{
    //when a click is detected DOM method is activated
    playerComputerSelection.textContent = `The selections are: ${playerSelection} || ${computerSelection}`
})
}

const computerSelection = computerPlay();
let playerSelection = buttonPlay();
game()
//console.log(playerSelection, computerSelection)