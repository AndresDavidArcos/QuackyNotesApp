import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from './NavBar';
import Nota from './Nota';
import { Box } from '@mui/material';

export default function Notes(props) {
  const location = useLocation();
  const user = location.state.user;
  const baseUrl = window.location.protocol + "//" + window.location.hostname + ":8000/api/";

  const [notas, setNotas] = useState([]);

  useEffect(() => {
    loadingNotes()
  }, [])

  const loadingNotes = async (event) => {
    try {
      const response = await fetch(baseUrl + 'notas/user/' + user.id, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }

      });
      const data = await response.json();

      if (response.status === 200) {
        setNotas(data)

        console.log('bien',data);
      } else {
        console.log('error', data);
      }

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <NavBar user={user}></NavBar>
      {/* {user && (
        <p>Datos del usuario logeado: {`id: ${user.id}, nombre: ${user.nombre}, apellidos: ${user.apellidos}`}</p>
      )} */}
      <Box
        sx={{ display: 'flex' }}>

        {/* <Nota key={1} nota={notas}></Nota> */}
        {
          notas.map((n, index) => {
            return (
              <Nota key={n.titulo} nota={n}></Nota>
            )
          })
        }{

        }
      </Box>

    </>
  );
}

