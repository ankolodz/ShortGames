var result =0;
var name="unknown";
var time = 10;
var takt =0;
var licz =0;
var level =1;
var transform_x=1;
var transform_y=0;
var speed=2;
var top1=[];
var ball_x=100;
var ball_y=100;
var tab = [];
var length=3;
var newlength=1;
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
//rysowanie piłki 
function drawBall(){
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    ball_x=ball_x+transform_x;
    ball_y=ball_y+transform_y;
    context.beginPath();            
            context.arc(ball_x,ball_y,30,0,360* (Math.PI / 180));
            context.fillStyle = 'black';
            context.fill();
    context.closePath();
    if (ball_x>1270)
        ball_x=-30;
    else if (ball_x<-30)
        ball_x=1270;
    if (ball_y>750)
        ball_y=-30;
    else if (ball_y<-30)
        ball_y=750;
}
//rysowanie kwadratu
function drawsquar (x,y,value){
    //console.log(value);
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
function drawScore() {
    score=document.getElementById("Score");
    score.textContent=result;
    handle=document.getElementById("Name");
    handle.textContent=name;
    stoper=document.getElementById("Time");
    stoper.textContent=time;
    
    //rank=document.getElementById("Top");
    //rank.textContent=top;

}
function finish(){
    for (var i=0;i<6;i=i+2){
        if(top[i]<result){
            top1[i]=name;
            top1[i+1]=result;
        }
    }
    
    
}
function zegar(l){
    takt=takt+1;
    licz=licz+level;
    if(licz>=60){
        for (var i=2;i<l;i=i+3){
            if(tab[i]<(-20)){
                tab[i-2]=Math.random()*1000;
                tab[i-1]=Math.random()*1000%640;
                tab[i]=20;
            }
            else
                tab[i]=tab[i]-1;
        }
        licz=0;
    }
    if(takt>=60){
        for (var i=2;i<l;i=i+3){
            if(tab[i]<(-20)){
                tab[i-2]=Math.random()*1000;
                tab[i-1]=Math.random()*1000%640;
                tab[i]=20;
            }
            else
                tab[i]=tab[i]-1;
        }
        time--;
        takt=0;
    }
    if (time==0){
        level=level+1;
        newlength=l*2;
        speed=speed*level;
        time=60;
        if (level==4){
            finish();
            window.alert("Finish your point: "+result);
            level=0;
            speed=1;
            first();
        }
    }
    if(time==5){
        var pageElement = document.getElementsByClassName("top");
        var length = pageElement.length;
        for(var i=0; i<length; i++){
            pageElement[0].className = "top_alert"
    }
    }
    if (time==60){
        var pageElements2 = document.getElementsByClassName("top_alert")
        var lengt2 = pageElements2.length
        for(var i=0; i<lengt2; i++){
            pageElements2[0].className = "top";
        
    }
        
    }
    
}
function first(){
    name=window.prompt("Podaj swój login: "); 
    speed=window.prompt("Start circle speed: ");
    length=window.prompt("Square: ")*3;
    newlength=length;
    newresult=document.getElementById("tops");
    //tmp=top.toString;
    //var top =["web",999,"master",888,"else",887];
    //console.log(top);
    newresult.textContent=top;
    for (var i=0;i<length;i=i+3){
        tab[i]=Math.random()*1000;
        tab[i+1]=Math.random()*1000%680;
        tab[i+2]=20;
        //console.log(tab[i]+"y: "+tab[i+1]);
    }
}
function more(){
    
    if(newlength!=length){
        //console.log(newlength);
        for(var i=length;i<newlength;i=i+3){
            tab[i]=Math.random()*1000;
            tab[i+1]=Math.random()*1000%680;
            tab[i+2]=20;
        }
        
    }
    length=newlength;
}

function draw (){
    
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawScore();
    //console.log(length);
    for (var i=0;i<length;i=i+3){
        if (ball_x>tab[i]-30&&ball_x<tab[i]+80&&ball_y>tab[i+1]-30&&ball_y<tab[i+1]+80){
            result+=tab[i+2];
            tab[i]=Math.random()*1000;
            tab[i+1]=Math.random()*1000%680;
            tab[i+2]=20;
        }
        drawsquar(tab[i],tab[i+1],tab[i+2]);
    }
    zegar(length);
    more();
    drawBall();

    
}
function init(){
   draw();
   window.requestAnimationFrame(init);
    
}