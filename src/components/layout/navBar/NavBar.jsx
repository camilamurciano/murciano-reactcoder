import CartWidget from "../../common/cartWidget/cartWidget";
import "./navBar.css";
import { Outlet, Link } from "react-router-dom";
import { GiDogHouse } from "react-icons/gi";
export const NavBar = () => {
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
          <Link to="/category/perros">
            <li>Perros</li>
          </Link>
          <Link to="/category/gatos">
            <li>Gatos</li>
          </Link>
        </ul>
        <CartWidget size={25} />
      </div>
    </>
  );
};
