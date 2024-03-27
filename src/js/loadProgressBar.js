import { loadComponentJS } from "../js/load.js";

export async function loadProgressBar() {
    await loadComponentJS('../src/components/progressBar.html', 'progress-bar-component');
}

document.addEventListener('DOMContentLoaded', async function () {
    await loadProgressBar();
});

