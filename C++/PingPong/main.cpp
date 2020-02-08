#include "game.h"

main(){
	Bat left,right;
	Ball ball;
	intit (left,right,ball);
	
	while (true){
		
		if (GetAsyncKeyState( 'W' ) & 0x0001)
			cout<<"W";
		if (GetAsyncKeyState( 'S' ) & 0x0001)
			cout<<"S";
		if (GetAsyncKeyState( VK_UP ) & 0x0001)
			cout<<"UP";
		if (GetAsyncKeyState( VK_DOWN ) & 0x0001)
			cout<<"DOWN";
	}
}
