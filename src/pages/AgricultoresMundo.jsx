import React, {
  useEffect,
  useRef,
} from "react";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

import Header from "../components/Headerfijo";
import Footer from "../components/Footer";

import Colombia from "../components/Colombia";
import America from "../components/America";
import Africa from "../components/Africa";
import AsiaOceania from "../components/AsiaOceania";

import {
  MapPin,
  ArrowRight,
} from "lucide-react";

// ============================================================
// AGRICULTORES MUNDO
// ============================================================

const AgricultoresMundo = ({
  language = "ES",
  changeLanguage,
}) => {

  // ==========================================================
  // NAVEGACIÓN
  // ==========================================================

  const navigate = useNavigate();

  const { region } = useParams();

  const isEnglish = language === "EN";


  // ==========================================================
  // REFERENCIA AL INICIO DEL COMPONENTE DE REGIÓN
  // ==========================================================

  const regionContentRef = useRef(null);


  // ==========================================================
  // REGIONES
  // ==========================================================

  const regiones = [
    {
      id: "colombia",
      label: "Colombia",
    },

    {
      id: "america",
      label: isEnglish
        ? "Americas"
        : "América",
    },

    {
      id: "africa",
      label: isEnglish
        ? "Africa"
        : "África",
    },

    {
      id: "asia-oceania",
      label: isEnglish
        ? "Asia & Oceania"
        : "Asia y Oceanía",
    },
  ];


  // ==========================================================
  // REGIÓN ACTUAL
  // ==========================================================

  const regionActual =
    region || "colombia";


  // ==========================================================
  // VALIDAR REGIÓN
  // ==========================================================

  const regionValida =
    regiones.some(
      (item) =>
        item.id === regionActual
    );


  // ==========================================================
  // CORREGIR REGIÓN INVÁLIDA
  // ==========================================================

  useEffect(() => {

    if (!regionValida) {

      const rutaBase = isEnglish
        ? "/en/penagos-farmers"
        : "/agricultores-penagos";

      navigate(
        `${rutaBase}/colombia`,
        {
          replace: true,
        }
      );

    }

  }, [
    regionValida,
    isEnglish,
    navigate,
  ]);


  // ==========================================================
  // CAMBIAR REGIÓN
  // ==========================================================

  const cambiarRegion = (
    nuevaRegion
  ) => {

    if (
      nuevaRegion ===
      regionActual
    ) {
      return;
    }

    const rutaBase = isEnglish
      ? "/en/penagos-farmers"
      : "/agricultores-penagos";


    // ========================================================
    // CAMBIAR RUTA
    // ========================================================

    navigate(
      `${rutaBase}/${nuevaRegion}`
    );


    // ========================================================
    // ESPERAR A QUE REACT RENDERICE
    // Y LUEGO IR AL INICIO DEL COMPONENTE
    // ========================================================

    setTimeout(() => {

      if (
        regionContentRef.current
      ) {

        const elemento =
          regionContentRef.current;

        const headerOffset = 90;

        const posicion =
          elemento.getBoundingClientRect()
            .top +
          window.scrollY -
          headerOffset;

        window.scrollTo({
          top: posicion,
          behavior: "smooth",
        });

      }

    }, 100);

  };


  // ==========================================================
  // RENDERIZAR REGIÓN
  // ==========================================================

  const renderRegion = () => {

    switch (regionActual) {

      // ======================================================
      // COLOMBIA
      // ======================================================

      case "colombia":

        return (
          <Colombia
            language={language}
          />
        );


      // ======================================================
      // AMÉRICA
      // ======================================================

      case "america":

        return (
          <America
            language={language}
          />
        );


      // ======================================================
      // ÁFRICA
      // ======================================================

      case "africa":

        return (
          <Africa
            language={language}
          />
        );


      // ======================================================
      // ASIA Y OCEANÍA
      // ======================================================

      case "asia-oceania":

        return (
          <AsiaOceania
            language={language}
          />
        );


      // ======================================================
      // DEFAULT
      // ======================================================

      default:

        return (
          <Colombia
            language={language}
          />
        );

    }

  };


  // ==========================================================
  // RENDER
  // ==========================================================

  return (

    <div
      className="
        min-h-screen
        bg-white
        text-[#172B4D]
      "
    >

      {/* ======================================================
          HEADER
      ====================================================== */}

      <Header
        language={language}
        changeLanguage={changeLanguage}
      />


      {/* ======================================================
          HERO
      ====================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-gradient-to-br
          from-white
          via-white
          to-slate-50
        "
      >

        {/* DECORACIÓN */}

        <div
          className="
            pointer-events-none
            absolute
            -right-32
            -top-32
            h-96
            w-96
            rounded-full
            bg-[#009FE3]/10
            blur-3xl
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -left-32
            bottom-0
            h-72
            w-72
            rounded-full
            bg-[#302b80]/10
            blur-3xl
          "
        />


        <div
          className="
            relative
            mx-auto
            max-w-7xl
            px-6
            py-16
            lg:px-10
            lg:py-20
          "
        >

          {/* TÍTULO */}

          <h1
            className="
              max-w-5xl
              text-4xl
              font-black
              leading-[0.95]
              tracking-[-0.04em]
              text-[#172B4D]
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
          >

            {isEnglish
              ? "Technology that travels with agriculture."
              : "Tecnología que viaja junto a la agricultura."}

          </h1>


          {/* DESCRIPCIÓN */}

          <p
            className="
              mt-7
              max-w-2xl
              text-base
              leading-8
              text-slate-500
              sm:text-lg
              md:text-xl
            "
          >

            {isEnglish
              ? "Discover the farmers, stories and territories that are part of the Penagos world."
              : "Conoce los agricultores, historias y territorios que hacen parte del mundo Penagos."}

          </p>

        </div>

      </section>


      {/* ======================================================
          EXPLORAR REGIONES
      ====================================================== */}

      <section
        className="
          sticky
          top-0
          z-40
          border-y
          border-slate-200
          bg-white/95
          shadow-sm
          backdrop-blur-xl
        "
      >

        <div
          className="
            mx-auto
            max-w-7xl
            px-4
            lg:px-10
          "
        >

          <div
            className="
              flex
              items-center
              gap-3
              overflow-x-auto
              py-4
              scrollbar-hide
            "
          >

            {regiones.map(
              (item) => {

                const activo =
                  regionActual ===
                  item.id;


                return (

                  <button
                    key={item.id}
                    type="button"
                    onClick={() =>
                      cambiarRegion(
                        item.id
                      )
                    }
                    aria-current={
                      activo
                        ? "page"
                        : undefined
                    }
                    className={`
                      group
                      flex
                      min-w-max
                      cursor-pointer
                      items-center
                      gap-3
                      rounded-2xl
                      px-5
                      py-3
                      text-sm
                      font-bold
                      transition-all
                      duration-300
                      focus:outline-none
                      focus:ring-2
                      focus:ring-[#009FE3]/40

                      ${
                        activo
                          ? `
                            bg-[#009FE3]
                            text-white
                            shadow-lg
                            shadow-[#009FE3]/20
                          `
                          : `
                            bg-slate-100
                            text-slate-600
                            hover:bg-slate-200
                          `
                      }
                    `}
                  >

                    {/* ICONO */}

                    <span
                      className={`
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        transition

                        ${
                          activo
                            ? `
                              bg-white/20
                              text-white
                            `
                            : `
                              bg-white
                              text-[#009FE3]
                              shadow-sm
                            `
                        }
                      `}
                    >

                      <MapPin
                        size={17}
                        strokeWidth={2.3}
                      />

                    </span>


                    {/* NOMBRE */}

                    <span>
                      {item.label}
                    </span>

                  </button>

                );

              }
            )}

          </div>

        </div>

      </section>


      {/* ======================================================
          CONTENIDO DE LA REGIÓN
          
          ESTE ES EL PUNTO AL QUE SE HACE SCROLL
      ====================================================== */}

      <section
        ref={regionContentRef}
        key={regionActual}
        className="
          scroll-mt-24
          animate-[fadeRegion_0.45s_ease-out]
        "
      >

        {renderRegion()}

      </section>


      {/* ======================================================
          EXPLORAR OTRA REGIÓN
      ====================================================== */}

      <section
        className="
          border-t
          border-slate-200
          bg-slate-50
        "
      >

        <div
          className="
            mx-auto
            max-w-7xl
            px-6
            py-12
            lg:px-10
          "
        >

          <div
            className="
              grid
              grid-cols-2
              gap-3
              md:grid-cols-4
            "
          >

            {regiones.map(
              (item) => {

                if (
                  item.id ===
                  regionActual
                ) {
                  return null;
                }


                return (

                  <button
                    key={item.id}
                    type="button"
                    onClick={() =>
                      cambiarRegion(
                        item.id
                      )
                    }
                    className="
                      group
                      flex
                      cursor-pointer
                      items-center
                      justify-between
                      rounded-2xl
                      border
                      border-slate-200
                      bg-white
                      p-4
                      text-left
                      shadow-sm
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-[#009FE3]/40
                      hover:shadow-lg
                      focus:outline-none
                      focus:ring-2
                      focus:ring-[#009FE3]/40
                    "
                  >

                    <span
                      className="
                        flex
                        items-center
                        gap-3
                      "
                    >

                      <span
                        className="
                          flex
                          h-10
                          w-10
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          bg-[#009FE3]/10
                          text-[#009FE3]
                          transition
                          group-hover:bg-[#009FE3]
                          group-hover:text-white
                        "
                      >

                        <MapPin
                          size={18}
                        />

                      </span>


                      <span
                        className="
                          font-bold
                          text-[#172B4D]
                        "
                      >

                        {item.label}

                      </span>

                    </span>


                    <ArrowRight
                      size={17}
                      className="
                        text-slate-300
                        transition-all
                        group-hover:translate-x-1
                        group-hover:text-[#009FE3]
                      "
                    />

                  </button>

                );

              }
            )}

          </div>

        </div>

      </section>


      {/* ======================================================
          FOOTER
      ====================================================== */}

      <Footer
        language={language}
      />


      {/* ======================================================
          ANIMACIONES
      ====================================================== */}

      <style>
        {`

          @keyframes fadeRegion {

            from {
              opacity: 0;
              transform: translateY(10px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }

          }


          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }

          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }

        `}
      </style>

    </div>

  );

};


export default AgricultoresMundo;