#include "game.h"

main(){
	srand(time(NULL));
	
	Bat left,right;
	Ball ball;
	init (left,right,ball);
	draw(left,right,ball);
	int lastPlayer = 3;	
	
	while (true){
		Sleep(200);
		lastPlayer--;
		if (lastPlayer == 2){
			if (GetAsyncKeyState( 'W' ) & 0x8000)upBat (left);
			if (GetAsyncKeyState( 'S' ) & 0x8000) downBat (left);
		}
		else if (lastPlayer==1){
			if (GetAsyncKeyState( VK_UP ) & 0x8000)	upBat (right);
			if (GetAsyncKeyState( VK_DOWN ) & 0x8000) downBat (right);	
		}	
		else if (lastPlayer == 0)
			lastPlayer = 3;
		
		ballMovement(ball,left,right);				
		
	}
}
