import React, { Component } from 'react'
import { Navigate } from 'react-router-dom';
import logo from "./img/logo2 14.14.33.png";
import bg1 from "./img/ofer.png";
import bg2 from "./img/est1.png"

export default class Home extends Component {
  constructor(props) {
    super(props)
    const udata = localStorage.getItem('user')
    const odata = JSON.parse(udata)
    
    let loggedIN = true
    if (udata == null){
      loggedIN = false
    }
    this.state = {
      user : (odata) ? odata.user : '',
      loggedIN
    }
}
 
  render() {
    if(this.state.loggedIN === false){
      return  <Navigate to="/sign-in" />
    }
    return (
      <html>
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/home"></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/home"><img src={logo} alt="logo" width="50" height="auto"/></a>
              </li>
              </ul>
              <ul className="navbar-nav">
                 <a class="nav-link" href="/logout">|</a>
              </ul>
              <ul className="navbar-nav">
                 <a class="nav-link" href="/logout">Cerrar sesión</a>
              </ul>
          </div>
        </div>
      </nav>
      <section class="s-bloq-1">
  <div class="p-5 rounded-4 m-5">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="text-shadow">PRACTICUM</h1>
        <h4 class="text text-success px-4">¡ BIENVENIDA&nbsp;
    <span className="text-danger">{this.state.user.name} !</span></h4>
    <hr></hr>
    <h1 class="text2-shadow">"Encuentra la práctica ideal para impulsar tu carrera profesional."</h1>
    <hr></hr>
      </div>
    </div>
  <div class="container">
    <div class="row py-3">
      <div class="col-xxl-6 col-12 p-4">
      <a href="/ofert" class="link">
        <div class="card shadow text-center">
        <img src={bg1} alt="bg" width="100%" height="auto"/>
          <div class="card-body p-5">
    
            <h3 class="card-title s-bloq-4-text-tittle pt-5 pb-2">Ofertas</h3>
            <p class="card-text s-bloq-4-text">Ver todas las ofertas publicadas por las empresas</p>
          </div>
        </div>
        </a>
      </div>
      <div class="col-xxl-6 col-12 p-4">
      <a href="/profile">
        <div class="card shadow text-center">
        <img src={bg2} alt="bg" width="100%" height="auto"/>
          <div class="card-body p-5">

            <h3 class="card-title s-bloq-4-text-tittle py-2">Estudiantes</h3>
            <p class="card-text s-bloq-4-text">Ver todos los perfiles de los estudiantes</p>
          </div>
        </div>
        </a>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      </div>
      </html>
    )
      {/*<img src={bg} alt="bg" width="100%" height="auto"/>
      <h2 className="text-grey mt-5">¡ BIENVENIDO A PRACTICUM 
      <br></br>
    <span className="text-danger">{this.state.user.name} !</span></h2>*/}
  }
}
