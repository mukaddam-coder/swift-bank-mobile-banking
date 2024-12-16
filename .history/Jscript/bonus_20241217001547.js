document.getElementById('btn-get-bonus').addEventListener('click', function(event){
    event.preventDefault();
    const getBonusInput = document.getElementById('input-bonus-coupon').value.trim();
    const mainBalanceText = document.getElementById('main-balance').innerText;
    const mainBalance = parseFloat(mainBalanceText);
    const couponCode = 'BONUS10';

    if(getBonusInput === couponCode){
        const bonusAmount = 100;
        const newBalance = mainBalance + bonusAmount;
        document.getElementById('main-balance').innerText = newBalance;

        // Add to transaction history
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
                       <h2 class="p-1 font-bold text-xl text-center">Bonus Amount</h2>
                       </div>
                       <div class="flex-1">
                       <p class="text-md"><span class ="font-bold text-green-600">You got BDT: ${bonusAmount}</span> bonus on usage was added to your account, and your new balance is BDT: ${newBalance}</p>
                       <p class="text-sm text-gray-500 font-bold">Transaction Time: ${formattedTime}</p>
                       </div>
                    </div>`;
               
               // Append transaction to the transaction history container
               document.getElementById('transaction-container').appendChild(transactionDiv);
    }
    else{
        alert('Invalid Coupon Code! Please try again.')
    }
})
