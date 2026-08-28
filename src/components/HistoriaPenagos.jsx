import React, { useState } from "react";

/* ============================================================
   HISTORIA PENAGOS
============================================================ */

function HistoriaPenagos({ language }) {

  const isEnglish = language === "EN";

  /* ==========================================================
     DATOS DE HISTORIA
     
     Cada período tiene:
     - imageES = imagen en español
     - imageEN = imagen en inglés
  ========================================================== */

  const historia = [

    {
      year: "1870 - 1900",

      imageES:
        "https://penagos.com/wp-content/uploads/2020/02/Nuestra-historia-Penagos-1870-1900.jpg",

      imageEN:
        "https://penagos.com/wp-content/uploads/2021/03/QUIENES-SOMOS-1.jpg",
    },

    {
      year: "1910",

      imageES:
        "https://penagos.com/wp-content/uploads/2021/05/1900-1910-scaled.jpg",

      imageEN:
        "https://penagos.com/wp-content/uploads/2021/03/QUIENES-SOMOS-2.jpg",
    },

    {
      year: "1920",

      imageES:
        "https://penagos.com/wp-content/uploads/2020/02/Nuestra-historia-Penagos-1910-1920.jpg",

      imageEN:
        "https://penagos.com/wp-content/uploads/2021/03/QUIENES-SOMOS-3.jpg",
    },

    {
      year: "1930",

      imageES:
        "https://penagos.com/wp-content/uploads/2020/02/Nuestra-historia-Penagos-1920-1930.jpg",

      imageEN:
        "https://penagos.com/wp-content/uploads/2021/03/QUIENES-SOMOS-4.jpg",
    },

    {
      year: "1940",

      imageES:
        "https://penagos.com/wp-content/uploads/2020/02/Nuestra-historia-Penagos-1930-1940.jpg",

      imageEN:
        "https://penagos.com/wp-content/uploads/2021/03/QUIENES-SOMOS-5.jpg",
    },

    {
      year: "1950 - 1960",

      imageES:
        "https://penagos.com/wp-content/uploads/2021/05/1950-1960-scaled.jpg",

      imageEN:
        "https://penagos.com/wp-content/uploads/2021/03/QUIENES-SOMOS-6.jpg",
    },

    {
      year: "1970 - 1980",

      imageES:
        "https://penagos.com/wp-content/uploads/2020/02/Nuestra-historia-Penagos-1970-1980.jpg",

      imageEN:
        "https://penagos.com/wp-content/uploads/2021/03/QUIENES-SOMOS-7.jpg",
    },

    {
      year: "1990 - 2000",

      imageES:
        "https://penagos.com/wp-content/uploads/2020/02/Nuestra-historia-Penagos-1990-2000.jpg",

      imageEN:
        "https://penagos.com/wp-content/uploads/2021/03/QUIENES-SOMOS-8.jpg",
    },

    {
      year: "2010",

      imageES:
        "https://penagos.com/wp-content/uploads/2020/02/Nuestra-historia-Penagos-2000-2010.jpg",

      imageEN:
        "https://penagos.com/wp-content/uploads/2021/03/QUIENES-SOMOS-9.jpg",
    },

    {
      year: "2017",

      imageES:
        "https://penagos.com/wp-content/uploads/2021/05/2017-2020-scaled.jpg",

      imageEN:
        "https://penagos.com/wp-content/uploads/2021/06/2017-2020-2-scaled.jpg",
    },

    {
      year: "Hoy",

      imageES:
        "https://penagos.com/wp-content/uploads/2021/06/2021-HOY-1-scaled.jpg",

      imageEN:
        "https://penagos.com/wp-content/uploads/2021/03/QUIENES-SOMOS-10.jpg",
    },

  ];


  /* ==========================================================
     ESTADO
  ========================================================== */

  const [
    seleccionado,
    setSeleccionado
  ] = useState(0);


  /* ==========================================================
     HISTORIA ACTUAL
  ========================================================== */

  const historiaActual =
    historia[seleccionado];


  /* ==========================================================
     IMAGEN ACTUAL SEGÚN IDIOMA
  ========================================================== */

  const imagenActual = isEnglish
    ? historiaActual.imageEN
    : historiaActual.imageES;


  /* ==========================================================
     RENDER
  ========================================================== */

  return (

    <section
      className="
        w-full
        bg-white
        py-16
        md:py-20
        lg:py-24
      "
    >

      <div
        className="
          mx-auto
          w-full
          max-w-7xl
          px-6
          lg:px-8
        "
      >


        {/* ====================================================
            BANNER
        ==================================================== */}

        <div
          className="
            relative
            h-[220px]
            overflow-hidden
            rounded-2xl
            md:h-[280px]
            lg:h-[320px]
          "
        >

          <img
            src="https://penagos.com/wp-content/uploads/2020/02/Banner-Nuestra-Historia.jpg"
            alt={
              isEnglish
                ? "Penagos Hermanos history"
                : "Historia de Penagos Hermanos"
            }
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              object-center
            "
          />


          {/* OVERLAY */}

          <div
            className="
              absolute
              inset-0
              bg-black/40
            "
          />


          {/* DEGRADADO */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-black/65
              via-black/25
              to-transparent
            "
          />


          {/* TITULO */}

          <div
            className="
              relative
              z-10
              flex
              h-full
              items-center
              px-8
              md:px-12
              lg:px-16
            "
          >

            <div>

              <h2
                className="
                  text-3xl
                  font-extrabold
                  text-white
                  drop-shadow-lg
                  md:text-4xl
                  lg:text-5xl
                "
              >

                {
                  isEnglish
                    ? "Our History"
                    : "Nuestra Historia"
                }

              </h2>


              <div
                className="
                  mt-4
                  h-1
                  w-14
                  rounded-full
                  bg-[#302b80]
                "
              />

            </div>

          </div>

        </div>



        {/* ====================================================
            INTRODUCCIÓN / FUNDADORES
        ==================================================== */}

        <div
          className="
            mx-auto
            max-w-4xl
            py-14
            text-center
            md:py-16
          "
        >

          <p
            className="
              text-base
              leading-8
              text-slate-600
              md:text-lg
              md:leading-9
            "
          >

            {
              isEnglish

                ? "María Nieves and Francisco Penagos arrived in America as a result of the Spanish Carlist exodus in 1878, a situation that demonstrated their great courage in the face of the difficulties of a past marked by conflicts in their native Spain. Since then, and throughout all generations of the Penagos family, courage has been an important characteristic for the sustainability of the family, its businesses and its innovations; always guided by a vision of progress for themselves and those around them."

                : "María Nieves y Francisco Penagos llegaron a América a causa del éxodo Carlista español en 1878, situación que demostró su gran coraje ante las dificultades de un tiempo pasado de conflictos en su natal España. Desde entonces, y con todas las generaciones de Penagos existentes, la valentía ha sido una característica importante para la sostenibilidad de la familia, sus negocios y sus innovaciones; siempre desde la visión del progreso para ellos y sus semejantes."
            }

          </p>

        </div>



        {/* ====================================================
            LINEA DE TIEMPO
        ==================================================== */}

        <div
          className="
            mx-auto
            w-full
            max-w-6xl
          "
        >


          {/* ==================================================
              CONTENEDOR
          ================================================== */}

          <div
            className="
              overflow-x-auto
              pb-8
              scrollbar-thin
            "
          >

            <div
              className="
                relative
                flex
                min-w-[950px]
                items-start
                justify-between
                px-8
                pt-2
              "
            >


              {/* ==============================================
                  LINEA BASE
              ============================================== */}

              <div
                className="
                  absolute
                  left-8
                  right-8
                  top-[50px]
                  h-[3px]
                  rounded-full
                  bg-slate-200
                "
              />


              {/* ==============================================
                  LINEA DE PROGRESO
              ============================================== */}

              <div
                className="
                  absolute
                  left-8
                  top-[50px]
                  h-[3px]
                  rounded-full
                  bg-[#302b80]
                  transition-all
                  duration-700
                  ease-out
                "
                style={{
                  width:
                    seleccionado === 0
                      ? "0%"
                      : `calc(${
                          (
                            seleccionado /
                            (historia.length - 1)
                          ) * 100
                        }% - 32px)`
                }}
              />


              {/* ==============================================
                  PERIODOS
              ============================================== */}

              {
                historia.map(
                  (item, index) => {

                    const activo =
                      index === seleccionado;

                    const pasado =
                      index < seleccionado;


                    return (

                      <button
                        key={item.year}
                        type="button"
                        onClick={() =>
                          setSeleccionado(index)
                        }
                        aria-label={
                          isEnglish
                            ? `View history ${item.year}`
                            : `Ver historia ${item.year}`
                        }
                        className="
                          group
                          relative
                          z-10
                          flex
                          min-w-[88px]
                          cursor-pointer
                          flex-col
                          items-center
                          focus:outline-none
                        "
                      >


                        {/* ==================================
                            AÑO
                        ================================== */}

                        <span
                          className={`
                            mb-5
                            whitespace-nowrap
                            text-xs
                            font-bold
                            transition-all
                            duration-300

                            ${
                              activo
                                ? "scale-125 text-[#302b80]"
                                : pasado
                                  ? "text-[#302b80]"
                                  : "text-slate-400 group-hover:text-[#302b80]"
                            }
                          `}
                        >

                          {item.year}

                        </span>



                        {/* ==================================
                            PUNTO PRINCIPAL
                        ================================== */}

                        <span
                          className={`
                            relative
                            flex
                            h-7
                            w-7
                            items-center
                            justify-center
                            rounded-full
                            border-2
                            bg-white
                            transition-all
                            duration-500

                            ${
                              activo
                                ? `
                                  scale-125
                                  border-[#302b80]
                                  shadow-[0_0_0_8px_rgba(48,43,128,0.10)]
                                `
                                : pasado
                                  ? `
                                    border-[#302b80]
                                  `
                                  : `
                                    border-slate-300
                                    group-hover:border-[#302b80]
                                    group-hover:scale-110
                                  `
                            }
                          `}
                        >

                          <span
                            className={`
                              h-2.5
                              w-2.5
                              rounded-full
                              transition-all
                              duration-300

                              ${
                                activo || pasado
                                  ? "bg-[#302b80]"
                                  : "bg-slate-200 group-hover:bg-[#302b80]"
                              }
                            `}
                          />

                        </span>



                        {/* ==================================
                            INDICADOR ACTIVO
                        ================================== */}

                        <span
                          className={`
                            mt-5
                            h-1
                            rounded-full
                            bg-[#302b80]
                            transition-all
                            duration-300

                            ${
                              activo
                                ? "w-10 opacity-100"
                                : "w-0 opacity-0"
                            }
                          `}
                        />

                      </button>

                    );

                  }
                )
              }

            </div>

          </div>



          {/* ==================================================
              AÑO ACTUAL
          ================================================== */}

          <div
            className="
              mt-2
              flex
              items-center
              justify-center
              gap-4
            "
          >

            <div
              className="
                h-px
                w-12
                bg-slate-200
                md:w-20
              "
            />


            <span
              className="
                text-sm
                font-extrabold
                tracking-[0.08em]
                text-[#07133d]
                transition-all
                duration-300
                md:text-base
              "
            >

              {historiaActual.year}

            </span>


            <div
              className="
                h-px
                w-12
                bg-slate-200
                md:w-20
              "
            />

          </div>

        </div>



        {/* ====================================================
            ESPACIO
        ==================================================== */}

        <div
          className="
            h-8
            md:h-10
          "
        />



        {/* ====================================================
            IMAGEN HISTÓRICA
        ==================================================== */}

        <div
          className="
            relative
            mx-auto
            w-full
            max-w-5xl
            overflow-hidden
            rounded-2xl
            bg-slate-50
            shadow-[0_20px_60px_rgba(8,15,50,0.12)]
          "
        >

          <img
            key={imagenActual}
            src={imagenActual}
            alt={
              isEnglish
                ? `Penagos history ${historiaActual.year}`
                : `Historia de Penagos ${historiaActual.year}`
            }
            className="
              block
              h-auto
              max-h-[700px]
              w-full
              object-contain
              animate-[historiaFade_500ms_ease-in-out]
            "
          />

        </div>



      </div>



      {/* ======================================================
          ANIMACIÓN
      ====================================================== */}

      <style>
        {`

          @keyframes historiaFade {

            0% {
              opacity: 0;
              transform: scale(0.985);
            }

            100% {
              opacity: 1;
              transform: scale(1);
            }

          }

        `}
      </style>

    </section>

  );

}


export default HistoriaPenagos;

