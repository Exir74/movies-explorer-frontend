import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonMain from '../ButtonMain/ButtonMain';
import CurrentUserContext from '../contexts/CurrentUser';

function Profile({ logOut, isLoggedIn }) {
  // const currentUser = { name: 22, email: 33 };
  const currentUser = useContext(CurrentUserContext);

  const onClickButton = () => {

  };

  const onClickExit = () => {
    localStorage.removeItem('inputMoviesValues');
    localStorage.removeItem('isShortMovie');
    localStorage.removeItem('movies');
    logOut();
  };
  return (
    <section className="profile">
      <h2 className="profile__greetings">{`Привет, ${currentUser.name}!`}</h2>
      <form className="profile__form">
        <span className="profile__item profile__row-name">
          Имя
        </span>
        <input
          className="profile__item profile__input  profile__input-name"
          name="name"
          id="profile-name"
          required
          value={currentUser.name || ''}
        />
        <div className="login__error-wrapper">
          <label
            htmlFor="password-input-login"
            className="login__input-message"
            id="name-input-error"
          >
            уцдкдуцкд
          </label>
        </div>
        <span className="profile__item profile__row-email">
          E-mail
        </span>
        <hr className="profile__line" />
        <input
          className="profile__item profile__input profile__input-email"
          name="email"
          id="profile-email"
          autoComplete="email"
          type="email"
          required
          value={currentUser.email || ''}
        />
      </form>
      <button
        type="button"
        // profile__btn-disabled
        className="profile__btn profile__edit-btn profile__btn-disabled1 hover"
        onClick={onClickButton}
      >
        Редактировать
      </button>
      <button
        type="button"
        onClick={onClickExit}
        // profile__btn-disabled
        className="profile__btn profile__exit-btn profile__btn-disabled1 hover"
      >
        <Link className="profile__exit-link" to="/">Выйти из аккаунта</Link>
      </button>
      {/* profile__error_enabled */}
      <span className="profile__error profile__error_enabled1">
        При обновлении профиля произошла ошибка.
      </span>
      <ButtonMain
        text="Сохранить"
        isHide
      />
    </section>
  );
}

export default Profile;
