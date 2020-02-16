#include "game.h"
void deleteBall(Ball ball){
	setCoursor(ball.x,ball.y);
	cout<<" ";
}
void drawBall (Ball ball){
	setColor(10);
	setCoursor(ball.x,ball.y);
	cout<<(char)2;
}
bool isBatColision (Ball ball,Bat bat){
	if (ball.y >=bat.y  && ball.y <=bat.y+bat.size ){
		if(ball.x == bat.x+1)
			return true;
		if(ball.x == bat.x-1)
			return true;	
	}	
	return false;	
}
bool isWallColision (Ball ball){
	if (ball.y == 1 || ball.y == WINDOWS_SIZE_Y-1)
		return true;
	return false;
}
int batCrease (Ball ball, Bat bat){
	if (bat.y == ball.y)
		return rand()%3;
	if (bat.y + bat.size -1 == ball.y)
		return -rand()%3;
	else
		return ball.speedY;
}
void ballMovement(Ball& ball,Bat left, Bat right){
	int x=abs(ball.speedX), y = abs(ball.speedY);
	
	while (x>0 || y>0){
		deleteBall(ball);
		if (x>0){
			x--;
			if (isBatColision(ball,left) || isBatColision(ball,right)){
				if (ball.speedX < 0){
					ball.x+=1;
					ball.speedY = batCrease (ball,left);
				}					
				else{
					ball.x-=1;
					ball.speedY = batCrease (ball,right);
				}
					
				ball.speedX = ball.speedX * (-1);
				if (ball.speedX > 0) ball.speedX++;
				else ball.speedX--;
				
				}
			else if (ball.speedX > 0)
				ball.x++;
			else
				ball.x--;					
				
		}				
		if(y>0){
			y--;
			if (isWallColision(ball))			
				ball.speedY *= -1;
			
			if (ball.speedY > 0)
					ball.y++;
			else if (ball.speedY < 0)
					ball.y--;
		}
		drawBall(ball);
	}
}

