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

