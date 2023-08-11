import React from 'react';
import { saveIcons } from '../../../../utils/constants';

function SavedIcon() {
  return (
    <img
      className="saved-icon"
      alt="Сохранен"
      src={saveIcons}
    />
  );
}

export default SavedIcon;
