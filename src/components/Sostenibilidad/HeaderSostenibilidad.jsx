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

import { abrirChatPenagos } from "../ChatPenagos";

// ============================================================
// HEADER SOSTENIBILIDAD
// ============================================================

function HeaderSostenibilidad({
  language = "ES",
  changeLanguage = () => {},
}) {
  const [scrolled, setScrolled] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isEnglish = language === "EN";

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
  // RUTAS
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
        sustainability: "Sustainability",
        plants: "Coffee processing plants",
        blog: "News",
        contact: "Contact us",

        productsIntro: "Products",

        productivity:
          "Solutions to drive productivity",

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

        talk: "Let's talk",

        openMenu: "Open menu",
        closeMenu: "Close menu",

        goHome: "Go to home",

        changeLanguage: "Change language",
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
        sustainability: "Sostenibilidad",
        plants: "Centrales de procesamiento de café",
        blog: "Noticias",
        contact: "Contáctenos",

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

        talk: "Hablemos",

        openMenu: "Abrir menú",
        closeMenu: "Cerrar menú",

        goHome: "Ir al inicio",

        changeLanguage: "Cambiar idioma",
      };

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
  // HEADER
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

      {/* ========================================================
          BARRA SUPERIOR
      ======================================================== */}

      <div
        className={`
          hidden
          transition-all
          duration-300
          md:block
          ${
            scrolled
              ? "border-b border-slate-200 bg-[#F1F3F5]"
              : "border-none bg-transparent"
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
              transition-colors
              duration-300
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

          {/* ACCIONES */}

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
                duration-300
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
                duration-300
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
                  setLanguageOpen(
                    (prev) => !prev
                  )
                }
                className={`
                  flex
                  cursor-pointer
                  items-center
                  gap-2
                  transition-colors
                  duration-300
                  ${
                    scrolled
                      ? "text-[#475569] hover:text-[#302b80]"
                      : "text-white/90 hover:text-white"
                  }
                `}
                aria-label={t.changeLanguage}
                aria-expanded={languageOpen}
              >

                <Globe size={14} />

                <span className="font-bold">
                  {language}
                </span>

                <ChevronDown
                  size={12}
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
                      hover:text-[#302b80]
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
                      hover:text-[#302b80]
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

      {/* ========================================================
          HEADER PRINCIPAL
      ======================================================== */}

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

            {/* PRODUCTOS */}

            <div className="group relative">

              <button
                type="button"
                className={`
                  flex
                  cursor-pointer
                  items-center
                  gap-1
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

                {t.products}

                <ChevronDown
                  size={15}
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
                  left-1/2
                  top-full
                  w-[1050px]
                  -translate-x-1/2
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
                        cursor-pointer
                        items-center
                        gap-2
                        text-sm
                        font-bold
                        text-[#302b80]
                        transition-all
                        hover:gap-3
                      "
                    >
                      {t.viewAll}

                      <ArrowRight size={16} />
                    </a>

                  </div>

                  <div
                    className="
                      grid
                      grid-cols-5
                      gap-4
                    "
                  >

                    <ProductItem
                      title={t.coffeeBenefit}
                      description={t.coffeeBenefitDescription}
                      viewText={t.viewProducts}
                    />

                    <ProductItem
                      title={t.drying}
                      description={t.dryingDescription}
                      viewText={t.viewProducts}
                    />

                    <ProductItem
                      title={t.threshing}
                      description={t.threshingDescription}
                      viewText={t.viewProducts}
                    />

                    <ProductItem
                      title={t.agricultural}
                      description={t.agriculturalDescription}
                      viewText={t.viewProducts}
                    />

                    <ProductItem
                      title={t.spareParts}
                      description={t.sparePartsDescription}
                      viewText={t.viewProducts}
                    />

                  </div>

                </div>

              </div>

            </div>

            {/* SOSTENIBILIDAD */}

            <HeaderNavLink
              to={rutas.sustainability}
              onClick={cerrarMenus}
              scrolled={scrolled}
              active
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
                duration-300
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

          {/* ====================================================
              BOTÓN HABLEMOS
          ==================================================== */}

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
              transition-all
              duration-200
              lg:hidden
              ${
                scrolled
                  ? "border-slate-200 text-[#07133d] hover:border-[#302b80] hover:bg-[#F1F3F5] hover:text-[#302b80]"
                  : "border-white/30 text-white hover:border-white hover:bg-white/10"
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
                href={
                  isEnglish
                    ? "/en#productos"
                    : "/#productos"
                }
                onClick={cerrarMenus}
              >
                {t.products}
              </MobileLink>

              <MobileLink
                to={rutas.sustainability}
                onClick={cerrarMenus}
              >
                {t.sustainability}
              </MobileLink>

              <MobileLink
                to={rutas.support}
                onClick={cerrarMenus}
              >
                {t.support}
              </MobileLink>

              <MobileLink
                to={rutas.plants}
                onClick={cerrarMenus}
              >
                {t.plants}
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
  );
}

// ============================================================
// NAV LINK
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
  href,
  children,
  onClick,
}) {
  const className = `
    cursor-pointer
    border-b
    border-slate-100
    py-4
    text-sm
    font-bold
    text-[#07133d]
    transition-all
    hover:pl-2
    hover:text-[#302b80]
  `;

  if (to) {
    return (
      <Link
        to={to}
        onClick={onClick}
        className={className}
      >
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      onClick={onClick}
      className={className}
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
        cursor-pointer
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

export default HeaderSostenibilidad;
