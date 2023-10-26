import { useContext, useEffect, useState } from "react";
import { products } from "../../../productosMock";
import { ItemDetail } from "./ItemDetail";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../../../context/cartContext";

const ItemDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});
  const { id } = useParams();
  const { addToCart, getQuantityById } = useContext(CartContext);
  const navigate = useNavigate(); //para cuando el usuario de click en un boton, y que vaya a otra ruta sin que sea link
  let totalQuantity = getQuantityById(+id);

  useEffect(() => {
    let producto = products.find((product) => product.id === +id);

    const getProduct = new Promise((resolve, reject) => {
      resolve(producto);
      //reject("error");
    });
    getProduct
      .then((res) => setProductSelected(res))
      .catch((err) => console.log(err));
  }, [id]);

  //console.log(productSelected);
  const onAdd = (cantidad) => {
    let item = {
      ...productSelected,
      quantity: cantidad,
    };
    addToCart(item);
    {
      /*setTimeout(() => {
      navigate("/cart"); // esto nos sirve para que cuando se haga click, se tarde 1,5 segundo en ir al carrito
    }, 1500);
    */
    }
  };
  return (
    <ItemDetail
      productSelected={productSelected}
      onAdd={onAdd}
      initial={totalQuantity}
    />
  );
};

export default ItemDetailContainer;
