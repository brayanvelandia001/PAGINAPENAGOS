import {
  useEffect,
  useState
} from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import VideoQuienesSomos from "../components/VideoQuienesSomos";
import HistoriaPenagos from "../components/HistoriaPenagos";


/* ============================================================
   PANTALLA DE CARGA
============================================================ */

function PantallaCargaQuienesSomos() {

  return (

    <div
      className="
        fixed
        inset-0
        z-[99999]
        flex
        min-h-screen
        items-center
        justify-center
        bg-white
      "
    >

      <div
        className="
          flex
          flex-col
          items-center
        "
      >

        <img
          src="https://penagos.com/wp-content/uploads/2020/03/Logotipo-Penagos-Hermanos-PNG.png"
          alt="Penagos Hermanos"
          className="
            w-[220px]
            animate-[logoPulse_2s_ease-in-out_infinite]
          "
        />

        <div
          className="
            mt-8
            h-[4px]
            w-[180px]
            overflow-hidden
            rounded-full
            bg-gray-200
          "
        >

          <div
            className="
              h-full
              w-1/2
              bg-[#302b80]
              animate-[loadingPenagos_1.4s_linear_infinite]
            "
          />

        </div>

      </div>


      <style>

        {`

          @keyframes logoPulse {

            0% {
              opacity: .6;
              transform: scale(1);
            }

            50% {
              opacity: 1;
              transform: scale(1.06);
            }

            100% {
              opacity: .6;
              transform: scale(1);
            }

          }


          @keyframes loadingPenagos {

            from {
              transform: translateX(-120%);
            }

            to {
              transform: translateX(220%);
            }

          }

        `}

      </style>

    </div>

  );

}


/* ============================================================
   QUIÉNES SOMOS
============================================================ */

function QuienesSomos({
  language,
  changeLanguage
}) {

  const isEnglish = language === "EN";


  const [
    cargando,
    setCargando
  ] = useState(true);


  /* ============================================================
     CARGA
  ============================================================ */

  useEffect(() => {

    const timer = setTimeout(() => {

      setCargando(false);

    }, 1200);


    return () => clearTimeout(timer);

  }, []);


  if (cargando) {

    return <PantallaCargaQuienesSomos />;

  }


  return (

    <div
      className="
        min-h-screen
        bg-white
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
          CONTENIDO PRINCIPAL
      ====================================================== */}

      <main>


        {/* ====================================================
            HERO CORPORATIVO PREMIUM
        ==================================================== */}

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


          {/* ==================================================
              IMAGEN
          ================================================== */}

          <img
            src="https://penagos.com/wp-content/uploads/2020/03/Banner.jpg"
            alt={
              isEnglish
                ? "Penagos Hermanos"
                : "Penagos Hermanos"
            }
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              object-center
              animate-[zoomHero_15s_ease-in-out_infinite]
            "
          />


          {/* ==================================================
              OVERLAY OSCURO
          ================================================== */}

          <div
            className="
              absolute
              inset-0
              bg-black/20
            "
          />


          {/* ==================================================
              DEGRADADO LATERAL
          ================================================== */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-[#07133d]/85
              via-[#07133d]/40
              to-transparent
            "
          />


          {/* ==================================================
              DEGRADADO INFERIOR
          ================================================== */}

          <div
            className="
              absolute
              inset-x-0
              bottom-0
              h-[50%]
              bg-gradient-to-t
              from-[#07133d]/75
              via-[#07133d]/20
              to-transparent
            "
          />


          {/* ==================================================
              TONALIDAD PENAGOS
          ================================================== */}

          <div
            className="
              absolute
              inset-0
              bg-[#302b80]/5
              mix-blend-multiply
            "
          />


          {/* ==================================================
              CONTENIDO
          ================================================== */}

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
                animate-[heroEntrada_1s_ease]
              "
            >


              {/* ==============================================
                  ETIQUETA
              ============================================== */}

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
                    bg-[#00A4E4]
                    shadow-[0_0_15px_rgba(0,164,228,0.5)]
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
                    ? "Penagos Hermanos"
                    : "Penagos Hermanos"}
                </span>

              </div>


              {/* ==============================================
                  TITULO
              ============================================== */}

              <h1
                className="
                  text-[48px]
                  font-semibold
                  leading-[0.96]
                  tracking-[-0.045em]
                  text-white
                  drop-shadow-[0_5px_25px_rgba(0,0,0,0.30)]
                  sm:text-6xl
                  md:text-7xl
                  lg:text-[82px]
                  xl:text-[92px]
                "
              >

                {isEnglish ? (

                  <>
                    130 years building
                    <br />

                    <span
                      className="
                        text-white/75
                        transition-colors
                        duration-500
                        group-hover:text-white/90
                      "
                    >
                      the future of agriculture
                    </span>
                  </>

                ) : (

                  <>
                    130 años construyendo
                    <br />

                    <span
                      className="
                        text-white/75
                        transition-colors
                        duration-500
                        group-hover:text-white/90
                      "
                    >
                      el futuro de la agricultura
                    </span>
                  </>

                )}

              </h1>


              {/* ==============================================
                  LINEA PENAGOS
              ============================================== */}

              <div
                className="
                  mt-8
                  h-[4px]
                  w-24
                  rounded-full
                  bg-[#00A4E4]
                  shadow-[0_0_18px_rgba(0,164,228,0.55)]
                  transition-all
                  duration-500
                  group-hover:w-40
                  sm:w-32
                "
              />


              {/* ==============================================
                  DESCRIPCION
              ============================================== */}

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

                  ? "Penagos Hermanos develops innovative technology and solutions that transform agricultural processes around the world."

                  : "Penagos Hermanos desarrolla tecnología y soluciones innovadoras que transforman los procesos agrícolas alrededor del mundo."

                }

              </p>


              {/* ==============================================
                  DETALLE
              ============================================== */}

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
                    bg-[#00A4E4]
                    shadow-[0_0_12px_rgba(0,164,228,0.8)]
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
                    ? "Innovation · Agriculture · Technology"
                    : "Innovación · Agricultura · Tecnología"
                  }

                </span>

              </div>


              {/* ==============================================
                  BOTON
              ============================================== */}

              <button
                onClick={() => {

                  document
                    .getElementById("historia")
                    ?.scrollIntoView({
                      behavior: "smooth"
                    });

                }}
                className="
                  group/button
                  mt-9
                  flex
                  cursor-pointer
                  items-center
                  gap-3
                  rounded-full
                  bg-white
                  px-8
                  py-3
                  font-bold
                  text-[#302b80]
                  shadow-2xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-blue-50
                "
              >

                <span>

                  {isEnglish
                    ? "Discover our history"
                    : "Conoce nuestra historia"
                  }

                </span>


                <span
                  className="
                    transition-transform
                    duration-300
                    group-hover/button:translate-x-2
                  "
                >
                  →
                </span>

              </button>


            </div>

          </div>


          {/* ==================================================
              INDICADOR DERECHA
          ================================================== */}

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
                : "Descubre más"
              }

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
                group-hover:border-[#00A4E4]
                group-hover:bg-[#00A4E4]
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


          {/* ==================================================
              LINEA INFERIOR
          ================================================== */}

          <div
            className="
              absolute
              bottom-0
              left-0
              z-20
              h-[4px]
              w-full
              bg-[#00A4E4]
            "
          />


          {/* ==================================================
              SOMBRA SUPERIOR
          ================================================== */}

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


        {/* ====================================================
            VIDEO QUIÉNES SOMOS
        ==================================================== */}

        <VideoQuienesSomos
          language={language}
        />


        {/* ====================================================
            HISTORIA PENAGOS
        ==================================================== */}

        <section
          id="historia"
        >

          <HistoriaPenagos
            language={language}
          />

        </section>


        {/* ====================================================
            FUTURO CONTENIDO
        ==================================================== */}

        <section
          className="
            mx-auto
            max-w-7xl
            px-6
            pb-20
            lg:px-8
          "
        >

          {/*

          Próximamente:

          <Mision />

          <Vision />

          <Valores />

          <PresenciaGlobal />

          */}

        </section>


      </main>


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

          @keyframes heroEntrada {

            from {
              opacity: 0;
              transform: translateY(40px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }

          }


          @keyframes zoomHero {

            0% {
              transform: scale(1.05);
            }

            50% {
              transform: scale(1.12);
            }

            100% {
              transform: scale(1.05);
            }

          }

        `}

      </style>


    </div>

  );

}


export default QuienesSomos;

