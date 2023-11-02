import CartWidget from "../../common/cartWidget/cartWidget";
import "./navBar.css";
import { Outlet, Link } from "react-router-dom";
import { GiDogHouse } from "react-icons/gi";
import { useEffect, useState } from "react";
import { db } from "../../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
export const NavBar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const categoriesCollection = collection(db, "categories");
    getDocs(categoriesCollection)
      .then((res) => {
        let arrayCategories = res.docs.map((category) => {
          return { ...category.data(), id: category.id };
        });
        setCategories(arrayCategories);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="logo">
        <Link to="/">
          <GiDogHouse size={35} />
        </Link>
        <ul className="navbar">
          <Link to="/">
            <li>Inicio</li>
          </Link>
          {categories.map((category) => (
            <Link key={category.id} to={category.path}>
              <li>{category.name}</li>{" "}
            </Link>
          ))}
        </ul>
        <CartWidget className="carrito" size={25} />
      </div>
    </>
  );
};
