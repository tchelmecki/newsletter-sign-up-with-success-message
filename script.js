const emailInput = document.querySelector('input');
const emailCheck = document.querySelector('.email-check');
const button = document.querySelector('button');
const successMessage = document.querySelector('.success-message');
const main = document.querySelector('main');
const body = document.querySelector('body');

function addElement(){
  const successDiv = document.createElement("div");
  successDiv.className = 'success';
  const email = emailInput.value;
  successDiv.innerHTML = `
  <div class="img-container"></div>
  <p> Thanks for subscribing!</p>
  <p>A confirmation email has been sent to <b>${email}</b>. 
    Please open it and click the button inside to confirm your subscription.</p>
  <button>Dismiss message</button>`;
  successMessage.style.display = "flex";
  successMessage.appendChild(successDiv);
}

function validateEmail() {
    var mailFormat =  /\S+@\S+\.\S+/;
    if (emailInput.value.match(mailFormat)) {
        emailCheck.classList.remove('active');
        emailInput.classList.remove('invalid');
        main.style.display = "none";
        addElement();
        // successMessage.style.display = "flex";
      //  return true;
    } else {
      emailCheck.classList.add('active');
      emailInput.classList.add('invalid');
      // return false;
    }
}

button.addEventListener('click', validateEmail);
  
