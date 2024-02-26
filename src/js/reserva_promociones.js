var currentStep = 0;
var steps = document.querySelectorAll('.step');
var step_names = document.querySelectorAll('.step-name');
var progressBar = document.querySelector('.progress-line');

// Función para incrementar la cantidad de una promoción
function increment(promotion) {
    var quantityElement = document.getElementById('quantity_' + promotion);
    var currentQuantity = parseInt(quantityElement.textContent);
    quantityElement.textContent = currentQuantity + 1;
    updateSummary();
}

// Función para decrementar la cantidad de una promoción
function decrement(promotion) {
    var quantityElement = document.getElementById('quantity_' + promotion);
    var currentQuantity = parseInt(quantityElement.textContent);
    if (currentQuantity > 0) {
        quantityElement.textContent = currentQuantity - 1;
        updateSummary();
    }
}

// Función para actualizar el resumen de la compra
function updateSummary() {
    var totalBasic = parseInt(document.getElementById('quantity_promotion1').textContent) +
        parseInt(document.getElementById('quantity_promotion2').textContent) +
        parseInt(document.getElementById('quantity_promotion3').textContent) +
        parseInt(document.getElementById('quantity_promotion4').textContent);

    var totalPremium = parseInt(document.getElementById('quantity_promotion5').textContent) +
        parseInt(document.getElementById('quantity_promotion6').textContent) +
        parseInt(document.getElementById('quantity_promotion7').textContent) +
        parseInt(document.getElementById('quantity_promotion8').textContent);

    document.getElementById('total_menus').textContent = totalBasic + totalPremium;


    // Aquí puedes agregar el cálculo del precio total si es necesario
    // var totalPrice = totalBasic * precioPromotion1 + totalPremium * precioPromotion2;
    // document.getElementById('total_price').textContent = totalPrice.toFixed(2);
}

// Llamada inicial para asegurar que el resumen se actualice al cargar la página
updateSummary();



// Define the prices per ticket type (adjust as necessary)
const priceBasic = 5.00;
const pricePremium = 10.00;


function advance() {
    if (currentStep < steps.length - 1) {
        currentStep++;
        updateProgressBar();
    }
}

function back() {
    if (currentStep > 0) {
        currentStep--;
        updateProgressBar();
    }
}

function updateProgressBar() {
    progressBar.style.width = (currentStep / (steps.length - 1) * 100) + '%';
    console.log(progressBar.style.width);
    for (var i = 0; i < steps.length; i++) {
        if (i < currentStep) {
            steps[i].classList.remove('current');
            steps[i].classList.remove('not-completed');
            steps[i].classList.add('completed');

        } else if (i === currentStep) {
            steps[i].classList.remove('completed');
            steps[i].classList.remove('not-completed');
            steps[i].classList.add('current');
        } else {
            steps[i].classList.remove('completed');
            steps[i].classList.remove('current');
            steps[i].classList.add('not-completed');
        }
    }
}


updateProgressBar(); // Para inicializar la barra de progreso al cargar la página
