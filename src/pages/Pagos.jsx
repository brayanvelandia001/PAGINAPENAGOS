import {
  useEffect,
  useState
} from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import PagosContenido from "../components/PagosContenido";


/* ============================================================
   PANTALLA DE CARGA
============================================================ */

function PantallaCargaPagos() {

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
            animate-[logoPulsePagos_2s_ease-in-out_infinite]
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
              animate-[loadingPagos_1.4s_ease-in-out_infinite]
            "
          />

        </div>

      </div>


      {/* ====================================================
          ANIMACIONES
      ==================================================== */}

      <style>
        {`

          @keyframes logoPulsePagos {

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


          @keyframes loadingPagos {

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
   PÁGINA PAGOS
============================================================ */

function Pagos({
  language,
  changeLanguage
}) {


  /* ==========================================================
     ESTADO DE CARGA
  ========================================================== */

  const [
    cargando,
    setCargando
  ] = useState(true);


  /* ==========================================================
     CARGA INICIAL
  ========================================================== */

  useEffect(() => {

    const timer = setTimeout(() => {

      setCargando(false);

    }, 1000);


    return () => {

      clearTimeout(timer);

    };

  }, []);


  /* ==========================================================
     RENDER
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
          CONTENIDO
      ====================================================== */}

      <main>

        <PagosContenido
          language={language}
        />

      </main>


      {/* ======================================================
          FOOTER
      ====================================================== */}

      <Footer
        language={language}
      />


      {/* ======================================================
          PANTALLA DE CARGA
      ====================================================== */}

      {cargando && (

        <PantallaCargaPagos />

      )}

    </div>

  );

}


export default Pagos;