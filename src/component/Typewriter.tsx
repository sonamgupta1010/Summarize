import React, { useState, useEffect, FC } from 'react';

interface TypewriterProps {
    text: string;
}

const Typewriter: FC<TypewriterProps> = ({ text }) => {
    const [typedText, setTypedText] = useState<string>('');
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useEffect
    // Defining the useEffect hook that will handle the typing effect
    useEffect(() => {
        // Checking if the current index is less than the length of the text
        if (currentIndex < text.length) {
            // Setting a timeout to delay the typing effect
            const timeout = setTimeout(() => {
                // Adding the next character to the typed text
                setTypedText((prevTypedText: string) => prevTypedText + text[currentIndex]);
                // Increasing the current index by 1
                setCurrentIndex((prevIndex: number) => prevIndex + 1);
            }, 20);
            
            // Clearing the timeout when the component unmounts
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, text]);

    // Rendering the typed text inside a p tag
    return (
        <div>
            <p style={{ marginTop: '0', fontSize: 'larger', color: '#1e1b1b' }}>{typedText}</p>
        </div>
    );
};

// Exporting the Typewriter component
export default Typewriter;