document.getElementById('btn-money-transfer').addEventListener('click', function(event){
      event.preventDefault();
      const userAccountNumber = getInputFieldValueById('input-money-transfer-number');
      const transferMoney = getInputFieldValueById('input-money-transfer-amount');
      const transferMoneyPin = getInputFieldValueById('input-money-transfer-pin');
      console.log(userAccountNumber, transferMoney, transferMoneyPin);
})
