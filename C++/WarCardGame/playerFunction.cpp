#include "warlib.h"

void printMyCards(players* playersHandle,int point1,int point2){
	system("cls");
	cout<<"POINTS: P1 "<<point1<<" "<<"P2 "<<point2<<endl;
	for(int i=0;i<5 && i<playersHandle->player1.size();i++){
		printOneCard (playersHandle->player1[i]);
	}	
	cout<<endl;
}
void printOneCard(card n){
		cout<<(char)(n.color+3);
		if(n.val<=8)
			cout<<n.val+2;
		else if(n.val==9)
			cout<<"J";
		else if(n.val==10)
			cout<<"Q";		
		else if(n.val==11)
			cout<<"K";
		else if(n.val==12)
			cout<<"A";
		cout<<" ";
}
card turnsPlayer1(players* playersHandle){
	int n;
	
	do{
	cout<<"Podaj nr karty: ";	
	cin>>n;
	if (n>=5)
		cout<<"Idioto, wyzszej niz 4 nie rzucisz";
	}while(n>=5 || n>=playersHandle->player1.size());
	
	card selectCard = playersHandle->player1[n];
	playersHandle->player1.erase(playersHandle->player1.begin()+n);
	
	return selectCard;	
}
//returns no minimal card
int minimal (players* playersHandle){
	int min=playersHandle->player2[0].val, noMin=0;
	for (int i=1;i<5 && i<playersHandle->player2.size();i++){
		if (min > playersHandle->player2[i].val){
			noMin = i;
			min = playersHandle->player2[i].val;
		}
	}
	return noMin;
}
//returns minimal card higer than player1
int minimalMax (players* playersHandle, int val){
	int n = min(5,(int)playersHandle->player2.size());
	card tab [n];
	int pom [n];
	for (int i=0;i<n;i++){
		tab[i]= playersHandle->player2[i];
		pom[i]=i;
}
	for (int i=0;i<n;i++)
		for (int j=i+1;j<n;j++)
			if (tab[i].val<tab[j].val){
				swap(tab[i],tab[j]);
				swap(pom[i],pom[j]);
			}
				
			
	int i=0;
	while (i<n && val>tab[i].val){
		i++;
	}
	i--;
	if(i<0)
		return -1;
	return pom[i];
		
	
}

card turnsPlayer2(players* playersHandle, card player1){
 	int cardNO = minimalMax(playersHandle,player1.val);
 	if (cardNO == -1)
 		cardNO = minimal(playersHandle);
 	card cardToThrow = playersHandle->player1[cardNO];
 	playersHandle->player2.erase(playersHandle->player2.begin()+cardNO);
 	return cardToThrow;
}

card turnsPlayer2(players* playersHandle){
	int cardNOmax = 0, cardMaxVal = playersHandle->player2[0].val;
	for (int i=1;i<5 && i<playersHandle->player2.size();i++)
		if (cardMaxVal<playersHandle->player2[i].val){
			cardNOmax = i;
			cardMaxVal = playersHandle->player2[i].val;
		}
	card cardToThrow = playersHandle->player2[cardNOmax];
	playersHandle->player2.erase(playersHandle->player2.begin()+cardNOmax);
	
	return cardToThrow;	
}
//void 
