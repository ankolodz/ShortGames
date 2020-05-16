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

    document.getElementById("x"+x+"y"+y).innerHTML = board[x][y];
    document.getElementById("x"+x+"y"+y).classList += " colorT";

}