import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Element2.scss'; // Ensure the path is correct

const Element2 = () => {
  return (
    <div className="element2-container">
      <div className="text-left">
      <h1 className="element2-heading" style={{ fontSize: '18px', color: 'red',marginTop:50}}>
        What is TEKTIME?
      </h1>
        <h1 className="element2-heading">Scheduling and managing meetings used to be<br /> challenging, but this platform makes it effortless</h1>
      </div>
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div className="d-flex justify-content-center align-items-center mb-3">
            <img src="/Assests/report 1.png" alt="Image 1" className="img-fluid img-padding" />
          </div>
        </div>
        <div className="col-md-6 d-flex flex-column align-items-center">
          <div className="d-flex justify-content-center align-items-center mb-3">
            <img src="/Assests/Meeting 1.png" alt="Image 2" className="img-fluid1 img-padding"  />
            <img src="/Assests/Option 1 1.png" alt="Image 3" className="img-fluid2 img-padding" />
          </div>
          <p className="element2-paragraph">
            TekTime is a comprehensive platform for seamless scheduling, conducting, and managing meetings with robust collaboration, task management, and integration features. It enhances productivity by offering real-time collaboration tools, automated reminders, and detailed analytics.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Element2;
