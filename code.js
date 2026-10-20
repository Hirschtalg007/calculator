function operate(a,b){
    add(a,b);
    subtract(a,b);
    multiply(a,b);
    divide(a,b);
}

function add(a, b){
    let sum = a+b;
    console.log(sum);
}

function subtract(a, b){
    let diff = a-b;
    console.log(diff);
}

function multiply(a, b){
    let prod = a*b;
    console.log(prod);
}

function divide (a, b){
    let quot = a/b;
    console.log(quot);
}

let number1 = 10;
let number2 = 2;

operate(number1,number2);