import { useState, useEffect } from "react";
import { products } from "../../../productosMock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();
  console.log(categoryName);

  useEffect(() => {
    const productosFiltrados = products.filter(
      (product) => product.category === categoryName
    );

    const tarea = new Promise((resolve, reject) => {
      resolve(categoryName ? productosFiltrados : products);
      //reject("se produjo un error");
    });
    tarea
      .then((res) => setItems(res))
      .catch((error) => console.log("reject: ", error));
  }, [categoryName]);

  return <ItemList items={items} />;
};
export default ItemListContainer;
