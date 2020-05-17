var board;

function start(){
    var x = parseInt( document.getElementById("x").value);
    var y = parseInt( document.getElementById("y").value);
    var mines = parseInt( document.getElementById("mines").value);

    board = new Array(x)
    for ( i=0; i<x;i++){
        tmp = []
        for (j=0;j<y;j++)
            tmp.push(0)
        board[i] = tmp;
    }
    display(x,y);
    console.log(board);

    for(i=0;i<mines;i++){
        k = Math.floor(Math.random()*100%x);
        l = Math.floor(Math.random()*100%y)
        if (board[k][l] != 1)
            board[k][l] = -1;
        else
            i--;
    }
    for(i=0;i<x;i++)
        for(j=0;j<y;j++){
            sum = 0;
            if(board[i][j] == -1)
                continue;
            if(i-1 >= 0 && j-1 >= 0 && board[i-1][j-1] == -1)
                sum++;
            if(i-1 >= 0  && board[i-1][j] == -1)
                sum++;
            if(i-1 >= 0 && j+1 < y && board[i-1][j+1] == -1)
                sum++;
            if(j-1 >= 0 && board[i][j-1] == -1)
                sum++;
            if(j+1 < y && board[i][j+1] == -1)
                sum++;
            if(i+1 < x && j-1 >= 0 && board[i+1][j-1] == -1)
                sum++;
            if(i+1 < x &&  board[i+1][j] == -1)
                sum++;
            if(i+1 < x && j+1 < y && board[i+1][j+1] == -1)
                sum++;
            
            board[i][j] = sum;

        }
}

function display(x,y){
    htmlText = "";
    for (i=0;i<x;i++){
        htmlText += '<div class="row">';
        for(j=0;j<y;j++){
            htmlText += '<div class="singleBox" id="x'+i+'y'+j+'" onClick="select('+i+','+j+')">.</div> ';
        }
        htmlText+='</div>';
    }
    document.getElementById("game").innerHTML = htmlText;
}
function select(x,y){
    color = " noBomb";
    switch(board[x][y]){
        case 1:
            color = " one";
            break;
        case 2:
            color = " two";
            break;
        case 3:
            color = " three";
            break;

        default:
            if(board[x][y] == -1)
                color = " noBomb";
            else if (board[x][y] >= 4)
                color = " more";
    }
    obj = document.getElementById("x"+x+"y"+y)
    if (board[x][y] != -1)
        obj.innerHTML = board[x][y];
    else{
        obj.innerHTML = '<img src="bomb.png">';
        alert("GAME OVER!");
    }
        
    obj.classList +=  color;

}