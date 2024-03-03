
const form = document.getElementById('contactForm');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const message = document.getElementById('messageTextarea');
const gender = document.getElementsByName('gender');
const greetingMessage = document.getElementById('greeting-message');
const greetingMessageHolder = document.getElementsByClassName('alert');
greetingMessageHolder[0].style.display = "none";

document.getElementById('generate').addEventListener('click', validateInputs);

function validateInputs() {
  event.preventDefault();

  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const messageTextAreaValue = message.value.trim();

  if (firstNameValue === '' || lastNameValue === '' || messageTextAreaValue === '' || !(gender[0].checked || gender[1].checked)) {
      if (firstNameValue === '') {
        firstName.style.borderColor = 'red';
      } else {
        firstName.style.removeProperty('border-color');
      };

      if (lastNameValue === '') {
        lastName.style.borderColor = 'red';
      } else {
        lastName.style.removeProperty('border-color');
      };

      if (messageTextAreaValue === '') {
        message.style.borderColor = 'red';
      } else {
        message.style.removeProperty('border-color');
      }

      if (!(gender[0].checked || gender[1].checked)) {
        document.getElementById('gender-label').style.color = "red";
      } else {
        document.getElementById('gender-label').style.removeProperty('color');
      }
  } else {
      greetingMessageHolder[0].style.display = "block";
      
      greetingMessage.innerHTML='Thank you for contating us, ' + firstNameValue + '!'; 
      greetingMessage.style.float = left;
       
      removeAllAlerts();
  }

};

function removeAllAlerts() {
  firstName.style.removeProperty('border-color');
  lastName.style.removeProperty('border-color');
  message.style.removeProperty('border-color');
  document.getElementById('gender-label').style.removeProperty('color');
}




