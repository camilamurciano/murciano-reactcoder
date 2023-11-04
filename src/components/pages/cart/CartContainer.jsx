import { Link } from "react-router-dom";
import { Button, IconButton } from "@mui/material";
import { useContext } from "react";
import { CartContextt } from "../../../context/CartContextt";
import Swal from "sweetalert2";
import DeleteIcon from "@mui/icons-material/Delete";

const CartContainer = () => {
  const x = useContext(CartContextt);
  console.log(x);
  const { cart, clearCart, deleteProductById, getTotalPrice } =
    useContext(CartContextt);
  let total = getTotalPrice();
  const clearCartWithSwal = () => {
    Swal.fire({
      title: "Estas seguro de limpiar el carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si",
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Eliminado!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("No se elimino el carrito", "", "info");
      }
    });
  };
  return (
    <div>
      <h1
        style={{ display: "flex", justifyContent: "center", color: "violet" }}
      >
        Carrito de Compras
      </h1>

      {cart.map((product) => (
        <div key={product.id} style={{ border: "2px solid violet" }}>
          <h2>{product.title}</h2>
          <h2>{product.price}</h2>
          <h2>cantidad: {product.quantity}</h2>
          {/*<Button
            color="secondary"
            onClick={() => deleteProductById(product.id)}
          >
            Eliminar
          </Button>*/}
          {/*de la siguiente manera es como se coloca un button a un icono de mui*/}
          <IconButton onClick={() => deleteProductById(product.id)}>
            <DeleteIcon color="secondary" fontSize="large" />
          </IconButton>
        </div>
      ))}
      {cart.length > 0 && (
        <div>
          <h2>El total a pagar es: {total}</h2>
          <Link to="/checkoutformik">
            <Button variant="contained" color="secondary">
              Finalizar Compra
            </Button>
          </Link>
          <Link>
            <Button
              variant="contained"
              color="secondary"
              onClick={clearCartWithSwal}
            >
              Vaciar Carrito
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartContainer;
