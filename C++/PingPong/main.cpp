#include "game.h"

main(){
	Bat left,right;
	Ball ball;
	init (left,right,ball);
	draw(left,right,ball);
	while (true){
		
		if (GetAsyncKeyState( 'W' ) & 0x0001){
			left.y+=3;
			draw(left,right,ball);
		}			
		if (GetAsyncKeyState( 'S' ) & 0x0001){
			left.y-=3;
			draw(left,right,ball);
		}
		if (GetAsyncKeyState( VK_UP ) & 0x0001){
			right.y+=3;
			draw(left,right,ball);
		}		
		if (GetAsyncKeyState( VK_DOWN ) & 0x0001){
			right.y-=3;	
			draw(left,right,ball);
		}
					
		
	}
}
