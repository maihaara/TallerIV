import React from 'react';
import { useParams } from 'react-router-dom';

function Infousuario() {
  const { role } = useParams();

  // Lógica para obtener la información de la persona según el rol (puedes realizar una nueva consulta a la base de datos aquí)

  return (
    <div style={{ backgroundColor: 'blank', height: '10vh', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 0 }}>
      <div className='bg-white p-3 rounded w-25'>
        <h2> USUARIO </h2>
        <p>{`Nombre: [Nombre de la persona]`}</p>
        <p>{`Rol: ${role}`}</p>
      </div>
    </div>
  );
  
}

export default Infousuario;