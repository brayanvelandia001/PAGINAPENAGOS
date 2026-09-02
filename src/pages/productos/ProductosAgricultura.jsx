import React, { useState } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import HeroProductos from "../../components/productos/HeroProductos";
import CategoriasProductos from "../../components/productos/CategoriasProductos";
import CatalogoProductos from "../../components/productos/CatalogoProductos";

function ProductosAgricultura({
  language = "ES",
  changeLanguage = () => {},
}) {
  const [categoriaSeleccionada, setCategoriaSeleccionada] =
    useState("todas");

  return (
    <main className="w-full bg-white">

      <Header
        language={language}
        changeLanguage={changeLanguage}
      />

      <HeroProductos
        language={language}
        tipo="agricultura"
      />

      <CategoriasProductos
        language={language}
        categoriaSeleccionada={categoriaSeleccionada}
        setCategoriaSeleccionada={setCategoriaSeleccionada}
        categoriasTipo="agricultura"
      />

      <CatalogoProductos
        language={language}
        catalogo="agricola"
        categoriaSeleccionada={categoriaSeleccionada}
      />

      <Footer
        language={language}
      />

    </main>
  );
}

export default ProductosAgricultura;

