// Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8081/login', {
        email,
        password,
      });

      if (response.data.success) {
        onLogin(response.data.user); // Llamada a la función onLogin para establecer el usuario
        navigate('/welcome', { state: { user: response.data.user } });
      } else {
        console.log('Credenciales inválidas');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };
  return (
    <div style={{ backgroundColor: 'maroon', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' , fontFamily: 'Georgia, serif' }}>
      <div className='bg-white p-9 rounded w-25'>
        <h2 style={{ color: 'white', fontSize: '2em' }}>Iniciar sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
          <label htmlFor='correo' style={{ color: 'white', fontSize: '1.9em' , alingItems: 'center'}}><strong>Correo: </strong></label>
            <input
              type='text'
              placeholder='Enter Correo'
              name='correo'
              className='form-control rounded-0'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ fontSize: '1.3em', padding: '5px' }}
            />
          </div>
          <div className='mb-3'>
          <label htmlFor='password' style={{ color: 'white', fontSize: '1.9em',  justifyContent: 'center' }}><strong>Contraseña: </strong></label>
            <input
              type='password'
              placeholder='Ingrese la contraseña'
              name='Enter password'
              className='form-control rounded-0'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ fontSize: '1.3em', padding: '5px' }}
            />
          </div>
          <button style={{ backgroundColor: 'white', padding: '15px', borderRadius: '5px', border: 'none', color: '#8f1117', width: '100%', marginTop: '5px', cursor: 'pointer', fontSize: '1.0rem' ,justifyContent: 'center'}}>Iniciar Sesión</button>
          <div style={{ margin: '10px 0' }}></div>
        </form>
      </div>
    </div>
  );
}
export default Login;