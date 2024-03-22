import { loadComponentJS } from "../js/load.js";

export function loadPurchasesTable() {
    loadComponentJS('../src/components/purchasesTable.html', 'purchase-history-table');
}

document.addEventListener('DOMContentLoaded', function () {
    loadPurchasesTable();
});
