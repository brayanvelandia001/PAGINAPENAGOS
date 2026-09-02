import React, { useState } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import HeroProductos from "../../components/productos/HeroProductos";
import CategoriasProductos from "../../components/productos/CategoriasProductos";
import CatalogoProductos from "../../components/productos/CatalogoProductos";

function ProductosCafe({
  language = "ES",
  changeLanguage = () => {},
}) {
  const [
    categoriaSeleccionada,
    setCategoriaSeleccionada,
  ] = useState("todas");

  return (
    <main className="w-full bg-white">

      {/* ======================================================
          HEADER
      ====================================================== */}

      <Header
        language={language}
        changeLanguage={changeLanguage}
      />

      {/* ======================================================
          HERO CAFÉ
      ====================================================== */}

      <HeroProductos
        language={language}
        tipo="cafe"
      />

      {/* ======================================================
          CATEGORÍAS DE CAFÉ
      ====================================================== */}

      <CategoriasProductos
        language={language}
        categoriaSeleccionada={categoriaSeleccionada}
        setCategoriaSeleccionada={setCategoriaSeleccionada}
        categoriasTipo="cafe"
      />

      {/* ======================================================
          CATÁLOGO DE CAFÉ
      ====================================================== */}

      <CatalogoProductos
        language={language}
        catalogo="cafe"
        categoriaSeleccionada={categoriaSeleccionada}
      />

      {/* ======================================================
          FOOTER
      ====================================================== */}

      <Footer
        language={language}
      />

    </main>
  );
}

export default ProductosCafe;

