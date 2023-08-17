document.getElementById('submit-btn').addEventListener('click', function () {
    // get user email
    const emailField = document.getElementById('email-input');
    const userEmail = emailField.value;
    // get user password
    const passwordField = document.getElementById('password-input');
    const userPassword = passwordField.value;
    // check email and password
    if (userEmail == 'ratri@gmail.com' && userPassword == 'ratri') {
        window.location.href = 'bank.html';
    }
    else{console.log('Invalid Number')}
});

console.log('ratriiiii');
