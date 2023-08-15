import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="not-found">
      <h3 className="not-found__title">404</h3>
      <h4 className="not-found__description">Страница не найдена</h4>
      {/* <Link className="not-found__back-link" to={'./'}>Назад</Link> */}
      <button
        className="not-found__back-link"
        type="button"
        onClick={goBack}
      >
        Назад
      </button>
    </div>
  );
}

export default NotFound;
