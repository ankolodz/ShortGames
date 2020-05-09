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
    console.log(board);
}