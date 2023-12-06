// Logout.js

import React from 'react';
import axios from 'axios';

const Logout = ({ onLogout }) => {
  const handleLogout = async () => {
    try {
      const response = await axios.post('http://localhost:8081/logout');

      if (response.data.success) {
        alert('Sesión cerrada exitosamente');
        onLogout();
      } else {
        console.log('Error al cerrar sesión');
      }
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <div>
      <button onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  );
};

export default Logout;
