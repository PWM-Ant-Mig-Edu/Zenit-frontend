export class DetailSaver {
    constructor(data, notifyChangeCallback) {
        if (data) {
            this.details = data.details;
        } else {
            this.details = {
                movie_img: '',
                movie: '',
                date: '',
                time: '',
                cinema: '',
                hall: ''
            };
        }
        this.notifyChangeCallback = notifyChangeCallback;

    }


    async retrieveDetailsFromURL() {
        const url = window.location.href;
        const queryString = url.split('?')[1]; // Obtiene la parte de la URL después del símbolo '?'
        const urlParams = new URLSearchParams(queryString);
        const cinemaId = urlParams.get('cinema');
        const movieId = urlParams.get('film');
        const day = urlParams.get('day');
        const hour = urlParams.get('hour');
        const hall = urlParams.get('hall');

        // Asegúrate de que todos los parámetros requeridos estén presentes
        if (cinemaId && movieId && day && hour) {
            try {
                const cinema = await this.getCinemaName(cinemaId);
                this.details.cinema = cinema;
                console.log("Cinema: ", cinema);

                const movie = await this.getMovieName(movieId);
                this.details.movie = movie;
                console.log("Movie: ", movie);

                // Asigna los detalles restantes que no requieren llamadas asíncronas
                this.details.date = day;
                this.details.time = hour;
                this.details.hall = hall;
                console.log("Details: ", this.details);
            } catch (error) {
                console.error("Error retrieving details from URL:", error);
            }
        } else {
            console.error("Error retrieving details from URL: Didn't find parameters");
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
            this.details.movie_img = movie.img;
            return movie.name;
        } catch (error) {
            console.error('Error loading movies:', error);
            throw error;
        }
    }

}