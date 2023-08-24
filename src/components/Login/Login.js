import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ButtonMain from '../ButtonMain/ButtonMain';
import useValidation from '../../utils/hooks/useValidation';

function Login({
  FormHeader, logo, handleOnClick, serverError,
}) {
  const {
    values, handleChange, resetFrom, errors, isValid, setIsValid,
  } = useValidation();

  useEffect(() => {
    resetFrom({}, {}, true);
  }, [resetFrom]);

  const submitHandler = () => {
    if (Object.keys(values).length === 0) {
      setIsValid(false);
    } else {
      handleOnClick(values.email, values.password);
    }
  };
  return (
    <section className="login-section">
      <FormHeader logo={logo} greeting="Рады видеть!" />
      {/* <FormBody> */}
      <form className="login">
        <span className="login__input-name">E-mail</span>
        <input
          className={`login__input login__input_email ${errors.email ? 'login__input_error' : ''}`}
          name="email"
          id="email-input-login"
          type="email"
          required
          autoComplete="email"
          value={values.email || ''}
          onChange={handleChange}
        />
        <div className="login__error-wrapper">
          <label
            htmlFor="email-input-login"
            className="login__input-message"
            id="name-input-error"
          >
            {errors.email || ''}
          </label>
        </div>
        <span className="login__input-name">Пароль</span>
        <input
          className={`login__input login__input_password ${errors.password ? 'login__input_error' : ''}`}
          name="password"
          id="password-input-login"
          // placeholder="Пароль"
          autoComplete="current-password"
          type="password"
          required
          minLength={6}
          maxLength={10}
          value={values.password || ''}
          onChange={handleChange}
        />
        <div className="login__error-wrapper">
          <label
            htmlFor="password-input-login"
            className="login__input-message"
            id="name-input-error"
          >
            {errors.password || ''}
          </label>
        </div>
        <div className="login__form-button">
          <span className="register__footer_error">{serverError}</span>
          <ButtonMain
            text="Войти"
            isHide={false}
            isValid={isValid}
            submitHandler={submitHandler}
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
