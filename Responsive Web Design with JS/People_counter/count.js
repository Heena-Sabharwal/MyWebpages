let countEl=document.getElementById("count-el")
let count=0
function increment() {
    count++
    countEl.innerText=count
}
function decrement() {
    count--
    countEl.innerText=count
}
function save(){
    console.log("The count is " + count)
    let saveEl=document.getElementById("save-el")
    if(count<0){
        alert("Count cannot be negative")
    }
    else{
        saveEl.innerText+=" "+count+" - "
        count=0
        countEl.innerText=count

    }
}


