import throttle from 'lodash.throttle';

const refs = {
  email: document.querySelector(`input[name="email"]`),
  textarea: document.querySelector(`textarea`),
  form: document.querySelector(`.feedback-form`),
};

const STORAGE_KEY = `feedback-form-state`;

const formData = {};

refs.form.addEventListener('input', throttle(handleInputForm, 500));
refs.form.addEventListener('submit', handleSubmit);

populateInput();

function handleInputForm(event) {
  formData[event.target.name] = event.target.value;
  const formDataString = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, formDataString);
}

function populateInput() {
  const savedDataString = localStorage.getItem(STORAGE_KEY);
  const savedData = JSON.parse(savedDataString);

  if (savedData) {
    refs.email.value = savedData[`email`];
    refs.textarea.value = savedData[`message`];
  }
}

function handleSubmit(event) {
  event.preventDefault();

  const savedDataString = localStorage.getItem(STORAGE_KEY);
  const savedData = JSON.parse(savedDataString);
  console.log(savedData);

  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
