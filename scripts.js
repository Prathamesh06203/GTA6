const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const form = document.querySelector('#signup');
const togglePassword = document.querySelector("#togglePassword");

const showError = (input, message) => {
    const formField = input.parentElement;
    formField.classList.remove('success');
    formField.classList.add('error');

    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    const formField = input.parentElement;

    formField.classList.remove('error');
    formField.classList.add('success');

    const error = formField.querySelector('small');
    error.textContent = '';
};

const isRequired = value => value === '' ? false : true;

const isBetween = (length, min, max) => length < min || length > max ? false : true;

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};


const checkUsername = () => {

    let valid = false;
    const min = 3,
        max = 25;
    const usernameVal = username.value.trim();

    if (!isRequired(usernameVal)) {
        showError(username, 'Username cannot be blank.');
    } else if (!isBetween(usernameVal.length, min, max)) {
        showError(username, `Username must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(username);
        valid = true;
    }
    return valid;
};
const checkEmail = () => {
    let valid = false;
    const emailVal = email.value.trim();
    if (!isRequired(emailVal)) {
        showError(email, 'Email cannot be blank.');
    } else if (!isEmailValid(emailVal)) {
        showError(email, 'Email is not valid.')
    } else {
        showSuccess(email);
        valid = true;
    }
    return valid;
};
const checkPassword = () => {

    let valid = false;

    const passwordVal = password.value.trim();

    if (!isRequired(passwordVal)) {
        showError(password, 'Password cannot be blank.');
    } else if (!isPasswordSecure(passwordVal)) {
        showError(password, 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
    } else {
        showSuccess(password);
        valid = true;
    }

    return valid;
};
const checkConfirmPassword = () => {
    let valid = false;
    const confirmPasswordVal = confirmPassword.value.trim();
    const passwordVal = password.value.trim();

    if (!isRequired(confirmPasswordVal)) {
        showError(confirmPassword, 'Confirm Password is required');
    } else if (passwordVal !== confirmPasswordVal) {
        showError(confirmPassword, 'Confirm Password does not match');
    } else {
        showSuccess(confirmPassword);
        valid = true;
    }

    return valid;
};

togglePassword.addEventListener("click", function () {
    const type = confirmPassword.getAttribute("type") === "password" ? "text" : "password";
    confirmPassword.setAttribute("type", type);
    
    this.classList.toggle("bi-eye");
});

form.addEventListener('submit', function (e) {
    e.preventDefault();

    let isUsernameValid = checkUsername(),
        isEmailValid = checkEmail(),
        isPasswordValid = checkPassword(),
        isConfirmPasswordValid = checkConfirmPassword();

    let isFormValid = isUsernameValid &&
        isEmailValid &&
        isPasswordValid &&
        isConfirmPasswordValid;

    if (isFormValid) {

    }
});