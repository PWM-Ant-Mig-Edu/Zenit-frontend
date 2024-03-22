function loadCinemaData(cinemaName) {
    const cinemaLocation = document.getElementById('cinema-location');
    const cinemaContact = document.getElementById('cinema-contact');
    const cinemaNameElement = document.getElementById('cinema-name');

    cinemaNameElement.innerText = `
        Cartelea en Zenit ${cinemaName}
    `

    fetch('../src/json/cinemas.json')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const cinema = data.cinemas.find(cinema => cinema.name === cinemaName);

            console.log(cinema);

            if(!cinema) return;

            cinemaLocation.src = cinema.location;
                
            const cinemaContactData = cinema.contact;
                
            cinemaContact.innerHTML = `
                    <h2>Direccion:</h2>
                    <span>${cinemaContactData.address}</span>
                    <br>
                    <h2>Telefono:</h2>
                    <span>${cinemaContactData.phone}</span>
                    <br>
                    <h2>Email:</h2>
                    <span>${cinemaContactData.email}</span>
                `;
        })
        .catch(error => {
            console.error('Error al cargar el JSON:', error);
        });
}


document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const cinemaName = urlParams.get('name');
    loadCinemaData(cinemaName);

});

   
