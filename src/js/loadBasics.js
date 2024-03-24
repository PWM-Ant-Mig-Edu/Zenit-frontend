import { loadComponentJS } from './load.js';

export function loadBasics() {
    // Cargar los componentes básicos
    loadComponentJS('../src/components/header.html', 'header-component');
    loadComponentJS('../src/components/footer.html', 'footer-component');
    loadComponentJS('../src/components/login.html', 'login-component');
    loadComponentJS('../src/components/register.html', 'register-component');
    loadComponentJS('../src/components/resetPassword.html', 'reset-password-component');
}

function checkLogin() {
    var  header = document.getElementById( "header-component" );
    if (header) {
        var isLoggedIn = sessionStorage.getItem("usuario");
        if (isLoggedIn) {
            var loginComponent = document.getElementById("login-component");
            var loginImg = document.querySelector(".imagen-header");
        
            var loginButtonMenuContent = document.querySelector(".menu-content .button-container");
            var loginButtonDropdown = document.querySelector(".Dropdown li");
        
            var popupsContainer = document.getElementById("popups");
        
        
            if (loginButtonMenuContent) {
                popupsContainer.style.display = "none";
                loginComponent.style.display = "none";
                loginButtonMenuContent.style.display = "none";
                loginImg.style.display = "block";
            }
        
            if (loginButtonDropdown) {
                var liPerfil = document.getElementById("li Perfil");
                if (liPerfil) {
                    liPerfil.style.display = "block";
                }
        
                var registerButtonDropdown = document.querySelector(".registerMobile");
                var loginLinkDropdown = document.querySelector(".loginMobile");
                if (registerButtonDropdown && loginLinkDropdown) {
                    registerButtonDropdown.style.display = "none";
                    loginLinkDropdown.style.display = "none";
                }
            }
        }
        
    } else {
        console.error("El componente de encabezado no se ha cargado correctamente.");
    }
}

document.addEventListener('DOMContentLoaded', function () {
    loadBasics();
    
    var headerObserver = new MutationObserver(function(mutationsList, observer) {
        for(var mutation of mutationsList) {
            if (mutation.type === 'childList' && mutation.target.id === 'header-component') {
                checkLogin();
                observer.disconnect();
            }
        }
    });
    
    headerObserver.observe(document.body, { childList: true, subtree: true });
});
