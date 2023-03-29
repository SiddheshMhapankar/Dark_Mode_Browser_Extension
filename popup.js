console.log("Moveright")
if(document.querySelector(".container")){
const button = document.querySelector(".btn")
const square = document.querySelector(".square")

let buttonOn = false;

button.addEventListener("click", ()=>{
    if(!buttonOn){
        console.log("Moveleft")
        buttonOn = true;
        square.style.animation = "moveSquareLeft 1s forwards";
        chrome.tabs.executeScript({
                file: "appOn.js"
            })
    } 
    else{
        buttonOn = false;
        console.log("Moveright")
        square.style.animation = "moveSquareRight 1s forwards";
        chrome.tabs.executeScript({
            file: "appOff.js"
        })
    }
})
}