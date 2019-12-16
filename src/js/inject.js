function injectScript() {
    const interceptScript = document.createElement('script');
    interceptScript.type = 'text/javascript';
    interceptScript.src = chrome.runtime.getURL('js/intercept.js');
    document.head.prepend(interceptScript);
}

function checkForDOM() {
    if (document.body && document.head) {
        injectScript();
    } else {
        requestIdleCallback(checkForDOM, {timeout: 100});
    }
}

requestIdleCallback(checkForDOM, {timeout: 100});
