const buttons = document.querySelectorAll("button");
const display = document.querySelector("div.display");
const calcData = {
    firNum: "",
    secNum: "",
    operator: "",
};

function initButton(){
    let buttonInhalt = "";

    for(let i = 0 ; i < buttons.length ; i++){ //Buttons eventListener hinzufügen
        buttons[i].addEventListener("click",()=>{
            buttonInhalt = buttons[i].textContent;
            getNum(buttonInhalt);
    })};
}

function getNum(buttonInhalt){
    const isNum = ["0","1","2","3","4","5","6","7","8","9"];
    const isOp = ["-","+","*","/"];

    if(isNum.includes(buttonInhalt)){ //Check ob die Eingabe eine Zahl ist
        if(display.textContent === "0"){
            calcData.firNum = buttonInhalt;
        }
        else{
            calcData.firNum += buttonInhalt;
        }
        display.textContent = calcData.firNum;
        }
    else if(isOp.includes(buttonInhalt)){ //Check ob die Eingabe ein Operator ist
        calcData.operator = buttonInhalt;
        console.log("Operator gedrückt");
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

/*
Nächste Schritte:
- Neue Funktion mit getNum erstellen
- 3 Variablen erstellen (Nummer 1, Operator und Nummer 2)
    - Wurde mit Objekt gelöst
- Filtern ob Zahl oder Operator
- 2te Zahl auf Display schreiben
*/