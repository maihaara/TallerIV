// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navegacion from './navegacion';
import Signup from './Signup';
import Login from './Login';
import Welcome from './Welcome';
function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (user) => {
    setLoggedInUser(user);
  };

  const handleLogout = () => {
    // Agrega cualquier lógica adicional necesaria al cerrar sesión
    // ...

    // Limpia el usuario actual al cerrar sesión
    setLoggedInUser(null);
  };

  return (
    <Router>
      <div>
        <Navegacion loggedInUser={loggedInUser} onLogout={handleLogout} />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
