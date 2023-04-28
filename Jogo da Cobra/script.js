const canvas = document.getElementById('game-board');
const ctx = canvas.getContext('2d');

const tileSize = 20;
const numRows = canvas.height / tileSize;
const numCols = canvas.with / tileSize;

let snake = [{ x: 10, y: 10 }];
let food = { x: 15, y: 15 };
let dx = 0;
let dy = 0;



document.addEventListener('keydown', (event) => {
    console.log(event.key)
    if (event.key === 'ArrowUp' && dy === 0) {
        dx = 0;
        dy = -1;
    }
    if(event.key === 'ArrowDown' && dy === 0) {
        dx = 0;
        dy = 1;
    }
    if(event.key === 'ArrowLeft' && dx === 0) {
        dx = -1;
        dy = 0;
    }
    if(event.key === 'ArrowRight' && dx === 0) {
        dx = 1;
        dy = 0;
    }

})

function main() {
    setTimeout(() => {
        moveSnake()
        checkSnakeCollision() 
        checkFoodCollision()                     
        clearCanvas()
        drawSnake()
        drawFood()
        main()
    }, 100)
}

function drawSnake() {
    ctx.fillStyle = 'green'
    snake.forEach((segment) => {
        ctx.fillRect(segment.x * tileSize, segment.y * tileSize, tileSize, tileSize);
        ctx.strokeStyle = 'black';
        ctx.strokeRect(segment.x * tileSize, segment.y * tileSize, tileSize, tileSize);
    })
}

function drawFood() {
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x * tileSize, food.y * tileSize, tileSize, tileSize)
}

function moveSnake() {
    const headSnake = { x: snake[0].x + dx, y: snake[0].y + dy }
    snake.unshift(headSnake)
    snake.pop()
}

function checkFoodCollision() {
    const positionX = snake[0].x === food.x;
    const positionY = snake[0].y === food.y;

    if (positionX && positionY) {
        generateFood();        
        growSnake();       

    }
}

function growSnake() {
    const tailSnake = { ...snake[snake.length - 1] }
    snake.push(tailSnake)
}

function generateFood() {
    food.x = Math.floor(Math.random() * numCols)
    food.y = Math.floor(Math.random() * numRows)

}

function checkSnakeCollision() {
if(snake[0].x < 0 || snake[0].x >= numCols || snake[0].y < 0 || snake[0].y >= numRows ) {
    resetGame()
}
    for (let i = 1; i < snake.length; i++) {
        const positionX = snake[i].x === snake[0].x;
        const positionY = snake[i].y === snake[0].y;
        if (positionX && positionY) {
            resetGame()
        }

    }
}

function resetGame() {
    snake = [{ x: 10, y: 10 }];
    food = { x: 15, y: 15 };
    dx = 0;
    dy = 0;

}

function clearCanvas() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

main()