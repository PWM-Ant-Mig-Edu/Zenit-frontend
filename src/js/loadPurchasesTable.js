import { loadComponentJS } from "../js/load.js";

export async function loadPurchasesTable() {
    await loadComponentJS('../src/components/purchasesTable.html', 'purchase-history-table');
}

document.addEventListener('DOMContentLoaded', async function () {
    await loadPurchasesTable();

});
