import React from 'react';
import { useParams, Link } from 'react-router-dom';


function Welcome() {
  const { role } = useParams();

  return (
    <div style={{ backgroundColor: 'blank', height: '10vh', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 0 }}>
      <div className='bg-white p-3 rounded w-25'>
        <h2>Bienvenido</h2>
        <p>{`Has iniciado sesión como ${role}`}</p>
        <Link to="/pantalla">
        <button style={{backgroundColor: 'maroon',padding: '10px',borderRadius: '5px',border: 'none',color: 'white',cursor: 'pointer',display: 'block',  margin: '0 auto',  }}> Inicio</button>
        </Link>
        <Link to="/infousuario">
        <button style={{ backgroundColor: 'maroon', padding: '10px', borderRadius: '5px', border: 'none', color: 'white', cursor: 'pointer', display: 'block', margin: '0 auto' }}> Usuario </button>
        </Link>
       
      </div>
    </div>
  );
}

export default Welcome;
