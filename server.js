// server.js

const express = require('express');
const { Pool } = require('pg');
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();
const port = 8081;

// Configuración de la conexión a PostgreSQL
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'taller',
  password: '1107',
  port: 5432,
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ruta para el registro de usuarios
app.post('/signup', async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    // Hasheamos la contraseña antes de almacenarla
    const hashedPassword = await bcrypt.hash(password, 10);

    // Ajustamos la inserción de datos en la base de datos para usar la contraseña hasheada
    const result = await pool.query(
      'INSERT INTO Usuario (Nombre, CorreoElectronico, Contraseña, role_id) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, email, hashedPassword, role]
    );

    res.json({ success: true, message: 'Usuario registrado exitosamente', user: result.rows[0] });
  } catch (error) {
    console.error('Error en la consulta SQL:', error);
    res.status(500).json({ success: false, message: 'Error en el servidor' });
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await pool.query(
      'SELECT usuario.*, roles.name as role_name FROM Usuario JOIN roles ON usuario.role_id = roles.id WHERE CorreoElectronico = $1',
      [email]
    );

    if (user.rows.length > 0) {
      const hashedPassword = user.rows[0].contraseña;
      const passwordMatch = await bcrypt.compare(password, hashedPassword);

      if (passwordMatch) {
        res.json({
          success: true,
          message: 'Inicio de sesión exitoso',
          user: {
            name: user.rows[0].nombre,
            email: user.rows[0].correoElectronico,
            role: user.rows[0].role_id,
            role_name: user.rows[0].role_name,
          },
        });
      } else {
        res.json({ success: false, message: 'Credenciales inválidas' });
      }
    } else {
      res.json({ success: false, message: 'Credenciales inválidas' });
    }
  } catch (error) {
    console.error('Error al verificar credenciales:', error);
    res.status(500).json({ success: false, message: 'Error en el servidor' });
  }
});

// Ruta para cerrar sesión
app.post('/logout', (req, res) => {


  res.json({ success: true, message: 'Sesión cerrada exitosamente' });
});


app.get('/alumnos', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM alumno');
    res.json(result.rows);
  } catch (error) {
    console.error('Error al obtener la lista de alumnos:', error);
    res.status(500).json({ success: false, message: 'Error en el servidor' });
  }
});


app.post('/alumnos', async (req, res) => {
  const { nombre, apellido, edad, generoId, cursoId, seccionId, notaFinal, comportamiento, asistencia } = req.body;

  try {
    // Calculamos el resultado
    const promedio = (parseFloat(notaFinal) + parseFloat(comportamiento) + parseFloat(asistencia)) / 3;
    let resultado;

    
    if (promedio < 50) {
      resultado = 'Esta en riesgo';
    } else if (promedio >= 50 && promedio < 80) {
      resultado = 'Medio riesgo';
    } else {
      resultado = 'Esta bien';
    }
    const result = await pool.query(
      'INSERT INTO Alumno (nombre, apellido, edad, genero_id, curso_id, seccion_id, nota_final, comportamiento, asistencia, resultado) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *',
      [nombre, apellido, edad, generoId, cursoId, seccionId, notaFinal, comportamiento, asistencia, resultado]
    );

    res.json({ success: true, message: 'Alumno cargado exitosamente', alumno: result.rows[0] });
  } catch (error) {
    console.error('Error en la consulta SQL:', error);
    res.status(500).json({ success: false, message: 'Error en el servidor' });
  }
});

app.get('/alumnos/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query('SELECT * FROM alumno WHERE alumno_id = $1', [id]);

    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ success: false, message: 'Alumno no encontrado' });
    }
  } catch (error) {
    console.error('Error al obtener el alumno:', error);
    res.status(500).json({ success: false, message: 'Error en el servidor' });
  }
});

app.put('/alumnos/:id', async (req, res) => {
  const { id } = req.params;
  const { nombre, apellido, edad, curso_id, genero_id, seccion_id, nota_final, comportamiento, asistencia} = req.body;

  if (!nombre || !apellido) {
    return res.status(400).json({ success: false, message: 'Los campos nombre y apellido son obligatorios' });
  }

  try {
    // Calculamos el resultado
    const promedio = (parseFloat(nota_final) + parseFloat(comportamiento) + parseFloat(asistencia)) / 3;
    let resultado;

    if (promedio < 50) {
      resultado = 'Esta en riesgo';
    } else if (promedio >= 50 && promedio < 80) {
      resultado = 'Medio riesgo';
    } else {
      resultado = 'Esta bien';
    }

    const result = await pool.query(
      'UPDATE alumno SET nombre = $1, apellido = $2, curso_id = $3, genero_id = $4, seccion_id = $5, edad = $6, nota_final = $7, comportamiento = $8, asistencia = $9, resultado = $10 WHERE alumno_id = $11',
      [nombre, apellido, curso_id, genero_id, seccion_id, edad, nota_final, comportamiento, asistencia, resultado, id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ success: false, message: 'Alumno no encontrado' });
    }

    res.json({ success: true, message: 'Alumno actualizado exitosamente' });
  } catch (error) {
    console.error('Error al editar el alumno:', error);
    res.status(500).json({ success: false, message: 'Error en el servidor' });
  }
});

app.delete('/alumnos/:id', async (req, res) => {
  const { id } = req.params;

  try {
    // Imprimir mensaje de depuración
    console.log(`Intentando eliminar alumno con ID: ${id}`);

    // Realizar la lógica para eliminar el alumno con el ID proporcionado
    const result = await pool.query('DELETE FROM alumno WHERE alumno_id = $1', [id]);

    if (result.rowCount === 0) {
      return res.status(404).json({ success: false, message: 'Alumno no encontrado' });
    }

    res.json({ success: true, message: 'Alumno eliminado exitosamente' });
  } catch (error) {
    console.error('Error al eliminar el alumno:', error);
    res.status(500).json({ success: false, message: 'Error en el servidor' });
  }
});

app.get('/generos', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM genero');
    res.json(result.rows);
  } catch (error) {
    console.error('Error al obtener la lista de géneros:', error);
    res.status(500).json({ success: false, message: 'Error en el servidor' });
  }
});


app.get('/generos/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query('SELECT * FROM genero WHERE id = $1', [id]);

    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ success: false, message: 'Género no encontrado' });
    }
  } catch (error) {
    console.error('Error al obtener el género:', error);
    res.status(500).json({ success: false, message: 'Error en el servidor' });
  }
});




app.get('/cursos', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM curso');
    res.json(result.rows);
  } catch (error) {
    console.error('Error al obtener la lista de cursos:', error);
    res.status(500).json({ success: false, message: 'Error en el servidor' });
  }
});



app.get('/cursos/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query('SELECT * FROM curso WHERE curso_id = $1', [id]);

    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ success: false, message: 'Curso no encontrado' });
    }
  } catch (error) {
    console.error('Error al obtener el curso:', error);
    res.status(500).json({ success: false, message: 'Error en el servidor' });
  }
});


app.get('/secciones', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM seccion');
    res.json(result.rows);
  } catch (error) {
    console.error('Error al obtener la lista de secciones:', error);
    res.status(500).json({ success: false, message: 'Error en el servidor' });
  }
});


app.get('/secciones/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query('SELECT * FROM seccion WHERE id = $1', [id]);

    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ success: false, message: 'secciones no encontradas' });
    }
  } catch (error) {
    console.error('Error al obtener las secciones:', error);
    res.status(500).json({ success: false, message: 'Error en el servidor' });
  }
});

app.listen(port, () => {
  console.log(`Servidor backend corriendo en http://localhost:${port}`);
});
