document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault();
    const inputText = document.getElementById('input-text-field').value;
    const inputPin = document.getElementById('input-pin-field').value;
    
    if(inputText === '01735109219' && inputPin === '19945'){
        window.location.href = '/home.html'
        console.log('Login Successful!')
    }
    else{
        alert('Invalid Input! Try again.')
    }

})