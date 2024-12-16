document.getElementById('btn-money-transfer').addEventListener('click', function(event){
      event.preventDefault();
      const userAccountNumber = getInputFieldValueById('input-money-transfer-number');
      const transferMoneyAmount = getInputFieldValueById('input-money-transfer-amount');
      const transferMoneyPin = getInputFieldValueById('input-money-transfer-pin');
      if(transferMoneyPin === 19945 && userAccountNumber === 1621414498){
        const mainBalance = getTextFieldValueById('main-balance');
        const newBalance = mainBalance - transferMoneyAmount;
        document.getElementById('main-balance').innerText = newBalance;
      }
})
