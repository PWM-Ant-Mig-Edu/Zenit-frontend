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
    var totalBasic = parseInt(document.getElementById('quantity-promotion1').textContent) +
        parseInt(document.getElementById('quantity-promotion2').textContent) +
        parseInt(document.getElementById('quantity-promotion3').textContent) +
        parseInt(document.getElementById('quantity-promotion4').textContent);

    var totalPremium = parseInt(document.getElementById('quantity-promotion5').textContent) +
        parseInt(document.getElementById('quantity-promotion6').textContent) +
        parseInt(document.getElementById('quantity-promotion7').textContent) +
        parseInt(document.getElementById('quantity-promotion8').textContent);

    document.getElementById('total_menus').textContent = totalBasic + totalPremium;


    // Aquí puedes agregar el cálculo del precio total si es necesario
    // var totalPrice = totalBasic * precioPromotion1 + totalPremium * precioPromotion2;
    // document.getElementById('total_price').textContent = totalPrice.toFixed(2);
}

// Define the prices per ticket type (adjust as necessary)
const priceBasic = 5.00;
const pricePremium = 10.00;
