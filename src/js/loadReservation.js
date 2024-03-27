import {loadComponentJS} from '../js/load.js';

export async function loadReservations() {
    await loadComponentJS('../src/components/reservationChooseCinema.html', 'choose-cinema-component');
    await loadComponentJS('../src/components/reservationChooseSession.html', 'choose-session-component');
}

document.addEventListener('DOMContentLoaded', async function () {
    await loadReservations();
});