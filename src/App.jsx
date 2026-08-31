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
import CentralesProcesamientoCafe from "./pages/CentralesProcesamientoCafe";

// ============================================================
// AGRICULTORES PENAGOS
// ============================================================

import AgricultoresMundo from "./pages/AgricultoresMundo";
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
  // RUTA ACTUAL
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
  // PRIMERA CARGA
  // ==========================================================

  useEffect(() => {

    const pathname =
      location.pathname.toLowerCase();

    // --------------------------------------------------------
    // DETECTAR INGLÉS
    // --------------------------------------------------------

    if (
      pathname === "/en" ||
      pathname.startsWith("/en/")
    ) {

      setLanguage("EN");

    } else {

      setLanguage("ES");

    }

    // --------------------------------------------------------
    // PANTALLA INICIAL DE CARGA
    // --------------------------------------------------------

    const timer = setTimeout(() => {

      setCargandoPagina(false);

    }, 2500);

    return () => {

      clearTimeout(timer);

    };

  }, []);

  // ==========================================================
  // LIMPIAR TIMER
  // ==========================================================

  useEffect(() => {

    return () => {

      if (timerRef.current) {

        clearTimeout(
          timerRef.current
        );

      }

    };

  }, []);

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
  // DETECTAR AGRICULTORES PENAGOS
  // ==========================================================

  const esRutaAgricultores = useCallback(
    (pathname) => {

      const ruta =
        pathname.toLowerCase();

      return (
        ruta === "/agricultores-penagos" ||
        ruta.startsWith(
          "/agricultores-penagos/"
        ) ||
        ruta === "/en/penagos-farmers" ||
        ruta.startsWith(
          "/en/penagos-farmers/"
        )
      );

    },
    []
  );

  // ==========================================================
  // OBTENER REGIÓN AGRICULTORES
  // ==========================================================

  const obtenerRegionAgricultores = useCallback(
    (pathname) => {

      const ruta =
        pathname.toLowerCase();

      // ------------------------------------------------------
      // ESPAÑOL
      // ------------------------------------------------------

      if (
        ruta.startsWith(
          "/agricultores-penagos/"
        )
      ) {

        return ruta.replace(
          "/agricultores-penagos/",
          ""
        );

      }

      // ------------------------------------------------------
      // INGLÉS
      // ------------------------------------------------------

      if (
        ruta.startsWith(
          "/en/penagos-farmers/"
        )
      ) {

        return ruta.replace(
          "/en/penagos-farmers/",
          ""
        );

      }

      return null;

    },
    []
  );

  // ==========================================================
  // CREAR RUTA AGRICULTORES
  // ==========================================================

  const crearRutaAgricultores = useCallback(
    (
      newLanguage,
      region
    ) => {

      const base =
        newLanguage === "EN"
          ? "/en/penagos-farmers"
          : "/agricultores-penagos";

      if (!region) {

        return base;

      }

      return `${base}/${region}`;

    },
    []
  );

  // ==========================================================
  // CAMBIAR IDIOMA
  // ==========================================================

  const changeLanguage = useCallback(
    (newLanguage) => {

      // ------------------------------------------------------
      // EVITAR CAMBIO INNECESARIO
      // ------------------------------------------------------

      if (
        newLanguage === language
      ) {

        return;

      }

      const pathname =
        location.pathname.toLowerCase();

      let nuevaRuta = null;

      // ======================================================
      // AGRICULTORES
      // ======================================================

      if (
        esRutaAgricultores(pathname)
      ) {

        const region =
          obtenerRegionAgricultores(
            pathname
          );

        nuevaRuta =
          crearRutaAgricultores(
            newLanguage,
            region
          );

      }

      // ======================================================
      // INICIO
      // ======================================================

      else if (
        pathname === "/" ||
        pathname === "/en"
      ) {

        nuevaRuta =
          newLanguage === "EN"
            ? "/en"
            : "/";

      }

      // ======================================================
      // BLOG
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
      // QUIENES SOMOS
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
      // PAGOS
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
      // SOPORTE
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
        pathname ===
          "/proteccion-de-datos-personales" ||
        pathname ===
          "/en/personal-data-protection"
      ) {

        nuevaRuta =
          newLanguage === "EN"
            ? "/en/personal-data-protection"
            : "/proteccion-de-datos-personales";

      }

      // ======================================================
      // CONTACTANOS
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
      // CENTRALES DE PROCESAMIENTO
      // ======================================================
      //
      // RUTA PRINCIPAL:
      //
      // ES:
      // /centrales-procesamiento-de-cafe
      //
      // EN:
      // /en/coffee-processing-plants
      //
      // También aceptamos la antigua ruta:
      //
      // /centrales-de-procesamiento-de-cafe
      //
      // para evitar que una URL anterior quede rota.
      // ======================================================

      else if (
        pathname ===
          "/centrales-procesamiento-de-cafe" ||
        pathname ===
          "/centrales-de-procesamiento-de-cafe" ||
        pathname ===
          "/en/coffee-processing-plants"
      ) {

        nuevaRuta =
          newLanguage === "EN"
            ? "/en/coffee-processing-plants"
            : "/centrales-procesamiento-de-cafe";

      }

      // ======================================================
      // NOTICIA ESPAÑOL
      // ======================================================

      else if (
        pathname.startsWith(
          "/noticia/"
        )
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
      // NOTICIA INGLÉS
      // ======================================================

      else if (
        pathname.startsWith(
          "/en/news/"
        )
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

      mostrarCarga();

      // ======================================================
      // NAVEGAR
      // ======================================================

      navigate(
        nuevaRuta
      );

    },
    [
      language,
      location.pathname,
      navigate,
      mostrarCarga,
      esRutaAgricultores,
      obtenerRegionAgricultores,
      crearRutaAgricultores,
    ]
  );

  // ==========================================================
  // DETECTAR CAMBIO DE RUTA
  // ==========================================================

  const rutaAnteriorRef =
    useRef(null);

  useEffect(() => {

    const pathname =
      location.pathname.toLowerCase();

    // --------------------------------------------------------
    // PRIMERA RUTA
    // --------------------------------------------------------

    if (
      rutaAnteriorRef.current === null
    ) {

      rutaAnteriorRef.current =
        pathname;

      return;

    }

    const rutaAnterior =
      rutaAnteriorRef.current;

    // --------------------------------------------------------
    // AGRICULTORES
    // --------------------------------------------------------

    const anteriorEsAgricultores =
      esRutaAgricultores(
        rutaAnterior
      );

    const actualEsAgricultores =
      esRutaAgricultores(
        pathname
      );

    // ========================================================
    // AGRICULTORES -> AGRICULTORES
    // ========================================================

    if (
      anteriorEsAgricultores &&
      actualEsAgricultores
    ) {

      rutaAnteriorRef.current =
        pathname;

      return;

    }

    // ========================================================
    // CUALQUIER OTRA NAVEGACIÓN
    // ========================================================

    mostrarCarga();

    rutaAnteriorRef.current =
      pathname;

  }, [
    location.pathname,
    mostrarCarga,
    esRutaAgricultores,
  ]);

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
              onMaquinasListas={
                manejarMaquinasListas
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
            QUIENES SOMOS
        ================================================== */}

        <Route
          path="/quienes-somos"
          element={
            <QuienesSomos
              language={language}
              changeLanguage={
                changeLanguage
              }
            />
          }
        />

        {/* ==================================================
            AGRICULTORES PENAGOS
        ================================================== */}

        <Route
          path="/agricultores-penagos"
          element={
            <AgricultoresPenagos
              language={language}
              changeLanguage={
                changeLanguage
              }
            />
          }
        />

        <Route
          path="/agricultores-penagos/:region"
          element={
            <AgricultoresMundo
              language={language}
              changeLanguage={
                changeLanguage
              }
            />
          }
        />

        {/* ==================================================
            CENTRALES DE PROCESAMIENTO DE CAFÉ
        ==================================================
        
            ESTA ES LA RUTA CORRECTA:

            /centrales-procesamiento-de-cafe

        ================================================== */}

        <Route
          path="/centrales-procesamiento-de-cafe"
          element={
            <CentralesProcesamientoCafe
              language="ES"
              changeLanguage={
                changeLanguage
              }
            />
          }
        />

        {/* ==================================================
            COMPATIBILIDAD CON RUTA ANTIGUA
        ================================================== */}

        <Route
          path="/centrales-de-procesamiento-de-cafe"
          element={
            <CentralesProcesamientoCafe
              language="ES"
              changeLanguage={
                changeLanguage
              }
            />
          }
        />

        {/* ==================================================
            PAGOS
        ================================================== */}

        <Route
          path="/pagos"
          element={
            <Pagos
              language={language}
              changeLanguage={
                changeLanguage
              }
            />
          }
        />

        {/* ==================================================
            SOPORTE
        ================================================== */}

        <Route
          path="/soporte-tecnico"
          element={
            <Soporte
              language={language}
              changeLanguage={
                changeLanguage
              }
            />
          }
        />

        {/* ==================================================
            PROTECCIÓN DE DATOS
        ================================================== */}

        <Route
          path="/proteccion-de-datos-personales"
          element={
            <ProteccionDatos
              language={language}
              changeLanguage={
                changeLanguage
              }
            />
          }
        />

        {/* ==================================================
            CONTACTANOS
        ================================================== */}

        <Route
          path="/contactanos"
          element={
            <Contactanos
              language={language}
              changeLanguage={
                changeLanguage
              }
            />
          }
        />

        {/* ==================================================
            NOTICIA
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

        {/* ==================================================
            INGLÉS
        ================================================== */}

        {/* ==================================================
            INICIO
        ================================================== */}

        <Route
          path="/en"
          element={
            <Inicio
              language="EN"
              changeLanguage={
                changeLanguage
              }
              onMaquinasListas={
                manejarMaquinasListas
              }
            />
          }
        />

        {/* ==================================================
            NEWS
        ================================================== */}

        <Route
          path="/en/news"
          element={
            <Blog
              language="EN"
              changeLanguage={
                changeLanguage
              }
            />
          }
        />

        {/* ==================================================
            ABOUT US
        ================================================== */}

        <Route
          path="/en/about-us"
          element={
            <QuienesSomos
              language="EN"
              changeLanguage={
                changeLanguage
              }
            />
          }
        />

        {/* ==================================================
            PENAGOS FARMERS
        ================================================== */}

        <Route
          path="/en/penagos-farmers"
          element={
            <AgricultoresMundo
              language="EN"
              changeLanguage={
                changeLanguage
              }
            />
          }
        />

        <Route
          path="/en/penagos-farmers/:region"
          element={
            <AgricultoresMundo
              language="EN"
              changeLanguage={
                changeLanguage
              }
            />
          }
        />

        {/* ==================================================
            COFFEE PROCESSING PLANTS
        ================================================== */}

        <Route
          path="/en/coffee-processing-plants"
          element={
            <CentralesProcesamientoCafe
              language="EN"
              changeLanguage={
                changeLanguage
              }
            />
          }
        />

        {/* ==================================================
            PAYMENTS
        ================================================== */}

        <Route
          path="/en/payments"
          element={
            <Pagos
              language="EN"
              changeLanguage={
                changeLanguage
              }
            />
          }
        />

        {/* ==================================================
            TECHNICAL SUPPORT
        ================================================== */}

        <Route
          path="/en/technical-support"
          element={
            <Soporte
              language="EN"
              changeLanguage={
                changeLanguage
              }
            />
          }
        />

        {/* ==================================================
            PERSONAL DATA PROTECTION
        ================================================== */}

        <Route
          path="/en/personal-data-protection"
          element={
            <ProteccionDatos
              language="EN"
              changeLanguage={
                changeLanguage
              }
            />
          }
        />

        {/* ==================================================
            CONTACT US
        ================================================== */}

        <Route
          path="/en/contact-us"
          element={
            <Contactanos
              language="EN"
              changeLanguage={
                changeLanguage
              }
            />
          }
        />

        {/* ==================================================
            NEWS DETAIL
        ================================================== */}

        <Route
          path="/en/news/:id"
          element={
            <NoticiaDetalle
              language="EN"
              changeLanguage={
                changeLanguage
              }
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
