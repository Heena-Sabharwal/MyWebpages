let firstcard=10;
let secondcard=11;
let sum=firstcard+secondcard;
let hasBlackjack=false;
let isAlive=true;
let message="";
if(sum<21){
    message="Do you want to draw a new card?";
}
else if(sum===21){
    message="Wohoo! You've got Blackjack!";
    hasBlackjack=true;
    isAlive=false;
}
else{
    message="You're out of the game!";
    isAlive=false;
}

console.log(message);