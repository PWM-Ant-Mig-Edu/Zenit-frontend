import {updateSummary} from "./loadSummary.js";

class TicketSaver {
    constructor(data) {

        if (data) {
            this.basicTickets = data.basicTickets;
            this.premiumTickets = data.premiumTickets;
        } else {
            this.basicTickets = {
                children: 0,
                youths: 0,
                adults: 0,
                seniors: 0
            };
            this.premiumTickets = {
                children: 0,
                youths: 0,
                adults: 0,
                seniors: 0
            };
        }
    }

    getTotalBasicTickets(){
        return this.basicTickets.children + this.basicTickets.youths + this.basicTickets.adults + this.basicTickets.seniors;
    }

    getTotalPremiumTickets(){
        return this.premiumTickets.children + this.premiumTickets.youths + this.premiumTickets.adults + this.premiumTickets.seniors;
    }

    addBasicTicket(category) {
        this.basicTickets[category.toLowerCase()] += 1;
        this.updateTicketPanel();
        updateSummary();
    }

    addPremiumTicket(category) {
        this.premiumTickets[category.toLowerCase()] += 1;
        this.updateTicketPanel();
        updateSummary();
    }

    removeBasicTicket(category) {
        if (this.basicTickets[category.toLowerCase()] >= 1){
            this.basicTickets[category.toLowerCase()] -= 1;
        }
        this.updateTicketPanel();
        updateSummary();
    }

    removePremiumTicket(category) {
        if (this.premiumTickets[category.toLowerCase()] >= 1){
            this.premiumTickets[category.toLowerCase()] -= 1;
        }
        this.updateTicketPanel();
        updateSummary();
    }

    cost() {
        // Implementa la lógica de cálculo del costo de los tickets
        let totalCost = 0;
        // Calcular el costo de los tickets básicos
        for (const category in this.basicTickets) {
            totalCost += this.basicTickets[category] * this.getTicketPrice(category, false);
        }
        // Calcular el costo de los tickets premium
        for (const category in this.premiumTickets) {
            totalCost += this.premiumTickets[category] * this.getTicketPrice(category, true);
        }
        return totalCost;
    }

    getTicketPrice(category, isPremium) {
        // Definir los precios de los tickets según la categoría y si son premium o no
        const ticketPrices = {
            children: 5,
            youths: 10,
            adults: 15,
            seniors: 10
        };
        const premiumMultiplier = isPremium ? 1.5 : 1; // Multiplicador para el precio premium
        return ticketPrices[category] * premiumMultiplier;
    }

    clear(){
        this.basicTickets = {
            children: 0,
            youths: 0,
            adults: 0,
            seniors: 0
        };
        this.premiumTickets = {
            children: 0,
            youths: 0,
            adults: 0,
            seniors: 0
        };

    }
    updateTicketPanel(){
        // ---------------- BASIC TICKETS ----------------
        document.getElementById('quantity-children-basic').textContent = this.basicTickets.children;
        document.getElementById('quantity-youths-basic').textContent = this.basicTickets.youths;
        document.getElementById('quantity-adults-basic').textContent = this.basicTickets.adults;
        document.getElementById('quantity-seniors-basic').textContent = this.basicTickets.seniors;

        // ---------------- PREMIUM TICKETS ----------------
        document.getElementById('quantity-children-premium').textContent = this.premiumTickets.children;
        document.getElementById('quantity-youths-premium').textContent = this.premiumTickets.youths;
        document.getElementById('quantity-adults-premium').textContent = this.premiumTickets.adults;
        document.getElementById('quantity-seniors-premium').textContent = this.premiumTickets.seniors;

    }
}

class PromotionSaver {
    constructor(data) {
        if (data) {
            this.selectedPromotions = data.selectedPromotions;
        } else {
            this.selectedPromotions = { };
        }
    }

    addPromotion(promotion) {
        if (!this.selectedPromotions[promotion]){
            this.selectedPromotions[promotion] = 1;
        } else {
            this.selectedPromotions[promotion] += 1;
        }
        this.updatePromotionPanel();
        updateSummary();
    }

