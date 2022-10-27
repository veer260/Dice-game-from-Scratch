let player1Score = 0;
let player2Score = 0;
let player1turn = true;
let winner = false;

const player1ScoreMarker = document.querySelector(".player1-score");
const player2ScoreMarker = document.querySelector(".player2-score");
const btn1 = document.querySelector(".player1-btn");
const btn2 = document.querySelector(".player2-btn");
const message = document.querySelector(".message");
const resetButton = document.querySelector(".reset-btn");
const rollDice = document.querySelector(".dice");

function rollTheDice() {
    if( winner) {
        return;
    }
    let numOnDice = Math.floor(Math.random()*6) + 1;
    if(player1turn) {
        player1Score += numOnDice;
        updateScore();
        updatebtn(btn2, 0);
        
        btn2.classList.add('btn-shadow');
        btn1.classList.remove('btn-shadow');
        player1turn = false;
        updatebtn(btn1, numOnDice);
        checkWinner(player1Score, 'Player 1', 'Player 2' );
        
    }else {
        player2Score += numOnDice;
        updateScore();
        updatebtn(btn1, 0);
        
        btn1.classList.add('btn-shadow');
        btn2.classList.remove('btn-shadow');
        player1turn = true;
        updatebtn(btn2, numOnDice);
        checkWinner(player2Score, 'Player 2', 'Player 1');
        
    }
    

}

function checkWinner(score, player, otherPlayer) {
    if( score > 20) {
        message.textContent = `The Winner is ${player}`;
        winner = true;
        reset();
        return;
    }else {
        message.textContent = `${otherPlayer} turn`;
    }
}

function updateScore() {
    player1ScoreMarker.textContent = player1Score;
    player2ScoreMarker.textContent = player2Score;
}

function updatebtn(btn, numOnDice) {
    btn.textContent = numOnDice; 
}

function reset() {
    rollDice.classList.remove('btn-visible');
    resetButton.classList.add('btn-visible');
}

function resetGame() {
    player1Score = 0;
    player2Score = 0;
    btn1.textContent = 0;
    btn2.textContent = 0;
    winner = false;
    player1ScoreMarker.textContent = 0;
    player2ScoreMarker.textContent = 0;
    rollDice.classList.add('btn-visible');
    resetButton.classList.remove('btn-visible');
    message.textContent = "Player 1 turn";
    btn1.classList.add('btn-shadow');
    btn2.classList.remove('btn-shadow');
}
resetButton.addEventListener('click', resetGame);

rollDice.addEventListener('click', rollTheDice);