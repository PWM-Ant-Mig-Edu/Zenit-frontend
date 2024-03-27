export class UserInterfaceUpdater {
    constructor() {

    }

    async update() {
        const currentStep = window.reservationManager.getCurrentStep();
        switch (currentStep) {
            case 1:
                await this.updateForStep1();
                break;
            case 2:
                this.updateForStep2();
                break;
            case 3:
                this.updateForStep3();
                break;
            case 4:
                this.updateForStep4();
                break;
            case 5:
                this.updateForStep5();
                break;
            default:
                console.error("Invalid step:", currentStep);
        }
    }

    updateSummary() {
        document.getElementById('summary-film-title').textContent = window.reservationManager.detailSaver.details.movie;
        document.getElementById('total_tickets_basic').textContent = window.reservationManager.ticketSaver.getTotalBasicTickets().toString();
        document.getElementById('total_tickets_premium').textContent = window.reservationManager.ticketSaver.getTotalPremiumTickets().toString();
        document.getElementById('total_price').textContent = window.reservationManager.finalPrice().toFixed(2);
        console.log("Call to updateSummary: ", window.reservationManager.detailSaver.details.movie_img)
        document.getElementById('summary-film-img').setAttribute('src', window.reservationManager.detailSaver.details.movie_img);
    }

    async updateForStep1() {
        const detailSaver = window.reservationManager?.detailSaver;
        if (detailSaver) {
            try {
                await detailSaver.retrieveDetailsFromURL();
                window.reservationManager.ticketSaver.updateTicketPanel();
                this.updateSummary();
            } catch (error) {
                console.error('Error updating for step 1:', error);
            }
        } else {
            console.error("DetailSaver is undefined");
        }
    }

    updateForStep2() {
        window.reservationManager.promotionSaver.updatePromotionPanel();
        this.updateSummary();
    }

    updateForStep3() {
        window.reservationManager.seatSaver.updateSeatsPanel();
        this.updateSummary();
    }

    updateForStep4() {
        // window.reservationManager.paymentSaver.updatePaymentPanel();
        this.updateSummary();
    }

    updateForStep5() {
        window.reservationManager.updateConfirmationPanel();
        this.updateSummary();
    }
}

