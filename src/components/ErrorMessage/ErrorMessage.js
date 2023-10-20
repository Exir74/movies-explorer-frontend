import React from 'react';

function ErrorMessage({ moviesApiErrorMessage }) {
  return (
    <h3 className="error-message">{moviesApiErrorMessage}</h3>
  );
}

export default ErrorMessage;
