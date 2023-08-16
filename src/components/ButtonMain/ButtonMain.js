import React from 'react';

function ButtonMain({ text, isHide }) {
  const buttonShowClass = (`${isHide ? 'button-main_hide' : ''}`);
  return (
    <button
      type="submit"
      // button-main_error
      className={`button-main ${buttonShowClass} hover`}
    >
      {text}
    </button>
  );
}

export default ButtonMain;
