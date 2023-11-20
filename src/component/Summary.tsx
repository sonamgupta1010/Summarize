import React from 'react';

// Import the Typewriter component from the specified path
import Typewriter from './Typewriter'

interface SummaryProps {
    text: string;
    header: string;
}

// Define the Summary component
const Summary: React.FC<SummaryProps> = ({ text }) => {
    console.log(text,"summary")
    return (
        // Render a container div with specified classes
        <div className="prose prose-sm prose-primary mb-4 max-w-none overflow-auto break-words dark:prose-invert" id="summary" dir="auto">
            {/* Render the Typewriter component and pass the 'text' as a prop */}
            <Typewriter text={text} />
        </div>
    );
}

// Export the Summary component to make it available for other parts of the application
export default Summary;
