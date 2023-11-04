import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import * as Yup from "yup";
import { CartContextt } from "../../../context/CartContextt";
import { db } from "../../../firebaseConfig";
import { Link } from "react-router-dom";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";

const CheckoutFormik = () => {
  const [orderId, setOrderId] = useState(null);
  const { cart, getTotalPrice, clearCart } = useContext(CartContextt);

  const total = getTotalPrice();

  const enviarOrden = (formDetails) => {
    let orden = {
      buyer: formDetails,
      items: cart,
      total,
      time: serverTimestamp(),
    };

    const ordersCollection = collection(db, "ordenes");
    addDoc(ordersCollection, orden).then((res) => setOrderId(res.id));
    cart.forEach((elemento) => {
      updateDoc(doc(db, "products", elemento.id), {
        stock: elemento.stock - elemento.quantity,
      });
    });
    clearCart();
  };
  const { handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      email: "",
      password: "",
      repetPassword: "",
    },

    onSubmit: (formDetails) => {
      enviarOrden(formDetails);
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
        .matches(/^(?=.*[!@#$%^&.-?_*])(?=.*[a-z])(?=.*[A-Z]).{4,8}$/, {
          //expresion regular
          message:
            "La contraseña debe tener al menos una mayuscula, un numero, caracter especial y un min-max de 4-8 ",
        }),
    }),
  });

  return (
    <>
      {orderId ? (
        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          <h3>
            {" "}
            Gracias por comprar en nuestra tienda, su N° de compra es: {orderId}
          </h3>
          <Link to="/">
            <Button variant="contained" color="secondary">
              VOLVER AL INICIO
            </Button>
          </Link>
        </div>
      ) : (
        <div>
          <h2 style={{ textAlign: "center", color: "violet" }}>
            Logueate para finalizar la compra
          </h2>
          <div style={{ padding: "50px", gap: "20px" }}>
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
        </div>
      )}
    </>
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
