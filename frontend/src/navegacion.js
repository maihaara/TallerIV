import React from 'react';
import { Link } from 'react-router-dom';

function Navegacion() {
  return (
    <div style={{ background: 'maroon', height: '15vh', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'white' }}>
      <h2 style={{ margin: '0', paddingLeft: '10px', fontSize: '1.5rem', fontFamily: 'Georgia, serif' }}>Teach For All</h2>
      <nav style={{ display: 'flex', gap: '10px', marginRight: '10px' }}>
        <Link to="/signup" style={{ textDecoration: 'none' }}>
          <button style={{ backgroundColor: 'white', padding: '8px', borderRadius: '5px', border: 'none', color: '#8f1117', cursor: 'pointer', fontSize: '0.9rem' }}>Registrarse</button>
        </Link>
        <Link to="/login" style={{ textDecoration: 'none' }}>
          <button style={{ backgroundColor: 'white', padding: '8px', borderRadius: '5px', border: 'none', color: '#8f1117', cursor: 'pointer', fontSize: '0.9rem' }}>Iniciar Sesión</button>
        </Link>
      </nav>
    </div>
  );
}

export default Navegacion;



