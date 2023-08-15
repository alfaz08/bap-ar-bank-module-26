//step-1: add event listener to the deposit
document.getElementById('deposit').addEventListener('click',function(){
  //step-2:get the deposit amount from the deposit input field
  //always remember to use .value to get text from an input field
  const depositField = document.getElementById('depositInput');
  const newDepositAmount= depositField.value;
  //step:3 get the deposit current total amount
   // for non-input(element other than input,textarea) use innerText to get the text
  const depositTotalElement  = document.getElementById('deposit-total')
  const previousDepositTotal = depositTotalElement.innerText;
  //step-4:add the number to set the total deposit
  const currentDepositTotal = parseInt(previousDepositTotal) + parseInt(newDepositAmount);
  depositTotalElement.innerText = currentDepositTotal;
  //step-5: add the deposit to the Balance

  const balance = document.getElementById('balance-total');
  const newBalanceTotal = balance.innerText;
  //calculate current total amount
  const currentBalanceTotal = parseInt(previousDepositTotal)+parseInt(newDepositAmount)
  //set the total balance
  balance.innerText = currentBalanceTotal;




  //step-7: clear the deposit field
  depositField.value =''
})