function toggleMenu() {
    console.log("toggleMenu");
    var element = document.querySelector(".Dropdown");
    element.classList.toggle("show");
    var height = document.body.scrollHeight;
    window.parent.postMessage({ type: 'resize', height: height }, '*');
}

function checkWidthAndAdjust() {
    var element = document.querySelector(".Dropdown");
    if (window.innerWidth > 767 && element.classList.contains("show")) {
        element.classList.remove("show");

        var height = document.body.scrollHeight;
        window.parent.postMessage({ type: 'resize', height: height }, '*');
    }
}
window.addEventListener('resize', checkWidthAndAdjust);


function loginCheck() {
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














