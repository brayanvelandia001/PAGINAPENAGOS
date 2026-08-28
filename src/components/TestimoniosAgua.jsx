import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Droplets,
  Quote,
} from "lucide-react";

function TestimoniosAgua({ language = "ES" }) {
  const isEnglish = language === "EN";

  // ============================================================
  // TESTIMONIOS
  // ============================================================

  const testimonios = [
    {
      id: "caldas-1",
      video: "https://www.youtube.com/embed/KtCBFrjPDv4",
      tecnologia: "UDC",
      titulo: isEnglish
        ? "UDC technology for green cherry coffee classification"
        : "Tecnología UDC para clasificación de café cereza verde",
      frase: isEnglish
        ? "Before, we used a thousand or two thousand litres of water. Today we only consume 300 litres for 8,000 or 10,000 kilos of coffee."
        : "Antes usábamos mil o dos mil litros de agua. Hoy solo consumimos 300 litros para 8.000 o 10.000 kilos de café.",
    },

    {
      id: "santander",
      video: "https://www.youtube.com/embed/PAcgTadX2kg",
      tecnologia: "UCBE 1.500",
      titulo: isEnglish
        ? "UCBE 1,500 technology for selectively harvested coffee"
        : "Tecnología UCBE 1.500 para cafés de recolección selectiva",
      frase: isEnglish
        ? "It has helped us in the washing process; we no longer do it manually. The machine delivers the coffee washed with little water."
        : "Nos ha ayudado mucho en el proceso de lavado; ya no lo hacemos manualmente. La máquina nos entrega el café lavado con poca agua.",
    },

    {
      id: "santa-barbara",
      video: "https://www.youtube.com/embed/aJ1pbGmJUS0",
      tecnologia: "DCV",
      titulo: isEnglish
        ? "DCV technology"
        : "Tecnología DCV",
      frase: isEnglish
        ? "It has allowed me to greatly reduce water consumption. I only use a minimal amount with the washing machine. In the same way, by separating green beans, I have improved the quality of my coffee."
        : "Me ha permitido reducir enormemente el consumo de agua. Solo utilizo una cantidad mínima con la lavadora. Del mismo modo, con la separación de los granos verdes, he mejorado la calidad de mi café.",
    },

    {
      id: "peru",
      video: "https://www.youtube.com/embed/rB5uWyl-cf0",
      tecnologia: "ECOLINE 800",
      titulo: isEnglish
        ? "ECOLINE 800 technology"
        : "Tecnología ECOLINE 800",
      frase: isEnglish
        ? "This technology uses 0.2 litres of water per kilo of parchment coffee, compared with the 50 litres per kilo we used previously."
        : "Esta tecnología consume 0,2 litros de agua por kilo de café en pergamino, a diferencia de lo que usábamos anteriormente, que eran 50 litros por kilo de café.",
    },

    {
      id: "caldas-2",
      video: "https://www.youtube.com/embed/Lj3DaN86Q4Q",
      tecnologia: "PENAGOS",
      titulo: isEnglish
        ? "Testimony from Caldas, Colombia"
        : "Testimonio desde Caldas, Colombia",
      frase: isEnglish
        ? "I am very satisfied with the equipment because I have been able to work comfortably. In this area I know many farms where this brand is used. I am certain that it is widely used in this region."
        : "Estoy muy satisfecho con el equipo porque he podido trabajar cómodamente. En esta zona conozco muchas granjas donde se utiliza esta marca. Estoy seguro de que es muy popular en esta región.",
    },

    {
      id: "trujillo",
      video: "https://www.youtube.com/embed/mAhHKB-ttwE",
      tecnologia: "PENAGOS",
      titulo: isEnglish
        ? "Penagos means support in Venezuela"
        : "Penagos es respaldo en Venezuela",
      frase: isEnglish
        ? "Thanks to Penagos for the support and for the excellent quality equipment."
        : "Gracias a Penagos por el apoyo y por los equipos de excelente calidad.",
    },
  ];

  // ============================================================
  // ESTADO
  // ============================================================

  const [activeIndex, setActiveIndex] = useState(0);

  // ============================================================
  // NAVEGACIÓN
  // ============================================================

  const totalSlides = Math.ceil(testimonios.length / 3);

  const siguiente = () => {
    setActiveIndex((prev) =>
      prev >= totalSlides - 1 ? 0 : prev + 1
    );
  };

  const anterior = () => {
    setActiveIndex((prev) =>
      prev === 0 ? totalSlides - 1 : prev - 1
    );
  };

  // ============================================================
  // 3 VIDEOS VISIBLES
  // ============================================================

  const visibles = [
    testimonios[(activeIndex * 3) % testimonios.length],
    testimonios[(activeIndex * 3 + 1) % testimonios.length],
    testimonios[(activeIndex * 3 + 2) % testimonios.length],
  ];

  // ============================================================
  // RENDER
  // ============================================================

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#f7f7f5]
        text-[#07133d]
      "
    >

      {/* ========================================================
          DECORACIÓN
      ======================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-48
          top-10
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#6d6aff]/10
          blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-48
          bottom-0
          h-[400px]
          w-[400px]
          rounded-full
          bg-cyan-400/5
          blur-[130px]
        "
      />

      {/* ========================================================
          CONTENEDOR
      ======================================================== */}

      <div
        className="
          relative
          mx-auto
          max-w-[1320px]
          px-5
          py-14
          sm:px-6
          md:px-8
          md:py-20
        "
      >

        {/* ======================================================
            TITULO
        ====================================================== */}

        <div
          className="
            mx-auto
            mb-12
            max-w-[850px]
            text-center
          "
        >

          <h2
            className="
              text-3xl
              font-black
              leading-[0.95]
              tracking-[-0.055em]
              sm:text-4xl
              md:text-[52px]
            "
          >
            {isEnglish
              ? "We contribute to the protection of water"
              : "Contribuimos a la protección del agua"}
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-[700px]
              text-sm
              leading-relaxed
              text-[#07133d]/50
              sm:text-base
            "
          >
            {isEnglish
              ? "We help agriculture become a source of sustainable progress for everyone through technologies that use water more efficiently."
              : "Ayudamos a que la agricultura se convierta en una fuente de progreso sostenible para todos mediante tecnologías que utilizan el agua de manera más eficiente."}
          </p>
        </div>

        {/* ======================================================
            CARRUSEL
        ====================================================== */}

        <div className="relative">

          {/* ====================================================
              FLECHA IZQUIERDA
          ==================================================== */}

          <button
            type="button"
            onClick={anterior}
            aria-label={
              isEnglish
                ? "Previous videos"
                : "Videos anteriores"
            }
            className="
              absolute
              left-[-14px]
              top-[38%]
              z-30
              hidden
              h-11
              w-11
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-[#07133d]/10
              bg-white
              text-[#07133d]
              shadow-[0_8px_30px_rgba(7,19,61,0.12)]
              transition-all
              duration-300
              hover:-translate-x-1
              hover:shadow-[0_12px_35px_rgba(7,19,61,0.18)]
              md:flex
              lg:left-[-25px]
            "
          >
            <ChevronLeft size={19} />
          </button>

          {/* ====================================================
              FLECHA DERECHA
          ==================================================== */}

          <button
            type="button"
            onClick={siguiente}
            aria-label={
              isEnglish
                ? "Next videos"
                : "Siguientes videos"
            }
            className="
              absolute
              right-[-14px]
              top-[38%]
              z-30
              hidden
              h-11
              w-11
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-[#07133d]
              text-white
              shadow-[0_8px_30px_rgba(7,19,61,0.20)]
              transition-all
              duration-300
              hover:translate-x-1
              hover:shadow-[0_12px_35px_rgba(7,19,61,0.28)]
              md:flex
              lg:right-[-25px]
            "
          >
            <ChevronRight size={19} />
          </button>

          {/* ====================================================
              TARJETAS
          ==================================================== */}

          <div
            className="
              grid
              grid-cols-1
              gap-6
              md:grid-cols-2
              xl:grid-cols-3
            "
          >

            {visibles.map((testimonio, index) => (

              <article
                key={`${testimonio.id}-${activeIndex}-${index}`}
                className="
                  group
                  overflow-hidden
                  rounded-[18px]
                  border
                  border-[#07133d]/[0.08]
                  bg-white
                  shadow-[0_10px_35px_rgba(7,19,61,0.06)]
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:shadow-[0_20px_50px_rgba(7,19,61,0.11)]
                "
              >

                {/* ============================================
                    VIDEO
                ============================================ */}

                <div
                  className="
                    relative
                    aspect-video
                    overflow-hidden
                    bg-[#07133d]
                  "
                >

                  <iframe
                    src={`${testimonio.video}?controls=1&rel=0&playsinline=1&modestbranding=1`}
                    title={testimonio.titulo}
                    className="
                      absolute
                      inset-0
                      h-full
                      w-full
                    "
                    loading="lazy"
                    allow="
                      accelerometer;
                      autoplay;
                      clipboard-write;
                      encrypted-media;
                      gyroscope;
                      picture-in-picture;
                      web-share
                    "
                    allowFullScreen
                  />

                </div>

                {/* ============================================
                    INFORMACIÓN
                ============================================ */}

                <div
                  className="
                    px-6
                    pb-7
                    pt-6
                  "
                >

                  {/* TITULO */}

                  <h3
                    className="
                      min-h-[52px]
                      text-[18px]
                      font-black
                      leading-[1.1]
                      tracking-[-0.035em]
                      text-[#07133d]
                    "
                  >
                    {testimonio.titulo}
                  </h3>

                  {/* SEPARADOR */}

                  <div
                    className="
                      my-5
                      h-px
                      w-full
                      bg-[#07133d]/[0.07]
                    "
                  />

                  {/* FRASE */}

                  <div
                    className="
                      flex
                      gap-3
                    "
                  >

                    <Quote
                      size={16}
                      strokeWidth={2}
                      className="
                        mt-0.5
                        shrink-0
                        text-[#6d6aff]/60
                      "
                    />

                    <p
                      className="
                        text-[13px]
                        font-medium
                        leading-[1.65]
                        text-[#07133d]/60
                      "
                    >
                      {testimonio.frase}
                    </p>

                  </div>

                </div>

              </article>

            ))}

          </div>

          {/* ====================================================
              CONTROLES MOBILE
          ==================================================== */}

          <div
            className="
              mt-7
              flex
              items-center
              justify-center
              gap-4
              md:hidden
            "
          >

            <button
              type="button"
              onClick={anterior}
              aria-label={
                isEnglish
                  ? "Previous"
                  : "Anterior"
              }
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-[#07133d]/10
                bg-white
                text-[#07133d]
                shadow-sm
              "
            >
              <ChevronLeft size={17} />
            </button>

            <div
              className="
                flex
                items-center
                gap-1.5
              "
            >

              {Array.from({
                length: totalSlides,
              }).map((_, index) => (

                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={
                    isEnglish
                      ? `Go to slide ${index + 1}`
                      : `Ir a la diapositiva ${index + 1}`
                  }
                  className={`
                    h-1.5
                    rounded-full
                    transition-all
                    duration-300

                    ${
                      activeIndex === index
                        ? "w-7 bg-[#07133d]"
                        : "w-1.5 bg-[#07133d]/15"
                    }
                  `}
                />

              ))}

            </div>

            <button
              type="button"
              onClick={siguiente}
              aria-label={
                isEnglish
                  ? "Next"
                  : "Siguiente"
              }
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-[#07133d]
                text-white
                shadow-sm
              "
            >
              <ChevronRight size={17} />
            </button>

          </div>

        </div>

        {/* ======================================================
            INDICADORES DESKTOP
        ====================================================== */}

        <div
          className="
            mt-9
            hidden
            items-center
            justify-center
            gap-2
            md:flex
          "
        >

          {Array.from({
            length: totalSlides,
          }).map((_, index) => (

            <button
              key={index}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={
                isEnglish
                  ? `Go to slide ${index + 1}`
                  : `Ir a la diapositiva ${index + 1}`
              }
              className={`
                h-1.5
                rounded-full
                transition-all
                duration-300

                ${
                  activeIndex === index
                    ? "w-8 bg-[#07133d]"
                    : "w-1.5 bg-[#07133d]/15 hover:bg-[#07133d]/30"
                }
              `}
            />

          ))}

        </div>

      </div>
    </section>
  );
}

export default TestimoniosAgua;
