const peliculas = [
    { img: "../src/assets/img/película1.jpg", alt: "peli1", resenas: "../public/reviews.html" },
    { img: "../src/assets/img/película2.jpg", alt: "peli2", resenas: "../public/reviews.html" },
    { img: "../src/assets/img/película3.jpg", alt: "peli3", resenas: "../public/reviews.html" },
    { img: "../src/assets/img/película4.jpg", alt: "peli4", resenas: "../public/reviews.html" },
];

const estrenos = [
    { img: "../src/assets/img/película9.jpg", alt: "film9" },
    { img: "../src/assets/img/película10.jpg", alt: "film10" },
    { img: "../src/assets/img/película11.jpg", alt: "film11" },
];

function cargarPeliculas(rol) {
    const contenedor = document.getElementById('type1');
    contenedor.innerHTML = '';

    peliculas.forEach(pelicula => {
        let peliculaHTML = ' ';

        switch (rol) {
            case 'admin':
                peliculaHTML = `
                <div class="film-item">
                    <div class="film-img">
                    <img src="${pelicula.img}" alt="${pelicula.alt}">
                    <div class="overlay">
                        <button onclick="showReservar()"><i class="fas fa-trash"></i>Eliminar</button>
                        <a href="${pelicula.resenas}" class="button-link">
                        <i class="fas fa-pencil"></i> Editar
                        </a>
                    </div>
                    </div>
                </div>
                `;
                
                break;
            default:
                peliculaHTML = `
                <div class="film-item">
                    <div class="film-img">
                    <img src="${pelicula.img}" alt="${pelicula.alt}">
                    <div class="overlay">
                        <button onclick="showReservar()"><i class="fas fa-shopping-cart"></i>Reservar</button>
                        <a href="${pelicula.resenas}" class="button-link">
                        <i class="fas fa-search"></i> Ver detalles
                        </a>
                    </div>
                    </div>
                </div>
                `;
                break;
        }
        contenedor.innerHTML += peliculaHTML;
    });
}

function cargarEstrenos(rol) {
    const contenedor = document.getElementById('type2');

    if (contenedor) {
        contenedor.innerHTML = '';
    
        estrenos.forEach(pelicula => {
            let peliculaHTML = ' ';

        switch (rol) {
            case 'admin':
                peliculaHTML = `
                <div class="film-item">
                    <div class="film-img">
                    <img src="${pelicula.img}" alt="${pelicula.alt}">
                    <div class="overlay">
                        <button onclick="showReservar()"><i class="fas fa-trash"></i>Eliminar</button>
                        <a href="${pelicula.resenas}" class="button-link">
                        <i class="fas fa-pencil"></i> Editar
                        </a>
                    </div>
                    </div>
                </div>
                `;
                
                break;
            default:
                peliculaHTML = `
                <div class="film-item">
                    <img src="${pelicula.img}" alt="${pelicula.alt}">
                </div>
                `;
                break;
        }
        contenedor.innerHTML += peliculaHTML;
        });
    } else {
        return
    }
}



document.addEventListener('DOMContentLoaded', function() {
    const url = window.location.href;

    if (url.includes('adminManageBillboard.html')) {
        cargarPeliculas('admin');
        cargarEstrenos('admin');
    } else {
        cargarPeliculas();
        cargarEstrenos();
    }
});
