import { useEffect, useState } from "react";
import { products } from "../../../productosMock";
import { ItemDetail } from "./ItemDetail";

const ItemDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});
  let id = 13;

  useEffect(() => {
    let producto = products.find((product) => product.id === id);

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
    let obj = {
      ...productSelected,
      quantity: cantidad,
    };
    console.log("este es el producto que se agregó", obj);
  };
  return <ItemDetail productSelected={productSelected} onAdd={onAdd} />;
};

export default ItemDetailContainer;
