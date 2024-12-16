document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();
    const cashOut = getInputFieldValueById('input-cash-out-field');
    const cashOutPin = getInputFieldValueById('input-cash-out-pin-number');
    const agentNumber = getInputFieldValueById('input-cash-out-phone');
   

    if(isNaN(cashOut)){
        alert('Please enter a positive number to cash out.')
        return;
    }
    if(cashOut <= 0){
        alert('Please enter a valid amount to cash out.')
        return;
    }

    if(cashOut > mainBalance){
        alert('You do not have sufficient balance to cash out.');
        return;
    }

    if(cashOutPin === 19945 && agentNumber === 1735109219){
        const mainBalance = getTextFieldValueById('main-balance');
        const newBalance = mainBalance - cashOut;
     document.getElementById('main-balance').innerText = newBalance;
    }
    else{
        alert('Failed to cash out! Please try again.')
    }
})
