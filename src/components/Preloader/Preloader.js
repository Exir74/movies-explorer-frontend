import React from 'react';
import './Preloader.css';

function Preloader() {
  console.log('opa');
  return (
    <div className="preloader preloader_disabled1">
      <div className="preloader__container">
        <span className="preloader__round" />
      </div>
    </div>
  );
}

export default Preloader;
