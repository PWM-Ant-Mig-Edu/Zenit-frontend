import { loadComponentJS } from '../js/load.js';
import {createSeats} from "./createSeats.js";

export async function loadButacas() {
    await loadComponentJS("../src/components/seats.html", "table-container");
}

document.addEventListener('DOMContentLoaded', function() {
    loadButacas().then(r => {
        createSeats(['A', 'B', 'C', 'D', 'E', 'F', 'G'], [1, 8]);
    });


});