import React from 'react';
import { Link } from 'react-router-dom';
import ButtonMain from '../ButtonMain/ButtonMain';

function Register({ FormHeader, logo }) {
  return (
    <section className="register-section">
      <FormHeader logo={logo} greeting="Добро пожаловать!" />
      {/* <FormBody> */}
      <form className="register">
        <span className="register__input-name">Имя</span>
        <input
          className="register__input register__input_userName"
          name="name"
          id="name-input-register"
          // placeholder="E-mail"
          type="text"
          required
        />
        {/* <div className="register__error-wrapper"> */}
        {/*  <label */}
        {/*    htmlFor="email-input-register" */}
        {/*    className="register__input-message" */}
        {/*    id="name-input-error" */}
        {/*  > */}
        {/*    Что-то пошло не так... */}
        {/*  </label> */}
        {/* </div> */}
        <span className="register__input-name">E-mail</span>
        <input
          className="register__input register__input_email"
          name="email"
          id="email-input-register"
          // placeholder="E-mail"
          type="email"
          required
          autoComplete="email"
        />
        {/* <div className="register__error-wrapper"> */}
        {/*  <label */}
        {/*    htmlFor="email-input-register" */}
        {/*    className="register__input-message" */}
        {/*    id="name-input-error" */}
        {/*  > */}
        {/*    Что-то пошло не так... */}
        {/*  </label> */}
        {/* </div> */}
        <span className="register__input-name">Пароль</span>
        <input
          className="register__input register__input_password"
          name="password"
          id="password-input-register"
          // placeholder="Пароль"
          autoComplete="current-password"
          type="password"
          required
          minLength={6}
          maxLength={10}
        />
        <div className="register__error-wrapper">
          <label
            htmlFor="password-input-register"
            className="register__input-message"
            id="name-input-error"
          >
            Что-то пошло не так...
          </label>
        </div>
        <div className="register__form-button">
          <ButtonMain
            text="Войти"
            isHide={false}
          />
        </div>
        <div className="register__footer">
          <span className="register__footer_text">Уже зарегистрированы? </span>
          <Link to="/signin" className="register__footer_link hover">Войти</Link>
        </div>
      </form>
      {/* </FormBody> */}
    </section>
  );
}

export default Register;
