// Función para cargar el contenido desde un archivo JSON
function loadLanguageFromJSON(page, language) {
    // Ruta del archivo JSON
    const jsonRoute = `../src/assets/languages/${page}.json`;

    // Realizar la solicitud HTTP GET para obtener el contenido del archivo JSON
    fetch(jsonRoute)
        .then(response => {
            // Verificar si la respuesta es exitosa
            if (!response.ok) {
                throw new Error('Could not load JSON file!');
            }
            // Devolver el contenido del archivo JSON como texto
            return response.text();
        })
        .then(data => {
            // Parsear el contenido del archivo JSON a un objeto JavaScript
            const content = JSON.parse(data);
            // Llamar a la función para cargar el contenido según el idioma seleccionado
            loadContent(content, language);
        })
        .catch(error => {
            console.error('Error loading JSON file:', error);
        });
}


// Load the language resources
// Función para cargar el contenido según el idioma seleccionado
function loadContent(content, language) {
    const languageContent = content[language];
    for (const seccion in languageContent) {
        const elementos = languageContent[seccion];
        for (const key in elementos) {
            const valor = elementos[key];
            const HTMLElement = document.getElementById(`${key}`);
            if (HTMLElement) {
                HTMLElement.textContent = valor;
            }
        }
    }
}

// Llamar a la función para cargar el contenido según el idioma seleccionado al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    // Por ejemplo, cargar el contenido en español al cargar la página
    loadLanguageFromJSON('adminDashboard', 'en');
});