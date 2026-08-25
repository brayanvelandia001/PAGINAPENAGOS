import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import {
  useState,
  useEffect
} from "react";


import Header from "./components/Header";

import Footer from "./components/Footer";

import VideoSection from "./components/VideoSection";

import MaquinasCarousel from "./components/MaquinasCarousel";

import Mapa from "./components/Mapa";

import Clientes from "./components/Clientes";

import Blog from "./pages/Blog";

import NoticiaDetalle from "./pages/NoticiaDetalle";



/* ============================================================
   COMPONENTE DE CARGA
============================================================ */

function PantallaCarga() {

  return (

    <section
      className="
        flex
        min-h-[500px]
        items-center
        justify-center
        bg-white
        px-6
      "
    >

      <div
        className="
          flex
          w-full
          flex-col
          items-center
          justify-center
        "
      >

        {/* ==================================================
            LOGO
        ================================================== */}

        <img
          src="https://penagos.com/wp-content/uploads/2020/03/Logotipo-Penagos-Hermanos-PNG.png"
          alt="Penagos Hermanos"
          className="
            w-[210px]
            object-contain
            animate-[logoPulseIdioma_2s_ease-in-out_infinite]
          "
        />


        {/* ==================================================
            BARRA
        ================================================== */}

        <div
          className="
            mt-8
            h-[4px]
            w-[180px]
            overflow-hidden
            rounded-full
            bg-slate-200
          "
        >

          <div
            className="
              h-full
              w-1/2
              rounded-full
              bg-[#302b80]
              animate-[loadingIdioma_1.4s_ease-in-out_infinite]
            "
          />

        </div>

      </div>


      {/* ====================================================
          ANIMACIONES
      ==================================================== */}

      <style>
        {`

          @keyframes logoPulseIdioma {

            0% {
              transform: scale(1);
              opacity: 0.70;
            }

            50% {
              transform: scale(1.06);
              opacity: 1;
            }

            100% {
              transform: scale(1);
              opacity: 0.70;
            }

          }


          @keyframes loadingIdioma {

            0% {
              transform: translateX(-120%);
            }

            100% {
              transform: translateX(220%);
            }

          }

        `}
      </style>

    </section>

  );

}



/* ============================================================
   PÁGINA PRINCIPAL
============================================================ */

function Inicio({
  language,
  changeLanguage
}) {

  return (

    <div
      className="
        min-h-screen
        bg-white
      "
    >

      <Header
        language={language}
        changeLanguage={changeLanguage}
      />


      <main>

        {/* ==================================================
            VIDEO
        ================================================== */}

        <VideoSection
          language={language}
        />


        {/* ==================================================
            MÁQUINAS
        ================================================== */}

        <MaquinasCarousel
          language={language}
        />


        {/* ==================================================
            MAPA / PRESENCIA INTERNACIONAL
        ================================================== */}

        <Mapa
          language={language}
        />

          <Clientes
          language={language}
        />

      </main>


      <Footer />

    </div>

  );

}



/* ============================================================
   APP
============================================================ */

function App() {


  /* ==========================================================
     IDIOMA GLOBAL
  ========================================================== */

  const [
    language,
    setLanguage
  ] = useState("ES");


  /* ==========================================================
     ESTADO DE CARGA AL CAMBIAR IDIOMA
  ========================================================== */

  const [
    cambiandoIdioma,
    setCambiandoIdioma
  ] = useState(false);


  /* ==========================================================
     CAMBIAR IDIOMA
  ========================================================== */

  const changeLanguage = (
    newLanguage
  ) => {

    /* ========================================================
       SI ES EL MISMO IDIOMA NO HACEMOS NADA
    ======================================================== */

    if (
      newLanguage === language
    ) {

      return;

    }


    /* ========================================================
       MOSTRAR PANTALLA DE CARGA
    ======================================================== */

    setCambiandoIdioma(true);


    /* ========================================================
       CAMBIAR IDIOMA
    ======================================================== */

    setLanguage(
      newLanguage
    );

  };


  /* ==========================================================
     PEQUEÑO TIEMPO DE CARGA
  ========================================================== */

  useEffect(() => {

    if (
      !cambiandoIdioma
    ) {

      return;

    }


    const timer =
      setTimeout(() => {

        setCambiandoIdioma(false);

      }, 3000);


    return () => {

      clearTimeout(
        timer
      );

    };

  }, [
    language
  ]);



  /* ==========================================================
     RENDER
  ========================================================== */

  return (

    <BrowserRouter>


      {/* ======================================================
          SI ESTÁ CAMBIANDO IDIOMA
      ====================================================== */}

      {cambiandoIdioma ? (

        <PantallaCarga />

      ) : (

        <Routes>


          {/* ==================================================
              INICIO
          ================================================== */}

          <Route
            path="/"
            element={
              <Inicio
                language={language}
                changeLanguage={
                  changeLanguage
                }
              />
            }
          />


          {/* ==================================================
              BLOG
          ================================================== */}

          <Route
            path="/blog"
            element={
              <Blog
                language={language}
                changeLanguage={
                  changeLanguage
                }
              />
            }
          />


          {/* ==================================================
              DETALLE NOTICIA
          ================================================== */}

          <Route
            path="/noticia/:id"
            element={
              <NoticiaDetalle
                language={language}
                changeLanguage={
                  changeLanguage
                }
              />
            }
          />


        </Routes>

      )}

    </BrowserRouter>

  );

}


export default App;