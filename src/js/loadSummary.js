import { loadComponentJS } from "../js/load.js";
import {ReservationManager} from "./reservationManager/reservationManager.js";


export async function loadSummary() {
    await loadComponentJS('../src/components/reservationSummary.html', 'summary-component');
}

document.addEventListener('DOMContentLoaded', async function () {
    await loadSummary();
    if (localStorage.getItem('reservationManager')) {
        const savedData = JSON.parse(localStorage.getItem('reservationManager'));
        window.reservationManager = new ReservationManager(savedData);
    } else {
        window.reservationManager = new ReservationManager();
        localStorage.setItem('reservationManager', JSON.stringify(window.reservationManager));
    }

    const reservationManager = window.reservationManager;
    console.log("ReservationManager: ", reservationManager);
    await reservationManager.notifyObservers();
});
