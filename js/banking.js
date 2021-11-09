// handle diposite click event 

document.getElementById ('deposite-btn').addEventListener ('click', function(){
    const depositeInput = document.getElementById ('deposite-input');
    const depositeAmount = parseFloat (depositeInput.value);
    
    // get current deposite
    const depositeTotal = document.getElementById('deposite-total');
    const depositeTotalText = parseFloat (depositeTotal.innerText);
    depositeTotal.innerText = depositeTotalText + depositeAmount;
    

    // balance adjust
    const balanceTotal = document.getElementById ('balance-total');
    const balanceTotalText = parseFloat( balanceTotal.innerText);
    balanceTotal.innerText = balanceTotalText + depositeAmount;

    // clear input 
    depositeInput.value = "";
}) 

// handle withdraw click event 

document.getElementById ('withdraw-btn').addEventListener ('click', function(){
    const withdrawInput = document.getElementById ('withdraw-input');
    const withdrawAmount = parseFloat (withdrawInput.value);
    
    // get current withdraw
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = parseFloat (withdrawTotal.innerText);
    withdrawTotal.innerText = withdrawTotalText + withdrawAmount;

    // balance adjust
    const balanceTotal = document.getElementById ('balance-total');
    const balanceTotalText = parseFloat( balanceTotal.innerText);
    balanceTotal.innerText = balanceTotalText - withdrawAmount;

    // clear input 
    withdrawInput.value = "";
}) 