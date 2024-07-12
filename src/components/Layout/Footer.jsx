import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-3 col-lg-2 logo-box">
            <img src="/Assests/oo.png" alt="Logo" className="logo-image" />
          </div>
          <div className="col-md-9 col-lg-10 box-content d-flex justify-content-between">
            <div className="box">
              <h4>Company</h4><br></br>
              <p>About Us</p><br></br>
              <p>Contact Us</p><br></br>
            </div>
            <div className="box">
              <h4>Product</h4><br></br>
              <p>Features</p><br></br>
              <p>Pricing</p><br></br>
            </div>
            <div className="box">
              <h4>Legal Info</h4><br></br>
              <p>Privacy Policy</p><br></br>
              <p>Terms&Conditions</p><br></br>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
