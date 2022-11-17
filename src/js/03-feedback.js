import throttle from 'lodash.throttle';

const refs = {
  email: document.querySelector(`input[name="email"]`),
  textarea: document.querySelector(`textarea`),
  form: document.querySelector(`.feedback-form`),
};

// const STORAGE_KEY = `feedbackTextarea`;

refs.email.addEventListener(`input`, throttle(handleInputEmail, 1000));
refs.textarea.addEventListener(`input`, throttle(handleInputTextarea, 1000));
refs.form.addEventListener('submit', handleSubmit);

populateInputEmail();

function handleInputEmail(event) {
  console.log(event.target.value);
  localStorage.setItem(`feedbackEmail`, event.target.value);
}

function handleInputTextarea(event) {
  console.log(event.target.value);
  localStorage.setItem(`feedbackTextarea`, event.target.value);
}

function handleSubmit(event) {
  event.preventDefault();
  console.log(event.currentTarget.elements);
  event.currentTarget.reset();
  localStorage.removeItem(`feedbackEmail`);
  localStorage.removeItem(`feedbackTextarea`);
}

function populateInputEmail() {
  const savedEmail = localStorage.getItem(`feedbackEmail`);
  if (savedEmail) {
    refs.email.value = savedEmail;
  }
  const savedTextarea = localStorage.getItem(`feedbackTextarea`);
  if (savedTextarea) {
    refs.textarea.value = savedTextarea;
  }
}
