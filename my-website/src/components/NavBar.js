import React from 'react'
import {Link } from "react-router-dom";

export default function NavBar(props) {
  return (
    
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item mx-3">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.about}</Link>
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <div className={`custom-control custom-switch text-${props.mode==="light"?"dark":"light"}`}>
        <input onClick={props.toggleMode} type="checkbox" className="custom-control-input" id="customSwitch1"/>
        <label className="custom-control-label" for="customSwitch1">Toggle this switch element</label>
      </div>
    </div>
  </div>
</nav>
  )
}
// NavBar.propTypes={
//     title:PropTypes.string.isRequired,
//     about:PropTypes.string.isRequired
// }
// NavBar.defaultProps={
//     title:"TITLE HERE",
//     about:"ABOUT TEXT HERE"
// }
