#include "game.h"

void setCoursor (short x , short y){
	HANDLE consolHandle;
	COORD dest;
	consolHandle = GetStdHandle(STD_OUTPUT_HANDLE);
	dest.X = x;
	dest.Y = y;
	SetConsoleCursorPosition(consolHandle,dest);
}

void setColor (int color){
	HANDLE consoleHandle=GetStdHandle(STD_OUTPUT_HANDLE);
	SetConsoleTextAttribute(consoleHandle,color);
}
