document.getElementById('btn-pay-bill').addEventListener('click', function(event){
         event.preventDefault();

         const paymentList = getInputFieldValueById('getInputFieldValueById');
         console.log(paymentList);
})