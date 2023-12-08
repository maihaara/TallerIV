// navegacion.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navegacion({ loggedInUser, onLogout }) {
  const handleLogout = () => {
    // Agrega cualquier lógica adicional necesaria al cerrar sesión
    // ...

    // Llama a la función de cerrar sesión proporcionada por el padre (App.js)
    onLogout();
  };

  return (
    <div style={{ background: 'maroon', height: '15vh', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'white' }}>
      <h2 style={{ margin: '0', paddingLeft: '10px', fontSize: '1.5rem', fontFamily: 'Georgia, serif' }}>Teach For All</h2>
      <nav style={{ display: 'flex', gap: '10px', marginRight: '10px' }}>
        {loggedInUser ? (
          <>
            <p>{`Bienvenido, ${loggedInUser.name}`}</p>
            <Link to="/Welcome" style={{ textDecoration: 'none' }}>
              <button style={{ backgroundColor: 'white', padding: '8px', borderRadius: '5px', border: 'none', color: '#8f1117', cursor: 'pointer', fontSize: '0.9rem' }}>Inicio</button>
            </Link>
            <Link to="/listaalumnos" style={{ textDecoration: 'none' }}>
              <button style={{ backgroundColor: 'white', padding: '8px', borderRadius: '5px', border: 'none', color: '#8f1117', cursor: 'pointer', fontSize: '0.9rem' }}>Lista de Alumnos</button>
            </Link>
            <button onClick={handleLogout} style={{ backgroundColor: 'white', padding: '8px', borderRadius: '5px', border: 'none', color: '#8f1117', cursor: 'pointer', fontSize: '0.9rem' }}>Cerrar Sesión</button>
          </>
        ) : (
          <>
            <Link to="/signup" style={{ textDecoration: 'none' }}>
              <button style={{ backgroundColor: 'white', padding: '8px', borderRadius: '5px', border: 'none', color: '#8f1117', cursor: 'pointer', fontSize: '0.9rem' }}>Registrarse</button>
            </Link>
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <button style={{ backgroundColor: 'white', padding: '8px', borderRadius: '5px', border: 'none', color: '#8f1117', cursor: 'pointer', fontSize: '0.9rem' }}>Iniciar Sesión</button>
            </Link>
          </>
        )}
      </nav>
    </div>
  );
}

export default Navegacion;
