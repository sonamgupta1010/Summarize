/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************************************!*\
  !*** ./src/contentScript/contentScript.ts ***!
  \********************************************/
// Execute the following code when the page is fully loaded
window.onload = (event) => {
    // Log a message to indicate that the page is fully loaded
    console.log("page is fully loaded");
    // Add a listener for messages sent from the extension
    chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
        // Check if the received message is "getInnerText"
        if (request.message === "getInnerText") {
            // Log the received request and the inner text of the document body
            console.log(request, "request", document.body.innerText);
            // Send the inner text of the document body as a response
            sendResponse(document.body.innerText);
        }
    });
};

/******/ })()
;
//# sourceMappingURL=contentScript.js.map