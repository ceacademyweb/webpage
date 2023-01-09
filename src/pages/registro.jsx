import { userState, useState } from 'react';
import Logo from '../components/Logo';
import addClass from '../utils/addClass';
import Slider from './login/Slider';
import {NavLink} from "react-router-dom";
const Registro = () => {
  addClass();
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });
  const submit = () => {
    e.preventDefault();
    console.log(user);
  };
  const handleChange = ({ target: { name, value } }) => {
    setUser({
      ...user,
      [name]: value,
    });
  };
  return (
    <section className="login form-section">
      <div className="form-section__img">
        <div className="img-logo">
          <Logo />
          <Slider />
        </div>
        <img
          src="/img/login-bg.jpg"
          className="img-fondo"
          alt="fondo registro"
          onSubmit={submit}
        />
      </div>
      <div className="form-section__container">
        <div className="form-section__header">
          <a className="form-section__logo1" href="/">
            <img src="/img/logo.svg" alt="" />
            <Slider />
          </a>
          <NavLink to="/login" className="ini-sesion">
            Inicia Sesión
          </NavLink>
        </div>
        <h1>Registrate con Nosotros</h1>
        <form
          action=""
          className="form-section__form"
          autoComplete="off"
          onSubmit={submit}
        >
          <div className="group">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder=" "
              autoComplete="off"
              onChange={handleChange}
            />
          </div>
          <div className="group">
            <label htmlFor="email1">Correo Electrónico</label>
            <input
              type="email"
              name="email"
              id="email1"
              placeholder=" "
              autoComplete="off"
              onChange={handleChange}
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
              onChange={handleChange}
            />
          </div>
          <div className="group">
            <label htmlFor="password-validator">Repetir Contraseña</label>
            <input
              type="password"
              name="password-validator"
              id="password-validator"
              placeholder=" "
              autoComplete="off"
              onChange={handleChange}
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

export default Registro;
