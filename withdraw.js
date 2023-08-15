/* 
1. add event handler with the withdraw button
2. get the withdraw amount from the withdraw input field
2-5. also make sure to convert the input into a number by using parseFloat

3. Get previous withdraw total

4. calculate total withdraw amount 
4-5. set total withdraw amount

5. get the previous balance total
6. calculate new balance total
6-5: set the new balance total

7. clear the input field
*/


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
    withdrawField.value =''

})