let alertBarText = document.getElementById("js--alertText");
let alertBar = document.getElementById("js--alert");
let amountCars = document.getElementById("js--amountCars");
let licencePlate = document.getElementById("js--licencePlate");
let validInput; 


function checkForm(){
    validInput = true;

    if(amountCars.value > 0 && !licencePlate.value) {
        validInput = false;
        licencePlate.style.borderBottom = "3px var(--alert-color) solid";
        showError("Vul het kenteken van een auto in!")
    }

    let requiredFields = document.getElementsByClassName("input-required");
    for(let i = 0; i < requiredFields.length; i++) {
        if(!requiredFields[i].value){
            requiredFields[i].style.borderBottom = "3px var(--alert-color) solid";
            validInput = false;
            showError("Vul alle vereisten velden in!");
        } else {
            requiredFields[i].style.borderBottom = "2px var(--check-color) solid";
        }
    }

    if(validInput){
        return true;
    } 
    
    return false;
}

function showError(text) {
    alertBarText.innerHTML = text;
    alertBar.style.top = "0";
    alertBar.style.display = "block";
    window.scrollTo(0, 0);
}
