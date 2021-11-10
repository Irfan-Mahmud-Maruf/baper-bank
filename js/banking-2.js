
function getInputValue (inputID){
    const input = document.getElementById (inputID);
    const amount = parseFloat (input.value);

    // clear input 
    input.value = "";

    return amount;
}
function getTotalAmount ( totalFieldId, amount){
    const Total = document.getElementById(totalFieldId);
    const TotalText = parseFloat (Total.innerText);
    Total.innerText = TotalText + amount;
}
function totalBalance(amount, isAdd){
    const balanceTotal = document.getElementById ('balance-total');
    const balanceTotalText = parseFloat( balanceTotal.innerText);
    if ( isAdd == true){
        balanceTotal.innerText = balanceTotalText + amount;
    }
    else{
        balanceTotal.innerText = balanceTotalText - amount;
    }
}



// handle diposite click event 

document.getElementById ('deposite-btn').addEventListener ('click', function(){
    // const depositeInput = document.getElementById ('deposite-input');
    // const depositeAmount = parseFloat (depositeInput.value);
    const depositeAmount = getInputValue ('deposite-input');
    // get current deposite
    /* 
    const depositeTotal = document.getElementById('deposite-total');
    const depositeTotalText = parseFloat (depositeTotal.innerText);
    depositeTotal.innerText = depositeTotalText + depositeAmount; 
    */
    getTotalAmount('deposite-total' , depositeAmount);

    // balance adjust
    /* 
    const balanceTotal = document.getElementById ('balance-total');
    const balanceTotalText = parseFloat( balanceTotal.innerText);
    balanceTotal.innerText = balanceTotalText + depositeAmount; */

    totalBalance(depositeAmount, true);
    // clear input 
    // depositeInput.value = "";
}) 

// handle withdraw click event 

document.getElementById ('withdraw-btn').addEventListener ('click', function(){
    // const withdrawInput = document.getElementById ('withdraw-input');
    // const withdrawAmount = parseFloat (withdrawInput.value);
    const withdrawAmount = getInputValue ('withdraw-input');
    
    // get current withdraw
    /* 
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = parseFloat (withdrawTotal.innerText);
    withdrawTotal.innerText = withdrawTotalText + withdrawAmount; */
    getTotalAmount ('withdraw-total', withdrawAmount)

    // balance adjust
    /* 
    const balanceTotal = document.getElementById ('balance-total');
    const balanceTotalText = parseFloat( balanceTotal.innerText);
    balanceTotal.innerText = balanceTotalText - withdrawAmount; */
    totalBalance(withdrawAmount, false)

    // // clear input 
    // withdrawInput.value = "";
}) 