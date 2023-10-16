import { useState, useEffect } from "react";
import { products } from "../../../productosMock";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const tarea = new Promise((resolve, reject) => {
      resolve(products);
      //reject("se produjo un error");
    });
    tarea
      .then((res) => setItems(res))
      .catch((error) => console.log("reject: ", error));
  }, []);

  return <ItemList items={items} />;
};
export default ItemListContainer;
