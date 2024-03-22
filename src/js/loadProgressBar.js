import { loadComponentJS } from "../js/load.js";

export function loadProgressBar() {
    loadComponentJS('../src/components/progressBar.html', 'progress-bar-component');
}

document.addEventListener('DOMContentLoaded', function () {
    loadProgressBar();
});

