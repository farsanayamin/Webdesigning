function btn_click(val){
    document.getElementById("screen").value += val;
}

function clearDisplay(){
    document.getElementById("screen").value = "";
}
function equal_click(){
    text=document.getElementById("screen").value;
    var result =eval(text);
    document.getElementById("screen").value =result;
}


