var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input");
var winnerscoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;


p1Button.addEventListener("click",function(){
    if (!gameOver){
        p1Score++;
        // console.log(p1Score);
    } 
    if(winningScore === p1Score) {
        p1Display.classList.add("winner");
        gameOver =true;
    }
    p1Display.innerHTML = p1Score;
})

p2Button.addEventListener("click",function(){
    if (!gameOver){
        p2Score++;
        // console.log(p2Score);
    } 
    if(winningScore === p2Score) {
        p2Display.classList.add("winner");
        gameOver =true;
    }

    p2Display.textContent = p2Score;
})

resetButton.addEventListener("click",function(){
reset();

})

function reset(){
    p1Score=0;
    p2Score=0;
    gameOver=false;
    p1Display.textContent=p1Score;
    p2Display.textContent=p2Score;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
}

numInput.addEventListener("change",function(){
    winnerscoreDisplay.textContent = numInput.value;
    winningScore = Number(numInput.value);
    reset();
})