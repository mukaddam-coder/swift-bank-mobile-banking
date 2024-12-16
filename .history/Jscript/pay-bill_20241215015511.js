document.getElementById('btn-pay-bill').addEventListener('click', function(event){
         event.preventDefault();

         const paymentList = document.getElementById('payment-list').value;
         const accountNumber = getInputFieldValueById('input-billar-account-number-field');
         const payBillAmount = getInputFieldValueById('input-pay-bill-amount-field');
         const payBillPin = getInputFieldValueById('input-pay-bill-pin-numbe');
})