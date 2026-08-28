import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import "leaflet/dist/leaflet.css";

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
import Contactanos from "./pages/Contactanos";

// NUEVA PÁGINA
import AgricultoresPenagos from "./pages/AgricultoresPenagos";

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

        {/* LOGO */}

        <img
          src="https://penagos.com/wp-content/uploads/2020/03/Logotipo-Penagos-Hermanos-PNG.png"
          alt="Penagos Hermanos"
          className="
            w-[210px]
            object-contain
            animate-[logoPulseIdioma_2s_ease-in-out_infinite]
          "
        />

        {/* BARRA */}

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
  onMaquinasListas,
}) {
  return (
    <div className="min-h-screen bg-white">

      <Header
        language={language}
        changeLanguage={changeLanguage}
      />

      <main>

        <VideoSection
          language={language}
        />

        <MaquinasCarousel
          language={language}
          onMaquinasListas={onMaquinasListas}
        />

        <Mapa
          language={language}
        />

        <Clientes
          language={language}
        />

      </main>

      <Footer
        language={language}
      />

    </div>
  );
}

// ============================================================
// APP CONTENIDO
// ============================================================

function AppContenido() {

  // ==========================================================
  // IDIOMA
  // ==========================================================

  const [
    language,
    setLanguage,
  ] = useState("ES");

  // ==========================================================
  // CARGA
  // ==========================================================

  const [
    cargandoPagina,
    setCargandoPagina,
  ] = useState(true);

  // ==========================================================
  // RUTA
  // ==========================================================

  const location = useLocation();

  // ==========================================================
  // NAVEGACIÓN
  // ==========================================================

  const navigate = useNavigate();

  // ==========================================================
  // TIMER
  // ==========================================================

  const timerRef = useRef(null);

  // ==========================================================
  // MOSTRAR CARGA
  // ==========================================================

  const mostrarCarga = useCallback(() => {

    setCargandoPagina(true);

    if (timerRef.current) {

      clearTimeout(
        timerRef.current
      );

    }

    timerRef.current = setTimeout(() => {

      setCargandoPagina(false);

      timerRef.current = null;

    }, 2500);

  }, []);

  // ==========================================================
  // CARGA INICIAL
  // ==========================================================

  useEffect(() => {

    const pathname =
      location.pathname.toLowerCase();

    /*
      SOLO usamos la URL para determinar
      el idioma inicial.

      Esto NO cambia el idioma cada vez
      que navegamos entre páginas.
    */

    if (
      pathname === "/en" ||
      pathname.startsWith("/en/")
    ) {

      setLanguage("EN");

    }

  }, []);

  // ==========================================================
  // CAMBIO DE PÁGINA
  // ==========================================================

  useEffect(() => {

    mostrarCarga();

  }, [
    location.pathname,
    mostrarCarga,
  ]);

  // ==========================================================
  // CAMBIAR IDIOMA
  // ==========================================================

  const changeLanguage = useCallback(
    (newLanguage) => {

      if (
        newLanguage === language
      ) {

        return;

      }

      const pathname =
        location.pathname;

      let nuevaRuta = null;

      // ======================================================
      // INICIO
      // ======================================================

      if (
        pathname === "/" ||
        pathname === "/en"
      ) {

        nuevaRuta =
          newLanguage === "EN"
            ? "/en"
            : "/";

      }

      // ======================================================
      // BLOG / NEWS
      // ======================================================

      else if (
        pathname === "/blog" ||
        pathname === "/en/news"
      ) {

        nuevaRuta =
          newLanguage === "EN"
            ? "/en/news"
            : "/blog";

      }

      // ======================================================
      // QUIÉNES SOMOS / ABOUT US
      // ======================================================

      else if (
        pathname === "/quienes-somos" ||
        pathname === "/en/about-us"
      ) {

        nuevaRuta =
          newLanguage === "EN"
            ? "/en/about-us"
            : "/quienes-somos";

      }

      // ======================================================
      // AGRICULTORES PENAGOS / PENAGOS FARMERS
      // ======================================================

      else if (
        pathname === "/agricultores-penagos" ||
        pathname === "/en/penagos-farmers"
      ) {

        nuevaRuta =
          newLanguage === "EN"
            ? "/en/penagos-farmers"
            : "/agricultores-penagos";

      }

      // ======================================================
      // PAGOS / PAYMENTS
      // ======================================================

      else if (
        pathname === "/pagos" ||
        pathname === "/en/payments"
      ) {

        nuevaRuta =
          newLanguage === "EN"
            ? "/en/payments"
            : "/pagos";

      }

      // ======================================================
      // SOPORTE / TECHNICAL SUPPORT
      // ======================================================

      else if (
        pathname === "/soporte-tecnico" ||
        pathname === "/en/technical-support"
      ) {

        nuevaRuta =
          newLanguage === "EN"
            ? "/en/technical-support"
            : "/soporte-tecnico";

      }

      // ======================================================
      // PROTECCIÓN DE DATOS
      // ======================================================

      else if (
        pathname === "/proteccion-de-datos-personales" ||
        pathname === "/en/personal-data-protection"
      ) {

        nuevaRuta =
          newLanguage === "EN"
            ? "/en/personal-data-protection"
            : "/proteccion-de-datos-personales";

      }

      // ======================================================
      // CONTACTANOS / CONTACT US
      // ======================================================

      else if (
        pathname === "/contactanos" ||
        pathname === "/en/contact-us"
      ) {

        nuevaRuta =
          newLanguage === "EN"
            ? "/en/contact-us"
            : "/contactanos";

      }

      // ======================================================
      // NOTICIA / NEWS DETAIL
      // ======================================================

      else if (
        pathname.startsWith("/noticia/")
      ) {

        const id =
          pathname.replace(
            "/noticia/",
            ""
          );

        nuevaRuta =
          newLanguage === "EN"
            ? `/en/news/${id}`
            : `/noticia/${id}`;

      }

      // ======================================================
      // NEWS DETAIL ENGLISH
      // ======================================================

      else if (
        pathname.startsWith("/en/news/")
      ) {

        const id =
          pathname.replace(
            "/en/news/",
            ""
          );

        nuevaRuta =
          newLanguage === "EN"
            ? `/en/news/${id}`
            : `/noticia/${id}`;

      }

      // ======================================================
      // FALLBACK
      // ======================================================

      if (!nuevaRuta) {

        nuevaRuta =
          newLanguage === "EN"
            ? "/en"
            : "/";

      }

      // ======================================================
      // CAMBIAR IDIOMA
      // ======================================================

      setLanguage(
        newLanguage
      );

      // ======================================================
      // MOSTRAR CARGA
      // ======================================================

      setCargandoPagina(true);

      // ======================================================
      // NAVEGAR
      // ======================================================

      navigate(
        nuevaRuta
      );

      // ======================================================
      // CANCELAR TIMER
      // ======================================================

      if (timerRef.current) {

        clearTimeout(
          timerRef.current
        );

      }

      // ======================================================
      // OCULTAR CARGA
      // ======================================================

      timerRef.current = setTimeout(() => {

        setCargandoPagina(false);

        timerRef.current = null;

      }, 2500);

    },
    [
      language,
      location.pathname,
      navigate,
    ]
  );

  // ==========================================================
  // MÁQUINAS
  // ==========================================================

  const manejarMaquinasListas =
    useCallback(() => {

      console.log(
        "MÁQUINAS TERMINARON DE CARGAR"
      );

    }, []);

  // ==========================================================
  // RENDER
  // ==========================================================

  return (
    <>

      <Routes>

        {/* ==================================================
            ESPAÑOL
        ================================================== */}

        {/* INICIO */}

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

        {/* BLOG */}

        <Route
          path="/blog"
          element={
            <Blog
              language={language}
              changeLanguage={changeLanguage}
            />
          }
        />

        {/* QUIÉNES SOMOS */}

        <Route
          path="/quienes-somos"
          element={
            <QuienesSomos
              language={language}
              changeLanguage={changeLanguage}
            />
          }
        />

        {/* AGRICULTORES PENAGOS */}

        <Route
          path="/agricultores-penagos"
          element={
            <AgricultoresPenagos
              language={language}
              changeLanguage={changeLanguage}
            />
          }
        />

        {/* PAGOS */}

        <Route
          path="/pagos"
          element={
            <Pagos
              language={language}
              changeLanguage={changeLanguage}
            />
          }
        />

        {/* SOPORTE */}

        <Route
          path="/soporte-tecnico"
          element={
            <Soporte
              language={language}
              changeLanguage={changeLanguage}
            />
          }
        />

        {/* PROTECCIÓN DE DATOS */}

        <Route
          path="/proteccion-de-datos-personales"
          element={
            <ProteccionDatos
              language={language}
              changeLanguage={changeLanguage}
            />
          }
        />

        {/* CONTACTANOS */}

        <Route
          path="/contactanos"
          element={
            <Contactanos
              language={language}
              changeLanguage={changeLanguage}
            />
          }
        />

        {/* NOTICIA */}

        <Route
          path="/noticia/:id"
          element={
            <NoticiaDetalle
              language={language}
              changeLanguage={changeLanguage}
            />
          }
        />

        {/* ==================================================
            INGLÉS
        ================================================== */}

        {/* INICIO */}

        <Route
          path="/en"
          element={
            <Inicio
              language="EN"
              changeLanguage={changeLanguage}
              onMaquinasListas={
                manejarMaquinasListas
              }
            />
          }
        />

        {/* NEWS */}

        <Route
          path="/en/news"
          element={
            <Blog
              language="EN"
              changeLanguage={changeLanguage}
            />
          }
        />

        {/* ABOUT US */}

        <Route
          path="/en/about-us"
          element={
            <QuienesSomos
              language="EN"
              changeLanguage={changeLanguage}
            />
          }
        />

        {/* PENAGOS FARMERS */}

        <Route
          path="/en/penagos-farmers"
          element={
            <AgricultoresPenagos
              language="EN"
              changeLanguage={changeLanguage}
            />
          }
        />

        {/* PAYMENTS */}

        <Route
          path="/en/payments"
          element={
            <Pagos
              language="EN"
              changeLanguage={changeLanguage}
            />
          }
        />

        {/* TECHNICAL SUPPORT */}

        <Route
          path="/en/technical-support"
          element={
            <Soporte
              language="EN"
              changeLanguage={changeLanguage}
            />
          }
        />

        {/* PERSONAL DATA PROTECTION */}

        <Route
          path="/en/personal-data-protection"
          element={
            <ProteccionDatos
              language="EN"
              changeLanguage={changeLanguage}
            />
          }
        />

        {/* CONTACT US */}

        <Route
          path="/en/contact-us"
          element={
            <Contactanos
              language="EN"
              changeLanguage={changeLanguage}
            />
          }
        />

        {/* NEWS DETAIL */}

        <Route
          path="/en/news/:id"
          element={
            <NoticiaDetalle
              language="EN"
              changeLanguage={changeLanguage}
            />
          }
        />

      </Routes>

      {/* ======================================================
          BOTÓN BANCO AGRARIO
      ====================================================== */}

      <BotonCredito
        language={language}
      />

      {/* ======================================================
          CHAT HUBSPOT
      ====================================================== */}

      <ChatPenagos />

      {/* ======================================================
          PANTALLA DE CARGA
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

