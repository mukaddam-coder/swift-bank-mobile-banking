document.getElementById('btn-pay-bill').addEventListener('click', function(event){
    event.preventDefault();
    const resultMessage = document.getElementById('result-message');
    const paymentOption = document.getElementById('payment-list').value;
    const paymentAccountNumber = getInputFieldValueById('input-billar-account-number-field');
    const billAmount = getInputFieldValueById('input-pay-bill-amount-field');
    const payBillPin = getInputFieldValueById('input-pay-bill-pin-number');
    const mainBalance = getTextFieldValueById('main-balance');
    
    if(isNaN(billAmount)){
        alert('Please enter a positive number to pay the bill.');
        return;
    }

    if(billAmount <= 0){
        alert('Please enter a valid amount greater than 0.')
        return;
    }

    if(paymentAccountNumber === "" || paymentAccountNumber.length> 6){
        alert('Please enter a valid account number');
        return;
    }

 if(payBillPin === 19945){
    const newBalance = mainBalance - billAmount;
    document.getElementById('main-balance').innerText = newBalance;
    resultMessage.style.color = 'green';
    resultMessage.innerText = `Payment of BDT ${billAmount} for ${paymentOption} was successful.`
    return;

    
 }
 else{
   alert('PIN must be exactly 5 digits.')
 }

});
