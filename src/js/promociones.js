const promociones = [
    { img: "../src/assets/img/menu-1.png", alt: "promocion1", resenas: "../public/admin_anadir_promociones.html" },
    { img: "../src/assets/img/menu-2.png", alt: "promocion1", resenas: "../public/admin_anadir_promociones.html" },
];

const promocionesEspeciales = [
    { img: "../src/assets/img/menu-3.png", alt: "promocion1", resenas: "../public/admin_anadir_promociones.html" },
    { img: "../src/assets/img/menu-4.png", alt: "promocion1", resenas: "../public/admin_anadir_promociones.html" },
];

const proximasPromociones = [
    { img: "../src/assets/img/promocion1.jpg", alt: "promocion1", resenas: "../public/admin_anadir_promociones.html" },
    { img: "../src/assets/img/promocion2.jpg", alt: "promocion1", resenas: "../public/admin_anadir_promociones.html" },
];

function cargarPromociones(rol) {
    const contenedor = document.getElementById('type1');
    contenedor.innerHTML = '';

    promociones.forEach(promocion => {
        let promocionesHTML = '';

        switch (rol) {
            case 'admin': 
                promocionesHTML = `
                <div class="promocion-item">
                    <div class="promocion-img">
                        <img src="${promocion.img}" alt="${promocion.alt}">
                        <div class="overlay">
                            <button onclick=""><i class="fas fa-trash"></i>Eliminar</button>
                            <a href="${promocion.resenas}" class="button-link">
                                <i class="fas fa-pencil-alt"></i> Editar
                            </a>
                        </div>
                    </div>
                </div>
                `;
                break;
            default:
                promocionesHTML = `
                <div class="promocion-item">
                    <img src="${promocion.img}" alt="${promocion.alt}"></img>
                </div>
                `;
                break;
        }
        contenedor.innerHTML += promocionesHTML;
    });
}



function cargarPromocionesEspeciales(rol) {
    const contenedor = document.getElementById('type2');
    contenedor.innerHTML = '';

    promocionesEspeciales.forEach(promocion => {
        let promocionesHTML = '';   
        switch (rol) {
            case 'admin': 
                promocionesHTML = `
                <div class="promocion-item">
                    <div class="promocion-img">
                        <img src="${promocion.img}" alt="${promocion.alt}">
                        <div class="overlay">
                            <button onclick=""><i class="fas fa-trash"></i>Eliminar</button>
                            <a href="${promocion.resenas}" class="button-link">
                                <i class="fas fa-pencil-alt"></i> Editar
                            </a>
                        </div>
                    </div>
                </div>
                `;
                break;
            default:
                promocionesHTML = `
                <div class="promocion-item">
                    <img src="${promocion.img}" alt="${promocion.alt}"></img>
                </div>
                `;
                break;
        }
        contenedor.innerHTML += promocionesHTML;
    });
}

function cargarPromocionesProximas(rol) {
    const contenedor = document.getElementById('type3');
    contenedor.innerHTML = '';

    proximasPromociones.forEach(promocion => {
        let promocionesHTML = '';

        switch (rol) {
            case 'admin': 
                promocionesHTML = `
                <div class="promocion-item">
                    <div class="promocion-img">
                        <img src="${promocion.img}" alt="${promocion.alt}">
                        <div class="overlay">
                            <button onclick=""><i class="fas fa-trash"></i>Eliminar</button>
                            <a href="${promocion.resenas}" class="button-link">
                                <i class="fas fa-pencil-alt"></i> Editar
                            </a>
                        </div>
                    </div>
                </div>
                `;
                break;
            default:
                promocionesHTML = `
                <div class="promocion-item">
                    <img src="${promocion.img}" alt="${promocion.alt}"></img>
                </div>
                `;
                break;
        }
        contenedor.innerHTML += promocionesHTML;
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const url = window.location.href;

    if (url.includes('admin_gestionar_promociones.html')) {
        cargarPromociones('admin');
        cargarPromocionesEspeciales('admin');
        cargarPromocionesProximas('admin');
    } else {
        cargarPromociones();
        cargarPromocionesEspeciales();
        cargarPromocionesProximas();
    }    
});
