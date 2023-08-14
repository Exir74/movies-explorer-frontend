import React from 'react';
import { Link } from 'react-router-dom';
import { textUser } from '../../utils/constants';
import ButtonMain from '../ButtonMain/ButtonMain';

function Profile() {
  return (
    <section className="profile">
      <h2 className="profile__greetings">{`Привет, ${textUser.name}!`}</h2>
      <form className="profile__form">
        <span className="profile__item profile__row-name">
          Имя
        </span>
        <input
          className="profile__item profile__input  profile__input-name"
          name="name"
          id="profile-name"
          required
          // readOnly
          value={textUser.name}
        />
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
          // readOnly
          value={textUser.email}
        />
      </form>
      <button
        type="button"
        // profile__btn-disabled
        className="profile__btn profile__edit-btn profile__btn-disabled1 hover"
      >
        Редактировать
      </button>
      <button
        type="button"
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
