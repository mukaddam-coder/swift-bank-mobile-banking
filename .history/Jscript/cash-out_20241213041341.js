document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();
    const cashOut = getInputFieldValueById('input-cash-out-field');
    const cashOutPin = getInputFieldValueById('input-cash-out-pin-number');
    const agentNumber = getInputFieldValueById('input-cash-out-phone');
    const mainBalance = getTextFieldValueById('main-balance');

    if(cashOutPin === 19945){
        const newBalance = mainBalance - cashOut;
        console.log(newBalance);
    }
    else{
        alert('Failed to cash out! Please try again.')
    }
})
