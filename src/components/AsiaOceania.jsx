import React from "react";
import ReactCountryFlag from "react-country-flag";

// ============================================================
// ASIA Y OCEANÍA
// ============================================================

const AsiaOceania = ({ language = "ES" }) => {
  const isEnglish = language === "EN";

  // ==========================================================
  // PAÍSES
  // ==========================================================

  const paises = [
    {
      code: "VN",
      es: "Vietnam",
      en: "Vietnam",
    },
    {
      code: "ID",
      es: "Indonesia",
      en: "Indonesia",
    },
    {
      code: "PH",
      es: "Filipinas",
      en: "Philippines",
    },
    {
      code: "AU",
      es: "Australia",
      en: "Australia",
    },
    {
      code: "NZ",
      es: "Nueva Zelanda",
      en: "New Zealand",
    },
    {
      code: "PG",
      es: "Papúa Nueva Guinea",
      en: "Papua New Guinea",
    },
  ];

  // ==========================================================
  // CONTENIDO
  // ==========================================================

  const contenidos = [
    {
      image:
        "https://penagos.com/wp-content/uploads/2020/11/AGRICULTORES-PENAGOS-ASIA-1-1-1024x1022.jpg",

      titulo: isEnglish
        ? "Our technologies for Arabica and Robusta coffee in Asia"
        : "Nuestras tecnologías para café Arábica y Robusta en Asia",

      texto: isEnglish
        ? "The versatility of our equipment made coffee entrepreneurs from countries in Asia and Oceania set their sights on Penagos. Robusta coffee, mostly produced on this continent, requires special treatment. At Penagos we are able to adapt to the needs of customers on these continents and offer them our technologies for Arabica and Robusta coffee."
        : "La versatilidad de nuestros equipos hizo que empresarios cafeteros de países de Asia y Oceanía pusieran sus ojos en Penagos. El café Robusta, producido principalmente en este continente, requiere un tratamiento especial. En Penagos somos capaces de adaptarnos a las necesidades de nuestros clientes en estos continentes y ofrecerles nuestras tecnologías para café Arábica y Robusta.",
    },

    {
      image:
        "https://penagos.com/wp-content/uploads/2020/11/AGRICULTORES-PENAGOS-ASIA-5-1-1024x721.jpg",

      titulo: isEnglish
        ? "Papua New Guinea: protecting coffee quality"
        : "Papúa Nueva Guinea: preservando la calidad del café",

      texto: isEnglish
        ? "In Papua New Guinea they chose Penagos for the wet processing of Arabica coffee. The technology they used reduces water consumption and contamination while preserving the quality of the coffee in the cup."
        : "En Papúa Nueva Guinea eligieron Penagos para el beneficio húmedo de café Arábica. La tecnología utilizada reduce el consumo de agua y la contaminación mientras preserva la calidad del café en taza.",
    },

    {
      image:
        "https://penagos.com/wp-content/uploads/2020/11/AGRICULTORES-PENAGOS-ASIA-11-1.jpg",

      titulo: isEnglish
        ? "Vietnam: maximum water savings"
        : "Vietnam: máximo ahorro de agua",

      texto: isEnglish
        ? "In Vietnam, one of the largest Arabica coffee producers in the country chose Penagos for the construction of a Coffee Processing Center with maximum water savings. The technology does not use water in the reception and transport of the coffee, helping preserve natural resources."
        : "En Vietnam, uno de los mayores productores de café Arábica del país eligió Penagos para la construcción de un Centro de Procesamiento de Café con máximo ahorro de agua. La tecnología no utiliza agua en la recepción y transporte del café, contribuyendo a la preservación de los recursos naturales.",
    },

    {
      image:
        "https://penagos.com/wp-content/uploads/2020/11/AGRICULTORES-PENAGOS-ASIA-9-1.jpg",

      titulo: isEnglish
        ? "Indonesia: preserving the quality of the cup"
        : "Indonesia: preservando la calidad de la taza",

      texto: isEnglish
        ? "Indonesia is an island country in Southeast Asia where high-quality Arabica coffee with medium acidity is found. It grows in the mountainous areas thanks to the fertility of its lands. Their coffee cherries are processed with our selective collection technology, allowing them to preserve the quality of their cup of coffee."
        : "Indonesia es un país insular del sudeste asiático donde se encuentra café Arábica de alta calidad y acidez media. Crece en las zonas montañosas gracias a la fertilidad de sus tierras. Su café cereza es procesado con nuestra tecnología de recolección selectiva, lo que les ha permitido preservar la calidad de su taza de café.",
    },

    {
      image:
        "https://penagos.com/wp-content/uploads/2020/11/AGRICULTORES-PENAGOS-ASIA-10-1.jpg",

      titulo: isEnglish
        ? "Thailand: a coffee recognized worldwide"
        : "Tailandia: un café reconocido mundialmente",

      texto: isEnglish
        ? "We are proud to have among our customers a coffee company that has positioned Arabica coffee from Thailand as one of the best in the world since 2007."
        : "Nos sentimos orgullosos de contar entre nuestros clientes con una compañía cafetera que ha posicionado el café Arábica de Tailandia como uno de los mejores del mundo desde 2007.",
    },

    {
      image:
        "https://penagos.com/wp-content/uploads/2020/11/AGRICULTORES-PENAGOS-ASIA-8-1.jpg",

      titulo: isEnglish
        ? "India: Arabica and Robusta technology"
        : "India: tecnología para Arábica y Robusta",

      texto: isEnglish
        ? "Similarly, one of the largest coffee groups in the world uses Penagos technology to process Robusta and Arabica coffee in India."
        : "De igual manera, uno de los grupos cafeteros más grandes del mundo utiliza tecnología Penagos para procesar café Robusta y Arábica en India.",
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
                  ? "ASIA & OCEANIA"
                  : "ASIA Y OCEANÍA"}
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
                  ? "Penagos in Asia and Oceania"
                  : "Penagos en Asia y Oceanía"}
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
                  ? "Technology that adapts to different coffee cultures, helping producers protect water, productivity and coffee quality."
                  : "Tecnología que se adapta a diferentes culturas cafeteras, ayudando a los productores a proteger el agua, la productividad y la calidad del café."}
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
                  ? "Our versatility allows us to offer solutions for both Arabica and Robusta coffee, responding to the particular realities of each territory."
                  : "Nuestra versatilidad nos permite ofrecer soluciones tanto para café Arábica como Robusta, respondiendo a las realidades particulares de cada territorio."}
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
                    ? "Penagos in Asia and Oceania"
                    : "Penagos en Asia y Oceanía"
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
                ? "Technology present across Asia and Oceania."
                : "Tecnología presente en Asia y Oceanía."}
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
                ? "Our solutions reach different coffee-producing regions, adapting to the needs of each territory and producer."
                : "Nuestras soluciones llegan a diferentes regiones productoras de café, adaptándose a las necesidades de cada territorio y productor."}
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
                ? "ASIAN COFFEE"
                : "CAFÉ ASIÁTICO"}
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
                ? "A partnership built around coffee."
                : "Una alianza construida alrededor del café."}
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
                ? "From water-efficient wet processing to selective collection, Penagos technology adapts to the diversity of Asian coffee production."
                : "Desde el beneficio húmedo eficiente en el uso del agua hasta la recolección selectiva, la tecnología Penagos se adapta a la diversidad de la producción cafetera asiática."}
            </p>

          </div>


          {/* ==================================================
              TARJETAS
          ================================================== */}

          <div
            className="
              grid
              gap-6
              md:grid-cols-2
            "
          >

            {contenidos.slice(1).map((item) => (

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
                ? "Technology adapted to the diversity of Asian coffee."
                : "Tecnología adaptada a la diversidad del café asiático."}
            </h3>

            </div>


            <div
            className="
                grid
                gap-10
                md:grid-cols-3
            "
            >

            {/* ==================================================
                ARÁBICA + ROBUSTA
            ================================================== */}

            <div>

                <div
                className="
                    text-3xl
                    font-black
                    leading-tight
                    text-[#009FE3]
                    md:text-4xl
                "
                >
                {isEnglish
                    ? "Arabica + Robusta"
                    : "Arábica + Robusta"}
                </div>

                <p
                className="
                    mt-4
                    text-lg
                    font-semibold
                    leading-7
                    text-white
                "
                >
                {isEnglish
                    ? "Technology adaptable to the main coffee varieties of the region."
                    : "Tecnología adaptable a las principales variedades de café de la región."}
                </p>

            </div>


            {/* ==================================================
                AHORRO DE AGUA
            ================================================== */}

            <div>

                <div
                className="
                    text-3xl
                    font-black
                    leading-tight
                    text-[#009FE3]
                    md:text-4xl
                "
                >
                {isEnglish
                    ? "Water efficiency"
                    : "Ahorro de agua"}
                </div>

                <p
                className="
                    mt-4
                    text-lg
                    font-semibold
                    leading-7
                    text-white
                "
                >
                {isEnglish
                    ? "Solutions designed to reduce water consumption and protect natural resources."
                    : "Soluciones diseñadas para reducir el consumo de agua y proteger los recursos naturales."}
                </p>

            </div>


            {/* ==================================================
                CALIDAD EN TAZA
            ================================================== */}

            <div>

                <div
                className="
                    text-3xl
                    font-black
                    leading-tight
                    text-[#009FE3]
                    md:text-4xl
                "
                >
                {isEnglish
                    ? "Cup quality"
                    : "Calidad en taza"}
                </div>

                <p
                className="
                    mt-4
                    text-lg
                    font-semibold
                    leading-7
                    text-white
                "
                >
                {isEnglish
                    ? "Technology that helps preserve the characteristics and quality of coffee during processing."
                    : "Tecnología que ayuda a preservar las características y la calidad del café durante su procesamiento."}
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
                src={contenidos[4].image}
                alt={
                  isEnglish
                    ? "Coffee production in Asia"
                    : "Producción de café en Asia"
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
                  ? "Technology that grows with Asian coffee communities."
                  : "Tecnología que crece junto a las comunidades cafeteras asiáticas."}
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
                  ? "Behind every coffee processing project there are producers, companies and communities looking for better ways to protect quality and natural resources."
                  : "Detrás de cada proyecto de procesamiento de café hay productores, empresas y comunidades que buscan mejores formas de proteger la calidad y los recursos naturales."}
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
                  ? "From Papua New Guinea and Indonesia to Vietnam, Thailand and India, Penagos technology continues to adapt to the diversity of coffee production across the region."
                  : "Desde Papúa Nueva Guinea e Indonesia hasta Vietnam, Tailandia e India, la tecnología Penagos continúa adaptándose a la diversidad de la producción cafetera de la región."}
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
              ? "Technology that grows with coffee communities across Asia and Oceania."
              : "Tecnología que crece junto a las comunidades cafeteras de Asia y Oceanía."}
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
              ? "Our commitment is to continue developing solutions that create value for coffee producers while protecting the quality of their coffee and the natural resources of their territories."
              : "Nuestro compromiso es seguir desarrollando soluciones que generen valor para los productores de café, protegiendo la calidad de su producto y los recursos naturales de sus territorios."}
          </p>

        </div>

      </section>

    </section>
  );
};

export default AsiaOceania;