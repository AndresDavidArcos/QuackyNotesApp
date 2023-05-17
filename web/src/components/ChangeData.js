import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function ChangeData() {
  const location = useLocation();
  const user = location.state.user;
  const [userId, setUserId] = useState(user.id);
  const [nombre, setNombre] = useState(user.nombre);
  const [apellidos, setApellidos] = useState(user.apellidos);
  const [celular, setCelular] = useState(user.celular);
  const [correo, setCorreo] = useState(user.correo);
  const [contrasena, setContrasena] = useState('');

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`/api/users/${userId}`, {
        nombre,
        apellidos,
        celular,
        correo,
        contrasena
      });
      const updatedUser = response.data;
      console.log('Datos actualizados:', updatedUser);
      // Puedes realizar alguna acción adicional, como mostrar una notificación de éxito
    } catch (error) {
      console.error('Error al actualizar los datos:', error);
      // Puedes manejar el error y mostrar una notificación de error
    }
  };

  return (
    <div>
      <h2>Actualizar datos personales</h2>
      <form onSubmit={handleUpdate}>
        <label>
          Nombre:
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </label>
        <br />
        <label>
          Apellidos:
          <input
            type="text"
            value={apellidos}
            onChange={(e) => setApellidos(e.target.value)}
          />
        </label>
        <br />
        <label>
          Celular:
          <input
            type="text"
            value={celular}
            onChange={(e) => setCelular(e.target.value)}
          />
        </label>
        <br />
        <label>
          Correo electrónico:
          <input
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            readOnly
          />
        </label>
        <br />
        <label>
          Contraseña:
          <input
            type="password"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Actualizar</button>
      </form>
    </div>
  );
}

export default ChangeData;
