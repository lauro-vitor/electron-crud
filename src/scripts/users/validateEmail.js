const validator = require('validator');
function validateEmail(email){
    if(!email){
        return [false, 'Email é um campo obrigatório!'];
    }
    if(!validator.isEmail(email)){
        return [false, 'Email Inválido!']
    }
    return [true, 'Sucess!'];
}
module.exports = {validateEmail}