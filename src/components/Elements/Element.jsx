import React from 'react';
import './Element.scss'; // Ensure the path is correct

const Element = () => {
  const containerStyle = {
    backgroundImage: "url('/Assests/Bitmap.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '20px' // Added padding for some space around the content
  };
  return (
    <div style={containerStyle} className="element-container">
      <div className="text-center">
        <h1 className="element-heading">
          Manage all your moments,
          <br />
          with our solution
        </h1>
        <p className="element-paragraph">For each of your business issues.</p>
        <button className="element-button">Get a Free Demo Now</button>
      </div>
    </div>
  );
};

export default Element;
