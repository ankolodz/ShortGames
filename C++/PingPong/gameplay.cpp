#include "game.h"

void init(Bat& left, Bat& right, Ball& ball){
	left.x=1;
	right.x=WINDOWS_SIZE_X-1;
	
	left.y =WINDOWS_SIZE_Y /2;
	right.y=WINDOWS_SIZE_Y/2;
	
	left.size = 4;
	right.size = 4;
	
	ball.speedY=0;
	if (rand()%2){
		ball.x = left.x+5;
		ball.y = left.y;
		ball.speedX = -1;
	}
	else{
		ball.x = right.x-5;
		ball.y = right.y;
		ball.speedX = 1;
	}
	HANDLE okno = GetStdHandle(STD_OUTPUT_HANDLE);
    COORD size;
    size.X = WINDOWS_SIZE_X;
    size.Y = WINDOWS_SIZE_Y;
    SetConsoleScreenBufferSize(okno, size);		
}


void drawGameplay (){
	setColor(7);
	for (int i=0;i<WINDOWS_SIZE_X;i++)
		cout<<(char)219;
	
	setCoursor(0,WINDOWS_SIZE_Y);
	
	for (int i=0;i<WINDOWS_SIZE_X;i++)
		cout<<(char)219;
	
	for (int i=0;i<=WINDOWS_SIZE_Y;i++){
		setCoursor(0,i);
		cout<<(char)219;
		setCoursor(WINDOWS_SIZE_X,i);
		cout<<(char)219;
	}
		
}
	

void drawBat (Bat bat){
	setColor(4);
	for (int y=bat.y;y<bat.y+bat.size;y++){
		setCoursor(bat.x, y);
		cout<<(char)219;
	}
}


void draw(Bat left, Bat right, Ball ball){
	drawGameplay();
	drawBall (ball);
	drawBat (left);
	drawBat (right);
}

bool isGameOver(Ball ball){
	if (ball.x == 1 || ball.x == WINDOWS_SIZE_X-1)
		return true;
	return false;
}
	

