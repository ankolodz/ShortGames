#ifndef GAME
#define GAME

	#define WINDOWS_SIZE_X 300
	#define WINDOWS_SIZE_Y 300
	#define MOVEMENT 3;
	
	#include<iostream>
	#include<windows.h>
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
	void movec(short x , short y);
	void drawBall (Ball ball);
	void drawBat (Bat bat);
	void draw(Bat left, Bat right, Ball ball);

#endif
