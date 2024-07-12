import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Element5.scss'; // Ensure the path is correct
import { GoArrowRight } from 'react-icons/go'; // Import GoArrowRight icon

const Element5 = () => {
  return (
    <div className="element5-container container">
      <div className="row">
        <div className="col-md-6 order-2 order-md-1 d-flex flex-column align-items-start">
          <h2 className="element5-heading">See participants & Assign actions fast</h2>
          <p className="element5-paragraph">
            Get real-time data on participants with this platform, offering detailed insights into attendance, engagement, and their roles
          </p>
          <a href="#" className="demo-link1">
            Get a Demo now <GoArrowRight className="demo-icon1" />
          </a>
        </div>
        <div className="col-md-6 order-1 order-md-2 d-flex justify-content-center align-items-center">
          <img src="/Assests/Img.png" alt="Laptop" className="img-fluidh" />
        </div>
      </div>
    </div>
  );
};

export default Element5;
