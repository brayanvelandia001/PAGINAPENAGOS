import { useEffect } from "react";

/* ============================================================
   CHAT PENAGOS - HUBSPOT
   ============================================================

   FUNCIONAMIENTO:

   1. HubSpot se carga una sola vez.
   2. El chat NO se abre automáticamente.
   3. "Hablemos" llama a abrirChatPenagos().
   4. Si HubSpot todavía está cargando, esperamos.
   5. El botón puede abrir el chat nuevamente después de cerrarlo.
============================================================ */


/* ============================================================
   ESTADO GLOBAL DE CARGA
============================================================ */

let hubspotCargando = false;
let hubspotListo = false;


/* ============================================================
   FUNCIÓN PARA ABRIR HUBSPOT
============================================================ */

export function abrirChatPenagos() {

  console.log("======================================");
  console.log("🟣 HABLEMOS - SOLICITANDO CHAT");
  console.log("======================================");


  /* ==========================================================
     FUNCIÓN QUE REALMENTE ABRE EL CHAT
  ========================================================== */

  const abrirAhora = () => {

    const hubspot =
      window.HubSpotConversations;


    if (
      hubspot &&
      hubspot.widget
    ) {

      console.log(
        "✅ HubSpot Conversations disponible"
      );


      try {

        hubspot.widget.open();

        console.log(
          "✅ CHAT HUBSPOT ABIERTO"
        );

        return true;

      } catch (error) {

        console.error(
          "❌ Error abriendo HubSpot:",
          error
        );

        return false;

      }

    }


    return false;

  };


  /* ==========================================================
     SI YA ESTÁ LISTO
  ========================================================== */

  if (abrirAhora()) {

    return;

  }


  /* ==========================================================
     ESPERAR A HUBSPOT
  ========================================================== */

  console.log(
    "⏳ HubSpot todavía no está listo..."
  );


  let intentos = 0;

  const MAX_INTENTOS = 40;


  const intervalo =
    setInterval(() => {

      intentos++;


      console.log(
        `⏳ Esperando HubSpot ${intentos}/${MAX_INTENTOS}`
      );


      /* ------------------------------------------------------
         Intentar abrir
      ------------------------------------------------------ */

      if (abrirAhora()) {

        clearInterval(intervalo);

        console.log(
          "🟢 Chat abierto después de esperar."
        );

        return;

      }


      /* ------------------------------------------------------
         Límite
      ------------------------------------------------------ */

      if (
        intentos >= MAX_INTENTOS
      ) {

        clearInterval(intervalo);

        console.error(
          "❌ HubSpot no estuvo disponible."
        );

      }

    }, 500);

}


/* ============================================================
   COMPONENTE CHAT PENAGOS
============================================================ */

function ChatPenagos() {

  useEffect(() => {

    const SCRIPT_ID =
      "hs-script-loader";


    const SCRIPT_URL =
      "https://js.hs-scripts.com/8988956.js";


    /* ========================================================
       COMPROBAR SI HUBSPOT YA EXISTE
    ======================================================== */

    if (
      window.HubSpotConversations
    ) {

      console.log(
        "🟢 HubSpot ya estaba cargado."
      );

      hubspotListo = true;

      return;

    }


    /* ========================================================
       COMPROBAR SCRIPT EXISTENTE
    ======================================================== */

    const scriptExistente =
      document.getElementById(
        SCRIPT_ID
      );


    if (
      scriptExistente
    ) {

      console.log(
        "🟡 El script de HubSpot ya existe."
      );

      return;

    }


    /* ========================================================
       EVITAR CARGAS DUPLICADAS
    ======================================================== */

    if (
      hubspotCargando
    ) {

      console.log(
        "🟡 HubSpot ya se está cargando."
      );

      return;

    }


    hubspotCargando = true;


    /* ========================================================
       CREAR SCRIPT
    ======================================================== */

    console.log(
      "🔵 Cargando HubSpot..."
    );


    const script =
      document.createElement(
        "script"
      );


    script.id =
      SCRIPT_ID;


    script.type =
      "text/javascript";


    script.async =
      true;


    script.defer =
      true;


    script.src =
      SCRIPT_URL;


    /* ========================================================
       CUANDO EL SCRIPT TERMINA DE CARGAR
    ======================================================== */

    script.onload = () => {

      console.log(
        "======================================"
      );

      console.log(
        "🟢 SCRIPT HUBSPOT CARGADO"
      );

      console.log(
        "🟢 EL CHAT NO SE ABRIRÁ AUTOMÁTICAMENTE"
      );

      console.log(
        "======================================"
      );


      hubspotCargando =
        false;


      /*
       * Esperar un poco porque HubSpot puede
       * cargar el objeto Conversations después
       * de cargar el script.
       */

      let intentos =
        0;


      const esperarInicializacion =
        setInterval(() => {

          intentos++;


          if (
            window.HubSpotConversations &&
            window.HubSpotConversations.widget
          ) {

            clearInterval(
              esperarInicializacion
            );


            hubspotListo =
              true;


            console.log(
              "🟢 HUBSPOT CONVERSATIONS LISTO"
            );


            return;

          }


          if (
            intentos >= 30
          ) {

            clearInterval(
              esperarInicializacion
            );


            console.warn(
              "⚠️ HubSpot tardó demasiado en inicializar."
            );

          }

        }, 500);

    };


    /* ========================================================
       ERROR
    ======================================================== */

    script.onerror = () => {

      hubspotCargando =
        false;


      console.error(
        "❌ ERROR CARGANDO HUBSPOT"
      );

    };


    /* ========================================================
       INSERTAR SCRIPT
    ======================================================== */

    document.body.appendChild(
      script
    );


  }, []);


  /* ==========================================================
     IMPORTANTE

     NO llamamos widget.open() aquí.
     
     El chat solamente se abre mediante:
     
     abrirChatPenagos()
  ========================================================== */

  return null;

}


export default ChatPenagos;
