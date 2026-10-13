let score_el_home=document.getElementById("home-score")
let score_el_away=document.getElementById("away-score")
let home_score=0
let away_score=0

function add_Score_home(points){
    home_score+=points
    score_el_home.textContent=home_score
}
function add_Score_away(points){
    away_score+=points
    score_el_away.textContent=away_score
}
