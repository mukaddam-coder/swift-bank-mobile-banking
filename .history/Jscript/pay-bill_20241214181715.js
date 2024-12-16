document.getElementById('btn-pay-bill').addEventListener('click', function(event){
    event.preventDefault();
    const billarAccountNumber = getInputFieldValueById('input-billar-account-number-field');
    console.log(billarAccountNumber);
    
})
