const { BrowserWindow } = require('electron');
const {getAllUsers} = require('./data/users');

function createWindow() {
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });
    win.loadFile('src/views/index.html');
}
module.exports = {createWindow, getAllUsers}