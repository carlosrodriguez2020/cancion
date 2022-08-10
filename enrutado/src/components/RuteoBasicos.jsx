import React from "react";
import Acerca from "../paginas/Acerca";
import Productos from "../paginas/Productos";
import Error from "../paginas/Error";
import Home from "../paginas/Home";
import NavbarMenu from "./NavbarMenu";
import Perfil from "../paginas/Perfil";

import { BrowserRouter, Routes, Route } from "react-router-dom";
const RuteoBasicos = () => {
  return (
    <BrowserRouter>
      <NavbarMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route path="/perfil/:userName" element={<Perfil />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RuteoBasicos;
