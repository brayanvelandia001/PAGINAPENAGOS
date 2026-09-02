import React, { useEffect, useRef, useState } from "react";
import {
  ShieldCheck,
  Coffee,
  CheckCircle,
} from "lucide-react";

// ============================================================
// FORMULARIO CAFÉ - PENAGOS
// ============================================================

const HUBSPOT_PORTAL_ID = "8988956";

const FORM_IDS = {
  ES: "eb6b7917-2ee1-44a0-b841-72f12cccad5e",
  EN: "fb44f917-88c6-4cfa-979f-fd4b6a4d0eca",
};

// ============================================================
// IMÁGENES
// ============================================================

const BACKGROUND_IMAGE =
  "https://penagos.com/wp-content/uploads/2021/08/Imagen-fondo-contacto.webp";

const LOGO_PENAGOS =
  "https://penagos.com/wp-content/uploads/2020/03/Logotipo-Penagos-Hermanos-PNG.png";

// ============================================================
// COMPONENTE
// ============================================================

function FormularioCafe({ language = "ES" }) {
  const isEnglish = language === "EN";

  const formId = isEnglish
    ? FORM_IDS.EN
    : FORM_IDS.ES;

  const formContainerRef = useRef(null);

  const [enviado, setEnviado] = useState(false);
  const [recargarFormulario, setRecargarFormulario] = useState(0);

  // ============================================================
  // TEXTOS
  // ============================================================

  const textos = {
    ES: {
      titulo: "Hablemos de su proyecto",

      descripcion:
        "Cuéntenos sobre su operación y nuestro equipo le ayudará a encontrar la tecnología Penagos adecuada para sus necesidades.",

      badge: "Tecnología para el beneficio del café",

      formularioTitulo:
        "Cuéntenos sobre su proyecto",

      formularioDescripcion:
        "Complete el formulario y nuestro equipo se pondrá en contacto con usted.",

      seguridad:
        "Sus datos serán tratados de forma segura.",

      seguridadDescripcion:
        "Protegemos la información proporcionada a través de este formulario.",

      enviadoTitulo:
        "¡Solicitud enviada correctamente!",

      enviadoDescripcion:
        "Gracias por contactar a Penagos Hermanos. Nuestro equipo revisará su solicitud y se pondrá en contacto con usted lo antes posible.",

      enviarOtro:
        "Enviar otra solicitud",
    },

    EN: {
      titulo:
        "Let's talk about your project",

      descripcion:
        "Tell us about your operation and our team will help you find the right Penagos technology for your needs.",

      badge:
        "Coffee processing technology",

      formularioTitulo:
        "Tell us about your project",

      formularioDescripcion:
        "Complete the form and our team will contact you.",

      seguridad:
        "Your information will be handled securely.",

      seguridadDescripcion:
        "We protect the information provided through this form.",

      enviadoTitulo:
        "Request sent successfully!",

      enviadoDescripcion:
        "Thank you for contacting Penagos Hermanos. Our team will review your request and contact you as soon as possible.",

      enviarOtro:
        "Send another request",
    },
  };

  const t = textos[language] || textos.ES;

  // ============================================================
  // CARGAR HUBSPOT
  // ============================================================

  useEffect(() => {
    setEnviado(false);

    let activo = true;

    const cargarFormulario = () => {
      if (!activo) return;

      const contenedor = formContainerRef.current;

      if (!contenedor) return;

      // Limpiar formulario anterior
      contenedor.innerHTML = "";

      // Verificar HubSpot
      if (
        !window.hbspt ||
        !window.hbspt.forms
      ) {
        console.warn(
          "HubSpot todavía no está disponible"
        );

        return;
      }

      // Crear formulario
      window.hbspt.forms.create({
        region: "na1",

        portalId: HUBSPOT_PORTAL_ID,

        formId: formId,

        target: "#hubspot-formulario-cafe",

        onFormSubmitted: function () {
          console.log(
            "Formulario de café enviado correctamente"
          );

          if (activo) {
            setEnviado(true);
          }
        },
      });
    };

    // ==========================================================
    // HUBSPOT YA CARGADO
    // ==========================================================

    if (
      window.hbspt &&
      window.hbspt.forms
    ) {
      setTimeout(() => {
        cargarFormulario();
      }, 50);
    }

    // ==========================================================
    // CARGAR SCRIPT HUBSPOT
    // ==========================================================

    else {
      const scriptExistente =
        document.querySelector(
          'script[src="https://js.hsforms.net/forms/embed/v2.js"]'
        );

      if (scriptExistente) {
        scriptExistente.addEventListener(
          "load",
          cargarFormulario
        );
      } else {
        const script =
          document.createElement("script");

        script.src =
          "https://js.hsforms.net/forms/embed/v2.js";

        script.charset = "utf-8";

        script.type = "text/javascript";

        script.async = true;

        script.onload = () => {
          cargarFormulario();
        };

        document.body.appendChild(script);
      }
    }

    // ==========================================================
    // LIMPIEZA
    // ==========================================================

    return () => {
      activo = false;

      if (formContainerRef.current) {
        formContainerRef.current.innerHTML = "";
      }
    };
  }, [formId, recargarFormulario]);

  // ============================================================
  // NUEVO FORMULARIO
  // ============================================================

  const nuevoFormulario = () => {
    setEnviado(false);

    setRecargarFormulario(
      (actual) => actual + 1
    );
  };

  // ============================================================
  // RENDER
  // ============================================================

  return (
    <section
      id="formulario-cafe"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#171843]
      "
    >

      {/* ======================================================
          IMAGEN DE FONDO
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          z-0
          bg-cover
          bg-center
          bg-no-repeat
        "
        style={{
          backgroundImage: `url("${BACKGROUND_IMAGE}")`,
        }}
      />

      {/* ======================================================
          OVERLAY
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          z-0
          bg-gradient-to-r
          from-[#171843]/90
          via-[#171843]/65
          to-[#171843]/25
        "
      />

      {/* ======================================================
          BRILLO AZUL
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          z-0
          pointer-events-none
          bg-[radial-gradient(circle_at_78%_45%,rgba(0,169,232,0.25),transparent_35%)]
        "
      />

      {/* ======================================================
          DECORACIÓN
      ====================================================== */}

      <div
        className="
          absolute
          -right-40
          top-20
          z-0
          h-[500px]
          w-[500px]
          rounded-full
          border
          border-white/10
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          -right-16
          top-44
          z-0
          h-[300px]
          w-[300px]
          rounded-full
          border
          border-[#00A9E8]/20
          pointer-events-none
        "
      />

      {/* ======================================================
          CONTENIDO
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-6
          py-14
          md:px-8
          md:py-20
          lg:py-24
        "
      >

        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-10
            lg:grid-cols-[0.85fr_1.15fr]
            lg:gap-16
          "
        >

          {/* ==================================================
              COLUMNA IZQUIERDA
          ================================================== */}

          <div
            className="
              max-w-xl
              text-white
            "
          >

            {/* TÍTULO */}

            <h2
              className="
                text-4xl
                font-bold
                leading-[1]
                tracking-[-0.04em]
                sm:text-5xl
                lg:text-6xl
              "
            >
              {t.titulo}
            </h2>

            {/* DESCRIPCIÓN */}

            <p
              className="
                mt-6
                max-w-lg
                text-sm
                leading-relaxed
                text-white/75
                md:text-base
              "
            >
              {t.descripcion}
            </p>

            {/* ==================================================
                BADGE
            ================================================== */}

            <div
              className="
                mt-8
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-white/15
                bg-white/10
                px-4
                py-2.5
                backdrop-blur-md
              "
            >

              <div
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  bg-[#00A9E8]
                  text-white
                  shadow-[0_5px_20px_rgba(0,169,232,0.35)]
                "
              >
                <Coffee
                  size={15}
                  strokeWidth={2}
                />
              </div>

              <span
                className="
                  text-xs
                  font-semibold
                  text-white/90
                "
              >
                {t.badge}
              </span>

            </div>

            {/* ==================================================
                SEGURIDAD
            ================================================== */}

            <div
              className="
                mt-8
                flex
                items-start
                gap-3
              "
            >

              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/10
                  bg-white/10
                "
              >

                <ShieldCheck
                  size={19}
                  className="text-[#00A9E8]"
                />

              </div>

              <div>

                <p
                  className="
                    text-xs
                    font-semibold
                    text-white
                  "
                >
                  {t.seguridad}
                </p>

                <p
                  className="
                    mt-1
                    text-[11px]
                    leading-relaxed
                    text-white/50
                  "
                >
                  {t.seguridadDescripcion}
                </p>

              </div>

            </div>

          </div>

          {/* ==================================================
              FORMULARIO
          ================================================== */}

          <div className="relative">

            {/* GLOW */}

            <div
              className="
                absolute
                -inset-5
                rounded-[35px]
                bg-[#00A9E8]/15
                blur-3xl
              "
            />

            {/* CARD */}

            <div
              className="
                relative
                overflow-hidden
                rounded-[24px]
                bg-white
                shadow-[0_30px_90px_rgba(0,0,0,0.38)]
              "
            >

              {/* LÍNEA SUPERIOR */}

              <div
                className="
                  h-1
                  w-full
                  bg-gradient-to-r
                  from-[#171843]
                  via-[#00A9E8]
                  to-[#171843]
                "
              />

              {/* =================================================
                  FORMULARIO NORMAL
              ================================================= */}

              {!enviado ? (

                <>

                  {/* =================================================
                      CABECERA DEL FORMULARIO
                  ================================================= */}

                  <div
                    className="
                      border-b
                      border-slate-100
                      px-6
                      py-6
                      sm:px-8
                      md:py-7
                    "
                  >

                    {/* LOGO PENAGOS
                        SE MANTIENE
                    */}

                    <img
                      src={LOGO_PENAGOS}
                      alt="Penagos Hermanos"
                      className="
                        mb-5
                        h-auto
                        w-36
                        object-contain
                        object-left
                      "
                    />

                    {/* TÍTULO */}

                    <h3
                      className="
                        text-xl
                        font-bold
                        tracking-tight
                        text-[#171843]
                        md:text-2xl
                      "
                    >
                      {t.formularioTitulo}
                    </h3>

                    <p
                      className="
                        mt-2
                        max-w-lg
                        text-xs
                        leading-relaxed
                        text-slate-500
                        md:text-sm
                      "
                    >
                      {t.formularioDescripcion}
                    </p>

                  </div>

                  {/* =================================================
                      HUBSPOT
                  ================================================= */}

                  <div
                    className="
                      px-6
                      py-7
                      sm:px-8
                      md:py-8
                    "
                  >

                    <div
                      ref={formContainerRef}
                      id="hubspot-formulario-cafe"
                      className="
                        hubspot-formulario-cafe
                        w-full
                      "
                    />

                  </div>

                </>

              ) : (

                /* =================================================
                   ÉXITO
                ================================================= */

                <div
                  className="
                    flex
                    min-h-[520px]
                    flex-col
                    items-center
                    justify-center
                    px-6
                    py-12
                    text-center
                    sm:px-10
                  "
                >

                  {/* LOGO */}

                  <img
                    src={LOGO_PENAGOS}
                    alt="Penagos Hermanos"
                    className="
                      mb-8
                      h-auto
                      w-44
                      object-contain
                    "
                  />

                  {/* CHECK */}

                  <div
                    className="
                      mb-6
                      flex
                      h-20
                      w-20
                      items-center
                      justify-center
                      rounded-full
                      bg-green-50
                      ring-8
                      ring-green-50/60
                    "
                  >

                    <CheckCircle
                      size={50}
                      strokeWidth={1.8}
                      className="text-green-600"
                    />

                  </div>

                  {/* TÍTULO */}

                  <h3
                    className="
                      text-2xl
                      font-bold
                      text-[#171843]
                      md:text-3xl
                    "
                  >
                    {t.enviadoTitulo}
                  </h3>

                  {/* DESCRIPCIÓN */}

                  <p
                    className="
                      mt-4
                      max-w-md
                      text-sm
                      leading-7
                      text-slate-500
                    "
                  >
                    {t.enviadoDescripcion}
                  </p>

                  {/* BOTÓN */}

                  <button
                    type="button"
                    onClick={nuevoFormulario}
                    className="
                      mt-8
                      rounded-xl
                      bg-[#00A9E8]
                      px-6
                      py-3
                      text-sm
                      font-bold
                      text-white
                      shadow-[0_10px_25px_rgba(0,169,232,0.25)]
                      transition-all
                      duration-200
                      hover:-translate-y-0.5
                      hover:bg-[#0098D1]
                      hover:shadow-[0_15px_30px_rgba(0,169,232,0.3)]
                    "
                  >
                    {t.enviarOtro}
                  </button>

                </div>

              )}

            </div>

          </div>

        </div>

      </div>

      {/* ========================================================
          ESTILOS HUBSPOT
      ======================================================== */}

      <style>{`

        /* ======================================================
           BASE DEL FORMULARIO
        ====================================================== */

        .hubspot-formulario-cafe,
        .hubspot-formulario-cafe *,
        .hubspot-formulario-cafe input,
        .hubspot-formulario-cafe textarea,
        .hubspot-formulario-cafe select,
        .hubspot-formulario-cafe button,
        .hubspot-formulario-cafe label,
        .hubspot-formulario-cafe p,
        .hubspot-formulario-cafe span,
        .hubspot-formulario-cafe a {

          font-family:
            Inter,
            ui-sans-serif,
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif !important;

        }


        /* ======================================================
           FORMULARIO
        ====================================================== */

        .hubspot-formulario-cafe .hs-form {

          width: 100% !important;

          margin: 0 !important;

          padding: 0 !important;

        }


        /* ======================================================
           CAMPOS
        ====================================================== */

        .hubspot-formulario-cafe .hs-form-field {

          width: 100% !important;

          margin-bottom: 18px !important;

          padding: 0 !important;

        }


        /* ======================================================
           LABELS
        ====================================================== */

        .hubspot-formulario-cafe .hs-form-field > label {

          display: block !important;

          width: 100% !important;

          margin: 0 0 7px 0 !important;

          padding: 0 !important;

          color: #171843 !important;

          font-family:
            Inter,
            ui-sans-serif,
            system-ui,
            sans-serif !important;

          font-size: 12px !important;

          line-height: 1.4 !important;

          font-weight: 700 !important;

        }


        /* ======================================================
           ASTERISCO
        ====================================================== */

        .hubspot-formulario-cafe
        .hs-form-required {

          color: #00A9E8 !important;

          margin-left: 2px !important;

        }


        /* ======================================================
           INPUTS
        ====================================================== */

        .hubspot-formulario-cafe
        input[type="text"],

        .hubspot-formulario-cafe
        input[type="email"],

        .hubspot-formulario-cafe
        input[type="tel"],

        .hubspot-formulario-cafe
        input[type="number"],

        .hubspot-formulario-cafe
        input[type="url"],

        .hubspot-formulario-cafe
        input[type="date"],

        .hubspot-formulario-cafe
        input[type="password"],

        .hubspot-formulario-cafe
        select,

        .hubspot-formulario-cafe
        textarea {

          display: block !important;

          width: 100% !important;

          max-width: 100% !important;

          box-sizing: border-box !important;

          min-height: 44px !important;

          margin: 0 !important;

          padding: 11px 14px !important;

          border-radius: 12px !important;

          border: 1px solid #cbd5e1 !important;

          background: #f8fafc !important;

          color: #171843 !important;

          font-family:
            Inter,
            ui-sans-serif,
            system-ui,
            sans-serif !important;

          font-size: 13px !important;

          font-weight: 400 !important;

          line-height: 1.4 !important;

          outline: none !important;

          box-shadow: none !important;

          appearance: none !important;

          -webkit-appearance: none !important;

          transition:
            border-color .2s ease,
            background .2s ease,
            box-shadow .2s ease !important;

        }


        /* ======================================================
           PLACEHOLDER
        ====================================================== */

        .hubspot-formulario-cafe
        input::placeholder,

        .hubspot-formulario-cafe
        textarea::placeholder {

          color: #94a3b8 !important;

          opacity: 1 !important;

          font-family:
            Inter,
            ui-sans-serif,
            system-ui,
            sans-serif !important;

          font-size: 13px !important;

          font-weight: 400 !important;

        }


        /* ======================================================
           FOCUS
        ====================================================== */

        .hubspot-formulario-cafe
        input:focus,

        .hubspot-formulario-cafe
        select:focus,

        .hubspot-formulario-cafe
        textarea:focus {

          border-color: #00A9E8 !important;

          background: #ffffff !important;

          box-shadow:
            0 0 0 3px
            rgba(0,169,232,0.10)
            !important;

        }


        /* ======================================================
           TEXTAREA
        ====================================================== */

        .hubspot-formulario-cafe
        textarea {

          min-height: 105px !important;

          resize: vertical !important;

        }


        /* ======================================================
           SELECT
        ====================================================== */

        .hubspot-formulario-cafe
        select {

          cursor: pointer !important;

        }


        /* ======================================================
           CHECKBOX / RADIO
        ====================================================== */

        .hubspot-formulario-cafe
        input[type="checkbox"],

        .hubspot-formulario-cafe
        input[type="radio"] {

          width: 15px !important;

          height: 15px !important;

          min-height: 15px !important;

          margin: 0 !important;

          padding: 0 !important;

          accent-color: #00A9E8 !important;

          cursor: pointer !important;

          appearance: auto !important;

          -webkit-appearance: auto !important;

        }


        /* ======================================================
           LISTAS DE CHECKBOX
        ====================================================== */

        .hubspot-formulario-cafe
        ul.inputs-list {

          margin: 8px 0 0 !important;

          padding: 0 !important;

          list-style: none !important;

        }


        .hubspot-formulario-cafe
        .hs-form-checkbox,

        .hubspot-formulario-cafe
        .hs-form-radio {

          margin: 0 0 8px 0 !important;

          padding: 0 !important;

        }


        /* ======================================================
           TEXTO CHECKBOX
        ====================================================== */

        .hubspot-formulario-cafe
        .hs-form-checkbox label,

        .hubspot-formulario-cafe
        .hs-form-radio label {

          display: flex !important;

          align-items: flex-start !important;

          gap: 8px !important;

          width: 100% !important;

          margin: 0 !important;

          padding: 0 !important;

          color: #475569 !important;

          font-family:
            Inter,
            ui-sans-serif,
            system-ui,
            sans-serif !important;

          font-size: 11px !important;

          line-height: 1.5 !important;

          font-weight: 400 !important;

        }


        /* ======================================================
           CONTENEDOR LEGAL
        ====================================================== */

        .hubspot-formulario-cafe
        .legal-consent-container {

          margin-top: 12px !important;

          padding: 0 !important;

          color: #64748b !important;

          font-family:
            Inter,
            ui-sans-serif,
            system-ui,
            sans-serif !important;

          font-size: 10px !important;

          line-height: 1.5 !important;

        }


        .hubspot-formulario-cafe
        .legal-consent-container p {

          margin: 0 0 7px 0 !important;

          padding: 0 !important;

          color: #64748b !important;

          font-family:
            Inter,
            ui-sans-serif,
            system-ui,
            sans-serif !important;

          font-size: 10px !important;

          line-height: 1.5 !important;

        }


        /* ======================================================
           ENLACES LEGALES
        ====================================================== */

        .hubspot-formulario-cafe
        .legal-consent-container a {

          color: #171843 !important;

          font-family:
            Inter,
            ui-sans-serif,
            system-ui,
            sans-serif !important;

          font-size: 10px !important;

          font-weight: 600 !important;

          text-decoration: underline !important;

          text-decoration-color:
            rgba(0,169,232,.45) !important;

          text-underline-offset: 2px !important;

          transition:
            color .2s ease !important;

        }


        .hubspot-formulario-cafe
        .legal-consent-container a:hover {

          color: #00A9E8 !important;

        }


        /* ======================================================
           DESCRIPCIONES DE CAMPOS
        ====================================================== */

        .hubspot-formulario-cafe
        .hs-field-desc {

          margin: 5px 0 0 !important;

          padding: 0 !important;

          color: #94a3b8 !important;

          font-family:
            Inter,
            ui-sans-serif,
            system-ui,
            sans-serif !important;

          font-size: 10px !important;

          line-height: 1.4 !important;

        }


        /* ======================================================
           ERRORES
        ====================================================== */

        .hubspot-formulario-cafe
        .hs-error-msgs {

          margin: 6px 0 0 !important;

          padding: 0 !important;

          list-style: none !important;

        }


        .hubspot-formulario-cafe
        .hs-error-msg {

          color: #dc2626 !important;

          font-family:
            Inter,
            ui-sans-serif,
            system-ui,
            sans-serif !important;

          font-size: 10px !important;

          font-weight: 500 !important;

          line-height: 1.4 !important;

        }


        /* ======================================================
           MENSAJE DE ERROR / OBLIGATORIO
        ====================================================== */

        .hubspot-formulario-cafe
        .hs-main-font-element {

          font-family:
            Inter,
            ui-sans-serif,
            system-ui,
            sans-serif !important;

        }


        /* ======================================================
           BOTÓN
        ====================================================== */

        .hubspot-formulario-cafe
        input[type="submit"],

        .hubspot-formulario-cafe
        .hs-button {

          display: block !important;

          width: 100% !important;

          min-height: 48px !important;

          margin: 18px 0 0 !important;

          padding: 12px 20px !important;

          border: none !important;

          border-radius: 12px !important;

          background:
            linear-gradient(
              135deg,
              #171843 0%,
              #252b73 55%,
              #00A9E8 150%
            ) !important;

          color: #ffffff !important;

          font-family:
            Inter,
            ui-sans-serif,
            system-ui,
            sans-serif !important;

          font-size: 13px !important;

          font-weight: 700 !important;

          line-height: 1.2 !important;

          cursor: pointer !important;

          box-shadow:
            0 10px 25px
            rgba(23,24,67,.18)
            !important;

          transition:
            transform .2s ease,
            box-shadow .2s ease,
            filter .2s ease
            !important;

        }


        /* ======================================================
           HOVER BOTÓN
        ====================================================== */

        .hubspot-formulario-cafe
        input[type="submit"]:hover,

        .hubspot-formulario-cafe
        .hs-button:hover {

          transform: translateY(-2px) !important;

          filter: brightness(1.06) !important;

          box-shadow:
            0 15px 32px
            rgba(23,24,67,.25)
            !important;

        }


        /* ======================================================
           ACTIVE
        ====================================================== */

        .hubspot-formulario-cafe
        input[type="submit"]:active,

        .hubspot-formulario-cafe
        .hs-button:active {

          transform: translateY(0) !important;

        }


        /* ======================================================
           MENSAJE ENVIADO HUBSPOT
        ====================================================== */

        .hubspot-formulario-cafe
        .submitted-message {

          padding: 25px 10px !important;

          text-align: center !important;

          color: #171843 !important;

          font-family:
            Inter,
            ui-sans-serif,
            system-ui,
            sans-serif !important;

          font-size: 14px !important;

          line-height: 1.6 !important;

        }


        /* ======================================================
           MOBILE
        ====================================================== */

        @media (max-width: 640px) {

          .hubspot-formulario-cafe
          .hs-form-field {

            margin-bottom: 14px !important;

          }


          .hubspot-formulario-cafe
          input[type="text"],

          .hubspot-formulario-cafe
          input[type="email"],

          .hubspot-formulario-cafe
          input[type="tel"],

          .hubspot-formulario-cafe
          input[type="number"],

          .hubspot-formulario-cafe
          input[type="url"],

          .hubspot-formulario-cafe
          input[type="date"],

          .hubspot-formulario-cafe
          select,

          .hubspot-formulario-cafe
          textarea {

            min-height: 42px !important;

            padding: 10px 12px !important;

            border-radius: 10px !important;

            font-size: 12px !important;

          }


          .hubspot-formulario-cafe
          textarea {

            min-height: 90px !important;

          }


          .hubspot-formulario-cafe
          input[type="submit"],

          .hubspot-formulario-cafe
          .hs-button {

            min-height: 46px !important;

            font-size: 12px !important;

          }


          .hubspot-formulario-cafe
          .legal-consent-container,

          .hubspot-formulario-cafe
          .legal-consent-container p,

          .hubspot-formulario-cafe
          .legal-consent-container a {

            font-size: 9px !important;

          }

        }

      `}</style>

    </section>
  );
}

export default FormularioCafe;