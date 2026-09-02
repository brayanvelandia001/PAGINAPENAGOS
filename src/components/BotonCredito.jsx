import {
  X,
  ArrowRight
} from "lucide-react";

import {
  useEffect,
  useState
} from "react";


// ============================================================
// BOTÓN CRÉDITO BANCO AGRARIO
// ============================================================

function BotonCredito({
  language = "ES"
}) {

  // ==========================================================
  // VISIBILIDAD
  // ==========================================================

  const [
    visible,
    setVisible
  ] = useState(false);


  // ==========================================================
  // TARJETA ABIERTA / CERRADA
  // ==========================================================

  const [
    abierto,
    setAbierto
  ] = useState(false);


  // ==========================================================
  // IDIOMA
  // ==========================================================

  const idiomaActual =
    language === "EN"
      ? "EN"
      : "ES";


  const esIngles =
    idiomaActual === "EN";


  // ==========================================================
  // ENLACE BANCO AGRARIO
  // ==========================================================

  const enlaceCredito =
    "https://digital.bancoagrario.gov.co/api/campaigns/referral/ee5cda44-da1e-4ebc-9c41-f08b9ed740a4";


  // ==========================================================
  // LOGO BANCO AGRARIO
  // ==========================================================

  const logoBanco =
    "https://penagos.com/wp-content/uploads/2026/08/banco-agrario-de-colombia-logo-png_seeklogo-181755.png";


  // ==========================================================
  // DETECTAR PAÍS
  // ==========================================================

  useEffect(() => {

    let activo = true;

    const detectarPais = async () => {

      try {

        const response = await fetch(
          "https://ipapi.co/json/"
        );


        if (!response.ok) {

          throw new Error(
            "No se pudo detectar el país"
          );

        }


        const data =
          await response.json();


        // ======================================================
        // SOLO MOSTRAR EN COLOMBIA
        // ======================================================

        if (
          activo &&
          data.country_code === "CO"
        ) {

          setVisible(true);

        } else {

          setVisible(false);

        }

      } catch (error) {

        console.warn(
          "No fue posible detectar el país:",
          error
        );


        // ======================================================
        // SI NO SE PUEDE DETECTAR EL PAÍS,
        // NO MOSTRAR EL BOTÓN
        // ======================================================

        if (activo) {

          setVisible(false);

        }

      }

    };


    detectarPais();


    // ========================================================
    // LIMPIAR EFECTO
    // ========================================================

    return () => {

      activo = false;

    };

  }, []);


  // ==========================================================
  // CERRAR CON ESCAPE
  // ==========================================================

  useEffect(() => {

    const manejarEscape = (event) => {

      if (
        event.key === "Escape" &&
        abierto
      ) {

        setAbierto(false);

      }

    };


    document.addEventListener(
      "keydown",
      manejarEscape
    );


    return () => {

      document.removeEventListener(
        "keydown",
        manejarEscape
      );

    };

  }, [abierto]);


  // ==========================================================
  // SI NO ES COLOMBIA
  // ==========================================================

  if (!visible) {

    return null;

  }


  // ==========================================================
  // CERRAR TARJETA
  // ==========================================================

  const cerrar = () => {

    setAbierto(false);

  };


  // ==========================================================
  // RENDER
  // ==========================================================

  return (

    <>

      {/* ======================================================
          CONTENEDOR FLOTANTE
      ====================================================== */}

      <div
        className="
          fixed
          bottom-6
          left-6
          z-[9990]

          flex
          flex-col
          items-start
          gap-4

          sm:bottom-8
          sm:left-8
        "
      >

        {/* ====================================================
            TARJETA DE INFORMACIÓN
        ==================================================== */}

        {abierto && (

          <div
            className="
              relative

              w-[310px]

              overflow-hidden

              rounded-2xl

              border
              border-slate-200

              bg-white

              shadow-2xl

              animate-[creditoEntrada_0.35s_ease-out]

              sm:w-[370px]
            "
          >

            {/* ==================================================
                BOTÓN CERRAR
            ================================================== */}

            <button
              type="button"

              onClick={cerrar}

              aria-label={
                esIngles
                  ? "Close credit information"
                  : "Cerrar información de crédito"
              }

              className="
                absolute

                right-3
                top-3

                z-20

                flex

                h-8
                w-8

                cursor-pointer

                items-center
                justify-center

                rounded-full

                bg-slate-100

                text-slate-500

                transition-all
                duration-300

                hover:scale-105

                hover:bg-slate-200

                hover:text-slate-800
              "
            >

              <X
                size={17}
              />

            </button>


            {/* ==================================================
                CABECERA
            ================================================== */}

            <div
              className="
                bg-[#07133d]

                px-6
                py-6
              "
            >

              <div
                className="
                  flex
                  items-center
                  gap-4
                "
              >

                {/* ==================================================
                    LOGO BANCO AGRARIO
                ================================================== */}

                <div
                  className="
                    flex

                    h-16
                    w-16

                    shrink-0

                    items-center
                    justify-center

                    overflow-hidden

                    rounded-xl

                    bg-white

                    p-1.5
                  "
                >

                  <img
                    src={logoBanco}

                    alt="Banco Agrario de Colombia"

                    className="
                      h-full
                      w-full

                      object-contain
                    "
                  />

                </div>


                {/* ==================================================
                    TEXTO
                ================================================== */}

                <div>

                  <p
                    className="
                      text-[10px]

                      font-bold

                      uppercase

                      tracking-widest

                      text-white/60
                    "
                  >

                    {esIngles
                      ? "Financing"
                      : "Financiamiento"
                    }

                  </p>


                  <h3
                    className="
                      mt-1

                      text-lg

                      font-extrabold

                      text-white
                    "
                  >

                    Banco Agrario

                  </h3>

                </div>

              </div>

            </div>


            {/* ==================================================
                CONTENIDO
            ================================================== */}

            <div
              className="
                px-6
                py-6
              "
            >

              {/* ==================================================
                  TITULO
              ================================================== */}

              <h4
                className="
                  text-xl

                  font-extrabold

                  leading-tight

                  text-[#07133d]
                "
              >

                {esIngles ? (

                  <>
                    Do you need to finance
                    <br />
                    your project?
                  </>

                ) : (

                  <>
                    ¿Necesitas financiar
                    <br />
                    tu proyecto?
                  </>

                )}

              </h4>


              {/* ==================================================
                  DESCRIPCIÓN
              ================================================== */}

              <p
                className="
                  mt-3

                  text-sm

                  leading-6

                  text-slate-500
                "
              >

                {esIngles
                  ? "Discover the credit options available to purchase your Penagos equipment."
                  : "Conoce las opciones de crédito disponibles para adquirir tus equipos Penagos."
                }

              </p>


              {/* ==================================================
                  BOTÓN SOLICITAR CRÉDITO
              ================================================== */}

              <a
                href={enlaceCredito}

                target="_blank"

                rel="noopener noreferrer"

                className="
                  mt-5

                  flex
                  w-full

                  cursor-pointer

                  items-center
                  justify-center

                  gap-2

                  rounded-xl

                  bg-[#302b80]

                  px-5
                  py-3.5

                  text-sm

                  font-extrabold

                  text-white

                  transition-all
                  duration-300

                  hover:-translate-y-0.5

                  hover:bg-[#07133d]

                  hover:shadow-lg
                "
              >

                {esIngles
                  ? "Apply for credit"
                  : "Solicita tu crédito"
                }

                <ArrowRight
                  size={18}
                />

              </a>

            </div>

          </div>

        )}


        {/* ====================================================
            BOTÓN FLOTANTE
        ==================================================== */}

        {!abierto && (

          <button
            type="button"

            onClick={() =>
              setAbierto(true)
            }

            aria-label={
              esIngles
                ? "Apply for credit with Banco Agrario"
                : "Solicita tu crédito con Banco Agrario"
            }

            className="
              group

              relative

              flex

              h-[95px]
              w-[95px]

              cursor-pointer

              items-center
              justify-center

              overflow-visible

              rounded-full

              border-4
              border-white

              bg-white

              shadow-xl

              transition-all
              duration-300

              hover:scale-105

              hover:shadow-2xl

              sm:h-[110px]
              sm:w-[110px]
            "
          >

            {/* ==================================================
                ANILLO ANIMADO
            ================================================== */}

            <span
              className="
                absolute

                inset-[-6px]

                rounded-full

                border-2

                border-[#302b80]/30

                animate-ping
              "
            />


            {/* ==================================================
                LOGO
            ================================================== */}

            <div
              className="
                relative

                flex

                h-full
                w-full

                items-center
                justify-center

                overflow-hidden

                rounded-full

                bg-white

                p-2.5
              "
            >

              <img
                src={logoBanco}

                alt="Banco Agrario de Colombia"

                className="
                  h-full
                  w-full

                  object-contain
                "
              />

            </div>


            {/* ==================================================
                ETIQUETA
            ================================================== */}

            <span
              className="
                pointer-events-none

                absolute

                bottom-[-10px]

                left-1/2

                -translate-x-1/2

                whitespace-nowrap

                rounded-full

                bg-[#302b80]

                px-4
                py-1.5

                text-[11px]

                font-extrabold

                text-white

                shadow-md

                transition-all
                duration-300

                group-hover:bg-[#07133d]
              "
            >

              {esIngles
                ? "Apply for credit"
                : "Solicita tu crédito"
              }

            </span>

          </button>

        )}

      </div>


      {/* ========================================================
          ANIMACIÓN TARJETA
      ======================================================== */}

      <style>
        {`

          @keyframes creditoEntrada {

            0% {

              opacity: 0;

              transform:
                translateY(12px)
                scale(0.96);

            }

            100% {

              opacity: 1;

              transform:
                translateY(0)
                scale(1);

            }

          }

        `}
      </style>

    </>

  );

}


export default BotonCredito;

