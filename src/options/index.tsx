// Import the necessary modules and styles
import React from "react";
import { createRoot } from "react-dom/client";
import '../assets/tailwind.css'; // Import your Tailwind CSS file
import Options from "./options"; // Import your Options component

// Function to initialize the app
function init() {
    // Create a new div element to serve as the app container
    const appContainer = document.createElement('div');
    document.body.appendChild(appContainer);

    // Check if the app container was successfully created
    if (!appContainer) {
        throw new Error("Can not find AppContainer");
    }

    // Create a root for rendering the app inside the app container
    const root = createRoot(appContainer);

    // Log the app container for debugging
    console.log(appContainer);

    // Render the Options component within the app container
    root.render(<Options />);
}

// Initialize the app
init();
