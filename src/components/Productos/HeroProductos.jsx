import React from "react";
import { ArrowRight } from "lucide-react";

/* ============================================================
   HERO PRODUCTOS
   PENAGOS

   TIPOS:
   - general
   - agricultura
   - cafe
   - daewoo
============================================================ */

function HeroProductos({
  language = "ES",
  tipo = "general",
}) {
  const isEnglish = language === "EN";

  /* ============================================================
     IMÁGENES DEL HERO
  ============================================================ */

  const imagenes = {
    general:
      "https://penagos.com/wp-content/uploads/2020/04/Picapasto-Penagos-PP-300R-Picadora-de-forrajes-y-alimentos-5.jpg",

    agricultura:
      "https://penagos.com/wp-content/uploads/2020/05/Banner-Agricola.jpg",

    cafe:
      "https://penagos.com/wp-content/uploads/2020/05/Banner-Café.jpg",

    daewoo:
      "https://penagos.com/wp-content/uploads/2021/04/Banner-Daewoo-Power-Products.jpg",
  };

  /* ============================================================
     IMAGEN ACTUAL
  ============================================================ */

  const imagenHero =
    imagenes[tipo] || imagenes.general;

  /* ============================================================
     TEXTOS DINÁMICOS
  ============================================================ */

  const textos = {
    general: {
      eyebrow: {
        ES: "Productos Penagos",
        EN: "Penagos Products",
      },
      title: {
        ES: (
          <>
            Tecnología para
            <br />
            <span>cada proceso.</span>
          </>
        ),
        EN: (
          <>
            Technology for
            <br />
            <span>every process.</span>
          </>
        ),
      },
      description: {
        ES: "Descubre la maquinaria y las soluciones Penagos diseñadas para mejorar la productividad, eficiencia y rendimiento en diferentes procesos.",
        EN: "Explore Penagos machinery and solutions designed to improve productivity, efficiency and performance across different processes.",
      },
    },

    agricultura: {
      eyebrow: {
        ES: "Maquinaria agrícola",
        EN: "Agricultural Machinery",
      },
      title: {
        ES: (
          <>
            Tecnología para
            <br />
            <span>el campo.</span>
          </>
        ),
        EN: (
          <>
            Technology for
            <br />
            <span>the field.</span>
          </>
        ),
      },
      description: {
        ES: "Soluciones Penagos diseñadas para transformar, optimizar y mejorar los procesos agrícolas.",
        EN: "Penagos solutions designed to transform, optimize and improve agricultural processes.",
      },
    },

    cafe: {
      eyebrow: {
        ES: "Procesamiento de café",
        EN: "Coffee Processing",
      },
      title: {
        ES: (
          <>
            Tecnología para
            <br />
            <span>cada grano.</span>
          </>
        ),
        EN: (
          <>
            Technology for
            <br />
            <span>every bean.</span>
          </>
        ),
      },
      description: {
        ES: "Tecnología especializada para mejorar la eficiencia y calidad en cada etapa del procesamiento del café.",
        EN: "Specialized technology to improve efficiency and quality at every stage of coffee processing.",
      },
    },

    daewoo: {
      eyebrow: {
        ES: "Equipos Daewoo",
        EN: "Daewoo Equipment",
      },
      title: {
        ES: (
          <>
            Potencia para
            <br />
            <span>cada desafío.</span>
          </>
        ),
        EN: (
          <>
            Power for
            <br />
            <span>every challenge.</span>
          </>
        ),
      },
      description: {
        ES: "Equipos Daewoo diseñados para ofrecer potencia, rendimiento y confiabilidad en diferentes aplicaciones.",
        EN: "Daewoo equipment designed to deliver power, performance and reliability across different applications.",
      },
    },
  };

  const contenido =
    textos[tipo] || textos.general;

  /* ============================================================
     SCROLL A CATEGORÍAS
  ============================================================ */

  const irACategorias = () => {
    document
      .getElementById("categorias-productos")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <section
      className="
        group
        relative
        flex
        min-h-screen
        w-full
        items-center
        overflow-hidden
        bg-[#07133d]
      "
    >

      {/* ======================================================
          IMAGEN PRINCIPAL
      ====================================================== */}

      <img
        src={imagenHero}
        alt={
          isEnglish
            ? "Penagos products"
            : "Productos Penagos"
        }
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-center
          transition-transform
          duration-[2000ms]
          ease-out
          group-hover:scale-[1.025]
        "
      />

      {/* ======================================================
          OVERLAY GENERAL
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-black/30
        "
      />

      {/* ======================================================
          DEGRADADO IZQUIERDO
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-[#07133d]/95
          via-[#07133d]/65
          to-transparent
        "
      />

      {/* ======================================================
          DEGRADADO DERECHO
      ====================================================== */}

      <div
        className="
          absolute
          inset-y-0
          right-0
          w-[55%]
          bg-gradient-to-l
          from-[#07133d]/30
          to-transparent
        "
      />

      {/* ======================================================
          DEGRADADO INFERIOR
      ====================================================== */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-[45%]
          bg-gradient-to-t
          from-[#07133d]/90
          via-[#07133d]/35
          to-transparent
        "
      />

      {/* ======================================================
          CONTENIDO
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1500px]
          px-6
          pb-24
          pt-32
          sm:px-10
          lg:px-16
          xl:px-20
        "
      >
        <div
          className="
            max-w-[780px]
          "
        >

          {/* ==================================================
              EYEBROW
          ================================================== */}

          <div
            className="
              mb-7
              flex
              items-center
              gap-4
            "
          >
            <span
              className="
                h-[3px]
                w-14
                rounded-full
                bg-[#302b80]
                shadow-[0_0_15px_rgba(48,43,128,0.55)]
                transition-all
                duration-500
                group-hover:w-20
                sm:w-16
              "
            />

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.35em]
                text-white/90
                sm:text-xs
              "
            >
              {contenido.eyebrow[language]}
            </span>
          </div>

          {/* ==================================================
              TITULO
          ================================================== */}

          <h1
            className="
              text-[50px]
              font-semibold
              leading-[0.94]
              tracking-[-0.05em]
              text-white
              drop-shadow-[0_5px_25px_rgba(0,0,0,0.3)]
              sm:text-6xl
              md:text-7xl
              lg:text-[82px]
              xl:text-[94px]
            "
          >
            {contenido.title[language]}
          </h1>

          {/* ==================================================
              LINEA PENAGOS
          ================================================== */}

          <div
            className="
              mt-8
              h-[4px]
              w-24
              rounded-full
              bg-[#302b80]
              shadow-[0_0_18px_rgba(48,43,128,0.55)]
              transition-all
              duration-500
              group-hover:w-40
              sm:w-32
            "
          />

          {/* ==================================================
              DESCRIPCIÓN
          ================================================== */}

          <p
            className="
              mt-7
              max-w-[650px]
              text-[15px]
              leading-7
              text-white/85
              transition-colors
              duration-500
              group-hover:text-white/95
              sm:text-base
              lg:text-[18px]
              lg:leading-8
            "
          >
            {contenido.description[language]}
          </p>

          {/* ==================================================
              BOTÓN
          ================================================== */}

          <div
            className="
              mt-9
            "
          >
            <button
              type="button"
              onClick={irACategorias}
              className="
                group/button
                inline-flex
                cursor-pointer
                items-center
                gap-3
                rounded-full
                bg-white
                px-6
                py-3.5
                text-[12px]
                font-bold
                uppercase
                tracking-[0.08em]
                text-[#07133d]
                shadow-[0_12px_35px_rgba(0,0,0,0.18)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#302b80]
                hover:text-white
              "
            >
              {isEnglish
                ? "Explore products"
                : "Explorar productos"}

              <span
                className="
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  bg-[#07133d]/10
                  transition-all
                  duration-300
                  group-hover/button:bg-white/15
                  group-hover/button:translate-x-1
                "
              >
                <ArrowRight size={14} />
              </span>
            </button>
          </div>

          {/* ==================================================
              INDICADOR
          ================================================== */}

          <div
            className="
              mt-10
              flex
              items-center
              gap-3
            "
          >
            <span
              className="
                h-2
                w-2
                rounded-full
                bg-[#302b80]
                shadow-[0_0_12px_rgba(48,43,128,0.8)]
              "
            />

            <span
              className="
                h-px
                w-12
                bg-white/30
              "
            />

            <span
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.25em]
                text-white/60
              "
            >
              {isEnglish
                ? "Engineering · Innovation · Performance"
                : "Ingeniería · Innovación · Rendimiento"}
            </span>
          </div>

        </div>
      </div>

      {/* ======================================================
          INDICADOR LATERAL
      ====================================================== */}

      <div
        className="
          absolute
          bottom-12
          right-8
          z-20
          hidden
          items-center
          gap-3
          lg:flex
        "
      >
        <span
          className="
            text-[9px]
            font-bold
            uppercase
            tracking-[0.3em]
            text-white/50
          "
        >
          {isEnglish
            ? "View catalog"
            : "Ver catálogo"}
        </span>

        <span
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            border
            border-white/25
            bg-white/5
            backdrop-blur-sm
            transition-all
            duration-300
            group-hover:border-[#302b80]
            group-hover:bg-[#302b80]
          "
        >
          <span
            className="
              h-1.5
              w-1.5
              rotate-45
              border-b
              border-r
              border-white
              transition-transform
              duration-300
              group-hover:translate-y-1
            "
          />
        </span>
      </div>

      {/* ======================================================
          LÍNEA INFERIOR
      ====================================================== */}

      <div
        className="
          absolute
          bottom-0
          left-0
          z-20
          h-[4px]
          w-full
          bg-[#302b80]
        "
      />

      {/* ======================================================
          BRILLO SUPERIOR
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          right-0
          top-0
          z-20
          h-32
          bg-gradient-to-b
          from-black/20
          to-transparent
        "
      />

    </section>
  );
}

export default HeroProductos;

