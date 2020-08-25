import React from "react";
import "./style.scss";
const Subscribe = () => {
  return (
    <section className="subscribe">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-sm-5 mb-lg-0 d-flex flex-column justify-content-center align-items-center">
            <h2>SUBSCRIBE TO OUR</h2>
            <h2>NEWSLETTER</h2>
          </div>
          <form className="col-lg-6">
            <div className="row">
              <div className="col-sm-6">
                <input
                  className="form-control form-control-lg mb-2"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div className="col-sm-6">
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-sm-8">
                <input
                  className="form-control form-control-lg mb-2"
                  type="text"
                  placeholder="Message"
                />
              </div>
              <div className="col-sm-4 text-center">
                <button className="btn btn-dark btn-lg">SUBMIT</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
