import React from 'react';
import './Element10.scss'; // Ensure the path is correct

const Element10 = () => {
  return (
    <div className="element10-container container">
      <div className="row3">
        <div className="col-md-6a">
          <div className="element10-content">
            <h2 className="element10-heading">Ready to streamline your meetings?</h2>
            <p className="element10-paragraph">With TekTime, you can easily manage your meetings with real-time<br></br> updates, scheduling, and detailed participant insights.</p>
          </div>
        </div>
        <div className="col-md-6a">
          <div className="element10-form-container">
            <form className="element10-form">
              <div className="form-group">
                <div className="element10-image">
                  <img src="/Assests/emojione_cookie.png" alt="Icon" className="img-fluidj" />
                </div>
                <h2 className="element10-subheading">We use cookies</h2>
                <p className="element10-subparagraph">This website uses cookies to ensure you get the best experience.</p>
              </div>
              <button type="submit" className="btn btn-primary">Accept All Cookies</button><br></br>
              <h2 className="element10-subheading">Our Cookie Policy</h2>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Element10;
