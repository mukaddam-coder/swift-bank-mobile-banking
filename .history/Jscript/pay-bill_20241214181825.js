document.getElementById('btn-pay-bill').addEventListener('click', function(event){
    event.preventDefault();
    const paymentOption = document.getElementById('payment-list').value;
    const billarAccountNumber = getInputFieldValueById('input-billar-account-number-field');
    console.log(billarAccountNumber);

})
