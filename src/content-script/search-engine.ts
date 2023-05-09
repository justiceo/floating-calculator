
const engine = "Google"
export function getEngineConfig() {
    const cue = chrome.i18n.getMessage("calculator_cue");
    const config= {
        Google: {
            name: "Google",
            selector: "div[jscontroller=GCPuBe]",            
            url: () => `https://www.google.com/search?igu=1&q=${cue}`,
            applyCss: () => {
                const style = document.createElement("style");
                style.textContent = `                    
                    body.srp {
                        overflow-x: hidden;
                        overflow-y: hidden;
                        --center-width: 350px;
                        --center-abs-margin: 0;
                    }

                    span[jsname=ieUz0d] {
                        display:none;
                    }

                    .card-section {
                        margin-top: -20px;
                    }

                    .card-section div[role=button] {
                        height: auto;
                        line-height: 34px;
                        margin: 4px;
                    }

                    .card-section td > div {
                        height: auto;
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
                const link = document.createElement("link");
                link.rel = "stylesheet";
                link.type = "text/css";
                link.href = chrome.runtime.getURL("content-script/ddg-calculator.css"),
                link.itemprop = "url";
                document.body.appendChild(link);

                // Remove links to avoid navigating away.
                document.body.querySelectorAll("a").forEach(a => {
                    a.parentElement?.replaceChild(document.createTextNode(a.textContent!), a);
                });                
            },
        },
        Bing: {
            name: "Bing",
            selector: ".b_ans.b_top",            
            url: () => chrome.runtime.getURL("content-script/bing-calculator.html"),
            applyCss: () => {
                const style = document.createElement("style");
                style.textContent = `                    
                    body.srp {
                        overflow-x: hidden;
                        overflow-y: hidden;
                        --center-width: 350px;
                        --center-abs-margin: 0;
                    }                                    
                `;
                document.body.appendChild(style);

                // Remove links to avoid navigating away.
                document.body.querySelectorAll("span[role=link]").forEach(a => {
                    a.parentElement?.replaceChild(document.createTextNode(a.textContent!), a);
                });
            },
        },
    }
    return config[engine];
}