import { useState } from "react";
import { Link } from "react-router-dom";

import {
  Search,
  ChevronDown,
  ArrowRight,
  Wrench,
  CreditCard,
  Globe,
  Menu,
  X,
} from "lucide-react";


function Header({
  language,
  changeLanguage
}) {


  const [languageOpen, setLanguageOpen] = useState(false);

  const [mobileOpen, setMobileOpen] = useState(false);


  const isEnglish = language === "EN";


  /* ============================================================
     TRADUCCIONES
  ============================================================ */

  const t = isEnglish
    ? {

        welcome: "Welcome to",

        anniversary:
          "130 years serving agriculture",

        support:
          "Technical support",

        payments:
          "Online payments",

        about:
          "About us",

        farmers:
          "Penagos Farmers",

        products:
          "Our products",

        plants:
          "Coffee processing plants",

        blog:
          "Our blog",

        contact:
          "Contact us",


        productsIntro:
          "Our products",

        productivity:
          "Solutions to drive productivity",

        productsDescription:
          "Technology and equipment for coffee processing and post-harvest operations.",


        viewAll:
          "View all products",

        viewProducts:
          "View products",


        coffeeBenefit:
          "Coffee processing",

        coffeeBenefitDescription:
          "Equipment for wet coffee processing.",


        drying:
          "Coffee drying",

        dryingDescription:
          "Solutions for efficient coffee drying.",


        threshing:
          "Coffee hulling",

        threshingDescription:
          "Technology for high-performance coffee hulling.",


        agricultural:
          "Agricultural equipment",

        agriculturalDescription:
          "Machinery and solutions for agricultural operations.",


        spareParts:
          "Spare parts",

        sparePartsDescription:
          "Original spare parts and specialized support.",


        talk:
          "Let's talk",


        openMenu:
          "Open menu",

        closeMenu:
          "Close menu",

        search:
          "Search",


        spanish:
          "Español",

        english:
          "English",

      }

    : {

        welcome:
          "Bienvenido a",

        anniversary:
          "130 años al servicio de la agricultura",


        support:
          "Soporte técnico",

        payments:
          "Pagos en línea",


        about:
          "Quiénes somos",

        farmers:
          "Agricultores Penagos",

        products:
          "Nuestros productos",

        plants:
          "Centrales de procesamiento de café",

        blog:
          "Nuestro blog",

        contact:
          "Contáctenos",


        productsIntro:
          "Nuestros productos",

        productivity:
          "Soluciones para impulsar la productividad",

        productsDescription:
          "Tecnología y equipos para el procesamiento y beneficio del café.",


        viewAll:
          "Ver todos los productos",

        viewProducts:
          "Ver productos",


        coffeeBenefit:
          "Beneficio de café",

        coffeeBenefitDescription:
          "Equipos para beneficio húmedo del café.",


        drying:
          "Secado de café",

        dryingDescription:
          "Soluciones para un secado eficiente.",


        threshing:
          "Trilla de café",

        threshingDescription:
          "Tecnología para alto rendimiento.",


        agricultural:
          "Equipos agrícolas",

        agriculturalDescription:
          "Maquinaria para el trabajo del campo.",


        spareParts:
          "Repuestos",

        sparePartsDescription:
          "Repuestos y soporte especializado.",


        talk:
          "Hablemos prueba",


        openMenu:
          "Abrir menú",

        closeMenu:
          "Cerrar menú",

        search:
          "Buscar",


        spanish:
          "Español",

        english:
          "English",

      };


  return (

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


          {/* ====================================================
              MENSAJE
          ==================================================== */}

          <p
            className="
              text-[12px]
              tracking-wide
              text-[#64748B]
            "
          >

            {t.welcome}{" "}

            <span
              className="
                font-bold
                text-[#302b80]
              "
            >
              Penagos
            </span>

            , {t.anniversary}

          </p>


          {/* ====================================================
              ACCIONES SUPERIORES
          ==================================================== */}

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

            <a
              href="#soporte"
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
            >

              <Wrench
                size={14}
                strokeWidth={2}
              />

              <span>
                {t.support}
              </span>

            </a>


            {/* SEPARADOR */}

            <span
              className="
                h-4
                w-px
                bg-slate-300
              "
            />


            {/* PAGOS */}

            <a
              href="#pagos"
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
            >

              <CreditCard
                size={14}
                strokeWidth={2}
              />

              <span>
                {t.payments}
              </span>

            </a>


            {/* SEPARADOR */}

            <span
              className="
                h-4
                w-px
                bg-slate-300
              "
            />


            {/* =================================================
                SELECTOR DE IDIOMA
            ================================================= */}

            <div className="relative">


              <button
                type="button"

                onClick={() =>
                  setLanguageOpen(!languageOpen)
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

                aria-label="Cambiar idioma"

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


              {/* =================================================
                  DROPDOWN IDIOMAS
              ================================================= */}

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

                    onClick={() => {

                      changeLanguage("ES");

                      setLanguageOpen(false);

                    }}

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


                  {/* ENGLISH */}

                  <button
                    type="button"

                    onClick={() => {

                      changeLanguage("EN");

                      setLanguageOpen(false);

                    }}

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

      <div
        className="
          border-b
          border-slate-200
          bg-white
        "
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


          {/* ====================================================
              LOGO
          ==================================================== */}

          <a
            href="/"
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

              className="
                w-[155px]
                object-contain
                transition-transform
                duration-300
                hover:scale-[1.02]
                lg:w-[175px]
              "
            />

          </a>



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

            <NavLink href="#empresa">
              {t.about}
            </NavLink>


            {/* AGRICULTORES */}

            <NavLink href="#agricultores">
              {t.farmers}
            </NavLink>


            {/* =================================================
                PRODUCTOS + MEGA MENU
            ================================================= */}

            <div className="group relative">


              <button
                type="button"

                className="
                  flex
                  cursor-pointer
                  items-center
                  gap-1
                  px-4
                  py-8
                  text-[13px]
                  font-bold
                  text-[#10152f]
                  transition-all
                  duration-200
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



              {/* =================================================
                  MEGA MENU
              ================================================= */}

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
                      href="#productos"
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



            {/* =================================================
                CENTRALES
            ================================================= */}

            <NavLink href="#centrales">

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

            </NavLink>



            {/* BLOG */}

            <Link
              to="/blog"

              className="
                group
                relative
                cursor-pointer
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

            <NavLink href="#contacto">
              {t.contact}
            </NavLink>


          </nav>



          {/* ====================================================
              ACCIONES DERECHA
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


            {/* BUSCAR */}

            <button
              type="button"
              aria-label={t.search}

              className="
                flex
                h-11
                w-11
                cursor-pointer
                items-center
                justify-center
                rounded-full
                border
                border-slate-200
                text-[#07133d]
                transition-all
                duration-200
                hover:border-[#302b80]
                hover:bg-[#302b80]
                hover:text-white
              "
            >

              <Search
                size={19}
                strokeWidth={2}
              />

            </button>



            {/* =================================================
                BOTÓN HABLEMOS
            ================================================= */}

            <a
              href="#contacto"

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

            </a>


          </div>



          {/* ====================================================
              BOTÓN MOBILE
          ==================================================== */}

          <button
            type="button"

            onClick={() =>
              setMobileOpen(!mobileOpen)
            }

            className="
              ml-auto
              flex
              h-11
              w-11
              cursor-pointer
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

            <div
              className="
                flex
                flex-col
              "
            >


              <MobileLink href="#empresa">
                {t.about}
              </MobileLink>


              <MobileLink href="#agricultores">
                {t.farmers}
              </MobileLink>


              <MobileLink href="#productos">
                {t.products}
              </MobileLink>


              <MobileLink href="#centrales">
                {t.plants}
              </MobileLink>


              <MobileLink href="#blog">
                {t.blog}
              </MobileLink>


              <MobileLink href="#contacto">
                {t.contact}
              </MobileLink>



              {/* =================================================
                  IDIOMA MOBILE
              ================================================= */}

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
                    changeLanguage(
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

                    <Globe
                      size={16}
                    />

                    {language === "ES"
                      ? t.english
                      : t.spanish}

                  </span>


                  <span
                    className="
                      text-[#302b80]
                    "
                  >

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



/* ==============================================================
   NAV LINK
============================================================== */

function NavLink({
  href,
  children
}) {

  return (

    <a
      href={href}

      className="
        group
        relative
        cursor-pointer
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



/* ==============================================================
   MOBILE LINK
============================================================== */

function MobileLink({
  href,
  children
}) {

  return (

    <a
      href={href}

      className="
        cursor-pointer
        border-b
        border-slate-100
        py-4
        text-sm
        font-bold
        text-[#07133d]
        transition-all
        duration-200
        hover:pl-2
        hover:text-[#302b80]
      "
    >

      {children}

    </a>

  );

}



/* ==============================================================
   PRODUCT ITEM
============================================================== */

function ProductItem({
  title,
  description,
  viewText
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


      {/* ICONO */}

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



      {/* TÍTULO */}

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



      {/* DESCRIPCIÓN */}

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



      {/* LINK */}

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