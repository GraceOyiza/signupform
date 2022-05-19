const modal = document.getElementById('loginform');
const btn = document.getElementById('loginbtn');

btn.onclick = function () {
  modal.style.display = 'block';
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

const form = document.getElementById('register');
const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let errorFound = true;
let submit = document.getElementById('submit');
let checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', function (event) {
  if (event.target.checked) {
    submit.disabled = false;
  }
});

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const inputs = form.querySelectorAll('input');
  inputs.forEach(input => {
    const { value, type, name } = input;
    const password = form.querySelector('[name=password]').value;
    if (type !== 'checkbox' && (!value || value === '')) {
      input.nextSibling.innerHTML = `${input.dataset.name} is required`;
      input.nextSibling.classList.add('error');
      errorFound = true;
    } else if (type === 'email' && !emailRegex.test(value)) {
      input.nextSibling.innerHTML = `${input.dataset.name} is invalid`;
      input.nextSibling.classList.add('error');
      errorFound = true;
    } else if (name === 'confirmpassword' && password !== value) {
      input.nextSibling.innerHTML = `${input.dataset.name} does not match`;
      input.nextSibling.classList.add('error');
      errorFound = true;
    } else {
      if (type !== 'checkbox') {
        input.nextSibling.innerHTML = '';
        input.nextSibling.classList.remove('error');
        errorFound = false;
      }
    }
  });
  if (errorFound) {
    return;
  }
  form.reset();
  alert('Successfully registered');
});
