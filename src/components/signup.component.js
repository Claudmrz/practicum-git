import React, { Component } from 'react'
import Outernavbar from './outernavbar.component'
 import axios from 'axios';



export default class SignUp extends Component {

    constructor(props) {
        super(props)
        this.onChangeName = this.onChangeFirstName.bind(this);
        this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            name: '',
            email: '',
            password: '',
        }
    }
    onChangeFirstName(e) {
        this.setState({ name: e.target.value })
    }
    onChangeUserEmail(e) {
        this.setState({ email: e.target.value })
    }
    onChangePassword(e) {
        this.setState({ password: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()

    if(this.state.name.length<2 || this.state.first_name.length>20 ){
      alert("El nombre debe tener entre 2 y 20 caracteres.")
    }
    if(this.state.password.length<6 ){
      alert("La contraseña debe tener más de 5 caracteres.")
    }

        const userObject = {
            first_name: this.state.name,
            email: this.state.email,
            password: this.state.password,
        };
        axios.post('http://localhost/api/register', userObject)
            .then((res) => {
               console.log(res,"aaaaaaaaaaa");
                if(res.data.message === "Usuario registrado correctamente."){
                    alert("Registro correcto.")
                    window.location = "/sign-in";
                }
            }).catch((error) => {
                if(error.response.data ===  "{\"email\":[\"El email ya ha sido registrado.\"]}"){
                  alert("El email ya ha sido registrado.")
                }
            });
        this.setState({ name: '', email: '', password: ''})
    }


  render() {
    return (
        <div className='App'>
        <Outernavbar/>
        <div className="auth-wrapper">
      <div className="auth-inner">
      <form onSubmit={this.onSubmit}>


        <h3>Registrate</h3>
        <div>
        <div className="mb-3">
          <label>Nombre</label>
          <input
            type="text"
            className="form-control"
            placeholder="nombre"
            onChange={this.onChangeFirstName}
            name="name"
            value={this.state.name}
          />
         
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="email"
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
            placeholder="contraseña"
            onChange={this.onChangePassword}
            name="password"
            value={this.state.password}
          />
        </div>
        <div className="d-grid">
        <button type="submit" className="btn btn-success text-uppercase">
            Registarme
          </button>
        </div>
        <p className="forgot-password text-right">
          Ya tienes cuenta? <a href="/sign-in">Iniciar sesión</a>
        </p>
        </div>
      </form>
      </div>
      </div>
      </div>
     
    )
  }
}