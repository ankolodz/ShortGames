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
	if (ball.y == 0 || ball.y == WINDOWS_SIZE_Y)
		return true;
}
void ballMovement(Ball& ball,Bat left, Bat right){
	int x=abs(ball.speedX), y = abs(ball.speedY);
	
	while (x>0 || y>0){
		deleteBall(ball);
		if (x>0){
			x--;
			if (isBatColision(ball,left) || isBatColision(ball,right)){
				//cout<<"colison ";
				if (ball.speedX < 0)
					ball.x+=1;
				else
					ball.x-=1;
				ball.speedX = ball.speedX * (-1);
				}
			else if (ball.speedX > 0)
				ball.x++;
			else
				ball.x--;					
				
		}				
	if(y>0){
		y--;
		if (ball.speedY > 0)
				ball.y++;
		else if (ball.speedY < 0)
				ball.y--;
		if (isWallColision(ball))			
			ball.speedY *= -1;
		}
	drawBall(ball);
	}
}

