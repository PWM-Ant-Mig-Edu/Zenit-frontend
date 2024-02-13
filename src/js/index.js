window.addEventListener('message', function(event) {
    if (event.data.type === 'resize') {
        var iframe = document.getElementById('HeaderFrame');
        iframe.style.height = event.data.height + 'px';
    }
}, false);

var slideIndex = 1; 

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slider-item");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

document.addEventListener("DOMContentLoaded", function() {
    showSlides(slideIndex);
});

function ajustarAlturaObjeto() {
    var miObject = document.getElementById('Header');
    miObject.style.height = miObject.contentDocument.documentElement.scrollHeight + 'px';
}

// Ajustar la altura inicialmente
window.addEventListener('DOMContentLoaded', ajustarAlturaObjeto);

// Ajustar la altura cuando se redimensiona la ventana
window.addEventListener('resize', ajustarAlturaObjeto);

function loadPage(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            const contentContainer = document.getElementById('Header');
            contentContainer.innerHTML = data;
            // Encuentra los scripts en el contenido
            const scripts = contentContainer.querySelectorAll('script');
            scripts.forEach(script => {
                const src = script.getAttribute('src');
                if (src) {
                    // Crea un nuevo script y añádelo al documento
                    const newScript = document.createElement('script');
                    newScript.src = src;
                    document.body.appendChild(newScript);
                }
            });
        })
        .catch(error => console.error('Error al cargar la página', error));
}
loadPage("../src/components/header.html");
