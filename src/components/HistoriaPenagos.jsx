import React, { useState } from "react";

/* ============================================================
   HISTORIA PENAGOS
   DISEÑO PREMIUM / EDITORIAL
============================================================ */

function HistoriaPenagos({ language }) {

  const isEnglish = language === "EN";

  /* ==========================================================
     DATOS DE HISTORIA
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

  const [seleccionado, setSeleccionado] = useState(0);

  const historiaActual = historia[seleccionado];

  const imagenActual = isEnglish
    ? historiaActual.imageEN
    : historiaActual.imageES;


  /* ==========================================================
     NAVEGACIÓN
  ========================================================== */

  const irAnterior = () => {

    setSeleccionado((actual) =>
      actual === 0
        ? historia.length - 1
        : actual - 1
    );

  };


  const irSiguiente = () => {

    setSeleccionado((actual) =>
      actual === historia.length - 1
        ? 0
        : actual + 1
    );

  };


  /* ==========================================================
     RENDER
  ========================================================== */

  return (

    <section className="w-full bg-white">


      {/* ======================================================
          BANNER FULL WIDTH
      ====================================================== */}

      <div
        className="
          relative
          mt-0
          h-[230px]
          w-full
          overflow-hidden
          sm:h-[280px]
          lg:h-[360px]
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


        {/* Overlay */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#07133d]/85
            via-[#07133d]/45
            to-transparent
          "
        />


        {/* Contenido */}

        <div
          className="
            relative
            z-10
            mx-auto
            flex
            h-full
            w-full
            max-w-7xl
            items-center
            px-7
            sm:px-10
            lg:px-14
          "
        >

          <div>

            <div
              className="
                mb-3
                flex
                items-center
                gap-3
              "
            >

              <span
                className="
                  h-px
                  w-8
                  bg-white/60
                "
              />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.28em]
                  text-white/75
                "
              >
                1870 — {isEnglish ? "Present" : "Hoy"}
              </span>

            </div>


            <h2
              className="
                text-4xl
                font-black
                tracking-tight
                text-white
                drop-shadow-lg
                sm:text-5xl
                lg:text-[58px]
              "
            >
              {isEnglish
                ? "Our History"
                : "Nuestra Historia"}
            </h2>


            <div
              className="
                mt-5
                h-[3px]
                w-12
                rounded-full
                bg-[#302b80]
              "
            />

          </div>

        </div>

      </div>


      {/* ======================================================
          CONTENIDO
      ====================================================== */}

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">


        {/* ====================================================
            INTRODUCCIÓN
        ==================================================== */}

        <div
          className="
            mx-auto
            max-w-4xl
            py-12
            text-center
            sm:py-14
            lg:py-16
          "
        >

          <div
            className="
              mx-auto
              mb-6
              flex
              items-center
              justify-center
              gap-4
            "
          >

            <span className="h-px w-10 bg-slate-200" />

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
                ? "A legacy of innovation"
                : "Un legado de innovación"}
            </span>

            <span className="h-px w-10 bg-slate-200" />

          </div>


          <p
            className="
              text-[15px]
              leading-8
              text-slate-600
              sm:text-[17px]
              sm:leading-9
            "
          >

            {isEnglish

              ? "María Nieves and Francisco Penagos arrived in America as a result of the Spanish Carlist exodus in 1878, a situation that demonstrated their great courage in the face of the difficulties of a past marked by conflicts in their native Spain. Since then, and throughout all generations of the Penagos family, courage has been an important characteristic for the sustainability of the family, its businesses and its innovations; always guided by a vision of progress for themselves and those around them."

              : "María Nieves y Francisco Penagos llegaron a América a causa del éxodo Carlista español en 1878, situación que demostró su gran coraje ante las dificultades de un tiempo pasado de conflictos en su natal España. Desde entonces, y con todas las generaciones de Penagos existentes, la valentía ha sido una característica importante para la sostenibilidad de la familia, sus negocios y sus innovaciones; siempre desde la visión del progreso para ellos y sus semejantes."

            }

          </p>

        </div>


        {/* ====================================================
            HISTORIA
        ==================================================== */}

        <div className="pb-14 sm:pb-18">


          {/* ==================================================
              ENCABEZADO
          ================================================== */}

          <div
            className="
              mb-5
              flex
              flex-col
              gap-2
              sm:flex-row
              sm:items-end
              sm:justify-between
            "
          >

            <div>

              <span
                className="
                  text-[9px]
                  font-extrabold
                  uppercase
                  tracking-[0.28em]
                  text-[#302b80]
                "
              >
                {isEnglish
                  ? "Historical timeline"
                  : "Línea histórica"}
              </span>


              <h3
                className="
                  mt-1.5
                  text-2xl
                  font-black
                  tracking-tight
                  text-[#07133d]
                  sm:text-3xl
                "
              >
                {isEnglish
                  ? "More than a century of history"
                  : "Más de un siglo de historia"}
              </h3>

            </div>


            <div
              className="
                flex
                items-center
                gap-3
                text-[11px]
                font-bold
                text-slate-400
              "
            >

              <span>
                {String(seleccionado + 1).padStart(2, "0")}
              </span>

              <span className="h-px w-8 bg-slate-200" />

              <span>
                {String(historia.length).padStart(2, "0")}
              </span>

            </div>

          </div>


          {/* ==================================================
              TIMELINE
          ================================================== */}

          <div
            className="
              relative
              mb-6
              overflow-x-auto
              pb-2
              scrollbar-thin
            "
          >

            <div
              className="
                relative
                min-w-[900px]
                px-4
                py-2
              "
            >

              {/* Línea base */}

              <div
                className="
                  absolute
                  left-4
                  right-4
                  top-[40px]
                  h-px
                  bg-slate-200
                "
              />


              {/* Línea progreso */}

              <div
                className="
                  absolute
                  left-4
                  top-[40px]
                  h-[2px]
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
                          (seleccionado /
                            (historia.length - 1)) *
                          100
                        }% - 8px)`,
                }}
              />


              {/* Puntos */}

              <div
                className="
                  relative
                  flex
                  justify-between
                "
              >

                {historia.map((item, index) => {

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
                      className="
                        group
                        relative
                        z-10
                        flex
                        min-w-[72px]
                        cursor-pointer
                        flex-col
                        items-center
                        outline-none
                      "
                    >

                      {/* Año */}

                      <span
                        className={`
                          mb-4
                          whitespace-nowrap
                          text-[10px]
                          font-bold
                          transition-all
                          duration-300

                          ${
                            activo
                              ? "text-[#302b80]"
                              : pasado
                                ? "text-[#302b80]/70"
                                : "text-slate-400 group-hover:text-[#302b80]"
                          }
                        `}
                      >
                        {item.year}
                      </span>


                      {/* Punto */}

                      <span
                        className={`
                          flex
                          h-7
                          w-7
                          cursor-pointer
                          items-center
                          justify-center
                          rounded-full
                          border
                          bg-white
                          transition-all
                          duration-300

                          ${
                            activo
                              ? "scale-125 border-[#302b80] shadow-[0_0_0_7px_rgba(48,43,128,0.08)]"
                              : pasado
                                ? "border-[#302b80]"
                                : "border-slate-300 group-hover:border-[#302b80] group-hover:scale-110"
                          }
                        `}
                      >

                        <span
                          className={`
                            h-2
                            w-2
                            rounded-full
                            transition-all

                            ${
                              activo || pasado
                                ? "bg-[#302b80]"
                                : "bg-slate-200 group-hover:bg-[#302b80]"
                            }
                          `}
                        />

                      </span>


                      {/* Línea activa */}

                      <span
                        className={`
                          mt-4
                          h-[2px]
                          rounded-full
                          bg-[#302b80]
                          transition-all
                          duration-300

                          ${
                            activo
                              ? "w-8"
                              : "w-0"
                          }
                        `}
                      />

                    </button>

                  );

                })}

              </div>

            </div>

          </div>


          {/* ==================================================
              VISUAL PRINCIPAL
          ================================================== */}

          <div
            className="
              relative
              grid
              overflow-hidden
              rounded-[24px]
              border
              border-slate-200
              bg-white
              shadow-[0_20px_60px_rgba(7,19,61,0.10)]
              lg:grid-cols-[215px_1fr]
            "
          >


            {/* =================================================
                PANEL DEL AÑO
            ================================================= */}

            <div
              className="
                relative
                flex
                flex-col
                justify-between
                overflow-hidden
                bg-[#07133d]
                p-6
                sm:p-8
                lg:min-h-[540px]
                lg:p-8
              "
            >

              {/* Decoración */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-20
                  -top-20
                  h-52
                  w-52
                  rounded-full
                  border
                  border-white/5
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-24
                  -left-20
                  h-64
                  w-64
                  rounded-full
                  border
                  border-white/5
                "
              />


              {/* Encabezado período */}

              <div className="relative z-10">

                <span
                  className="
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.28em]
                    text-white/40
                  "
                >
                  {isEnglish
                    ? "Period"
                    : "Período"}
                </span>


                <div
                  className="
                    mt-3
                    h-px
                    w-7
                    bg-[#302b80]
                  "
                />

              </div>


              {/* Año gigante */}

              <div
                className="
                  relative
                  z-10
                  py-7
                  lg:py-0
                "
              >

                <div
                  className="
                    text-5xl
                    font-black
                    leading-[0.95]
                    tracking-[-0.05em]
                    text-white
                    sm:text-6xl
                    lg:text-[48px]
                  "
                >
                  {historiaActual.year}
                </div>

              </div>


              {/* Navegación */}

              <div className="relative z-10 flex gap-2">

                <button
                  type="button"
                  onClick={irAnterior}
                  aria-label={
                    isEnglish
                      ? "Previous period"
                      : "Período anterior"
                  }
                  className="
                    flex
                    h-10
                    w-10
                    cursor-pointer
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/15
                    text-white
                    transition-all
                    duration-300
                    hover:border-white/40
                    hover:bg-white/10
                    hover:scale-105
                  "
                >
                  ←
                </button>


                <button
                  type="button"
                  onClick={irSiguiente}
                  aria-label={
                    isEnglish
                      ? "Next period"
                      : "Siguiente período"
                  }
                  className="
                    flex
                    h-10
                    w-10
                    cursor-pointer
                    items-center
                    justify-center
                    rounded-full
                    bg-[#302b80]
                    text-white
                    transition-all
                    duration-300
                    hover:bg-white
                    hover:text-[#07133d]
                    hover:scale-105
                  "
                >
                  →
                </button>

              </div>

            </div>


            {/* =================================================
                FOTOGRAFÍA
            ================================================= */}

            <div
              className="
                relative
                flex
                min-h-[320px]
                items-center
                justify-center
                overflow-hidden
                bg-[#f3f4f6]
                p-5
                sm:min-h-[440px]
                sm:p-7
                lg:min-h-[540px]
                lg:p-9
              "
            >

              {/* Fondo decorativo */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  opacity-40
                  [background-image:radial-gradient(#cbd5e1_1px,transparent_1px)]
                  [background-size:18px_18px]
                "
              />


              {/* Marco */}

              <div
                className="
                  relative
                  flex
                  max-h-[480px]
                  w-full
                  items-center
                  justify-center
                "
              >

                {/* Sombra */}

                <div
                  className="
                    absolute
                    inset-6
                    rounded-xl
                    bg-[#07133d]/10
                    blur-2xl
                  "
                />


                {/* Fotografía */}

                <div
                  className="
                    relative
                    max-h-[480px]
                    max-w-full
                    overflow-hidden
                    rounded-xl
                    bg-white
                    p-2
                    shadow-[0_20px_50px_rgba(7,19,61,0.16)]
                    ring-1
                    ring-black/5
                    sm:p-3
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
                      max-h-[450px]
                      w-auto
                      max-w-full
                      cursor-pointer
                      rounded-lg
                      object-contain
                      animate-[historiaFade_550ms_ease-out]
                    "
                  />

                </div>

              </div>


              {/* Número */}

              <div
                className="
                  absolute
                  bottom-4
                  right-5
                  text-[9px]
                  font-bold
                  tracking-[0.2em]
                  text-[#07133d]/25
                "
              >
                PH — {String(seleccionado + 1).padStart(2, "0")}
              </div>

            </div>

          </div>


          {/* ==================================================
              INDICADOR INFERIOR
          ================================================== */}

          <div
            className="
              mt-4
              flex
              items-center
              justify-between
            "
          >

            <span
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.22em]
                text-slate-400
              "
            >
              {isEnglish
                ? "Penagos historical archive"
                : "Archivo histórico Penagos"}
            </span>


            <div
              className="
                flex
                items-center
                gap-2
              "
            >

              {historia.map((_, index) => (

                <button
                  key={index}
                  type="button"
                  onClick={() =>
                    setSeleccionado(index)
                  }
                  aria-label={
                    isEnglish
                      ? `Go to period ${index + 1}`
                      : `Ir al período ${index + 1}`
                  }
                  className={`
                    cursor-pointer
                    rounded-full
                    transition-all
                    duration-300

                    ${
                      index === seleccionado
                        ? "h-1 w-7 bg-[#302b80]"
                        : "h-1 w-2 bg-slate-200 hover:w-4 hover:bg-[#302b80]/50"
                    }
                  `}
                />

              ))}

            </div>

          </div>

        </div>

      </div>


      {/* ======================================================
          ANIMACIONES
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


          .scrollbar-thin::-webkit-scrollbar {
            height: 4px;
          }


          .scrollbar-thin::-webkit-scrollbar-track {
            background: #f1f5f9;
            border-radius: 999px;
          }


          .scrollbar-thin::-webkit-scrollbar-thumb {
            background: #302b80;
            border-radius: 999px;
          }


          .scrollbar-thin {
            scrollbar-width: thin;
            scrollbar-color: #302b80 #f1f5f9;
          }

        `}
      </style>

    </section>

  );

}


export default HistoriaPenagos;