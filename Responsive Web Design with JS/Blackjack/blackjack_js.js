let hasBlackjack=false;
let isAlive=true;
let sum=0;
let cards=[]

let sumEl=document.querySelector("#sum-el");
let cardsEl=document.querySelector("#cards-el");
let messageEl=document.getElementById("message-el");


let playerEl=document.getElementById("player-el");

let player={
    name:"Heena",
    chips:500
}

playerEl.textContent=player.name + ": $" + player.chips

function getRandomCard(){
    let num= Math.floor(1+Math.random()*13)
    if(num==1)
        return 11
    if(num>10)
        return 10
    return num
}
function startGame(){
    if(player.chips<=0){
        messageEl.textContent="You are too broke to play :(";
        return;
    }
    hasBlackjack=false;
    isAlive=true;
    cards=[];
    sum=0;
    let fc=getRandomCard();
    let sc=getRandomCard();
    cards.push(fc);
    cards.push(sc);
    sum=fc+sc
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
        player.chips+=100;
    }
    else{
        messageEl.textContent="You're out of the game!";
        isAlive=false;
        player.chips-=100;
    }
    
    sumEl.textContent = "Sum: "+ sum;
    cardsEl.textContent="Cards: "
    for(let i=0;i<cards.length;i++){
        cardsEl.textContent+= cards[i] + " ";
    }
    if(player.chips>=0)
    playerEl.textContent=player.name + ": $" + player.chips
}

function newCard(){
    if(isAlive && hasBlackjack==false){
    let nc=getRandomCard();
    cards.push(nc);
    sum+=nc
    renderGame();
    }
}
