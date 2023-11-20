import React from 'react';
import ContentLoader from 'react-content-loader';

// Defining MyLoader component which uses ContentLoader to create a placeholder loading screen
const MyLoader: React.FC = (props) => (
  // ContentLoader component creates SVG based (scalable vector graphics) loading placeholders
  <ContentLoader 
    // Speed of the loading animation
    speed={2}
    // Width of the SVG container
    width={400}
    // Height of the SVG container
    height={460}
    // The view box of the SVG container
    viewBox="0 0 400 460"
    // Background color of the SVG
    backgroundColor="#f3f3f3"
    // Foreground color (the loading animation color)
    foregroundColor="#ecebeb"
    // Spread in any other passed in props
    {...props}
  >
    // Circle element in the SVG
    <circle cx="31" cy="31" r="15" /> 
    // Rectangular elements in the SVG
    <rect x="58" y="18" rx="2" ry="2" width="140" height="10" /> 
    <rect x="58" y="34" rx="2" ry="2" width="140" height="10" /> 
    <rect x="0" y="60" rx="2" ry="2" width="400" height="400" />
  </ContentLoader>
);

// Exporting the MyLoader component
export default MyLoader;
