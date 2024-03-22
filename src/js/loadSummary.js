import { loadComponentJS } from "../js/load.js";

export function loadSummary() {
    loadComponentJS('../src/components/reservationSummary.html', 'summary-component');
}

document.addEventListener('DOMContentLoaded', function () {
    loadSummary();
});