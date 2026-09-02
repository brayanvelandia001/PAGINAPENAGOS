import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import {
  ChevronDown,
  ArrowRight,
  Wrench,
  CreditCard,
  Globe,
  Menu,
  X,
} from "lucide-react";

import { abrirChatPenagos } from "./ChatPenagos";

function Header({
  language = "ES",
  changeLanguage = () => {},
}) {
  const [scrolled, setScrolled] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // ============================================================
  // PRODUCTOS REALES
  // ============================================================

  const [productos, setProductos] = useState([]);
  const [cargandoProductos, setCargandoProductos] = useState(false);

  const isEnglish = language === "EN";

  // ============================================================
  // RUTAS
  // ============================================================

  const rutas = {
    home: isEnglish ? "/en" : "/",
    about: isEnglish ? "/en/about-us" : "/quienes-somos",

    farmers: isEnglish
      ? "/en/penagos-farmers"
      : "/agricultores-penagos",

    products: isEnglish ? "/en/products" : "/productos",

    agriculture: isEnglish
      ? "/en/products/agriculture"
      : "/productos/agricultura",

    coffee: isEnglish
      ? "/en/products/coffee"
      : "/productos/cafe",

    daewoo: isEnglish
      ? "/en/products/daewoo"
      : "/productos/daewoo",

    gas: "https://www.penagos.com/fittings/",

    support: isEnglish
      ? "/en/technical-support"
      : "/soporte-tecnico",

    payments: isEnglish ? "/en/payments" : "/pagos",

    news: isEnglish ? "/en/news" : "/blog",

    contact: isEnglish
      ? "/en/contact-us"
      : "/contactanos",

    plants: isEnglish
      ? "/en/coffee-processing-plants"
      : "/centrales-procesamiento-de-cafe",

    sustainability: isEnglish
      ? "/en/sustainability"
      : "/sostenibilidad",
  };

  // ============================================================
  // TRADUCCIONES
  // ============================================================

  const t = isEnglish
    ? {
        welcome: "Welcome to",
        anniversary: "130 years serving agriculture",

        support: "Technical support",
        payments: "Online payments",

        spanish: "Spanish",
        english: "English",

        about: "About us",
        farmers: "Penagos Farmers",

        products: "Products",

        agriculture: "Agriculture",
        agricultureDescription:
          "Agricultural machinery for every process.",

        coffee: "Coffee",
        coffeeDescription:
          "Solutions for coffee processing.",

        daewoo: "Daewoo Equipment",
        daewooDescription:
          "Equipment designed for demanding work.",

        gas: "Domestic Gas",
        gasDescription:
          "Accessories for domestic gas installations.",

        sustainability: "Sustainability",
        plants: "Coffee processing plants",
        blog: "News",
        contact: "Contact us",

        viewAll: "View all products",
        viewProducts: "View product",

        talk: "Let's talk",

        openMenu: "Open menu",
        closeMenu: "Close menu",

        goHome: "Go to home",
        changeLanguage: "Change language",

        loadingProducts: "Loading products...",
        noProducts: "No products available.",
      }
    : {
        welcome: "Bienvenido a",
        anniversary: "130 años al servicio de la agricultura",

        support: "Soporte técnico",
        payments: "Pagos",

        spanish: "Español",
        english: "Inglés",

        about: "Quiénes somos",
        farmers: "Agricultores Penagos",

        products: "Productos",

        agriculture: "Agricultura",
        agricultureDescription:
          "Maquinaria agrícola para cada proceso.",

        coffee: "Café",
        coffeeDescription:
          "Soluciones para el procesamiento de café.",

        daewoo: "Equipos Daewoo",
        daewooDescription:
          "Equipos diseñados para trabajos exigentes.",

        gas: "Gas domiciliario",
        gasDescription:
          "Accesorios para instalaciones de gas domiciliario.",

        sustainability: "Sostenibilidad",
        plants: "Centrales de procesamiento de café",
        blog: "Noticias",
        contact: "Contáctenos",

        viewAll: "Ver todos los productos",
        viewProducts: "Ver producto",

        talk: "Hablemos",

        openMenu: "Abrir menú",
        closeMenu: "Cerrar menú",

        goHome: "Ir al inicio",
        changeLanguage: "Cambiar idioma",

        loadingProducts: "Cargando productos...",
        noProducts: "No hay productos disponibles.",
      };

  // ============================================================
  // SCROLL
  // ============================================================

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ============================================================
  // LIMPIAR HTML
  // ============================================================

  const limpiarTexto = (texto) => {
    if (!texto) {
      return "";
    }

    return String(texto)
      .replace(/<br\s*\/?>/gi, " ")
      .replace(/<\/?p>/gi, " ")
      .replace(/<[^>]*>/g, "")
      .replace(/&nbsp;/gi, " ")
      .replace(/&amp;/gi, "&")
      .replace(/&quot;/gi, '"')
      .replace(/&#039;/gi, "'")
      .replace(/&apos;/gi, "'")
      .replace(/&lt;/gi, "<")
      .replace(/&gt;/gi, ">")
      .replace(/[ \t]+/g, " ")
      .replace(/\n+/g, " ")
      .trim();
  };

  // ============================================================
  // DETECTAR IDIOMA DEL PRODUCTO
  // ============================================================

  const obtenerIdiomaProducto = (producto) => {
    const idiomaDirecto =
      producto.lang ||
      producto.locale ||
      producto.wpml_language ||
      producto.language_code ||
      producto.lang_code;

    if (typeof idiomaDirecto === "string") {
      const idioma = idiomaDirecto.toLowerCase().trim();

      if (
        idioma === "es" ||
        idioma === "es-es" ||
        idioma === "spa" ||
        idioma === "spanish"
      ) {
        return "ES";
      }

      if (
        idioma === "en" ||
        idioma === "en-us" ||
        idioma === "en-gb" ||
        idioma === "eng" ||
        idioma === "english"
      ) {
        return "EN";
      }
    }

    // ==========================================================
    // OBJETO LANGUAGE
    // ==========================================================

    if (
      producto.language &&
      typeof producto.language === "object"
    ) {
      const idiomaObjeto =
        producto.language.code ||
        producto.language.slug ||
        producto.language.locale ||
        producto.language.name;

      if (typeof idiomaObjeto === "string") {
        const idioma = idiomaObjeto.toLowerCase().trim();

        if (
          idioma === "es" ||
          idioma === "es-es" ||
          idioma === "spa" ||
          idioma === "spanish"
        ) {
          return "ES";
        }

        if (
          idioma === "en" ||
          idioma === "en-us" ||
          idioma === "en-gb" ||
          idioma === "eng" ||
          idioma === "english"
        ) {
          return "EN";
        }
      }
    }

    // ==========================================================
    // CATEGORÍAS
    // ==========================================================

    if (Array.isArray(producto.categories)) {
      for (const categoria of producto.categories) {
        const textoCategoria =
          `${categoria.name || ""} ${
            categoria.slug || ""
          }`.toLowerCase();

        if (
          textoCategoria.includes("español") ||
          textoCategoria.includes("espanol") ||
          textoCategoria.includes("spanish") ||
          textoCategoria === "es"
        ) {
          return "ES";
        }

        if (
          textoCategoria.includes("english") ||
          textoCategoria.includes("inglés") ||
          textoCategoria.includes("ingles") ||
          textoCategoria === "en"
        ) {
          return "EN";
        }
      }
    }

    // ==========================================================
    // SLUG
    // ==========================================================

    const slug = (producto.slug || "").toLowerCase();

    const palabrasIngles = [
      "-english",
      "-ingles",
      "-inglés",
      "_english",
      "_ingles",
      "_en",
      "/en/",
      "english-",
      "ingles-",
      "inglés-",
    ];

    if (
      palabrasIngles.some((palabra) =>
        slug.includes(palabra)
      )
    ) {
      return "EN";
    }

    const palabrasEspanol = [
      "-spanish",
      "-espanol",
      "-español",
      "_spanish",
      "_espanol",
      "_español",
      "_es",
      "/es/",
      "spanish-",
      "espanol-",
      "español-",
    ];

    if (
      palabrasEspanol.some((palabra) =>
        slug.includes(palabra)
      )
    ) {
      return "ES";
    }

    return null;
  };

  // ============================================================
  // CARGAR PRODUCTOS DESDE WOOCOMMERCE
  // ============================================================

  useEffect(() => {
    let cancelado = false;

    const controlador = new AbortController();

    const cargarProductos = async () => {
      try {
        setCargandoProductos(true);

        const response = await fetch(
          "https://penagos.com/wp-json/wc/store/v1/products?per_page=100",
          {
            signal: controlador.signal,
          }
        );

        if (!response.ok) {
          throw new Error(
            `Error HTTP ${response.status}`
          );
        }

        const data = await response.json();

        if (cancelado) {
          return;
        }

        // ======================================================
        // PRODUCTOS CON IMAGEN
        // ======================================================

        const productosConImagen = data.filter(
          (producto) =>
            Array.isArray(producto.images) &&
            producto.images.length > 0
        );

        // ======================================================
        // FILTRAR POR IDIOMA
        // ======================================================

        const productosFiltrados =
          productosConImagen.filter((producto) => {
            const idiomaProducto =
              obtenerIdiomaProducto(producto);

            return (
              idiomaProducto === language ||
              idiomaProducto === null
            );
          });

        // ======================================================
        // EVITAR DUPLICADOS
        // ======================================================

        const productosUnicos = [];
        const ids = new Set();

        for (const producto of productosFiltrados) {
          if (!ids.has(producto.id)) {
            ids.add(producto.id);
            productosUnicos.push(producto);
          }
        }

        // ======================================================
        // SELECCIONAR 5 PRODUCTOS
        // PRIORIZANDO CATEGORÍAS DIFERENTES
        // ======================================================

        const categoriasUsadas = new Set();
        const productosSeleccionados = [];

        for (const producto of productosUnicos) {
          if (productosSeleccionados.length >= 5) {
            break;
          }

          const categoria =
            Array.isArray(producto.categories) &&
            producto.categories.length > 0
              ? producto.categories[0]
              : null;

          if (!categoria) {
            continue;
          }

          const categoriaKey =
            categoria.id ||
            categoria.slug ||
            limpiarTexto(categoria.name);

          if (categoriasUsadas.has(categoriaKey)) {
            continue;
          }

          categoriasUsadas.add(categoriaKey);
          productosSeleccionados.push(producto);
        }

        // ======================================================
        // COMPLETAR HASTA 5
        // ======================================================

        if (productosSeleccionados.length < 5) {
          for (const producto of productosUnicos) {
            if (productosSeleccionados.length >= 5) {
              break;
            }

            const yaExiste =
              productosSeleccionados.some(
                (item) => item.id === producto.id
              );

            if (!yaExiste) {
              productosSeleccionados.push(producto);
            }
          }
        }

        // ======================================================
        // GUARDAR
        // ======================================================

        if (!cancelado) {
          setProductos(
            productosSeleccionados.slice(0, 5)
          );
        }
      } catch (error) {
        if (error.name === "AbortError") {
          return;
        }

        console.error(
          "Error cargando productos del Header:",
          error
        );

        if (!cancelado) {
          setProductos([]);
        }
      } finally {
        if (!cancelado) {
          setCargandoProductos(false);
        }
      }
    };

    cargarProductos();

    return () => {
      cancelado = true;
      controlador.abort();
    };
  }, [language]);

  // ============================================================
  // CERRAR MENÚS
  // ============================================================

  const cerrarMenus = () => {
    setMobileOpen(false);
    setLanguageOpen(false);
  };

  // ============================================================
  // CHAT
  // ============================================================

  const abrirChat = () => {
    cerrarMenus();
    abrirChatPenagos();
  };

  // ============================================================
  // CAMBIAR IDIOMA
  // ============================================================

  const seleccionarIdioma = (newLanguage) => {
    if (
      newLanguage !== "ES" &&
      newLanguage !== "EN"
    ) {
      return;
    }

    localStorage.setItem(
      "penagos-language",
      newLanguage
    );

    cerrarMenus();
    changeLanguage(newLanguage);
  };

  // ============================================================
  // RENDER
  // ============================================================

  return (
    <header
      className={`
        fixed
        left-0
        top-0
        z-[1000]
        w-full
        transition-all
        duration-300
        ${
          scrolled
            ? "bg-white/95 shadow-[0_8px_30px_rgba(8,15,50,0.08)] backdrop-blur-md"
            : "bg-transparent"
        }
      `}
    >
      {/* =====================================================
          TOP BAR
      ===================================================== */}

      <div
        className={`
          hidden
          md:block
          transition-all
          duration-300
          ${
            scrolled
              ? "border-b border-slate-200 bg-[#F1F3F5]"
              : "bg-transparent"
          }
        `}
      >
        <div
          className="
            mx-auto
            flex
            h-[42px]
            max-w-[1380px]
            items-center
            justify-between
            px-6
            lg:px-10
          "
        >
          <p
            className={`
              text-[12px]
              tracking-wide
              ${
                scrolled
                  ? "text-[#64748B]"
                  : "text-white/85"
              }
            `}
          >
            {t.welcome}{" "}
            <span
              className={`
                font-bold
                ${
                  scrolled
                    ? "text-[#302b80]"
                    : "text-white"
                }
              `}
            >
              Penagos
            </span>
            , {t.anniversary}
          </p>

          <div
            className="
              flex
              items-center
              gap-5
              text-[12px]
              font-semibold
            "
          >
            {/* SOPORTE */}

            <Link
              to={rutas.support}
              onClick={cerrarMenus}
              className={`
                flex
                cursor-pointer
                items-center
                gap-2
                transition-colors
                ${
                  scrolled
                    ? "text-[#475569] hover:text-[#302b80]"
                    : "text-white/90 hover:text-white"
                }
              `}
            >
              <Wrench size={14} />
              {t.support}
            </Link>

            <span
              className={`
                h-4
                w-px
                ${
                  scrolled
                    ? "bg-slate-300"
                    : "hidden"
                }
              `}
            />

            {/* PAGOS */}

            <Link
              to={rutas.payments}
              onClick={cerrarMenus}
              className={`
                flex
                cursor-pointer
                items-center
                gap-2
                transition-colors
                ${
                  scrolled
                    ? "text-[#475569] hover:text-[#302b80]"
                    : "text-white/90 hover:text-white"
                }
              `}
            >
              <CreditCard size={14} />
              {t.payments}
            </Link>

            <span
              className={`
                h-4
                w-px
                ${
                  scrolled
                    ? "bg-slate-300"
                    : "hidden"
                }
              `}
            />

            {/* IDIOMA */}

            <div className="relative">
              <button
                type="button"
                onClick={() =>
                  setLanguageOpen((prev) => !prev)
                }
                aria-label={t.changeLanguage}
                className={`
                  flex
                  cursor-pointer
                  items-center
                  gap-2
                  transition-colors
                  ${
                    scrolled
                      ? "text-[#475569] hover:text-[#302b80]"
                      : "text-white/90 hover:text-white"
                  }
                `}
              >
                <Globe size={14} />

                <span className="font-bold">
                  {language}
                </span>

                <ChevronDown
                  size={12}
                  className={`
                    transition-transform
                    duration-300
                    ${
                      languageOpen
                        ? "rotate-180"
                        : ""
                    }
                  `}
                />
              </button>

              {languageOpen && (
                <div
                  className="
                    absolute
                    right-0
                    top-7
                    z-[100]
                    w-[145px]
                    rounded-xl
                    border
                    border-slate-200
                    bg-white
                    p-1.5
                    shadow-[0_15px_40px_rgba(8,15,50,0.15)]
                  "
                >
                  <button
                    type="button"
                    onClick={() =>
                      seleccionarIdioma("ES")
                    }
                    className="
                      flex
                      w-full
                      cursor-pointer
                      items-center
                      justify-between
                      rounded-lg
                      px-3
                      py-2.5
                      text-left
                      text-xs
                      font-semibold
                      text-[#07133d]
                      transition-colors
                      hover:bg-[#F1F3F5]
                    "
                  >
                    <span>{t.spanish}</span>

                    <span
                      className={
                        language === "ES"
                          ? "font-bold text-[#302b80]"
                          : "text-slate-400"
                      }
                    >
                      ES
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      seleccionarIdioma("EN")
                    }
                    className="
                      flex
                      w-full
                      cursor-pointer
                      items-center
                      justify-between
                      rounded-lg
                      px-3
                      py-2.5
                      text-left
                      text-xs
                      font-semibold
                      text-[#07133d]
                      transition-colors
                      hover:bg-[#F1F3F5]
                    "
                  >
                    <span>{t.english}</span>

                    <span
                      className={
                        language === "EN"
                          ? "font-bold text-[#302b80]"
                          : "text-slate-400"
                      }
                    >
                      EN
                    </span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          MAIN HEADER
      ===================================================== */}

      <div
        className={`
          transition-all
          duration-300
          ${
            scrolled
              ? "border-b border-slate-200"
              : "border-none"
          }
        `}
      >
        <div
          className="
            mx-auto
            flex
            min-h-[88px]
            max-w-[1380px]
            items-center
            px-6
            lg:px-10
          "
        >
          {/* LOGO */}

          <Link
            to={rutas.home}
            onClick={cerrarMenus}
            aria-label={t.goHome}
            className="
              flex
              shrink-0
              cursor-pointer
              items-center
            "
          >
            <img
              src="https://penagos.com/wp-content/uploads/2020/03/Logotipo-Penagos-Hermanos-PNG.png"
              alt="Penagos Hermanos"
              className={`
                w-[155px]
                object-contain
                transition-all
                duration-300
                lg:w-[175px]
                ${
                  scrolled
                    ? ""
                    : "brightness-0 invert"
                }
              `}
            />
          </Link>

          {/* =================================================
              DESKTOP NAV
          ================================================= */}

          <nav
            className="
              ml-auto
              hidden
              items-center
              lg:flex
            "
          >
            <HeaderNavLink
              to={rutas.about}
              onClick={cerrarMenus}
              scrolled={scrolled}
            >
              {t.about}
            </HeaderNavLink>

            <HeaderNavLink
              to={rutas.farmers}
              onClick={cerrarMenus}
              scrolled={scrolled}
            >
              {t.farmers}
            </HeaderNavLink>

            {/* =================================================
                PRODUCTOS
            ================================================= */}

            <div className="group relative">
              <div
                className={`
                  flex
                  items-center
                  text-[13px]
                  font-bold
                  ${
                    scrolled
                      ? "text-[#10152f]"
                      : "text-white"
                  }
                `}
              >
                <Link
                  to={rutas.products}
                  onClick={cerrarMenus}
                  className="
                    cursor-pointer
                    px-4
                    py-8
                    transition-colors
                    hover:text-[#302b80]
                  "
                >
                  {t.products}
                </Link>

                <span className="-ml-3 cursor-pointer px-2 py-8">
                  <ChevronDown
                    size={15}
                    className="
                      transition-transform
                      duration-300
                      group-hover:rotate-180
                    "
                  />
                </span>
              </div>

              {/* =================================================
                  MEGA MENU PRODUCTOS — MÁS PEQUEÑO
              ================================================= */}

              <div
                className="
                  invisible
                  absolute
                  left-1/2
                  top-full
                  w-[900px]
                  -translate-x-1/2
                  translate-y-4
                  overflow-hidden
                  rounded-[20px]
                  border
                  border-slate-200
                  bg-white
                  opacity-0
                  shadow-[0_25px_70px_rgba(8,15,50,0.18)]
                  transition-all
                  duration-300
                  group-hover:visible
                  group-hover:translate-y-0
                  group-hover:opacity-100
                "
              >
                <div
                  className="
                    grid
                    grid-cols-[210px_1fr]
                  "
                >
                  {/* =================================================
                      COLUMNA IZQUIERDA
                  ================================================= */}

                  <div
                    className="
                      relative
                      flex
                      min-h-[250px]
                      items-center
                      justify-center
                      overflow-hidden
                      bg-[#07133d]
                      p-5
                    "
                  >
                    {/* DECORACIÓN */}

                    <div
                      className="
                        absolute
                        -right-16
                        -top-16
                        h-32
                        w-32
                        rounded-full
                        bg-[#302b80]/40
                        blur-3xl
                      "
                    />

                    <div
                      className="
                        absolute
                        -bottom-16
                        -left-16
                        h-36
                        w-36
                        rounded-full
                        bg-cyan-400/10
                        blur-3xl
                      "
                    />

                    {/* LÍNEAS */}

                    <div
                      className="
                        absolute
                        left-5
                        top-5
                        h-px
                        w-12
                        bg-white/20
                      "
                    />

                    <div
                      className="
                        absolute
                        bottom-5
                        right-5
                        h-px
                        w-12
                        bg-white/20
                      "
                    />

                    {/* CÍRCULOS */}

                    <div
                      className="
                        absolute
                        left-1/2
                        top-1/2
                        h-[170px]
                        w-[170px]
                        -translate-x-1/2
                        -translate-y-1/2
                        rounded-full
                        border
                        border-white/[0.06]
                      "
                    />

                    <div
                      className="
                        absolute
                        left-1/2
                        top-1/2
                        h-[130px]
                        w-[130px]
                        -translate-x-1/2
                        -translate-y-1/2
                        rounded-full
                        border
                        border-white/[0.05]
                      "
                    />

                    {/* LOGO */}

                    <div
                      className="
                        relative
                        z-10
                        flex
                        h-[140px]
                        w-[175px]
                        items-center
                        justify-center
                        rounded-[22px]
                        border
                        border-white/10
                        bg-white/[0.04]
                        shadow-[0_15px_45px_rgba(0,0,0,0.18)]
                        backdrop-blur-sm
                      "
                    >
                      <img
                        src="https://penagos.com/wp-content/uploads/2020/03/Logotipo-Penagos-Hermanos-PNG.png"
                        alt="Penagos Hermanos"
                        className="
                          w-[145px]
                          object-contain
                          brightness-0
                          invert
                          transition-transform
                          duration-500
                          hover:scale-105
                        "
                      />
                    </div>
                  </div>

                  {/* =================================================
                      CATEGORÍAS
                  ================================================= */}

                  <div className="p-5">
                    <div
                      className="
                        mb-4
                        flex
                        items-end
                        justify-between
                      "
                    >
                      <div>
                        <p
                          className="
                            text-[9px]
                            font-bold
                            uppercase
                            tracking-[0.18em]
                            text-[#302b80]
                          "
                        >
                          {t.products}
                        </p>

                        <h3
                          className="
                            mt-1
                            text-lg
                            font-extrabold
                            tracking-tight
                            text-[#07133d]
                          "
                        >
                          {t.viewAll}
                        </h3>
                      </div>

                      <span
                        className="
                          text-[9px]
                          font-semibold
                          text-slate-400
                        "
                      >
                        04{" "}
                        {isEnglish
                          ? "categories"
                          : "categorías"}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">

                      {/* =================================================
                          AGRICULTURA
                      ================================================= */}

                      <Link
                        to={rutas.agriculture}
                        onClick={cerrarMenus}
                        className="
                          group/card
                          relative
                          min-h-[105px]
                          overflow-hidden
                          rounded-[17px]
                          border
                          border-slate-200
                          bg-gradient-to-br
                          from-white
                          via-white
                          to-slate-50
                          p-4
                          transition-all
                          duration-300
                          hover:-translate-y-1
                          hover:border-[#302b80]/30
                          hover:shadow-[0_15px_35px_rgba(8,15,50,0.10)]
                        "
                      >
                        <div
                          className="
                            absolute
                            -right-7
                            -top-7
                            h-20
                            w-20
                            rounded-full
                            bg-[#302b80]/5
                            transition-transform
                            duration-500
                            group-hover/card:scale-150
                          "
                        />

                        <div
                          className="
                            relative
                            z-10
                            flex
                            items-start
                            justify-between
                          "
                        >
                          <span
                            className="
                              flex
                              h-8
                              w-8
                              items-center
                              justify-center
                              rounded-xl
                              bg-[#302b80]
                              text-[10px]
                              font-extrabold
                              text-white
                              shadow-sm
                            "
                          >
                            01
                          </span>

                          <span
                            className="
                              flex
                              h-7
                              w-7
                              items-center
                              justify-center
                              rounded-full
                              border
                              border-slate-200
                              bg-white
                              text-[#302b80]
                              transition-all
                              duration-300
                              group-hover/card:translate-x-1
                              group-hover/card:bg-[#302b80]
                              group-hover/card:text-white
                            "
                          >
                            <ArrowRight size={13} />
                          </span>
                        </div>

                        <div className="relative z-10 mt-3">
                          <h4
                            className="
                              text-[14px]
                              font-extrabold
                              text-[#07133d]
                              transition-colors
                              duration-300
                              group-hover/card:text-[#302b80]
                            "
                          >
                            {t.agriculture}
                          </h4>

                          <p
                            className="
                              mt-1
                              max-w-[210px]
                              text-[9px]
                              font-medium
                              leading-4
                              text-slate-500
                            "
                          >
                            {t.agricultureDescription}
                          </p>
                        </div>

                        <div
                          className="
                            absolute
                            bottom-0
                            left-0
                            h-1
                            w-0
                            bg-[#302b80]
                            transition-all
                            duration-300
                            group-hover/card:w-full
                          "
                        />
                      </Link>

                      {/* =================================================
                          CAFÉ
                      ================================================= */}

                      <Link
                        to={rutas.coffee}
                        onClick={cerrarMenus}
                        className="
                          group/card
                          relative
                          min-h-[105px]
                          overflow-hidden
                          rounded-[17px]
                          border
                          border-slate-200
                          bg-gradient-to-br
                          from-white
                          via-white
                          to-slate-50
                          p-4
                          transition-all
                          duration-300
                          hover:-translate-y-1
                          hover:border-[#302b80]/30
                          hover:shadow-[0_15px_35px_rgba(8,15,50,0.10)]
                        "
                      >
                        <div
                          className="
                            absolute
                            -right-7
                            -top-7
                            h-20
                            w-20
                            rounded-full
                            bg-[#302b80]/5
                            transition-transform
                            duration-500
                            group-hover/card:scale-150
                          "
                        />

                        <div
                          className="
                            relative
                            z-10
                            flex
                            items-start
                            justify-between
                          "
                        >
                          <span
                            className="
                              flex
                              h-8
                              w-8
                              items-center
                              justify-center
                              rounded-xl
                              bg-[#07133d]
                              text-[10px]
                              font-extrabold
                              text-white
                              shadow-sm
                            "
                          >
                            02
                          </span>

                          <span
                            className="
                              flex
                              h-7
                              w-7
                              items-center
                              justify-center
                              rounded-full
                              border
                              border-slate-200
                              bg-white
                              text-[#302b80]
                              transition-all
                              duration-300
                              group-hover/card:translate-x-1
                              group-hover/card:bg-[#302b80]
                              group-hover/card:text-white
                            "
                          >
                            <ArrowRight size={13} />
                          </span>
                        </div>

                        <div className="relative z-10 mt-3">
                          <h4
                            className="
                              text-[14px]
                              font-extrabold
                              text-[#07133d]
                              transition-colors
                              duration-300
                              group-hover/card:text-[#302b80]
                            "
                          >
                            {t.coffee}
                          </h4>

                          <p
                            className="
                              mt-1
                              max-w-[210px]
                              text-[9px]
                              font-medium
                              leading-4
                              text-slate-500
                            "
                          >
                            {t.coffeeDescription}
                          </p>
                        </div>

                        <div
                          className="
                            absolute
                            bottom-0
                            left-0
                            h-1
                            w-0
                            bg-[#302b80]
                            transition-all
                            duration-300
                            group-hover/card:w-full
                          "
                        />
                      </Link>

                      {/* =================================================
                          DAEWOO
                      ================================================= */}

                      <Link
                        to={rutas.daewoo}
                        onClick={cerrarMenus}
                        className="
                          group/card
                          relative
                          min-h-[105px]
                          overflow-hidden
                          rounded-[17px]
                          border
                          border-slate-200
                          bg-gradient-to-br
                          from-white
                          via-white
                          to-slate-50
                          p-4
                          transition-all
                          duration-300
                          hover:-translate-y-1
                          hover:border-[#302b80]/30
                          hover:shadow-[0_15px_35px_rgba(8,15,50,0.10)]
                        "
                      >
                        <div
                          className="
                            absolute
                            -right-7
                            -top-7
                            h-20
                            w-20
                            rounded-full
                            bg-[#302b80]/5
                            transition-transform
                            duration-500
                            group-hover/card:scale-150
                          "
                        />

                        <div
                          className="
                            relative
                            z-10
                            flex
                            items-start
                            justify-between
                          "
                        >
                          <span
                            className="
                              flex
                              h-8
                              w-8
                              items-center
                              justify-center
                              rounded-xl
                              bg-[#302b80]
                              text-[10px]
                              font-extrabold
                              text-white
                              shadow-sm
                            "
                          >
                            03
                          </span>

                          <span
                            className="
                              flex
                              h-7
                              w-7
                              items-center
                              justify-center
                              rounded-full
                              border
                              border-slate-200
                              bg-white
                              text-[#302b80]
                              transition-all
                              duration-300
                              group-hover/card:translate-x-1
                              group-hover/card:bg-[#302b80]
                              group-hover/card:text-white
                            "
                          >
                            <ArrowRight size={13} />
                          </span>
                        </div>

                        <div className="relative z-10 mt-3">
                          <h4
                            className="
                              text-[14px]
                              font-extrabold
                              text-[#07133d]
                              transition-colors
                              duration-300
                              group-hover/card:text-[#302b80]
                            "
                          >
                            {t.daewoo}
                          </h4>

                          <p
                            className="
                              mt-1
                              max-w-[210px]
                              text-[9px]
                              font-medium
                              leading-4
                              text-slate-500
                            "
                          >
                            {t.daewooDescription}
                          </p>
                        </div>

                        <div
                          className="
                            absolute
                            bottom-0
                            left-0
                            h-1
                            w-0
                            bg-[#302b80]
                            transition-all
                            duration-300
                            group-hover/card:w-full
                          "
                        />
                      </Link>

                      {/* =================================================
                          GAS
                      ================================================= */}

                      <Link
                        to={rutas.gas}
                        onClick={cerrarMenus}
                        className="
                          group/card
                          relative
                          min-h-[105px]
                          overflow-hidden
                          rounded-[17px]
                          border
                          border-slate-200
                          bg-gradient-to-br
                          from-white
                          via-white
                          to-slate-50
                          p-4
                          transition-all
                          duration-300
                          hover:-translate-y-1
                          hover:border-[#302b80]/30
                          hover:shadow-[0_15px_35px_rgba(8,15,50,0.10)]
                        "
                      >
                        <div
                          className="
                            absolute
                            -right-7
                            -top-7
                            h-20
                            w-20
                            rounded-full
                            bg-[#302b80]/5
                            transition-transform
                            duration-500
                            group-hover/card:scale-150
                          "
                        />

                        <div
                          className="
                            relative
                            z-10
                            flex
                            items-start
                            justify-between
                          "
                        >
                          <span
                            className="
                              flex
                              h-8
                              w-8
                              items-center
                              justify-center
                              rounded-xl
                              bg-[#07133d]
                              text-[10px]
                              font-extrabold
                              text-white
                              shadow-sm
                            "
                          >
                            04
                          </span>

                          <span
                            className="
                              flex
                              h-7
                              w-7
                              items-center
                              justify-center
                              rounded-full
                              border
                              border-slate-200
                              bg-white
                              text-[#302b80]
                              transition-all
                              duration-300
                              group-hover/card:translate-x-1
                              group-hover/card:bg-[#302b80]
                              group-hover/card:text-white
                            "
                          >
                            <ArrowRight size={13} />
                          </span>
                        </div>

                        <div className="relative z-10 mt-3">
                          <h4
                            className="
                              text-[14px]
                              font-extrabold
                              text-[#07133d]
                              transition-colors
                              duration-300
                              group-hover/card:text-[#302b80]
                            "
                          >
                            {t.gas}
                          </h4>

                          <p
                            className="
                              mt-1
                              max-w-[210px]
                              text-[9px]
                              font-medium
                              leading-4
                              text-slate-500
                            "
                          >
                            {t.gasDescription}
                          </p>
                        </div>

                        <div
                          className="
                            absolute
                            bottom-0
                            left-0
                            h-1
                            w-0
                            bg-[#302b80]
                            transition-all
                            duration-300
                            group-hover/card:w-full
                          "
                        />
                      </Link>
                    </div>

                    {/* VER TODOS */}

                    <div
                      className="
                        mt-4
                        flex
                        justify-end
                        border-t
                        border-slate-100
                        pt-3
                      "
                    >
                      <Link
                        to={rutas.products}
                        onClick={cerrarMenus}
                        className="
                          group/all
                          inline-flex
                          items-center
                          gap-2
                          text-[10px]
                          font-bold
                          text-[#302b80]
                          transition-colors
                          hover:text-[#242060]
                        "
                      >
                        {t.viewAll}

                        <span
                          className="
                            flex
                            h-6
                            w-6
                            items-center
                            justify-center
                            rounded-full
                            bg-[#302b80]/10
                            transition-all
                            duration-300
                            group-hover/all:translate-x-1
                            group-hover/all:bg-[#302b80]/15
                          "
                        >
                          <ArrowRight size={12} />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SOSTENIBILIDAD */}

            <HeaderNavLink
              to={rutas.sustainability}
              onClick={cerrarMenus}
              scrolled={scrolled}
            >
              {t.sustainability}
            </HeaderNavLink>

            {/* CENTRALES */}

            <Link
              to={rutas.plants}
              onClick={cerrarMenus}
              className={`
                group
                relative
                cursor-pointer
                px-4
                py-8
                text-center
                text-[13px]
                font-bold
                leading-4
                transition-colors
                ${
                  scrolled
                    ? "text-[#10152f] hover:text-[#302b80]"
                    : "text-white hover:text-white"
                }
              `}
            >
              {isEnglish ? (
                <>
                  Coffee
                  <br />
                  processing plants
                </>
              ) : (
                <>
                  Centrales de
                  <br />
                  procesamiento de café
                </>
              )}

              <span
                className="
                  absolute
                  bottom-5
                  left-4
                  right-4
                  h-[2px]
                  origin-left
                  scale-x-0
                  rounded-full
                  bg-[#302b80]
                  transition-transform
                  duration-300
                  group-hover:scale-x-100
                "
              />
            </Link>

            {/* NOTICIAS */}

            <HeaderNavLink
              to={rutas.news}
              onClick={cerrarMenus}
              scrolled={scrolled}
            >
              {t.blog}
            </HeaderNavLink>

            {/* CONTACTO */}

            <HeaderNavLink
              to={rutas.contact}
              onClick={cerrarMenus}
              scrolled={scrolled}
            >
              {t.contact}
            </HeaderNavLink>
          </nav>

          {/* =================================================
              HABLEMOS
          ================================================= */}

          <div
            className="
              ml-5
              hidden
              items-center
              lg:flex
            "
          >
            <button
              type="button"
              onClick={abrirChat}
              className="
                group
                flex
                cursor-pointer
                items-center
                gap-3
                rounded-full
                bg-[#302b80]
                px-5
                py-3
                text-[13px]
                font-bold
                text-white
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#242060]
                hover:shadow-lg
              "
            >
              {t.talk}

              <span
                className="
                  flex
                  h-6
                  w-6
                  items-center
                  justify-center
                  rounded-full
                  bg-white/15
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                <ArrowRight size={14} />
              </span>
            </button>
          </div>

          {/* =================================================
              MOBILE BUTTON
          ================================================= */}

          <button
            type="button"
            onClick={() =>
              setMobileOpen((prev) => !prev)
            }
            className={`
              ml-auto
              flex
              h-11
              w-11
              cursor-pointer
              items-center
              justify-center
              rounded-lg
              border
              lg:hidden
              ${
                scrolled
                  ? "border-slate-200 text-[#07133d]"
                  : "border-white/30 text-white"
              }
            `}
            aria-label={
              mobileOpen
                ? t.closeMenu
                : t.openMenu
            }
          >
            {mobileOpen ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>
        </div>

        {/* =====================================================
            MOBILE MENU
        ===================================================== */}

        {mobileOpen && (
          <div
            className="
              border-t
              border-slate-100
              bg-white
              px-6
              py-5
              shadow-xl
              lg:hidden
            "
          >
            <div className="flex flex-col">
              <MobileLink
                to={rutas.about}
                onClick={cerrarMenus}
              >
                {t.about}
              </MobileLink>

              <MobileLink
                to={rutas.farmers}
                onClick={cerrarMenus}
              >
                {t.farmers}
              </MobileLink>

              <MobileLink
                to={rutas.products}
                onClick={cerrarMenus}
              >
                {t.products}
              </MobileLink>

              {/* CATEGORÍAS */}

              <MobileLink
                to={rutas.agriculture}
                onClick={cerrarMenus}
              >
                {t.agriculture}
              </MobileLink>

              <MobileLink
                to={rutas.coffee}
                onClick={cerrarMenus}
              >
                {t.coffee}
              </MobileLink>

              <MobileLink
                to={rutas.daewoo}
                onClick={cerrarMenus}
              >
                {t.daewoo}
              </MobileLink>

              <MobileLink
                to={rutas.gas}
                onClick={cerrarMenus}
              >
                {t.gas}
              </MobileLink>

              <MobileLink
                to={rutas.sustainability}
                onClick={cerrarMenus}
              >
                {t.sustainability}
              </MobileLink>

              <MobileLink
                to={rutas.plants}
                onClick={cerrarMenus}
              >
                {t.plants}
              </MobileLink>

              <MobileLink
                to={rutas.support}
                onClick={cerrarMenus}
              >
                {t.support}
              </MobileLink>

              <MobileLink
                to={rutas.payments}
                onClick={cerrarMenus}
              >
                {t.payments}
              </MobileLink>

              <MobileLink
                to={rutas.news}
                onClick={cerrarMenus}
              >
                {t.blog}
              </MobileLink>

              <MobileLink
                to={rutas.contact}
                onClick={cerrarMenus}
              >
                {t.contact}
              </MobileLink>

              {/* CHAT */}

              <button
                type="button"
                onClick={abrirChat}
                className="
                  mt-5
                  flex
                  w-full
                  cursor-pointer
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  bg-[#302b80]
                  px-5
                  py-3.5
                  text-sm
                  font-bold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#242060]
                "
              >
                {t.talk}

                <ArrowRight size={16} />
              </button>

              {/* IDIOMA */}

              <div
                className="
                  mt-4
                  border-t
                  border-slate-100
                  pt-4
                "
              >
                <button
                  type="button"
                  onClick={() =>
                    seleccionarIdioma(
                      language === "ES"
                        ? "EN"
                        : "ES"
                    )
                  }
                  aria-label={t.changeLanguage}
                  className="
                    flex
                    w-full
                    cursor-pointer
                    items-center
                    justify-between
                    rounded-xl
                    bg-[#F1F3F5]
                    px-4
                    py-3
                    text-sm
                    font-bold
                    text-[#07133d]
                    transition-all
                    duration-300
                    hover:bg-[#e7e9ec]
                  "
                >
                  <span
                    className="
                      flex
                      items-center
                      gap-2
                    "
                  >
                    <Globe size={16} />

                    {language === "ES"
                      ? t.english
                      : t.spanish}
                  </span>

                  <span className="text-[#302b80]">
                    {language === "ES"
                      ? "EN"
                      : "ES"}
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

// ============================================================
// HEADER NAV LINK
// ============================================================

function HeaderNavLink({
  to,
  children,
  onClick,
  scrolled,
  active = false,
}) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`
        group
        relative
        cursor-pointer
        px-4
        py-8
        text-[13px]
        font-bold
        transition-colors
        duration-300
        ${
          scrolled
            ? "text-[#10152f] hover:text-[#302b80]"
            : "text-white hover:text-white"
        }
      `}
    >
      {children}

      <span
        className={`
          absolute
          bottom-5
          left-4
          right-4
          h-[2px]
          origin-left
          rounded-full
          bg-[#302b80]
          transition-transform
          duration-300
          ${
            active
              ? "scale-x-100"
              : "scale-x-0 group-hover:scale-x-100"
          }
        `}
      />
    </Link>
  );
}

// ============================================================
// MOBILE LINK
// ============================================================

function MobileLink({
  to,
  children,
  onClick,
}) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="
        cursor-pointer
        border-b
        border-slate-100
        py-4
        text-sm
        font-bold
        text-[#07133d]
        transition-all
        duration-300
        hover:pl-2
        hover:text-[#302b80]
      "
    >
      {children}
    </Link>
  );
}

// ============================================================
// PRODUCT ITEM DINÁMICO
// ============================================================

function ProductItem({
  producto,
  viewText,
  onClick,
  limpiarTexto,
}) {
  const imagen = producto?.images?.[0];

  const nombre = limpiarTexto(producto?.name);

  const categoria =
    Array.isArray(producto?.categories) &&
    producto.categories.length > 0
      ? limpiarTexto(
          producto.categories[0]?.name
        )
      : "";

  // ==========================================================
  // URL REAL DE WOOCOMMERCE
  // ==========================================================

  const urlProducto =
    producto?.permalink ||
    `https://penagos.com/producto/${producto?.slug}/`;

  return (
    <a
      href={urlProducto}
      onClick={onClick}
      target="_self"
      className="
        group
        relative
        block
        overflow-hidden
        rounded-2xl
        border
        border-slate-100
        bg-white
        p-3
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-slate-200
        hover:shadow-[0_15px_35px_rgba(8,15,50,0.10)]
      "
    >
      {/* IMAGEN */}

      <div
        className="
          relative
          mb-3
          flex
          h-[108px]
          w-full
          items-center
          justify-center
          overflow-hidden
          rounded-xl
          bg-slate-50
        "
      >
        {imagen?.src ? (
          <img
            src={imagen.src}
            alt={imagen.alt || nombre}
            loading="lazy"
            decoding="async"
            className="
              h-full
              w-full
              object-contain
              p-3
              transition-transform
              duration-500
              group-hover:scale-110
            "
          />
        ) : (
          <div
            className="
              flex
              h-full
              w-full
              items-center
              justify-center
              text-xs
              text-slate-400
            "
          >
            Penagos
          </div>
        )}

        {/* INDICADOR */}

        <span
          className="
            absolute
            right-2
            top-2
            h-1.5
            w-1.5
            rounded-full
            bg-[#302b80]
            opacity-70
          "
        />
      </div>

      {/* CATEGORÍA */}

      {categoria && (
        <p
          className="
            mb-1
            line-clamp-1
            text-[8px]
            font-bold
            uppercase
            tracking-[0.12em]
            text-[#302b80]
          "
        >
          {categoria}
        </p>
      )}

      {/* NOMBRE */}

      <h4
        className="
          line-clamp-2
          min-h-[40px]
          text-[12px]
          font-extrabold
          leading-5
          text-[#07133d]
          transition-colors
          duration-300
          group-hover:text-[#302b80]
        "
      >
        {nombre}
      </h4>

      {/* VER PRODUCTO */}

      <span
        className="
          mt-3
          flex
          items-center
          gap-1.5
          text-[10px]
          font-bold
          text-[#302b80]
        "
      >
        {viewText}

        <ArrowRight
          size={11}
          className="
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
        />
      </span>
    </a>
  );
}

export default Header;