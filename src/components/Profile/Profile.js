import React from 'react';
import { textUser } from '../../utils/constants';

function Profile() {
  return (
    <section className="profile">
      <h2 className="profile__greetings">{`Привет, ${textUser.name}`}</h2>
      <form className="profile__form">
        <span className="profile__row-nama">
          Имя
        </span>

        {/* onChange={handleChange} */}
        {/* className="authorization__input popup__input_type_email" */}
        {/* name="email" */}
        {/* id="email-input" */}
        {/* placeholder="Email" */}
        {/* autoComplete='email' */}
        {/* type="email" */}
        {/* value={values.email ?? ''} */}
        {/* required */}
        <input
          className="profile__input"
          name="name"
          id="profile-name"
          required
          // readOnly
        />

        <span className="profile__row-nama">
          E-mail
        </span>
        <input
          className="profile__input"
          name="email"
          id="profile-email"
          autoComplete="email"
          type="email"
          required
          // readOnly
        />
      </form>
      <button className="" />
    </section>
  );
}

export default Profile;
