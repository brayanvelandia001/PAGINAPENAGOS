import React from "react";

/* ============================================================
   VIDEO QUIÉNES SOMOS
   DISEÑO PREMIUM / CORPORATIVO PENAGOS
   VERSIÓN COMPACTA
============================================================ */

function VideoQuienesSomos({ language }) {

  const isEnglish = language === "EN";

  return (

    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-white
        py-12
        md:py-14
        lg:py-16
      "
    >

      {/* ======================================================
          DECORACIÓN DE FONDO
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-10
          h-80
          w-80
          rounded-full
          bg-[#302b80]/[0.035]
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          bottom-0
          h-72
          w-72
          rounded-full
          bg-[#07133d]/[0.025]
          blur-3xl
        "
      />


      {/* ======================================================
          CONTENEDOR
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          w-full
          max-w-7xl
          items-center
          gap-8
          px-5
          sm:px-6
          lg:grid-cols-[1.12fr_0.88fr]
          lg:gap-10
          lg:px-8
        "
      >


        {/* ====================================================
            VIDEO
        ==================================================== */}

        <div className="relative">

          {/* Marco decorativo */}

          <div
            className="
              pointer-events-none
              absolute
              -bottom-4
              -left-4
              hidden
              h-24
              w-24
              rounded-2xl
              border
              border-[#302b80]/15
              lg:block
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -right-3
              -top-3
              hidden
              h-20
              w-20
              rounded-xl
              border
              border-[#07133d]/10
              lg:block
            "
          />


          {/* ==================================================
              VIDEO
          ================================================== */}

          <div
            className="
              relative
              z-10
              overflow-hidden
              rounded-[24px]
              bg-[#07133d]
              p-1.5
              shadow-[0_30px_80px_rgba(7,19,61,0.18)]
              sm:rounded-[28px]
              sm:p-2
            "
          >

            <div
              className="
                relative
                aspect-video
                w-full
                overflow-hidden
                rounded-[18px]
                bg-slate-900
                sm:rounded-[22px]
              "
            >

              <iframe
                src="https://www.youtube.com/embed/qNKsrITrLJE"
                title={
                  isEnglish
                    ? "Penagos Hermanos - About Us"
                    : "Penagos Hermanos - Quiénes Somos"
                }
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  border-0
                "
                loading="lazy"
                allow="
                  accelerometer;
                  autoplay;
                  clipboard-write;
                  encrypted-media;
                  gyroscope;
                  picture-in-picture;
                  web-share
                "
                allowFullScreen
              />

            </div>

          </div>


          {/* ==================================================
              ETIQUETA VIDEO
          ================================================== */}

          <div
            className="
              absolute
              bottom-5
              left-5
              z-20
              hidden
              items-center
              gap-2
              rounded-full
              bg-white/95
              px-4
              py-2
              shadow-lg
              backdrop-blur
              sm:flex
            "
          >

            <span
              className="
                h-2
                w-2
                rounded-full
                bg-[#302b80]
              "
            />

            <span
              className="
                text-[10px]
                font-extrabold
                uppercase
                tracking-[0.2em]
                text-[#07133d]
              "
            >
              Penagos Hermanos
            </span>

          </div>

        </div>


        {/* ====================================================
            CONTENIDO
        ==================================================== */}

        <div
          className="
            relative
            flex
            flex-col
            justify-center
            lg:pl-0
          "
        >

          {/* ==================================================
              LÍNEA SUPERIOR
          ================================================== */}

          <div
            className="
              mb-4
              flex
              items-center
              gap-3
            "
          >

            <span
              className="
                h-[2px]
                w-9
                rounded-full
                bg-[#302b80]
              "
            />

            <span
              className="
                text-[10px]
                font-extrabold
                uppercase
                tracking-[0.3em]
                text-[#302b80]
              "
            >
              {isEnglish
                ? "Who we are"
                : "Quiénes somos"
              }
            </span>

          </div>


          {/* ==================================================
              TÍTULO
          ================================================== */}

          <h2
            className="
              max-w-xl
              text-3xl
              font-black
              leading-[1.05]
              tracking-[-0.025em]
              text-[#07133d]
              sm:text-4xl
              lg:text-[40px]
              xl:text-[44px]
            "
          >

            {isEnglish
              ? "More than 130 years creating solutions for agriculture"
              : "Más de 130 años creando soluciones para la agricultura"
            }

          </h2>


          {/* Línea */}

          <div
            className="
              mt-4
              h-[3px]
              w-12
              rounded-full
              bg-[#302b80]
            "
          />


          {/* ==================================================
              DESCRIPCIÓN
          ================================================== */}

          <p
            className="
              mt-5
              max-w-xl
              text-[14px]
              leading-7
              text-slate-600
              sm:text-[15px]
              sm:leading-7
            "
          >

            {isEnglish

              ? "We are a Colombian company with more than 130 years of experience working alongside the agricultural sector. We develop durable and reliable machinery designed to meet the demands of agricultural work and provide technological solutions to farmers around the world."

              : "Somos una empresa colombiana con más de 130 años de experiencia trabajando junto al sector agrícola. Desarrollamos maquinaria durable y confiable, diseñada para responder a las exigencias del trabajo en el campo y brindar soluciones tecnológicas a agricultores alrededor del mundo."

            }

          </p>


          {/* ==================================================
              DATOS DESTACADOS
          ================================================== */}

          <div
            className="
              mt-6
              grid
              max-w-xl
              grid-cols-2
              gap-3
              sm:gap-4
            "
          >

            {/* ITEM 1 */}

            <div
              className="
                rounded-xl
                border
                border-slate-200
                bg-white
                px-4
                py-4
                shadow-[0_8px_24px_rgba(7,19,61,0.045)]
              "
            >

              <div
                className="
                  text-2xl
                  font-black
                  leading-none
                  tracking-tight
                  text-[#302b80]
                  sm:text-3xl
                "
              >
                +130
              </div>

              <div
                className="
                  mt-1.5
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.14em]
                  text-slate-400
                "
              >
                {isEnglish
                  ? "Years of experience"
                  : "Años de experiencia"
                }
              </div>

            </div>


            {/* ITEM 2 */}

            <div
              className="
                rounded-xl
                border
                border-slate-200
                bg-white
                px-4
                py-4
                shadow-[0_8px_24px_rgba(7,19,61,0.045)]
              "
            >

              <div
                className="
                  text-2xl
                  font-black
                  leading-none
                  tracking-tight
                  text-[#302b80]
                  sm:text-3xl
                "
              >
                Global
              </div>

              <div
                className="
                  mt-1.5
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.14em]
                  text-slate-400
                "
              >
                {isEnglish
                  ? "Agricultural solutions"
                  : "Soluciones agrícolas"
                }
              </div>

            </div>

          </div>


          {/* ==================================================
              DETALLE FINAL
          ================================================== */}

          <div
            className="
              mt-5
              flex
              items-center
              gap-3
              text-[11px]
              font-semibold
              text-[#07133d]/45
            "
          >

            <span
              className="
                h-px
                w-7
                bg-slate-200
              "
            />

            <span>
              {isEnglish
                ? "Innovation · Experience · Reliability"
                : "Innovación · Experiencia · Confianza"
              }
            </span>

          </div>

        </div>

      </div>

    </section>

  );

}

export default VideoQuienesSomos;

