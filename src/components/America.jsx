import React from "react";
import ReactCountryFlag from "react-country-flag";

// ============================================================
// AMÉRICA
// EXPERIENCIA PENAGOS EN AMÉRICA
// MISMA ESTRUCTURA VISUAL DE ÁFRICA / ASIA / OCEANÍA
// ============================================================

const America = ({ language = "ES" }) => {
  const isEnglish = language === "EN";

  // ==========================================================
  // PAÍSES
  // ==========================================================

  const paises = [
    {
      code: "GT",
      es: "Guatemala",
      en: "Guatemala",
    },
    {
      code: "CR",
      es: "Costa Rica",
      en: "Costa Rica",
    },
    {
      code: "PA",
      es: "Panamá",
      en: "Panama",
    },
    {
      code: "NI",
      es: "Nicaragua",
      en: "Nicaragua",
    },
    {
      code: "VE",
      es: "Venezuela",
      en: "Venezuela",
    },
    {
      code: "PE",
      es: "Perú",
      en: "Peru",
    },
    {
      code: "BR",
      es: "Brasil",
      en: "Brazil",
    },
    {
      code: "DO",
      es: "República Dominicana",
      en: "Dominican Republic",
    },
    {
      code: "CU",
      es: "Cuba",
      en: "Cuba",
    },
    {
      code: "MX",
      es: "México",
      en: "Mexico",
    },
    {
      code: "JM",
      es: "Jamaica",
      en: "Jamaica",
    },
    {
      code: "US",
      es: "Hawái",
      en: "Hawaii",
    },
  ];

  // ==========================================================
  // CONTENIDOS
  // ==========================================================

  const contenidos = [
    {
      image:
        "https://penagos.com/wp-content/uploads/2020/11/AGRICULTORES-PENAGOS-am%C3%A9rica-1-1024x1024.jpg",

      titulo: isEnglish
        ? "Agriculture and coffee without borders"
        : "Agricultura y café sin fronteras",

      texto: isEnglish
        ? "Agriculture and coffee have always been an important part of the progress of American countries."
        : "La agricultura y el café siempre han sido una parte importante del progreso de los países de América.",
    },

    {
      image:
        "https://penagos.com/wp-content/uploads/2020/11/AGRICULTORES-PENAGOS-am%C3%A9rica-5-1024x1024.jpg",

      titulo: isEnglish
        ? "Penagos arrives in America"
        : "Penagos llega a América",

      texto: isEnglish
        ? "The beginning in America was driven by the excellent durability of the Penagos agricultural line and the strong reception of our grass choppers among farmers."
        : "El inicio en América se dio gracias a la excelente durabilidad de la línea agrícola Penagos y a la gran acogida de nuestras picadoras de pasto entre los agricultores.",
    },

    {
      image:
        "https://penagos.com/wp-content/uploads/2020/11/AGRICULTORES-PENAGOS-am%C3%A9rica-6-1024x1024.jpg",

      titulo: isEnglish
        ? "Eco-friendly coffee processing"
        : "Procesamiento ecológico de café",

      texto: isEnglish
        ? "Water savings, reduced mechanical damage and lower energy consumption allowed Penagos to enter Central American coffee markets with eco-friendly processing technologies."
        : "El ahorro de agua, la reducción del daño mecánico y el menor consumo de energía permitieron a Penagos ingresar a los mercados cafeteros de Centroamérica con tecnologías ecológicas.",
    },

    {
      image:
        "https://penagos.com/wp-content/uploads/2020/11/AGRICULTORES-PENAGOS-am%C3%A9rica-7-1024x1024.jpg",

      titulo: isEnglish
        ? "Coffee processing in Nicaragua"
        : "Procesamiento de café en Nicaragua",

      texto: isEnglish
        ? "La Guadalupana Reserve in Nicaragua has a complete coffee mill integrating the UCBE 2500 Compact Eco-friendly Processing Unit with pre-sorting and transport equipment."
        : "La Reserva La Guadalupana en Nicaragua cuenta con un beneficiadero completo que integra la Unidad Compacta de Beneficio Ecológico UCBE 2500 con equipos de preclasificación y transporte.",
    },

    {
      image:
        "https://penagos.com/wp-content/uploads/2020/11/AGRICULTORES-PENAGOS-am%C3%A9rica-8-1024x1024.jpg",

      titulo: isEnglish
        ? "Technology adapted to coffee growers"
        : "Tecnología adaptada a los caficultores",

      texto: isEnglish
        ? "Coffee growers in Venezuela, Nicaragua and Peru have found in Penagos a solution to improve productivity and coffee quality."
        : "Caficultores de Venezuela, Nicaragua y Perú encuentran en Penagos una solución para mejorar la productividad y la calidad del café.",
    },

    {
      image:
        "https://penagos.com/wp-content/uploads/2020/11/AGRICULTORES-PENAGOS-am%C3%A9rica-9-1024x1024.jpg",

      titulo: isEnglish
        ? "Technology throughout the continent"
        : "Tecnología en todo el continente",

      texto: isEnglish
        ? "Penagos technologies have reached different coffee-producing territories throughout America."
        : "Las tecnologías Penagos han llegado a diferentes territorios productores de café en todo el continente americano.",
    },

    {
      image:
        "https://penagos.com/wp-content/uploads/2020/11/AGRICULTORES-PENAGOS-am%C3%A9rica-10-1024x1024.jpg",

      titulo: isEnglish
        ? "Green bean sorting and pulping"
        : "Clasificación y despulpado de café",

      texto: isEnglish
        ? "DCV technology has allowed Penagos to serve coffee growers in Brazil, the Dominican Republic and Cuba."
        : "La tecnología DCV ha permitido a Penagos atender caficultores de Brasil, República Dominicana y Cuba.",
    },

    {
      image:
        "https://penagos.com/wp-content/uploads/2022/08/AGRICULTORES-PENAGOS-america-19.jpg",

      titulo: isEnglish
        ? "Penagos technology in the Caribbean"
        : "Tecnología Penagos en el Caribe",

      texto: isEnglish
        ? "Penagos equipment has been adapted to the particular conditions of coffee-producing islands."
        : "Los equipos Penagos se han adaptado a las condiciones particulares de las islas productoras de café.",
    },

    {
      image:
        "https://penagos.com/wp-content/uploads/2022/08/AGRICULTORES-PENAGOS-america-16.jpg",

      titulo: isEnglish
        ? "Coffee-growing communities"
        : "Comunidades caficultoras",

      texto: isEnglish
        ? "Our technology accompanies coffee-growing communities seeking greater efficiency and quality in their processes."
        : "Nuestra tecnología acompaña a comunidades caficultoras que buscan mayor eficiencia y calidad en sus procesos.",
    },

    {
      image:
        "https://penagos.com/wp-content/uploads/2022/08/AGRICULTORES-PENAGOS-america-17.jpg",

      titulo: isEnglish
        ? "A growing coffee territory"
        : "Un territorio cafetero que crece",

      texto: isEnglish
        ? "Penagos continues to expand its presence in the American coffee-growing sector."
        : "Penagos continúa ampliando su presencia en el sector cafetero de América.",
    },
  ];

  return (
    <section className="bg-white">

      {/* ====================================================
          HERO
      ==================================================== */}

      <section className="relative overflow-hidden">

        <div
          className="
            mx-auto
            max-w-7xl
            px-6
            py-16
            lg:px-10
            lg:py-24
          "
        >

          <div
            className="
              grid
              items-center
              gap-12
              lg:grid-cols-[0.8fr_1.2fr]
              lg:gap-20
            "
          >

            {/* TEXTO */}

            <div>

              <span
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#009FE3]
                "
              >
                {isEnglish
                  ? "THE AMERICAS"
                  : "AMÉRICA"}
              </span>

              <h2
                className="
                  mt-5
                  text-4xl
                  font-black
                  leading-[1]
                  tracking-[-0.035em]
                  text-[#172B4D]
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                {isEnglish
                  ? "Penagos in the Americas"
                  : "Penagos en América"}
              </h2>

              <div
                className="
                  mt-6
                  h-1
                  w-20
                  rounded-full
                  bg-[#009FE3]
                "
              />

              <p
                className="
                  mt-7
                  max-w-xl
                  text-lg
                  leading-8
                  text-slate-600
                "
              >
                {isEnglish
                  ? "Technology that accompanies farmers and coffee growers, protecting productivity, coffee quality and natural resources."
                  : "Tecnología que acompaña a agricultores y caficultores, protegiendo la productividad, la calidad del café y los recursos naturales."}
              </p>

              <p
                className="
                  mt-5
                  max-w-xl
                  text-base
                  leading-7
                  text-slate-500
                "
              >
                {isEnglish
                  ? "For decades, Penagos has worked alongside agricultural and coffee-growing communities throughout the Americas, adapting technology to the needs of each territory."
                  : "Durante décadas, Penagos ha trabajado junto a comunidades agrícolas y caficultoras de América, adaptando la tecnología a las necesidades de cada territorio."}
              </p>

            </div>


            {/* IMAGEN PRINCIPAL */}

            <div
              className="
                overflow-hidden
                rounded-[2rem]
                bg-slate-100
                shadow-xl
              "
            >

              <img
                src={contenidos[0].image}
                alt={
                  isEnglish
                    ? "Penagos in the Americas"
                    : "Penagos en América"
                }
                className="
                  h-[360px]
                  w-full
                  object-cover
                  transition
                  duration-700
                  hover:scale-105
                  lg:h-[500px]
                "
              />

            </div>

          </div>

        </div>

      </section>


      {/* ====================================================
          PRESENCIA
      ==================================================== */}

      <section
        className="
          border-y
          border-slate-100
          bg-[#f7f9fc]
        "
      >

        <div
          className="
            mx-auto
            max-w-7xl
            px-6
            py-16
            lg:px-10
            lg:py-20
          "
        >

          <div className="mb-10">

            <span
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#009FE3]
              "
            >
              {isEnglish
                ? "OUR PRESENCE"
                : "NUESTRA PRESENCIA"}
            </span>

            <h3
              className="
                mt-4
                text-3xl
                font-black
                text-[#172B4D]
                md:text-4xl
              "
            >
              {isEnglish
                ? "Technology present across the Americas."
                : "Tecnología presente en América."}
            </h3>

            <p
              className="
                mt-4
                max-w-2xl
                text-base
                leading-7
                text-slate-500
              "
            >
              {isEnglish
                ? "Our solutions support farmers and coffee producers in different territories, responding to the particular needs of each community."
                : "Nuestras soluciones acompañan a agricultores y productores de café en diferentes territorios, respondiendo a las necesidades particulares de cada comunidad."}
            </p>

          </div>


          {/* BANDERAS */}

          <div
            className="
              grid
              grid-cols-2
              gap-4
              sm:grid-cols-3
              lg:grid-cols-6
            "
          >

            {paises.map((pais) => (

              <div
                key={pais.code}
                className="
                  flex
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  px-4
                  py-4
                  shadow-sm
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#009FE3]/40
                  hover:shadow-md
                "
              >

                <ReactCountryFlag
                  countryCode={pais.code}
                  svg
                  style={{
                    width: "2rem",
                    height: "1.5rem",
                    objectFit: "cover",
                  }}
                  title={
                    isEnglish
                      ? pais.en
                      : pais.es
                  }
                />

                <span
                  className="
                    text-sm
                    font-semibold
                    text-[#172B4D]
                  "
                >
                  {isEnglish
                    ? pais.en
                    : pais.es}
                </span>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ====================================================
          HISTORIA / EXPERIENCIA
      ==================================================== */}

      <section>

        <div
          className="
            mx-auto
            max-w-7xl
            px-6
            py-20
            lg:px-10
            lg:py-28
          "
        >

          <div
            className="
              mb-12
              max-w-3xl
            "
          >

            <span
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#009FE3]
              "
            >
              {isEnglish
                ? "AMERICAN COFFEE"
                : "CAFÉ AMERICANO"}
            </span>

            <h3
              className="
                mt-4
                text-3xl
                font-black
                leading-tight
                text-[#172B4D]
                md:text-5xl
              "
            >
              {isEnglish
                ? "A history built alongside farmers and coffee growers."
                : "Una historia construida junto a agricultores y caficultores."}
            </h3>

            <p
              className="
                mt-5
                max-w-2xl
                text-lg
                leading-8
                text-slate-500
              "
            >
              {isEnglish
                ? "From agricultural machinery to ecological coffee processing, Penagos technology has evolved alongside the needs of the Americas."
                : "Desde la maquinaria agrícola hasta el procesamiento ecológico del café, la tecnología Penagos ha evolucionado junto a las necesidades de América."}
            </p>

          </div>


          {/* TARJETAS */}

          <div
            className="
              grid
              gap-6
              md:grid-cols-2
            "
          >

            {contenidos.slice(1, 5).map((item) => (

              <article
                key={item.image}
                className="
                  group
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-slate-200
                  bg-white
                  shadow-sm
                  transition
                  duration-500
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >

                {/* IMAGEN */}

                <div
                  className="
                    overflow-hidden
                    bg-slate-100
                  "
                >

                  <img
                    src={item.image}
                    alt={item.titulo}
                    className="
                      h-[300px]
                      w-full
                      object-cover
                      transition
                      duration-700
                      group-hover:scale-105
                    "
                  />

                </div>


                {/* TEXTO */}

                <div className="p-7">

                  <h4
                    className="
                      text-2xl
                      font-black
                      leading-tight
                      text-[#172B4D]
                    "
                  >
                    {item.titulo}
                  </h4>

                  <div
                    className="
                      mt-4
                      h-1
                      w-12
                      rounded-full
                      bg-[#009FE3]
                    "
                  />

                  <p
                    className="
                      mt-5
                      text-base
                      leading-7
                      text-slate-500
                    "
                  >
                    {item.texto}
                  </p>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* ====================================================
          IMPACTO
      ==================================================== */}

      <section
        className="
          bg-[#172B4D]
        "
      >

        <div
          className="
            mx-auto
            max-w-7xl
            px-6
            py-16
            lg:px-10
            lg:py-20
          "
        >

          <div className="mb-12">

            <span
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#009FE3]
              "
            >
              {isEnglish
                ? "OUR IMPACT"
                : "NUESTRO IMPACTO"}
            </span>

            <h3
              className="
                mt-4
                max-w-3xl
                text-3xl
                font-black
                leading-tight
                text-white
                md:text-5xl
              "
            >
              {isEnglish
                ? "Technology that improves coffee processing and protects resources."
                : "Tecnología que mejora el procesamiento del café y protege los recursos."}
            </h3>

          </div>


          <div
            className="
              grid
              gap-10
              md:grid-cols-3
            "
          >

            {/* 60 AÑOS */}

            <div>

              <div
                className="
                  text-5xl
                  font-black
                  text-[#009FE3]
                "
              >
                60+
              </div>

              <p
                className="
                  mt-3
                  text-lg
                  font-semibold
                  text-white
                "
              >
                {isEnglish
                  ? "years of presence in the Americas"
                  : "años de presencia en América"}
              </p>

              <p
                className="
                  mt-2
                  text-sm
                  leading-6
                  text-slate-300
                "
              >
                {isEnglish
                  ? "Working alongside farmers and coffee growers across the continent."
                  : "Trabajando junto a agricultores y caficultores de todo el continente."}
              </p>

            </div>


            {/* COSTA RICA */}

            <div>

              <div
                className="
                  text-5xl
                  font-black
                  text-[#009FE3]
                "
              >
                16
              </div>

              <p
                className="
                  mt-3
                  text-lg
                  font-semibold
                  text-white
                "
              >
                {isEnglish
                  ? "micro-mills with DCV technology"
                  : "microbeneficios con tecnología DCV"}
              </p>

              <p
                className="
                  mt-2
                  text-sm
                  leading-6
                  text-slate-300
                "
              >
                {isEnglish
                  ? "Part of the Costa Rican Micro-mill Revolution."
                  : "Parte de la Revolución de Microbeneficios de Costa Rica."}
              </p>

            </div>


            {/* AGUA */}

            <div>

              <div
                className="
                  text-5xl
                  font-black
                  text-[#009FE3]
                "
              >
                0
              </div>

              <p
                className="
                  mt-3
                  text-lg
                  font-semibold
                  text-white
                "
              >
                {isEnglish
                  ? "water used during pulping"
                  : "agua utilizada durante el despulpado"}
              </p>

              <p
                className="
                  mt-2
                  text-sm
                  leading-6
                  text-slate-300
                "
              >
                {isEnglish
                  ? "Technology designed to reduce water consumption during coffee processing."
                  : "Tecnología diseñada para reducir el consumo de agua durante el procesamiento del café."}
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ====================================================
          COMUNIDADES
      ==================================================== */}

      <section>

        <div
          className="
            mx-auto
            max-w-7xl
            px-6
            py-20
            lg:px-10
            lg:py-28
          "
        >

          <div
            className="
              grid
              items-center
              gap-12
              lg:grid-cols-2
              lg:gap-20
            "
          >

            {/* IMAGEN */}

            <div
              className="
                overflow-hidden
                rounded-[2rem]
                bg-slate-100
                shadow-lg
              "
            >

              <img
                src={contenidos[7].image}
                alt={
                  isEnglish
                    ? "Coffee-growing communities in the Americas"
                    : "Comunidades caficultoras de América"
                }
                className="
                  h-[380px]
                  w-full
                  object-cover
                  transition
                  duration-700
                  hover:scale-105
                  lg:h-[520px]
                "
              />

            </div>


            {/* TEXTO */}

            <div>

              <span
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#009FE3]
                "
              >
                {isEnglish
                  ? "PEOPLE AND TECHNOLOGY"
                  : "PERSONAS Y TECNOLOGÍA"}
              </span>

              <h3
                className="
                  mt-4
                  text-3xl
                  font-black
                  leading-tight
                  text-[#172B4D]
                  md:text-5xl
                "
              >
                {isEnglish
                  ? "Technology that grows with coffee communities."
                  : "Tecnología que crece junto a las comunidades caficultoras."}
              </h3>

              <div
                className="
                  mt-6
                  h-1
                  w-16
                  rounded-full
                  bg-[#009FE3]
                "
              />

              <p
                className="
                  mt-7
                  text-lg
                  leading-8
                  text-slate-600
                "
              >
                {isEnglish
                  ? "Coffee growers throughout the Americas face different agricultural conditions and processing challenges. Penagos technology adapts to these realities, helping communities improve productivity and coffee quality."
                  : "Los caficultores de América enfrentan diferentes condiciones agrícolas y desafíos de procesamiento. La tecnología Penagos se adapta a estas realidades, ayudando a las comunidades a mejorar su productividad y la calidad del café."}
              </p>

              <p
                className="
                  mt-5
                  text-base
                  leading-7
                  text-slate-500
                "
              >
                {isEnglish
                  ? "From Central America to South America and the Caribbean, our equipment has become part of the work of families, cooperatives and coffee-growing communities."
                  : "Desde Centroamérica hasta Sudamérica y el Caribe, nuestros equipos se han convertido en parte del trabajo de familias, cooperativas y comunidades caficultoras."}
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ====================================================
          CIERRE
      ==================================================== */}

      <section className="bg-[#f7f9fc]">

        <div
          className="
            mx-auto
            max-w-4xl
            px-6
            py-20
            text-center
            lg:py-24
          "
        >

          <span
            className="
              text-xs
              font-bold
              uppercase
              tracking-[0.2em]
              text-[#009FE3]
            "
          >
            PENAGOS
          </span>

          <h3
            className="
              mt-5
              text-3xl
              font-black
              leading-tight
              text-[#172B4D]
              md:text-5xl
            "
          >
            {isEnglish
              ? "Technology that grows with the Americas."
              : "Tecnología que crece junto a América."}
          </h3>

          <div
            className="
              mx-auto
              mt-6
              h-1
              w-16
              rounded-full
              bg-[#009FE3]
            "
          />

          <p
            className="
              mx-auto
              mt-7
              max-w-2xl
              text-lg
              leading-8
              text-slate-500
            "
          >
            {isEnglish
              ? "Our commitment is to continue developing solutions that create value for farmers, coffee growers and agricultural communities throughout the continent."
              : "Nuestro compromiso es seguir desarrollando soluciones que generen valor para agricultores, caficultores y comunidades agrícolas de todo el continente."}
          </p>

        </div>

      </section>

    </section>
  );
};

export default America;