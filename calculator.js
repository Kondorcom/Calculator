function add(a,b){
    let sum = a + b;
    return sum;
}
function subtract(a,b){
    let sub = a - b;
    return sub;
}
function multiply(a,b){
    let multi = a * b;
    return multi;
}
function divide(a,b){
    let div = a / b;
    return div;
}
function operate(operator, x, y){
    switch (operator){
        case '+':
            add(x,y);
            console.log(add(x,y));
            break;
        case '-':
            subtract(x,y);
            console.log('subtract: ', subtract(x,y));
            break;
        case '*':
            multiply(x,y);
            console.log(multiply(x,y));
            break;
        case '/':
            divide(x,y);
            console.log(divide(x,y));
            break;
    }
}

let allNumbers = document.querySelectorAll('.btns');
let allOperators = document.querySelectorAll('.btns_oprt');
let equalsBtn = document.querySelector('.btns_equals')

let bottomScreen = document.querySelector('.screenBottomRow');
let topScreen = document.querySelector('.screenTopRow');
let nmbrOfBtnPress = 0;
let indx = 0;
let wasOperatorPressed = false;
let wasNmbrPressed = true;

let arrayOfNumbersToCalculate = [];
let firstNmbr = 0;
let secondNmbr = 0;
let solution = 0;
let operatorPressed;
let firstOperant;
let secondOperant;


for (let i = 0; i < allNumbers.length; i++) {
        allNumbers[i].addEventListener('click', nmbrPressedEvent);}

for (let i = 0; i < allOperators.length; i++) {
        allOperators[i].addEventListener('click', oprtPressedEvent);}  
equalsBtn.addEventListener('click', equalsSolution);

function equalsSolution(){
    console.log('pressed');
    console.log('first number: ', firstNmbr);
    console.log('second number: ', secondNmbr);
    console.log(operate(operatorPressed,firstNmbr,secondNmbr));
}

function nmbrPressedEvent(){
    console.clear();
    console.log("You clicked:", this.innerHTML);
    let numberPressed = this.innerHTML;  
    if (wasOperatorPressed === true){
        nmbrOfBtnPress = 0;
        wasOperatorPressed = false;
    }
    if (nmbrOfBtnPress === 0 ){
        bottomScreen.textContent = undefined;
        bottomScreen.textContent = bottomScreen.textContent+numberPressed;
        wasNmbrPressed = true;
        
    }   else {
        bottomScreen.textContent = bottomScreen.textContent+numberPressed;
        console.log('bottom screen number = ', bottomScreen.textContent);
        console.log('second operant nmbr ', secondOperant);
        console.log('first operant nmbr', firstOperant);
    }
        nmbrOfBtnPress ++;        
    
}
// function oprtPressedEvent1(){
//     console.log("You clicked:", this.innerHTML);
//     operatorPressed = this.innerHTML; 
//     topScreen.textContent = bottomScreen.textContent + operatorPressed;
//     wasOperatorPressed = true;
//     firstNmbr = topScreen.textContent;
// }
function oprtPressedEvent(){
    console.log("You clicked:", this.innerHTML);
    operatorPressed = this.innerHTML;   //operator that was pressed
    arrayOfNumbersToCalculate[indx] = bottomScreen.textContent; 
    secondOperant = this.innerHTML;
    console.log('second operant ', secondOperant);
    topScreen.textContent = bottomScreen.textContent + operatorPressed;
    wasOperatorPressed = true;
    console.table(arrayOfNumbersToCalculate);
    firstNmbr = arrayOfNumbersToCalculate[0];
    secondNmbr = arrayOfNumbersToCalculate[1];
    if (arrayOfNumbersToCalculate[1] !== undefined){
        console.log(operate(operatorPressed,firstNmbr,secondNmbr));
    }        
        // indx++;
        console.log('position in array: ', indx);
    if (wasNmbrPressed === true){
        firstOperant = operatorPressed;
        console.log('first operant ', firstOperant);
        indx ++;
    }
    wasNmbrPressed = false;
    
}

     


function clearAll(){
    //let arrayOfNumbersToCalculate = [];
    while(arrayOfNumbersToCalculate.length > 0) {
        arrayOfNumbersToCalculate.pop();
    }
    topScreen.textContent = undefined;
    bottomScreen.textContent = 0;
    nmbrOfBtnPress = 0;
    indx = 0;
}
function removeLastDigit(){
    let btmText = bottomScreen.textContent;
    btmText = btmText.slice(0,-1);
    bottomScreen.textContent = btmText;
}

    // for (let i = 0; i < allNumbers.length; i++) {
//     allNumbers[i].addEventListener('click', function() {
//     console.clear();
//     console.log("You clicked:", this.innerHTML);
//     let numberPressed = this.innerHTML;  
//     if (wasOperatorPressed === true){
//         nmbrOfBtnPress = 0;
//         wasOperatorPressed = false;
//     }
//     if (nmbrOfBtnPress === 0 ){
//         bottomScreen.textContent = undefined;
//         bottomScreen.textContent = bottomScreen.textContent+numberPressed;
//         wasNmbrPressed = true;
//     }   else {
//         bottomScreen.textContent = bottomScreen.textContent+numberPressed;
//     }
//         nmbrOfBtnPress ++;        
//     }
//     );}

  // console.log("You clicked:", this.innerHTML);
    // let operatorPressed = this.innerHTML;   
    // arrayOfNumbersToCalculate[indx] = bottomScreen.textContent;
    // topScreen.textContent = bottomScreen.textContent + operatorPressed;
    // wasOperatorPressed = true;
    // console.table(arrayOfNumbersToCalculate);
    // firstNmbr = arrayOfNumbersToCalculate[0];
    // secondNmbr = arrayOfNumbersToCalculate[1];
    // if (arrayOfNumbersToCalculate[1] !== undefined){
    //     console.log(operate(operatorPressed,firstNmbr,secondNmbr));
    // }        
    //     // indx++;
    //     console.log('position in array: ', indx);
    // if (wasNmbrPressed === true){
    //     indx ++;
    // }
    // wasNmbrPressed = false;
    // if (nmbrOfBtnPress === 0 ){
    //     topScreen.textContent = undefined;
    //     topScreen.textContent = topScreen.textContent+operatorPressed;
    // }   else {
    //     topScreen.textContent = topScreen.textContent+operatorPressed;
    // }
    //     nmbrOfBtnPress ++;