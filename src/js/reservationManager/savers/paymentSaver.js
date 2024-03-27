export class PaymentSaver {
    constructor(data, notifyChangeCallback) {

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
        this.notifyChangeCallback = notifyChangeCallback;

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