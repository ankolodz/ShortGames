#include "warlib.h"

int whoWonBattle(card player1, card player2){
	if (player1.val > player2.val)
		return 1;
	else if (player1.val < player2.val)
		return 2;
	return 0;
}
bool isFinish (int point1, int point2){
	return point1+point2==26? true: false;	
}

