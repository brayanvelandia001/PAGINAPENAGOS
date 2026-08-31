import React, { useEffect, useState } from "react";

import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  X,
  ZoomIn,
} from "lucide-react";

// ============================================================
// COLOMBIA
// PENAGOS POR EL MUNDO
// ============================================================

const Colombia = ({ language = "ES" }) => {
  const isEnglish = language === "EN";

  // ==========================================================
  // MODAL
  // ==========================================================

  const [imagenSeleccionada, setImagenSeleccionada] =
    useState(null);

  // ==========================================================
  // CERRAR MODAL CON ESC
  // ==========================================================

  useEffect(() => {
    const manejarEscape = (event) => {
      if (event.key === "Escape") {
        setImagenSeleccionada(null);
      }
    };

    if (imagenSeleccionada) {
      document.addEventListener("keydown", manejarEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", manejarEscape);
      document.body.style.overflow = "";
    };
  }, [imagenSeleccionada]);

  // ==========================================================
  // MAQUINARIA AGRÍCOLA
  // ==========================================================

  const maquinaria = [
    {
      image:
        "https://penagos.com/wp-content/uploads/2021/03/Img-8-1024x1024.jpg",
      title: isEnglish
        ? "Forage choppers delivered to farmers in Boyacá"
        : "Trituradores Picadores entregados a ganaderos de Boyacá",
      description: isEnglish
        ? "Forage choppers were delivered to livestock farmers in the department of Boyacá."
        : "Trituradores Picadores fueron entregados a ganaderos en el departamento de Boyacá.",
    },

    {
      image:
        "https://penagos.com/wp-content/uploads/2021/03/Img-1-1024x1024.jpg",
      title: isEnglish
        ? "More than 300 forage choppers in Meta"
        : "Más de 300 picapastos en Meta",
      description: isEnglish
        ? "More than 300 forage choppers were delivered to milk producers in Meta."
        : "Entregamos más de 300 picapastos para productores de leche del Meta.",
    },

    {
      image:
        "https://penagos.com/wp-content/uploads/2021/03/Img-2-1024x1024.jpg",
      title: isEnglish
        ? "More than 300 machines delivered in Atlántico"
        : "Más de 300 picapastos y ensiladoras en Atlántico",
      description: isEnglish
        ? "More than 300 forage choppers and manual silage machines were delivered in Atlántico."
        : "Más de 300 picapastos y Ensiladoras Manuales fueron entregadas en el Atlántico.",
    },

    {
      image:
        "https://penagos.com/wp-content/uploads/2021/03/Img-3-1024x1024.jpg",
      title: isEnglish
        ? "Supporting Colombian farmers"
        : "Apoyo a agricultores colombianos",
      description: isEnglish
        ? "Forage choppers were delivered as part of support programs for Colombian farmers."
        : "Picapastos fueron entregadas como parte de programas de apoyo a agricultores colombianos.",
    },

    {
      image:
        "https://penagos.com/wp-content/uploads/2021/03/Img-4-1024x1024.jpg",
      title: isEnglish
        ? "15 PP 300R machines in Caquetá"
        : "15 Picapastos PP 300R en Caquetá",
      description: isEnglish
        ? "15 PP 300R forage choppers were delivered to farmers and livestock producers in Caquetá."
        : "15 Picapastos PP 300R entregadas en Caquetá para agricultores y ganaderos.",
    },

    {
      image:
        "https://penagos.com/wp-content/uploads/2021/03/Img-5-1024x1024.jpg",
      title: isEnglish
        ? "More than 100 PP 300 R machines in Casanare"
        : "Más de 100 Picapastos PP 300 R en Casanare",
      description: isEnglish
        ? "More than 100 PP 300 R forage choppers were delivered in Casanare."
        : "Más de 100 Picapastos PP 300 R fueron entregadas en Casanare.",
    },

    {
      image:
        "https://penagos.com/wp-content/uploads/2021/03/Img-6-1024x1024.jpg",
      title: isEnglish
        ? "More than 800 PP 300R machines in Córdoba"
        : "Más de 800 Picapastos PP 300R en Córdoba",
      description: isEnglish
        ? "More than 800 PP 300R forage choppers were delivered in Córdoba."
        : "Se entregaron más de 800 Picapastos PP 300R en Córdoba.",
    },

    {
      image:
        "https://penagos.com/wp-content/uploads/2021/03/Img-7-1024x1024.jpg",
      title: isEnglish
        ? "More than 15 PP 300R machines in Boyacá"
        : "Más de 15 Picapastos PP 300R en Boyacá",
      description: isEnglish
        ? "More than 15 PP 300R forage choppers were delivered in Boyacá."
        : "En Boyacá se entregaron más de 15 Picapastos PP 300R.",
    },
  ];

  // ==========================================================
  // EQUIPOS PARA CAFÉ
  // ==========================================================

  const cafe = [
    {
      image:
        "https://penagos.com/wp-content/uploads/2021/03/Img-13-1024x1024.jpg",
      title: isEnglish
        ? "Nabusimake coffee processing"
        : "Procesamiento de café de los Nabusimake",
      description: isEnglish
        ? "The Nabusimake community processes coffee in Santa Marta using Penagos horizontal coffee pulpers."
        : "Los Nabusimake procesan su café en Santa Marta con Despulpadoras Horizontales Penagos.",
    },

    {
      image:
        "https://penagos.com/wp-content/uploads/2021/03/Img-9-1024x1024.jpg",
      title: isEnglish
        ? "More than 35 classifier modules in Risaralda"
        : "Más de 35 módulos clasificadores en Risaralda",
      description: isEnglish
        ? "More than 35 classifier modules were delivered to coffee-growing families in Risaralda."
        : "Más de 35 módulos clasificadores fueron entregados a familias cafeteras del Risaralda.",
    },

    {
      image:
        "https://penagos.com/wp-content/uploads/2021/03/Img-10-1024x1024.jpg",
      title: isEnglish
        ? "More than 40 horizontal coffee pulpers in Boyacá"
        : "Más de 40 despulpadoras horizontales en Boyacá",
      description: isEnglish
        ? "More than 40 horizontal coffee pulpers were delivered in Boyacá for coffee processing."
        : "En Boyacá se entregaron más de 40 despulpadoras Horizontales para el procesamiento del café.",
    },

    {
      image:
        "https://penagos.com/wp-content/uploads/2021/03/Img-11-1024x1024.jpg",
      title: isEnglish
        ? "More than 150 horizontal coffee pulpers in Risaralda"
        : "Más de 150 despulpadoras horizontales en Risaralda",
      description: isEnglish
        ? "More than 150 horizontal coffee pulpers were delivered for coffee processing in Risaralda."
        : "Más de 150 Despulpadoras Horizontales fueron entregadas para el café en Risaralda.",
    },

    {
      image:
        "https://penagos.com/wp-content/uploads/2021/03/Img-12-1024x1024.jpg",
      title: isEnglish
        ? "More than 50 classifier modules in Boyacá"
        : "Más de 50 módulos clasificadores en Boyacá",
      description: isEnglish
        ? "More than 50 classifier modules were delivered in Boyacá."
        : "En Boyacá entregamos más de 50 Módulos Clasificadores.",
    },
  ];

  // ==========================================================
  // RENDER
  // ==========================================================

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
                COLOMBIA
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
                  ? "Penagos around the world, Colombia"
                  : "Penagos por el mundo, Colombia"}
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
                  ? "Colombia is our home. For decades, Penagos has accompanied coffee growers, livestock farmers and agricultural producers throughout the country."
                  : "Colombia es nuestro hogar. Durante décadas, Penagos ha acompañado a caficultores, ganaderos y agricultores a lo largo de todo el país."}
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
                  ? "Our journey through Colombia has allowed us to reach every corner of the territory and reaffirm our commitment to the development of the countryside."
                  : "Nuestro recorrido por Colombia nos ha permitido llegar a cada rincón del territorio y reafirmar nuestro compromiso con el desarrollo del campo."}
              </p>

            </div>


            {/* IMAGEN */}

            <button
              type="button"
              onClick={() =>
                setImagenSeleccionada(
                  "https://penagos.com/wp-content/uploads/2020/11/Bot%C3%B3n-Penagos-en-el-mundo-1024x813.jpg"
                )
              }
              className="
                group
                relative
                overflow-hidden
                rounded-[2rem]
                bg-slate-100
                text-left
                shadow-xl
                focus:outline-none
                focus:ring-4
                focus:ring-[#009FE3]/20
              "
            >

              <img
                src="https://penagos.com/wp-content/uploads/2020/11/Bot%C3%B3n-Penagos-en-el-mundo-1024x813.jpg"
                alt={
                  isEnglish
                    ? "Penagos around the world - Colombia"
                    : "Penagos por el mundo - Colombia"
                }
                className="
                  h-[360px]
                  w-full
                  object-cover
                  transition
                  duration-700
                  group-hover:scale-105
                  lg:h-[500px]
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#172B4D]/60
                  via-transparent
                  to-transparent
                "
              />

              <div
                className="
                  absolute
                  bottom-6
                  right-6
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  text-[#172B4D]
                  shadow-lg
                  transition
                  group-hover:scale-110
                "
              >
                <ZoomIn size={20} />
              </div>

            </button>

          </div>

        </div>

      </section>


      {/* ====================================================
          NUESTRA HISTORIA
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

          <div
            className="
              grid
              gap-12
              lg:grid-cols-[0.65fr_1.35fr]
              lg:gap-20
            "
          >

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
                  ? "OUR STORY"
                  : "NUESTRA HISTORIA"}
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
                  ? "A commitment that began at home."
                  : "Un compromiso que comenzó en casa."}
              </h3>

            </div>


            <div
              className="
                space-y-6
                text-lg
                leading-8
                text-slate-600
              "
            >

              <p>
                {isEnglish
                  ? "Penagos' commitment to Colombia has always been present since the conception of the Company. It is our home, and we are grateful for allowing us to reach all its municipalities, where our machines are part of the history of coffee growers, livestock farmers, agricultural producers and everyone who looks to Penagos for the support of an innovative brand."
                  : "El compromiso de Penagos con Colombia siempre ha estado presente desde la concepción de la Compañía, es nuestro hogar y le debemos gratitud por permitirnos llegar a todos sus municipios, donde las máquinas hacen parte de la historia de caficultores, ganaderos, agricultores y todos aquellos que buscan en Penagos el respaldo de una marca innovadora."}
              </p>

              <p>
                {isEnglish
                  ? "Our journey through Colombia has taken us to every corner of our territory and reaffirmed our mission with those who cultivate the land: contributing to the development of the countryside so that it becomes a source of sustainable progress for the country."
                  : "El recorrido de Penagos por Colombia nos ha llevado a conocer cada rincón de nuestro territorio y a reafirmar nuestra misión con los cultivadores de la tierra: contribuir al desarrollo del campo para que sea fuente de progreso sostenible en el país."}
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ====================================================
          MAQUINARIA AGRÍCOLA
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
              max-w-4xl
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
                ? "AGRICULTURAL MACHINERY"
                : "MAQUINARIA AGRÍCOLA"}
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
                ? "Machines that have traveled throughout Colombia."
                : "Máquinas que han recorrido toda Colombia."}
            </h3>

            <p
              className="
                mt-5
                max-w-3xl
                text-lg
                leading-8
                text-slate-500
              "
            >
              {isEnglish
                ? "Forage choppers, silage machines and shredders have crossed rivers and mountains. They have been transported by trucks, mules, boats and canoes to reach their destinations."
                : "Picapastos, ensiladoras y trituradores picadores han recorrido toda Colombia, han atravesado ríos y montañas; han sido transportados en camiones, mulas, lanchas y canoas para llegar a su destino."}
            </p>

            <p
              className="
                mt-5
                max-w-3xl
                text-base
                leading-7
                text-slate-500
              "
            >
              {isEnglish
                ? "At Penagos, we have set ourselves the goal of reaching every corner of the country, regardless of location, bringing farmers resistant machines that make their daily work easier."
                : "En Penagos nos hemos puesto la meta de, sin importar el lugar, llegar a cada rincón del país, y de esta manera, llevar a los agricultores máquinas resistentes que hagan más fácil la vida de nuestros clientes."}
            </p>

          </div>


          <Galeria
            items={maquinaria}
            onSelect={setImagenSeleccionada}
          />

        </div>

      </section>


      {/* ====================================================
          CAFÉ
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
            py-20
            lg:px-10
            lg:py-28
          "
        >

          <div
            className="
              mb-12
              max-w-4xl
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
                ? "COFFEE PROCESSING EQUIPMENT"
                : "EQUIPOS PARA EL PROCESAMIENTO DE CAFÉ"}
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
                ? "Technology for Colombian coffee."
                : "Tecnología para el café colombiano."}
            </h3>

            <p
              className="
                mt-5
                max-w-3xl
                text-lg
                leading-8
                text-slate-500
              "
            >
              {isEnglish
                ? "Colombia has more than 555,000 coffee-growing families in different regions where the land is suitable for coffee cultivation."
                : "En Colombia hay más de 555 mil familias caficultoras en las distintas regiones donde la tierra es apta para su cultivo."}
            </p>

            <p
              className="
                mt-5
                max-w-3xl
                text-base
                leading-7
                text-slate-500
              "
            >
              {isEnglish
                ? "At Penagos we manufacture environmentally friendly technologies for small, medium and large coffee growers who need durable machines, manufacturing quality and the support of an experienced brand."
                : "En Penagos fabricamos tecnologías amigables con el medio ambiente, para cafeteros pequeños, medianos y grandes, donde necesitan máquinas durables, con calidad de fabricación y el respaldo de una marca de experiencia y trayectoria."}
            </p>

          </div>


          <Galeria
            items={cafe}
            onSelect={setImagenSeleccionada}
          />


          {/* ==================================================
              CENTRALES DE PROCESAMIENTO
          ================================================== */}

          <div
            className="
              mt-16
              grid
              items-center
              gap-10
              lg:grid-cols-[1.1fr_0.9fr]
              lg:gap-16
            "
          >

            {/* IMAGEN */}

            <button
              type="button"
              onClick={() =>
                setImagenSeleccionada(
                  "https://penagos.com/wp-content/uploads/2020/11/AGRICULTORES-PENAGOS-COLOMBIA-5-1-1024x1024.jpg"
                )
              }
              className="
                group
                relative
                overflow-hidden
                rounded-[2rem]
                bg-white
                text-left
                shadow-lg
              "
            >

              <img
                src="https://penagos.com/wp-content/uploads/2020/11/AGRICULTORES-PENAGOS-COLOMBIA-5-1-1024x1024.jpg"
                alt={
                  isEnglish
                    ? "Coffee processing plant"
                    : "Central de procesamiento de café"
                }
                className="
                  h-[380px]
                  w-full
                  object-cover
                  transition
                  duration-700
                  group-hover:scale-105
                  lg:h-[520px]
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#172B4D]/60
                  via-transparent
                  to-transparent
                "
              />

              <div
                className="
                  absolute
                  bottom-6
                  right-6
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  text-[#172B4D]
                  shadow-lg
                "
              >
                <ZoomIn size={18} />
              </div>

            </button>


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
                  ? "COFFEE PROCESSING PLANTS"
                  : "CENTRALES DE PROCESAMIENTO"}
              </span>

              <h4
                className="
                  mt-4
                  text-3xl
                  font-black
                  leading-tight
                  text-[#172B4D]
                  md:text-4xl
                "
              >
                {isEnglish
                  ? "More than 30 coffee processing plants installed throughout Colombia."
                  : "Más de 30 Centrales de Procesamiento de Café instaladas en todo el país."}
              </h4>

              <div
                className="
                  mt-5
                  h-1
                  w-16
                  rounded-full
                  bg-[#009FE3]
                "
              />

              <p
                className="
                  mt-6
                  text-lg
                  leading-8
                  text-slate-600
                "
              >
                {isEnglish
                  ? "To date, we have installed more than 30 coffee processing plants of different sizes throughout the country. They process coffee from cooperatives and coffee growers looking for compact and environmentally friendly equipment."
                  : "A hoy, hemos instalado más de 30 Centrales de Procesamiento de Café de todos los tamaños en el país, las cuales procesan cafés de cooperativas y caficultores que buscan equipos compactos y amigables con el medio ambiente."}
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
                  ? "These systems reduce water consumption during pulping by 100%, have low energy consumption and require minimal installation areas. Some are located in Antioquia, Santander, Risaralda, Cauca, Nariño, Quindío and Valle del Cauca."
                  : "Estos equipos reducen en un 100% el consumo de agua en el despulpado con bajos consumos de energía y mínimas áreas requeridas de instalación. Algunos de ellos están ubicados en Antioquia, Santander, Risaralda, Cauca, Nariño, Quindío y Valle del Cauca."}
              </p>

              <a
                href="https://penagos.com/centrales-de-procesamiento-de-cafe/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-7
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-[#009FE3]
                  px-6
                  py-3
                  text-sm
                  font-bold
                  text-white
                  shadow-md
                  transition
                  hover:-translate-y-0.5
                  hover:bg-[#008dcc]
                  hover:shadow-lg
                "
              >
                {isEnglish
                  ? "Discover our processing plants"
                  : "Conozca nuestras Centrales de Procesamiento"}

                <ExternalLink size={16} />
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* ====================================================
          CIERRE
      ==================================================== */}

      <section className="bg-[#172B4D]">

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
            PENAGOS COLOMBIA
          </span>

          <h3
            className="
              mt-5
              text-3xl
              font-black
              leading-tight
              text-white
              md:text-5xl
            "
          >
            {isEnglish
              ? "Technology that grows with Colombian farmers."
              : "Tecnología que crece junto a los agricultores colombianos."}
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
              text-slate-300
            "
          >
            {isEnglish
              ? "Our commitment is to continue contributing to the development of the Colombian countryside through durable, innovative and environmentally friendly technology."
              : "Nuestro compromiso es seguir contribuyendo al desarrollo del campo colombiano mediante tecnología durable, innovadora y amigable con el medio ambiente."}
          </p>

        </div>

      </section>


      {/* ====================================================
          MODAL
      ==================================================== */}

      {imagenSeleccionada && (

        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-[#172B4D]/90
            p-4
            backdrop-blur-sm
          "
          onClick={() => setImagenSeleccionada(null)}
        >

          {/* CERRAR */}

          <button
            type="button"
            onClick={() => setImagenSeleccionada(null)}
            className="
              absolute
              right-5
              top-5
              z-20
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-white
              text-[#172B4D]
              shadow-xl
              transition
              hover:scale-110
            "
            aria-label={
              isEnglish
                ? "Close image"
                : "Cerrar imagen"
            }
          >
            <X size={22} />
          </button>


          {/* IMAGEN */}

          <img
            src={imagenSeleccionada}
            alt=""
            onClick={(event) => event.stopPropagation()}
            className="
              max-h-[90vh]
              max-w-[95vw]
              rounded-2xl
              object-contain
              shadow-2xl
            "
          />

        </div>

      )}

    </section>
  );
};


// ============================================================
// GALERÍA REUTILIZABLE
// ============================================================

const Galeria = ({ items, onSelect }) => {

  const [inicio, setInicio] = useState(0);

  const visibles = items.slice(
    inicio,
    inicio + 4
  );


  const siguiente = () => {

    if (inicio + 4 < items.length) {
      setInicio((prev) => prev + 1);
    }

  };


  const anterior = () => {

    if (inicio > 0) {
      setInicio((prev) => prev - 1);
    }

  };


  return (
    <div>

      {/* ==================================================
          TARJETAS
      ================================================== */}

      <div
        className="
          grid
          items-stretch
          gap-5
          sm:grid-cols-2
          lg:grid-cols-4
        "
      >

        {visibles.map((item, index) => (

          <button
            key={`${item.image}-${index}`}
            type="button"
            onClick={() => onSelect(item.image)}
            className="
              group
              flex
              h-full
              min-h-[500px]
              cursor-pointer
              flex-col
              overflow-hidden
              rounded-3xl
              border
              border-slate-200
              bg-white
              text-left
              shadow-sm
              transition-all
              duration-500
              hover:-translate-y-1
              hover:shadow-xl
              focus:outline-none
              focus:ring-2
              focus:ring-[#009FE3]/40
            "
          >

            {/* IMAGEN */}

            <div
              className="
                relative
                h-[250px]
                min-h-[250px]
                shrink-0
                overflow-hidden
                bg-slate-100
              "
            >

              <img
                src={item.image}
                alt={item.title}
                className="
                  h-full
                  w-full
                  object-cover
                  transition
                  duration-700
                  group-hover:scale-105
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#172B4D]/60
                  via-transparent
                  to-transparent
                  opacity-0
                  transition
                  duration-300
                  group-hover:opacity-100
                "
              />

              <span
                className="
                  absolute
                  right-4
                  top-4
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-white/95
                  text-[#172B4D]
                  opacity-0
                  shadow-lg
                  transition
                  duration-300
                  group-hover:opacity-100
                "
              >
                <ZoomIn size={17} />
              </span>

            </div>


            {/* CONTENIDO */}

            <div
              className="
                flex
                flex-1
                flex-col
                p-5
              "
            >

              <h4
                className="
                  min-h-[56px]
                  font-bold
                  leading-7
                  text-[#172B4D]
                "
              >
                {item.title}
              </h4>

              <p
                className="
                  mt-3
                  flex-1
                  text-sm
                  leading-6
                  text-slate-500
                "
              >
                {item.description}
              </p>

              <div
                className="
                  mt-5
                  flex
                  items-center
                  gap-2
                  text-xs
                  font-bold
                  uppercase
                  tracking-wider
                  text-[#009FE3]
                  opacity-0
                  transition
                  duration-300
                  group-hover:opacity-100
                "
              >
                <ZoomIn size={14} />

                Ver imagen
              </div>

            </div>

          </button>

        ))}

      </div>


      {/* ==================================================
          CONTROLES
      ================================================== */}

      {items.length > 4 && (

        <div
          className="
            mt-8
            flex
            items-center
            justify-between
          "
        >

          <span
            className="
              text-sm
              font-medium
              text-slate-400
            "
          >
            {inicio + 1} –{" "}
            {Math.min(
              inicio + 4,
              items.length
            )}{" "}
            / {items.length}
          </span>


          <div
            className="
              flex
              items-center
              gap-2
            "
          >

            <button
              type="button"
              onClick={anterior}
              disabled={inicio === 0}
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-slate-200
                bg-white
                text-[#172B4D]
                shadow-sm
                transition
                hover:border-[#009FE3]
                hover:text-[#009FE3]
                disabled:cursor-not-allowed
                disabled:opacity-30
              "
              aria-label="Anterior"
            >
              <ChevronLeft size={19} />
            </button>


            <button
              type="button"
              onClick={siguiente}
              disabled={
                inicio + 4 >= items.length
              }
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-slate-200
                bg-white
                text-[#172B4D]
                shadow-sm
                transition
                hover:border-[#009FE3]
                hover:text-[#009FE3]
                disabled:cursor-not-allowed
                disabled:opacity-30
              "
              aria-label="Siguiente"
            >
              <ChevronRight size={19} />
            </button>

          </div>

        </div>

      )}

    </div>
  );
};


export default Colombia;
