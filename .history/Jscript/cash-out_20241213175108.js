document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();
    const cashOut = getInputFieldValueById('input-cash-out-field');
    const cashOutPin = getInputFieldValueById('input-cash-out-pin-number');
    const agentNumber = getInputFieldValueById('input-cash-out-phone');
    const mainBalance = getTextFieldValueById('main-balance');

    if(cashOut > mainBalance){
        alert('You do not have sufficient balance to cash out.')
    }

    if(cashOutPin === 19945 && agentNumber === 1735109219){
        const newBalance = mainBalance - cashOut;
     document.getElementById('main-balance').innerText = newBalance;
    }
    else{
        alert('Failed to cash out! Please try again.')
    }
})
