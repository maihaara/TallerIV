// Pantalla.js
import React from 'react';
import AddStudentForm from './AddStudentForm';

function Pantalla() {
  const handleSaveStudent = (student) => {
    // Aquí deberías enviar los datos del estudiante al servidor o hacer lo que sea necesario
    console.log('Guardando estudiante:', student);
  };

  return (
    <div>
      <AddStudentForm onSave={handleSaveStudent} />
      {/* Otro contenido de la pantalla aquí */}
    </div>
  );
}

export default Pantalla;
