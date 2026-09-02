import React, { useState } from "react";
import {
  X,
  CheckCircle2,
  Play,
} from "lucide-react";

// ============================================================
// MODAL - FERMENTACIÓN Y LAVADO
// ============================================================

function ModalLavado({
  cerrar,
  language = "ES",
}) {
  const [equipoActivo, setEquipoActivo] = useState(0);

  const isEnglish = language === "EN";

  // ============================================================
  // EQUIPOS
  // ============================================================

  const equipos = [
    {
      nombre: isEnglish
        ? "EcoWasher"
        : "EcoWasher",

      imagen:
        "https://penagos.com/wp-content/uploads/2021/02/Ecowasher-9000-Penagos-lavador-de-cafe-fermentados-Penagos-768x768.png",

      descripcion: isEnglish
        ? "Equipment designed for washing fermented coffee, minimizing water and power consumption compared to traditional systems."
        : "Equipo diseñado para el lavado de café fermentado, minimizando el consumo de agua y potencia comparado con sistemas tradicionales.",

      beneficios: isEnglish
        ? [
            "High washing capacity.",
            "Minimal water and power consumption compared to traditional systems.",
            "Optimizes washing times and reduces labor.",
            "Its horizontal design prevents mechanical damage to the coffee.",
            "Includes water injector technology that optimizes the washing process.",
          ]
        : [
            "Posee alta capacidad de lavado.",
            "Mínimo consumo de agua y potencia comparado con sistemas tradicionales.",
            "Optimiza los tiempos de lavado y disminuye la mano de obra.",
            "Su diseño horizontal evita daños mecánicos en el café.",
            "Incluye tecnología de inyectores de agua que optimizan el lavado.",
          ],

      // SOLO ECOWASHER TIENE VIDEO
      video:
        "https://www.youtube.com/embed/OetzCqfYj1k",
    },

    {
      nombre: isEnglish
        ? "Fermentation tanks"
        : "Tanques de fermentación",

      imagen:
        "https://penagos.com/wp-content/uploads/2021/02/tanque-1024x1024.png",

      descripcion: isEnglish
        ? "Tanks designed for controlled coffee fermentation processes with monitoring according to the producer's needs."
        : "Tanques fabricados para realizar procesos de fermentación controlada del café con monitoreo según las necesidades del productor.",

      beneficios: isEnglish
        ? [
            "Tanks manufactured in stainless steel.",
            "Designed for different types of fermentation.",
            "Allow monitoring of process conditions.",
            "Greater control over coffee quality.",
          ]
        : [
            "Tanques fabricados en acero inoxidable.",
            "Diseñados para diferentes tipos de fermentación.",
            "Permiten monitorear las condiciones del proceso.",
            "Mayor control sobre la calidad del café.",
          ],

      // NO SE AGREGA VIDEO AQUÍ
    },
  ];

  const equipo = equipos[equipoActivo];

  // ============================================================
  // RENDER
  // ============================================================

  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]
        bg-black/70
        backdrop-blur-sm
        flex
        items-center
        justify-center
        p-4
      "
      onClick={cerrar}
    >
      <div
        className="
          relative
          bg-white
          rounded-[35px]
          max-w-[1150px]
          w-full
          max-h-[92vh]
          overflow-y-auto
          shadow-2xl
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* ==================================================
            BOTÓN CERRAR
        ================================================== */}

        <button
          onClick={cerrar}
          type="button"
          className="
            absolute
            right-6
            top-6
            z-30

            bg-white
            text-[#171843]

            rounded-full
            p-3

            shadow-xl

            hover:bg-[#171843]
            hover:text-white

            transition
            duration-300

            cursor-pointer
          "
        >
          <X size={20} />
        </button>

        {/* ==================================================
            CONTENIDO
        ================================================== */}

        <div className="grid lg:grid-cols-2">
          {/* ==================================================
              IMAGEN
          ================================================== */}

          <div
            className="
              bg-gradient-to-br
              from-[#f5f7f9]
              to-white

              p-10

              flex
              items-center
              justify-center

              overflow-hidden
            "
          >
            <img
              key={equipo.imagen}
              src={equipo.imagen}
              alt={equipo.nombre}
              className="
                w-full
                h-[430px]

                object-contain

                transition-all
                duration-500

                hover:scale-110
              "
            />
          </div>

          {/* ==================================================
              INFORMACIÓN
          ================================================== */}

          <div className="p-8">
            {/* ==================================================
                TÍTULO
            ================================================== */}

            <h2
              className="
                text-3xl
                font-black
                text-[#171843]
              "
            >
              {isEnglish
                ? "Fermentation and Washing"
                : "Fermentación y Lavado"}
            </h2>

            {/* ==================================================
                DESCRIPCIÓN GENERAL
            ================================================== */}

            <p
              className="
                mt-5
                text-gray-600
                leading-relaxed
              "
            >
              {isEnglish
                ? "We have the tools you need to ferment your coffee and mechanical washing technology that protects the bean with the lowest water consumption."
                : "Tenemos la herramienta que necesita para fermentar su café y la tecnología de lavado mecánico que protege el grano con los más bajos consumos de agua."}
            </p>

            {/* ==================================================
                TABS
            ================================================== */}

            <div
              className="
                mt-8
                flex
                flex-wrap
                gap-3
              "
            >
              {equipos.map((item, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setEquipoActivo(index)}
                  className={`
                    px-5
                    py-3
                    rounded-full

                    font-bold
                    text-sm

                    transition
                    duration-300

                    cursor-pointer

                    ${
                      equipoActivo === index
                        ? `
                          bg-[#171843]
                          text-white
                          shadow-lg
                          scale-105
                        `
                        : `
                          bg-gray-100
                          text-gray-600

                          hover:bg-[#00a4e4]
                          hover:text-white
                        `
                    }
                  `}
                >
                  {item.nombre}
                </button>
              ))}
            </div>

            {/* ==================================================
                EQUIPO ACTUAL
            ================================================== */}

            <div
              className="
                mt-8
                border-t
                pt-6
              "
            >
              <h3
                className="
                  text-2xl
                  font-black
                  text-[#171843]
                "
              >
                {equipo.nombre}
              </h3>

              <p
                className="
                  mt-4
                  text-gray-600
                  leading-relaxed
                "
              >
                {equipo.descripcion}
              </p>
            </div>

            {/* ==================================================
                BENEFICIOS
            ================================================== */}

            <div
              className="
                mt-6
                space-y-3
              "
            >
              {equipo.beneficios.map((item, index) => (
                <div
                  key={index}
                  className="
                    flex
                    gap-3
                    items-start
                  "
                >
                  <CheckCircle2
                    size={18}
                    className="
                      text-[#00a4e4]
                      mt-1
                      shrink-0
                    "
                  />

                  <p
                    className="
                      text-gray-600
                      leading-relaxed
                    "
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* ==================================================
                VIDEO
                SOLO ECOWASHER
            ================================================== */}

            {equipo.nombre === "EcoWasher" &&
              equipo.video && (
                <div className="mt-8">
                  {/* HEADER VIDEO */}

                  <div
                    className="
                      flex
                      items-center
                      gap-2

                      font-bold
                      text-[#171843]

                      mb-3
                    "
                  >
                    <Play size={18} />

                    {isEnglish
                      ? "Equipment video"
                      : "Video del equipo"}
                  </div>

                  {/* VIDEO */}

                  <div
                    className="
                      overflow-hidden
                      rounded-2xl
                      shadow-lg
                      bg-black
                    "
                  >
                    <iframe
                      src={equipo.video}
                      className="
                        w-full
                        h-[250px]
                      "
                      allowFullScreen
                      title={`${equipo.nombre} video`}
                    />
                  </div>
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalLavado;