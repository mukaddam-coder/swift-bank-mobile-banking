document.getElementById('btn-get-bonus').addEventListener('click', function(event){
    event.preventDefault();
    const getBonusInput = getInputFieldValueById('input-bonus-coupon');
    const mainBalance = getTextFieldValueById('main-balance');
    const couponCode = 'BONUS10';
    if(getBonusInput === couponCode){
        const newBalance = mainBalance + 100;
        document.getElementById('main-balance').innerText = newBalance;
    }
        
 else{
        alert('Invalid Coupon Code! Please try again.')
    }
})
