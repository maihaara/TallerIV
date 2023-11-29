// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navegacion from './navegacion';
import Signup from './Signup';
import Login from './login'; 
import Welcome from './Welcome';
import './App.css';
import Pantalla from './pantalla';

function App() {
  return (
    <Router>
      <div>
        <Navegacion />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/welcome/:role" element={<Welcome />} />
          <Route path="/pantalla" element={<Pantalla />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;