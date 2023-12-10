function passcheck(password){
    var inputfeld = document.getElementById("pass");
    var inputvalue = inputfeld.value;
    if (inputvalue == password) {
        document.getElementById("goon").disabled = false;
        inputfeld.style.outlineColor = "lightgreen"
    }
    else if(inputvalue == ""){
        inputfeld.style.outlineColor = "transparent"
    }
    else{
        document.getElementById("goon").disabled = true;
        inputfeld.style.outlineColor = "red"
    }
}
    
