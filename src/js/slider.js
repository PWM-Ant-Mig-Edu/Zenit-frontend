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

function loadSliderComponent() {
    return fetch("../src/components/slider.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById('slider-component').innerHTML = data;
        })
        .catch(error => console.error('Error loading the slider component:', error));
}

function loadBanners() {
    return fetch('../src/json/films.json')
        .then(response => response.json())
        .then(data => {
            const bannerSlider = document.querySelector('.slider-content');
            bannerSlider.innerHTML = '';
            data.banners.forEach(banner => {
                const bannerHTML = generateBannerHTML(banner);
                bannerSlider.innerHTML += bannerHTML;
            });
        })
        .catch(error => {
            console.error('Error loading the JSON:', error);
        });
}

function generateBannerHTML(banner) {
    return `
        <div class="slider-item">
            <img src="${banner.img}" alt="${banner.name}">
        </div>
    `;
}

document.addEventListener("DOMContentLoaded", function() {
    loadSliderComponent()
        .then(() => loadBanners())
        .then(() => showSlides(slideIndex));
});
