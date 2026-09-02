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

import Productos from "./pages/productos/Productos";

// ============================================================
// PRODUCTOS - CATEGORÍAS
// ============================================================

import ProductosAgricultura from "./pages/productos/ProductosAgricultura";
import ProductosCafe from "./pages/productos/ProductosCafe";
import ProductosDaewoo from "./pages/productos/ProductosDaewoo";

// ============================================================
// SOSTENIBILIDAD
// ============================================================

import Sostenibilidad from "./pages/Sostenibilidad/Sostenibilidad";

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
        <img
          src="https://penagos.com/wp-content/uploads/2020/03/Logotipo-Penagos-Hermanos-PNG.png"
          alt="Penagos Hermanos"
          className="
            w-[210px]
            object-contain
            animate-[logoPulseIdioma_2s_ease-in-out_infinite]
          "
        />

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
          onMaquinasListas={
            onMaquinasListas
          }
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

  const [language, setLanguage] =
    useState("ES");

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

  const location =
    useLocation();

  // ==========================================================
  // NAVEGACIÓN
  // ==========================================================

  const navigate =
    useNavigate();

  // ==========================================================
  // TIMER
  // ==========================================================

  const timerRef =
    useRef(null);

  // ==========================================================
  // PRIMERA CARGA
  // ==========================================================

  useEffect(() => {

    const pathname =
      location.pathname.toLowerCase();

    if (
      pathname === "/en" ||
      pathname.startsWith("/en/")
    ) {
      setLanguage("EN");
    } else {
      setLanguage("ES");
    }

    const timer =
      setTimeout(() => {
        setCargandoPagina(false);
      }, 1200);

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

  const mostrarCarga =
    useCallback(() => {

      setCargandoPagina(true);

      if (timerRef.current) {

        clearTimeout(
          timerRef.current
        );

      }

      timerRef.current =
        setTimeout(() => {

          setCargandoPagina(false);

          timerRef.current =
            null;

        }, 1200);

    }, []);

  // ==========================================================
  // DETECTAR RUTA AGRICULTORES
  // ==========================================================

  const esRutaAgricultores =
    useCallback(
      (pathname) => {

        const ruta =
          pathname.toLowerCase();

        return (
          ruta ===
            "/agricultores-penagos" ||

          ruta.startsWith(
            "/agricultores-penagos/"
          ) ||

          ruta ===
            "/en/penagos-farmers" ||

          ruta.startsWith(
            "/en/penagos-farmers/"
          )
        );

      },
      []
    );

  // ==========================================================
  // OBTENER REGIÓN
  // ==========================================================

  const obtenerRegionAgricultores =
    useCallback(
      (pathname) => {

        const ruta =
          pathname
            .toLowerCase()
            .replace(/\/+$/, "");

        // ------------------------------------------------------
        // ESPAÑOL
        // ------------------------------------------------------

        if (
          ruta.startsWith(
            "/agricultores-penagos/"
          )
        ) {

          const region =
            ruta.replace(
              "/agricultores-penagos/",
              ""
            );

          return region || null;
        }

        // ------------------------------------------------------
        // INGLÉS
        // ------------------------------------------------------

        if (
          ruta.startsWith(
            "/en/penagos-farmers/"
          )
        ) {

          const region =
            ruta.replace(
              "/en/penagos-farmers/",
              ""
            );

          return region || null;
        }

        return null;

      },
      []
    );

  // ==========================================================
  // CREAR RUTA AGRICULTORES
  // ==========================================================

  const crearRutaAgricultores =
    useCallback(
      (newLanguage, region) => {

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

  const changeLanguage =
    useCallback(
      (newLanguage) => {

        if (
          newLanguage === language
        ) {
          return;
        }

        const pathname =
          location.pathname
            .toLowerCase()
            .replace(/\/+$/, "") || "/";

        let nuevaRuta = null;

        // ====================================================
        // AGRICULTORES PENAGOS
        // ====================================================

        if (
          esRutaAgricultores(
            pathname
          )
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

        // ====================================================
        // INICIO
        // ====================================================

        else if (
          pathname === "/" ||
          pathname === "/en"
        ) {

          nuevaRuta =
            newLanguage === "EN"
              ? "/en"
              : "/";
        }

        // ====================================================
        // BLOG
        // ====================================================

        else if (
          pathname === "/blog" ||
          pathname === "/en/news"
        ) {

          nuevaRuta =
            newLanguage === "EN"
              ? "/en/news"
              : "/blog";
        }

        // ====================================================
        // QUIÉNES SOMOS
        // ====================================================

        else if (
          pathname ===
            "/quienes-somos" ||
          pathname ===
            "/en/about-us"
        ) {

          nuevaRuta =
            newLanguage === "EN"
              ? "/en/about-us"
              : "/quienes-somos";
        }

        // ====================================================
        // PRODUCTOS PRINCIPAL
        // ====================================================

        else if (
          pathname === "/productos" ||
          pathname === "/en/products"
        ) {

          nuevaRuta =
            newLanguage === "EN"
              ? "/en/products"
              : "/productos";
        }

        // ====================================================
        // PRODUCTOS - AGRICULTURA
        // ====================================================

        else if (
          pathname ===
            "/productos/agricultura" ||
          pathname ===
            "/en/products/agriculture"
        ) {

          nuevaRuta =
            newLanguage === "EN"
              ? "/en/products/agriculture"
              : "/productos/agricultura";
        }

        // ====================================================
        // PRODUCTOS - CAFÉ
        // ====================================================

        else if (
          pathname ===
            "/productos/cafe" ||
          pathname ===
            "/en/products/coffee"
        ) {

          nuevaRuta =
            newLanguage === "EN"
              ? "/en/products/coffee"
              : "/productos/cafe";
        }

        // ====================================================
        // PRODUCTOS - DAEWOO
        // ====================================================

        else if (
          pathname ===
            "/productos/daewoo" ||
          pathname ===
            "/en/products/daewoo"
        ) {

          nuevaRuta =
            newLanguage === "EN"
              ? "/en/products/daewoo"
              : "/productos/daewoo";
        }

        // ====================================================
        // PRODUCTOS - GAS
        // ====================================================

        else if (
          pathname ===
            "/productos/gas" ||
          pathname ===
            "/en/products/gas"
        ) {

          nuevaRuta =
            newLanguage === "EN"
              ? "/en/products/gas"
              : "/productos/gas";
        }

        // ====================================================
        // SOSTENIBILIDAD
        // ====================================================

        else if (
          pathname ===
            "/sostenibilidad" ||
          pathname ===
            "/en/sustainability"
        ) {

          nuevaRuta =
            newLanguage === "EN"
              ? "/en/sustainability"
              : "/sostenibilidad";
        }

        // ====================================================
        // PAGOS
        // ====================================================

        else if (
          pathname === "/pagos" ||
          pathname === "/en/payments"
        ) {

          nuevaRuta =
            newLanguage === "EN"
              ? "/en/payments"
              : "/pagos";
        }

        // ====================================================
        // SOPORTE
        // ====================================================

        else if (
          pathname ===
            "/soporte-tecnico" ||
          pathname ===
            "/en/technical-support"
        ) {

          nuevaRuta =
            newLanguage === "EN"
              ? "/en/technical-support"
              : "/soporte-tecnico";
        }

        // ====================================================
        // PROTECCIÓN DE DATOS
        // ====================================================

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

        // ====================================================
        // CONTACTANOS
        // ====================================================

        else if (
          pathname === "/contactanos" ||
          pathname === "/en/contact-us"
        ) {

          nuevaRuta =
            newLanguage === "EN"
              ? "/en/contact-us"
              : "/contactanos";
        }

        // ====================================================
        // CENTRALES DE CAFÉ
        // ====================================================

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

        // ====================================================
        // NOTICIA ESPAÑOL
        // ====================================================

        else if (
          pathname.startsWith(
            "/noticia/"
          )
        ) {

          const id =
            pathname
              .replace(
                "/noticia/",
                ""
              )
              .replace(
                /\/+$/,
                ""
              );

          nuevaRuta =
            newLanguage === "EN"
              ? `/en/news/${id}`
              : `/noticia/${id}`;
        }

        // ====================================================
        // NOTICIA INGLÉS
        // ====================================================

        else if (
          pathname.startsWith(
            "/en/news/"
          )
        ) {

          const id =
            pathname
              .replace(
                "/en/news/",
                ""
              )
              .replace(
                /\/+$/,
                ""
              );

          nuevaRuta =
            newLanguage === "EN"
              ? `/en/news/${id}`
              : `/noticia/${id}`;
        }

        // ====================================================
        // FALLBACK
        // ====================================================

        if (!nuevaRuta) {

          nuevaRuta =
            newLanguage === "EN"
              ? "/en"
              : "/";
        }

        // ====================================================
        // ACTUALIZAR ESTADO
        // ====================================================

        setLanguage(
          newLanguage
        );

        // ====================================================
        // MOSTRAR CARGA
        // ====================================================

        mostrarCarga();

        // ====================================================
        // NAVEGAR
        // ====================================================

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
      location.pathname
        .toLowerCase()
        .replace(/\/+$/, "") || "/";

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

    // --------------------------------------------------------
    // SI AMBAS SON AGRICULTORES
    // NO HACEMOS UNA CARGA EXTRA
    // --------------------------------------------------------

    if (
      anteriorEsAgricultores &&
      actualEsAgricultores
    ) {

      rutaAnteriorRef.current =
        pathname;

      return;
    }

    // --------------------------------------------------------
    // CUALQUIER OTRA NAVEGACIÓN
    // --------------------------------------------------------

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
              language="ES"
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
              language="ES"
              changeLanguage={
                changeLanguage
              }
            />
          }
        />

        {/* ==================================================
            QUIÉNES SOMOS
        ================================================== */}

        <Route
          path="/quienes-somos"
          element={
            <QuienesSomos
              language="ES"
              changeLanguage={
                changeLanguage
              }
            />
          }
        />

        {/* ==================================================
            PRODUCTOS
        ================================================== */}

        <Route
          path="/productos"
          element={
            <Productos
              language="ES"
              changeLanguage={
                changeLanguage
              }
            />
          }
        />

        {/* ==================================================
            PRODUCTOS - AGRICULTURA
        ================================================== */}

        <Route
          path="/productos/agricultura"
          element={
            <ProductosAgricultura
              language="ES"
              changeLanguage={
                changeLanguage
              }
            />
          }
        />

        {/* ==================================================
            PRODUCTOS - CAFÉ
        ================================================== */}

        <Route
          path="/productos/cafe"
          element={
            <ProductosCafe
              language="ES"
              changeLanguage={
                changeLanguage
              }
            />
          }
        />

        {/* ==================================================
            PRODUCTOS - DAEWOO
        ================================================== */}

        <Route
          path="/productos/daewoo"
          element={
            <ProductosDaewoo
              language="ES"
              changeLanguage={
                changeLanguage
              }
            />
          }
        />

        {/* ==================================================
            SOSTENIBILIDAD
        ================================================== */}

        <Route
          path="/sostenibilidad"
          element={
            <Sostenibilidad
              language="ES"
              changeLanguage={
                changeLanguage
              }
            />
          }
        />

        {/* ==================================================
            AGRICULTORES - PRINCIPAL
        ================================================== */}

        <Route
          path="/agricultores-penagos"
          element={
            <AgricultoresPenagos
              language="ES"
              changeLanguage={
                changeLanguage
              }
            />
          }
        />

        {/* ==================================================
            AGRICULTORES - REGIÓN
        ================================================== */}

        <Route
          path="/agricultores-penagos/:region"
          element={
            <AgricultoresMundo
              language="ES"
              changeLanguage={
                changeLanguage
              }
            />
          }
        />

        {/* ==================================================
            CENTRALES CAFÉ
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
              language="ES"
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
              language="ES"
              changeLanguage={
                changeLanguage
              }
            />
          }
        />

        {/* ==================================================
            PROTECCIÓN
        ================================================== */}

        <Route
          path="/proteccion-de-datos-personales"
          element={
            <ProteccionDatos
              language="ES"
              changeLanguage={
                changeLanguage
              }
            />
          }
        />

        {/* ==================================================
            CONTACTO
        ================================================== */}

        <Route
          path="/contactanos"
          element={
            <Contactanos
              language="ES"
              changeLanguage={
                changeLanguage
              }
            />
          }
        />

        {/* ==================================================
            NOTICIAS
        ================================================== */}

        <Route
          path="/noticia/:id"
          element={
            <NoticiaDetalle
              language="ES"
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
            PRODUCTS
        ================================================== */}

        <Route
          path="/en/products"
          element={
            <Productos
              language="EN"
              changeLanguage={
                changeLanguage
              }
            />
          }
        />

        {/* ==================================================
            PRODUCTS - AGRICULTURE
        ================================================== */}

        <Route
          path="/en/products/agriculture"
          element={
            <ProductosAgricultura
              language="EN"
              changeLanguage={
                changeLanguage
              }
            />
          }
        />

        {/* ==================================================
            PRODUCTS - COFFEE
        ================================================== */}

        <Route
          path="/en/products/coffee"
          element={
            <ProductosCafe
              language="EN"
              changeLanguage={
                changeLanguage
              }
            />
          }
        />

        {/* ==================================================
            PRODUCTS - DAEWOO
        ================================================== */}

        <Route
          path="/en/products/daewoo"
          element={
            <ProductosDaewoo
              language="EN"
              changeLanguage={
                changeLanguage
              }
            />
          }
        />

        {/* ==================================================
            SUSTAINABILITY
        ================================================== */}

        <Route
          path="/en/sustainability"
          element={
            <Sostenibilidad
              language="EN"
              changeLanguage={
                changeLanguage
              }
            />
          }
        />

        {/* ==================================================
            PENAGOS FARMERS - PRINCIPAL
        ================================================== */}

        <Route
          path="/en/penagos-farmers"
          element={
            <AgricultoresPenagos
              language="EN"
              changeLanguage={
                changeLanguage
              }
            />
          }
        />

        {/* ==================================================
            PENAGOS FARMERS - REGIÓN
        ================================================== */}

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
            SUPPORT
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
            DATA PROTECTION
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
            CONTACT
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
          BOTÓN CRÉDITO
      ====================================================== */}

      <BotonCredito
        language={language}
      />

      {/* ======================================================
          HUBSPOT
      ====================================================== */}

      <ChatPenagos />

      {/* ======================================================
          LOADING
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