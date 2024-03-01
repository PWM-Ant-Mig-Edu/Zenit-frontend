var currentStep = 0;
var steps = document.querySelectorAll('.step');
var step_names = document.querySelectorAll('.step-name');
var progressBar = document.querySelector('.progress-line');

function increment(promotion) {
    var quantityElement = document.getElementById('quantity_' + promotion);
    var currentQuantity = parseInt(quantityElement.textContent);
    quantityElement.textContent = currentQuantity + 1;
    updateSummary();
}

function decrement(promotion) {
    var quantityElement = document.getElementById('quantity_' + promotion);
    var currentQuantity = parseInt(quantityElement.textContent);
    if (currentQuantity > 0) {
        quantityElement.textContent = currentQuantity - 1;
        updateSummary();
    }
}

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
}

const priceBasic = 5.00;
const pricePremium = 10.00;
