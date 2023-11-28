import React, { useState } from 'react';
import axios from 'axios';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8081/signup', {
        name,
        email,
        password,
        role,
      });

      console.log(response.data);

      if (response.data.success) {
        const { role } = response.data.user;
        alert(`Registro exitoso como ${role}`);
      } else {
        console.log('Error en el registro');
      }
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  };

  return (
    <div style={{ backgroundColor: 'maroon', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className='bg-white p-3 rounded w-25'>
        <h2>Registrarse</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='name'><strong>Nombre y Apellido</strong></label>
            <input type="text" placeholder='Ingrese el nombre y apellido' name='name' className='form-control rounded-0' onChange={(e) => setName(e.target.value)} />
          </div>
          <div className='mb-3'>
            <label htmlFor='correo'><strong>Correo</strong></label>
            <input type="text" placeholder='Ingrese Correo' name='correo' className='form-control rounded-0' onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='mb-3'>
            <label htmlFor='password'><strong>Clave</strong></label>
            <input type="password" placeholder='Ingrese la contraseña' name='Enter password' className='form-control rounded-0' onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className='mb-3'>
            <label htmlFor='role'><strong>Rol</strong></label>
            <select
              name='role'
              className='form-control rounded-0'
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value=''>Selecciona un rol</option>
              <option value='1'>Admin</option>
              <option value='2'>Usuario</option>
              {/* Agrega más opciones según tus roles */}
            </select>
          </div>
          <button type='submit' className='btn btn-danger w-100 rounded-0'>Signup</button>
          <div style={{ margin: '10px 0' }}></div>
          <button type='submit' className='btn btn-default border w-100 rounded-0' style={{ backgroundColor: 'lightcoral', color: 'white' }}>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
