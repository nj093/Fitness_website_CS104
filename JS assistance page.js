    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

   
    if (firstName === '' || lastName === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }
    
    document.getElementById('contactForm').reset(); 
    document.getElementById('successMessage').style.display = 'block'; 
