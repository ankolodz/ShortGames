#include "game.h"

void init(Bat& left, Bat& right, Ball& ball){
	left.x=0;
	right.x=WINDOWS_SIZE_X;
	
	left.y =WINDOWS_SIZE_Y /2;
	right.y=WINDOWS_SIZE_Y/2;
	
	left.size = 3;
	right.size = 3;
	
	if (rand()%2){
		ball.x = left.x+1;
		ball.y = left.y;
		ball.speedX = 3;
	}
	else{
		ball.x = right.x-1;
		ball.y = right.y;
		ball.speedX = -3;
	}		
}
void movec(short x , short y){
	HANDLE hout;
	COORD dest;
	hout = GetStdHandle(STD_OUTPUT_HANDLE);
	dest.X = x;
	dest.Y = y;
	SetConsoleCursorPosition(hout,dest);
}
void drawBall (Ball ball){
	movec(ball.x,ball.y);
	cout<<"O";
}

void drawBat (Bat bat){
	for (int i=bat.x;i<bat.x+bat.size;i++){
		movec(i,bat.y);
		cout<<(char)219;
	}
}
void draw(Bat left, Bat right, Ball ball){
	drawBall (ball);
	drawBat (left);
	drawBat (right);
}
	

