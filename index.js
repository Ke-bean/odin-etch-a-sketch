let gridBtn = document.querySelector(".select");
gridBtn.addEventListener("click", function(){
    let gridSize = getInput();
    createDivs(gridSize)
})
createDivs(16)

function createDivs(size){
let playGround = document.querySelector(".playground");
playGround.style.gridTemplateColums = `repeat(${size}, 1fr)`;
playGround.style.gridTemplateRows = `repeat(${size}, 1fr)`;
let allDivs = size * size;
let colorCollection = ["red", "green", "blue","yellow", "violet", "black","indigo"]
for (let i = 1; i <= allDivs; i++){
    let div = document.createElement("div");
    div.addEventListener("mouseover", () =>{
        if(click) div.style.backgroundColor = colorCollection[Math.floor(Math.random()*colorCollection.length)]
    })
    playGround.insertAdjacentElement("beforeend", div)
}
}

function getInput(){
    let value = prompt("What grid size number you want to use?");
    let msg = document.querySelector(".msg");
    msg.innerHTML = ""
    if(value == ""){
        msg.innerHTML = "please enter a valid input"
    }else if(value < 0 || value > 100){
        msg.innerHTML = "enter a number between 1 and 100"
    }else{
        return value;
    }
}

let deleteBtn = document.querySelector(".delete");
deleteBtn.addEventListener("click", () =>{
    let allDivs = document.querySelectorAll("div");
    allDivs.forEach(div =>{
        div.style.backgroundColor = "white"
    })
})

let click = false;
document.addEventListener("click", e=>{
    if(e.target.tagname !== "button"){
        click = !click;
    }
})