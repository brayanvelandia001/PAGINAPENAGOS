import React, { useEffect, useState } from "react";

const SoporteForm = ({ language = "ES" }) => {
  const isEnglish = language === "EN";

  // ============================================================
  // ESTADOS
  // ============================================================

  const [enviado, setEnviado] = useState(false);
  const [recargarFormulario, setRecargarFormulario] = useState(0);

  // ============================================================
  // FORMULARIOS HUBSPOT
  // ============================================================

  const formId = isEnglish
    ? "69d754f2-07a2-4943-9a3c-0187b6eb18e4"
    : "3af3cb74-d050-4501-aebf-3c8e26fee359";

  // ============================================================
  // CARGAR HUBSPOT
  // ============================================================

  useEffect(() => {
    setEnviado(false);

    const crearFormulario = () => {
      const contenedor = document.getElementById("hubspot-soporte");

      if (!contenedor) {
        return;
      }

      // Limpiar cualquier formulario anterior
      contenedor.innerHTML = "";

      if (!window.hbspt || !window.hbspt.forms) {
        console.warn("HubSpot todavía no está disponible");
        return;
      }

      window.hbspt.forms.create({
        region: "na1",
        portalId: "8988956",
        formId: formId,
        target: "#hubspot-soporte",

        // ======================================================
        // FORMULARIO ENVIADO
        // ======================================================

        onFormSubmitted: function () {
          console.log(
            "Formulario de soporte enviado correctamente"
          );

          setEnviado(true);
        },
      });
    };

    // ============================================================
    // HUBSPOT YA ESTÁ CARGADO
    // ============================================================

    if (window.hbspt && window.hbspt.forms) {
      setTimeout(() => {
        crearFormulario();
      }, 50);

      return () => {
        const contenedor =
          document.getElementById("hubspot-soporte");

        if (contenedor) {
          contenedor.innerHTML = "";
        }
      };
    }

    // ============================================================
    // CARGAR SCRIPT DE HUBSPOT
    // ============================================================

    const script = document.createElement("script");

    script.src = "https://js.hsforms.net/forms/embed/v2.js";
    script.charset = "utf-8";
    script.type = "text/javascript";
    script.async = true;

    script.onload = () => {
      crearFormulario();
    };

    document.body.appendChild(script);

    // ============================================================
    // LIMPIEZA
    // ============================================================

    return () => {
      const contenedor =
        document.getElementById("hubspot-soporte");

      if (contenedor) {
        contenedor.innerHTML = "";
      }
    };
  }, [formId, recargarFormulario]);

  // ============================================================
  // TEXTOS
  // ============================================================

  const textos = {
    ES: {
      etiqueta: "Atención al cliente",

      titulo1: "¿Necesita",

      titulo2: "ayuda?",

      descripcion:
        "Complete el siguiente formulario y nuestro equipo de servicio y post venta podrá revisar su solicitud y ponerse en contacto con usted.",

      telefono: "Teléfono",

      correo: "Correo electrónico",

      importante: "Importante:",

      campos:
        "Los campos marcados con * son obligatorios.",

      detalle:
        "Procure proporcionar información detallada sobre su solicitud para facilitar nuestra atención.",

      formularioTitulo:
        "Consultas Post Venta",

      formularioDescripcion:
        "Diligencie sus datos y cuéntenos cómo podemos ayudarle.",

      exitoTitulo:
        "¡Solicitud enviada correctamente!",

      exitoDescripcion:
        "Hemos recibido su solicitud. Nuestro equipo de servicio y post venta revisará la información y se pondrá en contacto con usted.",

      nuevoFormulario:
        "Enviar otra solicitud",
    },

    EN: {
      etiqueta: "Customer Service",

      titulo1: "Do you",

      titulo2: "need help?",

      descripcion:
        "Complete the following form and our service and after-sales team will review your request and contact you.",

      telefono: "Phone",

      correo: "Email",

      importante: "Important:",

      campos:
        "Fields marked with * are required.",

      detalle:
        "Please provide detailed information about your request to help us assist you.",

      formularioTitulo:
        "After-Sales Support",

      formularioDescripcion:
        "Enter your information and tell us how we can help you.",

      exitoTitulo:
        "Request sent successfully!",

      exitoDescripcion:
        "We have received your request. Our service and after-sales team will review the information and contact you.",

      nuevoFormulario:
        "Send another request",
    },
  };

  const t = textos[isEnglish ? "EN" : "ES"];

  // ============================================================
  // NUEVA SOLICITUD
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
    <section className="w-full bg-white py-14">
      <div className="mx-auto max-w-6xl px-6">

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.5fr]">

          {/* =====================================================
              INFORMACIÓN
          ===================================================== */}

          <div className="flex flex-col justify-start">

            <span
              className="mb-3 text-sm font-semibold uppercase tracking-wider"
              style={{ color: "#00AEEF" }}
            >
              {t.etiqueta}
            </span>

            <h2 className="text-3xl font-bold leading-tight text-gray-800">

              {t.titulo1}

              <br />

              <span style={{ color: "#00AEEF" }}>
                {t.titulo2}
              </span>

            </h2>

            <p className="mt-5 text-sm leading-7 text-gray-500">
              {t.descripcion}
            </p>

            {/* =================================================
                TELÉFONO
            ================================================= */}

            <div className="mt-8 flex items-start gap-4">

              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                style={{
                  backgroundColor: "#E6F7FD",
                  color: "#00AEEF",
                }}
              >
                ☎
              </div>

              <div>

                <p className="text-xs font-semibold uppercase text-gray-400">
                  {t.telefono}
                </p>

                <a
                  href="tel:+573102987026"
                  className="text-sm font-medium text-gray-700 transition"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#00AEEF";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "";
                  }}
                >
                  +57 310 298 7026
                </a>

              </div>

            </div>

            {/* =================================================
                CORREO
            ================================================= */}

            <div className="mt-5 flex items-start gap-4">

              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                style={{
                  backgroundColor: "#E6F7FD",
                  color: "#00AEEF",
                }}
              >
                ✉
              </div>

              <div>

                <p className="text-xs font-semibold uppercase text-gray-400">
                  {t.correo}
                </p>

                <a
                  href="mailto:servicioalcliente@penagos.com"
                  className="text-sm font-medium text-gray-700 transition"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#00AEEF";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "";
                  }}
                >
                  servicioalcliente@penagos.com
                </a>

              </div>

            </div>

            {/* =================================================
                AVISO
            ================================================= */}

            <div
              className="mt-8 rounded-xl p-5"
              style={{
                border: "1px solid #B8E9F8",
                backgroundColor: "#F0FBFE",
              }}
            >

              <p
                className="text-xs leading-6"
                style={{ color: "#007FA8" }}
              >

                <strong>
                  {t.importante}
                </strong>{" "}

                {t.campos}

                <br />

                {t.detalle}

              </p>

            </div>

          </div>

          {/* =====================================================
              FORMULARIO / ÉXITO
          ===================================================== */}

          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg md:p-8">

            {!enviado ? (

              <>

                {/* =================================================
                    CABECERA DEL FORMULARIO
                ================================================= */}

                <div className="mb-7">

                  {/* =================================================
                      LOGO PENAGOS
                  ================================================= */}

                  <img
                    src="https://penagos.com/wp-content/uploads/2020/03/Logotipo-Penagos-Hermanos-PNG.png"
                    alt="Penagos Hermanos"
                    className="mb-5 h-auto w-40 object-contain"
                  />

                  <h2 className="text-2xl font-bold text-gray-800">
                    {t.formularioTitulo}
                  </h2>

                  <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    {t.formularioDescripcion}
                  </p>

                </div>

                {/* =================================================
                    HUBSPOT
                ================================================= */}

                <div
                  id="hubspot-soporte"
                  className="w-full"
                />

              </>

            ) : (

              /* ==================================================
                 PANTALLA DE ÉXITO
              ================================================== */

              <div className="flex min-h-[500px] flex-col items-center justify-center text-center">

                {/* =================================================
                    LOGO
                ================================================= */}

                <img
                  src="https://penagos.com/wp-content/uploads/2020/03/Logotipo-Penagos-Hermanos-PNG.png"
                  alt="Penagos Hermanos"
                  className="mb-8 h-auto w-48 object-contain"
                />

                {/* =================================================
                    CHECK
                ================================================= */}

                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">

                  <span className="text-5xl font-bold text-green-600">
                    ✓
                  </span>

                </div>

                {/* =================================================
                    TÍTULO
                ================================================= */}

                <h2 className="text-2xl font-bold text-gray-800">
                  {t.exitoTitulo}
                </h2>

                {/* =================================================
                    DESCRIPCIÓN
                ================================================= */}

                <p className="mt-4 max-w-md text-sm leading-7 text-gray-500">
                  {t.exitoDescripcion}
                </p>

                {/* =================================================
                    BOTÓN
                ================================================= */}

                <button
                  type="button"
                  onClick={nuevoFormulario}
                  className="mt-8 rounded-lg px-6 py-3 text-sm font-semibold text-white transition"
                  style={{
                    backgroundColor: "#00AEEF",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#008FC4";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#00AEEF";
                  }}
                >
                  {t.nuevoFormulario}
                </button>

              </div>

            )}

          </div>

        </div>

      </div>
    </section>
  );
};

export default SoporteForm;