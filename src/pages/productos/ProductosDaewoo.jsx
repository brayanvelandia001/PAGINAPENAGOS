import React, { useState } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import HeroProductos from "../../components/productos/HeroProductos";
import CategoriasProductos from "../../components/productos/CategoriasProductos";
import CatalogoProductos from "../../components/productos/CatalogoProductos";

function ProductosDaewoo({
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
          HERO DAEWOO
      ====================================================== */}

      <HeroProductos
        language={language}
        tipo="daewoo"
      />

      {/* ======================================================
          CATEGORÍAS DAEWOO
      ====================================================== */}

      <CategoriasProductos
        language={language}
        categoriaSeleccionada={categoriaSeleccionada}
        setCategoriaSeleccionada={setCategoriaSeleccionada}
        categoriasTipo="daewoo"
      />

      {/* ======================================================
          CATÁLOGO DAEWOO
      ====================================================== */}

      <CatalogoProductos
        language={language}
        catalogo="daewoo"
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

export default ProductosDaewoo;
