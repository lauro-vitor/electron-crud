const FormAddUser = () => {
    const { writeMessage, clearMessage, validaOnKeyDown } = require('../utils/');
    const { validateName } = require('./validateName');
    const { validateEmail } = require('./validateEmail');
    const validateFormUser = require('./validateFormUser');
    const formAddUser = document.getElementById('formAddUser');
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const firstNameError = document.getElementById('firstNameError');
    const lastNameError = document.getElementById('lastNameError');
    const emailError = document.getElementById('emailError');

    validaOnKeyDown(firstName, validateName, firstNameError);
    validaOnKeyDown(lastName, validateName, lastNameError);
    validaOnKeyDown(email, validateEmail, emailError);

    formAddUser.addEventListener('submit', event => {
        event.preventDefault();
        if (validateFormUser(
            firstName,
            lastName,
            email,
            firstNameError,
            lastNameError,
            emailError,
            validateName,
            validateEmail,
            writeMessage,
            clearMessage
        )) {
            const user ={
                firstName: firstName.value,
                lastName: lastName.value,
                email: email.value
            }
            console.log('ok', user);
            return;
        }
    });
   
}


module.exports = { FormAddUser }