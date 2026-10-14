let firstcard=10;
let secondcard=11;
let sumEl=document.getElementById("sum-el");
let hasBlackjack=false;
let isAlive=true;
let sum=firstcard+secondcard
let messageEl=document.getElementById("message-el");

function startGame(){
    if(sum<21){
    messageEl.textContent="Do you want to draw a new card?";
    }
    else if(sum===21){
        messageEl.textContent="You've got Blackjack!";
        hasBlackjack=true;
        isAlive=false;
    }
    else{
        messageEl.textContent="You're out of the game!";
        isAlive=false;
    }

    sumEl.textContent += sum;
}
