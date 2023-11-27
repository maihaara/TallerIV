import React from 'react';
import { Link } from 'react-router-dom';

const Navigacion = () => {
  return (
    <div className="container">
      <h1>*Insertar nombre de empresa*</h1>
      <div className="button-container">
        <Link to="/login" className="nav-link">Login </Link>
        <Link to="/singnup" className="nav-link">Singnup </Link>
      </div>
    </div>
  );
};

export default Navigacion;