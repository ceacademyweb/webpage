import {useEffect, useState, useRef} from 'react';
import Logo from '../components/Logo';
import addClass from '../utils/addClass';
import Slider from './login/Slider';
import axios from "axios";
// import {ajax} from "../utils/ajax.js";
const Login = () => {
  addClass();
  // const [dataForm, setDataForm] = useState(null)
  useEffect(()=>{
  },[])
  const handledSubmit =  (e)=>{
    e.preventDefault();
    const fd = new FormData(e.target)
    const dataForm ={
      email : fd.get('email'),
      password: fd.get('password')
    }
    // console.log(dataForm)
    e.target.querySelector('button').innerHTML='cargando'
    // console.log(ajax('/login', dataForm, 'post'))
    const options = {
      method: 'POST',
      data: JSON.stringify(dataForm),
      headers : {
        'content-type': 'application/json'
      }
    }
    axios('http://localhost:5000/login',options)
      .then(res=> {
        e.target.querySelector('button').innerHTML='correcto'
        console.log(res)
      })
      .catch(err=> {
        e.target.querySelector('button').innerHTML='error'
        console.log(err)
      })
  }
  return (
    <section className="login form-section">
      <div className="form-section__img">
        <div className="img-logo">
          <Logo />
          <Slider />
        </div>
        <img src="/img/login-bg.jpg" className="img-fondo" alt="fondo registro" />
      </div>
      <div className="form-section__container">
        <div className="form-section__header">
          <a className="form-section__logo1" href="/">
            <img src="/img/logo.svg" alt="" />
            <Slider />
          </a>
          {/* <a href="/login" className="ini-sesion">
            Inicia Sesión
          </a> */}
        </div>
        <h1>Inicia Sesión</h1>
        <form
          action=""
          className="form-section__form"
          aria-autocomplete="off"
          autoComplete="off"
          onSubmit={handledSubmit}
        >
          <div className="group">
            <label htmlFor="email1">Correo Electrónico</label>
            <input
              type="email"
              name="email"
              id="email1"
              placeholder=" "
              autoComplete="off"
            />
          </div>
          <div className="group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder=" "
              autoComplete="off"
            />
          </div>
          <div className="form-registro__footer">
            <div className="notes show"></div>
            <button className="register-btn">Ingresar</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
