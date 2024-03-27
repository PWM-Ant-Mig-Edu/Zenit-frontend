import {TicketSaver} from "./savers/ticketSaver.js";
import {PromotionSaver} from "./savers/promotionSaver.js";
import {SeatSaver} from "./savers/seatSaver.js";
import {PaymentSaver} from "./savers/paymentSaver.js";
import {DetailSaver} from "./savers/detailSaver.js";
import {Observable} from "./observable.js";
import {UserInterfaceUpdater} from "./userInterfaceUpdater.js";

export class ReservationManager extends Observable {
    constructor(data = null) {
        super();
        if (data) {
            // Si se proporcionan datos, inicializa la instancia con esos datos
            this.ticketSaver = new TicketSaver(data.ticketSaver, () => this.notifyObservers());
            this.promotionSaver = new PromotionSaver(data.promotionSaver, () => this.notifyObservers());
            this.seatSaver = new SeatSaver(data.seatSaver, () => this.notifyObservers());
            this.paymentSaver = new PaymentSaver(data.paymentSaver, () => this.notifyObservers());
            this.detailSaver = new DetailSaver(data.detailSaver, () => this.notifyObservers());
        } else {
            // Si no se proporcionan datos, crea una instancia vacía
            this.ticketSaver = new TicketSaver(null, () => this.notifyObservers());
            this.promotionSaver = new PromotionSaver(null, () => this.notifyObservers());
            this.seatSaver = new SeatSaver(null, () => this.notifyObservers());
            this.paymentSaver = new PaymentSaver(null, () => this.notifyObservers());
            this.detailSaver = new DetailSaver(null, () => this.notifyObservers());
        }
        this.addObserver(new UserInterfaceUpdater());
    }

    getCurrentStep() {
        const path = window.location.pathname;
        if (path.includes("Step1")) return 1;
        else if (path.includes("Step2")) return 2;
        else if (path.includes("Step3")) return 3;
        else if (path.includes("Step4")) return 4;
        else if (path.includes("Step5")) return 5;
        else return 0;
    }

    previousStep() {
        const currentStep = this.getCurrentStep();
        switch (currentStep) {
            case 1:
                this.goToIndex();
                break;
            case 2:
                this.goToStep1();
                break;
            case 3:
                this.goToStep2()
                break;
            case 4:
                this.goToStep3();
                break;
            case 5:
                this.goToStep4();
                break;
            default:
                console.error("Invalid step:", currentStep);
        }
    }
    nextStep() {
        const currentStep = this.getCurrentStep();
        switch (currentStep) {
            case 1:
                this.goToStep2();
                break;
            case 2:
                this.goToStep3();
                break;
            case 3:
                this.goToStep4();
                break;
            case 4:
                this.goToStep5()
                break;
            case 5:
                this.goToIndex();
                break;
            default:
                console.error("Invalid step:", currentStep);
        }
    }


    goToIndex() {
        this.deleteFromLocalStorage();
        window.location.href = "index.html";
    }

    goToStep1() {
        this.saveToLocalStorage();
        window.location.href = "reservationStep1Tickets.html";
    }
    goToStep2(){
        if (this.ticketSaver.getTotalBasicTickets() + this.ticketSaver.getTotalPremiumTickets()  === 0) {
            alert("Please select at least one ticket");
        } else {
            this.saveToLocalStorage();
            window.location.href = "reservationStep2Promotions.html";
        }
    }

    goToStep3() {
        this.paymentSaver.clear();
        this.saveToLocalStorage();
        window.location.href = "reservationStep3Seats.html";
    }

    goToStep4() {
        if (this.seatSaver.getSelectedSeatsWithCodes().length === 0) {
            alert("Please select at least one seat");
        } else {
            this.saveToLocalStorage();
            window.location.href = "reservationStep4Data.html";
        }
    }

    goToStep5() {
        this.paymentSaver.collectCustomerAndPaymentInfo();
        this.saveToLocalStorage();
        window.location.href = "reservationStep5Details.html";
    }

    updateConfirmationPanel() {
        document.getElementById('movie-title').textContent = this.detailSaver.details.movie;
        document.getElementById('date').textContent = this.detailSaver.details.date;
        document.getElementById('time').textContent = this.detailSaver.details.time;
        document.getElementById('cinema').textContent = this.detailSaver.details.cinema;
        document.getElementById('hall').textContent = this.detailSaver.details.hall;
        document.getElementById('seats').textContent = this.seatSaver.getSelectedSeatsWithCodes().join(', ');
    }


    finalPrice() {
        const ticketCost = this.ticketSaver.cost();
        const promotionCost = this.promotionSaver.cost();
        const seatCost = this.seatSaver.cost();
        return ticketCost + promotionCost + seatCost;
    }

    saveToLocalStorage() {
        localStorage.setItem('reservationManager', JSON.stringify(this));
    }

    deleteFromLocalStorage() {
        localStorage.removeItem('reservationManager');
    }

}
