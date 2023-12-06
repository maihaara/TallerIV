// Signup.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup({ onSignup }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post('http://localhost:8081/signup', {
      name,
      email,
      password,
      role,
    });

    if (response.data.success) {
      onSignup(response.data.user);
      alert('Registro exitoso');
      navigate('/welcome', { state: { user: response.data.user } }); // Redireccionar a la pantalla de bienvenida
    } else {
      console.log('Error en el registro');
    }
  } catch (error) {
    console.error('Error al enviar los datos:', error);
  }
  };

   return (
    <div style={{ backgroundColor: 'maroon', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' , fontFamily: 'Georgia, serif' }}>
      <div className='bg-white p-9 rounded w-25'>
        <h2 style={{ color: 'white', fontSize: '2em' }}>Registrarse</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-5'>
          <label htmlFor='name' style={{ color: 'white', fontSize: '1.9em',  justifyContent: 'center' }}><strong>Nombre y Apellido: </strong></label>
            <input type="text" placeholder='Ingrese el nombre y apellido' name='name' className='form-control rounded-0' onChange={(e) => setName(e.target.value)} style={{ fontSize: '1.3em', padding: '5px' }} />
          </div>
          <div className='mb-3'>
          <label htmlFor='correo' style={{ color: 'white', fontSize: '1.9em',  justifyContent: 'center' }}><strong>Correo: </strong></label>
            <input type="text" placeholder='Ingrese Correo' name='correo' className='form-control rounded-0' onChange={(e) => setEmail(e.target.value)} style={{ fontSize: '1.3em', padding: '5px' }}/>
          </div>
          <div className='mb-3'>
          <label htmlFor='password' style={{ color: 'white', fontSize: '1.9em',  justifyContent: 'center' }}><strong>Clave: </strong></label>
            <input type="password" placeholder='Ingrese la contraseña' name='Enter password' className='form-control rounded-0' onChange={(e) => setPassword(e.target.value)} style={{ fontSize: '1.3em', padding: '5px' }}/>
          </div>
          <div className='mb-3'>
          <label htmlFor='role' style={{ color: 'white', fontSize: '1.9em',  justifyContent: 'center' }}><strong>Rol: </strong></label>
            <select
              name='role'
              
              className='form-control rounded-0'
              value={role}
              onChange={(e) => setRole(e.target.value)}
              style={{ fontSize: '1.3em', padding: '5px' }}
            >
              <option value=''>Selecciona un rol</option>
              <option value='1'>Profesor</option>
              <option value='2'>Director</option>
              <option value='3'>EXP</option>
            </select>
          </div>
          
          <button style={{ backgroundColor: 'white', padding: '15px', borderRadius: '5px', border: 'none', color: '#8f1117', width: '100%', marginTop: '5px', cursor: 'pointer', fontSize: '1.0rem' ,justifyContent: 'center'}}>Registrarse</button>
          <div style={{ margin: '10px 0' }}></div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
