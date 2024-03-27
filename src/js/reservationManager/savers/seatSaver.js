export class SeatSaver {
    constructor(data, notifyChangeCallback) {
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
        this.notifyChangeCallback = notifyChangeCallback;
    }

    changeSeatStatus(seat){
        const row = seat.charCodeAt(0) - 65; // Convertir letra a número ASCII y restar 65 para obtener el índice de fila
        const col = parseInt(seat.slice(1)) - 1; // Obtener el número de columna
        if (this.selectedSeats[row][col] === 0) {
            this.selectedSeats[row][col] = 1; // Marcar el asiento como ocupado
        } else if (this.selectedSeats[row][col] === 1) {
            this.selectedSeats[row][col] = 0; // Marcar el asiento como libre
        } else {
            alert("Seat is not available.");
        }
        this.notifyChangeCallback();
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

    getSelectedSeatsWithCodes() {
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