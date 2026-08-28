import Header from "../components/Header";
import Footer from "../components/Footer";

import AgricultoresMundo from "../components/AgricultoresMundo";
import CarasMundo from "../components/RostrosMundo";
import Agua from "../components/TestimoniosAgua";


function AgricultoresPenagos({
  language,
  changeLanguage
}) {

  return (

    <div className="min-h-screen bg-white">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <Header
        language={language}
        changeLanguage={changeLanguage}
      />


      {/* =====================================================
          CONTENIDO
      ===================================================== */}

      <main>

        {/* Sección: Penagos alrededor del mundo */}

        <AgricultoresMundo
          language={language}
        />


        {/* =================================================
            GALERÍA — LAS CARAS DE NUESTRA GENTE
        ================================================= */}

        <CarasMundo
          language={language}
        />

        
        {/* =================================================
            VIDEOS AGUA 
        ================================================= */}

        <Agua
          language={language}
        />

      </main>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer
        language={language}
      />

    </div>

  );
}


export default AgricultoresPenagos;