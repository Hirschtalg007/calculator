const buttons = document.querySelectorAll("button");
const display = document.querySelector("div.display");
const calcData = {
    firNum: "",
    secNum: "",
    operator: "",
};

function initButton(){
    let buttonInhalt = "";

    for(let i = 0 ; i < buttons.length ; i++){
        buttons[i].addEventListener("click",()=>{
            buttonInhalt = buttons[i].textContent;
            getNum(buttonInhalt);
    })};
}

function getNum(buttonInhalt){
    const isNum = [1,2,3,4,5,6,7,8,9];
    const isOp = ["-","+","*","/"];
    if(display.textContent === "0"){
        calcData.firNum = buttonInhalt;
    }
    else{
        calcData.firNum += buttonInhalt;
    }
    display.textContent = calcData.firNum;
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