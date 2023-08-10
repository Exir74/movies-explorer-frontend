import React from 'react';
import { saveIcons } from '../../../../../utils/constants';

function SavedMovie() {
  return (
    <img
      className="savedMovie"
      alt="Сохранен"
      src={saveIcons}
    />
  );
}

export default SavedMovie;
