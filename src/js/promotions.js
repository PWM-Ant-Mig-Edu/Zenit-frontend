document.addEventListener('DOMContentLoaded', function() {
    const url = window.location.href;
    const promociones = ['films', 'premieres', 'promotions'];
    const categorias = ['promotions', 'specialPromotions', 'upcomingPromotions'];

    if(url.includes('adminManagePromotions.html')) {
        cargarPromociones('films', 1, 'admin');
    }
    promociones.forEach((tipo, index) => {
        cargarPromociones(tipo, index + 1, 'user');
    });
});

function cargarPromociones(tipo, categoria, rol) {
    const contenedor = document.getElementById(tipo);
    contenedor.innerHTML = '';



    fetch('../src/json/promotions.json')
        .then(response => response.json())
        .then(data => {
            let dataCategory;
            switch (categoria) {
                case 1:
                    dataCategory = data.promotions;
                case 2:
                    dataCategory = data.specialPromotions;
                case 3:
                    dataCategory = data.upcomingPromotions;
            }
            dataCategory.forEach(promocion => {
                let promocionesHTML = '';

                switch (rol) {
                    case 'admin': 
                        promocionesHTML = `
                        <div class="promocion-item">
                            <div class="promocion-img">
                                <img src="${promocion.img}" alt="${promocion.name}">
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
                            <img src="${promocion.img}" alt="${promocion.name}"></img>
                        </div>
                        `;
                        break;
                }
                contenedor.innerHTML += promocionesHTML;
            });
        })
        .catch(error => console.error(`Error fetching ${categoria}:`, error));
}
