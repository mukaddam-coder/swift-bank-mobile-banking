document.getElementById('btn-pay-bill').addEventListener('click', function(event){
    event.preventDefault();
    const paymentOption = document.getElementById('payment-list').value;
    const billarAccountNumber = getInputFieldValueById('input-billar-account-number-field');
    const billAmount = getInputFieldValueById('input-pay-bill-amount-field');
    const payBillPin = getInputFieldValueById('input-pay-bill-pin-number');
    const resultMessage = document.getElementById('result-message');
    

    if(paymentOption === ""){
        resultMessage.style.color = 'red';
        resultMessage.innerText = 'Please select a payment option.';
        return;
    }
    if(billarAccountNumber === "" || billarAccountNumber < 6){
        resultMessage.style.color = 'red';
        resultMessage.innerText = 'Please enter a valid account number.'
        return;
    }
    if(!/^\d+(\.\d{1,2})?$/.test(billAmount) || billAmount <= 0){
        resultMessage.style.color = 'red';
        resultMessage.innerText =
    }

});
