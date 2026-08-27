import { useEffect, useState } from "react";
import {
  Phone,
  Mail,
  MessageCircle,
  Headphones,
  CheckCircle
} from "lucide-react";


/* ============================================================
   FORMULARIO CONTACTO
============================================================ */

function FormularioContacto({
  language
}) {

  const isEnglish = language === "EN";


  /* ==========================================================
     ESTADOS
  ========================================================== */

  const [enviado, setEnviado] = useState(false);

  const [recargarFormulario, setRecargarFormulario] =
    useState(0);


  /* ==========================================================
     FORMULARIO SEGÚN IDIOMA
  ========================================================== */

  const formId = isEnglish
    ? "cc1ff5a7-f6e2-4274-8a7a-80c72a12355e"
    : "c3c1dbd0-8641-4be6-a22d-9ceec0ba1007";


  /* ==========================================================
     CARGAR HUBSPOT
  ========================================================== */

  useEffect(() => {

    setEnviado(false);


    const cargarFormulario = () => {

      const contenedor =
        document.getElementById("hubspot-form");


      if (!contenedor) {
        return;
      }


      /* ======================================================
         LIMPIAR FORMULARIO ANTERIOR
      ====================================================== */

      contenedor.innerHTML = "";


      /* ======================================================
         VERIFICAR HUBSPOT
      ====================================================== */

      if (
        !window.hbspt ||
        !window.hbspt.forms
      ) {

        console.warn(
          "HubSpot todavía no está disponible"
        );

        return;

      }


      /* ======================================================
         CREAR FORMULARIO
      ====================================================== */

      window.hbspt.forms.create({

        region: "na1",

        portalId: "8988956",

        formId: formId,

        target: "#hubspot-form",


        /* ====================================================
           FORMULARIO ENVIADO
        ==================================================== */

        onFormSubmitted: function () {

          console.log(
            "Formulario de contacto enviado correctamente"
          );

          setEnviado(true);

        }

      });

    };


    /* ========================================================
       HUBSPOT YA ESTÁ CARGADO
    ======================================================== */

    if (
      window.hbspt &&
      window.hbspt.forms
    ) {

      setTimeout(() => {

        cargarFormulario();

      }, 50);

    }


    /* ========================================================
       CARGAR SCRIPT HUBSPOT
    ======================================================== */

    else {

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


    /* ========================================================
       LIMPIEZA
    ======================================================== */

    return () => {

      const contenedor =
        document.getElementById("hubspot-form");


      if (contenedor) {

        contenedor.innerHTML = "";

      }

    };


  }, [formId, recargarFormulario]);


  /* ==========================================================
     NUEVO FORMULARIO
  ========================================================== */

  const nuevoFormulario = () => {

    setEnviado(false);

    setRecargarFormulario(
      actual => actual + 1
    );

  };


  /* ==========================================================
     RENDER
  ========================================================== */

  return (

    <section
      className="
        w-full
        bg-slate-50
        py-12
        md:py-16
      "
    >

      <div
        className="
          mx-auto
          max-w-6xl
          px-6
          md:px-8
        "
      >

        {/* ==================================================
            GRID PRINCIPAL
        ================================================== */}

        <div
          className="
            grid
            grid-cols-1
            items-start
            gap-8
            lg:grid-cols-[0.85fr_1.15fr]
          "
        >


          {/* ==================================================
              COLUMNA INFORMACIÓN
          ================================================== */}

          <div
            className="
              relative
              overflow-hidden
              rounded-2xl
              bg-[#302b80]
              p-7
              text-white
              shadow-xl
              md:p-9
            "
          >

            {/* =================================================
                DECORACIÓN
            ================================================= */}

            <div
              className="
                absolute
                -right-16
                -top-16
                h-40
                w-40
                rounded-full
                bg-white/10
              "
            />

            <div
              className="
                absolute
                -bottom-20
                -left-20
                h-48
                w-48
                rounded-full
                bg-white/5
              "
            />


            <div className="relative z-10">


              {/* =================================================
                  ICONO
              ================================================= */}

              <div
                className="
                  mb-6
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-xl
                  bg-white/15
                  ring-1
                  ring-white/20
                "
              >

                <Headphones
                  size={28}
                  strokeWidth={1.8}
                />

              </div>


              {/* =================================================
                  TÍTULO
              ================================================= */}

              <h2
                className="
                  text-3xl
                  font-bold
                  leading-tight
                  md:text-4xl
                "
              >

                {
                  isEnglish
                    ? "We are here to help you"
                    : "Estamos para ayudarte"
                }

              </h2>


              {/* =================================================
                  TEXTO
              ================================================= */}

              <p
                className="
                  mt-4
                  max-w-md
                  text-sm
                  leading-relaxed
                  text-white/80
                  md:text-base
                "
              >

                {
                  isEnglish
                    ? "Tell us what you need and our team will be happy to assist you."
                    : "Cuéntanos qué necesitas y nuestro equipo estará listo para ayudarte."
                }

              </p>


              {/* =================================================
                  LÍNEA
              ================================================= */}

              <div
                className="
                  my-7
                  h-px
                  w-full
                  bg-white/20
                "
              />


              {/* =================================================
                  INFORMACIÓN
              ================================================= */}

              <div className="space-y-5">


                {/* =================================================
                    VENTAS
                ================================================= */}

                <div className="flex items-start gap-4">

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      bg-white/10
                    "
                  >

                    <Phone size={19} />

                  </div>


                  <div>

                    <p
                      className="
                        text-xs
                        font-semibold
                        uppercase
                        tracking-wide
                        text-white/60
                      "
                    >

                      {
                        isEnglish
                          ? "Sales"
                          : "Línea de ventas"
                      }

                    </p>


                    <a
                      href="tel:+573175151166"
                      className="
                        mt-1
                        block
                        text-sm
                        text-white
                        transition
                        hover:text-cyan-300
                      "
                    >

                      +57 317 515 11 66

                    </a>

                  </div>

                </div>


                {/* =================================================
                    PROYECTOS CAFÉ
                ================================================= */}

                <div className="flex items-start gap-4">

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      bg-white/10
                    "
                  >

                    <Phone size={19} />

                  </div>


                  <div>

                    <p
                      className="
                        text-xs
                        font-semibold
                        uppercase
                        tracking-wide
                        text-white/60
                      "
                    >

                      {
                        isEnglish
                          ? "Coffee Processing Projects"
                          : "Proyectos de café"
                      }

                    </p>


                    <a
                      href="tel:+573168304065"
                      className="
                        mt-1
                        block
                        text-sm
                        text-white
                        transition
                        hover:text-cyan-300
                      "
                    >

                      +57 316 830 40 65

                    </a>

                  </div>

                </div>


                {/* =================================================
                    ADMINISTRATIVA
                ================================================= */}

                <div className="flex items-start gap-4">

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      bg-white/10
                    "
                  >

                    <Phone size={19} />

                  </div>


                  <div>

                    <p
                      className="
                        text-xs
                        font-semibold
                        uppercase
                        tracking-wide
                        text-white/60
                      "
                    >

                      {
                        isEnglish
                          ? "Administrative"
                          : "Áreas administrativas"
                      }

                    </p>


                    <a
                      href="tel:+573174416768"
                      className="
                        mt-1
                        block
                        text-sm
                        text-white
                        transition
                        hover:text-cyan-300
                      "
                    >

                      +57 317 441 67 68

                    </a>

                  </div>

                </div>


                {/* =================================================
                    EMAIL
                ================================================= */}

                <div className="flex items-start gap-4">

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      bg-white/10
                    "
                  >

                    <Mail size={19} />

                  </div>


                  <div>

                    <p
                      className="
                        text-xs
                        font-semibold
                        uppercase
                        tracking-wide
                        text-white/60
                      "
                    >
                      Email
                    </p>


                    <a
                      href="mailto:sales@penagos.com"
                      className="
                        mt-1
                        block
                        text-sm
                        text-white
                        transition
                        hover:text-cyan-300
                      "
                    >

                      sales@penagos.com

                    </a>

                  </div>

                </div>


              </div>


              {/* =================================================
                  MENSAJE FINAL
              ================================================= */}

              <div
                className="
                  mt-8
                  rounded-xl
                  border
                  border-white/10
                  bg-white/10
                  p-4
                "
              >

                <p
                  className="
                    text-sm
                    leading-relaxed
                    text-white/80
                  "
                >

                  {
                    isEnglish
                      ? "Our team will review your request and contact you as soon as possible."
                      : "Nuestro equipo revisará tu solicitud y se pondrá en contacto contigo lo antes posible."
                  }

                </p>

              </div>


            </div>

          </div>


          {/* ==================================================
              COLUMNA FORMULARIO
          ================================================== */}

          <div
            className="
              overflow-hidden
              rounded-2xl
              bg-white
              shadow-xl
              ring-1
              ring-slate-200
            "
          >


            {/* =================================================
                FORMULARIO NORMAL
            ================================================= */}

            {!enviado ? (

              <>

                {/* =============================================
                    CABECERA
                ============================================= */}

                <div
                  className="
                    border-b
                    border-slate-100
                    px-6
                    py-6
                    md:px-8
                  "
                >

                  {/* LOGO PENAGOS */}

                  <img
                    src="https://penagos.com/wp-content/uploads/2020/03/Logotipo-Penagos-Hermanos-PNG.png"
                    alt="Penagos Hermanos"
                    className="
                      mb-5
                      h-auto
                      w-40
                      object-contain
                    "
                  />


                  <h2
                    className="
                      text-2xl
                      font-bold
                      text-[#302b80]
                    "
                  >

                    {
                      isEnglish
                        ? "Contact Us"
                        : "¡Escríbanos!"
                    }

                  </h2>


                  <p
                    className="
                      mt-2
                      text-sm
                      leading-relaxed
                      text-slate-500
                    "
                  >

                    {
                      isEnglish
                        ? "Complete the form and our team will contact you."
                        : "Completa el formulario y nuestro equipo se pondrá en contacto contigo."
                    }

                  </p>

                </div>


                {/* =============================================
                    HUBSPOT
                ============================================= */}

                <div
                  className="
                    px-6
                    py-7
                    md:px-8
                    md:py-8
                  "
                >

                  <div
                    id="hubspot-form"
                    className="w-full"
                  />

                </div>

              </>

            ) : (


              /* =================================================
                 PANTALLA DE ÉXITO
              ================================================= */

              <div
                className="
                  flex
                  min-h-[550px]
                  flex-col
                  items-center
                  justify-center
                  px-6
                  py-12
                  text-center
                  md:px-10
                "
              >

                {/* =============================================
                    LOGO
                ============================================= */}

                <img
                  src="https://penagos.com/wp-content/uploads/2020/03/Logotipo-Penagos-Hermanos-PNG.png"
                  alt="Penagos Hermanos"
                  className="
                    mb-8
                    h-auto
                    w-48
                    object-contain
                  "
                />


                {/* =============================================
                    CHECK
                ============================================= */}

                <div
                  className="
                    mb-6
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-full
                    bg-green-100
                  "
                >

                  <CheckCircle
                    size={52}
                    strokeWidth={1.8}
                    className="text-green-600"
                  />

                </div>


                {/* =============================================
                    TÍTULO
                ============================================= */}

                <h2
                  className="
                    text-2xl
                    font-bold
                    text-gray-800
                    md:text-3xl
                  "
                >

                  {
                    isEnglish
                      ? "Message sent successfully!"
                      : "¡Mensaje enviado correctamente!"
                  }

                </h2>


                {/* =============================================
                    DESCRIPCIÓN
                ============================================= */}

                <p
                  className="
                    mt-4
                    max-w-md
                    text-sm
                    leading-7
                    text-gray-500
                  "
                >

                  {
                    isEnglish
                      ? "Thank you for contacting Penagos Hermanos. Our team will review your request and contact you as soon as possible."
                      : "Gracias por contactar a Penagos Hermanos. Nuestro equipo revisará tu solicitud y se pondrá en contacto contigo lo antes posible."
                  }

                </p>


                {/* =============================================
                    BOTÓN
                ============================================= */}

                <button
                  type="button"
                  onClick={nuevoFormulario}
                  className="
                    mt-8
                    rounded-lg
                    bg-[#00AEEF]
                    px-6
                    py-3
                    text-sm
                    font-semibold
                    text-white
                    transition
                    hover:bg-[#008FC4]
                    hover:shadow-md
                  "
                >

                  {
                    isEnglish
                      ? "Send another message"
                      : "Enviar otro mensaje"
                  }

                </button>


              </div>

            )}

          </div>


        </div>

      </div>

    </section>

  );

}


export default FormularioContacto;