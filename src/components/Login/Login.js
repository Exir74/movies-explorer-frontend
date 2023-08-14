import React from 'react';
import { Link } from 'react-router-dom';
import ButtonMain from '../ButtonMain/ButtonMain';

function Login({ FormHeader, logo }) {
  return (
    <section className="login-section">
      <FormHeader logo={logo} />
      {/* <FormBody> */}
      <form className="login">
        <span className="login__input-name">E-mail</span>
        <input
          className="login__input login__input_email"
          name="email"
          id="email-input-login"
          // placeholder="E-mail"
          type="email"
          required
          autoComplete="email"
        />
        {/* <div className="login__error-wrapper"> */}
        {/*  <label */}
        {/*    htmlFor="email-input-login" */}
        {/*    className="login__input-message" */}
        {/*    id="name-input-error" */}
        {/*  > */}
        {/*    Что-то пошло не так... */}
        {/*  </label> */}
        {/* </div> */}
        <span className="login__input-name">Пароль</span>
        <input
          className="login__input login__input_password"
          name="password"
          id="password-input-login"
          // placeholder="Пароль"
          autoComplete="current-password"
          type="password"
          required
          minLength={6}
          maxLength={10}
        />
        <div className="login__error-wrapper">
          <label
            htmlFor="password-input-login"
            className="login__input-message"
            id="name-input-error"
          >
            Что-то пошло не так...
          </label>
        </div>
        <div className="login__form-button">
          <ButtonMain
            text="Войти"
            isHide={false}
          />
        </div>
        <div className="login__footer">
          <span className="login__footer_text">Ещё не зарегистрированы? </span>
          <Link to="/signup" className="login__footer_link hover">Регистрация</Link>
        </div>
      </form>
      {/* </FormBody> */}
    </section>
  );
}

export default Login;
