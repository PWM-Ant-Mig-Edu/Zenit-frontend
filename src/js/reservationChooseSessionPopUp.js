function showChooseSessionPopUp(cinema_id, film_id) {
    getFilmById(film_id).then(film => {
        var chooseSessionComponent = document.getElementById("choose-session-component");
        chooseSessionComponent.setAttribute('film-id', film_id);
        chooseSessionComponent.setAttribute('cinema-id', cinema_id);
        var popupsContainer = document.getElementById("popups");
        var homeContainer = document.querySelector(".wrapper-container");

        homeContainer.classList.add("blurred-background");

        popupsContainer.style.display = "block";
        chooseSessionComponent.style.display = "block";

        const filmName = chooseSessionComponent.querySelector('#film-name');
        filmName.textContent = film.name;
        const sessionImg = chooseSessionComponent.querySelector('#film-image');
        sessionImg.src = film.img;

        loadSessions(cinema_id, film_id);
    }).catch(error => {
        console.error('Error in showChooseSessionPopUp:', error.message);
    });

}

function loadSessions(cinema_id, movie_id) {
    fetch('../src/json/cinemas.json')
        .then(response => response.json())
        .then(data => {
            const cinema = data.cinemas.find(c => c.id === cinema_id);
            const cinemaMovie = cinema.movies.find(m => m.id === movie_id);

            const projectionDaysContainer = document.querySelector(".grid-container-dias");
            projectionDaysContainer.innerHTML = '';

            const uniqueDays = [...new Set(cinemaMovie.sessions.map(session => session.day))];

            uniqueDays.forEach(day => {
                const dayDiv = document.createElement('div');
                dayDiv.classList.add('projection-day-container');
                dayDiv.setAttribute('data-day', day.toLowerCase());
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
    const chooseSessionComponent = document.getElementById("choose-session-component");
    const cinemaId = chooseSessionComponent.getAttribute('cinema-id');
    const movieId = chooseSessionComponent.getAttribute('film-id');

    // Removemos la clase 'selected' de todos los elementos hermanos
    const siblings = event.currentTarget.parentNode.children;
    for (let sibling of siblings) {
        sibling.classList.remove(selectedClass);
    }
    
    event.currentTarget.classList.toggle(selectedClass);

    if (event.currentTarget.classList.contains(selectedClass)) {
        showAvailableHours(selectedDay, cinemaId, movieId);
    }
}


function showAvailableHours(day, cinemaId, movieId) {


    fetch('../src/json/cinemas.json')
        .then(response => response.json())
        .then(data => {
            const cinema = data.cinemas.find(c => c.id === cinemaId);
            const movie = cinema.movies.find(m => m.id === movieId);
            const sessionsForDay = movie.sessions.filter(session => session.day.toLowerCase() === day.toLowerCase());


            const hourContainer_Container = document.querySelectorAll('.grid-container-horas');
            const hourContainer = hourContainer_Container[0];
            hourContainer.innerHTML = '';

            sessionsForDay.forEach(session => {
                const horaDiv = document.createElement('div');
                horaDiv.classList.add('projection-hour-container');
                horaDiv.setAttribute('data-hour', session.time);
                horaDiv.setAttribute('onclick', 'setAsSelectedHour(this)');
                horaDiv.innerHTML = `
                    <span>${session.time}</span>
                    <span>${session.hall}</span>
                `;
                hourContainer.appendChild(horaDiv);
            });
            hourContainer.style.display = 'grid';
            
        })
        .catch(error => {
            console.error('Error loading sessions for day:', error);
        });
}


function setAsSelectedHour(htmlElement) {
    // Obtener todas las horas
    var horas = document.querySelectorAll('.projection-hour-container');

    // Remover la clase 'selected' de todas las horas
    horas.forEach(function (hora) {
        hora.classList.remove('selected');
    });

    // Agregar la clase 'selected' solo a la hora clickada
    htmlElement.classList.add('selected');
}


function checkSelection() {
    var chooseSessionComponent = document.getElementById("choose-session-component");
    const selectedCinemaId = chooseSessionComponent.getAttribute('cinema-id');
    const selectedFilmId = chooseSessionComponent.getAttribute('film-id');
    const selectedDay = chooseSessionComponent.querySelector('.projection-day-container.selected')
                                                     .getAttribute('data-day');
    const selectedHour = chooseSessionComponent.querySelector('.projection-hour-container.selected')
        .getAttribute('data-hour');

    // Print all 4 data
    console.log("SelectedCinemaId: ", selectedCinemaId);
    console.log("SelectedFilmId: ", selectedFilmId);
    console.log("SelectedDay: ", selectedDay);
    console.log("SelectedHour: ", selectedHour);

    if (selectedCinemaId && selectedFilmId && selectedDay && selectedHour) {
        // FIXME: Check route definition /Zenit-frontend/public/ may not always be the same
        window.location.href = window.location.origin + "/Zenit-frontend/public/reservationTickets.html?cinema=" + selectedCinemaId + "&film=" + selectedFilmId + "&day=" + selectedDay + "&hour=" + selectedHour;


    } else {
        alert('Por favor selecciona un día y una hora');
    }
}



function hideChooseSessionPopUp() {
    var chooseSessionComponent = document.getElementById("choose-session-component");
    chooseSessionComponent.setAttribute('film-id', '');
    chooseSessionComponent.setAttribute('cinema-id', '');
    var homeContainer = document.querySelector(".wrapper-container");
    var popupsContainer = document.getElementById("popups");
  
    homeContainer.classList.remove("blurred-background");

    chooseSessionComponent.style.display = "none";
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