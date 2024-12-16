document.getElementById('btn-pay-bill').addEventListener('click', function(event){
    event.preventDefault();
    
    const paymentOption = getInputFieldValueById('payment-list');
    const paymentAccountNumber = getInputFieldValueById('input-billar-account-number-field');
    console.log(paymentOption, paymentAccountNumber, );

});
