import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/pages/itemDetailContainer/ItemDetailContainer";
import { Home } from "./components/layout/home/home";
import { NavBar } from "./components/layout/navBar/NavBar";
import { Login } from "./components/pages/login/Login";
import Cart from "./components/pages/cart/CartContainer";
import { Footer } from "./components/layout/footer/Footer";
import { Header } from "./components/layout/header/Header";
import Layout from "./components/layout/layout";
import CartContextComponent from "./context/cartContext";
import CheckoutFormik from "./components/pages/checkoutFormik/CheckoutFormik";

{
  /*S
import { Login } from "./components/pages/login/Login";
import { NavBar } from "./components/layout/navBar/NavBar";
import Itemlistcontainer from "./components/pages/itemListContainer/ItemListContainer";
import { Home } from "./components/layout/home/home";
import { Footer } from "./components/layout/footer/Footer";
import { Header } from "./components/layout/header/Header";
import ItemDetailContainer from "./components/pages/itemDetailContainer/ItemDetailContainer";
//import CounterPresentacional from "./components/common/cartWidget/counter/CounterContainer";
 */
}

function App() {
  {
    let bienvenida = "Hola! Bienvenido a nuestra tienda.";
  }

  return (
    <BrowserRouter>
      <CartContextComponent>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryName"
              element={<ItemListContainer />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/ItemDetail/:id" element={<ItemDetailContainer />} />
            <Route path="/checkoutformik" element={<CheckoutFormik />} />

            <Route path="*" element={<h1>Pages not found</h1>} />
          </Route>
        </Routes>
      </CartContextComponent>
    </BrowserRouter>
  );
}
{
  /*
    <div>
      
      <Header />
      <NavBar />
      <Login />
      <Home />
      <Itemlistcontainer />
      <ItemDetailContainer />
      {/*<CounterPresentacional stock={5} />
      <Footer />
    
    </div>
    */
}

export default App;
