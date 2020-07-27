function writeMessage(elementInput, message, elementMessage){
    elementInput.style.border= '1px solid red';
    elementMessage.style.visibility = 'visible';
    elementMessage.innerHTML = message;
}
module.exports = writeMessage;