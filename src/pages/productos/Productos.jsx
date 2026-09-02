import React from "react";

import HeroProductos from "../../components/productos/HeroProductos";
import CatalogoProductos from "../../components/productos/CatalogoProductos";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Productos({
  language = "ES",
  changeLanguage = () => {},
}) {
  return (
    <main className="w-full bg-white">

      <Header
        language={language}
        changeLanguage={changeLanguage}
      />

      {/* ============================================================
          HERO GENERAL DE PRODUCTOS
      ============================================================ */}
      <HeroProductos
        language={language}
      />

      {/* ============================================================
          CATÁLOGO GENERAL
          Aquí se muestran todos los productos.
          Las páginas específicas filtrarán por su propio catálogo.
      ============================================================ */}
      <CatalogoProductos
        language={language}
        catalogo="todos"
        categoriaSeleccionada="todas"
      />

      <Footer
        language={language}
      />

    </main>
  );
}

export default Productos;
