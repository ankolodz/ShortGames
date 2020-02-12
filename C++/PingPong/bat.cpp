#include "game.h"

void upBat (Bat& bat){
	int move = 1;
	if (bat.y-move <=0)
		return;
	setCoursor(bat.x,bat.y - 1);
	cout << (char)219;
	
	setCoursor(bat.x,bat.y + bat.size-1);
	cout << " ";		
		
	bat.y -= move;
}
void downBat (Bat& bat){
	int move = 1;
	if (bat.y+move + bat.size > WINDOWS_SIZE_Y)
		return;
	setCoursor(bat.x,bat.y);
	cout << " ";
	
	setCoursor(bat.x,bat.y + bat.size);
	cout << (char)219;		
		
	bat.y += move;
}
	

