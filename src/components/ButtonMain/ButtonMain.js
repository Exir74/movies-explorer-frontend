import React from 'react';

function ButtonMain({ text, isHide }) {
  const buttonShowClass = (`${isHide ? 'button-main_hide' : ''}`);
  return (
    <button
      type="submit"
      className={`button-main ${buttonShowClass} button-main_error hover`}
    >
      {text}
    </button>
  );
}

export default ButtonMain;
