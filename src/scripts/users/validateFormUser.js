function validateFormUser(
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
) {
    const resultFirstName = validateName(firstName.value);
    const resultLastName = validateName(lastName.value);
    const resultEmail = validateEmail(email.value);
    if (resultFirstName[0] && resultLastName[0] && resultEmail[0]) {
        return true;
    }
    if (!resultFirstName[0]) {
        writeMessage(firstName, resultFirstName[1], firstNameError);
    } else {
        clearMessage(firstName, firstNameError);
    }
    if (!resultLastName[0]) {
        writeMessage(lastName, resultLastName[1], lastNameError);
    } else {
        clearMessage(lastName, lastNameError);
    }
    if (!resultEmail[0]) {
        writeMessage(email, resultEmail[1], emailError);
    } else {
        clearMessage(email, emailError);
    }
    return false;
}
module.exports = validateFormUser;