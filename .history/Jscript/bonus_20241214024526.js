document.getElementById('btn-get-bonus').addEventListener('click', function(event){
    event.preventDefault();
    const getBonusInput = document.getElementById('input-bonus-coupon').value.trim();
    const mainBalanceText = document.getElementById('main-balance').innerText;
    const mainBalance = parseFloat(mainBalanceText);
    const couponCode = 'BONUS10';

    if(getBonusInput === couponCode){
        const bonusAmount = 100;
        const newBalance = mainBalance + bonusAmount;
        document.getElementById('main-balance').innerText = newBalance.toFixed(2);
    }
    else{
        alert('Invalid Coupon Code! Please try again.')
    }
})
