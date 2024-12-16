document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();
    const cashOut = getInputFieldValueById('input-cash-out-field');
    const cashOutPin = getInputFieldValueById('input-cash-out-pin-number');
    console.log(cashOut, cashOutPin);
})
