var numSquares = 6;


var colors=generateRandomColors(numSquares);
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
// var modeButtons = document.querySelectorAll(".mode");
var Easybtn  = document.querySelector("#Easy");
var Hardbtn  = document.querySelector("#Hard");

colorDisplay.textContent = pickedColor;
// for(var i=0;i<modeButtons.length;i++){
//     modeButtons[i].addEventListener("click",function(){
//         modeButtons[0].remove("selected");
//         modeButtons[1].remove("selected");
//         this.classList.add("selected");
//         if(this.textContent === "Easy"){
//             numSquares=3;
//         }
//         else{
//             numSquares=6;
//         }
//         reset();

//     });
// }

function reset(){
    colors = generateRandomColors(numSquares);

    pickedColor = pickColor();

    colorDisplay.textContent = pickedColor;

    for(var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display="none";
        }
    }
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
    h1.style.backgroundColor = "steelblue";
}


Easybtn.addEventListener("click",function(){
    Hardbtn.classList.remove("selected");
    Easybtn.classList.add("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }
});

Hardbtn.addEventListener("click",function(){
    Easybtn.classList.remove("selected");
    Hardbtn.classList.add("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    
    }
});

resetButton.addEventListener("click",function(){
// console.log("clicked");
colors = generateRandomColors(numSquares);

pickedColor = pickColor();

colorDisplay.textContent = pickedColor;

for(var i=0;i<squares.length;i++){
    squares[i].style.backgroundColor = colors[i];
}
messageDisplay.textContent = "";
resetButton.textContent = "New Colors";
h1.style.backgroundColor = "steelblue";

});




for(var i=0;i<squares.length;i++){
    squares[i].style.backgroundColor=colors[i];
    squares[i].addEventListener("click",function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct";
            changeColor(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play Again?";
        }
        else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try again";
            console.log(messageDisplay.textContent);
        }
    });
}

function changeColor(color){
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random()*colors.length);
    return colors[random];
}

function generateRandomColors(num){
    var arr=[];
    for(var i=0;i<num;i++){
        arr.push(randomColors());
    }
    return arr;
}

function randomColors(){
var red = Math.floor(Math.random()*256);
var green = Math.floor(Math.random()*256);
var blue = Math.floor(Math.random()*256);

//rgb(red, green, blue)
var res = "rgb("+red+", "+green+", "+blue+")";
return res;

}