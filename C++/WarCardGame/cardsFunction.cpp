#include "warlib.h"

void randingCard(players* playersHandle){
	vector <card> allCards;
	for(int i=0;i<4;i++){
		for(int j=0;j<13;j++){
			card nextCard;
			nextCard.color=i;
			nextCard.val=j;
			nextCard.isVisible=false;
			allCards.push_back(nextCard);			
		}	
	}
	while(allCards.size()!=0){
		int cards=rand()%allCards.size();
		playersHandle->player1.push_back(allCards[cards]);
		allCards.erase(allCards.begin()+cards);
		cards=rand()%allCards.size();
		playersHandle->player2.push_back(allCards[cards]);
		allCards.erase(allCards.begin()+cards);
	}
}

