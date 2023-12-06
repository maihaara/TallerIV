import { useLocation, Link } from 'react-router-dom';


function Welcome() {
  const location = useLocation();
  const { user } = location.state || {};

  return (
    <div style={{ backgroundColor: 'blank', height: '15vh', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'Georgia, serif', margin: 0 }}>
      <div className='bg-white p-101 rounded w-10000'>
        <h2 style={{ color: 'white' }}>Bienvenido</h2> {/* Aplicar estilo para hacer el texto blanco */}
        {user ? (
          <>
            <p style={{ fontSize: '2.9em', height: '2vh', display: 'flex' }}>{`Has iniciado sesión como ${user.name}`}</p> {/* Aumentar el tamaño del texto */}
            <p>{`Rol: ${user.role_name}`}</p>
          </>
        ) : (
          <p>Usuario no encontrado</p>
        )}
        <Link to="/listaalumnos">
          <button style={{ backgroundColor: 'maroon', padding: '15px', borderRadius: '9px', border: 'none', color: 'white', cursor: 'pointer', display: 'block', margin: '0 auto', }}> Agregar alumnos</button>
        </Link>
        <Link to="/infousuario" state={{ user }}> 
          <button style={{ backgroundColor: 'maroon', padding: '15px', borderRadius: '9px', border: 'none', color: 'white', cursor: 'pointer', display: 'block', margin: '0 auto' }}>   Usuario   </button>
        </Link>
        
      </div>
    </div>
  );
}

export default Welcome;