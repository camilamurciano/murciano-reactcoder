import React from "react";
import { Header } from "./header/Header";
import { NavBar } from "./navBar/NavBar";
import { Home } from "./home/home";
import { Outlet } from "react-router-dom";
import { Footer } from "./footer/Footer";

const layout = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <Home />
      <Outlet />
      <Footer />
    </div>
  );
};

export default layout;
