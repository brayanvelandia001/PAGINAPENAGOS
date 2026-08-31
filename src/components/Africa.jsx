import React from "react";
import ReactCountryFlag from "react-country-flag";

// ============================================================
// ÁFRICA
// ============================================================

const Africa = ({ language = "ES" }) => {
  const isEnglish = language === "EN";

  // ==========================================================
  // PAÍSES
  // ==========================================================

  const paises = [
    {
      code: "RW",
      es: "Ruanda",
      en: "Rwanda",
    },
    {
      code: "BI",
      es: "Burundi",
      en: "Burundi",
    },
    {
      code: "ET",
      es: "Etiopía",
      en: "Ethiopia",
    },
    {
      code: "KE",
      es: "Kenia",
      en: "Kenya",
    },
    {
      code: "UG",
      es: "Uganda",
      en: "Uganda",
    },
    {
      code: "TZ",
      es: "Tanzania",
      en: "Tanzania",
    },
  ];

  // ==========================================================
  // CONTENIDO
  // ==========================================================

  const contenidos = [
    {
      image:
        "https://penagos.com/wp-content/uploads/2020/11/Imagen-africa-penagos-1-1-1024x1024.jpg",

      titulo: isEnglish
        ? "Technology for African farmers"
        : "Tecnología para los agricultores africanos",

      texto: isEnglish
        ? "For more than 60 years, Penagos has brought specialized coffee processing technology to Africa, helping farmers reduce water consumption while preserving coffee quality from harvest to cup."
        : "Durante más de 60 años, Penagos ha llevado a África tecnología especializada para el procesamiento de café, ayudando a los caficultores a reducir el consumo de agua y conservar la calidad desde la cosecha hasta la taza.",
    },

    {
      image:
        "https://penagos.com/wp-content/uploads/2020/12/Nordick-Approach-Burundi-Africa-Penagos-wet-mill-coffee-penagos3-1024x1024.png",

      titulo: isEnglish
        ? "More productivity, less water"
        : "Más productividad, menos agua",

      texto: isEnglish
        ? "Penagos compact ecological coffee processing units have helped communities in Rwanda increase their income while saving water and protecting coffee quality."
        : "Las unidades compactas de beneficio ecológico de Penagos han ayudado a comunidades de Ruanda a aumentar sus ingresos, ahorrar agua y preservar la calidad del café.",
    },

    {
      image:
        "https://penagos.com/wp-content/uploads/2020/11/Imagen-africa-penagos-6-1-600x600.jpg",

      titulo: isEnglish
        ? "Technology that strengthens communities"
        : "Tecnología que fortalece comunidades",

      texto: isEnglish
        ? "More than 300 cooperatives in Africa use Penagos technology for wet coffee processing, improving productivity and creating opportunities to access international markets."
        : "Más de 300 cooperativas en África utilizan tecnología Penagos para el procesamiento húmedo del café, mejorando su productividad y generando oportunidades para acceder a mercados internacionales.",
    },

    {
      image:
        "https://penagos.com/wp-content/uploads/2020/11/Imagen-africa-penagos-7-1-600x600.jpg",

      titulo: isEnglish
        ? "Women at the heart of coffee"
        : "Mujeres protagonistas del café",

      texto: isEnglish
        ? "African women play a fundamental role in coffee cultivation, harvesting, pulping and drying, making them key users of Penagos technology."
        : "Las mujeres africanas tienen un papel fundamental en el cultivo, cosecha, despulpado y secado del café, siendo protagonistas en el uso de la tecnología Penagos.",
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
                ÁFRICA
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
                  ? "Penagos in Africa"
                  : "Penagos en África"}
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
                  ? "Technology that supports farmers and coffee growers while protecting water, productivity and coffee quality."
                  : "Tecnología que acompaña a agricultores y caficultores, protegiendo el agua, la productividad y la calidad del café."}
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
                  ? "For decades, Penagos has worked alongside African coffee communities, adapting technology to their needs and agricultural realities."
                  : "Durante décadas, Penagos ha trabajado junto a las comunidades caficultoras africanas, adaptando la tecnología a sus necesidades y realidades agrícolas."}
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
                    ? "Penagos in Africa"
                    : "Penagos en África"
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
                ? "Technology present across Africa."
                : "Tecnología presente en África."}
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
                ? "Our solutions support coffee producers in different regions, responding to the particular needs of each community."
                : "Nuestras soluciones acompañan a productores de café en diferentes regiones, respondiendo a las necesidades particulares de cada comunidad."}
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
                ? "AFRICAN COFFEE"
                : "CAFÉ AFRICANO"}
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
                ? "From coffee processing to water efficiency, our technology contributes to more productive and sustainable communities."
                : "Desde el procesamiento del café hasta el uso eficiente del agua, nuestra tecnología contribuye a comunidades más productivas y sostenibles."}
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
                ? "Technology with a real impact on coffee communities."
                : "Tecnología con un impacto real en las comunidades caficultoras."}
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
                  ? "years supporting African agriculture"
                  : "años acompañando la agricultura africana"}
              </p>

            </div>


            {/* 300 COOPERATIVAS */}

            <div>

              <div
                className="
                  text-5xl
                  font-black
                  text-[#009FE3]
                "
              >
                300+
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
                  ? "cooperatives using Penagos technology"
                  : "cooperativas utilizan tecnología Penagos"}
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
                0.2 L
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
                  ? "of water per kg of coffee during demucilaging"
                  : "de agua por kg de café durante el desmucilaginado"}
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
                src={contenidos[3].image}
                alt={
                  isEnglish
                    ? "African women in coffee production"
                    : "Mujeres africanas en la producción de café"
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
                  ? "Technology that empowers coffee communities."
                  : "Tecnología que fortalece a las comunidades caficultoras."}
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
                  ? "Women and families play a central role in African coffee production. Penagos technology supports their daily work, helping improve processing, productivity and the responsible use of water."
                  : "Las mujeres y las familias tienen un papel fundamental en la producción de café en África. La tecnología Penagos acompaña su trabajo diario, ayudando a mejorar el procesamiento, la productividad y el uso responsable del agua."}
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
                  ? "Behind every machine there are people, communities and stories that give meaning to our technology."
                  : "Detrás de cada máquina hay personas, comunidades e historias que dan sentido a nuestra tecnología."}
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
              ? "Technology that grows with African coffee communities."
              : "Tecnología que crece junto a las comunidades caficultoras africanas."}
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
              ? "Our commitment is to continue developing solutions that create value for farmers, coffee producers and their communities."
              : "Nuestro compromiso es seguir desarrollando soluciones que generen valor para los agricultores, caficultores y sus comunidades."}
          </p>

        </div>

      </section>

    </section>
  );
};

export default Africa;