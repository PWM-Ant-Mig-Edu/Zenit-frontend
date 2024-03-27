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

    getTotalBasicTickets() {
        return this.basicTickets.children + this.basicTickets.youths + this.basicTickets.adults + this.basicTickets.seniors;
    }

    getTotalPremiumTickets() {
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
        if (this.basicTickets[category.toLowerCase()] >= 1) {
            this.basicTickets[category.toLowerCase()] -= 1;
        }
        this.updateTicketPanel();
        updateSummary();
    }

    removePremiumTicket(category) {
        if (this.premiumTickets[category.toLowerCase()] >= 1) {
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

class PromotionSaver {
    constructor(data) {
        if (data) {
            this.selectedPromotions = data.selectedPromotions;
        } else {
            this.selectedPromotions = {};
        }
    }

    addPromotion(promotion) {
        if (!this.selectedPromotions[promotion]) {
            this.selectedPromotions[promotion] = 1;
        } else {
            this.selectedPromotions[promotion] += 1;
        }
        this.updatePromotionPanel();
        updateSummary();
    }

    deletePromotion(promotion) {
        if (this.selectedPromotions[promotion] >= 1) {
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

    clear() {
        this.selectedPromotions = {};

    }
}

class SeatSaver {
    constructor(data) {
        if (data) {
            this.selectedSeats = data.selectedSeats;
        } else {
            this.selectedSeats = [
                [0, 0, -1, 0, 0, 0, 0, 0], // A
                [0, 0, -1, 0, 0, 0, 0, 0], // B
                [0, 0, -1, 0, 0, 0, 0, 0], // C
                [0, 0, -1, 0, 0, 0, 0, 0], // D
                [0, 0, -1, 0, 0, 0, 0, 0], // E
                [0, 0, -1, 0, 0, 0, 0, 0], // F
                [0, 0, -1, 0, 0, 0, 0, 0]  // G
            ];
        }
    }

    addSeat(seat) {
        // Obtener la fila y la columna del asiento
        const row = seat.charCodeAt(0) - 65; // Convertir letra a número ASCII y restar 65 para obtener el índice de fila
        const col = parseInt(seat.slice(1)) - 1; // Obtener el número de columna

        // Verificar si el asiento está disponible (-1) o ya está ocupado (1)
        if (this.selectedSeats[row][col] === 0) {
            this.selectedSeats[row][col] = 1; // Marcar el asiento como ocupado
            document.getElementById(seat).style.fill = "green";
        } else if (this.selectedSeats[row][col] === 1) {
            this.removeSeat(seat);
        } else {
            alert("Seat is not available.");
        }

    }

    removeSeat(seat) {
        // Obtener la fila y la columna del asiento
        const row = seat.charCodeAt(0) - 65; // Convertir letra a número ASCII y restar 65 para obtener el índice de fila
        const col = parseInt(seat.slice(1)) - 1; // Obtener el número de columna

        // Verificar si el asiento está ocupado (1) para liberarlo
        if (this.selectedSeats[row][col] === 1) {
            this.selectedSeats[row][col] = 0; // Marcar el asiento como libre
            document.getElementById(seat).style.fill = "gray";
        } else {
            console.log("Seat is not occupied or unavailable.");
        }
    }


    cost() {
        // Definir el costo de los asientos y calcular el costo total
        const seatPrice = 2; // Precio por asiento
        let totalCost = 0;
        this.selectedSeats.forEach(row => {
            row.forEach(seat => {
                if (seat === 1) {
                    totalCost += seatPrice;
                }
            });
        });

        return totalCost;
    }

    clear() {
        this.selectedSeats = [];

    }

    // Función para obtener el código de asiento para una fila y columna específicas
    getSeatCode(row, column) {
        const letras = 'ABCDEFGH'; // Letras para las filas

        // Verificar si la fila y columna están dentro de los límites
        if (row >= 0 && row < letras.length && column >= 0 && column < 8) {
            const letra = letras[row];
            const codigoAsiento = (column + 1) + letra;
            // NOTE: Really important to convert to chars, or else won't work
            return codigoAsiento.charAt(1) + codigoAsiento.charAt(0);
        } else {
            return "Posición de asiento inválida";
        }
    }

    updateSeatsPanel() {
        // Go over seats and update their color
        for (let i = 0; i < this.selectedSeats.length; i++) {
            for (let j = 0; j < this.selectedSeats[i].length; j++) {
                const seatCode = this.getSeatCode(i, j);
                const seatElement = document.getElementById(seatCode);

                if (this.selectedSeats[i][j] === 1) {
                    seatElement.style.fill = "green";
                } else if (this.selectedSeats[i][j] === 0) {
                    seatElement.style.fill = "gray";
                } else {
                    seatElement.style.fill = "red";
                }
            }
        }
    }

    getSelectedSeatsWithCodes(){
        let selectedSeats = [];
        for (let i = 0; i < this.selectedSeats.length; i++) {
            for (let j = 0; j < this.selectedSeats[i].length; j++) {
                if (this.selectedSeats[i][j] === 1) {
                    selectedSeats.push(this.getSeatCode(i, j));
                }
            }
        }
        return selectedSeats;

    }
}

class PaymentSaver {
    constructor(data) {

        if (data) {
            this.paymentInfo = data.paymentInfo;
            this.customerInfo = data.customerInfo;
        } else {
            this.customerInfo = {
                name: '',
                email: '',
                phone: '',
                province: '',
                city: '',
                postcode: '',
            };

            this.paymentInfo = {
                cardNumber: '',
                cardHolder: '',
                expirationDate: '',
                cvv: ''
            };
        }
    }

    collectCustomerAndPaymentInfo() {
        // Customer info
        this.customerInfo.name = document.getElementById('full-name').value;
        this.customerInfo.email = document.getElementById('email').value;
        this.customerInfo.phone = document.getElementById('phone').value;
        this.customerInfo.province = document.getElementById('province').value;
        this.customerInfo.city = document.getElementById('city').value;
        this.customerInfo.postcode = document.getElementById('postcode').value;

        // Payment info
        this.paymentInfo.cardNumber = document.getElementById('card-number').value;
        this.paymentInfo.cardHolder = document.getElementById('card-holder').value;
        this.paymentInfo.expirationDate = document.getElementById('expiration-date').value;
        this.paymentInfo.cvv = document.getElementById('cvv').value;

        // // Check if all fields are filled
        // if (this.customerInfo.name === '' || this.customerInfo.email === '' || this.customerInfo.phone === '' ||
        //     this.customerInfo.province === '' || this.customerInfo.city === '' || this.customerInfo.postcode === '' ||
        //     this.paymentInfo.cardNumber === '' || this.paymentInfo.cardHolder === '' || this.paymentInfo.expirationDate === '' ||
        //     this.paymentInfo.cvv === '') {
        //     alert("Please fill all fields.");
        // } else {
        //     console.log("All fields are filled");
        //     // Only allow to continue when all fields are filled
        //     const payLink = document.getElementById('payLink');
        //     payLink.href = "reservationStep5Details.html";
        // }

    }

    clear() {
        this.customerInfo = {
            name: '',
            email: '',
            phone: '',
            province: '',
            city: '',
            postcode: '',
        };

        this.paymentInfo = {
            cardNumber: '',
            cardHolder: '',
            expirationDate: '',
            cvv: ''
        };
    }
}

class DetailSaver {
    constructor(data) {
        if (data) {
            this.details = data.details;
        } else {
            this.details = {
                movie: '',
                date: '',
                time: '',
                cinema: '',
                hall: ''
            };
        }

    }



    retrieveDetailsFromURL() {
        const url = window.location.href;
        const queryString = url.split('?')[1]; // Obtiene la parte de la URL después del símbolo '?'
        const urlParams = new URLSearchParams(queryString);
        const cinemaId = urlParams.get('cinema');
        const movieId = urlParams.get('film');
        const day = urlParams.get('day');
        const hour = urlParams.get('hour');
        const hall = urlParams.get('hall');

        if (cinemaId && movieId && day && hour) {
            this.getCinemaName(cinemaId)
                .then(cinema => {
                    this.details.cinema = cinema;
                    console.log("Cinema: ", cinema);
                    return this.getMovieName(movieId);
                })
                .then(movie => {
                    this.details.movie = movie;
                    console.log("Movie: ", movie);
                    this.details.date = day;
                    this.details.time = hour;
                    this.details.hall = hall;
                    console.log("Details: ", this.details);
                })
                .catch(error => {
                    console.error("Error retrieving details from URL:", error);
                });
        } else {
            console.error("Error retrieving details from URL");
        }
    }


    async getCinemaName(cinemaId) {
        try {
            const response = await fetch('../src/json/cinemas.json');
            const data = await response.json();
            const cinema = data.cinemas.find(cinema => cinema.id === cinemaId);
            console.log("Cinema Name: ", cinema.name);
            return cinema.name;
        } catch (error) {
            console.error('Error loading cinemas:', error);
            throw error;
        }
    }

    async getMovieName(movieId) {
        try {
            const response = await fetch('../src/json/films.json');
            const data = await response.json();
            const movie = data.films.find(movie => movie.id === movieId);
            console.log("Movie Name: ", movie.name);
            return movie.name;
        } catch (error) {
            console.error('Error loading movies:', error);
            throw error;
        }
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
            this.detailSaver = new DetailSaver(data.detailSaver);
        } else {
            // Si no se proporcionan datos, crea una instancia vacía
            this.ticketSaver = new TicketSaver();
            this.promotionSaver = new PromotionSaver();
            this.seatSaver = new SeatSaver();
            this.paymentSaver = new PaymentSaver();
            this.detailSaver = new DetailSaver();
        }
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