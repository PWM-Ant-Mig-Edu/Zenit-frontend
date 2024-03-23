import { loadComponentJS } from "../js/load.js";

export function loadAdminBotonesComponent() {
    loadComponentJS('../src/components/adminButtons.html', 'admin-buttons');
}

document.addEventListener('DOMContentLoaded', function () {
    loadAdminBotonesComponent();
});