// EditarAlumno.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EditarAlumno = () => {
  const { id } = useParams();
  useEffect(() => {
  if (id) {
	    fetchData();
	  }
	}, [id]);
  const [alumno, setAlumno] = useState({
    nombre: '',
    apellido: '',
    edad: 0,
    cursoId: 0,
    generoId: 0,
    seccionId: 0,
  });
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:8081/alumnos/${id}`);
      setAlumno(response.data);
    } catch (error) {
      console.error('Error al obtener los datos del alumno:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAlumno((prevAlumno) => ({ ...prevAlumno, [name]: value }));
  };

  const handleGuardar = async () => {
    try {
      await axios.put(`http://localhost:8081/alumnos/${id}`, alumno);
      // Puedes redirigir al usuario a la lista de alumnos u otra página después de editar
    } catch (error) {
      console.error('Error al editar el alumno:', error);
    }
  };

  return (
    <div style={{fontFamily: 'Georgia, serif' }}>
    <h2>Editar Alumno</h2>
   
    <form style={{ backgroundColor: 'white', height: '40vh', display: 'flex', justifyContent: 'center', alignItems: 'center' , fontFamily: 'Georgia, serif', fontSize: '0.8rem', fontWeight: 'bold'}}>
      
        {/* Campos de entrada para editar los datos del alumno */}
        <label>Nombre:</label>
        <input type="text" name="nombre" value={alumno.nombre} onChange={handleInputChange} />

        <label>Apellido:</label>
        <input type="text" name="apellido" value={alumno.apellido} onChange={handleInputChange}  />

        <label>Edad:</label>
        <input type="number" name="edad" value={alumno.edad} onChange={handleInputChange} />

        <label>Curso:</label>
        <input type="number" name="cursoId" value={alumno.cursoId} onChange={handleInputChange} />

        <label>Genero:</label>
        <input type="number" name="generoId" value={alumno.generoId} onChange={handleInputChange} />

        <label>Sección:</label>
        <input type="number" name="seccionId" value={alumno.seccionId} onChange={handleInputChange} />


      </form>
      <button type="button" onClick={handleGuardar} style={{ backgroundColor: 'maroon', padding: '15px', borderRadius: '10px', border: 'none', color: 'white', cursor: 'pointer', display: 'block', margin: '0 auto'  }}> Editar alumno</button>

    </div>
  );
};

export default EditarAlumno;