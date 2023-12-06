const formEl = document.querySelector('form');
const emailFld = document.querySelector("input[name='email']");
const passwordFld = document.querySelector("input[name='password']");
const repasswordFld = document.querySelector("input[name='repassword']");
const fullnameFld = document.querySelector("input[name='fullname']");
const merchantFld = document.querySelector("input[name='merchant']");
const passwordRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
const thankYouForRegistering = document.querySelector('div[class="thank-you"]');

let canSubmit = false;

function submitForm(userInput) {
  thankYouForRegistering.innerText = `${userInput[3].value}, Thank You for Signing up with with us :)`;
  formEl.reset();
}

function validateField(context, isValidated) {
  if (isValidated) {
    canSubmit = true;
    context.parentElement.classList.remove('form-field-error');
  } else {
    canSubmit = false;
    context.parentElement.classList.add('form-field-error');
  }
}

//validators
emailFld.addEventListener('keyup', function (e) {
  e.preventDefault();
  validateField(this, e.target.reportValidity());
});

passwordFld.addEventListener('keyup', function (e) {
  e.preventDefault();
  validateField(this, passwordRegEx.test(e.target.value));
});

repasswordFld.addEventListener('keyup', function (e) {
  e.preventDefault();
  validateField(this, e.target.value === passwordFld.value);
});

fullnameFld.addEventListener('keyup', function (e) {
  e.preventDefault();
  validateField(this, e.target.reportValidity());
});

//submit handler
formEl.addEventListener('submit', function (e) {
  e.preventDefault();

  const formValues = [...e.target.elements]
    .filter(input => input.type !== 'submit' && input)
    .map(input => {
      return {
        name: input.getAttribute('name'),
        type: input.type,
        value: input.type === 'checkbox' ? input.checked : input.value,
      };
    });

  const isFormFilled = formValues
    .filter(input => input.type !== 'checkbox')
    .every(input => input.value !== '');

  isFormFilled && canSubmit && submitForm(formValues);
});
