document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
   const bankList = document.getElementById('bank').value;
   const addMoney = getInputFieldValueById('input-amount-field');
   const pinNumber = getInputFieldValueById('input-add-money-pin-number');
   const bankAccNumber = getInputFieldValueById('input-bank-account-field');
   const mainBalance = getTextFieldValueById('main-balance');
   

    if(isNaN(addMoney)){
        alert('Please enter a positive number to add money.');
        return;
    }

    if(addMoney <= 0 ){
        alert('Please enter a positive number to add money.')
    }

   if(pinNumber === 19945 && bankAccNumber >= 6){
        const newBalance = mainBalance + addMoney;
        document.getElementById('main-balance').innerText = newBalance;
        // Get Transaction time
        const transactionTime = new Date();
        const formattedTime = transactionTime.toLocaleString(); 

        // Add to transaction histoy
        transactionDiv = document.createElement('div');
               transactionDiv.classList.add('bg-white', 'rounded-xl', 'p-4', 'mb-4');
               transactionDiv.innerHTML = `
                   <div class = "flex justify-between items-center gap-1">
                       <div class="flex gap-1">
                       <p><i class="fa-solid fa-wallet text-2xl text-yellow-500 rounded-full bg-slate-200 px-3 py-2"></i></p>
                       <h2 class="p-1 font-bold text-xl text-center">Add Money</h2>
                       </div>
                       <div>
                       <p class="text-md"><span class ="font-bold text-green-600">From ${bankList}</span> BDT: ${addMoney} was added to your account, and your new balance is BDT: ${newBalance}</p>
                       <p class="text-sm text-gray-500">Transaction Time: ${formattedTime}</p>
                       </div>
                    </div>`;
               
               // Append transaction to the transaction history container
               document.getElementById('transaction-container').appendChild(transactionDiv);
         }
   
   else{
    alert('Failed to add money!Please try again.')
   }
})
