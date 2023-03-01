
const engine = "DuckDuckGo"
export function getEngineConfig() {
    const cue = chrome.i18n.getMessage("calculator_cue");
    const config= {
        Google: {
            name: "Google",
            selector: "div[jscontroller=GCPuBe]",            
            url: () => `https://www.google.com/search?q=${cue}`,
            applyCss: () => {
                const style = document.createElement("style");
                style.textContent = `                    
                    body.srp {
                        overflow-x: hidden;
                        --center-width: 350px;
                    }  
                `;
                document.body.appendChild(style);

                // Remove links to avoid navigating away.
                document.body.querySelectorAll("span[role=link]").forEach(a => {
                    a.parentElement?.replaceChild(document.createTextNode(a.textContent!), a);
                });
            },
        },
        DuckDuckGo: {
            name: "DuckDuckGo",
            selector: "div.calculator--wrap.tile--calculator",            
            url: () => `https://duckduckgo.com/?q=${cue}`,
            applyCss: () => {
                const style = document.createElement("style");
                style.textContent = ``;
                document.body.appendChild(style);

                // Remove links to avoid navigating away.
                document.body.querySelectorAll("a").forEach(a => {
                    a.parentElement?.replaceChild(document.createTextNode(a.textContent!), a);
                });                
            },
        }
    }
    return config[engine];
}