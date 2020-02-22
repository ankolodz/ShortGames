document.addEventListener("mousemove",mouseHendler,false);
document.addEventListener("keydown", keyDownHandler, false);
var isPlay = false, FPS = 30;
var actuallBatPosition = 300, bat;
var batSpeed = 30, batWidth = 100, batBorder = 20;
var ballRadius = 20, ballSpeedX = 0, ballSpeedY = 0;
var ball,ball_x = actuallBatPosition + batWidth/2, ball_y;



function mouseHendler(e){
    actuallBatPosition = e.clientX;

    if(actuallBatPosition> document.documentElement.clientWidth - batWidth -10)
        actuallBatPosition = document.documentElement.clientWidth - batWidth -10;
    
    if (actuallBatPosition < 10)
        actuallBatPosition = 10;
}
function keyDownHandler(e){
    //console.log(e.key);
    if (!isPlay && e.key == " "){
        console.log("pressed");
        ballSpeedY = -4;
        isPlay = true;
    }
}
function init (){
    bat = document.getElementById("bat");
    ball = document.getElementById("ball");
    ball_y = document.documentElement.clientHeight - batBorder - 2 * ballRadius;
    console.log(ball_y);
    loop();
}
function loop (){

    transformBall();

    draw();
    if (isGameOver()){
        alert("GAME OVER");
        return;
    }
       
    setTimeout(loop,1000/FPS);
}
function draw(){

    drawBat();
    drawBall();
}
function transformBall (){
    if (!isPlay){
        ball_x = actuallBatPosition + batWidth/2;
        return;
    }
        if (sideWallColider()){
            ballSpeedX *= -1;
        }            
        ball_x += ballSpeedX;

        if (topWallColider() || batColider())
            ballSpeedY *= -1;
        ball_y += ballSpeedY
}
function drawBat(){
    bat.style.left = actuallBatPosition;
    bat.style.width = batWidth;
}
function drawBall(){
    ball.style.left = ball_x;
    ball.style.top = ball_y;
}
//colaiders

function sideWallColider(){
    console.log (ball_x  == 10 + " "+ 
        ball_x + 2*ballRadius == document.documentElement.clientWidth - 10)
    return ball_x  <= 10 || 
           ball_x + 2*ballRadius >= document.documentElement.clientWidth - 10;
}
function topWallColider(){
    return ball_y - ballRadius <= 10;//top  frame 10px
}
function batColider(){
    if (ball_y + 2*ballRadius > document.documentElement.clientHeight - 15)//bottom 5px + batHeight 10px
        if (ball_x + 2 * ballRadius >= actuallBatPosition && ball_x  <= actuallBatPosition + batWidth ){
            setCornerBatRotation();
            return true;
        }
            
    return false;
}
function setCornerBatRotation(){
    if (ball_x < actuallBatPosition)
        ballSpeedX = - Math.floor(Math.random()*10)%5;
    
    if (ball_x - 2*ballRadius > actuallBatPosition + batWidth)
        ballSpeedX =  Math.floor(Math.random()*10)%5;
}
function isGameOver(){
    return ball_y > document.documentElement.clientHeight;
}