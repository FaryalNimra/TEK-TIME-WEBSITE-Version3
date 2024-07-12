import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Element6.scss'; // Ensure the path is correct
import { GoArrowRight } from 'react-icons/go'; // Import GoArrowRight icon

const Element6 = () => {
  return (
    <div className="element6-container container">
      <div className="row">
        <div className="col-md-6 order-2 order-md-1 d-flex justify-content-center align-items-center">
          <img src="/Assests/4.png" alt="Laptop" className="img-fluid10" />
        </div>
        <div className="col-md-6 order-1 order-md-2 d-flex flex-column align-items-start">
          <h2 className="element6-heading">Make your customers<br /> happy by giving services.</h2>
          <p className="element6-paragraph">
            Save your precious time by not worrying about meetings, as this platform handles scheduling, management, and follow-ups effortlessly
          </p>
          <a href="#" className="demo-link2">
            Get a Demo now <GoArrowRight className="demo-icon2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Element6;
