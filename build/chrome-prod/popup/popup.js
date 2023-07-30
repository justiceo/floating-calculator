var IS_DEV_BUILD=false;
(()=>{document.addEventListener("DOMContentLoaded",t=>{let n=`chrome-extension://${chrome.i18n.getMessage("@@extension_id")}/standalone/calc.html`,e=document.querySelector("iframe");if(!e){console.error("iframe element should be present in the popup");return}e.src=n});})();
