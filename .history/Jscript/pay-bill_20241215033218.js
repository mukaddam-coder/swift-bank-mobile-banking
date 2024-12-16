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
               // add to transaction history
               const transactionDiv = document.createElement('div');
               transactionDiv.classList.add('bg-white', 'rounded-xl', 'p-4', 'mb-4');
               transactionDiv.innerHTML = `
                   <div class = "flex items-center">
                       <p><i class="fa-solid fa-wallet text-2xl text-yellow-500"></i></p>
                       <h2 class="p-2 font-bold text-lg">Electricity Bill Payment</h2>
                       <p class="text-md">BDT ${payBillAmount.toFixed(2)} paid for Electricity Bill.</p>
                       <p class="text-sm text-gray-600">Payment successful! Remaining Balance: BDT ${newBalance.toFixed(2)}</p>
                   </div>`;
               
               // Append transaction to the transaction history container
               document.getElementById('transaction-container').appendChild(transactionDiv);
         }

         else{
            alert('Invalid PIN or Account Number! Please try again.')
         }
})