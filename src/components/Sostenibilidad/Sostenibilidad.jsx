import React from "react";

const Sostenibilidad = ({ language = "ES" }) => {
  const isEnglish = language === "EN";

  const t = isEnglish
    ? {
        titulo: "Our commitment to sustainability",
        descripcion:
          "We develop innovative solutions, producing responsibly and guaranteeing the well-being of our people, while measuring and reducing our Carbon Footprint through sustainable actions.",

        huella: "Carbon\nFootprint",
        produccion: "Responsible\nproduction",
        tecnologia: "Green\ntechnology",
        corazon: "The heart\nof Penagos",

        agua: "+2.000",
        aguaTexto:
          "million liters of water saved per year, in more than 200 processing plants.",

        familias: "+90.000",
        familiasTexto: "families benefited",

        energia: "36%",
        energiaTexto: "Energy savings with Penagos technology",
      }
    : {
        titulo: "Nuestro compromiso con la sostenibilidad",
        descripcion:
          "Desarrollamos soluciones innovadoras, produciendo responsablemente y garantizando el bienestar de nuestra gente, mientras medimos y reducimos nuestra Huella de Carbono con acciones sostenibles.",

        huella: "Huella\nde Carbono",
        produccion: "Producción\nresponsable",
        tecnologia: "Tecnología\nverde",
        corazon: "El corazón\nde Penagos",

        agua: "+2.000",
        aguaTexto:
          "millones de litros de agua ahorrados al año, en más de 200 Centrales de procesamiento.",

        familias: "+90.000",
        familiasTexto: "familias beneficiadas",

        energia: "36%",
        energiaTexto: "Ahorro de energía con tecnología Penagos",
      };

  const baseUrl =
    "https://penagos.com/wp-content/uploads/2026/09/";

  const imagenes = {
    fondo: `${baseUrl}P1a.jpg`,
    huella: `${baseUrl}P1b.jpg`,
    produccion: `${baseUrl}P1c.jpg`,
    tecnologia: `${baseUrl}P1d.jpg`,
    corazon: `${baseUrl}P1e.jpg`,
    agua: `${baseUrl}P1f.jpg`,
    energia: `${baseUrl}P1g.jpg`,
    familias: `${baseUrl}P1h.jpg`,
  };

  const pilares = [
    {
      image: imagenes.huella,
      title: t.huella,
    },
    {
      image: imagenes.produccion,
      title: t.produccion,
    },
    {
      image: imagenes.tecnologia,
      title: t.tecnologia,
    },
    {
      image: imagenes.corazon,
      title: t.corazon,
    },
  ];

  const estadisticas = [
    {
      value: t.agua,
      text: t.aguaTexto,
      image: imagenes.agua,
      width: "w-[210px] md:w-[250px]",
    },
    {
      value: t.energia,
      text: t.energiaTexto,
      image: imagenes.energia,
      width: "w-[220px] md:w-[270px]",
    },
    {
      value: t.familias,
      text: t.familiasTexto,
      image: imagenes.familias,
      width: "w-[210px] md:w-[250px]",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white">

      {/* Fondo sutil */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.018]">
        <img
          src={imagenes.fondo}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      {/* Encabezado */}
      <header className="relative mx-auto max-w-5xl px-6 pt-14 text-center md:pt-20">

        <h2 className="text-2xl font-bold tracking-tight text-gray-700 sm:text-3xl md:text-4xl lg:text-[42px]">
          {t.titulo}
        </h2>

        <div className="mx-auto mt-5 h-[3px] w-16 rounded-full bg-[#302b80]" />

        <p className="mx-auto mt-6 max-w-4xl text-sm leading-6 text-gray-500 sm:text-[15px] md:leading-7">
          {t.descripcion}
        </p>

      </header>

      {/* Pilares */}
      <div className="relative mx-auto mt-10 max-w-6xl px-5 sm:px-6 md:mt-14">

        <div className="grid grid-cols-2 overflow-hidden rounded-2xl shadow-xl md:grid-cols-4">

          {pilares.map((item, index) => (
            <article
              key={index}
              className="
                group
                relative
                h-[190px]
                cursor-pointer
                overflow-hidden
                sm:h-[225px]
                md:h-[280px]
              "
            >
              <img
                src={item.image}
                alt={item.title.replace(/\n/g, " ")}
                loading="lazy"
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-110
                "
              />

              {/* Overlay */}
              <div
                className="
                  absolute
                  inset-0
                  bg-black/25
                  transition-all
                  duration-500
                  group-hover:bg-[#302b80]/55
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/85
                  via-black/25
                  to-transparent
                "
              />

              {/* Título */}
              <div
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  p-5
                  text-center
                  transition-transform
                  duration-500
                  group-hover:-translate-y-2
                  md:p-6
                "
              >
                <h3
                  className="
                    whitespace-pre-line
                    text-base
                    font-bold
                    leading-tight
                    text-white
                    drop-shadow-lg
                    sm:text-lg
                    md:text-[24px]
                  "
                >
                  {item.title}
                </h3>

                <div
                  className="
                    mx-auto
                    mt-3
                    h-[3px]
                    w-8
                    rounded-full
                    bg-white
                    transition-all
                    duration-500
                    group-hover:w-16
                  "
                />
              </div>
            </article>
          ))}

        </div>
      </div>

      {/* Estadísticas */}
      <div className="relative mx-auto max-w-6xl px-5 py-12 sm:px-6 md:py-16">

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

          {estadisticas.map((item, index) => (
            <article
              key={index}
              className="
                group
                relative
                flex
                min-h-[340px]
                cursor-pointer
                flex-col
                items-center
                justify-between
                overflow-hidden
                rounded-2xl
                border
                border-gray-100
                bg-white
                px-6
                pt-9
                text-center
                shadow-sm
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-xl
              "
            >
              {/* Línea superior */}
              <div
                className="
                  absolute
                  left-0
                  right-0
                  top-0
                  h-1
                  origin-left
                  scale-x-0
                  bg-[#302b80]
                  transition-transform
                  duration-500
                  group-hover:scale-x-100
                "
              />

              {/* Contenido */}
              <div className="relative z-10">

                <div
                  className="
                    text-5xl
                    font-black
                    tracking-tight
                    text-[#302b80]
                    transition-transform
                    duration-500
                    group-hover:scale-105
                    md:text-6xl
                  "
                >
                  {item.value}
                </div>

                <div
                  className="
                    mx-auto
                    mt-3
                    h-[3px]
                    w-10
                    rounded-full
                    bg-[#302b80]
                    transition-all
                    duration-500
                    group-hover:w-16
                  "
                />

                <p
                  className="
                    mx-auto
                    mt-4
                    max-w-[250px]
                    text-xs
                    leading-5
                    text-gray-500
                    md:text-sm
                    md:leading-6
                  "
                >
                  {item.text}
                </p>

              </div>

              {/* Imagen */}
              <img
                src={item.image}
                alt=""
                loading="lazy"
                className={`
                  mt-5
                  ${item.width}
                  object-contain
                  opacity-60
                  transition-all
                  duration-700
                  ease-out
                  group-hover:scale-105
                  group-hover:opacity-90
                `}
              />

            </article>
          ))}

        </div>
      </div>

    </section>
  );
};

export default Sostenibilidad;

