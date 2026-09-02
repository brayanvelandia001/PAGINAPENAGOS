import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import CentralesHero from "../components/CentralesHero";
import CentralesEtapas from "../components/CentralesEtapas";
import Centrales from "../components/Centrales";
import FormularioCafe from "../components/FormularioCafe";

// ============================================================
// PÁGINA
// CENTRALES DE PROCESAMIENTO DE CAFÉ
// ============================================================

function CentralesProcesamientoCafe({
  language,
  changeLanguage,
}) {
  const isEnglish = language === "EN";

  return (
    <div className="min-h-screen bg-white">

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
            HERO
        ==================================================== */}

        <CentralesHero
          language={language}
        />

        <CentralesEtapas
          language={language}
        />

        
        <Centrales
          language={language}
        />

        <FormularioCafe
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

export default CentralesProcesamientoCafe;
