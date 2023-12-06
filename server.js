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
  password: 'postgres',
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
  // Puedes realizar cualquier acción adicional necesaria al cerrar sesión
  // ...

  res.json({ success: true, message: 'Sesión cerrada exitosamente' });
});


app.listen(port, () => {
  console.log(`Servidor backend corriendo en http://localhost:${port}`);
});
