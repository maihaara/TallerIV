// EditarAlumno.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EditarAlumno = () => {
  const { id } = useParams();
  const [alumno, setAlumno] = useState({
    nombre: '',
    apellido: '',
    edad: 0,
    cursoId: '', // Cambiado a cursoId en lugar de curso
    generoId: '', // Cambiado a generoId en lugar de genero
    seccionId: '', // Cambiado a seccionId en lugar de seccion
  });
  const [cursos, setCursos] = useState([]);
  const [generos, setGeneros] = useState([]);
  const [secciones, setSecciones] = useState([]);

  useEffect(() => {
    fetchData();
    // Obtener la lista de cursos al cargar el componente
    axios.get('http://localhost:8081/cursos')
      .then(response => setCursos(response.data))
      .catch(error => console.error('Error al obtener la lista de cursos:', error));

    // Obtener la lista de géneros al cargar el componente
    axios.get('http://localhost:8081/generos')
      .then(response => setGeneros(response.data))
      .catch(error => console.error('Error al obtener la lista de géneros:', error));

    // Obtener la lista de secciones al cargar el componente
    axios.get('http://localhost:8081/secciones')
      .then(response => setSecciones(response.data))
      .catch(error => console.error('Error al obtener la lista de secciones:', error));
  }, [id]);

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
    <div style={{ fontFamily: 'Georgia, serif' }}>
      <h2>Editar Alumno</h2>

      <form style={{ backgroundColor: 'white', height: '40vh', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'Georgia, serif', fontSize: '0.8rem', fontWeight: 'bold' }}>

        {/* Campos de entrada para editar los datos del alumno */}
        <label>Nombre:</label>
        <input type="text" name="nombre" value={alumno.nombre} onChange={handleInputChange} />

        <label>Apellido:</label>
        <input type="text" name="apellido" value={alumno.apellido} onChange={handleInputChange} />

        <label>Edad:</label>
        <input type="number" name="edad" value={alumno.edad} onChange={handleInputChange} />

        <label>Curso:</label>
        <select name="cursoId" value={alumno.cursoId} onChange={handleInputChange}>
          <option value="">Selecciona un curso</option>
          {cursos.map(curso => (
            <option key={curso.curso_id} value={curso.curso_id}>
              {curso.descripcion}
            </option>
          ))}
        </select>

        <label>Género:</label>
        <select name="generoId" value={alumno.generoId} onChange={handleInputChange}>
          <option value="">Selecciona un género</option>
          {generos.map(genero => (
            <option key={genero.id} value={genero.id}>
              {genero.descripcion}
            </option>
          ))}
        </select>

        <label>Sección:</label>
        <select name="seccionId" value={alumno.seccionId} onChange={handleInputChange}>
          <option value="">Selecciona una sección</option>
          {secciones.map(seccion => (
            <option key={seccion.id} value={seccion.id}>
              {seccion.descripcion}
            </option>
          ))}
        </select>

      </form>
      <button type="button" onClick={handleGuardar} style={{ backgroundColor: 'maroon', padding: '15px', borderRadius: '10px', border: 'none', color: 'white', cursor: 'pointer', display: 'block', margin: '0 auto' }}> Editar alumno</button>

    </div>
  );
};

export default EditarAlumno;
