document.getElementById('btn-get-bonus').addEventListener('click', function(event){
    event.preventDefault();
    const getBonusInput = getInputFieldValueById('input-bonus-coupon');
    console.log(getBonusInput);
})
