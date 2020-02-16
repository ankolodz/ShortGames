var result =0;
var work =true;
var name="unknown";
var time = 10;
var takt =0;
var licz =0;
var level =1;
var transform_x=1;
var transform_y=0;
var speed=2;
var ball_x=100;
var ball_y=100;
var squars = [];
var numberOfSquars=3;
//obsługa klawiatury
document.addEventListener("keydown", keyDownHandler, false);

function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        transform_x=speed;
        transform_y=0;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        transform_x=-speed;
        transform_y=0;
    }
    else if(e.key == "Up" || e.key == "ArrowUp") {
        transform_x=0;
        transform_y=-speed;
    }
    else if(e.key == "Down" || e.key == "ArrowDown") {
        transform_x=0;
        transform_y=speed;
    }
}

function init(){
    name=window.prompt("Podaj swój login: "); 
    speed=window.prompt("Start circle speed: ");
    numberOfSquars=window.prompt("Square: ")*3;

    for (var i=0;i<numberOfSquars;i=i+3)  newSquar(i);

    work = true;
    clock();
    startGame();
}

function startGame(){
    if (!work) return;
    draw();
    window.requestAnimationFrame(startGame);    
 }

 function draw (){

    headerUpdate();
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);    
    
    for (var i=0;i<squars.length;i=i+3){
        if (ballColision(i)){
            console.log("Colision!");
                result+=squars[i+2];
                newSquar(i);                
        }        
        drawsquar(squars[i],squars[i+1],squars[i+2]);
    }
    //increaseSquars();
    drawBall();

    
}
function ballColision(i){
    return  ball_x>squars[i]-30 && //ball radius 30px + squar 50px
            ball_x<squars[i]+80 &&
            ball_y>squars[i+1]-30&& 
            ball_y<squars[i+1]+80
}

function newSquar(i){
    squars[i]=Math.random()*1000;//X position
    squars[i+1]=Math.random()*1000%680;//Yposition
    squars[i+2]=20;//points
}

//rysowanie piłki 
function drawBall(){
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    ball_x+=transform_x;
    ball_y+=transform_y;

    if (ball_x>1270)
        ball_x=-30;
    else if (ball_x<-30)
        ball_x=1270;

    if (ball_y>750)
        ball_y=-30;
    else if (ball_y<-30)
        ball_y=750;

    context.beginPath();            
            context.arc(ball_x,ball_y,30,0,360* (Math.PI / 180));
            context.fillStyle = 'black';
            context.fill();
    context.closePath();


}
//rysowanie kwadratu
function drawsquar (x,y,value){
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    if (value>0)
        context.fillStyle = 'greenyellow';
    else
        context.fillStyle = 'orangered';
    context.fillRect(x,y,50,50);
    context.fillStyle = 'black';
    context.font = "20px Arial";
    context.fillText(value,x+15,y+20)
}
//********************
function headerUpdate() {
    score=document.getElementById("Score");
    score.textContent=result;
    handle=document.getElementById("Name");
    handle.textContent=name;
    stoper=document.getElementById("Time");
    stoper.textContent=time;
}
function clock(){
    time--;
    if(time==5){
        var pageElement = document.getElementsByClassName("top");
        for(var j=0; j<pageElement.length; j++)
            pageElement[j].className = "top_alert";
    }
    if (time==59){
        var pageElements2 = document.getElementsByClassName("top_alert");
        for(var j=0; j<pageElements2.length; j++)
            pageElements2[j].className = "top"; 
    }

    if (time > 0){
        for (var i=2;i<squars.length;i=i+3){
            if(squars[i]<(-20)) 
                newSquar(i-2);
            else 
                squars[i]--;
        }
    }
    else{
        level++;
        if (level==4){
            work = false;
            window.alert("Finish your point: "+result);
            level=0;
            speed=1;
            startGame();
            return;
        }
        numberOfSquars*=2;
        for(var i=squars.length;i<numberOfSquars;i=i+3)
            newSquar(i);
        time=60;
        speed*=level;
    }    
    
    setTimeout(clock,1000/level);
}


