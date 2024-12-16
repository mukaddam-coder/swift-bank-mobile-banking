document.getElementById('btn-pay-bill').addEventListener('click', function(event){
         event.preventDefault();

         const paymentList = document.getElementById('payment-list').value;
         console.log(paymentList);
})