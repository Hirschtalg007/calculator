const buttons = document.querySelectorAll("button");
const display = document.querySelector("div.display");

function operate(a,b){
    let buttonInhalt = "";

    for(let i = 0 ; i < buttons.length ; i++){
        buttons[i].addEventListener("click",()=>{
            if(display.textContent === "0"){
                buttonInhalt = buttons[i].textContent;
                display.textContent=buttonInhalt;
            }
            else{
                buttonInhalt = buttons[i].textContent;
                display.textContent += buttonInhalt;
            }
    })};

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

operate(number1,number2);