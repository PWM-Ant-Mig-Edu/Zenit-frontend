import { loadComponentJS } from '../js/load.js';

export function loadButacas() {
    loadComponentJS("../src/components/seats.html", "table-container");
}

document.addEventListener('DOMContentLoaded', function() {
    loadButacas();
});