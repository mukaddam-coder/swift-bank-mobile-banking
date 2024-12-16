document.getElementById('btn-pay-bill').addEventListener('click', function(event){
    event.preventDefault();
    const resultMessage = document.getElementById('result-message');
    const paymentOption = document.getElementById('payment-list').value;
    const paymentAccountNumber = getInputFieldValueById('input-billar-account-number-field');
    const billAmount = getInputFieldValueById('input-pay-bill-amount-field');
    const payBillPin = getInputFieldValueById('input-pay-bill-pin-number');
    const mainBalance = getTextFieldValueById('main-balance');
 if(payBillPin === 19945){
    const newBalance = mainBalance - billAmount;
    resultMessage.style.color = 'green';
    resultMessage.innerText = `Payment of BDT ${billAmount} for ${paymentOption} was successful.`

    document.getElementById('main-balance').innerText = newBalance;
 }

});
