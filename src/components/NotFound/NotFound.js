import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found">
      <h3 className="not-found__title">404</h3>
      <h4 className="not-found__description">Страница не найдена</h4>
      <Link className="not-found__back-link" to="./">Назад</Link>
    </div>
  );
}

export default NotFound;
