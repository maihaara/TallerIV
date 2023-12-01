import React from 'react';
import { useParams } from 'react-router-dom';

function Infousuario() {
  const { role } = useParams();

  return (
    <div style={{ backgroundColor: 'blank', height: '10vh', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 0 }}>
      <div className='bg-white p-3 rounded w-25'>
        <h2> USUARIO </h2>
        <p>{`Rol: ${role}`}</p>
      </div>
    </div>
  );
}

export default Infousuario;