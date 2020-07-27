
function validateName(name){
    if(!name){
        return [false, 'Nome é um campo obrigatório!'];
    }
    if(name.length < 3){
        return [false, 'Nome deve possuir mais de 3 caracteres!']
    }
    return [true, 'Sucess!'];
}
module.exports = {validateName}