document.getElementById('btn-pay-bill').addEventListener('click', function(event){
         event.preventDefault();

         const paymentList = document.getElementById('payment-list').value;
         const accountNumber = getInputFieldValueById('input-billar-account-number-field');
         const payBillAmount = getInputFieldValueById('input-pay-bill-amount-field');
         const payBillPin = getInputFieldValueById('input-pay-bill-pin-number');

         const mainBalance = getTextFieldValueById('main-balance');

         if(isNaN(payBillAmount)){
            alert('Please enter a positive number.');
            return;
         }

         if(payBillAmount <= 0){
            alert('Please enter a valid amount greater than 0.');
         }
        
         if(payBillPin === 19945 && accountNumber === 1629501006323){
            const newBalance = mainBalance - payBillAmount;
            document.getElementById('main-balance').innerText = newBalance;
            
         }

         else{
            alert('Invalid PIN or Account Number! Please try again.')
         }
})