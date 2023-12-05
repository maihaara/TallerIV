import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Componente funcional AddStudentForm que recibe una función onSave como prop
const AddStudentForm = ({ onSave }) => {
  // Estado local para manejar la información del estudiante
  const [student, setStudent] = useState({
    nombre: '',
    apellido: '',
    edad: '',
    genero: '',
    grado: '',
    seccion: '',
  });

  // Función para manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Actualiza el estado con los valores ingresados
    setStudent((prevStudent) => ({ ...prevStudent, [name]: value }));
  };

  // Función para manejar el evento de guardar
  const handleSave = (e) => {
    e.preventDefault();
    // Llama a la función onSave pasándole la información del estudiante
    onSave(student);
    // Resetea el estado para limpiar el formulario después de guardar
    setStudent({
      nombre: '',
      apellido: '',
      edad: '',
      genero: '',
      grado: '',
      seccion: '',
    });
  };

  return (
    <div className='bg-maroon p-10 rounded w-100'>
      <h2>Agregar Nuevo Estudiante</h2>
      <form style={{ backgroundColor: 'maroon', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        {/* Grupo de campos para el nombre, apellido y edad */}
        <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '15px' }}>
          <div style={{ marginRight: '20px' }}>
            <label htmlFor="nombre" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>Nombre:</label>
            <input type="text" id="nombre" name="nombre" value={student.nombre} onChange={handleChange} style={{ fontSize: '1.2rem' }} />
          </div>
          <div style={{ marginRight: '20px' }}>
            <label htmlFor="apellido" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>Apellido:</label>
            <input type="text" id="apellido" name="apellido" value={student.apellido} onChange={handleChange} style={{ fontSize: '1.2rem' }} />
          </div>
          <div>
            <label htmlFor="edad" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>Edad:</label>
            <input type="text" id="edad" name="edad" value={student.edad} onChange={handleChange} style={{ fontSize: '1.2rem' }} />
          </div>
        </div>
        {/* Grupo de campos para el género, grado y sección */}
        <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '15px' }}>
          <div style={{ marginRight: '20px' }}>
            <label htmlFor="genero" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>Género:</label>
            <select id="genero" name="genero" value={student.genero} onChange={handleChange} style={{ fontSize: '1.2rem' }}>
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
            </select>
          </div>
          <div style={{ marginRight: '20px' }}>
            <label htmlFor="grado" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>Grado:</label>
            <input type="text" id="grado" name="grado" value={student.grado} onChange={handleChange} style={{ fontSize: '1.2rem' }} />
          </div>
          <div>
            <label htmlFor="seccion" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>Sección:</label>
            <input type="text" id="seccion" name="seccion" value={student.seccion} onChange={handleChange} style={{ fontSize: '1.2rem' }} />
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <button type="button" onClick={handleSave} style={{ backgroundColor: 'white', color: 'maroon', padding: '10px', borderRadius: '5px', border: 'none', cursor: 'pointer', marginRight: '10px', fontSize: '1.2rem' }}>
            Guardar Alumno
          </button>
          <Link to="/listaalumnos" style={{ textDecoration: 'none' }}>
            <button style={{ backgroundColor: 'white', color: 'maroon', padding: '10px', borderRadius: '5px', border: 'none', cursor: 'pointer', fontSize: '1.2rem' }}>
              Ver Lista de Alumnos
            </button>
          </Link>
        </div>
      </form>
    </div>
 
      
   
  );
};

export default AddStudentForm;




