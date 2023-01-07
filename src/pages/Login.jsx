import React from 'react';
import Logo from '../components/Logo';
import addClass from '../utils/addClass';
import Slider from './login/Slider';
const Login = () => {
  addClass();
  return (
    <section className="login form-section">
      <div className="form-section__img">
        <div className="img-logo">
          <Logo />
          <Slider />
        </div>
        <img src="/img/fondo1.jpg" className="img-fondo" alt="fondo registro" />
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
        <h1>Registrate con Nosotros</h1>
        <form
          action=""
          className="form-section__form"
          aria-autocomplete="off"
          autoComplete="off"
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
            <button className="register-btn">Registrar</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
