import {loadComponentJS} from '../js/load.js';

export function loadReservations() {
    loadComponentJS('../src/components/reservationChooseCinema.html', 'make-reservation-component');
    loadComponentJS('../src/components/reservationChooseSession.html', 'make-reservation-component2');
}

document.addEventListener('DOMContentLoaded', function () {
    loadReservations();
});