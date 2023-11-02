import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextComponent = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const addToCart = (product) => {
    let exist = isInCart(product.id);
    if (exist) {
      let newArray = cart.map((elemento) => {
        if (elemento.id === product.id) {
          return {
            ...elemento,
            quantity: product.quantity,
          };
        } else {
          return elemento;
        }
      });
      setCart(newArray);
      localStorage.setItem("cart", JSON.stringify(newArray));
    } else {
      setCart([...cart, product]);
      localStorage.setItem("cart", JSON.stringify([...cart, product]));
    }
  };
  const isInCart = (id) => {
    let exist = cart.some((elemento) => elemento.id === id);
    return exist;
  };

  const getQuantityById = (id) => {
    let product = cart.find((elemento) => elemento.id === id);
    return product?.quantity;
  };
  //limpiar el carrito
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  // poder borrar un elemento particular del carrito
  const deleteProductById = (id) => {
    let newArr = cart.filter((product) => product.id !== id); //devolvemos un array nuevo, pero solo con los productos que queremos.
    setCart(newArr); //eesto es siempre para eliminar algo en react
    localStorage.setItem("cart", JSON.stringify(newArr));
  };
  // obtener el total del carrito
  const getTotalPrice = () => {
    let total = cart.reduce((acumulador, elemento) => {
      return acumulador + elemento.price * elemento.quantity;
    }, 0);

    return total;
  };
  // obtener la cantidad de elementos

  const getTotalQuantity = () => {
    let total = cart.reduce((acumlador, elemento) => {
      return acumlador + elemento.quantity;
    }, 0);
    return total;
  };
  let data = {
    cart,
    addToCart,
    getQuantityById,
    clearCart,
    deleteProductById,
    getTotalPrice,
    getTotalQuantity,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextComponent;
