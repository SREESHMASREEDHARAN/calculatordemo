//disply number in input box
function displayNumber(num){
    result.value+=num;
}
//clear text
function clearText(){
    result.value="";
}

//evaluvate the expression
function evaluvateExpression(){
    result.value=eval(result.value);
}
//backspace
function removeLastItem(){
    result.value=result.value.slice(0,-1);
}