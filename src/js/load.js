function cargarEstructura() {
    fetch("../src/components/reservationChooseCinema.html").then(response => {
        return response.text();
    }).then(data => {
    
        const app = document.getElementById("make-reservation-component");
        app.innerHTML = data;
    
        var scripts = app.querySelectorAll("script");
    
        if (scripts !== null && scripts.length > 0) {
            var loadScript = index => {
                if (index < scripts.length) {
                    var newScript = document.createElement("script");
    
                    if (scripts[index].innerText) {
                        var inlineScript = document.createTextNode(scripts[index].innerText);
                        newScript.appendChild(inlineScript);
                    }
                    else {
                        newScript.src = scripts[index].src;
                    }
                    scripts[index].parentNode.removeChild(scripts[index]);
                    newScript.addEventListener("load", event => loadScript(index + 1));
                    newScript.addEventListener("error", event => loadScript(index + 1));
                    app.appendChild(newScript);
                }
            }
    
            loadScript(0);
        }
    }).catch(err => {
        console.warn('Something went wrong.', err);
    });  
}

document.addEventListener('DOMContentLoaded', function () {
     cargarEstructura();
});
