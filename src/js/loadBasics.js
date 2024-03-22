import {loadComponentJS} from './load.js';

export function loadBasics() {
    loadComponentJS('../src/components/header.html', 'header-component');
    loadComponentJS('../src/components/footer.html', 'footer-component');
    loadComponentJS('../src/components/login.html', 'login-component');
    loadComponentJS('../src/components/register.html', 'register-component');
    loadComponentJS('../src/components/resetPassword.html', 'reset-password-component');
}

document.addEventListener('DOMContentLoaded', function () {
    loadBasics();
});