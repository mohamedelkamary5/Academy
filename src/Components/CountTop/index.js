import React from "react";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileAlt,
  faEnvelope,
  faLocationArrow,
  faUser,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
const counttop = () => {
  return (
    <div className="app">
      <div className="container">
        <div className="row d-flex align-items-center justify-content-between">
          <div className="col-lg-8 col-md-10">
            <div className="row">
              <div className="col-md-3 col-sm-6 text-xm-center num">
                <FontAwesomeIcon icon={faMobileAlt} />
                <span>01287909436</span>
              </div>
              <div className="col-md-5 col-sm-6 text-xm-center text-center">
                <FontAwesomeIcon icon={faEnvelope} />
                <span>mohamedelkamary5@gmail.com</span>
              </div>
              <div className="col-md-4 col-sm-10 text-center">
                <FontAwesomeIcon icon={faLocationArrow} />
                <span>Cairo, Tahrir Square</span>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-2 text-right">
            <div className="row text-right">
              <div className="col-md-6 text-right">
                <FontAwesomeIcon icon={faUser} />
                <span>Sign</span>
              </div>
              <div className="col-md-6">
                <FontAwesomeIcon icon={faShoppingCart} />
                <span>Cart</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default counttop;

// <FontAwesomeIcon icon={faMobileAlt} />
//       <FontAwesomeIcon icon={faEnvelope} />
//       <FontAwesomeIcon icon={faLocationArrow} />
//       <FontAwesomeIcon icon={faUser} />
//       <FontAwesomeIcon icon={faShoppingCart} />
