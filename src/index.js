
const cssConsole = 'color: white; font-weight: bold; background-color: #DB6B97; padding: 2px; '
// 
const squares = document.querySelectorAll('.grid div')
    console.log( `%c const squares {${typeof(squares)}}`,cssConsole, squares);
const scoreDisplay = document.querySelector('.score')
    console.log( `%c const scoreDisplay {${typeof(scoreDisplay)}}`,cssConsole, scoreDisplay);
const startBtn = document.querySelector('.start')
    console.log( `%c const startBtn {${typeof(startBtn)}}`,cssConsole, startBtn);

const width = 10;
let currentIndex = 0;
let appleIndex = 0;
let currentSnake = [2, 1, 0];
let direction = 1; 
let score = 0;
let speed = 0.9;
let intervalTime = 0;
let interval = 0; 
// To start and restart the game

//function that deals with ALL the ove outcomes of the Snake
    function moveOutComes() {
        //deals with the snake hitting border or hitting self
        if(
            (currentSnake[0] + width >= (width * width));
        )

        
    }

function startGame() {
    currentSnake.forEach( index => squares[index].classList.remove('snake'));
    squares[appleIndex] = classList.remove('apple');
        console.log( `%c squares[appleIndex] {${[appleIndex]}}`,cssConsole, squares[appleIndex]);
    clearInterval(interval)
    score = 0;
    randomApple();
    direction = 1;
    scoreDisplay.innerText = score;
    intervalTime = 1000;
    currentSnake = [2, 1, 0];
    currentIndex = 0;
    currentSnake.forEach(index => squares[index].classList.add('snake'))
    interval = setInterval(movesOutcomes, intervalTime);    
}
// Assing function to keycodes 

function control(e) {
    squares[currentIndex].classList.remove('snake');

    if (e.keyCode == 39) {
        direction = 1;
    } else if (e.keyCode == 38){
        direction = - width;
    } else if (e.keyCode == 37){
        direction = -1;
    } else if (e.keyCode == 40){
        direction = + width;
    }
}

document.addEventListener('keyup', control) 
startBtn.addEventListener('click', startGame)