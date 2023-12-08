import React, { useState, useEffect } from 'react';
import axios from 'axios';

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

  return (
    <div>
      <h2>Lista de Alumnos</h2>
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
          </tr>
        </thead>
        <tbody>
          {alumnos.map(alumno => (
            <tr key={alumno.alumno_id}>
              <td>{alumno.alumno_id}</td>
              <td>{alumno.nombre}</td>
              <td>{alumno.apellido}</td>
              <td>{alumno.edad}</td>
              <td>{alumno.curso}</td>
              <td>{alumno.genero}</td>
              <td>{alumno.seccion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaAlumnos;
