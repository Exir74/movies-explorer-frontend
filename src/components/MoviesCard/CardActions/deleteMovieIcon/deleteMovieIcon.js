import React from 'react';
import { deleteIcon } from '../../../../utils/constants';

function deleteMovieIcon() {
  return (
    <button
      className="delete-movie hover"
      type="button"
    >
      <img
        className="delete-movie__icon"
        alt="Сохранен"
        src={deleteIcon}
      />
    </button>
  );
}

export default deleteMovieIcon;
