const promociones = [
    { img: "../src/assets/img/menu-1.png", alt: "promocion1", resenas: "../public/admin_anadir_promociones.html" },
    { img: "../src/assets/img/menu-2.png", alt: "promocion1", resenas: "../public/admin_anadir_promociones.html" },
];

const promocionesEspeciales = [
    { img: "../src/assets/img/menu-3.png", alt: "promocion1", resenas: "../public/admin_anadir_promociones.html" },
    { img: "../src/assets/img/menu-4.png", alt: "promocion1", resenas: "../public/admin_anadir_promociones.html" },
];

const proximasPromociones = [
    { img: "../src/assets/img/menu-3.png", alt: "promocion1", resenas: "../public/admin_anadir_promociones.html" },
    { img: "../src/assets/img/menu-4.png", alt: "promocion1", resenas: "../public/admin_anadir_promociones.html" },
];

function cargarPromociones(rol) {
    const contenedor = document.getElementById('type1');
    contenedor.innerHTML = '';

    promociones.forEach(promocion => {
        const promocionesHTML = `
        <div class="promocion-item">
            <div class="promocion-img">
            <img src="${promocion.img}" alt="${promocion.alt}">
            <div class="overlay">
                <button onclick="showReservar()"><i class="fas fa-shopping-cart"></i>Reservar</button>
                <a href="${promocion.resenas}" class="button-link">
                <i class="fas fa-search"></i> Ver detalles
                </a>
            </div>
            </div>
        </div>
        `;
        contenedor.innerHTML += promocionesHTML;
    });
}


function cargarPromocionesEspeciales() {
    const contenedor = document.getElementById('type2');

    if (contenedor) {
        contenedor.innerHTML = '';
    
        promocionesEspeciales.forEach(promocion => {
            const promocionesHTML = `
            <div class="promocion-item">
                <div class="promocion-img">
                    <img src="${promocion.img}" alt="${promocion.alt}">
                    <div class="overlay">
                        <button onclick=""><i class="fas fa-shopping-cart"></i>Reservar</button>
                        <a href="${promocion.resenas}" class="button-link">
                        <i class="fas fa-search"></i> Ver detalles
                        </a>
                    </div>
                </div>
            </div>
            `;
            contenedor.innerHTML += promocionesHTML;
        });
    } else {
        return
    }
}

function cargarPromocionesProximas() {
    const contenedor = document.getElementById('type3');

    if (contenedor) {
        contenedor.innerHTML = '';
    
        proximasPromociones.forEach(promocion => {
            const promocionesHTML = `
            <div class="promocion-item">
                <div class="promocion-img">
                    <img src="${promocion.img}" alt="${promocion.alt}">
                    <div class="overlay">
                        <button onclick="showReservar()"><i class="fas fa-shopping-cart"></i>Reservar</button>
                        <a href="${promocion.resenas}" class="button-link">
                        <i class="fas fa-search"></i> Ver detalles
                        </a>
                    </div>
                </div>
            </div>
            `;
            contenedor.innerHTML += promocionesHTML;
        });
    } else {
        return
    }
}

document.addEventListener('DOMContentLoaded', cargarPromociones);
document.addEventListener('DOMContentLoaded', cargarPromocionesEspeciales);
document.addEventListener('DOMContentLoaded', cargarPromocionesProximas);