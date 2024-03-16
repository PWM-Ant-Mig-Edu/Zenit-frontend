function cargarPeliculas(rol) {
    const contenedor = document.getElementById('type1');
    contenedor.innerHTML = '';

    fetch('../src/json/films.json')
        .then(response => response.json())
        .then(data => {
            data.films.forEach(pelicula => {
                const peliculaHTML = generateMovieHTML(pelicula, rol);
                contenedor.innerHTML += peliculaHTML;
            });
        })
        .catch(error => {
            console.error('Error al cargar el JSON:', error);
        });
}

function cargarEstrenos() {
    const contenedor = document.getElementById('type2');

    if (!contenedor) return;

    contenedor.innerHTML = '';

    fetch('../src/json/films.json')
        .then(response => response.json())
        .then(data => {
            data.estrenos.forEach(pelicula => {
                const peliculaHTML = generateReleaseHTML(pelicula);
                contenedor.innerHTML += peliculaHTML;
            });
        })
        .catch(error => {
            console.error('Error al cargar el JSON:', error);
        });
}

function generateReleaseHTML(pelicula) {
    return `
        <div class="film-item">
            <div class="film-img">
                <img src="${pelicula.img}" alt="${pelicula.name}">
            </div>
        </div>
    `;
}

function generateMovieHTML(pelicula, rol) {
    let overlayHTML = '';
    if (rol === 'admin') {
        overlayHTML = `
            <button onclick="showReservar()"><i class="fas fa-trash"></i>Eliminar</button>
            <a href="${pelicula.reviewUrl}" class="button-link">
                <i class="fas fa-pencil"></i> Editar
            </a>
        `;
    } else {
        overlayHTML = `
            <button onclick="showReservar()"><i class="fas fa-shopping-cart"></i>Reservar</button>
            <a href="${pelicula.reviewUrl}" class="button-link">
                <i class="fas fa-search"></i> Ver detalles
            </a>
        `;
    }

    return `
        <div class="film-item">
            <div class="film-img">
                <img src="${pelicula.img}" alt="${pelicula.name}">
                <div class="overlay">
                    ${overlayHTML}
                </div>
            </div>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', function() {
    const url = window.location.href;
    const isAdminPage = url.includes('adminManageBillboard.html');
    cargarPeliculas(isAdminPage ? 'admin' : '');
    cargarEstrenos();
});