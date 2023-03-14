function addToScreen(value){
    document.getElementById('screen').value+=value;
}

function clearScreen(){
    document.getElementById('screen').value="";
}

function resultScreen(){
    document.getElementById('result').value=eval(document.getElementById('screen').value);
    document.getElementById('screen').value="";
}