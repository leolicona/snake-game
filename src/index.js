
const cssConsole = 'color: white; font-weight: bold; background-color: #DB6B97; padding: 2px; '
// 
const squares = document.querySelectorAll('.grid div')
    //console.log( `%c const squares {${typeof(squares)}}`,cssConsole, squares.length);
const scoreDisplay = document.querySelector('.score')
    //console.log( `%c const scoreDisplay {${typeof(scoreDisplay)}}`,cssConsole, scoreDisplay);
const startBtn = document.querySelector('.start')
    console.log( `%c const startBtn {${typeof(startBtn)}}`,cssConsole, startBtn);

const width = 10;
let currentIndex = 0;
let appleIndex = 0;
let currentSnake = [];
let direction; 
let score = 0;
let speed = 0.9;
let intervalTime = 0;
let interval = 0; 

// To start and restart the game
function startGame() {
    console.log('Click me!');
    startBtn.classList.add('onclick')
    console.log(startBtn);
    currentSnake.forEach( i => {squares[i].classList.remove('snake')
    console.log('Reset:', squares[i])});
   
   //squares[appleIndex] = classList.remove('apple');
   
        
    clearInterval(interval)
    score = 0;
    randomApple();
    direction = 1;
    scoreDisplay.innerText = score;
    intervalTime = 500;
    currentSnake = [2, 1, 0];
    currentIndex = 0;
    currentSnake.forEach(index => squares[index].classList.add('snake'))
    interval = setInterval(moveOutComes, intervalTime);    
}

//function that deals with ALL the ove outcomes of the Snake
    function moveOutComes() {
            console.log('currentSnake: ', currentSnake);
        //deals with the snake hitting border or hitting self
        if(
            (currentSnake[0] + width >= (width * width) && direction == width) ||
            (currentSnake[0] % width === width -1 && direction === 1) ||
            (currentSnake[0] % width === 0 && direction === -1) ||
            (currentSnake[0] - width < 0 && direction === -width) || 
            squares[currentSnake[0] + direction].classList.contains('snake')
        ) {
            clearInterval(interval);
            scoreDisplay.textContent = 'Game Over'
            return console.log('Game Over');
        }
        const tail = currentSnake.pop();
        squares[tail].classList.remove('snake');
        currentSnake.unshift(currentSnake[0] + direction);

        //deals with snake getting apple
        if(squares[currentSnake[0]].classList.contains('apple')) {
            squares[currentSnake[0]].classList.remove('apple');
            squares[tail].classList.add('snake');
            currentSnake.push(tail);
            randomApple(); 
            score++;
            scoreDisplay.textContent = score;
            clearInterval(interval);
            //intervalTime = interval * speed;
            interval = setInterval(moveOutComes, intervalTime)
        }
        squares[currentSnake[0]].classList.add('snake');
        
    }

//generate new apple once apple is eaten
function randomApple() {
    do {
        appleIndex = Math.floor(Math.random() * squares.length)
    } while  (squares[appleIndex].classList.contains('snake'))
    squares[appleIndex].classList.add('apple')

}
   

// Assing function to keycodes 

function control(e) {
    squares[currentIndex].classList.remove('snake');
    console.log('squares[currentIndex] is: ', squares[currentIndex], currentIndex );
    if (e.keyCode == 39) {
        direction = 1;
        console.log(`Direction ${direction}`);
    } else if (e.keyCode == 38){
        direction = - width;
        console.log(`Direction ${direction}`);
    } else if (e.keyCode == 37){
        direction = -1;
        console.log(`Direction ${direction}`);
    } else if (e.keyCode == 40){
        direction = + width;
        console.log(`Direction ${direction}`);
    }
}


document.addEventListener('keyup', control) 
startBtn.addEventListener('click', startGame)