let selectedDay = null;
let selectedHour = null;

function showChooseSessionPopUp(cinema, film) {
    var chooseSessionComponent = document.getElementById("choose-session-component");
    var popupsContainer = document.getElementById("popups");
    var homeContainer = document.querySelector(".wrapper-container");

    homeContainer.classList.add("blurred-background");

    popupsContainer.style.display = "block";
    chooseSessionComponent.style.display = "block";

    const filmName = chooseSessionComponent.querySelector('#film-name');
    filmName.textContent = film.name;
    const sessionImg = chooseSessionComponent.querySelector('#film-image');
    sessionImg.src = film.img;


    loadSessions(cinema, film);

}

function loadSessions(cinema, movie) {
    fetch('../src/json/cinemas.json')
        .then(response => response.json())
        .then(data => {
            const cinemaMovie = cinema.movies.find(m => m.name === movie.name);

            const projectionDaysContainer = document.querySelector(".grid-container-dias");
            projectionDaysContainer.innerHTML = '';

            const uniqueDays = [...new Set(cinemaMovie.sessions.map(session => session.day))];

            uniqueDays.forEach(day => {
                const dayDiv = document.createElement('div');
                dayDiv.classList.add('projection-days-container');
                dayDiv.setAttribute('data-day', day.toLowerCase());
                dayDiv.setAttribute('data-cinema', cinema.name);
                dayDiv.setAttribute('data-movie', cinemaMovie.name);
                dayDiv.addEventListener('click', toggleSelection);
                dayDiv.innerHTML = `
                    <span>${day}</span>
                `;
                projectionDaysContainer.appendChild(dayDiv);
            });
        })
        .catch(error => {
            console.error('Error loading sessions:', error);
        });
}


function toggleSelection(event) {
    const selectedClass = 'selected';
    const selectedDay = event.currentTarget.getAttribute('data-day');
    const cinemaName = event.currentTarget.getAttribute('data-cinema');
    const movieName = event.currentTarget.getAttribute('data-movie');
    
    // Removemos la clase 'selected' de todos los elementos hermanos
    const siblings = event.currentTarget.parentNode.children;
    for (let sibling of siblings) {
        sibling.classList.remove(selectedClass);
    }
    
    event.currentTarget.classList.toggle(selectedClass);

    if (event.currentTarget.classList.contains(selectedClass)) {
        mostrarHoras(selectedDay, cinemaName, movieName);
    }
}


function mostrarHoras(day, cinemaName, filmName) {
    fetch('../src/json/cinemas.json')
        .then(response => response.json())
        .then(data => {

            const cinema = data.cinemas.find(c => c.name === cinemaName);
            const movie = cinema.movies.find(m => m.name === filmName);

            const sessionsForDay = movie.sessions.filter(session => session.day.toLowerCase() === day.toLowerCase());

            const horasContainers = document.querySelectorAll('.grid-container-horas');
            const horasContainer = horasContainers[0];
            horasContainer.innerHTML = '';

            sessionsForDay.forEach(session => {
                const horaDiv = document.createElement('div');
                horaDiv.classList.add('projection-hora-container');
                horaDiv.setAttribute('onclick', 'seleccionarHora(this)');
                horaDiv.innerHTML = `
                    <span>${session.time}</span>
                    <span>${session.hall}</span>
                `;
                horasContainer.appendChild(horaDiv);
            });


            horasContainer.style.display = 'grid';
        })
        .catch(error => {
            console.error('Error loading sessions for day:', error);
        });
}


function seleccionarHora(elemento) {
    // Obtener todas las horas
    var horas = document.querySelectorAll('.projection-hora-container');
    
    // Remover la clase 'selected' de todas las horas
    horas.forEach(function (hora) {
        hora.classList.remove('selected');
    });

    // Agregar la clase 'selected' solo a la hora clickeada
    elemento.classList.add('selected');
}


function checkSelection() {
    var selectedDia = document.querySelector('.proyeccion-dia-container.selected');
    var selectedHora = document.querySelector('.proyeccion-hora-container.selected');

    if (selectedDia && selectedHora) {
        window.location.href = "../../public/cinemas.html";
    } else {
        alert('Por favor selecciona un día y una hora');
    }
}

  
function hideChooseSessionPopUp() {
    var reservationComponent2 = document.getElementById("choose-session-component");
    var homeContainer = document.querySelector(".wrapper-container");
    var popupsContainer = document.getElementById("popups");
  
    homeContainer.classList.remove("blurred-background");

    reservationComponent2.style.display = "none";
    popupsContainer.style.display = "none";

    clearCinemas();
    clearSessions();
}

function clearSessions() {
    const projectionDaysContainer = document.querySelector(".grid-container-dias");
    projectionDaysContainer.innerHTML = '';

    const horasContainers = document.querySelectorAll('.grid-container-horas');
    const horasContainer = horasContainers[0];
    horasContainer.innerHTML = '';
}

function switchOverlay() {
    var registerComponent = document.getElementById("choose-cinema-component");
    var registerComponent2 = document.getElementById("choose-session-component");

    if (registerComponent.style.display === "block") {
        registerComponent.style.display = "none";
        registerComponent2.style.display = "block";
    } else {
        registerComponent.style.display = "block";
        registerComponent2.style.display = "none";
    }

    clearSessions();
}