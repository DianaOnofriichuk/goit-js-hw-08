const emailEl = document.querySelector('.email-js');
const messageEl = document.querySelector('.message-js');
const form = document.querySelector('.feedback-form');

if (localStorage.getItem('email') !== null || localStorage.getItem('message') !== null) {
  emailEl.value = JSON.parse(localStorage.getItem('email'));
  messageEl.textContent = JSON.parse(localStorage.getItem('message'));
}

emailEl.addEventListener('input', onEmailImput);

function onEmailImput(e) {
  localStorage.setItem('email', JSON.stringify(e.currentTarget.value));
}

messageEl.addEventListener('input', onMessageImput);
function onMessageImput(e) {
  localStorage.setItem('message', JSON.stringify(e.currentTarget.value));
}

form.addEventListener('submit', onFormSubmit);
function onFormSubmit(e) {
  e.preventDefault();

  const email = e.currentTarget.elements.email.value;
  const message = e.currentTarget.elements.message.value;
  console.log({ email, message });

  if (localStorage.getItem('message') !== null || localStorage.getItem('email') !== null) {
    localStorage.removeItem('message');
    localStorage.removeItem('email');
  }
  messageEl.textContent = '';
  e.currentTarget.reset();
}
