const {remote} = require('electron');
const main = remote.require('./main.js');

async function getUsers (){
    try {
        return await main.getAllUsers();
    } catch (error) {
        console.log('error', error);
        return null;
    }
}
const renderUsers = async () => {
    const users = await getUsers();

    let time3 = Date.now().valueOf();
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';
    if(users){
        users.map(user => {
            tableBody.innerHTML += `
                <tr>
                    <td>${user.id}</td>
                    <td >${user.firstName} ${user.lastName}</td>
                    <td>${user.email}</td>
                    <td>
                    <button>Alterar</button>
                    <button>Excluir</button>
                    </td>
                </tr>
            `
        });
    }
    let time4 = Date.now().valueOf();
    console.log('time to render', (time4 - time3));
}
module.exports = renderUsers;