import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from "react-router-dom";

import {
  useCallback,
  useEffect,
  useRef,
  useState
} from "react";


// ============================================================
// COMPONENTES
// ============================================================

import Header from "./components/Header";
import Footer from "./components/Footer";

import VideoSection from "./components/VideoSection";
import MaquinasCarousel from "./components/MaquinasCarousel";
import Mapa from "./components/Mapa";
import Clientes from "./components/Clientes";

import BotonCredito from "./components/BotonCredito";
import ChatPenagos from "./components/ChatPenagos";


// ============================================================
// PÁGINAS
// ============================================================

import Blog from "./pages/Blog";
import NoticiaDetalle from "./pages/NoticiaDetalle";
import Pagos from "./pages/Pagos";
import Soporte from "./pages/Soporte";
import QuienesSomos from "./pages/QuienesSomos";
import ProteccionDatos from "./pages/ProteccionDatos";


// ============================================================
// PANTALLA DE CARGA
// ============================================================

function PantallaCarga() {

  return (

    <div
      className="
        fixed
        inset-0
        z-[99999]
        flex
        min-h-screen
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
            BARRA DE CARGA
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

    </div>

  );

}


// ============================================================
// PÁGINA PRINCIPAL
// ============================================================

function Inicio({
  language,
  changeLanguage,
  onMaquinasListas
}) {

  return (

    <div
      className="
        min-h-screen
        bg-white
      "
    >

      {/* ==================================================
          HEADER
      ================================================== */}

      <Header
        language={language}
        changeLanguage={changeLanguage}
      />


      {/* ==================================================
          CONTENIDO
      ================================================== */}

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
          onMaquinasListas={onMaquinasListas}
        />


        {/* ==================================================
            MAPA
        ================================================== */}

        <Mapa
          language={language}
        />


        {/* ==================================================
            CLIENTES
        ================================================== */}

        <Clientes
          language={language}
        />

      </main>


      {/* ==================================================
          FOOTER
      ================================================== */}

      <Footer
        language={language}
      />

    </div>

  );

}


// ============================================================
// CONTENEDOR DE RUTAS
// ============================================================

function AppContenido() {


  // ==========================================================
  // IDIOMA
  // ==========================================================

  const [
    language,
    setLanguage
  ] = useState("ES");


  // ==========================================================
  // CARGA
  // ==========================================================

  const [
    cargandoPagina,
    setCargandoPagina
  ] = useState(true);


  // ==========================================================
  // RUTA ACTUAL
  // ==========================================================

  const location = useLocation();


  // ==========================================================
  // TIMER ACTUAL
  //
  // Evita que varios setTimeout se acumulen.
  // ==========================================================

  const timerRef = useRef(null);


  // ==========================================================
  // MOSTRAR PANTALLA DE CARGA
  // ==========================================================

  const mostrarCarga = useCallback(() => {

    setCargandoPagina(true);


    // Cancelar timer anterior

    if (timerRef.current) {

      clearTimeout(
        timerRef.current
      );

    }


    // Mostrar durante 2.5 segundos

    timerRef.current = setTimeout(() => {

      setCargandoPagina(false);

      timerRef.current = null;

    }, 2500);

  }, []);


  // ==========================================================
  // CARGA INICIAL
  // ==========================================================

  useEffect(() => {

    mostrarCarga();


    return () => {

      if (timerRef.current) {

        clearTimeout(
          timerRef.current
        );

      }

    };

  }, [
    mostrarCarga
  ]);


  // ==========================================================
  // CAMBIO DE RUTA
  // ==========================================================

  useEffect(() => {

    mostrarCarga();

  }, [
    location.pathname,
    mostrarCarga
  ]);


  // ==========================================================
  // CAMBIAR IDIOMA
  // ==========================================================

  const changeLanguage = useCallback(

    (newLanguage) => {


      // No hacer nada si ya estamos
      // en ese idioma

      if (
        newLanguage === language
      ) {

        return;

      }


      // Mostrar pantalla de carga

      setCargandoPagina(true);


      // Cambiar idioma

      setLanguage(
        newLanguage
      );


      // Cancelar timer anterior

      if (timerRef.current) {

        clearTimeout(
          timerRef.current
        );

      }


      // Ocultar después de 2.5 segundos

      timerRef.current = setTimeout(() => {

        setCargandoPagina(false);

        timerRef.current = null;

      }, 2500);

    },

    [
      language
    ]

  );


  // ==========================================================
  // MÁQUINAS TERMINADAS
  // ==========================================================

  const manejarMaquinasListas = useCallback(

    () => {

      console.log(
        "MÁQUINAS TERMINARON DE CARGAR"
      );

    },

    []

  );


  // ==========================================================
  // RENDER
  // ==========================================================

  return (

    <>

      {/* ======================================================
          RUTAS
      ====================================================== */}

      <Routes>


        {/* ====================================================
            INICIO
        ==================================================== */}

        <Route
          path="/"
          element={

            <Inicio
              language={language}
              changeLanguage={changeLanguage}
              onMaquinasListas={
                manejarMaquinasListas
              }
            />

          }
        />


        {/* ====================================================
            BLOG
        ==================================================== */}

        <Route
          path="/blog"
          element={

            <Blog
              language={language}
              changeLanguage={changeLanguage}
            />

          }
        />


        {/* ====================================================
            QUIÉNES SOMOS
        ==================================================== */}

        <Route
          path="/quienes-somos"
          element={

            <QuienesSomos
              language={language}
              changeLanguage={changeLanguage}
            />

          }
        />


        {/* ====================================================
            PAGOS
        ==================================================== */}

        <Route
          path="/pagos"
          element={

            <Pagos
              language={language}
              changeLanguage={changeLanguage}
            />

          }
        />


        {/* ====================================================
            SOPORTE TÉCNICO
        ==================================================== */}

        <Route
          path="/soporte-tecnico"
          element={

            <Soporte
              language={language}
              changeLanguage={changeLanguage}
            />

          }
        />


        {/* ====================================================
            PROTECCIÓN DE DATOS
        ==================================================== */}

        <Route
          path="/proteccion-de-datos-personales"
          element={

            <ProteccionDatos
              language={language}
              changeLanguage={changeLanguage}
            />

          }
        />


        {/* ====================================================
            DETALLE DE NOTICIA
        ==================================================== */}

        <Route
          path="/noticia/:id"
          element={

            <NoticiaDetalle
              language={language}
              changeLanguage={changeLanguage}
            />

          }
        />


      </Routes>


      {/* ======================================================
          BOTÓN FLOTANTE BANCO AGRARIO

          Está fuera de Routes para que aparezca
          independientemente de la página actual.

          El propio componente verifica si el visitante
          está en Colombia.
      ====================================================== */}

      <BotonCredito />


      {/* ======================================================
          CHAT HUBSPOT PENAGOS

          Está fuera de Routes para que HubSpot esté
          disponible en todas las páginas.
      ====================================================== */}

      <ChatPenagos />


      {/* ======================================================
          PANTALLA DE CARGA GLOBAL

          Está fuera de Routes para que cubra
          cualquier página.
      ====================================================== */}

      {cargandoPagina && (

        <PantallaCarga />

      )}

    </>

  );

}


// ============================================================
// APP
// ============================================================

function App() {

  return (

    <BrowserRouter>

      <AppContenido />

    </BrowserRouter>

  );

}


export default App;