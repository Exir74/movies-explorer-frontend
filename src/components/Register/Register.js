import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ButtonMain from '../ButtonMain/ButtonMain';
import useValidation from '../../utils/hooks/useValidation';

function Register({
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
      handleOnClick(values.name, values.email, values.password);
    }
  };
  return (
    <section className="register-section">
      <FormHeader logo={logo} greeting="Добро пожаловать!" />
      {/* <FormBody> */}
      <form className="register">
        <span className="register__input-name">Имя</span>
        <input
          className={`register__input register__input_userName ${errors.name ? 'register__input_error' : ''}`}
          name="name"
          id="name-input-register"
          type="text"
          pattern="[A-Za-zА-ЯЁа-яё \-]{1,}"
          minLength={2}
          maxLength={20}
          required
          value={values.name || ''}
          onChange={handleChange}
        />
        <div className="register__error-wrapper">
          <label
            htmlFor="email-input-register"
            className="register__input-message"
            id="name-input-error"
          >
            {errors.name || ''}
          </label>
        </div>
        <span className="register__input-name">E-mail</span>
        <input
          className={`register__input register__input_email ${errors.email ? 'register__input_error' : ''}`}
          name="email"
          id="email-input-register"
          // placeholder="E-mail"
          type="email"
          required
          autoComplete="email"
          value={values.email || ''}
          onChange={handleChange}
        />
        <div className="register__error-wrapper">
          <label
            htmlFor="email-input-register"
            className="register__input-message"
            id="name-input-error"
          >
            {errors.email || ''}
          </label>
        </div>
        <span className="register__input-name">Пароль</span>
        <input
          className={`register__input register__input_password ${errors.password ? 'register__input_error' : ''}`}
          name="password"
          id="password-input-register"
          autoComplete="current-password"
          type="password"
          required
          minLength={6}
          maxLength={10}
          value={values.password || ''}
          onChange={handleChange}
        />
        <div className="register__error-wrapper">
          <label
            htmlFor="password-input-register"
            className="register__input-message"
            id="name-input-error"
          >
            {errors.password || ''}
          </label>
        </div>
        <div className="register__form-button">
          <span className="register__footer_error">{serverError}</span>
          <ButtonMain
            text="Зарегистрироваться"
            isHide={false}
            isValid={isValid}
            submitHandler={submitHandler}
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
