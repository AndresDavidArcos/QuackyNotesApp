import React from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from'./NavBar'

function Notes() {
  const location = useLocation();
  const user = location.state;
  console.log(location)
  return (
    <>
    <NavBar></NavBar>
    {user && (
      <p>Datos del usuario logeado: {`id: ${user.id}, nombre: ${user.nombre}, apellidos: ${user.apellidos}`}</p>
    )}
      <ul>
      <li>Nota 1</li>
      <li>Nota 2</li>
      <li>Nota 3</li>
    </ul>
    </>
  );
}

export default Notes;
