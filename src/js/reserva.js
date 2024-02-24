var currentStep = 0;
var steps = document.querySelectorAll('.step');
var step_names = document.querySelectorAll('.step-name');
var progressBar = document.querySelector('.progress-line');

// Variables para llevar el seguimiento de la cantidad de entradas y el precio total
let cantidadNiños = 0;
let cantidadJóvenes = 0;
let cantidadAdultos = 0;
let cantidadAncianos = 0;
let precioTotal = 0;

// Función para incrementar la cantidad de entradas
function increment(tipo) {
    switch(tipo) {
        case 'niños':
            cantidadNiños++;
            break;
        case 'jóvenes':
            cantidadJóvenes++;
            break;
        case 'adultos':
            cantidadAdultos++;
            break;
        case 'ancianos':
            cantidadAncianos++;
            break;
    }
    actualizarResumen();
}

// Función para decrementar la cantidad de entradas
function decrement(tipo) {
    switch(tipo) {
        case 'niños':
            if (cantidadNiños > 0) cantidadNiños--;
            break;
        case 'jóvenes':
            if (cantidadJóvenes > 0) cantidadJóvenes--;
            break;
        case 'adultos':
            if (cantidadAdultos > 0) cantidadAdultos--;
            break;
        case 'ancianos':
            if (cantidadAncianos > 0) cantidadAncianos--;
            break;
    }
    actualizarResumen();
}

// Función para actualizar el resumen de la compra
function actualizarResumen() {
    let totalEntradas = cantidadNiños + cantidadJóvenes + cantidadAdultos + cantidadAncianos;
    document.getElementById('cantidad_niños').textContent = cantidadNiños;
    document.getElementById('cantidad_jóvenes').textContent = cantidadJóvenes;
    document.getElementById('cantidad_adultos').textContent = cantidadAdultos;
    document.getElementById('cantidad_ancianos').textContent = cantidadAncianos;
    document.getElementById('total_entradas').textContent = totalEntradas;

    // Cálculo del precio total
    precioTotal = cantidadNiños * precioNiños + cantidadJóvenes * precioJóvenes + cantidadAdultos * precioAdultos + cantidadAncianos * precioAncianos;
    document.getElementById('precio_total').textContent = precioTotal.toFixed(2);
}

// Definir los precios por tipo de entrada (ajustar según sea necesario)
const precioNiños = 5.00;
const precioJóvenes = 10.00;
const precioAdultos = 15.00;
const precioAncianos = 10.00;

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
    progressBar.style.width = (currentStep / (steps.length - 1) * 92) + '%';
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
