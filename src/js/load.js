export function loadComponentJS(src, componentId) {
    fetch(src)
        .then(response => {
            return response.text();
        })
        .then(data => {
            const app = document.getElementById(componentId);
            app.innerHTML = data;

            var scripts = app.querySelectorAll("script");

            if (scripts !== null && scripts.length > 0) {
                var loadScript = index => {
                    if (index < scripts.length) {
                        var newScript = document.createElement("script");

                        if (scripts[index].innerText) {
                            var inlineScript = document.createTextNode(scripts[index].innerText);
                            newScript.appendChild(inlineScript);
                        } else {
                            if (scripts[index].src) {
                                newScript.src = scripts[index].src;
                            }
                        }
                        scripts[index].parentNode.removeChild(scripts[index]);
                        if (newScript.src) {
                            newScript.addEventListener("load", event => loadScript(index + 1));
                            newScript.addEventListener("error", event => loadScript(index + 1));
                        }
                        app.appendChild(newScript);
                    }
                };

                loadScript(0);
            }
        })
        .catch(err => {
            console.warn('Something went wrong.', err);
        });
}

