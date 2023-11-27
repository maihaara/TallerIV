// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navegacion from './navegacion';
import Singnup from './Singnup';
import Login from './login';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navegacion/>
        <Routes>
          <Route path="/singnup" element={<Singnup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;