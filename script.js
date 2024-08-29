var pipeContainer = document.getElementById("pipe-container");
var pipeTop = document.getElementById("pipe-top");
var pipeGap = document.getElementById("pipe-gap");
var pipeBottom = document.getElementById("pipe-bottom");
var bird1 = document.getElementById("bird");

var score = document.getElementById("score");
var isGameOver = false;
var currentScore = 0;
var gravityInterval;

// Move the pipes and calculate the score
pipeContainer.addEventListener('animationiteration', function () {
    if (!isGameOver) {
        randomPipeGap();
        scoreCalculate();
    }
});
var currentbirdposition = parseInt(window.getComputedStyle(bird1).getPropertyValue("left"));

gravityInterval = setInterval(addGravity, 10);

function addGravity() {
    var bird = document.getElementById('bird');
    var currentTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));

    // Check if the bird has hit the top or bottom
    if(currentTop>=600){
    
        gameOver();
    } else {
        bird.style.top = (currentTop + 1) + "px";
    }

    // Collision detection with pipes
    var currentPipeTop = parseInt(window.getComputedStyle(pipeTop).getPropertyValue("height"));
    var currentPipeLeft = parseInt(window.getComputedStyle(pipeContainer).getPropertyValue("left"));
    var currentPipeGapTop = parseInt(window.getComputedStyle(pipeGap).getPropertyValue("top"));
    var currentPipeGapBottom = currentPipeGapTop + 150;
if(currentPipeLeft<=(currentbirdposition+90)){
   
    
    if(!(((currentTop-currentPipeTop)+currentPipeGapTop>=currentPipeGapTop)&&((currentTop-currentPipeTop)+currentPipeGapTop<=currentPipeGapBottom))){   
    // alert("Game Over")
    console.log(currentTop);
    
    console.log((currentTop-225)+currentPipeGapTop)
    console.log(currentPipeGapTop);
    console.log(currentPipeGapBottom);
    
    gameOver();}
}
}

function randomPipeGap() {
    var newGapPosition = Math.random() * 300 + 100; // Randomize pipe gap between 100px and 400px
    pipeGap.style.top = newGapPosition + "px";

    // Adjust the heights of the top and bottom pipes
    pipeTop.style.height = newGapPosition + "px";
    pipeBottom.style.height = (600 - newGapPosition - 150) + "px"; // 150 is the gap height
}

function scoreCalculate() {
    currentScore++;
    score.textContent = "Your Score is " + currentScore;
}

function gameOver() {
    isGameOver = true;
    pipeContainer.style.animationPlayState = "paused";
    clearInterval(gravityInterval);
    alert("Game Over! Your score was " + currentScore);
    // Optionally, you can reset the game here
}

function jump() {
    if (isGameOver) return;
    var bird = document.getElementById('bird');
    var currentTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    bird.style.top = (currentTop - 60) + "px";
}
