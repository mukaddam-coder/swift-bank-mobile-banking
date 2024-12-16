document.getElementById('btn-pay-bill').addEventListener('click', function(event) {
    event.preventDefault();
    const resultMessage = document.getElementById('result-message');
    
    // Retrieve form input values
    const paymentOption = document.getElementById('payment-list').value;
    const paymentAccountNumber = document.getElementById('input-billar-account-number-field').value.trim();
    const billAmount = parseFloat(document.getElementById('input-pay-bill-amount-field').value.trim());
    const payBillPin = document.getElementById('input-pay-bill-pin-number').value.trim();
    
    // Assuming main balance is stored as text and needs to be converted to a number
    const mainBalance = parseFloat(document.getElementById('main-balance').innerText.trim());
    
    // Validation for bill amount
    if (isNaN(billAmount) || billAmount <= 0) {
        alert('Please enter a valid amount greater than 0.');
        return;
    }

    // Validation for account number
    if (paymentAccountNumber === "" || paymentAccountNumber.length < 6) {
        alert('Please enter a valid account number (at least 6 digits).');
        return;
    }

    // Check for PIN validation
    if (payBillPin !== "19945" || payBillPin.length !== 5) {
        alert('PIN must be exactly 5 digits.');
        return;
    }

    // Ensure sufficient balance for the payment
    if (mainBalance < billAmount) {
        alert('Insufficient balance to complete the payment.');
        return;
    }

    // Deduct the bill amount from main balance if everything is valid
    const newBalance = mainBalance - billAmount;
    document.getElementById('main-balance').innerText = newBalance; // Keeping two decimals for balance
    
    // Display success message
    resultMessage.style.color = 'green';
    resultMessage.innerText = `Payment of BDT ${billAmount.toFixed(2)} for ${paymentOption} was successful. New balance: BDT ${newBalance.toFixed(2)}`;
});
