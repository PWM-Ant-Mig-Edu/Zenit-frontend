function loadLanguageFromJSON(page, language) {
    const jsonRoute = `../src/assets/languages/${page}.json`;

    fetch(jsonRoute)
        .then(response => {
            if (!response.ok) {
                throw new Error('Could not load JSON file!');
            }
            return response.text();
        })
        .then(data => {
            const content = JSON.parse(data);
            loadContent(content, language);
        })
        .catch(error => {
            console.error('Error loading JSON file:', error);
        });
}

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

document.addEventListener('DOMContentLoaded', function() {
    loadLanguageFromJSON('adminDashboard', 'es');
});