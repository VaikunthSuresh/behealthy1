import React from "react";
import { Link } from "react-router-dom";



function Navbars(props) {
  return (
    <nav className="navbar navbar-expand-lg shadow-lg" style={{background: "#332cf2"}}>
    <div className="container-fluid">
      <a className="navbar-brand text-light fw-bold" >BeHealthy</a>
      <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link active fs-5 mx-2 text-light" aria-current="page">{props.subnav}</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link fs-5 mx-2 text-light" >{props.subnav1}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link fs-5 mx-2 text-light" >{props.subnav2}</a>
          </li>
         
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default Navbars;