document.addEventListener("mousemove",mouseHendler,false);
document.addEventListener("keydown", keyDownHandler, false);
var isPlay = false;
var actuallBatPosition = 300;
var batSpeed = 30, batWidth = 100, batBorder = 10;
var ballRadius = 20, ballSpeedX = 0, ballSpeedY = 0;
var ball_x = actuallBatPosition + batWidth/2, ball_y;

var canvas, context;

function mouseHendler(e){
    actuallBatPosition = e.clientX;

    if(actuallBatPosition>canvas.width - batWidth)
        actuallBatPosition = canvas.width - batWidth;
    
    if (actuallBatPosition < 0)
        actuallBatPosition = 0;
}
function keyDownHandler(e){
    //console.log(e.key);
    if (!isPlay && e.key == " "){
        console.log("pressed");
        ballSpeedY = -2;
        isPlay = true;
    }
}
function init (){
    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');
    ball_y = canvas.height - batBorder - ballRadius;
    loop();
}
function loop (){
    transformBall();
    draw();
    window.requestAnimationFrame(loop);
}
function draw(){
    
    context.clearRect(0, 0, canvas.width, canvas.height); 
    drawBat();
    drawBall();
}
function transformBall (){
    if (!isPlay){
        ball_x = actuallBatPosition + batWidth/2;
        return;
    }
    ball_x += ballSpeedX;
    ball_y += ballSpeedY;
}
function drawBat(){
    context.fillStyle = 'chartreuse';
    let x = actuallBatPosition;
    context.fillRect(x,canvas.height-batBorder,batWidth,batBorder);
}
function drawBall(){
    context.beginPath();            
        context.arc(ball_x,ball_y,ballRadius,0,360* (Math.PI / 180));
        context.fillStyle = 'black';
        context.fill();
    context.closePath();
}