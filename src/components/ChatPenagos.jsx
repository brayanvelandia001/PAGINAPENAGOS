import { useEffect, useState } from "react";

/* ============================================================
   CHAT PENAGOS - HUBSPOT + PENAGÜINO PREMIUM
============================================================ */

let hubspotCargando = false;
let hubspotListo = false;

/* ============================================================
   IMAGEN PENAGÜINO
============================================================ */

const PENAGUINO_URL =
  "https://penagos.com/wp-content/uploads/2026/09/PenaguinoNew.png";

/* ============================================================
   COLORES PENAGOS
============================================================ */

const AZUL_PENAGOS = "#0893f0";
const AZUL_PENAGOS_CLARO = "#0e99f7";

/* ============================================================
   ABRIR HUBSPOT
============================================================ */

export function abrirChatPenagos() {
  console.log("🔵 Abriendo chat Penagos");

  const abrirAhora = () => {
    const hubspot = window.HubSpotConversations;

    if (hubspot && hubspot.widget) {
      try {
        hubspot.widget.open();

        console.log("✅ HubSpot abierto");

        return true;
      } catch (error) {
        console.error("Error abriendo HubSpot:", error);
      }
    }

    return false;
  };

  if (abrirAhora()) {
    return;
  }

  let intentos = 0;

  const intervalo = setInterval(() => {
    intentos++;

    if (abrirAhora()) {
      clearInterval(intervalo);
    }

    if (intentos >= 40) {
      clearInterval(intervalo);

      console.error("HubSpot no disponible");
    }
  }, 500);
}

/* ============================================================
   COMPONENTE
============================================================ */

