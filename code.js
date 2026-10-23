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
    const isNum = [".","0","1","2","3","4","5","6","7","8","9"];
    const isOp = ["-","+","*","/"];

    if(isNum.includes(buttonInhalt)){ //Check ob die Eingabe eine Zahl ist
        if(calcData.operator == ""){
            if(display.textContent === "0"){
                calcData.firNum = buttonInhalt;
            }
            else{
                calcData.firNum += buttonInhalt;
            }
            display.textContent = calcData.firNum;
        }
        else{
            calcData.secNum += buttonInhalt;
            display.textContent = calcData.secNum;
        }
    }
    else if(isOp.includes(buttonInhalt)){ //Check ob die Eingabe ein Operator ist
        if(calcData.secNum === ""){
            calcData.operator = buttonInhalt;
            display.textContent = calcData.operator;
        }
    }
    else if(buttonInhalt === "=" && calcData.secNum != ""){ //Check ob die Eingabe = ist und ob alle Daten vorhanden sind
        operate();
    }
    else if(buttonInhalt === "Clear"){
        display.textContent = "0";
        calcData.firNum = "";
        calcData.secNum = "";
        calcData.operator = "";
    }
}

function operate(){
    let num1 = parseFloat(calcData.firNum);
    let num2 = parseFloat(calcData.secNum);

    switch(calcData.operator){
        case "+":
            add(num1, num2);
            break;
        case "-":
            subtract(num1, num2);
            break;
        case "*":
            multiply(num1, num2);
            break;
        case "/":
            divide(num1, num2);
            break;
    }
}

function add(a, b){
    let sum = Math.round((a+b)*100)/100;
    calcData.firNum = sum;
    calcData.secNum ="";
    display.textContent = calcData.firNum;
}

function subtract(a, b){
    let diff = Math.round((a-b)*100)/100;
    calcData.firNum = diff;
    calcData.secNum ="";
    display.textContent = calcData.firNum;
}

function multiply(a, b){
    let prod = Math.round((a*b)*100)/100;
    calcData.firNum = prod;
    calcData.secNum ="";
    display.textContent = calcData.firNum;
}

function divide (a, b){
    if(b === 0){
        calcData.firNum = "";
        calcData.operator = "";
        calcData.secNum = "";
        display.textContent = "Click Clear and try again ;)"
    }
    else{
        let quot = Math.round((a/b)*100)/100;
        calcData.firNum = quot;
        calcData.secNum ="";
        display.textContent = calcData.firNum;
    }  
}

initButton();

/*
Erledigt:
- Neue Funktion mit getNum erstellen
- 3 Variablen erstellen (Nummer 1, Operator und Nummer 2)
    - Wurde mit Objekt gelöst
- Filtern ob Zahl oder Operator
- 2te Zahl auf Display schreiben
- Nach Eingabe von Operator muss erste Zahl verschwinden aber trotzdem gespeichert bleiben
- Operate Funktion nach Klick auf "=" aufrufen
- Rechenfunktionen mit Operate Funktion verknüpft
- Rechenergebnisse auf Display anzeigen lassen
- Mehrere Rechnungen mit einem Aufruf möglich machen
- Clear Button in Code adaptieren
- Ergebnis muss auf 2 Kommastellen begrenzt werden
- Check ob korrekte Dateneingabe vorhanden bevor = Button ausgeführt wird
- Division durch 0 sperren

Offen:
- Rechenvorgänge laut Beschreibung in Odin adaptieren
- Nach Eingabe von Operator muss Button gedrückt bleiben und nicht auf Display angezeigt werden
- Tastatureingabe ermöglichen
- Wenn Ergebnis angezeigt wird und nur eine Taste gedrückt wird, dann werden bestehende Daten gelöscht und eine neue Rechnung gestartet
- Sperren das mehr als ein Komma eingegeben werden kann
- Löschen Taste Funktion geben um letzte Eingabe rückgängig zu machen, wenn nach = löschen gedrückt wird, dann ist die Funktion wie clear
*/