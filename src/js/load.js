export async function loadComponentJS(src, componentId) {
    try {
        const response = await fetch(src);
        const data = await response.text();
        
        const app = document.getElementById(componentId);
        app.innerHTML = data;
        
        const scripts = app.querySelectorAll("script");
        
        if (scripts.length > 0) {
            const loadScript = async index => {
                if (index < scripts.length) {
                    const newScript = document.createElement("script");
                    
                    if (scripts[index].innerText) {
                        const inlineScript = document.createTextNode(scripts[index].innerText);
                        newScript.appendChild(inlineScript);
                    } else {
                        newScript.src = scripts[index].src;
                    }
                    
                    scripts[index].parentNode.removeChild(scripts[index]);
                    newScript.addEventListener("load", () => loadScript(index + 1));
                    newScript.addEventListener("error", () => loadScript(index + 1));
                    app.appendChild(newScript);
                }
            };
            
            await loadScript(0);
        }
    } catch (error) {
        console.warn('Something went wrong.', error);
    }
}
