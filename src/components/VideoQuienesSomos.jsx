import React from "react";


/* ============================================================
   VIDEO QUIÉNES SOMOS
============================================================ */

function VideoQuienesSomos({
  language
}) {

  const isEnglish = language === "EN";


  return (

    <section
      className="
        w-full
        bg-white
        py-14
        md:py-18
        lg:py-20
      "
    >

      <div
        className="
          mx-auto
          grid
          w-full
          max-w-7xl
          items-center
          gap-10
          px-6
          lg:grid-cols-2
          lg:gap-14
          lg:px-8
        "
      >


        {/* ====================================================
            VIDEO
        ==================================================== */}

        <div
          className="
            relative
            w-full
            overflow-hidden
            rounded-2xl
            bg-slate-100
            shadow-[0_18px_50px_rgba(8,15,50,0.10)]
          "
        >

          <div
            className="
              relative
              aspect-video
              w-full
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


        {/* ====================================================
            TEXTO
        ==================================================== */}

        <div
          className="
            flex
            flex-col
            justify-center
          "
        >

          {/* ==================================================
              TÍTULO
          ================================================== */}

          <h2
            className="
              text-3xl
              font-extrabold
              leading-tight
              text-[#07133d]
              md:text-4xl
              lg:text-[40px]
            "
          >

            {isEnglish
              ? "More than 130 years creating solutions for agriculture"
              : "Más de 130 años creando soluciones para la agricultura"
            }

          </h2>


          {/* ==================================================
              LÍNEA
          ================================================== */}

          <div
            className="
              mt-5
              h-1
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
              mt-6
              max-w-xl
              text-base
              leading-7
              text-slate-600
              md:text-lg
              md:leading-8
            "
          >

            {isEnglish

              ? "We are a Colombian company that has been working alongside the agricultural sector for more than 125 years, building the experience required to manufacture durable machinery with the strength demanded by agricultural work. We are always looking to solve the challenges faced by large and small farmers around the world through our technology."

              : "Somos una empresa colombiana que ha recorrido el campo por más de 125 años, para así lograr la experiencia que se necesita en la fabricación de maquinaria durable con la fortaleza que el trabajo en el mundo agrícola exige; siempre buscando solucionar con nuestra tecnología los desafíos de grandes y pequeños agricultores alrededor del mundo."

            }

          </p>

        </div>

      </div>

    </section>

  );

}


export default VideoQuienesSomos;