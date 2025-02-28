import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Navbar extends Component {
  
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">NEWSAPP</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>

        <li className="nav-item"><Link className="nav-link" to="/BUSINESS">BUSINESS</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/ENTERTAINMENT">ENTERTAINMENT</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/GENERAL">GENERAL</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/HEALTH">HEALTH</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/SCIENCE">SCIENCE</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/SPORTS">SPORTS</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/TECHNOLOGY">TECHNOLOGY</Link></li>
      </ul>
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default Navbar
