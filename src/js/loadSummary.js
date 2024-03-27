import { loadComponentJS } from "../js/load.js";


export async function loadSummary() {
    await loadComponentJS('../src/components/reservationSummary.html', 'summary-component');
}

export function updateSummary() {
    document.getElementById('summary-film-title').textContent = window.reservationManager.detailSaver.details.movie;
    document.getElementById('total_tickets_basic').textContent = window.reservationManager.ticketSaver.getTotalBasicTickets().toString();
    document.getElementById('total_tickets_premium').textContent = window.reservationManager.ticketSaver.getTotalPremiumTickets().toString();
    document.getElementById('total_price').textContent = window.reservationManager.finalPrice().toFixed(2);
}

document.addEventListener('DOMContentLoaded', function () {
    loadSummary().then(
        async r => {
            if (window.location.pathname.includes("Step1")) {
                await window.reservationManager.detailSaver.retrieveDetailsFromURL();
                window.reservationManager.ticketSaver.updateTicketPanel();
            } else if (window.location.pathname.includes("Step2")) {
                window.reservationManager.promotionSaver.updatePromotionPanel();
            } else if (window.location.pathname.includes("Step3")) {
                window.reservationManager.seatSaver.updateSeatsPanel();
            } else if (window.location.pathname.includes("Step4")) {
                //window.reservationManager.paymentSaver.updatePaymentPanel();
            } else if (window.location.pathname.includes("Step5")) {
                window.reservationManager.updateConfirmationPanel();
            }
            updateSummary();
        }
    );

});