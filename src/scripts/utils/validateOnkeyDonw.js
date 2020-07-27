const validateOnKeyDown = (elementInput, functionValidate, elementMessage) => {
    const {writeMessage, clearMessage}  = require('./index');
    elementInput.addEventListener('keydown', () => {
        let result = functionValidate(elementInput.value);
        if(!result[0]){
            writeMessage(elementInput,result[1], elementMessage)
            return;
        }
        clearMessage(elementInput, elementMessage);
    })
}
module.exports = validateOnKeyDown;