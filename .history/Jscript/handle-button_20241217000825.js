function handleButtonClicked(activeButtonId){
    const buttonIds = ['show-add-money-section', 'show-cash-out-section', 'show-money-transfer-section',
        'show-get-bonus-section', 'show-pay-bill-section', 'show-transaction-history'
    ];
    for(const id of buttonIds){
         const button = document.getElementById(id);
         button.classList.remove( 'border-1', 'border-green-500', 
            'ring-2', 'ring-orange-300', 
            'text-black', 'font-semibold', 'bg-white');
    }
    const activeButton = document.getElementById(activeButtonId);
    activeButton.classList.add( 'border-1', 'border-green-500', 
        'ring-2', 'ring-orange-300', 
        'text-black', 'font-semibold', 'bg-white');
};


handleButtonClicked('show-add-money-section');
handleButtonClicked('show-cash-out-section');

