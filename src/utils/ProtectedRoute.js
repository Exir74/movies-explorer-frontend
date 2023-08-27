import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRouteElement({ element: Component, ...props }) {
  if (Component !== '') {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return (props.isLoggedIn ? <Component {...props} /> : <Navigate to="/signin" replace />);
  }
  return (props.isLoggedIn ? '' : <Navigate to="/signin" replace />);
}

export default ProtectedRouteElement;
