//step-1: add event listener to the deposit
document.getElementById('btn-withdraw').addEventListener('click',function(){
  //step-2:get the withdraw amount from the deposit input field
  //always remember to use .value to get text from an input field
  const withdrawField = document.getElementById('withdraw-input');
  const newWithdrawAmountString= withdrawField.value;
  const newWithdrawAmount = parseInt(newWithdrawAmountString)

  //step-3 

  const withdrawTotalElement  = document.getElementById('withdraw-total');
  const previouswithdrawTotalString = withdrawTotalElement.innerText;
  const previouswithdrawTotal = parseInt(previouswithdrawTotalString)

  //step-4
  const currentWithdrawElement = newWithdrawAmount + previouswithdrawTotal;

  //step-5
  withdrawTotalElement.innerText = currentWithdrawElement;

  //step-6 get the previous balance total
  const balance = document.getElementById('balance-total');
  const previousBalanceTotal = balance.innerText;
  const previousTotalElement = parseInt(previousBalanceTotal);

  //step-7 new balance total
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  balance.innerText = newBalanceTotal;



    //step-7: clear the deposit field
    depositField.value =''

})