// Importing the maximum token allowed constant
import { MAXIMUM_TOKEN_ALLOWED } from "../constants";

// A function to generate a prompt based on the text and type provided
export function generatePrompt(text: string, type: string) {
    // Truncate the text to a maximum length
    const newText = text.slice(0, MAXIMUM_TOKEN_ALLOWED - 50);

    // If the type is "Facts", ask for a 7-point summary
    if (type === "Facts") {
        return `Summarize this ${newText} in 7 major points`;
    } 
    // If the type is "Summary", ask for a 5-paragraph summary
    else if (type === "Summary") {
        return `Summarize this ${newText} in 5 paragraphs`;
    }
}

// A function to copy the provided text to the clipboard
export function copyToClipboard(text: string) {
    // If there is text to copy
    if (text) {
        // Create a new textarea element
        let textarea = document.createElement("textarea");
        // Set the textarea's content to the text to copy
        textarea.textContent = text;
        // Position the textarea off-screen
        textarea.style.position = "fixed";
        // Add the textarea to the document
        document.body.appendChild(textarea);
        // Select the text in the textarea
        textarea.select();
        
        // Try to execute the browser's copy command
        try {
            return document.execCommand("copy");
        } 
        // If the copy command fails, log the error and return false
        catch (ex) {
            return false;
        } 
        // Regardless of whether the copy succeeded or failed, remove the textarea from the document
        finally {
            document.body.removeChild(textarea);
        }
    }
}
