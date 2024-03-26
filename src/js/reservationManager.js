class TicketSaver {
    constructor() {
        this.basicTickets = {
            children: 0,
            young: 0,
            adults: 0,
            seniors: 0
        };
        this.premiumTickets = {
            children: 0,
            young: 0,
            adults: 0,
            seniors: 0
        };
    }

    addBasicTicket(category, quantity) {
        this.basicTickets[category.toLowerCase()] += quantity;
    }

    addPremiumTicket(category, quantity) {
        this.premiumTickets[category.toLowerCase()] += quantity;
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
            young: 10,
            adults: 15,
            seniors: 10
        };
        const premiumMultiplier = isPremium ? 1.5 : 1; // Multiplicador para el precio premium
        return ticketPrices[category] * premiumMultiplier;
    }

    clear(){
        this.basicTickets = {
            children: 0,
            young: 0,
            adults: 0,
            seniors: 0
        };
        this.premiumTickets = {
            children: 0,
            young: 0,
            adults: 0,
            seniors: 0
        };

    }
}

class PromotionSaver {
    constructor() {
        this.selectedPromotions = [];
    }

    addPromotion(promotion) {
        this.selectedPromotions.push(promotion);
    }

    cost() {
        // Definir los precios de las promociones y calcular el costo total
        const promotionPrices = {
            '2x1 en palomitas': 8,
            'Descuento en combos': 10
            // Agrega más promociones con sus precios aquí si es necesario
        };
        let totalCost = 0;
        this.selectedPromotions.forEach(promotion => {
            totalCost += promotionPrices[promotion];
        });
        return totalCost;
    }

    clear(){
        this.selectedPromotions = [];
    }
}

class Seats {
    constructor() {
        this.selectedSeats = [];
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
}

class PaymentSaver {
    constructor() {
        this.paymentInfo = {
            cardNumber: '',
            cardHolder: '',
            expirationDate: '',
            cvv: ''
        };
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

class ReservationManager {
    constructor() {
        this.ticketSaver = new TicketSaver();
        this.promotionSaver = new PromotionSaver();
        this.seats = new Seats();
        this.paymentSaver = new PaymentSaver();
    }

    finalPrice() {
        const ticketCost = this.ticketSaver.cost();
        const promotionCost = this.promotionSaver.cost();
        const seatCost = this.seats.cost();

        return ticketCost + promotionCost + seatCost;
    }
}

// Ejemplo de uso
const reservationManager = new ReservationManager();

// Agregar tickets
reservationManager.ticketSaver.addBasicTicket('niños', 2);
reservationManager.ticketSaver.addPremiumTicket('adults', 3);

// Agregar promociones
reservationManager.promotionSaver.addPromotion('2x1 en palomitas');

// Agregar asientos
reservationManager.seats.addSeat('A1');
reservationManager.seats.addSeat('B3');

// Agregar información de pago
reservationManager.paymentSaver.addPaymentInfo(/* información de pago */);

// Calcular precio final
const finalPrice = reservationManager.finalPrice();
console.log('Precio final:', finalPrice);
