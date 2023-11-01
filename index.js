let countEl=document.getElementById("counter")
let saveEl=document.getElementById("save-el")
let count=0;

function increment(){
    count=count+1
    countEl.innerText=count

}

function save() {
    let countStr=count+ "-" 
    saveEl.innerText += countStr
}