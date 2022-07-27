function add(a,b){
    let sum = parseInt(a) + parseInt(b);
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
    return roundOff(div);
}
function operate(operator, x, y){
    switch (operator){
        case '+':
            topScreen.textContent = add(x,y);
            
            console.log('add', add(x,y));
            return add(x,y);
            break;
        case '-':
            subtract(x,y);
            
            console.log('subtract: ', subtract(x,y));
            return subtract(x,y);
            break;
        case '*':
            multiply(x,y);
            console.log(multiply(x,y));
            return multiply(x,y);
            break;
        case '/':
            divide(x,y);
            console.log(divide(x,y));
            return (divide(x,y));
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
let wasNmbrPressed = false;

let arrayOfNumbersToCalculate = [];
let firstNmbr = undefined;
let secondNmbr = undefined;
let solution = undefined;
let operatorPressed = undefined;
let firstOperant;
let secondOperant;
let firstNmbrDef = false;
let secondNmbrDef = false;
let solutionDef = false;

for (let i = 0; i < allNumbers.length; i++) {
        allNumbers[i].addEventListener('click', nmbrPressedEvent);}

for (let i = 0; i < allOperators.length; i++) {
        allOperators[i].addEventListener('click', oprtPressedEvent);}  

equalsBtn.addEventListener('click', equalsSolution);



function nmbrPressedEvent(){
    //console.clear();
    let numberPressed = this.innerHTML;
    if (wasOperatorPressed === false){
        

        

        
    
    if (firstNmbr === undefined){
        firstNmbr = numberPressed;
        bottomScreen.textContent = firstNmbr;
        wasNmbrPressed = true;
    }else{
        if (firstNmbr.includes('.') & numberPressed === '.') {

        }
        else {

        console.log('numberPressed', numberPressed);
        firstNmbr += numberPressed;
        console.log('first number', firstNmbr);
        bottomScreen.textContent = bottomScreen.textContent + numberPressed;
        wasNmbrPressed = true;
    }
    } }
    if (wasOperatorPressed === true){
        
        firstNmbrDef = true;
        
        if (secondNmbr=== undefined){
            secondNmbr = numberPressed;
            console.log('second number', secondNmbr);
            bottomScreen.textContent = secondNmbr;
            wasNmbrPressed = true;
            secondNmbrDef = true;

        }   else{
            if (secondNmbr.includes('.') & numberPressed === '.') {
            
            }
            else{

            
            secondNmbr += numberPressed;
            console.log('second number', secondNmbr);
            bottomScreen.textContent += numberPressed;
            wasNmbrPressed = true;
            secondNmbrDef = true;
        }
        }
       

    }


    
}
function oprtPressedEvent(){
    if (wasNmbrPressed === true){

    
    let nextOperant = this.innerHTML;
    topScreen.textContent = solution + nextOperant;
    console.log('nextOp', nextOperant);
    console.log('secondNmbr', secondNmbr , ' firstOperant', firstOperant);
    if (secondNmbr === '0' & firstOperant === '/'){
        console.log('alert');
        alert('cant divide by zero')
    }else{
console.log('secondNmbr', secondNmbr , ' firstOperant', firstOperant);
    if (firstNmbr != undefined & secondNmbr != undefined & solutionDef === false){
        solution = operate(firstOperant, firstNmbr, secondNmbr);
        //topScreen.textContent = solution;
        secondNmbr = undefined;
        firstNmbr = solution;
        solutionDef = true;
        console.log('first if');
        topScreen.textContent = solution + nextOperant;
    }
    if (solutionDef === true & secondNmbr != undefined){
        solution = operate(firstOperant, solution, secondNmbr);
        secondNmbr = undefined;
        firstNmbr = solution;
        topScreen.textContent = solution + nextOperant;
        console.log('solution 2', solution);
        console.log('operant', firstOperant);
       }
    operatorPressed = this.innerHTML;
    wasOperatorPressed = true;
    
    if (wasNmbrPressed === true & solutionDef === false){
        firstOperant = operatorPressed;
        topScreen.textContent = firstNmbr + firstOperant;
        console.log('second if');
    }
    if (wasNmbrPressed === true & solutionDef === true){
        firstOperant = operatorPressed;
        // topScreen.textContent = firstNmbr + firstOperant;
        console.log('fourth if');
    }
    // if (solutionDef === true){
    //     topScreen.textContent = solution + operatorPressed;
    //     secondNmbr = undefined;
    //     console.log('third if');
    // }
  
   
    wasNmbrPressed = false;  
}
    }

}
function roundOff(num){
    return +(Math.round(num + "e+2")  + "e-2");
}
function equalsSolution(){
    if (secondNmbr === '0' & firstOperant === '/'){
        console.log('alert');
        alert('cant divide by zero')
    }
    else
    {
    if (solutionDef != false){
        solution = operate(firstOperant, solution, secondNmbr);
        topScreen.textContent = solution + '=';
        solutionDef = true;
        secondNmbr = undefined;
        console.log('equals');
    }
    if (firstNmbr != undefined & secondNmbr != undefined & solutionDef === false){
        solution = operate(firstOperant, firstNmbr, secondNmbr);
        topScreen.textContent = solution + '=';
        solutionDef = true;
        secondNmbr = undefined;
        console.log('equals2');
    }
}
}
function cleanBottomScreen(){
    bottomScreen.textContent = undefined;
}


function clearAll(){
    
    wasNmbrPressed = false;
    topScreen.textContent = 0;
    bottomScreen.textContent = 0;
    firstNmbr = undefined;
    secondNmbr = undefined;
    solution = undefined;
    firstNmbrDef = false;
    solutionDef = false;
    wasOperatorPressed = false;
    nmbrOfBtnPress = 0;
    indx = 0;
}
function removeLastDigit(){
    let btmText = bottomScreen.textContent;
    btmText = btmText.slice(0,-1);
    firstNmbr = firstNmbr.slice(0,-1);
    secondNmbr = secondNmbr.slice(0,-1);
    bottomScreen.textContent = btmText;
}

