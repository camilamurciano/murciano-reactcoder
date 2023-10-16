import { Button, TextField } from "@mui/material";
import "./login.css";
export const Login = () => {
  return (
    <div className="login">
      <h2> Inicia Sesion</h2>
      <div className="login-1">
        <TextField
          color="secondary"
          id="outlined-basic"
          label="Email"
          variant="outlined"
        />
        <TextField
          color="secondary"
          id="outlined-basic"
          label="Contraseña"
          type="password"
          variant="outlined"
        />
        <Button variant="contained">Ingresar</Button>
      </div>
    </div>
  );
};
