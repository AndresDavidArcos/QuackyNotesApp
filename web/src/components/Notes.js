import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function Notes() {
  const location = useLocation();
  const user = location.state.user;
  console.log(location);

  return (
    <>
      {user && (
        <p>
          Datos del usuario logeado: {`id: ${user.id}, nombre: ${user.nombre}, apellidos: ${user.apellidos}`}
        </p>
      )}
      <ul>
        <li>Nota 1</li>
        <li>Nota 2</li>
        <li>Nota 3</li>
      </ul>
      <div style={{ position: 'absolute', top: '20px', right: '20px' }}>
        {user && (
          <Link to={{ pathname: "/change_data", state: { user: user } }}>  
            <button>Cambiar datos personales</button>
          </Link>
        )}
      </div>
    </>
  );
}

export default Notes;
