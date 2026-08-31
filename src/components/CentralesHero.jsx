import React from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";

// ============================================================
// HERO - CENTRALES DE PROCESAMIENTO DE CAFÉ
// ============================================================

function CentralesHero({ language = "ES" }) {
  const isEnglish = language === "EN";

  const rutaContacto = isEnglish
    ? "/en/contact-us"
    : "/contactanos";

  return (
    <section
      className="
        relative
        min-h-[500px]
        w-full
        overflow-hidden
        bg-[#302b80]
      "
    >

      {/* ======================================================
          FONDO MORADO PENAGOS
      ====================================================== */}

      <div className="absolute inset-0">

        {/* Base */}

        <div
          className="
            absolute
            inset-0
            bg-[#302b80]
          "
        />

        {/* Oscurecimiento progresivo hacia el texto */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#151437]
            via-[#302b80]/88
            to-[#302b80]/25
          "
        />

        {/* Luz azul ambiental */}

        <div
          className="
            absolute
            -right-[8%]
            top-[-10%]
            h-[600px]
            w-[600px]
            rounded-full
            bg-[#00a4e4]/[0.13]
            blur-[140px]
          "
        />

        {/* Luz morada detrás de la central */}

        <div
          className="
            absolute
            bottom-[-35%]
            right-[10%]
            h-[480px]
            w-[700px]
            rounded-full
            bg-[#625dd0]/[0.18]
            blur-[130px]
          "
        />

        {/* Profundidad inferior */}

        <div
          className="
            absolute
            bottom-[-35%]
            left-[15%]
            h-[380px]
            w-[600px]
            rounded-full
            bg-[#11112f]/[0.25]
            blur-[120px]
          "
        />

      </div>


      {/* ======================================================
          GRID INDUSTRIAL
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.045]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(255,255,255,0.45) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.45) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "80px 80px",
        }}
      />


      {/* ======================================================
          LÍNEAS DECORATIVAS
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Línea vertical */}

        <div
          className="
            absolute
            right-[7%]
            top-0
            h-full
            w-px
            bg-white/[0.08]
          "
        />

        {/* Línea horizontal */}

        <div
          className="
            absolute
            left-0
            right-0
            top-[18%]
            h-px
            bg-white/[0.07]
          "
        />

        {/* Línea inferior */}

        <div
          className="
            absolute
            bottom-[9%]
            left-0
            h-px
            w-[58%]
            bg-gradient-to-r
            from-transparent
            via-[#00a4e4]/25
            to-transparent
          "
        />

      </div>


      {/* ======================================================
          CONTENIDO
      ====================================================== */}

      <div
        className="
          relative
          z-20
          mx-auto
          flex
          min-h-[500px]
          max-w-[1380px]
          items-center
          px-6
          py-10
          sm:px-10
          lg:px-14
          xl:px-10
        "
      >

        {/* ====================================================
            TEXTO
        ==================================================== */}

        <div
          className="
            relative
            z-40
            w-full
            max-w-[560px]
          "
        >

          {/* ==================================================
              TÍTULO
          ================================================== */}

          <h1
            className="
              max-w-[590px]
              text-[43px]
              font-black
              leading-[0.9]
              tracking-[-0.055em]
              text-white
              sm:text-[54px]
              lg:text-[62px]
              xl:text-[70px]
            "
          >

            {isEnglish ? (
              <>
                Coffee

                <span
                  className="
                    block
                    text-[#00a4e4]
                    drop-shadow-[0_0_20px_rgba(0,164,228,0.18)]
                  "
                >
                  processing
                </span>

                <span className="block">
                  plants
                </span>
              </>
            ) : (
              <>
                Centrales de

                <span
                  className="
                    block
                    text-[#00a4e4]
                    drop-shadow-[0_0_20px_rgba(0,164,228,0.18)]
                  "
                >
                  procesamiento
                </span>

                <span className="block">
                  de café
                </span>
              </>
            )}

          </h1>


          {/* ==================================================
              FRASE PRINCIPAL
          ================================================== */}

          <p
            className="
              mt-5
              max-w-[440px]
              text-base
              font-semibold
              leading-6
              text-white/90
              sm:text-lg
              sm:leading-7
            "
          >
            {isEnglish
              ? "Our technology at its maximum expression."
              : "Nuestra tecnología en su máxima expresión."}
          </p>


          {/* ==================================================
              DESCRIPCIÓN
          ================================================== */}

          <p
            className="
              mt-2
              max-w-[475px]
              text-[13px]
              leading-6
              text-white/60
              sm:text-sm
              sm:leading-6
            "
          >
            {isEnglish
              ? "Integrated solutions engineered to transform coffee processing with precision, efficiency and scale."
              : "Soluciones integrales diseñadas para transformar el procesamiento del café con precisión, eficiencia y escala."}
          </p>


          {/* ==================================================
              BOTÓN
          ================================================== */}

          <div className="mt-6">

            <a
              href={rutaContacto}
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-[#00a4e4]
                px-6
                py-3
                text-[10px]
                font-black
                uppercase
                tracking-[0.08em]
                text-white
                shadow-[0_12px_35px_rgba(0,164,228,0.28)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-white
                hover:text-[#302b80]
                hover:shadow-[0_18px_45px_rgba(0,164,228,0.35)]
              "
            >

              <MessageCircle
                size={16}
                strokeWidth={2.4}
              />

              <span>
                {isEnglish ? "Let's talk" : "Hablemos"}
              </span>

              <ArrowUpRight
                size={17}
                strokeWidth={2.5}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />

            </a>

          </div>

        </div>


        {/* ====================================================
            CENTRAL PENAGOS
        ==================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-[-15px]
            right-[-7%]
            z-10
            flex
            w-[67%]
            items-end
            justify-end
            sm:right-[-5%]
            sm:w-[65%]
            lg:right-[-4%]
            lg:w-[64%]
            xl:right-[-2%]
            xl:w-[62%]
          "
        >

          {/* ==================================================
              ILUMINACIÓN INTEGRADA
          ================================================== */}

          <div
            className="
              absolute
              bottom-[13%]
              right-[28%]
              h-[330px]
              w-[420px]
              rounded-full
              bg-[#00a4e4]/[0.11]
              blur-[110px]
            "
          />

          {/* Luz morada */}

          <div
            className="
              absolute
              bottom-[0%]
              right-[12%]
              h-[400px]
              w-[540px]
              rounded-full
              bg-[#716bd5]/[0.11]
              blur-[120px]
            "
          />


          {/* ==================================================
              CENTRAL
          ================================================== */}

          <img
            src="https://penagos.com/wp-content/uploads/2021/02/Imagen-banner-de-centrales.png"
            alt={
              isEnglish
                ? "Penagos coffee processing plant"
                : "Central de procesamiento de café Penagos"
            }
            loading="eager"
            decoding="async"
            className="
              relative
              z-10
              h-auto
              w-full
              max-w-[900px]
              object-contain
              drop-shadow-[0_25px_45px_rgba(0,0,0,0.48)]
            "
          />

        </div>


        {/* ====================================================
            TEXTO INFERIOR DERECHO
        ==================================================== */}

        <div
          className="
            absolute
            bottom-5
            right-8
            z-30
            hidden
            lg:block
            xl:right-10
          "
        >

          <p
            className="
              text-[8px]
              font-bold
              uppercase
              tracking-[0.25em]
              text-white/25
            "
          >
            {isEnglish
              ? "Engineering · Integration · Innovation"
              : "Ingeniería · Integración · Innovación"}
          </p>

        </div>


        {/* ====================================================
            INDICADOR LATERAL
        ==================================================== */}

        <div
          className="
            absolute
            right-5
            top-1/2
            z-30
            hidden
            -translate-y-1/2
            flex-col
            items-center
            gap-3
            lg:flex
          "
        >

          <span className="h-7 w-px bg-white/15" />

          <span
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-[#00a4e4]
              shadow-[0_0_12px_rgba(0,164,228,0.9)]
            "
          />

          <span className="h-7 w-px bg-white/15" />

        </div>

      </div>


      {/* ======================================================
          BORDE INFERIOR
      ====================================================== */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-[#00a4e4]/40
          to-transparent
        "
      />

    </section>
  );
}

export default CentralesHero;
