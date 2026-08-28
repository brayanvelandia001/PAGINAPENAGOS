import Header from "../components/Header";
import Footer from "../components/Footer";
import FormularioContacto from "../components/FormularioContacto";
import MapaDistribuidores from "../components/MapaDistribuidores";
import InfoContacto from "../components/InfoContacto";

/* ============================================================
   CONTACTANOS
============================================================ */

function Contactanos({
  language,
  changeLanguage,
}) {

  const isEnglish = language === "EN";

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
            BANNER CONTACTANOS
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
            src="https://penagos.com/wp-content/uploads/2023/08/Banner-Contactenos-2023.jpg"
            alt={
              isEnglish
                ? "Penagos Hermanos - Contact Us"
                : "Penagos Hermanos - Contáctenos"
            }
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              object-center
            "
          />


          {/* ==================================================
              OVERLAY
          ================================================== */}

          <div
            className="
              absolute
              inset-0
              bg-black/25
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
              from-black/50
              via-black/20
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
                    ? "Contact Us"
                    : "Contáctenos"
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
                    ? "We are ready to provide you with the best service."
                    : "Estamos atentos a ofrecerte el mejor servicio."
                }
              </p>

            </div>

          </div>

        </section>


        {/* ====================================================
            FORMULARIO DE CONTACTO
        ==================================================== */}

        <FormularioContacto
          language={language}
        />


        {/* ====================================================
            MAPA DE DISTRIBUIDORES
        ==================================================== */}

        <MapaDistribuidores
          language={language}
        />


        {/* ====================================================
            INFORMACIÓN COMERCIAL - COLOMBIA
        ==================================================== */}

        <InfoContacto
          language={language}
        />

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

export default Contactanos;

