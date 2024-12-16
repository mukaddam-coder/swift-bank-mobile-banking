document.getElementById('btn-money-transfer').addEventListener('click', function(event){
      event.preventDefault();
      const userAccountNumber = getInputFieldValueById('input-money-transfer-number');
      const transferMoneyAmount = getInputFieldValueById('input-money-transfer-amount');
      const transferMoneyPin = getInputFieldValueById('input-money-transfer-pin');

      const mainBalance = getTextFieldValueById('main-balance');
      
    //   Validate transfer money
      if(isNaN(transferMoneyAmount)){
        alert('Please enter a positive number to transfer money.');
        return;
      }

      if(transferMoneyAmount <= 0){
        alert('Please enter a valid amount to transfer money.');
        return;
      }

      if(transferMoneyAmount > mainBalance){
        alert('You do not have sufficient balance to transfer.')
      }

      if(transferMoneyPin === 19945 && userAccountNumber === 1621414498){
        
        const newBalance = mainBalance - transferMoneyAmount;
        document.getElementById('main-balance').innerText = newBalance;

       // Get Transaction time
     const transactionTime = new Date();
     const formattedTime = transactionTime.toLocaleString(); 

     // Add to transaction histoy
    const transactionDiv = document.createElement('div');
            transactionDiv.classList.add('bg-white', 'rounded-xl', 'p-4', 'mb-4');
            transactionDiv.innerHTML = `
                <div class = "flex justify-between items-center gap-1">
                    <div class="flex w-1/3">
                    <p><i class="fa-solid fa-wallet text-2xl text-yellow-500 rounded-full bg-slate-200 px-3 py-2"></i></p>
                    <h2 class="p-1 font-bold text-xl text-center">Money Transfer</h2>
                    </div>
                    <div class="flex-1">
                    <p class="text-md"><span class ="font-bold text-green-600">Cash out to${agentNumber}</span> BDT: ${cashOut} was successful, and your new balance is BDT: ${newBalance}.</p>
                    <p class="text-sm text-gray-500 font-bold">Transaction Time: ${formattedTime}</p>
                    </div>
                 </div>`;
            
            // Append transaction to the transaction history container
            document.getElementById('transaction-container').appendChild(transactionDiv);
      }
      else{
        alert('Failed to transfer money! Please try again.')
      }
})
