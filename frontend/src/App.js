// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navegacion from './Navegacion';
import Signup from './Signup'; // Cambié el nombre del archivo y la importación
import Login from './Login'; // Cambié el nombre del archivo y la importación
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navegacion />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;