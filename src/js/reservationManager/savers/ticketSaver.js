export class TicketSaver {
    constructor(data, notifyChangeCallback) {

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
        this.notifyChangeCallback = notifyChangeCallback;
    }

    getTotalBasicTickets() {
        return this.basicTickets.children + this.basicTickets.youths + this.basicTickets.adults + this.basicTickets.seniors;
    }

    getTotalPremiumTickets() {
        return this.premiumTickets.children + this.premiumTickets.youths + this.premiumTickets.adults + this.premiumTickets.seniors;
    }

    addBasicTicket(category) {
        this.basicTickets[category.toLowerCase()] += 1;
        this.notifyChangeCallback();
    }

    addPremiumTicket(category) {
        this.premiumTickets[category.toLowerCase()] += 1;
        this.notifyChangeCallback();
    }

    removeBasicTicket(category) {
        if (this.basicTickets[category.toLowerCase()] >= 1) {
            this.basicTickets[category.toLowerCase()] -= 1;
        }
        this.notifyChangeCallback();
    }

    removePremiumTicket(category) {
        if (this.premiumTickets[category.toLowerCase()] >= 1) {
            this.premiumTickets[category.toLowerCase()] -= 1;
        }
        this.notifyChangeCallback();
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

    clear() {
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

    updateTicketPanel() {
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