export class Observable {
    constructor() {
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    async notifyObservers() {
        for (const observer of this.observers) {
            await observer.update();
        }
    }
}