#ifndef WARLIB
#define WARLIB

#include<iostream>
#include<vector>
#include<ctime>
#include<cstdlib>
using namespace std;

struct card{
	int val;
	int color;
	bool isVisible;

};
struct players{
	vector <card> player1;
	vector <card> player2;
};
void randingCard(players* playersHandle);
void printMyCards(players* playersHandle,int point1,int point2);
bool isFinish (int point1, int point2);
int whoThrowCards ();
card turnsPlayer1(players* playersHandle);
card turnsPlayer2(players* playersHandle, card player1);
card turnsPlayer2(players* playersHandle);
void printOneCard(card n);
int whoWonBattle(card player1, card player2);

#endif
