// Import React to define and use React components
import React from 'react';

// Define the props interface for the Button component
interface ButtonProps {
    text: string; // The text content of the button
    onClick: () => void; // The function to be executed when the button is clicked
    type?: 'button' | 'submit' | 'reset'; // Optional: type of the button (default is 'button')
    className?: string; // Optional: additional CSS class for styling the button
}

// Define the Button component using the React.FC (Functional Component) type and the ButtonProps interface
const Button: React.FC<ButtonProps> = ({ text, onClick, type = 'button', className = '' }) => {
    return (
        // Render a button element with the specified properties
        <button 
            type={type} // Set the type attribute of the button
            onClick={onClick} // Set the click event handler
            className={className} // Apply any additional CSS class
        >
            {text} {/* Display the button text */}
        </button>
    );
};

// Export the Button component to make it available for other parts of the application
export default Button;
