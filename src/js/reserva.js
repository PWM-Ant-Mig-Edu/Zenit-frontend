
// Variables to keep track of the quantity of tickets and the total price
let quantityChildrenBasic = 0;
let quantityYouthsBasic = 0;
let quantityAdultsBasic = 0;
let quantitySeniorsBasic = 0;

let quantityChildrenPremium = 0;
let quantityYouthsPremium = 0;
let quantityAdultsPremium = 0;
let quantitySeniorsPremium = 0;

let totalPrice = 0;

// Function to increment the quantity of tickets
function increment(type) {
    switch (type) {
        case 'children-basic':
            quantityChildrenBasic++;
            break;
        case 'youths-basic':
            quantityYouthsBasic++;
            break;
        case 'adults-basic':
            quantityAdultsBasic++;
            break;
        case 'seniors-basic':
            quantitySeniorsBasic++;
            break;
        case 'children-premium':
            quantityChildrenPremium++;
            break;
        case 'youths-premium':
            quantityYouthsPremium++;
            break;
        case 'adults-premium':
            quantityAdultsPremium++;
            break;
        case 'seniors-premium':
            quantitySeniorsPremium++;
            break;
    }
    updateSummary();
}

// Function to decrement the quantity of tickets
function decrement(type) {
    switch (type) {
        case 'children-basic':
            if (quantityChildrenBasic > 0) quantityChildrenBasic--;
            break;
        case 'youths-basic':
            if (quantityYouthsBasic > 0) quantityYouthsBasic--;
            break;
        case 'adults-basic':
            if (quantityAdultsBasic > 0) quantityAdultsBasic--;
            break;
        case 'seniors-basic':
            if (quantitySeniorsBasic > 0) quantitySeniorsBasic--;
            break;
        case 'children-premium':
            if (quantityChildrenPremium > 0) quantityChildrenPremium--;
            break;
        case 'youths-premium':
            if (quantityYouthsPremium > 0) quantityYouthsPremium--;
            break;
        case 'adults-premium':
            if (quantityAdultsPremium > 0) quantityAdultsPremium--;
            break;
        case 'seniors-premium':
            if (quantitySeniorsPremium > 0) quantitySeniorsPremium--;
            break;
    }
    updateSummary();
}

// Function to update the ticket summary
function updateSummary() {
    let totalTicketsBasic = quantityChildrenBasic + quantityYouthsBasic + quantityAdultsBasic + quantitySeniorsBasic;
    let totalTicketsPremium = quantityChildrenPremium + quantityYouthsPremium + quantityAdultsPremium + quantitySeniorsPremium;

    document.getElementById('quantity_children_basic').textContent = quantityChildrenBasic;
    document.getElementById('quantity_youths_basic').textContent = quantityYouthsBasic;
    document.getElementById('quantity_adults_basic').textContent = quantityAdultsBasic;
    document.getElementById('quantity_seniors_basic').textContent = quantitySeniorsBasic;
    document.getElementById('total_tickets_basic').textContent = totalTicketsBasic;

    document.getElementById('quantity_children_premium').textContent = quantityChildrenPremium;
    document.getElementById('quantity_youths_premium').textContent = quantityYouthsPremium;
    document.getElementById('quantity_adults_premium').textContent = quantityAdultsPremium;
    document.getElementById('quantity_seniors_premium').textContent = quantitySeniorsPremium;
    document.getElementById('total_tickets_premium').textContent = totalTicketsPremium;
    // Calculation of the total price
    totalPrice = (quantityChildrenBasic + quantityYouthsBasic + quantityAdultsBasic + quantitySeniorsBasic) * priceBasic +
        (quantityChildrenPremium + quantityYouthsPremium + quantityAdultsPremium + quantitySeniorsPremium) * pricePremium;
    document.getElementById('total_price').textContent = totalPrice.toFixed(2);
}



// Define the prices per ticket type (adjust as necessary)
const priceBasic = 5.00;
const pricePremium = 10.00;


