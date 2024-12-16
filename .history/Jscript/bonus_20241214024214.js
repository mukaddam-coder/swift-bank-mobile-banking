document.getElementById('btn-get-bonus').addEventListener('click', function(event){
    event.preventDefault();
    const getBonusInput = document.getElementById('input-bonus-coupon').value.trim();
    const mainBalanceText = document.getElementById('main-balance').innerText;
    const mainBalanceAsNumber = parseFloat(mainBalanceText);
    const couponCode = 'BONUS10';
})
