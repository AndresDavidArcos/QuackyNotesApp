import React, { useState } from "react";
import axios from "axios";

function handleSubmit(event) {
  event.preventDefault();
  const datosFormulario = {
    nombre: event.target.nombre.value,
    apellidos: event.target.apellidos.value,
    celular: event.target.celular.value,
    email: event.target.email.value,
  };
  axios
    .post("http://backend:8000/api/register", datosFormulario)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  axios
    .post("http://backend:8000/api/register", datosFormulario)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function Formulario() {
  const [datos, setDatos] = useState({
    nombre: "",
    apellidos: "",
    celular: "",
    email: "",
  });

  const handleChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input
          type="text"
          name="nombre"
          value={datos.nombre}
          onChange={handleChange}
        />
      </label>
      <label>
        Apellidos:
        <input
          type="text"
          name="apellidos"
          value={datos.apellidos}
          onChange={handleChange}
        />
      </label>
      <label>
        Celular:
        <input
          type="text"
          name="celular"
          value={datos.celular}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={datos.email}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Formulario;
