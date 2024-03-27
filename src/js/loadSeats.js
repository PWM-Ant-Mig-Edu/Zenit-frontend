import { loadComponentJS } from '../js/load.js';
import {createSeats} from "./createSeats.js";

export async function loadSeats() {
    await loadComponentJS("../src/components/seats.html", "table-container");
}

document.addEventListener('DOMContentLoaded', function() {
    loadSeats().then(r => {
        createSeats(['A', 'B', 'C', 'D', 'E', 'F', 'G'], [1, 8]);
    });
});