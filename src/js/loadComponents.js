export function fetchComponenteconJSPropio(url, containerClass) {
    fetch(url)
        .then(response => {
            if (!response.ok){
                throw new Error('Error al cargar el recurso: ' + response.status);
            }
            return response.text();
        })
        .then(html => {
            const containers = document.getElementsByClassName(containerClass);
            if (containers.length > 0) {
                Array.from(containers).forEach(container => {
                    container.innerHTML = html;

                    const scripts = container.getElementsByTagName('script');
                    for (let script of scripts){
                        if (script.src){
                            fetch(script.src)
                            .then(response => response.text())
                            .then(scriptText => eval(scriptText))
                            .catch(error => console.error(`Error loading script: ${error}`));
                        }
                        else{
                            eval(script.innerText);
                        }
                    }
                });
            } else {
                console.error('No se encontró el contenedor con la clase: ' + containerClass);
                return;
            }
        })
        .catch(error => {
            console.error('Error al cargar el componente:', error);
            return;
        });
}