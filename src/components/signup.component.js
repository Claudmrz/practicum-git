import React, { Component } from 'react'
import Outernavbar from './outernavbar.component'
 import axios from 'axios';



export default class SignUp extends Component {

    constructor(props) {
        super(props)
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangePasswordConfirmation = this.onChangePasswordConfirmation.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            first_name: '',
            last_name: '',
            phone: '',
            email: '',
            password: '',
            password_confirmation: '',
        }
    }
    onChangeFirstName(e) {
        this.setState({ first_name: e.target.value })
    }
    onChangeLastName(e) {
        this.setState({ last_name: e.target.value })
    }
    onChangePhone(e) {
        this.setState({ phone: e.target.value })
    }
    onChangeUserEmail(e) {
        this.setState({ email: e.target.value })
    }
    onChangePassword(e) {
        this.setState({ password: e.target.value })
    }
    onChangePasswordConfirmation(e) {
        this.setState({ password_confirmation: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()

    if(this.state.first_name.length<2 || this.state.first_name.length>20 ){
      alert("First-name should be between 2-20 charaters")
    }
    if(this.state.last_name.length<2 || this.state.last_name.length>20 ){
      alert("Last-name should be between 2-20 charaters")
    }
    if(this.state.phone.length<5 || this.state.phone.length>12 ){
      alert("Phone number should be between 5-12 digits")
    }
    if(this.state.password.length<6 ){
      alert("Password should be greater then 5 charaters")
    }
    if(this.state.password !== this.state.password_confirmation ){
      alert("Enter same password in both fields")
    }

        const userObject = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            phone: this.state.phone,
            email: this.state.email,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation,
        };
        axios.post('http://127.0.0.1:8000/api/auth/register', userObject)
            .then((res) => {
               console.log(res,"aaaaaaaaaaa");
                if(res.data.message === "User successfully registered"){
                    alert("Registration Successful")
                    window.location = "/sign-in";
                }
            }).catch((error) => {
                if(error.response.data ===  "{\"email\":[\"The email has already been taken.\"]}"){
                  alert("The email has already been taken.")
                }
            });
        this.setState({ first_name: '', last_name: '', phone: '', email: '', password: '', password_confirmation: '' })
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
            name="firstname"
            value={this.state.first_name}
          />
         
        </div>
        <div className="mb-3">
          <label>Apellidos</label>
          <input 
           type="text"
           className="form-control" 
           placeholder="apellidos" 
           onChange={this.onChangeLastName}
           name="lastname"
           value={this.state.last_name} />
        </div>
        <div className="mb-3">
          <label>Teléfono</label>
          <input
            type="number"
            className="form-control"
            placeholder="teléfono"
            onChange={this.onChangePhone}
            name="phone"
            value={this.state.phone}
            
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
        <div className="mb-3">
          <label>Confirmar contraseña</label>
          <input
            type="password"
            className="form-control"
            placeholder="confirmar contraseña"
            onChange={this.onChangePasswordConfirmation}
            name="confirmpassword"
            value={this.state.password_confirmation}
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