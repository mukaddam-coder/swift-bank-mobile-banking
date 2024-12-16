
// The add money section will show when the add money button is clicked.
document.getElementById('show-add-money-section').addEventListener('click', function(){
    showSectionById('add-money-section');

    const addMoneyButton = document.getElementById('show-add-money-section');
   addMoneyButton.classList.add('border-1', 'border-green-500', 'ring-2', 'ring-orange-300', 'text-black', 'font-semibold', 'bg-white');
});

// The cash-out section will show when the cash-out button is clicked.
document.getElementById('show-cash-out-section').addEventListener('click', function(){
    showSectionById('cash-out-section')

    const cashOutButton = document.getElementById('show-cash-out-section');
    cashOutButton.classList.add('border-1', 'border-green-500', 'ring-2', 'ring-orange-300', 'text-black', 'font-semibold', 'bg-white')
});

// The money transfer section will show when the money transfer button is clicked.

document.getElementById('show-money-transfer-section').addEventListener('click', function(){
    showSectionById('money-transfer-section');

    const moneyTransferButton = document.getElementById('show-money-transfer-section');
    moneyTransferButton.classList.add('border-1', 'border-green-500', 'ring-2', 'ring-orange-300', 'text-black', 'font-semibold', 'bg-white');

});


document.getElementById('show-get-bonus-section').addEventListener('click', function(){
    showSectionById('get-bonus-section');

    const getBonusButton = document.getElementById('show-get-bonus-section');
    getBonusButton.classList.add('border-1', 'border-green-500', 'ring-2', 'ring-orange-300', 'text-black', 'font-semibold', 'bg-white');

});

document.getElementById('show-pay-bill-section').addEventListener('click', function(){
    showSectionById('pay-bill-section');
    
    const payBillButton = document.getElementById('show-pay-bill-section');
    payBillButton.classList.add('border-1', 'border-green-500', 'ring-2', 'ring-orange-300', 'text-black', 'font-semibold', 'bg-white')

});


document.getElementById('show-transaction-history').addEventListener('click', function(){
    showSectionById('transaction-history-section');

    const transactionHistoryButton = document.getElementById('show-transaction-history');
    transactionHistoryButton.classList.add('border-1', 'border-green-500', 'ring-2', 'ring-orange-300', 'text-black', 'font-semibold', 'bg-white');
    
})