import { useState } from "react";
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

// ============================================================
// CHAT PENAGOS
// ============================================================

import { abrirChatPenagos } from "./ChatPenagos";

// ============================================================
// HEADER
// ============================================================

function Header({
  language = "ES",
  changeLanguage = () => {},
}) {
  const [languageOpen, setLanguageOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isEnglish = language === "EN";

  // ============================================================
  // RUTAS SEGÚN IDIOMA
  // ============================================================

  const rutas = {
    home: isEnglish ? "/en" : "/",

    about: isEnglish
      ? "/en/about-us"
      : "/quienes-somos",

    farmers: isEnglish
      ? "/en/penagos-farmers"
      : "/agricultores-penagos",

    support: isEnglish
      ? "/en/technical-support"
      : "/soporte-tecnico",

    payments: isEnglish
      ? "/en/payments"
      : "/pagos",

    news: isEnglish
      ? "/en/news"
      : "/blog",

    contact: isEnglish
      ? "/en/contact-us"
      : "/contactanos",

    dataProtection: isEnglish
      ? "/en/personal-data-protection"
      : "/proteccion-de-datos-personales",

    // ========================================================
    // CENTRALES DE PROCESAMIENTO DE CAFÉ
    // ========================================================

    plants: isEnglish
      ? "/en/coffee-processing-plants"
      : "/centrales-procesamiento-de-cafe",
  };

  // ============================================================
  // TRADUCCIONES
  // ============================================================

  const t = isEnglish
    ? {
        // ------------------------------------------------------
        // BARRA SUPERIOR
        // ------------------------------------------------------

        welcome: "Welcome to",
        anniversary: "130 years serving agriculture",

        support: "Technical support",
        payments: "Online payments",

        spanish: "Spanish",
        english: "English",

        // ------------------------------------------------------
        // MENÚ PRINCIPAL
        // ------------------------------------------------------

        about: "About us",
        farmers: "Penagos Farmers",

        products: "Products",
        sustainability: "Sustainability",

        plants: "Coffee processing plants",

        blog: "News",

        contact: "Contact us",

        // ------------------------------------------------------
        // MEGA MENÚ PRODUCTOS
        // ------------------------------------------------------

        productsIntro: "Products",

        productivity: "Solutions to drive productivity",

        productsDescription:
          "Technology and equipment for coffee processing and post-harvest operations.",

        viewAll: "View all products",
        viewProducts: "View products",

        coffeeBenefit: "Coffee processing",

        coffeeBenefitDescription:
          "Equipment for wet coffee processing.",

        drying: "Coffee drying",

        dryingDescription:
          "Solutions for efficient coffee drying.",

        threshing: "Coffee hulling",

        threshingDescription:
          "Technology for high-performance coffee hulling.",

        agricultural: "Agricultural equipment",

        agriculturalDescription:
          "Machinery and solutions for agricultural operations.",

        spareParts: "Spare parts",

        sparePartsDescription:
          "Original spare parts and specialized support.",

        // ------------------------------------------------------
        // BOTONES
        // ------------------------------------------------------

        talk: "Let's talk",

        openMenu: "Open menu",
        closeMenu: "Close menu",

        goHome: "Go to home",
        changeLanguage: "Change language",
      }
    : {
        // ------------------------------------------------------
        // BARRA SUPERIOR
        // ------------------------------------------------------

        welcome: "Bienvenido a",

        anniversary:
          "130 años al servicio de la agricultura",

        support: "Soporte técnico",

        payments: "Pagos en línea",

        spanish: "Español",

        english: "Inglés",

        // ------------------------------------------------------
        // MENÚ PRINCIPAL
        // ------------------------------------------------------

        about: "Quiénes somos",

        farmers: "Agricultores Penagos",

        products: "Productos",

        sustainability: "Sostenibilidad",

        plants:
          "Centrales de procesamiento de café",

        blog: "Noticias",

        contact: "Contáctenos",

        // ------------------------------------------------------
        // MEGA MENÚ PRODUCTOS
        // ------------------------------------------------------

        productsIntro: "Productos",

        productivity:
          "Soluciones para impulsar la productividad",

        productsDescription:
          "Tecnología y equipos para el procesamiento y beneficio del café.",

        viewAll: "Ver todos los productos",

        viewProducts: "Ver productos",

        coffeeBenefit: "Beneficio de café",

        coffeeBenefitDescription:
          "Equipos para beneficio húmedo del café.",

        drying: "Secado de café",

        dryingDescription:
          "Soluciones para un secado eficiente.",

        threshing: "Trilla de café",

        threshingDescription:
          "Tecnología para alto rendimiento.",

        agricultural: "Equipos agrícolas",

        agriculturalDescription:
          "Maquinaria para el trabajo del campo.",

        spareParts: "Repuestos",

        sparePartsDescription:
          "Repuestos y soporte especializado.",

        // ------------------------------------------------------
        // BOTONES
        // ------------------------------------------------------

        talk: "Hablemos",

        openMenu: "Abrir menú",

        closeMenu: "Cerrar menú",

        goHome: "Ir al inicio",

        changeLanguage: "Cambiar idioma",
      };

  // ============================================================
  // CERRAR MENÚ MOBILE
  // ============================================================

  const cerrarMobile = () => {
    setMobileOpen(false);
  };

  // ============================================================
  // CERRAR TODO
  // ============================================================

  const cerrarMenus = () => {
    setMobileOpen(false);
    setLanguageOpen(false);
  };

  // ============================================================
  // ABRIR CHAT PENAGOS
  // ============================================================

  const abrirChat = () => {
    console.log("=================================");
    console.log("ABRIENDO CHAT PENAGOS");
    console.log("=================================");

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

    setLanguageOpen(false);
    setMobileOpen(false);

    changeLanguage(newLanguage);
  };

  // ============================================================
  // HEADER
  // ============================================================

  return (
    <>
      <header className="relative z-50 w-full bg-white">

        {/* ========================================================
            BARRA SUPERIOR
        ======================================================== */}

        <div className="border-b border-slate-200 bg-[#F1F3F5]">

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

            {/* MENSAJE */}

            <p
              className="
                text-[12px]
                tracking-wide
                text-[#64748B]
              "
            >
              {t.welcome}{" "}

              <span className="font-bold text-[#302b80]">
                Penagos
              </span>

              , {t.anniversary}
            </p>

            {/* ACCIONES SUPERIORES */}

            <div
              className="
                hidden
                items-center
                gap-5
                text-[12px]
                font-semibold
                md:flex
              "
            >

              {/* SOPORTE */}

              <Link
                to={rutas.support}
                onClick={cerrarMenus}
                className="
                  flex
                  items-center
                  gap-2
                  text-[#475569]
                  transition-all
                  duration-200
                  hover:text-[#302b80]
                "
              >
                <Wrench
                  size={14}
                  strokeWidth={2}
                />

                <span>
                  {t.support}
                </span>
              </Link>

              <span className="h-4 w-px bg-slate-300" />

              {/* PAGOS */}

              <Link
                to={rutas.payments}
                onClick={cerrarMenus}
                className="
                  flex
                  items-center
                  gap-2
                  text-[#475569]
                  transition-all
                  duration-200
                  hover:text-[#302b80]
                "
              >
                <CreditCard
                  size={14}
                  strokeWidth={2}
                />

                <span>
                  {t.payments}
                </span>
              </Link>

              <span className="h-4 w-px bg-slate-300" />

              {/* IDIOMA */}

              <div className="relative">

                <button
                  type="button"
                  onClick={() =>
                    setLanguageOpen(
                      (prev) => !prev
                    )
                  }
                  className="
                    flex
                    cursor-pointer
                    items-center
                    gap-2
                    text-[#475569]
                    transition-all
                    duration-200
                    hover:text-[#302b80]
                  "
                  aria-label={t.changeLanguage}
                  aria-expanded={languageOpen}
                >

                  <Globe
                    size={14}
                    strokeWidth={2}
                  />

                  <span className="font-bold">
                    {language}
                  </span>

                  <ChevronDown
                    size={12}
                    strokeWidth={2}
                    className={`
                      transition-transform
                      duration-200
                      ${
                        languageOpen
                          ? "rotate-180"
                          : ""
                      }
                    `}
                  />

                </button>

                {/* DROPDOWN */}

                {languageOpen && (

                  <div
                    className="
                      absolute
                      right-0
                      top-7
                      z-[100]
                      w-[145px]
                      overflow-hidden
                      rounded-xl
                      border
                      border-slate-200
                      bg-white
                      p-1.5
                      shadow-[0_15px_40px_rgba(8,15,50,0.15)]
                    "
                  >

                    {/* ESPAÑOL */}

                    <button
                      type="button"
                      onClick={() =>
                        seleccionarIdioma("ES")
                      }
                      className="
                        flex
                        cursor-pointer
                        w-full
                        items-center
                        justify-between
                        rounded-lg
                        px-3
                        py-2.5
                        text-left
                        text-xs
                        font-semibold
                        text-[#07133d]
                        transition-all
                        duration-200
                        hover:bg-[#F1F3F5]
                        hover:text-[#302b80]
                      "
                    >

                      <span>
                        {t.spanish}
                      </span>

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

                    {/* INGLÉS */}

                    <button
                      type="button"
                      onClick={() =>
                        seleccionarIdioma("EN")
                      }
                      className="
                        flex
                        cursor-pointer
                        w-full
                        items-center
                        justify-between
                        rounded-lg
                        px-3
                        py-2.5
                        text-left
                        text-xs
                        font-semibold
                        text-[#07133d]
                        transition-all
                        duration-200
                        hover:bg-[#F1F3F5]
                        hover:text-[#302b80]
                      "
                    >

                      <span>
                        {t.english}
                      </span>

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

        {/* ========================================================
            HEADER PRINCIPAL
        ======================================================== */}

        <div className="border-b border-slate-200 bg-white">

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

            {/* ====================================================
                LOGO
            ==================================================== */}

            <Link
              to={rutas.home}
              onClick={cerrarMenus}
              aria-label={t.goHome}
              className="
                flex
                shrink-0
                items-center
              "
            >

              <img
                src="https://penagos.com/wp-content/uploads/2020/03/Logotipo-Penagos-Hermanos-PNG.png"
                alt="Penagos Hermanos"
                className="
                  w-[155px]
                  object-contain
                  transition-transform
                  duration-300
                  hover:scale-[1.02]
                  lg:w-[175px]
                "
              />

            </Link>

            {/* ====================================================
                NAVEGACIÓN DESKTOP
            ==================================================== */}

            <nav
              className="
                ml-auto
                hidden
                items-center
                lg:flex
              "
            >

              {/* QUIÉNES SOMOS */}

              <Link
                to={rutas.about}
                onClick={cerrarMenus}
                className="
                  group
                  relative
                  px-4
                  py-8
                  text-[13px]
                  font-bold
                  text-[#10152f]
                  transition-all
                  duration-200
                  hover:text-[#302b80]
                "
              >

                {t.about}

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

              {/* AGRICULTORES PENAGOS */}

              <Link
                to={rutas.farmers}
                onClick={cerrarMenus}
                className="
                  group
                  relative
                  px-4
                  py-8
                  text-[13px]
                  font-bold
                  text-[#10152f]
                  transition-all
                  duration-200
                  hover:text-[#302b80]
                "
              >

                {t.farmers}

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

              {/* PRODUCTOS */}

              <div className="group relative">

                <button
                  type="button"
                  className="
                    flex
                    items-center
                    gap-1
                    px-4
                    py-8
                    text-[13px]
                    font-bold
                    text-[#10152f]
                    transition-all
                    duration-300
                    group-hover:text-[#302b80]
                  "
                >

                  {t.products}

                  <ChevronDown
                    size={15}
                    strokeWidth={2}
                    className="
                      transition-transform
                      duration-300
                      group-hover:rotate-180
                    "
                  />

                </button>

                {/* MEGA MENU */}

                <div
                  className="
                    invisible
                    absolute
                    right-[-280px]
                    top-[78px]
                    w-[1050px]
                    translate-y-3
                    rounded-2xl
                    border
                    border-slate-100
                    bg-white
                    p-7
                    opacity-0
                    shadow-[0_25px_70px_rgba(8,15,50,0.15)]
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
                      gap-8
                    "
                  >

                    {/* INTRO */}

                    <div
                      className="
                        border-r
                        border-slate-100
                        pr-7
                      "
                    >

                      <span
                        className="
                          text-[11px]
                          font-bold
                          uppercase
                          tracking-[0.15em]
                          text-[#302b80]
                        "
                      >
                        {t.productsIntro}
                      </span>

                      <h3
                        className="
                          mt-4
                          text-2xl
                          font-extrabold
                          leading-tight
                          text-[#07133d]
                        "
                      >
                        {t.productivity}
                      </h3>

                      <p
                        className="
                          mt-4
                          text-sm
                          leading-6
                          text-slate-500
                        "
                      >
                        {t.productsDescription}
                      </p>

                      <a
                        href={
                          isEnglish
                            ? "/en#productos"
                            : "/#productos"
                        }
                        className="
                          mt-6
                          inline-flex
                          items-center
                          gap-2
                          text-sm
                          font-bold
                          text-[#302b80]
                          transition-all
                          duration-200
                          hover:gap-3
                          hover:text-[#1f1b65]
                        "
                      >

                        {t.viewAll}

                        <ArrowRight
                          size={16}
                        />

                      </a>

                    </div>

                    {/* PRODUCTOS */}

                    <div
                      className="
                        grid
                        grid-cols-5
                        gap-4
                      "
                    >

                      <ProductItem
                        title={t.coffeeBenefit}
                        description={
                          t.coffeeBenefitDescription
                        }
                        viewText={
                          t.viewProducts
                        }
                      />

                      <ProductItem
                        title={t.drying}
                        description={
                          t.dryingDescription
                        }
                        viewText={
                          t.viewProducts
                        }
                      />

                      <ProductItem
                        title={t.threshing}
                        description={
                          t.threshingDescription
                        }
                        viewText={
                          t.viewProducts
                        }
                      />

                      <ProductItem
                        title={t.agricultural}
                        description={
                          t.agriculturalDescription
                        }
                        viewText={
                          t.viewProducts
                        }
                      />

                      <ProductItem
                        title={t.spareParts}
                        description={
                          t.sparePartsDescription
                        }
                        viewText={
                          t.viewProducts
                        }
                      />

                    </div>

                  </div>

                </div>

              </div>

              {/* SOSTENIBILIDAD */}

              <NavLink
                href={
                  isEnglish
                    ? "/en#sostenibilidad"
                    : "/#sostenibilidad"
                }
              >
                {t.sustainability}
              </NavLink>

              {/* ==================================================
                  CENTRALES DE PROCESAMIENTO
              ================================================== */}

              <Link
                to={rutas.plants}
                onClick={cerrarMenus}
                className="
                  group
                  relative
                  px-4
                  py-8
                  text-center
                  text-[13px]
                  font-bold
                  leading-4
                  text-[#10152f]
                  transition-all
                  duration-200
                  hover:text-[#302b80]
                "
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

              <Link
                to={rutas.news}
                onClick={cerrarMenus}
                className="
                  group
                  relative
                  px-4
                  py-8
                  text-[13px]
                  font-bold
                  text-[#10152f]
                  transition-all
                  duration-200
                  hover:text-[#302b80]
                "
              >

                {t.blog}

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

              {/* CONTACTO */}

              <Link
                to={rutas.contact}
                onClick={cerrarMenus}
                className="
                  group
                  relative
                  px-4
                  py-8
                  text-[13px]
                  font-bold
                  text-[#10152f]
                  transition-all
                  duration-200
                  hover:text-[#302b80]
                "
              >

                {t.contact}

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

            </nav>

            {/* ====================================================
                BOTÓN HABLEMOS DESKTOP
            ==================================================== */}

            <div
              className="
                ml-5
                hidden
                items-center
                gap-3
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

                  <ArrowRight
                    size={14}
                  />

                </span>

              </button>

            </div>

            {/* ====================================================
                BOTÓN MOBILE
            ==================================================== */}

            <button
              type="button"
              onClick={() =>
                setMobileOpen(
                  (prev) => !prev
                )
              }
              className="
                ml-auto
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-lg
                border
                border-slate-200
                text-[#07133d]
                transition-all
                duration-200
                hover:border-[#302b80]
                hover:bg-[#F1F3F5]
                hover:text-[#302b80]
                lg:hidden
              "
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

          {/* ========================================================
              MENÚ MOBILE
          ======================================================== */}

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

                {/* QUIÉNES SOMOS */}

                <Link
                  to={rutas.about}
                  onClick={cerrarMobile}
                  className="
                    border-b
                    border-slate-100
                    py-4
                    text-sm
                    font-bold
                    text-[#07133d]
                    transition-all
                    hover:pl-2
                    hover:text-[#302b80]
                  "
                >
                  {t.about}
                </Link>

                {/* AGRICULTORES PENAGOS */}

                <Link
                  to={rutas.farmers}
                  onClick={cerrarMobile}
                  className="
                    border-b
                    border-slate-100
                    py-4
                    text-sm
                    font-bold
                    text-[#07133d]
                    transition-all
                    hover:pl-2
                    hover:text-[#302b80]
                  "
                >
                  {t.farmers}
                </Link>

                {/* PRODUCTOS */}

                <MobileLink
                  href={
                    isEnglish
                      ? "/en#productos"
                      : "/#productos"
                  }
                  onClick={cerrarMobile}
                >
                  {t.products}
                </MobileLink>

                {/* SOSTENIBILIDAD */}

                <MobileLink
                  href={
                    isEnglish
                      ? "/en#sostenibilidad"
                      : "/#sostenibilidad"
                  }
                  onClick={cerrarMobile}
                >
                  {t.sustainability}
                </MobileLink>

                {/* SOPORTE */}

                <Link
                  to={rutas.support}
                  onClick={cerrarMobile}
                  className="
                    border-b
                    border-slate-100
                    py-4
                    text-sm
                    font-bold
                    text-[#07133d]
                    transition-all
                    hover:pl-2
                    hover:text-[#302b80]
                  "
                >
                  {t.support}
                </Link>

                {/* ==================================================
                    CENTRALES
                ================================================== */}

                <Link
                  to={rutas.plants}
                  onClick={cerrarMobile}
                  className="
                    border-b
                    border-slate-100
                    py-4
                    text-sm
                    font-bold
                    text-[#07133d]
                    transition-all
                    hover:pl-2
                    hover:text-[#302b80]
                  "
                >
                  {t.plants}
                </Link>

                {/* NOTICIAS */}

                <Link
                  to={rutas.news}
                  onClick={cerrarMobile}
                  className="
                    border-b
                    border-slate-100
                    py-4
                    text-sm
                    font-bold
                    text-[#07133d]
                    transition-all
                    hover:pl-2
                    hover:text-[#302b80]
                  "
                >
                  {t.blog}
                </Link>

                {/* CONTACTO */}

                <Link
                  to={rutas.contact}
                  onClick={cerrarMobile}
                  className="
                    border-b
                    border-slate-100
                    py-4
                    text-sm
                    font-bold
                    text-[#07133d]
                    transition-all
                    hover:pl-2
                    hover:text-[#302b80]
                  "
                >
                  {t.contact}
                </Link>

                {/* HABLEMOS */}

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
                    shadow-sm
                    transition-all
                    duration-300
                    hover:bg-[#242060]
                    hover:shadow-lg
                  "
                >

                  {t.talk}

                  <ArrowRight
                    size={16}
                  />

                </button>

                {/* IDIOMA MOBILE */}

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
                    className="
                      flex
                      w-full
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
                      hover:bg-slate-200
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
    </>
  );
}

// ============================================================
// NAV LINK
// ============================================================

function NavLink({
  href,
  children,
}) {
  return (
    <a
      href={href}
      className="
        group
        relative
        px-4
        py-8
        text-[13px]
        font-bold
        text-[#10152f]
        transition-all
        duration-200
        hover:text-[#302b80]
      "
    >

      {children}

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

    </a>
  );
}

// ============================================================
// MOBILE LINK
// ============================================================

function MobileLink({
  href,
  children,
  onClick,
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="
        border-b
        border-slate-100
        py-4
        text-sm
        font-bold
        text-[#07133d]
        transition-all
        hover:pl-2
        hover:text-[#302b80]
      "
    >

      {children}

    </a>
  );
}

// ============================================================
// PRODUCT ITEM
// ============================================================

function ProductItem({
  title,
  description,
  viewText,
}) {
  return (
    <a
      href="#productos"
      className="
        group
        rounded-xl
        p-3
        transition-all
        duration-300
        hover:-translate-y-1
        hover:bg-slate-50
      "
    >

      <div
        className="
          mb-4
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          border
          border-[#302b80]/20
          bg-[#302b80]/5
          transition-all
          duration-300
          group-hover:border-[#302b80]/40
          group-hover:bg-[#302b80]/10
        "
      >

        <span
          className="
            text-xl
            text-[#302b80]
            transition-transform
            duration-300
            group-hover:rotate-12
          "
        >
          ✦
        </span>

      </div>

      <h4
        className="
          text-sm
          font-bold
          leading-5
          text-[#07133d]
          transition-colors
          duration-200
          group-hover:text-[#302b80]
        "
      >
        {title}
      </h4>

      <p
        className="
          mt-2
          text-xs
          leading-5
          text-slate-500
        "
      >
        {description}
      </p>

      <span
        className="
          mt-4
          flex
          items-center
          gap-1
          text-xs
          font-bold
          text-[#302b80]
        "
      >

        {viewText}

        <ArrowRight
          size={13}
          className="
            transition-transform
            duration-200
            group-hover:translate-x-1
          "
        />

      </span>

    </a>
  );
}

export default Header;