    deletePromotion(promotion){
        if (this.selectedPromotions[promotion] >= 1){
            this.selectedPromotions[promotion] -= 1;
        }
        this.updatePromotionPanel();
        updateSummary();
    }

    updatePromotionPanel() {
        Object.entries(this.selectedPromotions).forEach(([promotion, quantity]) => {
            var quantityElement = document.getElementById('quantity-' + promotion);
            quantityElement.textContent = quantity.toString();
        });
    }

    cost() {
        // Definir los precios de las promociones y calcular el costo total
        const promotionTypes = {
            'type1': 5,
            'type2': 10
        }
        let totalCost = 0;

        Object.entries(this.selectedPromotions).forEach(([promotion, quantity]) => {
            totalCost += quantity * promotionTypes['type1'];
        });

        return totalCost;
    }

    clear(){
        this.selectedPromotions = {};

    }
}

class SeatSaver {
    constructor(data) {
        if (data) {
            this.selectedSeats = data.selectedSeats;
        } else {
            this.selectedSeats = [];
        }
    }

    addSeat(seat) {
        this.selectedSeats.push(seat);

    }

    cost() {
        // Definir el costo de los asientos y calcular el costo total
        const seatPrice = 2; // Precio por asiento
        return this.selectedSeats.length * seatPrice;
    }

    clear(){
        this.selectedSeats = [];

    }

    updateSeatsPanel() {

    }
}

class PaymentSaver {
    constructor(data) {
        if (data) {
            this.paymentInfo = data.paymentInfo;
        } else {
            this.paymentInfo = {
                cardNumber: '',
                cardHolder: '',
                expirationDate: '',
                cvv: ''
            };
        }
    }

    addPaymentInfo(cardNumber, cardHolder, expirationDate, cvv) {
        this.paymentInfo.cardNumber = cardNumber;
        this.paymentInfo.cardHolder = cardHolder;
        this.paymentInfo.expirationDate = expirationDate;
        this.paymentInfo.cvv = cvv;
    }

    getPaymentInfo() {
        return this.paymentInfo;
    }

}

export class ReservationManager {
    constructor(data = null) {
        if (data) {
            // Si se proporcionan datos, inicializa la instancia con esos datos
            this.ticketSaver = new TicketSaver(data.ticketSaver);
            this.promotionSaver = new PromotionSaver(data.promotionSaver);
            this.seatSaver = new SeatSaver(data.seatSaver);
            this.paymentSaver = new PaymentSaver(data.paymentSaver);
        } else {
            // Si no se proporcionan datos, crea una instancia vacía
            this.ticketSaver = new TicketSaver();
            this.promotionSaver = new PromotionSaver();
            this.seatSaver = new SeatSaver();
            this.paymentSaver = new PaymentSaver();
        }
    }



    finalPrice() {
        const ticketCost = this.ticketSaver.cost();
        const promotionCost = this.promotionSaver.cost();
        const seatCost = this.seatSaver.cost();

        console.log("ticketCost: ", ticketCost);
        console.log("promotionCost: ", promotionCost);
        console.log("seatCost: ", seatCost);


        return ticketCost + promotionCost + seatCost;
    }

    saveToLocalStorage(){
        localStorage.setItem('reservationManager', JSON.stringify(this));
    }

    deleteFromLocalStorage(){
        localStorage.removeItem('reservationManager');
    }




}


/*
// Agregar tickets
reservationManager.ticketSaver.addBasicTicket('niños', 2);
reservationManager.ticketSaver.addPremiumTicket('adults', 3);

// Agregar promociones
reservationManager.promotionSaver.addPromotion('2x1 en palomitas');

// Agregar asientos
reservationManager.seats.addSeat('A1');
reservationManager.seats.addSeat('B3');

// Calcular precio final
const finalPrice = reservationManager.finalPrice();
console.log('Precio final:', finalPrice);
*/