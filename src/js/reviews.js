const urlParams = new URLSearchParams(window.location.search);
const nombrePelicula = urlParams.get('name');

function cargarTitulo(titulo) {
    document.getElementById('title').innerHTML = `
        <h1>${titulo}</h1>
    `;
}

function cargarDatosPelicula(pelicula) {
    const filmDataContainer = document.getElementById('film-data');
    const filmImg = document.getElementById('film-img');

    filmImg.src = pelicula.img;
    
    filmDataContainer.innerHTML = `
        <span>${pelicula.releaseDate} | ${pelicula.duration} | ${pelicula.genders.join(', ')}</span><br>
        <span>Dirigida por ${pelicula.director} | Guion ${pelicula.script}</span><br>
        <span>Reparto ${pelicula.cast.join(', ')}</span>
        <div class="rating" id="film-rating">
            <input value="5" name="rate" id="star5" type="radio" ${pelicula.calification === 5 ? 'checked' : ''}>
            <label title="text" for="star5"></label>
            <input value="4" name="rate" id="star4" type="radio" ${pelicula.calification === 4 ? 'checked' : ''}>
            <label title="text" for="star4"></label>
            <input value="3" name="rate" id="star3" type="radio" ${pelicula.calification === 3 ? 'checked' : ''}>
            <label title="text" for="star3"></label>
            <input value="2" name="rate" id="star2" type="radio" ${pelicula.calification === 2 ? 'checked' : ''}>
            <label title="text" for="star2"></label>
            <input value="1" name="rate" id="star1" type="radio" ${pelicula.calification === 1 ? 'checked' : ''}>
            <label title="text" for="star1"></label>
        </div>
    `;
}

function cargarSinopsis(sinopsis) {
    const synopsisContainer = document.getElementById('synopsis');
    synopsisContainer.innerHTML = `
        <h1>Sinopsis</h1>
        <span>${sinopsis}</span>
    `;
}

function cargarReseñas(posts) {
    let postsHTML = '';
    const postsContainer = document.getElementById('posts');
    posts.forEach(post => {
        postsHTML += `
            <div class="review-post">
                <div class="post-header">
                    <img src="${post.img}" alt="Imagen de perfil" class="profile-image">
                    <h1>${post.user}</h1>
                </div>
                <div class="post-content">
                    <span>${post.content}</span>
                </div>
                <div class="footer-container-post">
                    <span>${post.date}</span>
                </div>
            </div>
        `;
    });
    postsContainer.innerHTML = postsHTML;
}

fetch('../src/json/films.json')
            .then(response => response.json())
            .then(data => {
                const pelicula = data.films.find(film => film.name === nombrePelicula);
                console.log(nombrePelicula);
                if (pelicula) {
                    cargarTitulo(pelicula.name);
                    cargarDatosPelicula(pelicula);
                    cargarSinopsis(pelicula.sinopsis);
                    cargarReseñas(pelicula.reviews);
                } else {
                    console.error('La película no fue encontrada en los datos.');
                }
            })
            .catch(error => console.error('Error al cargar los datos:', error));