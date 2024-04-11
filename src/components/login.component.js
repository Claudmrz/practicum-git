import React, { Component } from 'react'
import Outernavbar from './outernavbar.component'
 import axios from 'axios';
import { Navigate  } from 'react-router-dom';


export default class Login extends Component {
    constructor(props) {
        super(props)
        const udata = localStorage.getItem('user')
        let loggedIN = true
        if (udata == null){
          loggedIN = false
        }
        this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            email: '',
            password: '',
            loggedIN
        }
    }

    onChangeUserEmail(e) {
        this.setState({ email: e.target.value })
    }
    onChangePassword(e) {
        this.setState({ password: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()
       

        const userObject = {
            email: this.state.email,
            password: this.state.password
        };
        axios.post('http://localhost/api/login', userObject)
            .then((res) => {
              console.log(res);
               if(res.status=== 200){
                this.setState({
                  loggedIN : true
                })
                localStorage.setItem('user', JSON.stringify(res.data))
               }
            }).catch((error) => {
                console.log(error)
                alert("Email o contraseña incorrectos. Inténtelo de nuevo.")
            });
        this.setState({ email: '', password: ''})
    }

  render() {
    if (this.state.loggedIN){
      return <Navigate  to="/dashboard"/>
    }
    return (
        <div className='App'>
            <Outernavbar/>
            <div className="auth-wrapper">
            {/*<img src={bg} alt="bg" width="100%" height="auto"/>*/}
          <div className="auth-inner">
      <form onSubmit={this.onSubmit}>

        <h3>Iniciar sesión</h3>
        <p className="forgot-password text-right">
          No tienes cuenta?<a href="/sign-up"> Únete a nosotros</a>
        </p>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={this.onChangeUserEmail}
            name="email"
            value={this.state.email}
          />
        </div>
        <div className="mb-3">
          <label>Contraseña</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={this.onChangePassword}
            name="password"
            value={this.state.password}
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label text-success" htmlFor="customCheck1">
              Recuérdame
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-success text-uppercase" >
        Entrar
          </button>
        </div>
      </form>
      </div>
      </div>
      </div>
    )
  }
}