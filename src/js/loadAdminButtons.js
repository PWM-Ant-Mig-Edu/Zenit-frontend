import { loadComponentJS } from "../js/load.js";

export async function loadAdminBotonesComponent() {
    await loadComponentJS('../src/components/adminButtons.html', 'admin-buttons');
}

document.addEventListener('DOMContentLoaded', async function () {
    await loadAdminBotonesComponent();
});