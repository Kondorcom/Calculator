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
        case '-':
            subtract(x,y);
            console.log(subtract(x,y));
        case '*':
            multiply(x,y);
            console.log(multiply(x,y));
        case '/':
            divide(x,y);
            console.log(divide(x,y));
    }
}

let allNumbers = document.querySelectorAll('.btns');
let allOperators = document.querySelectorAll('.btns_oprt');

let bottomScreen = document.querySelector('.screenBottomRow');
let topScreen = document.querySelector('.screenTopRow');
let nmbrOfBtnPress = 0;
let indx = 0;
let wasOperatorPressed = false;
let wasNmbrPressed = true;

let arrayOfNumbersToCalculate = [];

for (let i = 0; i < allNumbers.length; i++) {
    allNumbers[i].addEventListener('click', function() {
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
    }
        nmbrOfBtnPress ++;
          
    
      
    }
    
    );
     }

for (let i = 0; i < allOperators.length; i++) {
    allOperators[i].addEventListener('click', function() {
    console.log("You clicked:", this.innerHTML);
    let operatorPressed = this.innerHTML;   
    arrayOfNumbersToCalculate[indx] = bottomScreen.textContent;
    topScreen.textContent = bottomScreen.textContent + operatorPressed;
    wasOperatorPressed = true;
    console.table(arrayOfNumbersToCalculate);
        
        // indx++;
        console.log('position in array: ', indx);
    if (wasNmbrPressed === true){
        indx ++;
    }
    wasNmbrPressed = false;
    // if (nmbrOfBtnPress === 0 ){
    //     topScreen.textContent = undefined;
    //     topScreen.textContent = topScreen.textContent+operatorPressed;
    // }   else {
    //     topScreen.textContent = topScreen.textContent+operatorPressed;
    // }
    //     nmbrOfBtnPress ++;
           
    });
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

    
// function checkIfNumber(x){
//     if (typeof x =='number'){
//         console.log('koji kurac')
//         return true;
        
        
//     }   else return false;
// }

    
// const container = document.querySelector('#container');
// const buttons = container.querySelector('#buttons');

//       console.log(buttons);

//     let nmbr = 1;
//     createGrid(3);

// function createGrid(size){
//         for (let i=0; i<size; i++){
//     createRow(size);
// }
// }

// function createRow(rowSize){
// const gridRow = document.createElement('div');
// gridRow.classList.add('gridRow');
// // container.appendChild(gridRow);
// buttons.appendChild(gridRow);


// for (let i=0; i<rowSize; i++){
//     const gridElement = document.createElement('button');
//     gridElement.setAttribute('id', 'btn-nmbr');
//     gridElement.classList.add('gridElement');
//     gridElement.textContent = nmbr;
//     nmbr ++;
//     gridRow.appendChild(gridElement);
    
// }
// }