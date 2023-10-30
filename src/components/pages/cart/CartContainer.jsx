import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../../../context/cartContext";

const CartContainer = () => {
  const x = useContext(CartContext);
  console.log(x);
  const { cart, clearCart } = useContext(CartContext);

  return (
    <div>
      <h1>estoy en el carrito</h1>

      {cart.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <h2>cantidad: {product.quantity}</h2>
        </div>
      ))}

      <Link to="/checkoutformik">
        <Button variant="contained" color="secondary">
          Finalizar Compra
        </Button>
        <Button variant="contained" color="secondary" onClick={clearCart}>
          Vaciar Carrito
        </Button>
      </Link>
    </div>
  );
};

export default CartContainer;
