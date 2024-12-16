document.getElementById('btn-pay-bill').addEventListener('click', function(event){
    event.preventDefault();
    const paymentOption = document.getElementById('payment-list').value;
    const billarAccountNumber = getInputFieldValueById('input-billar-account-number-field');
    const billAmount = getInputFieldValueById('input-pay-bill-amount-field');
    const payBillPin = getInputFieldValueById('input-pay-bill-pin-number');
    const mainBalance = getTextFieldValueById('main-balance');
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
        resultMessage.innerText = 'Please enter a valid amount greater than 0.';
        return;
    }

    if(!/^\d{5}$/.test(payBillPin)){
        const newBalance = mainBalance - billAmount;
        document.getElementById('main-balance').innerText = newBalance;
        resultMessage.style.color = 'red';
        resultMessage.innerText = 'PIN must be exactly 5 digits.';
        return;
    }
    else{
        resultMessage.style.color = 'green';
        resultMessage.innerText = `Payment of BDT ${billAmount} for ${paymentOption} was successful.`;
    }

});