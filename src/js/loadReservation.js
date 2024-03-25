import {loadComponentJS} from '../js/load.js';

export function loadReservations() {
    loadComponentJS('../src/components/reservationChooseCinema.html', 'choose-cinema-component');
    loadComponentJS('../src/components/reservationChooseSession.html', 'choose-session-component');
}

document.addEventListener('DOMContentLoaded', function () {
    loadReservations();
});