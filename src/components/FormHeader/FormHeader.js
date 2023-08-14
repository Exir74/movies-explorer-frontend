import React from 'react';
import { Link } from 'react-router-dom';

function FormHeader({ logo }) {
  return (
    <div className="form-header">
      <Link
        to="/"
        className="form-header__link"
      >
        <img className="form-header__img" src={logo} alt="лого" />
      </Link>
      <h3 className="form-header__text">
        Рады видеть!
      </h3>
    </div>
  );
}

export default FormHeader;
