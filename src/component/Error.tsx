// Importing necessary libraries and types from React and framer-motion
import React, { FC } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Defining the props for the ErrorMessage component
interface ErrorMessageProps {
    message: string;
}

// Defining the ErrorMessage component
const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => {
    return (
        // Error container with center alignment
        <div className="error-container flex items-center justify-center m-auto">
            <AnimatePresence>
                {/* If there is a message, display it with an animation */}
                {message && (
                    <motion.div
                        // Initial state of the animation
                        initial={{ opacity: 0, y: -20 }}
                        // State to animate to
                        animate={{ opacity: 1, y: 0 }}
                        // State to animate to when component is removed
                        exit={{ opacity: 0, y: -20 }}
                        // Transition timings
                        transition={{ duration: 0.3 }}
                        // Styling and layout for the error message
                        className="error-message text-black p-2  flex flex-col items-center"
                    >
                        {/* Warning sign emoji with accessibility attributes */}
                        <span role="img" aria-label="Error" className=" mb-2" style={{fontSize:'6rem'}}>⚠️</span>
                        {/* Displaying the error message */}
                        <span className="text-lg">{message}</span>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

// Exporting the ErrorMessage component
export default ErrorMessage;
