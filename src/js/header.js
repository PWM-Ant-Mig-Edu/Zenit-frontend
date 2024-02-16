
function toggleMenu() {
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

function loadHeaderComponent() {
    fetch("../src/components/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-component').innerHTML += data;
        })
        .catch(error => console.error('Error loading the header:', error));
}
document.addEventListener("DOMContentLoaded", loadHeaderComponent);






