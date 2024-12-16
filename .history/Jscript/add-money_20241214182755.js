document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
   const bankList = document.getElementById('bank').value; 
   const addMoney = getInputFieldValueById('input-amount-field');
   const pinNumber = getInputFieldValueById('input-add-money-pin-number');
   const bankAccNumber = getInputFieldValueById('input-bank-account-field');
   const mainBalance = getTextFieldValueById('main-balance');
   const resultMessage = getTextFieldValueById('result-message');

   if(bankList === ""){
    resultMessage.style.color = 'red';
    resultMessage.innerText = 'Please select a payment option';
    return;
   }


    if(isNaN(addMoney)){
        alert('Please enter a positive number to add money.');
        return;
    }

    if(addMoney <= 0 ){
        alert('Please enter a positive number to add money.')
    }

   if(pinNumber === 19945 && bankAccNumber === 20501400204694805){
        const newBalance = mainBalance + addMoney;
        document.getElementById('main-balance').innerText = newBalance;
   }
   else{
    alert('Failed to add money!Please try again.')
   }
})
