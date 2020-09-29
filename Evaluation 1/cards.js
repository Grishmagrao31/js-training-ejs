"use strict";
class Deck {
    constructor() {
        this.deck = [];
    }

    shuffle() {
        const suits = ["Hearts", "Spades", "Clubs", "Diamonds"];
        const rank = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "queen", "king"];
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        for (let suit in suits) {
            for (let value in rank) {
                this.deck.push(`${rank[value]} of ${suits[suit]} is ${numbers[value]}`);
            }
        }
        let position, temp;
        for (let i = 0; i < this.deck.length; i++) {
            position = Math.floor((Math.random() * this.deck.length));
            //position2 = Math.floor((Math.random() * this.deck.length));
            temp = this.deck[i];
            this.deck[i] = this.deck[position];
            this.deck[position] = temp;
        }
        return this.deck;

    }
}

class CardCollection {
    constructor() {
        this.class1 = new Deck();
        this.card = [];
    }
    cardcollection() {
        //this.label = label;
        this.card = this.class1.shuffle();
        return this.card;
    }
    addcard() {
        return this.card.push(this.card);
    }
    popcard() {
        let k = this.card.length;
        return this.card.pop(k);

    }
    getCard(a) {
        return this.card[a];
    }
    deal(CardCollection, n) {
        for (let i = 0; i < n; i++) {
            deck1 = CardCollection.popcard();
            CardCollection.addcard(deck1);
        }
    }


}

class Hand extends CardCollection {

    display() {
        for (let i = 0; i < this.card.length; i++) {
            console.log(deck2.getCard(i));
        }
    }
}
class Player {
    Player() {
        this.name = name;
        this.hand = new Hand(name);
    }
    score() {
        let sum = 0;
        for (let i = 0; i < hand.length; i++) {
            let card = hand.getCard(i);
            let rank = card.getRank();
            if (rank === 8) {
                sum += 20;
            } else if (rank > 10) {
                sum += 10;
            } else {
                sum += rank;
            }
        }
        return sum;
    }

}

//main () 
let deck1 = new Deck();
let deck2 = new CardCollection();
console.log(deck2.cardcollection());
//console.log(deck2.size());
//console.log(deck2.popcard());
//console.log(deck1.deck);
console.log(deck1.shuffle());
let hand = new Hand();
//let cards = new Card();
deck2.deal(hand, 5);
console.log(hand.display()); 
let player = new Player ();
