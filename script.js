const email = document.querySelector('input');
const emailCheck = document.querySelector('.email-check');
const button = document.querySelector('button');

function validateEmail() {
    var mailFormat =  /\S+@\S+\.\S+/;
    if (email.value.match(mailFormat)) {
        emailCheck.classList.remove('active');
        email.classList.remove('invalid');
    return true;
    } else {
      emailCheck.classList.add('active');
      email.classList.add('invalid');
      return false;
    }
}

button.addEventListener('click', validateEmail);
  
