import React from "react";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faMapMarker,
  faEnvelope,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <section>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h4 className="mb-4">Aboud Acodemy</h4>
              <h3 className="mb-0">OUR ACADMY</h3>
              <p>Lorem Ipsum is simply.</p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been
              </p>
            </div>
            <div className="col-md-2 explor">
              <h4 className="mb-4">Explor Link</h4>
              <a href="/">
                <FontAwesomeIcon icon={faArrowRight} />
                <span>Lorem Ipsum</span>
              </a>
              <a href="/">
                <FontAwesomeIcon icon={faArrowRight} />
                <span>Lorem Ipsum</span>
              </a>
              <a href="/">
                <FontAwesomeIcon icon={faArrowRight} />
                <span>Lorem Ipsum</span>
              </a>
              <a href="/">
                <FontAwesomeIcon icon={faArrowRight} />
                <span>Lorem Ipsum</span>
              </a>
              <a href="/">
                <FontAwesomeIcon icon={faArrowRight} />
                <span>Lorem Ipsum</span>
              </a>
              <a href="/">
                <FontAwesomeIcon icon={faArrowRight} />
                <span>Lorem Ipsum</span>
              </a>
              <a href="/">
                <FontAwesomeIcon icon={faArrowRight} />
                <span>Lorem Ipsum</span>
              </a>
            </div>
            <div className="col-md-3">
              <h4 className="mb-4">Latest Post</h4>
              <div>
                <div className="parent mb-3">
                  <div>
                    <img src="/Images/25.jpg" alt="" />
                  </div>
                  <div>
                    <p className="pr-5">
                      Lorem Ipsum is simply dummy text of printing
                    </p>
                  </div>
                </div>
                <div className="parent mb-3">
                  <div>
                    <img src="/Images/25.jpg" alt="" />
                  </div>
                  <div>
                    <p className="pr-5">
                      Lorem Ipsum is simply dummy text of printing
                    </p>
                  </div>
                </div>
                <div className="parent mb-3">
                  <div>
                    <img src="/Images/25.jpg" alt="" />
                  </div>
                  <div>
                    <p className="pr-5">
                      Lorem Ipsum is simply dummy text of printing
                    </p>
                  </div>
                </div>
                <div className="parent mb-3">
                  <div>
                    <img src="/Images/25.jpg" alt="" />
                  </div>
                  <div>
                    <p className="pr-5">
                      Lorem Ipsum is simply dummy text of printing
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 contact">
              <h4 className="mb-4">Contact Us</h4>
              <div>
                <div className="mb-3">
                  <FontAwesomeIcon icon={faMapMarker} />
                  <span>Cairo, Tahrir Square</span>
                </div>
                <div className="mb-3">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span>mohamedelkamary5@gmail.com</span>
                </div>
                <div className="mb-3">
                  <FontAwesomeIcon className="mobill" icon={faMobileAlt} />
                  <span>0128709436</span>
                  <span className="d-block num">01558864135</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Copyright text-center">
        <p>
          Copyright © 2020 All rights reserved | This template is made with by
          <a
            target="blank"
            href="https://www.facebook.com/profile.php?id=100009873587379"
          >
            Mohamed Elkamary
          </a>
        </p>
      </div>
    </section>
  );
};

export default Footer;
