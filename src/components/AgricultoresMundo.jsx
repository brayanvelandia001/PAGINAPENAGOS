import React, { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Globe2,
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
        "https://penagos.com/wp-content/uploads/2020/03/pp-300-picadora-pasto-picapasto-penagos-zetaquira-colombia-1.png",

      link: isEnglish
        ? "/en/penagos-farmers/colombia"
        : "/agricultores-penagos/colombia",
    },


    {
      id: "america",
      region: isEnglish ? "AMERICA" : "AMÉRICA",
      place: "Deaf Can! Coffee",
      country: "Jamaica",

      image:
        "https://penagos.com/wp-content/uploads/2022/08/Mayeca-STBX-9-1-2.jpeg",

      link: isEnglish
        ? "/en/penagos-farmers/america"
        : "/agricultores-penagos/america",
    },


    {
      id: "africa",
      region: isEnglish ? "AFRICA" : "ÁFRICA",
      place: "Nyaruguru · Kayonza",
      country: isEnglish ? "Rwanda" : "Ruanda",

      image:
        "https://penagos.com/wp-content/uploads/2020/11/Imagen-africa-penagos-1-1.jpg",

      link: isEnglish
        ? "/en/penagos-farmers/africa"
        : "/agricultores-penagos/africa",
    },


    {
      id: "asia",
      region: isEnglish
        ? "ASIA & OCEANIA"
        : "ASIA Y OCEANÍA",

      place: "Papua New Guinea",

      country: isEnglish
        ? "Oceania"
        : "Oceanía",

      image:
        "https://penagos.com/wp-content/uploads/2020/11/AGRICULTORES-PENAGOS-ASIA-1-1.jpg",

      link: isEnglish
        ? "/en/penagos-farmers/asia-oceania"
        : "/agricultores-penagos/asia-oceania",
    },

  ];


  // ============================================================
  // IMAGEN ACTIVA
  // ============================================================

  const [activeImage, setActiveImage] = useState(0);


  // ============================================================
  // CAMBIO CADA 3 SEGUNDOS
  // ============================================================

  useEffect(() => {

    const interval = setInterval(() => {

      setActiveImage((prev) => (
        (prev + 1) % historias.length
      ));

    }, 3000);

    return () => clearInterval(interval);

  }, [historias.length]);


  // ============================================================
  // RETURN
  // ============================================================

  return (
    <>


      {/* ============================================================
          HERO
      ============================================================ */}

      <section
        className="
          group
          relative
          flex
          min-h-screen
          w-full
          items-center
          overflow-hidden
          bg-[#07133d]
          text-white
        "
      >


        {/* ========================================================
            IMÁGENES DEL HERO
            CAMBIAN CADA 3 SEGUNDOS
        ======================================================== */}

        {historias.map((item, index) => (

          <img
            key={item.id}
            src={item.image}
            alt={item.place}

            className={`
              absolute
              inset-0
              h-full
              w-full
              object-cover

              transition-all
              duration-[1500ms]
              ease-in-out

              ${
                index === activeImage
                  ? `
                    scale-[1.03]
                    opacity-100
                  `
                  : `
                    scale-100
                    opacity-0
                  `
              }

              ${
                item.id === "colombia"
                  ? "object-[center_65%]"

                  : item.id === "america"
                  ? "object-[center_60%]"

                  : item.id === "africa"
                  ? "object-[center_10%]"

                  : "object-[center_60%]"
              }
            `}
          />

        ))}


        {/* ========================================================
            OVERLAY GENERAL
        ======================================================== */}

        <div
          className="
            absolute
            inset-0
            bg-black/25
          "
        />


        {/* ========================================================
            DEGRADADO IZQUIERDO
        ======================================================== */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#07133d]/90
            via-[#07133d]/50
            to-transparent
          "
        />


        {/* ========================================================
            DEGRADADO INFERIOR
        ======================================================== */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-[55%]
            bg-gradient-to-t
            from-[#07133d]/90
            via-[#07133d]/30
            to-transparent
          "
        />


        {/* ========================================================
            TONO AZUL PENAGOS
        ======================================================== */}

        <div
          className="
            absolute
            inset-0
            bg-[#302b80]/5
            mix-blend-multiply
          "
        />


        {/* ========================================================
            CONTENIDO
        ======================================================== */}

        <div
          className="
            relative
            z-10
            mx-auto
            flex
            min-h-screen
            w-full
            max-w-[1500px]
            items-center
            px-6
            pb-20
            pt-32
            sm:px-10
            lg:px-16
            xl:px-20
          "
        >

          <div
            className="
              max-w-[780px]
            "
          >


            {/* ====================================================
                EYEBROW
            ==================================================== */}

            <div
              className="
                mb-8
                flex
                items-center
                gap-4
              "
            >

              <span
                className="
                  h-[3px]
                  w-14
                  rounded-full
                  bg-[#302b80]
                  shadow-[0_0_15px_rgba(48,43,128,0.5)]
                  transition-all
                  duration-500
                  group-hover:w-20
                  sm:w-16
                "
              />


              <div
                className="
                  flex
                  items-center
                  gap-2
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.35em]
                  text-white/90
                  sm:text-xs
                "
              >

                <Globe2 size={16} />

                {isEnglish
                  ? "Penagos around the world"
                  : "Penagos alrededor del mundo"
                }

              </div>

            </div>


            {/* ====================================================
                TITULO
            ==================================================== */}

            <h1
              className="
                text-[48px]
                font-semibold
                leading-[0.90]
                tracking-[-0.055em]
                text-white
                drop-shadow-[0_5px_25px_rgba(0,0,0,0.30)]
                sm:text-6xl
                md:text-7xl
                lg:text-[82px]
                xl:text-[100px]
              "
            >

              {isEnglish ? (
                <>
                  Growing
                  <br />

                  <span className="text-white/70">
                    without
                  </span>

                  <br />

                  borders.
                </>
              ) : (
                <>
                  Creciendo
                  <br />

                  <span className="text-white/70">
                    sin
                  </span>

                  <br />

                  fronteras.
                </>
              )}

            </h1>


            {/* ====================================================
                LINEA AZUL
            ==================================================== */}

            <div
              className="
                mt-8
                h-[4px]
                w-24
                rounded-full
                bg-[#302b80]
                shadow-[0_0_18px_rgba(48,43,128,0.55)]
                transition-all
                duration-500
                group-hover:w-40
                sm:w-32
              "
            />


            {/* ====================================================
                DESCRIPCIÓN
            ==================================================== */}

            <p
              className="
                mt-7
                max-w-[650px]
                text-[15px]
                leading-7
                text-white/85
                sm:text-base
                lg:text-[18px]
                lg:leading-8
              "
            >

              {isEnglish
                ? "Meet farmers and communities around the world who grow, transform and move forward with Penagos technology."
                : "Conoce agricultores y comunidades alrededor del mundo que cultivan, transforman y avanzan junto a la tecnología Penagos."
              }

            </p>


            {/* ====================================================
                BOTÓN PRINCIPAL
            ==================================================== */}

            <a
              href="#historias"
              className="
                mt-10
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-white
                px-7
                py-4
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#07133d]
                transition-all
                duration-300
                hover:scale-105
                hover:bg-[#302b80]
                hover:text-white
              "
            >

              {isEnglish
                ? "Discover stories"
                : "Conoce historias"
              }

              <ArrowUpRight size={16} />

            </a>


          </div>

        </div>


        {/* ========================================================
            INFORMACIÓN DE LA IMAGEN ACTUAL
        ======================================================== */}

        <div
          className="
            absolute
            bottom-12
            right-8
            z-20
            hidden
            items-center
            gap-4
            lg:flex
          "
        >

          <div
            className="
              text-right
            "
          >

            <div
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.3em]
                text-white/50
              "
            >

              {historias[activeImage].country}

            </div>


            <div
              className="
                mt-1
                text-sm
                font-semibold
                text-white
              "
            >

              {historias[activeImage].place}

            </div>

          </div>


          {/* ======================================================
              INDICADORES
          ====================================================== */}

          <div
            className="
              flex
              gap-2
            "
          >

            {historias.map((item, index) => (

              <span
                key={item.id}
                className={`
                  h-[3px]
                  rounded-full
                  transition-all
                  duration-500

                  ${
                    index === activeImage
                      ? "w-10 bg-[#302b80]"
                      : "w-3 bg-white/30"
                  }
                `}
              />

            ))}

          </div>

        </div>


        {/* ========================================================
            SCROLL
        ======================================================== */}

        <div
          className="
            absolute
            bottom-12
            left-8
            z-20
            hidden
            items-center
            gap-3
            lg:flex
          "
        >

          <span
            className="
              text-[9px]
              font-bold
              uppercase
              tracking-[0.3em]
              text-white/50
            "
          >

            {isEnglish
              ? "Discover more"
              : "Descubre más"
            }

          </span>


          <span
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-white/25
              bg-white/5
              backdrop-blur-sm
              transition-all
              duration-300
              group-hover:border-[#302b80]
              group-hover:bg-[#302b80]
            "
          >

            <span
              className="
                h-1.5
                w-1.5
                rotate-45
                border-b
                border-r
                border-white
                transition-transform
                duration-300
                group-hover:translate-y-1
              "
            />

          </span>

        </div>


        {/* ========================================================
            LINEA INFERIOR AZUL
        ======================================================== */}

        <div
          className="
            absolute
            bottom-0
            left-0
            z-20
            h-[4px]
            w-full
            bg-[#302b80]
          "
        />


        {/* ========================================================
            BRILLO SUPERIOR
        ======================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            left-0
            right-0
            top-0
            z-20
            h-32
            bg-gradient-to-b
            from-black/20
            to-transparent
          "
        />

      </section>



      {/* ============================================================
          TARJETAS DE HISTORIAS
      ============================================================ */}

      <section
        id="historias"
        className="
          relative
          bg-white
          py-28
          text-[#07133d]
        "
      >

        <div
          className="
            mx-auto
            max-w-[1500px]
            px-8
            lg:px-20
          "
        >


          {/* ======================================================
              TITULO
          ====================================================== */}

          <div
            className="
              mb-16
              max-w-4xl
            "
          >

            <div
              className="
                mb-6
                flex
                items-center
                gap-4
              "
            >

              <span
                className="
                  h-[3px]
                  w-14
                  rounded-full
                  bg-[#302b80]
                "
              />


              <span
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.3em]
                  text-[#07133d]/50
                "
              >

                {isEnglish
                  ? "Stories around the world"
                  : "Historias alrededor del mundo"
                }

              </span>

            </div>


            <h2
              className="
                text-5xl
                font-semibold
                leading-tight
                tracking-[-0.05em]
                lg:text-7xl
              "
            >

              {isEnglish
                ? "Farmers growing together with Penagos."
                : "Agricultores creciendo junto a Penagos."
              }

            </h2>

          </div>



          {/* ======================================================
              GRID DE HISTORIAS
          ====================================================== */}

          <div
            className="
              grid
              gap-8
              md:grid-cols-2
              xl:grid-cols-4
            "
          >

            {historias.map((item) => (

              <article
                key={item.id}
                className="
                  group
                  relative
                  h-[500px]
                  overflow-hidden
                  rounded-[32px]
                  bg-[#07133d]
                  shadow-xl
                "
              >

                <img
                  src={item.image}
                  alt={item.place}
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    transition
                    duration-700
                    group-hover:scale-110
                  "
                />


                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black
                    via-black/30
                    to-transparent
                  "
                />


                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    p-8
                    text-white
                  "
                >

                  {/* PAÍS */}

                  <div
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.25em]
                      text-white/60
                    "
                  >

                    {item.country}

                  </div>


                  {/* LUGAR */}

                  <h3
                    className="
                      mt-4
                      text-3xl
                      font-semibold
                      tracking-[-0.04em]
                    "
                  >

                    {item.place}

                  </h3>


                  {/* DESCRIPCIÓN */}

                  <p
                    className="
                      mt-3
                      text-sm
                      leading-6
                      text-white/60
                    "
                  >

                    {isEnglish
                      ? "Discover the story of farmers growing with Penagos technology."
                      : "Descubre la historia de agricultores que crecen con tecnología Penagos."
                    }

                  </p>


                  {/* BOTÓN */}

                  <a
                    href={item.link}
                    className="
                      mt-6
                      inline-flex
                      items-center
                      gap-3
                      rounded-full
                      bg-white
                      px-6
                      py-3
                      text-[10px]
                      font-black
                      uppercase
                      tracking-[0.2em]
                      text-[#07133d]
                      transition-all
                      duration-300
                      hover:scale-105
                      hover:bg-[#302b80]
                      hover:text-white
                    "
                  >

                    {isEnglish
                      ? "View story"
                      : "Ver historia"
                    }

                    <ArrowUpRight size={14} />

                  </a>


                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

    </>
  );
}


export default AgricultoresMundo;

