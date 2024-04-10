import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from "./img/logo2 14.14.33.png";


export default class Outernavbar extends Component {
  render() {
    return (
      <div>
         <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                    <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                  <img src={logo} alt="logo" width="50" height="auto"/>
                  </Link>
                </li>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                    Iniciar sesión
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    Registrarse
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
