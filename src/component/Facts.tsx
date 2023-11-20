import React from 'react';

interface FactProps {
    text: string;
}

const Fact: React.FC<FactProps> = ({ text }) => {
    // Split the input text into paragraphs by empty lines and remove any leading/trailing whitespace
    const paragraphs = text.split('\n').filter(item => item.trim().length > 1);

    return (
        <div className="max-w-md mx-auto p-4">
            <div className="space-y-4">
                {paragraphs.map((paragraph, index) => {
                    // Remove any leading numbers or whitespace
                    const cleanedParagraph = paragraph.replace(/^\d+\.\s*/, '');

                    return (
                        <div key={index} className="flex items-start space-x-2">
                            {/* Display the paragraph index in a circular badge */}
                            <div className="bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center text-gray-600">
                                {index + 1}
                            </div>
                            {/* Display the cleaned paragraph text */}
                            <div className="flex-1 bg-white border rounded p-4 ml-2 text-base">
                                {cleanedParagraph.trim()}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Fact;
