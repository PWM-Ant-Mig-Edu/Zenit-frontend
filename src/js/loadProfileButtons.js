import { loadComponentJS } from "../js/load.js";

export async function loadProfileButtons() {
    await loadComponentJS('../src/components/profileButtons.html', 'buttons-profile-component');
}

document.addEventListener('DOMContentLoaded', async function () {
    await loadProfileButtons();
});