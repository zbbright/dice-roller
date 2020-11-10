const input = document.querySelector('#input')
const roll = document.querySelector('#roll')
const totalDisplay = document.querySelector('#total-display')
const showRolls = document.querySelector('#show-rolls')
const rollList = document.querySelector('#roll-list')
const reset = document.querySelector('#reset')
const faces = ["&#9856;", "&#9857;", "&#9858;", "&#9859;", "&#9860;", "&#9861;", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
const menuButtons = document.querySelectorAll('.menu-button')
const dieType = [4, 6, 8, 10, 12, 20]

let diceNum = 1
let diceDisplayOn = false
let total = 0
let diceSides = 6
let dieRolls = []
let dieFaceArr = []

let active='none'
let inactive='linear-gradient(lightgrey, white, lightgrey)'

function diceDisplay(){
    rollList.innerHTML="";
    for(let i=0; i<dieRolls.length; i++){
        let face=dieRolls[i]-1;
        dieFaceArr.push(faces[face]);}
    if(diceDisplayOn===true){
        for(let i=0; i<dieRolls.length; i++){
        rollList.innerHTML+=`<li>${dieFaceArr[i]}(${dieRolls[i]})</li>`;
        }}}

input.addEventListener('input', function(){
    diceNum=input.value;})

roll.addEventListener('click', function(){
    roll.style.backgroundImage=active;
    dieRolls.splice(0);
    dieFaceArr.splice(0);
    for(let i=0; i<diceNum; i++){
        let die=Math.floor(Math.random()*diceSides+1);
        dieRolls.push(die);
        total+=die;}
    totalDisplay.innerHTML=total;
    total=0;
    diceDisplay();
    setTimeout(() => roll.style.backgroundImage=inactive, 20);
    })

showRolls.addEventListener('click', function(){
    showRolls.style.backgroundImage=active
    if(diceDisplayOn){
        diceDisplayOn=false;
        showRolls.innerHTML="Show Dice";}
        else{
        diceDisplayOn=true;
        showRolls.innerHTML="Hide Dice";}
    setTimeout(() => showRolls.style.backgroundImage=inactive, 20);
    diceDisplay();})

reset.addEventListener('click', function(){
    reset.style.backgroundImage=active;
    totalDisplay.innerHTML="";
    rollList.innerHTML="";
    input.value="";
    diceNum=1;
    diceSides=6;
    dieFaceArr = [];
    dieRolls = [];
    diceDisplayOn = false;
    showRolls.innerHTML="Show/Hide Dice";
    document.querySelector("details").removeAttribute("open");
    for(let i=0; i<menuButtons.length; i++){
        menuButtons[i].style.backgroundImage=inactive;
    }
    menuButtons[1].style.backgroundImage=active;
    setTimeout(() => reset.style.backgroundImage=inactive, 20);
})

for(let i=0; i<menuButtons.length; i++){
    menuButtons[i].addEventListener('click', function(){
        diceSides=dieType[i];
        for(let j=0; j<menuButtons.length; j++){
            menuButtons[j].style.backgroundImage=inactive;
        }
        menuButtons[i].style.backgroundImage=active;
    })}

menuButtons[1].style.backgroundImage=active;