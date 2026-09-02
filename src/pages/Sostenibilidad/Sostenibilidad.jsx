import React, { useEffect, useState } from "react";

import HeaderSostenibilidad from "../../components/sostenibilidad/HeaderSostenibilidad";
import HeroSostenibilidad from "../../components/sostenibilidad/HeroSostenibilidad";
import FooterSostenibilidad from "../../components/sostenibilidad/FooterSostenibilidad";
import ImagenesSostenibilidad from "../../components/sostenibilidad/Sostenibilidad";
import SenalesSostenibilidad from "../../components/sostenibilidad/SeñalesSostenibilidad";

/* ============================================================
   PANTALLA DE CARGA
============================================================ */

function PantallaCargaSostenibilidad() {
  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        bg-white
      "
    >
      <div className="text-center">

        <div
          className="
            mx-auto
            mb-5
            h-11
            w-11
            animate-spin
            rounded-full
            border-[3px]
            border-gray-200
            border-t-[#f36f21]
          "
        />

        <p
          className="
            text-[11px]
            font-semibold
            uppercase
            tracking-[0.28em]
            text-gray-500
          "
        >
          Penagos
        </p>

      </div>
    </div>
  );
}

/* ============================================================
   PÁGINA SOSTENIBILIDAD
============================================================ */

function Sostenibilidad({
  language = "ES",
  changeLanguage = () => {},
}) {

  const [cargando, setCargando] = useState(true);

  /* ==========================================================
     LOADING
  ========================================================== */

  useEffect(() => {

    const timer = setTimeout(() => {
      setCargando(false);
    }, 450);

    return () => {
      clearTimeout(timer);
    };

  }, []);

  /* ==========================================================
     RENDER
  ========================================================== */

  return (
    <div
      className="
        min-h-screen
        bg-white
      "
    >

      {/* ======================================================
          LOADING
      ====================================================== */}

      {cargando && (
        <PantallaCargaSostenibilidad />
      )}

      {/* ======================================================
          HEADER
      ====================================================== */}

      <HeaderSostenibilidad
        language={language}
        changeLanguage={changeLanguage}
      />

      {/* ======================================================
          HERO
      ====================================================== */}

      <main>
        <HeroSostenibilidad
          language={language}
        />
      </main>

       <main>
        <ImagenesSostenibilidad
          language={language}
        />
      </main>

      <main>
        <SenalesSostenibilidad
          language={language}
        />
      </main>

      {/* ======================================================
          FOOTER
      ====================================================== */}

      <FooterSostenibilidad
        language={language}
      />

    </div>
  );
}

export default Sostenibilidad;

