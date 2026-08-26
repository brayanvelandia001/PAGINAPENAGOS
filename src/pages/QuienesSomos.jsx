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
        px-6
      "
    >

      <div
        className="
          flex
          w-full
          flex-col
          items-center
          justify-center
        "
      >

        {/* ==================================================
            LOGO
        ================================================== */}

        <img
          src="https://penagos.com/wp-content/uploads/2020/03/Logotipo-Penagos-Hermanos-PNG.png"
          alt="Penagos Hermanos"
          className="
            w-[210px]
            object-contain
            animate-[logoPulseQuienesSomos_2s_ease-in-out_infinite]
          "
        />


        {/* ==================================================
            BARRA DE CARGA
        ================================================== */}

        <div
          className="
            mt-8
            h-[4px]
            w-[180px]
            overflow-hidden
            rounded-full
            bg-slate-200
          "
        >

          <div
            className="
              h-full
              w-1/2
              rounded-full
              bg-[#302b80]
              animate-[loadingQuienesSomos_1.4s_ease-in-out_infinite]
            "
          />

        </div>

      </div>


      {/* ====================================================
          ANIMACIONES
      ==================================================== */}

      <style>
        {`

          @keyframes logoPulseQuienesSomos {

            0% {
              transform: scale(1);
              opacity: 0.70;
            }

            50% {
              transform: scale(1.06);
              opacity: 1;
            }

            100% {
              transform: scale(1);
              opacity: 0.70;
            }

          }


          @keyframes loadingQuienesSomos {

            0% {
              transform: translateX(-120%);
            }

            100% {
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


  /* ==========================================================
     ESTADO DE CARGA
  ========================================================== */

  const [
    cargando,
    setCargando
  ] = useState(true);


  /* ==========================================================
     CARGA DE LA PÁGINA
  ========================================================== */

  useEffect(() => {

    const timer = setTimeout(() => {

      setCargando(false);

    }, 2500);


    return () => {

      clearTimeout(timer);

    };

  }, []);


  /* ==========================================================
     PANTALLA DE CARGA
  ========================================================== */

  if (cargando) {

    return (
      <PantallaCargaQuienesSomos />
    );

  }


  /* ==========================================================
     PÁGINA
  ========================================================== */

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
            FRANJA CORPORATIVA
        ==================================================== */}

        <section
          className="
            relative
            h-[210px]
            overflow-hidden
            md:h-[230px]
          "
        >


          {/* ==================================================
              IMAGEN DE FONDO
          ================================================== */}

          <img
            src="https://penagos.com/wp-content/uploads/2020/03/Banner.jpg"
            alt={
              isEnglish
                ? "Penagos Hermanos - About Us"
                : "Penagos Hermanos - Quiénes Somos"
            }
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              object-[center_50%]
              md:object-[center_50%]
            "
          />


          {/* ==================================================
              OVERLAY
          ================================================== */}

          <div
            className="
              absolute
              inset-0
              bg-black/35
            "
          />


          {/* ==================================================
              DEGRADADO
          ================================================== */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-black/60
              via-black/25
              to-transparent
            "
          />


          {/* ==================================================
              CONTENIDO DEL BANNER
          ================================================== */}

          <div
            className="
              relative
              z-10
              mx-auto
              flex
              h-full
              max-w-6xl
              items-center
              px-6
              md:px-8
            "
          >

            <div
              className="
                max-w-xl
                text-white
              "
            >

              {/* ==============================================
                  TÍTULO
              ============================================== */}

              <h1
                className="
                  text-3xl
                  font-bold
                  leading-tight
                  drop-shadow-md
                  md:text-4xl
                "
              >

                {
                  isEnglish
                    ? "About Us"
                    : "Quiénes Somos"
                }

              </h1>


              {/* ==============================================
                  LÍNEA
              ============================================== */}

              <div
                className="
                  mt-3
                  h-1
                  w-14
                  rounded-full
                  bg-blue-500
                "
              />


              {/* ==============================================
                  DESCRIPCIÓN
              ============================================== */}

              <p
                className="
                  mt-3
                  max-w-lg
                  text-sm
                  leading-relaxed
                  text-white/90
                  md:text-base
                "
              >

                {
                  isEnglish
                    ? "More than 130 years of experience developing technology and solutions for agriculture."
                    : "Más de 130 años de experiencia desarrollando tecnología y soluciones para la agricultura."
                }

              </p>

            </div>

          </div>

        </section>


        {/* ====================================================
            VIDEO + TEXTO
        ==================================================== */}

        <VideoQuienesSomos
          language={language}
        />


        {/* ====================================================
            HISTORIA PENAGOS
        ==================================================== */}

        <HistoriaPenagos
          language={language}
        />


        {/* ====================================================
            CONTENIDO FUTURO
        ==================================================== */}

        <section
          className="
            mx-auto
            w-full
            max-w-7xl
            px-6
            pb-20
            lg:px-8
          "
        >

          {/*

            AQUÍ MÁS ADELANTE PODEMOS AGREGAR:

            <Mision
              language={language}
            />

            <Vision
              language={language}
            />

            <Valores
              language={language}
            />

          */}

        </section>


      </main>


      {/* ======================================================
          FOOTER
      ====================================================== */}

      <Footer
        language={language}
      />

    </div>

  );

}


export default QuienesSomos;