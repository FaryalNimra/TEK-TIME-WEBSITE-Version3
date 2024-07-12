import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Element4.scss'; // Ensure the path is correct
import { GoArrowRight } from 'react-icons/go'; // Import GoArrowRight icon

const Element4 = () => {
  return (
    <div className="element4-container container">
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img src="/Assests/Laptop.png" alt="Laptop" className="img-fluidh" />
        </div>
        <div className="col-md-6 d-flex flex-column align-items-start">
          <h2 className="element4-heading">Track moment’s progress<br /> with our advanced platform</h2>
          <p className="element4-paragraph">
            Track the progress of meetings and their steps effortlessly with this platform, featuring real-time updates, task assignments, and comprehensive analytics.
          </p>
          <a href="#" className="demo-link d-inline-flex align-items-center text-primary mt-3">
            Get a Demo now <GoArrowRight className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Element4;
