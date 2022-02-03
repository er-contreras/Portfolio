/* Client Validation */
const form = document.getElementById('signup');
const { email } = form.elements;
const requiredFields = [
  { input: email, message: 'Email is required' },
];

function error(input, message) {
  input.className = 'error';
  const error = document.querySelector('.labelformat');
  error.innerText = message;
  return false;
}

function success(input) {
  input.className = 'success';
  const error = input.previousElementSibling;
  error.innerText = '';
  return true;
}

function validateEmail(input) {
  const re = /^[a-z0-9.!#$%&'*+=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z90-]+)*$/;

  return re.test(input.value.trim())
    ? success(input)
    : error(input, 'Invalid email format. Use Lowercase');
}

function requireValue(input, message) {
  return input.value.trim() === ''
    ? error(input, message)
    : success(input);
}

form.addEventListener('submit', (event) => {
  let valid = true;
  requiredFields.forEach((input) => {
    valid = requireValue(input.input, input.message);
  });

  if (valid) {
    valid = validateEmail(email);
  }
  
  if (!valid) {
    event.preventDefault();
  }
});