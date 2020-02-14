#include "game.h"

main(){
	srand(time(NULL));
	
	Bat left,right;
	Ball ball;
	init (left,right,ball);
	draw(left,right,ball);
	int lastPlayer = 3;	
	
	while (true){
		Sleep(25);
		lastPlayer--;
		//cout<<lastPlayer;
		if (lastPlayer%2==0){
			if (GetAsyncKeyState( 'W' ) & 0x8000)upBat (left);
			if (GetAsyncKeyState( 'S' ) & 0x8000) downBat (left);
		}
		else if(lastPlayer%2==1){
			if (GetAsyncKeyState( VK_UP ) & 0x8000)	upBat (right);
			if (GetAsyncKeyState( VK_DOWN ) & 0x8000) downBat (right);	
		}	
		if (lastPlayer == 0){
			lastPlayer = 6;		
			ballMovement(ball,left,right);				
			if (isGameOver(ball))
				break;
		}

	}
	system("cls");
	cout<<"game over";
	
}
