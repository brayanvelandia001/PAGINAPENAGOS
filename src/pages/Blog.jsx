import Header from "../components/Header";
import Footer from "../components/Footer";
import Noticias from "../components/Noticias";


/* ============================================================
   BLOG / NOTICIAS
============================================================ */

function Blog({
  language,
  changeLanguage
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
            FRANJA CORPORATIVA
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
            src="https://penagos.com/wp-content/uploads/2020/04/Banner-Principal-Nuestras-Noticias-Penagos-.jpg"
            alt={
              isEnglish
                ? "Penagos Hermanos - News"
                : "Penagos Hermanos - Noticias"
            }
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              object-[center_50%]
              md:object-[center_50%]
            "
          />


          {/* ==================================================
              OVERLAY
          ================================================== */}

          <div
            className="
              absolute
              inset-0
              bg-black/35
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
              from-black/60
              via-black/25
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
                    ? "News"
                    : "Noticias"
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
                    ? "Discover the latest news, events and updates from Penagos Hermanos."
                    : "Conoce las últimas noticias, eventos y novedades de Penagos Hermanos."
                }

              </p>


            </div>

          </div>

        </section>


        {/* ====================================================
            NOTICIAS
        ==================================================== */}

        <Noticias
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


export default Blog;