import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import "./login.css";
import { CartContext } from "../../../context/cartContext";
import { addDoc, serverTimestamp, updateDoc, doc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { collection } from "firebase/firestore";
export const Login = () => {
  const [userData, setUserData] = useState({
    nombre: "",
    apellido: "",
    email: "",
  });
  const [orderId, setOrderId] = useState(null);
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);

  const total = getTotalPrice();
  {
    /*const [userInfo, setUserInfo] = useState({
    nombre: "",
    apellido: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    nombre: null,
    apellido: null,
    email: null,
  });
*/
  }
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(userInfo);
    let order = {
      buyer: userData,
      items: cart,
      total,
      date: serverTimestamp(),
    };
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then((res) => setOrderId(res.id));
    cart.forEach((elemento) => {
      updateDoc(doc(db, "products", elemento.id), {
        stock: elemento.stock - elemento.quantity,
      });
    });
    clearCart();
  };

  //console.log(errors);
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
        <div className="login">
          <h2> Logueate para finalizar la compra</h2>
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

              {/*<span style={{ color: "crimson", fontSize: " 10px" }}>
            {errors.nombre}
          </span> */}

              <TextField
                color="secondary"
                id="outlined-basic"
                label="Apellido"
                type="text"
                name="apellido"
                variant="outlined"
                onChange={handleChange}
              />

              {/*<span style={{ color: "crimson", fontSize: " 10px" }}>
            {errors.apellido}
          </span>*/}

              <TextField
                color="secondary"
                id="outlined-basic"
                label="Email"
                type="text"
                name="email"
                variant="outlined"
                onChange={handleChange}
              />

              {/*<span style={{ color: "crimson", fontSize: " 10px" }}>
            {errors.email}
          </span>*/}

              <Button type="submit" variant="contained" color="secondary">
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
      )}
    </>
  );
};
