import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await fetch(`http://${process.env.BACKEND_DOMAIN_NAME}:8000/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      });
      
      const data = await response.json();
      if(response.status === 200){
        console.log(data);
        navigate('/notes')
      }else{
        console.error(data)
      }

    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label>
        Usuario:
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <br />
      <label>
        Contraseña:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Iniciar sesión</button>
    </form>
    <Link to="/register">Registrarse</Link>

    
    </>
  );
}
