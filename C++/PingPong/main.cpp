#include "game.h"

main(){
	Bat left,right;
	Ball ball;
	init (left,right,ball);
	draw(left,right,ball);
	while (true){
		
		if (GetAsyncKeyState( 'W' ) & 0x0001)upBat (left);
		if (GetAsyncKeyState( 'S' ) & 0x0001) downBat (left);
		if (GetAsyncKeyState( VK_UP ) & 0x0001)	upBat (right);
		if (GetAsyncKeyState( VK_DOWN ) & 0x0001) downBat (right);					
		
	}
}