function ChatPenagos() {
  const [chatAbierto, setChatAbierto] = useState(false);

  /* ============================================================
     CARGAR HUBSPOT
  ============================================================ */

  useEffect(() => {
    const SCRIPT_ID = "hs-script-loader";

    const SCRIPT_URL =
      "https://js.hs-scripts.com/8988956.js";

    console.log("🔵 Cargando HubSpot");

    /* ----------------------------------------------------------
       SI HUBSPOT YA EXISTE
    ---------------------------------------------------------- */

    if (window.HubSpotConversations) {
      hubspotListo = true;

      configurarEventos();

      return;
    }

    /* ----------------------------------------------------------
       SI EL SCRIPT YA EXISTE
    ---------------------------------------------------------- */

    if (document.getElementById(SCRIPT_ID)) {
      esperarHubSpot();

      return;
    }

    /* ----------------------------------------------------------
       SI YA SE ESTÁ CARGANDO
    ---------------------------------------------------------- */

    if (hubspotCargando) {
      esperarHubSpot();

      return;
    }

    hubspotCargando = true;

    /* ----------------------------------------------------------
       CREAR SCRIPT HUBSPOT
    ---------------------------------------------------------- */

    const script = document.createElement("script");

    script.id = SCRIPT_ID;

    script.async = true;

    script.defer = true;

    script.src = SCRIPT_URL;

    /* ----------------------------------------------------------
       SCRIPT CARGADO
    ---------------------------------------------------------- */

    script.onload = () => {
      console.log("🟢 Script HubSpot cargado");

      hubspotCargando = false;

      esperarHubSpot();
    };

    /* ----------------------------------------------------------
       ERROR
    ---------------------------------------------------------- */

    script.onerror = () => {
      console.error("❌ Error cargando HubSpot");

      hubspotCargando = false;
    };

    document.body.appendChild(script);

    /* ============================================================
       ESPERAR HUBSPOT
    ============================================================ */

    function esperarHubSpot() {
      let intentos = 0;

      const intervalo = setInterval(() => {
        intentos++;

        if (
          window.HubSpotConversations &&
          window.HubSpotConversations.widget
        ) {
          clearInterval(intervalo);

          hubspotListo = true;

          configurarEventos();

          console.log("🟢 HubSpot listo");
        }

        if (intentos >= 40) {
          clearInterval(intervalo);

          console.error(
            "❌ Tiempo de espera de HubSpot agotado"
          );
        }
      }, 500);
    }

    /* ============================================================
       EVENTOS HUBSPOT
    ============================================================ */

    function configurarEventos() {
      const hubspot =
        window.HubSpotConversations;

      if (!hubspot) {
        return;
      }

      if (typeof hubspot.on === "function") {
        hubspot.on(
          "widgetOpened",
          () => {
            setChatAbierto(true);
          }
        );

        hubspot.on(
          "widgetClosed",
          () => {
            setChatAbierto(false);
          }
        );
      }
    }

    return () => {};
  }, []);

  /* ============================================================
     CLICK EN PENAGÜINO
  ============================================================ */

  const handleAbrirChat = () => {
    console.log("🔵 Click en Penagüino");

    setChatAbierto(true);

    abrirChatPenagos();
  };

  /* ============================================================
     RENDER
  ============================================================ */

  return (
    <>
      {/* ======================================================
          PENAGÜINO + MENSAJE
      ====================================================== */}

      {!chatAbierto && (
        <div
          className="
            fixed
            bottom-5
            right-5
            z-[99990]
            flex
            items-center
            justify-center
            group
          "
        >

          {/* ==================================================
              MENSAJE PENAGÜINO
          ================================================== */}

          <div
            className="
              penaguinoMensaje

              absolute

              right-[94px]
              bottom-[72px]

              flex
              flex-col
              items-start

              whitespace-nowrap

              rounded-2xl

              bg-[#0893f0]

              px-5
              py-3.5

              text-white

              shadow-[0_12px_35px_rgba(0,91,150,0.38)]

              border
              border-[#0077B6]

              opacity-0

              translate-x-3
              scale-95

              pointer-events-none

              transition-all
              duration-300
              ease-out
            "
          >

            {/* ==================================================
                SALUDO
            ================================================== */}

            <span
              className="
                text-[14px]
                font-bold
                tracking-[-0.01em]
                text-white
              "
            >
              ¡Hola! Soy Penagüino 👋
            </span>

            {/* ==================================================
                MENSAJE
            ================================================== */}

            <span
              className="
                mt-0.5
                text-[12px]
                font-medium
                text-white/90
              "
            >
              ¿En qué puedo ayudarte?
            </span>

            {/* ==================================================
                COLITA DEL GLOBO
            ================================================== */}

            <span
              className="
                absolute

                right-[-7px]
                bottom-[18px]

                h-4
                w-4

                rotate-45

                bg-[#005B96]

                border-r
                border-t

                border-[#0077B6]
              "
            />

          </div>


          {/* ==================================================
              BOTÓN PENAGÜINO
          ================================================== */}

          <button
            type="button"
            onClick={handleAbrirChat}
            aria-label="Abrir chat Penagos"
            className="
              relative

              flex

              h-[105px]
              w-[105px]

              items-center
              justify-center

              cursor-pointer

              border-0

              bg-transparent

              p-0

              transition-all

              duration-300

              hover:scale-110

              focus:outline-none

              focus-visible:ring-2

              focus-visible:ring-[#D89B2B]

              focus-visible:ring-offset-2
            "
          >

            <img
              src={PENAGUINO_URL}
              alt="Penagüino - Chat Penagos"
              className="
                h-full
                w-full

                object-contain

                drop-shadow-[0_12px_25px_rgba(0,0,0,0.30)]

                animate-[penaguinoFlotar_3s_ease-in-out_infinite]
              "
            />

          </button>

        </div>
      )}


      {/* ======================================================
          ESTILOS
      ====================================================== */}

      <style>
        {`

          /* ==================================================
             ANIMACIÓN PENAGÜINO
          ================================================== */

          @keyframes penaguinoFlotar {

            0% {
              transform: translateY(0);
            }

            50% {
              transform: translateY(-7px);
            }

            100% {
              transform: translateY(0);
            }

          }


          /* ==================================================
             MOSTRAR MENSAJE AL PASAR EL MOUSE
          ================================================== */

          div:has(
            > button[aria-label="Abrir chat Penagos"]
          ):hover
          .penaguinoMensaje {

            opacity: 1;

            transform:
              translateX(0)
              scale(1);

          }


          /* ==================================================
             SOMBRA PENAGÜINO
          ================================================== */

          button[aria-label="Abrir chat Penagos"] {

            filter:
              drop-shadow(
                0 8px 20px rgba(0,0,0,0.18)
              );

          }


          /* ==================================================
             HOVER PENAGÜINO
          ================================================== */

          button[aria-label="Abrir chat Penagos"]:hover {

            filter:
              drop-shadow(
                0 14px 30px rgba(0,0,0,0.28)
              );

          }


          /* ==================================================
             HUBSPOT
             POSICIÓN ORIGINAL
          ================================================== */

          #hubspot-messages-iframe-container {

            position: fixed !important;

            right: 20px !important;

            bottom: 30px !important;

            transform:
              translateX(-40px) !important;

            transform-origin:
              bottom right !important;

            z-index: 99989 !important;

            visibility: visible !important;

          }


          /* ==================================================
             REDUCIR SOLAMENTE LA VENTANA VISUAL
             
             IMPORTANTE:
             NO TOCAMOS WIDTH NI HEIGHT DEL IFRAME.
             HUBSPOT CONSERVA SU ESTRUCTURA INTERNA.
          ================================================== */

          #hubspot-messages-iframe-container iframe {

            transform:
              scale(0.82) !important;

            transform-origin:
              bottom right !important;

            border-radius: 18px !important;

          }


          /* ==================================================
             ICONO HUBSPOT
             SIN CAMBIOS
          ================================================== */

          #hubspot-messages-iframe-container
          .widget-align-right {

            right: auto !important;

            left: 0 !important;

            bottom: 0 !important;

          }


          /* ==================================================
             MÓVIL
          ================================================== */

          @media (max-width: 640px) {

            div:has(
              > button[aria-label="Abrir chat Penagos"]
            ) {

              bottom: 14px;

              right: 14px;

            }


            button[aria-label="Abrir chat Penagos"] {

              height: 88px;

              width: 88px;

            }


            #hubspot-messages-iframe-container {

              right: 70px !important;

              bottom: 14px !important;

              transform: none !important;

            }


            #hubspot-messages-iframe-container iframe {

              transform:
                scale(0.88) !important;

              transform-origin:
                bottom right !important;

            }

          }


          /* ==================================================
             OCULTAR MENSAJE EN MÓVIL
          ================================================== */

          @media (max-width: 640px) {

            .penaguinoMensaje {

              display: none;

            }

          }


          /* ==================================================
             REDUCIR MOVIMIENTO
          ================================================== */

          @media (prefers-reduced-motion: reduce) {

            button[aria-label="Abrir chat Penagos"] img {

              animation: none !important;

            }


            .penaguinoMensaje {

              transition: none !important;

            }

          }

        `}
      </style>
    </>
  );
}


/* ============================================================
   EXPORT
============================================================ */

export default ChatPenagos;