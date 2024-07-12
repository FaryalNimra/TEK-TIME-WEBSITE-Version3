import React, { useState, useEffect } from 'react';
import './Element11.scss'; // Ensure the path is correct

const Element11 = () => {
  const [containerHeight, setContainerHeight] = useState('60vh');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 576) {
        setContainerHeight('160vh');
      } else if (window.innerWidth <= 768) {
        setContainerHeight('160vh');
      } else {
        setContainerHeight('60vh');
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call initially to set the correct height

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const containerStyle = {
    backgroundImage: `url('/Assests/BG (1).png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: containerHeight, // Adjust height based on media queries
    position: 'relative',
  };

  return (
    <div className="element11-container" style={containerStyle}>
      <div className="overlay-content">
        <div className="content-center">
          <p className="element11-paragraph">Testimonial</p>
          <h2 className="element11-heading">
            “Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.”
          </h2>
          <div className="testimonial-info">
            <div className="element11-icon">
              <img src="/Assests/Oval.png" alt="Icon" className="img-fluidm" />
              <div className="text-container">
                <h2 className="element11-subheading">Ian Klein</h2>
                <p className="element11-subparagraph">Digital Marketer</p>
              </div>
            </div>
            <div className="element11-group-icons d-flex">
             
              <img src="/Assests/Group 163.png" alt="Icon" className="img-fluidm" />
              <img src="/Assests/Group 162.png" alt="Icon" className="img-fluidm" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Element11;
