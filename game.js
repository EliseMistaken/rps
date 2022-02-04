
const btns = document.querySelectorAll('.move');
for (button of btns){
    button.addEventListener('click', getPlayerInput);
} 
let playerScore = 0;
let compScore = 0;

function playRound(playerSelection, computerSelection) {
    let result = ''

    if(playerSelection === computerSelection){
        result = "Tie!";
    }else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        result = `You win! ${playerSelection} beats ${computerSelection}`;
        playerScore += 1;
    } else if(playerSelection === 'paper' && computerSelection === 'rock') {
        result = `You win! ${playerSelection} beats ${computerSelection}`;
        playerScore += 1;
    } else if( playerSelection === 'scissors' && computerSelection === 'paper'){
        result = `You win! ${playerSelection} beats ${computerSelection}`;
        playerScore += 1;
    } else { 
        result = `You lose! ${computerSelection} beats ${playerSelection}`;
        compScore += 1;
    }

    const para = document.querySelector('.results');
    para.innerHTML = `${result}. \n Score: ${playerScore} - ${compScore}`;
    console.log(playerScore, compScore);
    if( playerScore === 5 || compScore === 5){
        const winner = document.querySelector('.winner');
        console.log(`${playerScore > compScore ? 'You' : 'The Computer'} win!`);
        winner.innerHTML = `${playerScore > compScore ? 'You' : 'The Computer'} win!`;

        compScore = 0;
        playerScore = 0;
    }
}

function getPlayerInput(e){
    console.log(e.target.id);
    playRound(e.target.id, getComputerInput());
}
function getComputerInput(){
    const options = ['rock', 'paper', 'scissors'];
    const index = Math.floor(Math.random() * options.length);
    return options[index];
}
