// Navegacion.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navegacion() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navegacion;