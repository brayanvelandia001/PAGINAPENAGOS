import React, { useState } from "react";
import {
  ArrowUpRight,
  Globe2,
  MapPin,
} from "lucide-react";

function AgricultoresMundo({ language = "ES" }) {
  const isEnglish = language === "EN";

  // ============================================================
  // HISTORIAS
  // ============================================================

  const historias = [
    {
      id: "colombia",
      region: "COLOMBIA",
      place: "Zetaquirá",
      country: "Boyacá, Colombia",

      image:
        "http://penagos.com/wp-content/uploads/2020/03/pp-300-picadora-pasto-picapasto-penagos-zetaquira-colombia-1.png",

      x: "25%",
      y: "55%",

      // AQUÍ DESPUÉS PONES EL ENLACE
      link: "#",
    },

    {
      id: "america",
      region: isEnglish ? "AMERICA" : "AMÉRICA",
      place: "Deaf Can! Coffee",
      country: "Jamaica",

      image:
        "http://penagos.com/wp-content/uploads/2022/08/Mayeca-STBX-9-1-2.jpeg",

      x: "30%",
      y: "45%",

      // AQUÍ DESPUÉS PONES EL ENLACE
      link: "#",
    },

    {
      id: "africa",
      region: isEnglish ? "AFRICA" : "ÁFRICA",
      place: "Nyaruguru · Kayonza",
      country: isEnglish ? "Rwanda" : "Ruanda",

      image:
        "http://penagos.com/wp-content/uploads/2020/11/Imagen-africa-penagos-1-1.jpg",

      x: "52%",
      y: "57%",

      // AQUÍ DESPUÉS PONES EL ENLACE
      link: "#",
    },

    {
      id: "asia",
      region: isEnglish ? "ASIA & OCEANIA" : "ASIA Y OCEANÍA",
      place: "Papua New Guinea",
      country: isEnglish ? "Oceania" : "Oceanía",

      image:
        "http://penagos.com/wp-content/uploads/2020/11/AGRICULTORES-PENAGOS-ASIA-1-1.jpg",

      x: "80%",
      y: "58%",

      // AQUÍ DESPUÉS PONES EL ENLACE
      link: "#",
    },
  ];

  const [active, setActive] = useState(0);

  const historia = historias[active];

  // ============================================================
  // SIGUIENTE HISTORIA
  // ============================================================

  const siguienteHistoria = () => {
    setActive((active + 1) % historias.length);
  };

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#07133d]
        text-white
      "
    >

      {/* ======================================================
          FONDO GENERAL
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top_left,#302b80,transparent_42%)]
          opacity-60
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-[-180px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#302b80]/20
          blur-[140px]
        "
      />

      {/* ======================================================
          CONTENEDOR
      ====================================================== */}

      <div
        className="
          relative
          mx-auto
          max-w-[1300px]
          px-5
          py-14
          sm:px-6
          md:px-8
          md:py-16
        "
      >

        {/* ====================================================
            HEADER
        ==================================================== */}

        <div className="mb-9">

          <div
            className="
              mb-3
              flex
              items-center
              gap-2
            "
          >

            <Globe2
              size={16}
              className="text-white/60"
            />

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.3em]
                text-white/40
              "
            >
              {isEnglish
                ? "Penagos around the world"
                : "Penagos alrededor del mundo"}
            </span>

          </div>

          <h2
            className="
              text-4xl
              font-black
              leading-none
              tracking-[-0.045em]
              sm:text-5xl
            "
          >
            {isEnglish
              ? "Growing without borders."
              : "Creciendo sin fronteras."}
          </h2>

        </div>


        {/* ====================================================
            EXPERIENCIA 50 / 50
        ==================================================== */}

        <div
          className="
            grid
            gap-5
            lg:grid-cols-2
          "
        >

          {/* ==================================================
              MAPA
          ================================================== */}

          <div
            className="
              relative
              min-h-[430px]
              overflow-hidden
              rounded-[32px]
              border
              border-white/10
              bg-[#061231]
              sm:min-h-[520px]
            "
          >

            {/* MAPA DE FONDO */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-cover
                bg-center
                opacity-30
              "
              style={{
                backgroundImage:
                  "url('http://penagos.com/wp-content/uploads/2026/08/mapapenagos.png')",
              }}
            />

            {/* TONO OSCURO */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-[#07133d]/45
                mix-blend-multiply
              "
            />

            {/* BRILLO */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-[radial-gradient(circle_at_center,rgba(80,105,220,.18),transparent_60%)]
              "
            />


            {/* =================================================
                CABECERA MAPA
            ================================================= */}

            <div
              className="
                absolute
                left-6
                right-6
                top-6
                z-30
                flex
                items-center
                justify-between
              "
            >

              <span
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.28em]
                  text-white/45
                "
              >
                {isEnglish
                  ? "Our presence"
                  : "Nuestra presencia"}
              </span>


              <span
                className="
                  flex
                  items-center
                  gap-2
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-white/30
                "
              >

                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-[#6d6aff]
                    shadow-[0_0_12px_#6d6aff]
                  "
                />

                {isEnglish
                  ? "Explore"
                  : "Explora"}

              </span>

            </div>


            {/* =================================================
                GLOBO
            ================================================= */}

            <div
              className="
                absolute
                left-1/2
                top-[53%]
                z-10
                h-[300px]
                w-[300px]
                -translate-x-1/2
                -translate-y-1/2
                sm:h-[360px]
                sm:w-[360px]
                lg:h-[390px]
                lg:w-[390px]
              "
            >

              {/* RESPLANDOR */}

              <div
                className="
                  absolute
                  -inset-10
                  rounded-full
                  bg-[#4c68ff]/10
                  blur-[45px]
                "
              />


              {/* BORDE */}

              <div
                className="
                  absolute
                  inset-0
                  rounded-full
                  border
                  border-[#7fa0ff]/40
                  shadow-[0_0_45px_rgba(70,100,255,.28),inset_0_0_50px_rgba(70,100,255,.18)]
                "
              />


              {/* =================================================
                  MAPA DENTRO DEL GLOBO
              ================================================= */}

              <div
                className="
                  absolute
                  inset-[7px]
                  overflow-hidden
                  rounded-full
                  border
                  border-white/10
                  bg-[#0a2452]
                "
              >

                <img
                  src="http://penagos.com/wp-content/uploads/2026/08/mapapenagos.png"
                  alt={
                    isEnglish
                      ? "Penagos world map"
                      : "Mapa mundial de Penagos"
                  }
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    opacity-80
                  "
                />

                {/* TONO AZUL */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-[#123d83]/35
                    mix-blend-color
                  "
                />

                {/* ILUMINACIÓN */}

                <div
                  className="
                    absolute
                    inset-0
                    rounded-full
                    bg-[radial-gradient(circle_at_28%_22%,rgba(255,255,255,.16),transparent_24%),radial-gradient(circle_at_70%_75%,rgba(0,0,0,.60),transparent_68%)]
                  "
                />

                {/* VIÑETA */}

                <div
                  className="
                    absolute
                    inset-0
                    rounded-full
                    bg-[radial-gradient(circle_at_center,transparent_48%,rgba(0,0,0,.45)_100%)]
                  "
                />

              </div>


              {/* =================================================
                  LÍNEAS DEL GLOBO
              ================================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  rounded-full
                  border
                  border-white/5
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-0
                  h-full
                  w-px
                  -translate-x-1/2
                  bg-white/[0.06]
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  left-0
                  top-1/2
                  h-px
                  w-full
                  -translate-y-1/2
                  bg-white/[0.06]
                "
              />


              {/* =================================================
                  PUNTOS DEL MAPA
              ================================================= */}

              {historias.map((item, index) => {

                const activo = index === active;

                return (

                  <button
                    key={item.id}
                    type="button"
                    onMouseEnter={() => setActive(index)}
                    onClick={() => setActive(index)}
                    aria-label={item.region}
                    style={{
                      left: item.x,
                      top: item.y,
                    }}
                    className="
                      group
                      absolute
                      z-30
                      -translate-x-1/2
                      -translate-y-1/2
                      cursor-pointer
                      outline-none
                    "
                  >

                    {/* HALO */}

                    <span
                      className={`
                        absolute
                        left-1/2
                        top-1/2
                        -translate-x-1/2
                        -translate-y-1/2
                        rounded-full
                        border
                        border-[#8ba4ff]/60
                        transition-all
                        duration-500

                        ${
                          activo
                            ? "h-12 w-12 opacity-100"
                            : "h-7 w-7 opacity-0 group-hover:h-10 group-hover:w-10 group-hover:opacity-80"
                        }
                      `}
                    />


                    {/* PUNTO */}

                    <span
                      className={`
                        relative
                        block
                        rounded-full
                        border
                        transition-all
                        duration-300

                        ${
                          activo
                            ? "h-4 w-4 border-white bg-white shadow-[0_0_25px_rgba(255,255,255,.95)]"
                            : "h-3 w-3 border-white/80 bg-[#6d6aff] shadow-[0_0_14px_rgba(109,106,255,.8)] group-hover:scale-125"
                        }
                      `}
                    />


                    {/* ETIQUETA */}

                    <span
                      className={`
                        pointer-events-none
                        absolute
                        bottom-6
                        left-1/2
                        -translate-x-1/2
                        whitespace-nowrap
                        rounded-full
                        border
                        border-white/10
                        bg-[#07133d]/90
                        px-3
                        py-1.5
                        text-[8px]
                        font-bold
                        uppercase
                        tracking-[0.16em]
                        text-white
                        backdrop-blur-md
                        transition-all
                        duration-300

                        ${
                          activo
                            ? "translate-y-0 opacity-100"
                            : "translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                        }
                      `}
                    >
                      {item.region}
                    </span>

                  </button>

                );

              })}

            </div>


            {/* =================================================
                INFORMACIÓN MAPA
            ================================================= */}

            <div
              className="
                absolute
                bottom-5
                left-6
                right-6
                z-30
                flex
                items-center
                justify-between
              "
            >

              <div
                className="
                  flex
                  items-center
                  gap-2
                "
              >

                <MapPin
                  size={13}
                  className="text-white/45"
                />

                <span
                  className="
                    text-[9px]
                    font-semibold
                    text-white/45
                  "
                >
                  {historia.country}
                </span>

              </div>


              <span
                className="
                  text-[8px]
                  font-bold
                  tracking-[0.2em]
                  text-white/25
                "
              >
                0{active + 1} / 0{historias.length}
              </span>

            </div>

          </div>


          {/* ==================================================
              TARJETA DERECHA — HISTORIA
          ================================================== */}

          <div
            className="
              group
              relative
              min-h-[430px]
              overflow-hidden
              rounded-[32px]
              border
              border-white/10
              bg-[#101010]
              sm:min-h-[520px]
            "
          >

            {/* =================================================
                IMAGEN
            ================================================= */}

            <img
              key={historia.id}
              src={historia.image}
              alt={historia.place}
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                object-center
                transition-transform
                duration-700
                ease-out
                group-hover:scale-[1.04]
              "
            />


            {/* CAPA SUAVE */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-br
                from-[#07133d]/10
                via-transparent
                to-[#07133d]/35
              "
            />


            {/* OSCURECER PARTE INFERIOR */}

            <div
              className="
                pointer-events-none
                absolute
                inset-x-0
                bottom-0
                h-[65%]
                bg-gradient-to-t
                from-black
                via-black/65
                to-transparent
              "
            />


            {/* =================================================
                CABECERA
            ================================================= */}

            <div
              className="
                absolute
                left-6
                right-6
                top-6
                z-20
                flex
                items-center
                justify-between
              "
            >

              <span
                className="
                  rounded-full
                  border
                  border-white/20
                  bg-black/30
                  px-4
                  py-2
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-white
                  backdrop-blur-md
                "
              >
                {historia.region}
              </span>


              {/* SIGUIENTE */}

              <button
                type="button"
                onClick={siguienteHistoria}
                aria-label={
                  isEnglish
                    ? "Next story"
                    : "Siguiente historia"
                }
                className="
                  flex
                  h-10
                  w-10
                  cursor-pointer
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  text-[#07133d]
                  shadow-xl
                  transition-all
                  duration-300
                  hover:scale-110
                  hover:rotate-3
                "
              >
                <ArrowUpRight size={18} />
              </button>

            </div>


            {/* =================================================
                CONTENIDO
            ================================================= */}

            <div
              className="
                absolute
                bottom-0
                left-0
                right-0
                z-20
                p-7
                sm:p-8
              "
            >

              {/* PAÍS */}

              <p
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.28em]
                  text-white/55
                "
              >
                {historia.country}
              </p>


              {/* TÍTULO */}

              <h3
                className="
                  mt-2
                  max-w-[90%]
                  text-3xl
                  font-black
                  leading-[0.95]
                  tracking-[-0.045em]
                  sm:text-4xl
                "
              >
                {historia.place}
              </h3>


              {/* DESCRIPCIÓN */}

              <p
                className="
                  mt-3
                  max-w-[520px]
                  text-sm
                  leading-relaxed
                  text-white/55
                "
              >
                {isEnglish
                  ? "Discover the story of farmers and communities growing together with Penagos."
                  : "Conoce la historia de agricultores y comunidades que crecen junto a Penagos."}
              </p>


              {/* =================================================
                  PARTE INFERIOR
              ================================================= */}

              <div
                className="
                  mt-5
                  flex
                  flex-col
                  gap-4
                  border-t
                  border-white/20
                  pt-4
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                "
              >

                {/* TEXTO */}

                <span
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.22em]
                    text-white/45
                  "
                >
                  {isEnglish
                    ? "Growing together"
                    : "Creciendo juntos"}
                </span>


                {/* BOTÓN VER MÁS */}

                <a
                  href={historia.link}
                  className="
                    inline-flex
                    w-fit
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/20
                    bg-white
                    px-5
                    py-2.5
                    text-[9px]
                    font-black
                    uppercase
                    tracking-[0.18em]
                    text-[#07133d]
                    transition-all
                    duration-300
                    hover:scale-105
                    hover:bg-white/90
                  "
                >

                  {isEnglish
                    ? "View more"
                    : "Ver más"}

                  <ArrowUpRight size={14} />

                </a>

              </div>

            </div>

          </div>

        </div>


        {/* ====================================================
            BOTONES DE REGIONES
        ==================================================== */}

        <div
          className="
            mt-5
            flex
            flex-wrap
            gap-2
          "
        >

          {historias.map((item, index) => (

            <button
              key={item.id}
              type="button"
              onMouseEnter={() => setActive(index)}
              onClick={() => setActive(index)}
              className={`
                cursor-pointer
                rounded-full
                px-4
                py-2.5
                text-[8px]
                font-bold
                uppercase
                tracking-[0.18em]
                transition-all
                duration-300

                ${
                  active === index
                    ? "bg-white text-[#07133d] shadow-lg"
                    : "border border-white/10 bg-white/[0.04] text-white/40 hover:bg-white/10 hover:text-white"
                }
              `}
            >
              {item.region}
            </button>

          ))}

        </div>


        {/* ====================================================
            PIE
        ==================================================== */}

        <div
          className="
            mt-9
            flex
            items-center
            justify-between
            border-t
            border-white/10
            pt-5
          "
        >

          <span
            className="
              text-[9px]
              font-bold
              uppercase
              tracking-[0.3em]
              text-white/25
            "
          >
            PENAGOS
          </span>


          <span
            className="
              text-[9px]
              uppercase
              tracking-[0.2em]
              text-white/25
            "
          >
            {isEnglish
              ? "Technology without borders"
              : "Tecnología sin fronteras"}
          </span>

        </div>

      </div>

    </section>
  );
}

export default AgricultoresMundo;