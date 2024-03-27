export async function loadComponentJS(src, componentId) {
    try {
        const response = await fetch(src);
        const data = await response.text();

        const app = document.getElementById(componentId);
        app.innerHTML = data;

        const scripts = app.querySelectorAll("script");

        if (scripts !== null && scripts.length > 0) {
            const loadScript = async index => {
                if (index < scripts.length) {
                    const newScript = document.createElement("script");

                    if (scripts[index].innerText) {
                        const inlineScript = document.createTextNode(scripts[index].innerText);
                        newScript.appendChild(inlineScript);
                    }
                    else {
                        newScript.src = scripts[index].src;
                    }
                    scripts[index].parentNode.removeChild(scripts[index]);

                    await new Promise((resolve, reject) => {
                        newScript.addEventListener("load", resolve);
                        newScript.addEventListener("error", reject);
                        app.appendChild(newScript);
                    });

                    await loadScript(index + 1);
                }
            }

            await loadScript(0);
        }
    } catch (err) {
        console.warn('Something went wrong.', err);
    }
}
