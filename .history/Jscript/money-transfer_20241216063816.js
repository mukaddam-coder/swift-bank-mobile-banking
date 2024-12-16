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

       
      }
      else{
        alert('Failed to transfer money! Please try again.')
      }
})
