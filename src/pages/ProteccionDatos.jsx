import {
  FileText,
  ShieldCheck,
  ClipboardList,
  Mail,
  ArrowRight,
  Home
} from "lucide-react";

import {
  Link
} from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";


function ProteccionDatos({
  language,
  changeLanguage
}) {

  const isEnglish = language === "EN";


  /* ============================================================
     TEXTOS
  ============================================================ */

  const textos = {

    es: {

      title:
        "Protección de Datos Personales",

      description:
        "Información sobre el tratamiento y protección de datos personales en Penagos Hermanos.",

      intro:
        "Penagos Hermanos garantiza de forma integral la protección y buen uso de sus datos personales, en cumplimiento con lo dispuesto en la Ley Estatutaria 1581 de 2012 y sus normas reglamentarias.",

      intro2:
        "Para tales fines, ponemos a disposición los siguientes documentos que podrán consultar para conocer la forma de ejercer sus derechos: actualizar, rectificar, suprimir o revocar la autorización concedida de sus datos.",

      aviso:
        "Aviso de Privacidad",

      politica:
        "Política Tratamiento de Datos Personales",

      formulario:
        "Formulario de consulta, reclamo o revocatoria de la autorización para Tratamiento de Datos Personales",

      consultar:
        "Consultar documento",

      dudas:
        "Si tiene dudas o comentarios, escríbanos a",

      correo:
        "protecciondatos@penagos.com",

      volver:
        "Volver al inicio"

    },


    en: {

      title:
        "Personal Data Protection",

      description:
        "Information about the processing and protection of personal data at Penagos Hermanos.",

      intro:
        "Penagos Hermanos guarantees the comprehensive protection and proper use of personal data, in compliance with Statutory Law 1581 of 2012 and its regulatory provisions.",

      intro2:
        "For these purposes, we make the following documents available for consultation so that you can learn how to exercise your rights: update, correct, delete or revoke the authorization granted for the use of your data.",

      aviso:
        "Privacy Notice",

      politica:
        "Personal Data Processing Policy",

      formulario:
        "Personal Data Processing Inquiry, Complaint or Authorization Revocation Form",

      consultar:
        "View document",

      dudas:
        "If you have questions or comments, write to us at",

      correo:
        "protecciondatos@penagos.com",

      volver:
        "Back to home"

    }

  };


  const t = isEnglish
    ? textos.en
    : textos.es;


  /* ============================================================
     DOCUMENTOS
  ============================================================ */

  const documentos = [

    {
      icon: ShieldCheck,
      title: t.aviso,
      link:
        "http://penagos.com/wp-content/uploads/2021/05/Aviso-de-Privacidad.pdf"
    },

    {
      icon: FileText,
      title: t.politica,
      link:
        "http://penagos.com/wp-content/uploads/2021/05/Politica-Tratamiento-de-Datos-Personales.pdf"
    },

    {
      icon: ClipboardList,
      title: t.formulario,
      link:
        "https://penagos.com/formulario-de-consulta-reclamo-o-revocatoria/"
    }

  ];


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

      <main
        className="
          bg-white
          text-slate-800
        "
      >


        {/* ====================================================
            BANNER
        ==================================================== */}

        <section
          className="
            relative
            overflow-hidden
            bg-[#07133d]
          "
        >

          <img
            src="http://penagos.com/wp-content/uploads/2021/06/429-scaled.jpg"
            alt={
              isEnglish
                ? "Personal Data Protection"
                : "Protección de Datos Personales"
            }
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
            "
          />


          {/* CAPA OSCURA */}

          <div
            className="
              absolute
              inset-0
              bg-[#07133d]/75
            "
          />


          {/* CONTENIDO */}

          <div
            className="
              relative
              mx-auto
              flex
              min-h-[320px]
              max-w-[1380px]
              items-center
              px-6
              py-16
              lg:px-10
            "
          >

            <div
              className="
                max-w-3xl
              "
            >

              {/* TITULO */}

              <h1
                className="
                  text-4xl
                  font-extrabold
                  leading-tight
                  text-white
                  md:text-5xl
                "
              >

                {t.title}

              </h1>


              {/* DESCRIPCION */}

              <p
                className="
                  mt-5
                  max-w-2xl
                  text-base
                  leading-7
                  text-white/80
                  md:text-lg
                "
              >

                {t.description}

              </p>


              {/* BOTON VOLVER */}

              <Link
                to="/"

                className="
                  mt-8
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-white
                  px-6
                  py-3
                  text-sm
                  font-bold
                  text-[#07133d]
                  transition
                  duration-300
                  hover:bg-[#302b80]
                  hover:text-white
                "
              >

                <Home
                  size={17}
                />

                {t.volver}

              </Link>

            </div>

          </div>

        </section>


        {/* ====================================================
            CONTENIDO
        ==================================================== */}

        <section
          className="
            bg-white
            py-16
            md:py-20
          "
        >

          <div
            className="
              mx-auto
              max-w-[1100px]
              px-6
            "
          >


            {/* ==================================================
                TEXTO
            ================================================== */}

            <div
              className="
                mx-auto
                max-w-4xl
              "
            >

              <div
                className="
                  mb-6
                  h-1
                  w-14
                  rounded-full
                  bg-[#302b80]
                "
              />


              <p
                className="
                  text-base
                  leading-8
                  text-slate-600
                  md:text-lg
                "
              >

                {t.intro}

              </p>


              <p
                className="
                  mt-5
                  text-base
                  leading-8
                  text-slate-600
                  md:text-lg
                "
              >

                {t.intro2}

              </p>

            </div>


            {/* ==================================================
                DOCUMENTOS
            ================================================== */}

            <div
              className="
                mt-12
                grid
                gap-5
              "
            >

              {documentos.map(
                (
                  documento,
                  index
                ) => {

                  const Icon =
                    documento.icon;


                  return (

                    <a
                      key={index}
                      href={documento.link}
                      target="_blank"
                      rel="noopener noreferrer"

                      className="
                        group
                        flex
                        items-center
                        gap-5
                        rounded-2xl
                        border
                        border-slate-200
                        bg-slate-50
                        p-5
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-[#302b80]/30
                        hover:bg-white
                        hover:shadow-lg
                      "
                    >

                      {/* ICONO */}

                      <div
                        className="
                          flex
                          h-12
                          w-12
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          bg-[#302b80]/10
                          text-[#302b80]
                          transition
                          duration-300
                          group-hover:bg-[#302b80]
                          group-hover:text-white
                        "
                      >

                        <Icon
                          size={23}
                        />

                      </div>


                      {/* TEXTO */}

                      <div
                        className="
                          min-w-0
                          flex-1
                        "
                      >

                        <h2
                          className="
                            text-base
                            font-bold
                            leading-6
                            text-[#07133d]
                            md:text-lg
                          "
                        >

                          {documento.title}

                        </h2>


                        <p
                          className="
                            mt-1
                            text-sm
                            font-medium
                            text-[#302b80]
                          "
                        >

                          {t.consultar}

                        </p>

                      </div>


                      {/* FLECHA */}

                      <ArrowRight
                        size={20}
                        className="
                          shrink-0
                          text-[#302b80]
                          transition
                          duration-300
                          group-hover:translate-x-1
                        "
                      />

                    </a>

                  );

                }
              )}

            </div>


            {/* ==================================================
                CONTACTO
            ================================================== */}

            <div
              className="
                mt-14
                rounded-3xl
                bg-[#07133d]
                px-7
                py-9
                text-center
                md:px-12
              "
            >

              <Mail
                size={30}
                className="
                  mx-auto
                  text-white
                "
              />


              <p
                className="
                  mt-5
                  text-base
                  text-white/75
                "
              >

                {t.dudas}

              </p>


              <a
                href="mailto:protecciondatos@penagos.com"

                className="
                  mt-2
                  inline-block
                  text-lg
                  font-extrabold
                  text-white
                  transition
                  hover:text-white/70
                "
              >

                {t.correo}

              </a>

            </div>

          </div>

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


export default ProteccionDatos;