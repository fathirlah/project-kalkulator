function appendvalue(value){
    document.getElementById("display").value += value;
}

function cleardisplay(){
    document.getElementById("display").value = "";
}

function kalkulator(){
    const display = document.getElementById("display");
    try{
        display.value = eval(display.value)
    }catch{
        display.value = "error";
    }
}
