// CargarAlumno.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function CargarAlumno() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [edad, setEdad] = useState('');
  const [generoId, setGeneroId] = useState('');
  const [cursoId, setCursoId] = useState('');
  const [seccionId, setSeccionId] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [generos, setGeneros] = useState([]);
  const [cursosData, setCursosData] = useState([]);
  const [secciones, setSecciones] = useState([]);

  const cursos = [
    { curso_id: 1, descripcion: 'Matemáticas' },
    { curso_id: 2, descripcion: 'Física' },
    // Agrega más cursos si es necesario
  ];

useEffect(() => {
  // Obtener la lista de géneros al cargar el componente
  axios.get('http://localhost:8081/generos')
    .then(response => setGeneros(response.data))
    .catch(error => console.error('Error al obtener la lista de géneros:', error));

  // Obtener la lista de cursos al cargar el componente
  axios.get('http://localhost:8081/cursos')
    .then(response => setCursosData(response.data))
    .catch(error => console.error('Error al obtener la lista de cursos:', error));

  // Obtener la lista de secciones al cargar el componente
  axios.get('http://localhost:8081/secciones')
    .then(response => setSecciones(response.data))
    .catch(error => console.error('Error al obtener la lista de secciones:', error));
}, []);

  const handleCargarAlumno = async () => {
    try {
      const response = await axios.post('http://localhost:8081/alumnos', {
        nombre,
        apellido,
        edad,
        generoId,
        cursoId,
        seccionId,
      });

      if (response.data.success) {
        setMensaje('Alumno cargado exitosamente');
      } else {
        setMensaje('Error al cargar el alumno');
      }
    } catch (error) {
      console.error('Error al enviar los datos:', error);
      setMensaje('Error al cargar el alumno');
    }
  };

  return (
    <div style={{fontFamily: 'Georgia, serif' }}>
      <h2>Cargar Alumno</h2>
      <form style={{ backgroundColor: 'white', height: '40vh', display: 'flex', justifyContent: 'center', alignItems: 'center' , fontFamily: 'Georgia, serif', fontSize: '1.5rem', fontWeight: 'bold'}}>
      <div>
          <label htmlFor='nombre'>Nombre:</label>
          <input type='text' name='nombre' onChange={(e) => setNombre(e.target.value)} />
        </div>
        <div>
          <label htmlFor='apellido'>Apellido:</label>
          <input type='text' name='apellido' onChange={(e) => setApellido(e.target.value)} />
        </div>
        <div>
          <label htmlFor='edad'>Edad:</label>
          <input type='text' name='edad' onChange={(e) => setEdad(e.target.value)} />
        </div>
        <div>
          <label htmlFor='generoId'>Género:</label>
          <select name='generoId' value={generoId} onChange={(e) => setGeneroId(e.target.value)}>
            <option value=''>Selecciona un género</option>
            {generos.map(genero => (
              <option key={genero.id} value={genero.id}>
                {genero.descripcion}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor='cursoId'>Curso:</label>
          <select name='cursoId' value={cursoId} onChange={(e) => setCursoId(e.target.value)}>
            <option value=''>Selecciona un curso</option>
            {cursos.map(curso => (
              <option key={curso.curso_id} value={curso.curso_id}>
                {curso.descripcion}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor='seccionId'>Sección:</label>
          <select name='seccionId' value={seccionId} onChange={(e) => setSeccionId(e.target.value)}>
            <option value=''>Selecciona una sección</option>
            {secciones.map(seccion => (
              <option key={seccion.id} value={seccion.id}>
                {seccion.descripcion}
              </option>
            ))}
          </select>
        </div>
       
      </form>
      <button type='button' onClick={handleCargarAlumno} style={{ backgroundColor: 'maroon', padding: '10px', borderRadius: '5px', border: 'none', color: 'white', cursor: 'pointer', display: 'block', margin: '0 auto'  }}> Agregar alumno</button>
      <p>{mensaje} </p>
      <Link to="/listaalumnos" style={{ textDecoration: 'none' }}>
        <button type='button' style={{ backgroundColor: 'maroon', padding: '10px', borderRadius: '5px', border: 'none', color: 'white', cursor: 'pointer', display: 'block', margin: '0 auto'}}> Ver Lista de Alumnos</button>
      </Link>
    </div>
  );
}

export default CargarAlumno;
