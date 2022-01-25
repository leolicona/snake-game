
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