



function playRound(playerSelection, computerSelection) {
    let gameOutcome = 0;
    if(playerSelection === computerSelection){
        console.log("Tie!");
        gameOutcome = 0;
    }else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        gameOutcome = 1;
    } else if(playerSelection === 'paper' && computerSelection === 'rock') {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        gameOutcome = 1;
    } else if( playerSelection === 'scissors' && computerSelection === 'paper'){
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        gameOutcome = 1;
    } else { 
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        gameOutcome = -1;
    }
    return gameOutcome;
}

function getPlayerInput(){
    let playerInput = prompt("Rock Paper or Scissors?", '');
    if(playerInput){
        playerInput = playerInput.toLowerCase();
    }
    return playerInput;
}
function getComputerInput(){
    const options = ['rock', 'paper', 'scissors'];
    const index = Math.floor(Math.random() * options.length);
    return options[index]
}

function game(numGames=5){
    console.log("Rock Paper Scissors!");
    let playerScore = 0;
    let computerScore = 0;

    for( let i = 0; i < numGames; i++){
        let outcome = playRound(getPlayerInput(), getComputerInput());
        if(outcome > 0){
            playerScore++;
        }else if (outcome < 0){
            computerScore++;
        }
    }
    console.log(`Final score ${playerScore} to ${computerScore}. `);
    if(playerScore === computerScore){
        console.log('It\'s a tie!');
    }else {
        console.log(`${playerScore > computerScore ? 'You' : 'The Computer'} win!`);
    }

}