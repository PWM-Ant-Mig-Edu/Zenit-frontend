function loadFooterComponent() {
    fetch("../src/components/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-component').innerHTML = data;
        })
        .catch(error => console.error('Error loading the header:', error));
}
document.addEventListener("DOMContentLoaded", loadFooterComponent);

