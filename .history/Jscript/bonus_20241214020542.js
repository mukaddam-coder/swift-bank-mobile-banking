document.getElementById('btn-get-bonus').addEventListener('click', function(event){
    event.preventDefault();
    const getBonus = getInputFieldValueById('input-bonus-coupon');
    console.log(getBonus);
})
