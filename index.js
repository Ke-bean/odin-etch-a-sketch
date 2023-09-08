let gridBtn = document.querySelector(".select");
let eraseBtn = document.querySelector(".erase");
let sketchBtn = document.querySelector(".sketch");
gridBtn.addEventListener("click", function(){
    let gridSize = getInput();
    createDivs(gridSize)
})
createDivs(16)

let colorCollection = ["red", "green", "blue","yellow", "violet", "black","indigo"]
function createDivs(size){
let playGround = document.querySelector(".playground");
playGround.style.gridTemplateColums = `repeat(${size}, 1fr)`;
playGround.style.gridTemplateRows = `repeat(${size}, 1fr)`;
let allDivs = size * size;
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

eraseBtn.addEventListener("click", () =>{
    let allDivs = document.querySelectorAll("div");
    allDivs.forEach(div => {
        div.addEventListener("mouseover", ()=>{
            div.style.backgroundColor = "white"
        })
})
})
sketchBtn.addEventListener("click", () =>{
     let allDivs = document.querySelectorAll("div");
    allDivs.forEach(div => {
        div.addEventListener("mouseover", () =>{
            div.style.backgroundColor =colorCollection[Math.floor(Math.random()*colorCollection.length)]
            // playGround.style.backgroundColor = "white"
        })
    })
})

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