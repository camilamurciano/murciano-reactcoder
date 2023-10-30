import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const CheckoutFormik = () => {
  const { handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      email: "",
      password: "",
      repetPassword: "",
    },

    onSubmit: (data) => {
      console.log("se envio");
      console.log(data);
    },

    validateOnChange: false, //esto hace que no se coloque en rojo apenas se escribe sin validar

    validationSchema: Yup.object({
      nombre: Yup.string()
        .required("Debes colocar un nombre")
        .min(2, "minimo 2 caracteres")
        .max(10, "maximo 10 caracteres"),
      apellido: Yup.string().required("Este campo es obligatorio"),
      email: Yup.string()
        .email("No te olvides de colocar el @")
        .required("El campo es obligatorio"),
      password: Yup.string()
        .required("El campo es obligatorio")
        .matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{4,8}$/, {
          //expresion regular
          message:
            "La contraseña debe tener al menos una mayuscula, un numero, caracter especial y un min-max de 4-8 ",
        }),
    }),
  });

  console.log(errors); // {nombre: "ewrrorasd", apellido: "dasdsadasd "}

  return (
    <div style={{ padding: "50px" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nombre"
          variant="outlined"
          name="nombre"
          color="secondary"
          onChange={handleChange}
          error={errors.nombre ? true : false}
          helperText={errors.nombre}
        />

        <TextField
          label="Apellido"
          variant="outlined"
          name="apellido"
          color="secondary"
          onChange={handleChange}
          error={errors.apellido ? true : false}
          helperText={errors.apellido}
        />

        <TextField
          label="Email"
          variant="outlined"
          name="email"
          color="secondary"
          onChange={handleChange}
          error={errors.email ? true : false}
          helperText={errors.email}
        />
        <TextField
          label="Contraseña"
          variant="outlined"
          name="password"
          color="secondary"
          onChange={handleChange}
          error={errors.password ? true : false}
          helperText={errors.password}
        />

        <Button variant="contained" type="submit" color="secondary">
          Enviar
        </Button>

        <Button variant={"outlined"} type="button" color="secondary">
          Cancelar
        </Button>
      </form>
    </div>
  );
};

export default CheckoutFormik;
{
  /*import { TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
const CheckoutFormik = () => {
  const { handleChange, handleSubmit } = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      email: "",
    },

    onSubmit: (data) => {
      console.log("se envio");
      console.log(data);
    },
  });

  return (
    <div style={{ padding: "50px" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nombre"
          variant="outlined"
          name="nombre"
          color="secondary"
          onChange={handleChange}
        />
        <TextField
          label="Apellido"
          variant="outlined"
          name="apellido"
          color="secondary"
          onChange={handleChange}
        />
        <TextField
          label="Email"
          variant="outlined"
          name="email"
          color="secondary"
          onChange={handleChange}
        />
        <Button variant="contained" color="secondary">
          Enviar
        </Button>
        <Button type="button" variant="contained" color="secondary">
          Cancelar
        </Button>
      </form>
    </div>
  );
};
export default CheckoutFormik;
*/
}
