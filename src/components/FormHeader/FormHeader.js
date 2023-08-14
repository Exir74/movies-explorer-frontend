import React from 'react';
import { Link } from 'react-router-dom';

function FormHeader({ logo, greeting }) {
  return (
    <div className="form-header">
      <Link
        to="/"
        className="form-header__link"
      >
        <img className="form-header__img" src={logo} alt="лого" />
      </Link>
      <h3 className="form-header__text">
        {greeting}
      </h3>
    </div>
  );
}

export default FormHeader;
