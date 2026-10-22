const buttons = document.querySelectorAll("button");
const display = document.querySelector("div.display");

function initButton(){
    let buttonInhalt = "";

    for(let i = 0 ; i < buttons.length ; i++){
        buttons[i].addEventListener("click",()=>{
            buttonInhalt = buttons[i].textContent;
            getNum(buttonInhalt);
    })};
}

function getNum(buttonInhalt){
    if(display.textContent === "0"){
        display.textContent = buttonInhalt;
    }
    else{
        display.textContent += buttonInhalt;
    }
}

function operate(a,b){
    add(a,b);
    subtract(a,b);
    multiply(a,b);
    divide(a,b);
}

function add(a, b){
    let sum = a+b;
    return sum;
}

function subtract(a, b){
    let diff = a-b;
    return diff;
}

function multiply(a, b){
    let prod = a*b;
    return prod;
}

function divide (a, b){
    let quot = a/b;
    return quot;
}

let number1 = 10;
let number2 = 2;

initButton();
operate(number1,number2);