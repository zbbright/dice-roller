const input = document.querySelector('#input')
const roll = document.querySelector('#roll')
const totalDisplay = document.querySelector('#total-display')
const showRolls = document.querySelector('#show-rolls')
const rollList = document.querySelector('#roll-list')
const reset = document.querySelector('#reset')
const die4 = document.querySelector('#die4')
const die6 = document.querySelector('#die6')
const die8 = document.querySelector('#die8')
const die10 = document.querySelector('#die10')
const die12 = document.querySelector('#die12')
const die20 = document.querySelector('#die20')
const dieRolls = []
const dieFaceArr = []
const faces = ["&#9856;", "&#9857;", "&#9858;", "&#9859;", "&#9860;", "&#9861;", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
const menuButtons =  document.querySelectorAll('.menu-button')

let diceNum = 1
let i = 0
let diceDisplayOn = false
let total = 0
let diceSides = 6

function diceDisplay(){
    rollList.innerHTML = "";

    while (i < dieRolls.length){
        let face = dieRolls[i] - 1;
        dieFaceArr.push(faces[face]);
        i++;
        }
    i = 0;

    if (diceDisplayOn === true){
        while (i < dieRolls.length){
        rollList.innerHTML += "<li>" + dieFaceArr[i] + "(" + dieRolls[i] + ")</li>";
        i++;
        }
    }
    i = 0;
}

input.addEventListener('input', function(){
    diceNum = input.value;
})

roll.addEventListener('click', function(){
    dieRolls.splice(0);
    dieFaceArr.splice(0);
    while (i < diceNum){
        let die = Math.round(Math.random() * (diceSides - 0.01) + 0.5);
        dieRolls.push(die);
        total += Number(die);
        i++;
    }
    totalDisplay.innerHTML = total;
    i = 0;
    total = 0;
    diceDisplay();
})

showRolls.addEventListener('click', function(){
    if (diceDisplayOn === false){
        diceDisplayOn = true;
        showRolls.innerHTML = "Hide Dice";
    } else if (diceDisplayOn === true){
        diceDisplayOn = false;
        showRolls.innerHTML = "Show Dice";
    }
    diceDisplay();
})

reset.addEventListener('click', function(){
    totalDisplay.innerHTML = "";
    rollList.innerHTML = "";
    input.value = "";
    diceNum = 1;
    diceSides = 6;
    while (i < menuButtons.length){
        menuButtons[i].style.backgroundImage = 'linear-gradient(lightgrey, white, lightgrey)';
        i++;
    }
    menuButtons[1].style.backgroundImage = 'none';
})

die4.addEventListener('click', function(){
    diceSides = 4;
    while (i < menuButtons.length){
        menuButtons[i].style.backgroundImage = 'linear-gradient(lightgrey, white, lightgrey)';
        i++;
    }
    menuButtons[0].style.backgroundImage = 'none';
    i = 0;
})

die6.addEventListener('click', function(){
    diceSides = 6;
    while (i < menuButtons.length){
        menuButtons[i].style.backgroundImage = 'linear-gradient(lightgrey, white, lightgrey)';
        i++;
    }
    menuButtons[1].style.backgroundImage = 'none';
    i = 0;
})

die8.addEventListener('click', function(){
    diceSides = 8;
    while (i < menuButtons.length){
        menuButtons[i].style.backgroundImage = 'linear-gradient(lightgrey, white, lightgrey)';
        i++;
    }
    menuButtons[2].style.backgroundImage = 'none';
    i = 0;
})

die10.addEventListener('click', function(){
    diceSides = 10;
    while (i < menuButtons.length){
        menuButtons[i].style.backgroundImage = 'linear-gradient(lightgrey, white, lightgrey)';
        i++;
    }
    menuButtons[3].style.backgroundImage = 'none';
    i = 0;
})

die12.addEventListener('click', function(){
    diceSides = 12;
    while (i < menuButtons.length){
        menuButtons[i].style.backgroundImage = 'linear-gradient(lightgrey, white, lightgrey)';
        i++;
    }
    menuButtons[4].style.backgroundImage = 'none';
    i = 0;
})

die20.addEventListener('click', function(){
    diceSides = 20;
    while (i < menuButtons.length){
        menuButtons[i].style.backgroundImage = 'linear-gradient(lightgrey, white, lightgrey)';
        i++;
    }
    menuButtons[5].style.backgroundImage = 'none';
    i = 0;
})

menuButtons[1].style.backgroundImage = 'none';