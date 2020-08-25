import React from "react";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTree,
  faFootballBall,
  faUsers,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
const Feauter = () => {
  return (
    <div className="featuer">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-3 col-sm-6 col-xm-12">
            <div className="inner">
              <FontAwesomeIcon icon={faTree} />
            </div>
          </div>

          <div className="col-md-3 col-sm-6 col-xm-12">
            <div className="inner">
              <FontAwesomeIcon icon={faFootballBall} />
            </div>
          </div>

          <div className="col-md-3 col-sm-6 col-xm-12">
            <div className="inner">
              <FontAwesomeIcon icon={faUsers} />
            </div>
          </div>

          <div className="col-md-3 col-sm-6 col-xm-12">
            <div className="inner">
              <FontAwesomeIcon icon={faChartLine} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feauter;
