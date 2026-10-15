let firstcard=10;
let secondcard=6;
let hasBlackjack=false;
let isAlive=true;
let sum=firstcard+secondcard;
let cards=[firstcard,secondcard]
let sumEl=document.querySelector("#sum-el");
let cardsEl=document.querySelector("#cards-el");
let messageEl=document.getElementById("message-el");

function startGame(){
    renderGame();
}
function renderGame(){
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
    
    sumEl.textContent = "Sum: "+ sum;
    cardsEl.textContent="Cards: "
    for(let i=0;i<cards.length;i++){
        cardsEl.textContent+= cards[i] + " ";
    }
}

function newCard(){
    cards.push(6);
    sum+=6;
    renderGame();
}
