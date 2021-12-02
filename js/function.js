
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const valueInText = inputField.value;
    const value = parseFloat(valueInText);
    inputField.value = '';
    return value;
}

function getInnerTextValue(feildId){
    const htmlTag = document.getElementById(feildId);
    const previousTotaltext = htmlTag.innerText;
    const value = parseFloat(previousTotaltext);
    return value;
}
function updateTotal(feildId, amount){
    const previousTotal = getInnerTextValue(feildId);
    const newTotal = previousTotal + amount;
    document.getElementById(feildId).innerText = newTotal;
}
function updateBalance(amount, status){
    const previousBalance = getInnerTextValue('balance-total');
    let newBalance;
    if (status == true){
        newBalance = previousBalance + amount;
    }
    else{
        newBalance = previousBalance - amount;
    }
    document.getElementById('balance-total').innerText = newBalance;
}



document.getElementById ('deposite-btn').addEventListener('click', function(){
    const amount = getInputValue('deposite-input');
    if (amount > 0){
        updateTotal('deposite-total', amount);
        updateBalance(amount, true);
    }
})
document.getElementById ('withdraw-btn').addEventListener('click', function(){
    const amount = getInputValue('withdraw-input');
    const balance = getInnerTextValue('balance-total');
    if (amount > 0 && amount <= balance){
        updateTotal('withdraw-total', amount);
        updateBalance(amount, false);
    }
})