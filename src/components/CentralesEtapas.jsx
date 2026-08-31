import React, { useEffect, useState } from "react";

import {
  Droplets,
  Settings2,
  Wind,
  Sprout,
} from "lucide-react";

// ============================================================
// MODALES
// ============================================================

import ModalRecepcion from "./Etapas/ModalRecepcion";
import ModalDespulpado from "./Etapas/ModalDespulpado";
import ModalLavado from "./Etapas/ModalLavado";
import ModalSecado from "./Etapas/ModalSecado";

// ============================================================
// CENTRALES - ETAPAS DEL PROCESAMIENTO
// ============================================================

function CentralesEtapas({ language = "ES" }) {
  const isEnglish = language === "EN";

  const [etapaSeleccionada, setEtapaSeleccionada] = useState(null);

  // ============================================================
  // ETAPAS
  // ============================================================

  const etapas = [
    {
      id: "recepcion",

      numero: "01",

      titulo: isEnglish
        ? "Reception & cleaning"
        : "Recepción y limpieza",

      icono: Sprout,

      imagen:
        "https://penagos.com/wp-content/uploads/2021/02/Tanque-Sifon-penagos-wet-mill-coffee-beneficio-humedo-de-cafe-1024x1024.png",

      // POSICIÓN ORIGINAL
      posicion: {
        left: "27%",
        top: "38%",
      },
    },

    {
      id: "despulpado",

      numero: "02",

      titulo: isEnglish
        ? "Pulping & classification"
        : "Despulpado y clasificación",

      icono: Settings2,

      imagen:
        "https://penagos.com/wp-content/uploads/2021/02/UDC-7500-Bourbon-1024x1024.png",

      // POSICIÓN ORIGINAL
      posicion: {
        left: "45%",
        top: "35%",
      },
    },

    {
      id: "lavado",

      numero: "03",

      titulo: isEnglish
        ? "Washing"
        : "Lavado",

      icono: Droplets,

      imagen:
        "https://penagos.com/wp-content/uploads/2021/02/Ecowasher-9000-Penagos-lavador-de-cafe-fermentados-Penagos-1024x1024.png",

      // POSICIÓN ORIGINAL
      posicion: {
        left: "63%",
        top: "36%",
      },
    },

    {
      id: "secado",

      numero: "04",

      titulo: isEnglish
        ? "Drying"
        : "Secado",

      icono: Wind,

      imagen:
        "https://penagos.com/wp-content/uploads/2021/02/Secadora-de-cafe-Penagos-ECODRYER-1024x1024.png",

      // POSICIÓN ORIGINAL
      posicion: {
        left: "55%",
        top: "20%",
      },
    },
  ];

  // ============================================================
  // ABRIR MODAL
  // ============================================================

  const abrirEtapa = (etapa) => {
    setEtapaSeleccionada(etapa);
  };

  // ============================================================
  // CERRAR MODAL
  // ============================================================

  const cerrarModal = () => {
    setEtapaSeleccionada(null);
  };

  // ============================================================
  // ESCAPE
  // ============================================================

  useEffect(() => {
    const cerrarConEscape = (e) => {
      if (e.key === "Escape") {
        cerrarModal();
      }
    };

    if (etapaSeleccionada) {
      window.addEventListener("keydown", cerrarConEscape);
    }

    return () => {
      window.removeEventListener("keydown", cerrarConEscape);
    };
  }, [etapaSeleccionada]);

  // ============================================================
  // RENDER
  // ============================================================

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-white
        py-16
        sm:py-18
        lg:py-20
      "
    >
      {/* ========================================================
          CONTENEDOR
      ======================================================== */}

      <div
        className="
          mx-auto
          max-w-[1200px]
          px-5
          sm:px-8
          lg:px-10
        "
      >
        {/* ======================================================
            TÍTULO
        ====================================================== */}

        <div className="max-w-[650px]">
          <h2
            className="
              text-[34px]
              font-black
              leading-[0.96]
              tracking-[-0.045em]
              text-[#171843]
              sm:text-[42px]
              lg:text-[46px]
            "
          >
            {isEnglish ? (
              <>
                Technologies for
                <span className="block text-[#00a4e4]">
                  every stage
                </span>
              </>
            ) : (
              <>
                Tecnología para cada
                <span className="block text-[#00a4e4]">
                  etapa del proceso
                </span>
              </>
            )}
          </h2>

          <p
            className="
              mt-4
              max-w-[580px]
              text-[13px]
              leading-6
              text-[#171843]/60
              sm:text-sm
            "
          >
            {isEnglish
              ? "Discover the Penagos technology behind every stage of coffee processing."
              : "Conozca la tecnología Penagos detrás de cada etapa del procesamiento del café."}
          </p>
        </div>

        {/* ======================================================
            CENTRAL INTERACTIVA
        ====================================================== */}

        <div
          className="
            relative
            mx-auto
            mt-9
            w-full
            max-w-[800px]
          "
        >
          {/* ====================================================
              IMAGEN
          ==================================================== */}

          <div
            className="
              relative
              w-full
              overflow-hidden
              rounded-[25px]
              bg-[#f5f7f9]
              shadow-[0_20px_50px_rgba(23,24,67,0.10)]
            "
          >
            <img
              src="https://penagos.com/wp-content/uploads/2021/02/Imagen-render-central-de-cafe-Penagos-1024x1024.png"
              alt={
                isEnglish
                  ? "Penagos coffee processing plant"
                  : "Central de procesamiento de café Penagos"
              }
              className="
                block
                h-auto
                w-full
                max-h-[540px]
                object-contain
              "
            />

            {/* ==================================================
                PUNTOS INTERACTIVOS
            ================================================== */}

            {etapas.map((etapa) => {
              const Icon = etapa.icono;

              return (
                <button
                  key={etapa.id}
                  type="button"
                  onClick={() => abrirEtapa(etapa)}
                  aria-label={etapa.titulo}
                  style={{
                    left: etapa.posicion.left,
                    top: etapa.posicion.top,
                  }}
                  className="
                    group
                    absolute
                    z-30
                    -translate-x-1/2
                    -translate-y-1/2
                    cursor-pointer
                    outline-none
                  "
                >
                  {/* ============================================
                      HALO
                  ============================================ */}

                  <span
                    className="
                      pointer-events-none
                      absolute
                      left-1/2
                      top-1/2
                      h-12
                      w-12
                      -translate-x-1/2
                      -translate-y-1/2
                      rounded-full
                      bg-[#00a4e4]/25
                      animate-ping
                    "
                  />

                  {/* ============================================
                      PUNTO
                  ============================================ */}

                  <span
                    className="
                      relative
                      flex
                      h-9
                      w-9
                      cursor-pointer
                      items-center
                      justify-center
                      rounded-full
                      border-[2px]
                      border-white
                      bg-[#00a4e4]
                      shadow-[0_6px_20px_rgba(0,164,228,0.40)]
                      transition-all
                      duration-300
                      group-hover:scale-125
                      group-focus:scale-125
                      group-active:scale-110
                    "
                  >
                    <Icon
                      size={15}
                      strokeWidth={2.5}
                      className="
                        pointer-events-none
                        text-white
                      "
                    />
                  </span>

                  {/* ============================================
                      TOOLTIP
                  ============================================ */}

                  <span
                    className="
                      pointer-events-none
                      absolute
                      left-1/2
                      top-full
                      z-40
                      mt-2
                      w-max
                      max-w-[180px]
                      -translate-x-1/2
                      translate-y-1
                      rounded-full
                      bg-[#171843]
                      px-3
                      py-1.5
                      text-[8px]
                      font-black
                      uppercase
                      tracking-[0.08em]
                      text-white
                      opacity-0
                      shadow-xl
                      transition-all
                      duration-300
                      group-hover:translate-y-0
                      group-hover:opacity-100
                    "
                  >
                    {etapa.titulo}
                  </span>
                </button>
              );
            })}

            {/* ==================================================
                INDICADOR
            ================================================== */}

            <div
              className="
                absolute
                bottom-4
                left-4
                z-20
                hidden
                items-center
                gap-2
                rounded-full
                border
                border-white/70
                bg-white/85
                px-3
                py-1.5
                backdrop-blur-md
                sm:flex
              "
            >
              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#00a4e4]
                  shadow-[0_0_8px_rgba(0,164,228,0.8)]
                "
              />

              <span
                className="
                  text-[7px]
                  font-black
                  uppercase
                  tracking-[0.14em]
                  text-[#171843]
                "
              >
                {isEnglish
                  ? "Click each point"
                  : "Haz clic en cada punto"}
              </span>
            </div>
          </div>
        </div>

        {/* ======================================================
            MINI INDICADORES DE ETAPAS
        ====================================================== */}

        <div
          className="
            mx-auto
            mt-5
            grid
            max-w-[800px]
            grid-cols-2
            gap-2.5
            lg:grid-cols-4
          "
        >
          {etapas.map((etapa) => {
            const Icon = etapa.icono;

            return (
              <button
                key={etapa.id}
                type="button"
                onClick={() => abrirEtapa(etapa)}
                className="
                  group
                  flex
                  cursor-pointer
                  items-center
                  gap-2.5
                  rounded-xl
                  border
                  border-[#171843]/10
                  bg-white
                  p-3
                  text-left
                  shadow-[0_7px_20px_rgba(23,24,67,0.04)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#00a4e4]/30
                  hover:shadow-[0_12px_28px_rgba(23,24,67,0.09)]
                "
              >
                {/* ICONO */}

                <span
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    cursor-pointer
                    items-center
                    justify-center
                    rounded-lg
                    bg-[#00a4e4]/10
                  "
                >
                  <Icon
                    size={14}
                    className="text-[#00a4e4]"
                  />
                </span>

                {/* TEXTO */}

                <span className="min-w-0">
                  <span
                    className="
                      block
                      text-[7px]
                      font-black
                      uppercase
                      tracking-[0.16em]
                      text-[#00a4e4]
                    "
                  >
                    {etapa.numero}
                  </span>

                  <span
                    className="
                      mt-0.5
                      block
                      truncate
                      text-[10px]
                      font-black
                      text-[#171843]
                    "
                  >
                    {etapa.titulo}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ========================================================
          MODALES
      ======================================================== */}

      {etapaSeleccionada && (
        <>
          {/* ====================================================
              RECEPCIÓN
          ==================================================== */}

          {etapaSeleccionada.id === "recepcion" && (
            <ModalRecepcion
              etapa={etapaSeleccionada}
              language={language}
              cerrar={cerrarModal}
            />
          )}

          {/* ====================================================
              DESPULPADO
          ==================================================== */}

          {etapaSeleccionada.id === "despulpado" && (
            <ModalDespulpado
              etapa={etapaSeleccionada}
              language={language}
              cerrar={cerrarModal}
            />
          )}

          {/* ====================================================
              LAVADO
          ==================================================== */}

          {etapaSeleccionada.id === "lavado" && (
            <ModalLavado
              etapa={etapaSeleccionada}
              language={language}
              cerrar={cerrarModal}
            />
          )}

          {/* ====================================================
              SECADO
          ==================================================== */}

          {etapaSeleccionada.id === "secado" && (
            <ModalSecado
              etapa={etapaSeleccionada}
              language={language}
              cerrar={cerrarModal}
            />
          )}
        </>
      )}
    </section>
  );
}

export default CentralesEtapas;