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
            return;
         }

         if(payBillAmount > mainBalance){
            alert('You do not have sufficient balance to complete the payment.')
            return;
         }
        
         if(payBillPin === 19945 && accountNumber === 1629501006323){
            const newBalance = mainBalance - payBillAmount;
            document.getElementById('main-balance').innerText = newBalance;

            const div = document.createElement('div');
            div.classList.add('bg-white rounded-xl p-4');
            div.innerHTML = `
            <div>
            <p>
            <i class="fa-solid fa-wallet text-2xl text-yellow-500"></i>
            </p>
            <h2 class="p-2 font-bold text-x">Electricity Bill</h2>
            <p>Pay Bill ${payBillAmount} paid for Electricity Bill</p>
            </div>`;
            

            document.getElementById('transaction-container').appendChild(div);
         }

         else{
            alert('Invalid PIN or Account Number! Please try again.')
         }
})