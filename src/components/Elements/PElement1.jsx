import React from 'react';
import { GoArrowRight } from 'react-icons/go';
import './PElement1.scss'; // Ensure the path is correct
const PElement1 = () => {
  return (
    <div className="element7-container container">
      <div className="text-center">
        <h3 className="element7-heading1">Pricing & Plans</h3><br></br>
        <p className="element7-paragraphk">With TekTime, you can easily manage your meetings with<br></br> real-time updates, scheduling, and detailed participant insights.</p>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="element7-form">
            <p className="element7-section-paragraph">Offer Free for 3 months</p>
            <h3 className="element7-heading">For 1 licence</h3>
            <div className="element7-spacer"></div>
            <button className="btn btn-primary">Start Free Trial <GoArrowRight className="button-icon" /></button><br />
            <p className="element7-section-paragraph black-text">2 months free, after X €/months</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="element7-form">
            <p className="element7-section-paragraph">The offer S (Small)</p>
            <h3 className="element7-heading">For 3 licences</h3>
            <div className="element7-spacer"></div>
            <button className="btn btn-primary">Start Free Trial <GoArrowRight className="button-icon" /></button><br />
            <p className="element7-section-paragraph black-text">2 months free, after X €/months</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="element7-form">
            <p className="element7-section-paragraph">The offer M (Medium)</p>
            <h3 className="element7-heading">For 5 licences</h3>
            <div className="element7-spacer"></div>
            <button className="btn btn-primary">Start Free Trial <GoArrowRight className="button-icon" /></button><br />
            <p className="element7-section-paragraph black-text">2 months free, after X €/months</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="element7-form">
            <p className="element7-section-paragraph">The offer L (large)</p>
            <h3 className="element7-heading">For 15 licences</h3>
            <div className="element7-spacer"></div>
            <button className="btn btn-primary">Start Free Trial <GoArrowRight className="button-icon" /></button><br />
            <p className="element7-section-paragraph black-text">2 months free, after X €/months</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="element7-form">
            <p className="element7-section-paragraph">The offer XL (X large)</p>
            <h3 className="element7-heading">For 50 licences</h3>
            <div className="element7-spacer"></div>
            <button className="btn btn-primary">Start Free Trial <GoArrowRight className="button-icon" /></button><br />
            <p className="element7-section-paragraph black-text">2 months free, after X €/months</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="element7-form">
            <p className="element7-section-paragraph">The offer XL (X large)</p>
            <h3 className="element7-heading">For 50 licences</h3>
            <div className="element7-spacer"></div>
            <button className="btn btn-primary">Start Free Trial <GoArrowRight className="button-icon" /></button><br />
            <p className="element7-section-paragraph black-text">2 months free, after X €/months</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PElement1;