import Header from "../components/Header";
import Footer from "../components/Footer";
import SoporteForm from "../components/SoporteForm";
import PreguntasFrecuentes from "../components/PreguntasFrecuentes";

const Soporte = ({ language, changeLanguage }) => {

  const isEnglish = language === "EN";

  return (
    <>
      {/* =========================
          HEADER
      ========================== */}

      <Header
        language={language}
        changeLanguage={changeLanguage}
      />


      <main className="min-h-screen bg-white">


        {/* =========================
            FRANJA CORPORATIVA
        ========================== */}

        <section className="relative h-[210px] overflow-hidden md:h-[230px]">

          {/* Imagen de fondo */}

          <img
            src="https://penagos.com/wp-content/uploads/2023/08/Banner-WEB-Servicio-y-Post-venta.png"
            alt={
              isEnglish
                ? "Penagos Service and After-Sales"
                : "Servicio y Post Venta Penagos"
            }
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              object-[center_22%]
              md:object-[center_20%]
            "
          />


          {/* Overlay */}

          <div className="absolute inset-0 bg-black/35" />


          {/* Degradado */}

          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent" />


          {/* Contenido */}

          <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-6 md:px-8">

            <div className="max-w-xl text-white">


              {/* TÍTULO */}

              <h1 className="text-3xl font-bold leading-tight drop-shadow-md md:text-4xl">

                {isEnglish
                  ? "Service and After-Sales"
                  : "Servicio y Post Venta"}

              </h1>


              {/* Línea */}

              <div className="mt-3 h-1 w-14 rounded-full bg-blue-500" />


              {/* DESCRIPCIÓN */}

              <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/90 md:text-base">

                {isEnglish
                  ? "We are here to assist you with your requests, questions, and requirements related to our equipment."
                  : "Estamos para atender sus solicitudes, inquietudes y requerimientos relacionados con nuestros equipos."}

              </p>

            </div>

          </div>

        </section>


        {/* =========================
            ATENCIÓN AL CLIENTE
            + FORMULARIO
        ========================== */}

        <SoporteForm
          language={language}
        />


        {/* =========================
            PREGUNTAS FRECUENTES
        ========================== */}

        <PreguntasFrecuentes
          language={language}
        />


      </main>


      {/* =========================
          FOOTER
      ========================== */}

      <Footer 
       language={language}
      />

    </>
  );
};


export default Soporte;