document.getElementById('btn-pay-bill').addEventListener('click', function(event){
    event.preventDefault();
    
    const paymentOption = getInputFieldValueById('payment-list');
    const paymentAccountNumber = getInputFieldValueById('input-billar-account-number-field');
    const billAmount = getInputFieldValueById('input-pay-bill-amount-field');
    const payBillPin = getInputFieldValueById('input-pay-bill-pin-number');
    console.log(paymentOption, paymentAccountNumber,billAmount, payBillPin );

});
