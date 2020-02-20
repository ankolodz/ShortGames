document.addEventListener("mousemove",mouseHendler,false);
var lastClientXPosition;
var actuallBatPosition = 600;
var batSpeed = 30, batWidth = 100;

var canvas, context;

function mouseHendler(e){
    if (e.clientX > lastClientXPosition)
        actuallBatPosition += batSpeed;
    else if (e.clientX < lastClientXPosition)
        actuallBatPosition -= batSpeed;
    lastClientXPosition = e.clientX;

    if(actuallBatPosition>canvas.width - batWidth)
        actuallBatPosition = canvas.width - batWidth;
    
    if (actuallBatPosition < 0)
        actuallBatPosition = 0;
    console.log(actuallBatPosition);
}
function init (){
    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');
    loop();
}
function loop (){
    draw();
    window.requestAnimationFrame(loop);
}
function draw(){
    
    context.clearRect(0, 0, canvas.width, canvas.height); 
    drawBat();
}

function drawBat(){
    context.fillStyle = 'green';
    let x = actuallBatPosition;
    context.fillRect(x,canvas.height-10,x+batWidth,canvas.height);
}