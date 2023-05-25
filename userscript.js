// ==UserScript==
// @name         ChatGPT Utils Injector
// @namespace    https://github.com/pyscripter99
// @version      0.1
// @homepage     https://github.com/pyscripter99/ChatGPT-Utils
// @source       https://github.com/pyscripter99/ChatGPT-Utils
// @description  Injects ChatGPT Utils into ChatGPT.
// @author       pyscripter99
// @match        https://chat.openai.com/chat
// @icon         none
// @grant        none
// ==/UserScript==

(function () {
    "use strict";

    downloadAndEval(
        "https://raw.githubusercontent.com/pyscripter99/ChatGPT-Utils/master/gpt_utils.js"
    )
        .then(() => {
            // Inject ChatGPT utils
            console.log(gpt_inject);
        })
        .catch((error) => {
            console.error("Error downloading or executing the script:", error);
        });
})();

function downloadAndEval(url) {
    return fetch(url)
        .then((response) => response.text())
        .then((script) => {
            eval(script);
        });
}
