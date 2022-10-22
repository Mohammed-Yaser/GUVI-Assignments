import React from "react";

export default function Webcard(props) {
  return (
    <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">
            {props.version}
          </h5>
          <h6 className="card-price text-center">
            {props.price}
            <span className="period">/month</span>
          </h6>
          <hr />
          <ul className="fa-ul">
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              {props.user}
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              {props.storage}
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              {props.publicProject}
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              {props.access}
            </li>
            <li className={props.privateProjectText}>
              <span className="fa-li">
                <i className={props.privateProjectIndex}></i>
              </span>
              {props.privateProject}
            </li>
            <li className={props.supportText}>
              <span className="fa-li">
                <i className={props.supportIndex}></i>
              </span>
              {props.support}
            </li>
            <li className={props.domainText}>
              <span className="fa-li">
                <i className={props.domainIndex}></i>
              </span>
              {props.domain}
            </li>
            <li className={props.reportText}>
              <span className="fa-li">
                <i className={props.reportIndex}></i>
              </span>
              {props.report}
            </li>
          </ul>
          <div className="d-grid">
            <btn className="btn btn-primary text-uppercase">Button</btn>
          </div>
        </div>
      </div>
    </div>
  );
}
