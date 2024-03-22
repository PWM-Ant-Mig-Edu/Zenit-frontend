import { loadComponentJS } from "../js/load.js";

export function loadProfileButtons() {
    loadComponentJS('../src/components/profileButtons.html', 'buttons-profile-component');
}

document.addEventListener('DOMContentLoaded', function () {
    loadProfileButtons();
});