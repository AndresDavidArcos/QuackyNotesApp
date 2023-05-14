import React from 'react';
import { Link } from 'react-router-dom';

function Notes() {
  return (
    <div style={{ position: 'relative' }}>
      <ul>
        <li>Nota 1</li>
        <li>Nota 2</li>
        <li>Nota: No se usar variables de entorno</li>
      </ul>
      <div style={{ position: 'absolute', top: '20px', right: '20px' }}>
        <Link to="/change_data">  
          <button>Cambiar datos personales</button>
        </Link>
      </div>
    </div>
  );
}

export default Notes;
