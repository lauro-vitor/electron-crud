const { FormAddUser, appUsers } = require('../scripts/users/');

function requestPage(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4 && xhr.status == 200) {
                resolve(xhr.responseText);
            }
            if (xhr.readyState == 4 && xhr.status == 404) {
                reject('Página não encontrada!')
            }
        }
        xhr.send();
    });
}
const links = [
    {
        name: 'home',
        route: () => {
            console.log('render home');
        }
    },
    {
        name: 'users',
        route:  () => {
            requestPage('users/users.html')
             .then(async response => {
                document.getElementById('app').innerHTML= response;
                await appUsers();
             })
            .catch(error => {
                document.getElementById('app').innerHTML= error;
            })
        }
        /*route:  () => {
            requestPage('users/FormAddUser.html')
             .then(response => {
                document.getElementById('app').innerHTML= response;
                FormAddUser();
             })
            .catch(error => {
                document.getElementById('app').innerHTML= error;
            })
        }*/
    },
    {
        name: 'members',
        route: () => {
           requestPage('persons/FormAddPerson.html')
           .then(response => {
              document.getElementById('app').innerHTML= response;
           })
           .catch(error => {    
              document.getElementById('app').innerHTML= error;
           })
        }
    }
];

const mountEventNavItemClass = () => {
    let navItemClass = document.getElementsByClassName('navItemClass');
    for (let i = 0; i < navItemClass.length; i++) {
        navItemClass[i].addEventListener('click', () => {
            links[i].route();
        });
    }
}
const renderNavBar = function () {
    const navBar = document.getElementById('NavBar');
    navBar.innerHTML = '';
    links.map(link => {

        navBar.innerHTML += '<span class="navItemClass" >' + link.name + '</span>';
    });
    mountEventNavItemClass();
}

module.exports = { renderNavBar }