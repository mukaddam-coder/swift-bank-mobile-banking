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

    if(cashOutPin === 19945){
        const mainBalance = getTextFieldValueById('main-balance');
        const newBalance = mainBalance - cashOut;
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
                    <h2 class="p-1 font-bold text-xl text-center">Cash Out</h2>
                    </div>
                    <div class="flex-1">
                    <p class="text-md"><span class ="font-bold text-green-600">From ${bankList}</span> BDT: ${addMoney} was added to your account, and your new balance is BDT: ${newBalance}</p>
                    <p class="text-sm text-gray-500 font-bold">Transaction Time: ${formattedTime}</p>
                    </div>
                 </div>`;
            
            // Append transaction to the transaction history container
            document.getElementById('transaction-container').appendChild(transactionDiv);
    }
    else{
        alert('Failed to cash out! Please try again.')
    }
})
