import { Login } from "./components/pages/login/Login";
import { NavBar } from "./components/layout/navBar/NavBar";
import Itemlistcontainer from "./components/pages/itemListContainer/ItemListContainer";
import { Home } from "./components/layout/home/home";
import { Footer } from "./components/layout/footer/Footer";
import { Header } from "./components/layout/header/Header";
import ItemDetailContainer from "./components/pages/itemDetailContainer/ItemDetailContainer";
//import CounterPresentacional from "./components/common/cartWidget/counter/CounterContainer";

function App() {
  {
    let bienvenida = "Hola! Bienvenido a nuestra tienda.";
  }

  return (
    <div>
      <Header />
      <NavBar />
      <Login />
      <Home />
      <Itemlistcontainer />
      <ItemDetailContainer />
      <Footer />
      {/** 
      <NavBar />
      <Login />
      <Home />
      <Itemlistcontainer />
footer va
      <ItemDetailContainer />
      {/*<CounterPresentacional stock={5} />*/}
    </div>
  );
}

export default App;
