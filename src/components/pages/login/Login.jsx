import { Button, TextField } from "@mui/material";
import { useState } from "react";
import "./login.css";
export const Login = () => {
  const [userInfo, setUserInfo] = useState({
    nombre: "",
    apellido: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    nombre: null,
    apellido: null,
    email: null,
  });

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInfo);
  };

  console.log(errors);
  return (
    <div className="login">
      <h2> Inicia Sesion</h2>
      <div className="login-1">
        <form onSubmit={handleSubmit}>
          <TextField
            type="text"
            name="nombre"
            color="secondary"
            id="outlined-basic"
            label="Nombre"
            variant="outlined"
            onChange={handleChange}
          />

          <span style={{ color: "crimson", fontSize: " 10px" }}>
            {errors.nombre}
          </span>

          <TextField
            color="secondary"
            id="outlined-basic"
            label="Apellido"
            type="text"
            name="apellido"
            variant="outlined"
            onChange={handleChange}
          />

          <span style={{ color: "crimson", fontSize: " 10px" }}>
            {errors.apellido}
          </span>

          <TextField
            color="secondary"
            id="outlined-basic"
            label="Email"
            type="text"
            name="email"
            variant="outlined"
            onChange={handleChange}
          />

          <span style={{ color: "crimson", fontSize: " 10px" }}>
            {errors.email}
          </span>

          <Button variant="contained" color="secondary">
            Enviar
          </Button>
          <Button
            type="button"
            variant="contained"
            color="secondary"
            onClick={() => console.log("anulado")}
          >
            Cancelar
          </Button>
        </form>
      </div>
    </div>
  );
};
