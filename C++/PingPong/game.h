#ifndef GAME
#define GAME

	#define WINDOWS_SIZE_X 60
	#define WINDOWS_SIZE_Y 20
	#define MOVEMENT 1;
	
	#include<iostream>
	#include<windows.h>
	#include<cstdlib>
	#include<ctime>
	using namespace std;
	
	struct Bat{
		int x;
		int y;
		int size;
	};
	
	struct Ball{
		int x;
		int y;
		int speedX;
		int speedY;
	};
	
	void init(Bat& left, Bat& right, Ball& ball);
	void setCoursor(short x , short y);
	void downBat (Bat& bat);
	void upBat (Bat& bat);
	void draw(Bat left, Bat right, Ball ball);
	void setColor (int color);
	void ballMovement(Ball& ball,Bat left, Bat right);
	void drawBall (Ball ball);
	bool isGameOver(Ball ball);

#endif
