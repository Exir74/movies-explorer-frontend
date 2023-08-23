import React from 'react';
import { isDisabled } from '@testing-library/user-event/dist/utils';

function ButtonMain({ text, isHide, isValid }) {
  const buttonShowClass = (`${isHide ? 'button-main_hide' : ''}`);
  return (
    <button
      type="submit"
      // button-main_error
      className={`button-main ${buttonShowClass} ${isValid ? '' : 'button-main_error'} hover`}
      // disabled={isValid}
    >
      {text}
    </button>
  );
}

export default ButtonMain;
