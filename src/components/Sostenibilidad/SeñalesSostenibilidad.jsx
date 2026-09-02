import React from "react";

function SeñalesSostenibilidad({ language = "ES" }) {
  const isEnglish = language === "EN";

  const baseUrl =
    "https://penagos.com/wp-content/uploads/2026/09/";

  const ods = Array.from({ length: 17 }, (_, index) => ({
    id: index + 1,
    image: `${baseUrl}${index + 1}.png`,
  }));

  return (
    <section className="relative w-full overflow-hidden bg-[#f8f9fc] py-12 sm:py-14 md:py-16">

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">

        {/* Encabezado */}
        <header className="mx-auto max-w-4xl text-center">

          <h2 className="text-2xl font-bold tracking-tight text-gray-700 sm:text-3xl md:text-4xl">
            {isEnglish
              ? "Penagos and the Sustainable Development Goals"
              : "Penagos y los Objetivos de Desarrollo Sostenible"}
          </h2>

          <div className="mx-auto mt-4 h-[3px] w-14 rounded-full bg-[#302b80]" />

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-6 text-gray-500 md:text-[15px] md:leading-7">
            {isEnglish
              ? "At Penagos, we firmly believe in contributing to sustainable development. That is why we align ourselves with 13 of the 17 Sustainable Development Goals, generating a positive impact on communities and the environment."
              : "En Penagos, creemos firmemente en contribuir al desarrollo sostenible. Por eso, nos alineamos con 13 de los 17 Objetivos de Desarrollo Sostenible, generando un impacto positivo en las comunidades y el medio ambiente."}
          </p>

        </header>

        {/* Indicador */}
        <div className="mx-auto mt-8 flex max-w-xs items-center justify-center gap-3">

          <div className="h-px flex-1 bg-gray-200" />

          <div className="rounded-full bg-white px-4 py-1.5 shadow-sm ring-1 ring-gray-100">

            <span className="text-lg font-black text-[#302b80]">
              13
            </span>

            <span className="ml-1.5 text-xs font-medium text-gray-500">
              {isEnglish ? "of 17 SDGs" : "de 17 ODS"}
            </span>

          </div>

          <div className="h-px flex-1 bg-gray-200" />

        </div>

        {/* ODS */}
        <div className="mx-auto mt-8 grid max-w-4xl grid-cols-4 gap-2.5 sm:grid-cols-5 sm:gap-3 md:grid-cols-9 md:gap-4">

          {ods.map((item) => (
            <article
              key={item.id}
              className="
                group
                flex
                aspect-square
                cursor-pointer
                items-center
                justify-center
                overflow-hidden
                rounded-xl
                bg-white
                p-2
                shadow-sm
                ring-1
                ring-gray-100
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-md
                hover:ring-[#302b80]/20
                sm:p-2.5
              "
            >
              <img
                src={item.image}
                alt={
                  isEnglish
                    ? `Sustainable Development Goal ${item.id}`
                    : `Objetivo de Desarrollo Sostenible ${item.id}`
                }
                loading="lazy"
                className="
                  h-full
                  w-full
                  object-contain
                  transition-transform
                  duration-300
                  group-hover:scale-105
                "
              />
            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default SeñalesSostenibilidad;

