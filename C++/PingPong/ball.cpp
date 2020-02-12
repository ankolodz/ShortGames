#include "game.h"
void drawBall (Ball ball){
	setColor(10);
	setCoursor(ball.x,ball.y);
	cout<<(char)2;
}
bool isBatColision (Ball ball,Bat bat){
	if (bat.y >= ball.y && bat.y+bat.size <= ball.y){
		if(ball.x == bat.x+1)
			return true;
		if(ball.x == bat.x-1)
			return true;	
	}	
	return false;	
}
bool isWallColision (Ball ball){
	if (ball.y == 0 || ball.y == WINDOWS_SIZE_Y)
		return true;
}
void ballMovement(Ball& ball,Bat left, Bat right){
	for( int x=ball.speedX;x>0;x--){
		if (ball.speedX > 0)
			ball.x++;
		else
			ball.x--;
		if (isBatColision(ball,left) || isBatColision(ball,right))			
			ball.speedX *= -1;			
	}
	for( int x=ball.speedX;x>0;x--){
		if (ball.speedY > 0)
				ball.y++;
		else if (ball.speedY < 0)
				ball.y--;
		if (isWallColision(ball))			
			ball.speedY *= -1;
		}
	drawBall(ball);
}

