import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function Welcome() {
  const location = useLocation();
  const { user } = location.state || {};

  return (
    <div style={{ backgroundColor: 'blank', height: '10vh', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 0 }}>
      <div className='bg-white p-3 rounded w-25'>
        <h2>Bienvenido</h2>
        {user ? (
          <>
            <p>{`Has iniciado sesión como ${user.name}`}</p>
          </>
        ) : (
          <p>Usuario no encontrado</p>
        )}
        <Link to="/pantalla">
          <button style={{ backgroundColor: 'maroon', padding: '10px', borderRadius: '5px', border: 'none', color: 'white', cursor: 'pointer', display: 'block', margin: '0 auto', }}> Agregar alumnos</button>
        </Link>
        <Link to="/infousuario" state={{ user }}>
          <button style={{ backgroundColor: 'maroon', padding: '10px', borderRadius: '5px', border: 'none', color: 'white', cursor: 'pointer', display: 'block', margin: '0 auto' }}> Usuario </button>
        </Link>
      </div>
    </div>
  );
}

export default Welcome;