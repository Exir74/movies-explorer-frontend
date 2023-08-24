import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonMain from '../ButtonMain/ButtonMain';
import CurrentUserContext from '../contexts/CurrentUser';
import useValidation from '../../utils/hooks/useValidation';

function Profile({ logOut, isLoggedIn }) {
  const [isSameData, setIsSameData] = useState(true);
  const [isEditMode, setIsEditMode] = useState(false);
  const currentUser = useContext(CurrentUserContext);

  const {
    values, handleChange, resetFrom, errors, isValid,
  } = useValidation();

  const onClickEdit = () => {
    setIsEditMode(true);
  };

  const submitHandler = () => {
    console.log('opa');
  };

  const handleOnChange = (evt) => {
    handleChange(evt);
    if ((evt.target.value === currentUser.name) || (evt.target.value === currentUser.email)) {
      setIsSameData(true);
    } else {
      setIsSameData(false);
    }
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
          type="text"
          pattern="[A-Za-zА-ЯЁа-яё \-]{1,}"
          minLength={2}
          maxLength={20}
          required
          onChange={handleOnChange}
          value={values.name || currentUser.name || ''}
        />
        <div className="profile__error-wrapper profile__error-wrapper_name">
          <label
            htmlFor="password-input-login"
            className="profile__input-message"
            id="name-input-error"
          >
            {errors.name || ''}
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
          onChange={handleOnChange}
          value={values.email || currentUser.email || ''}
        />
        <div className="profile__error-wrapper profile__error-wrapper_email">
          <label
            htmlFor="password-input-login"
            className="profile__input-message"
            id="name-input-error"
          >
            {errors.email || ''}
          </label>
        </div>
      </form>
      {!isEditMode && (
        <button
          type="button"
          // profile__btn-disabled
          className="profile__btn profile__edit-btn profile__btn-disabled1 hover"
          onClick={onClickEdit}
        >
          Редактировать
        </button>
      )}
      {!isEditMode && (
        <button
          type="button"
          onClick={onClickExit}
          // profile__btn-disabled
          className="profile__btn profile__exit-btn profile__btn-disabled1 hover"
        >
          <Link className="profile__exit-link" to="/">Выйти из аккаунта</Link>
        </button>
      )}
      {/* profile__error_enabled */}
      <span className="profile__error profile__error_enabled1">
        При обновлении профиля произошла ошибка.
      </span>
      {isEditMode && (
        <ButtonMain
          text="Сохранить"
          isHide={false}
          isValid={(isValid && !isSameData)}
          submitHandler={submitHandler}
        />
      )}
    </section>
  );
}

export default Profile;
