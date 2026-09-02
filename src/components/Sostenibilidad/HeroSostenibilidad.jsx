import React from "react";

/* ============================================================
   HERO SOSTENIBILIDAD
   PENAGOS
============================================================ */

function HeroSostenibilidad({
  language = "ES",
}) {
  const isEnglish = language === "EN";

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
          IMAGEN DE FONDO
      ====================================================== */}

      <img
        src="https://penagos.com/wp-content/uploads/2021/08/Imagen-fondo-contacto.webp"
        alt={
          isEnglish
            ? "Sustainability and coffee agriculture"
            : "Sostenibilidad y agricultura cafetera"
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
          group-hover:scale-[1.02]
        "
      />

      {/* ======================================================
          OVERLAY GENERAL
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-black/25
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
          from-[#07133d]/90
          via-[#07133d]/45
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
          h-[50%]
          bg-gradient-to-t
          from-[#07133d]/80
          via-[#07133d]/25
          to-transparent
        "
      />

      {/* ======================================================
          LIGERO TONO AZUL PENAGOS
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-[#302b80]/5
          mix-blend-multiply
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
          pb-20
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

            {/* LÍNEA AZUL */}

            <span
              className="
                h-[3px]
                w-14
                rounded-full
                bg-[#302b80]
                shadow-[0_0_15px_rgba(48,43,128,0.5)]
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
              {isEnglish
                ? "Penagos Sustainability"
                : "Sostenibilidad Penagos"}
            </span>

          </div>

          {/* ==================================================
              TITULO
          ================================================== */}

          <h1
            className="
              text-[48px]
              font-semibold
              leading-[0.96]
              tracking-[-0.045em]
              text-white
              drop-shadow-[0_5px_25px_rgba(0,0,0,0.25)]
              sm:text-6xl
              md:text-7xl
              lg:text-[82px]
              xl:text-[92px]
            "
          >

            {isEnglish ? (
              <>
                Engineering
                <br />

                <span
                  className="
                    text-white/75
                    transition-colors
                    duration-500
                    group-hover:text-white/90
                  "
                >
                  a better future.
                </span>
              </>
            ) : (
              <>
                Ingeniería para
                <br />

                <span
                  className="
                    text-white/75
                    transition-colors
                    duration-500
                    group-hover:text-white/90
                  "
                >
                  un mejor futuro.
                </span>
              </>
            )}

          </h1>

          {/* ==================================================
              LINEA AZUL PENAGOS
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
            {isEnglish
              ? "We develop technology that promotes efficiency, innovation and responsible agriculture, contributing to a more sustainable future."
              : "Desarrollamos tecnología que impulsa la eficiencia, la innovación y una agricultura responsable, contribuyendo a un futuro más sostenible."}
          </p>

          {/* ==================================================
              INDICADOR VISUAL
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
                ? "Innovation · Sustainability"
                : "Innovación · Sostenibilidad"}
            </span>

          </div>

        </div>

      </div>

      {/* ======================================================
          INDICADOR SCROLL
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
            ? "Discover more"
            : "Descubre más"}
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
          LÍNEA INFERIOR AZUL PENAGOS
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
          BRILLO SUPERIOR SUTIL
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

export default HeroSostenibilidad;