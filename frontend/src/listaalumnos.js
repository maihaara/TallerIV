import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ListaAlumnos = () => {
  const [alumnos, setAlumnos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Obtener la lista de alumnos
        const alumnosResponse = await axios.get('http://localhost:8081/alumnos');
        const alumnosData = alumnosResponse.data;

        // Para cada alumno, hacer solicitudes adicionales para obtener las descripciones
        const alumnosConDescripciones = await Promise.all(alumnosData.map(async (alumno) => {
          const generoResponse = await axios.get(`http://localhost:8081/generos/${alumno.genero_id}`);
          const cursoResponse = await axios.get(`http://localhost:8081/cursos/${alumno.curso_id}`);
          const seccionResponse = await axios.get(`http://localhost:8081/secciones/${alumno.seccion_id}`);

          return {
            ...alumno,
            genero: generoResponse.data.descripcion,
            curso: cursoResponse.data.descripcion,
            seccion: seccionResponse.data.descripcion,
          };
        }));

        setAlumnos(alumnosConDescripciones);
      } catch (error) {
        console.error('Error al obtener la lista de alumnos:', error);
      }
    };

    fetchData();
  }, []);

  const handleEliminarAlumno = async (alumnoId) => {
    try {
      // Realizar la solicitud para eliminar el alumno
      await axios.delete(`http://localhost:8081/alumnos/${alumnoId}`);

      // Actualizar la lista de alumnos después de la eliminación
      const nuevosAlumnos = alumnos.filter((alumno) => alumno.alumno_id !== alumnoId);
      setAlumnos(nuevosAlumnos);
    } catch (error) {
      console.error('Error al eliminar el alumno:', error);
    }
  };

  return (
    <div style={{ backgroundColor: 'white', height: '70vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontFamily: 'Georgia, serif' }}>
      <h2 style={{ fontSize: '3em', margin: '0' }}>Lista de Alumnos</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Edad</th>
            <th>Curso</th>
            <th>Genero</th>
            <th>Seccion</th>
            <th>Nota Final</th>
            <th>Comportamiento</th>
            <th>Asistencia</th>
            <th>Resultado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {alumnos.map((alumno) => (
            <tr key={alumno.alumno_id}>
              <td>{alumno.alumno_id}</td>
              <td>{alumno.nombre}</td>
              <td>{alumno.apellido}</td>
              <td>{alumno.edad}</td>
              <td>{alumno.curso}</td>
              <td>{alumno.genero}</td>
              <td>{alumno.seccion}</td>
              <td>{alumno.nota_final}</td>
              <td>{alumno.comportamiento}</td>
              <td>{alumno.asistencia}</td>
              <td>{alumno.resultado}</td>
              <td>
                <Link to={`/editar-alumno/${alumno.alumno_id}`}>
                  <button style={{ backgroundColor: 'maroon', padding: '8px', borderRadius: '5px', border: 'none', color: 'white', cursor: 'pointer', fontSize: '0.9rem', marginRight: '5px' }}>Editar</button>
                </Link>
                <button onClick={() => handleEliminarAlumno(alumno.alumno_id)} style={{ backgroundColor: 'red', padding: '8px', borderRadius: '5px', border: 'none', color: 'white', cursor: 'pointer', fontSize: '0.9rem' }}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaAlumnos;