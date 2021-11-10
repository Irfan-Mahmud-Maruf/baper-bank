function getInputValue(inputId) {
  const input = document.getElementById(inputId);
  const amount = parseFloat(input.value);

  // clear input
  input.value = "";

  return amount;
}
function setTotalAmount(totalFieldID , amount){
  const total = document.getElementById(totalFieldID);
  const totalText = parseFloat(total.innerText);
  total.innerText = totalText + amount;
}
function updateBalance(amount, ifAdd){
  const balanceTotal = document.getElementById("balance-total");
  const balanceTotalText = parseFloat(balanceTotal.innerText);
  if (ifAdd == true){
    balanceTotal.innerText = balanceTotalText + amount;
  }
  else{
    balanceTotal.innerText = balanceTotalText - amount;
  }
}

// handle diposite click event

document.getElementById("deposite-btn").addEventListener("click", function () {
  const depositeAmount = getInputValue("deposite-input");
  if (depositeAmount > 0){
    // get current deposite
    setTotalAmount ("deposite-total" , depositeAmount);
    // balance adjust
    updateBalance(depositeAmount, true);
  }
  
});

// handle withdraw click event

document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawAmount = getInputValue ("withdraw-input");
  if (withdrawAmount > 0){
    // get current withdraw
    setTotalAmount ("withdraw-total" , withdrawAmount);
    // balance adjust
    updateBalance(withdrawAmount, false);
  }
});
