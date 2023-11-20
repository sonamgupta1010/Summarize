// This code listens for messages from a content script or other parts of the extension.
// When a message is received, it logs the message and sender information to the console.
// Then it sends a response back to the sender with a simple text message.
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    // Log the received message
    console.log(msg);
    
    // Log information about the sender
    console.log(sender);
    
    // Send a response back to the sender
    // The message here is just a simple text indicating that the message was received from the background script
    sendResponse("get response");
});




