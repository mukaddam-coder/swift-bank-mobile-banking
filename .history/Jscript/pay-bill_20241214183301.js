document.getElementById('btn-pay-bill').addEventListener('click', function(event){
    event.preventDefault();
    const paymentOption = document.getElementById('payment-list').value;
    const billarAccountNumber = getInputFieldValueById('input-billar-account-number-field');
    const billAmount = getInputFieldValueById('input-pay-bill-amount-field');
    const payBillPin = getInputFieldValueById('input-pay-bill-pin-number');
    const resultMessage = document.getElementById('result-message');
    console.log(paymentOption, billarAccountNumber, billAmount, payBillPin, resultMessage);

});
