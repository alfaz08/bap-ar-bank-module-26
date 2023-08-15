//step-1 add click event handler with the submit button
  document.getElementById('submit').addEventListener('click',function(){
  //step-2: get the email address inside the gmail input field
  //always remember to use .value to get text from an input field
    const email = document.getElementById('email');
  emailValue = email.value;
  //step-3: get passwoord same way

  const password = document.getElementById('password');
  passwordValue = password.value;
  //step-4:verify email

  if(emailValue==='alfaz.cse@gmail.com' && passwordValue==='ami0174'){
    //step-5 take to the next page
    location.href ='bank.html'
  }
  else{
    alert('Invalid User')
  } 
})

