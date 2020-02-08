#include "warlib.h"
#include <windows.h>


int point1=0,point2=0;
bool lastPointPlayer1 = true;

int main(int argc, char** argv) {
	srand(time(NULL));
	players* playersHandle = new players();
	
	randingCard(playersHandle);
	
	
	while (true){	
		int pointsToWon = 0; 
		printMyCards(playersHandle,point1,point2);
		card player1,player2;
		do{
		pointsToWon	++;
		if (lastPointPlayer1){
			player1 = turnsPlayer1(playersHandle);
			player2 = turnsPlayer2(playersHandle, player1);
			printOneCard(player2);
			Sleep(3000);
		}
		else{
			player2 = turnsPlayer2(playersHandle);
			printOneCard(player2);
			player1 = turnsPlayer1(playersHandle);	
		}
			}while(whoWonBattle(player1,player2)==0);

		if (whoWonBattle(player1,player2)==1){
			point1 += pointsToWon;
			lastPointPlayer1 = true;
		}
			
		else{
			lastPointPlayer1 = false;
			point2 +=	pointsToWon;
		}		
		
		if (isFinish(point1,point2)) break;
	}
	//who won
	
	
	
	
	return 0;
}
