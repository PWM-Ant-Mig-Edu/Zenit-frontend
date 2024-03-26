import { ReservationManager } from './reservationManager.js';
import { updateSummary } from "./loadSummary.js";

document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('reservationManager')) {
        const savedData = JSON.parse(localStorage.getItem('reservationManager'));
        window.reservationManager = new ReservationManager(savedData);
    } else {
        window.reservationManager = new ReservationManager();
    }
    console.log("reservationManager: ", window.reservationManager);
    //updateSummary(); // Asegúrate de llamar a updateSummary una vez que el objeto esté listo
});