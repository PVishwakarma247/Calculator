let displayValue = '';
display();

function display(){
    document.querySelector('#display').value = displayValue;
}
// inert number on display
function insert(element){
    displayValue = displayValue + element;
    display();
}

//Operator Selection
function operator(num){
    if(num===11){
        displayValue = displayValue + '+';
        display();
    }else if(num===12){
        displayValue = displayValue + '-';
        display();
    }else if(num===13){
        displayValue = displayValue + '*';
        display();
    }else if(num===14){
        displayValue = displayValue + '/';
        display();
    }else{
        displayValue = displayValue + '.';
        display();
    }
}
// Perform Operation
function operation(){
    
    if(displayValue == ''){
        display();
    }else{
        displayValue = eval(displayValue);
        display();
    }

}
// Clear Display
function allClear(){
    displayValue = '';
    display();
}
// Clear display last element
function clearDisplay(){
    let len = `${displayValue}`;
    displayValue = len.slice(0, -1);
    display();
}
