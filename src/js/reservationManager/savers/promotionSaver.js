export class PromotionSaver {
    constructor(data, notifyChangeCallback) {
        if (data) {
            this.selectedPromotions = data.selectedPromotions;
        } else {
            this.selectedPromotions = {};
        }
        this.notifyChangeCallback = notifyChangeCallback;
    }

    addPromotion(promotion) {
        if (!this.selectedPromotions[promotion]) {
            this.selectedPromotions[promotion] = 1;
        } else {
            this.selectedPromotions[promotion] += 1;
        }
        this.notifyChangeCallback();
    }

    deletePromotion(promotion) {
        if (this.selectedPromotions[promotion] >= 1) {
            this.selectedPromotions[promotion] -= 1;
        }
        this.notifyChangeCallback();
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