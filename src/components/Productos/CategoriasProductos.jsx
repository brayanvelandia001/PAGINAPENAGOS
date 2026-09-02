import React, { useEffect } from "react";

import {
  ChevronDown,
  Sprout,
  Tractor,
  Wheat,
  Settings,
  Flame,
  Cog,
} from "lucide-react";

/* ============================================================
   CATEGORIAS DE PRODUCTOS
   FRANJA COMPACTA
============================================================ */

function CategoriasProductos({
  language = "ES",
  categoriaSeleccionada = "todas",
  setCategoriaSeleccionada = () => {},
  categoriasTipo = "todos",
}) {
  const isEnglish = language === "EN";

  const categorias = {
    todos: [
      {
        slug: "agricultura",
        icon: Sprout,
        es: "Maquinaria agrícola",
        en: "Agricultural Machinery",
      },
      {
        slug: "cafe",
        icon: Wheat,
        es: "Procesamiento de café",
        en: "Coffee Processing",
      },
      {
        slug: "daewoo",
        icon: Settings,
        es: "Equipos Daewoo",
        en: "Daewoo Equipment",
      },
      {
        slug: "gas",
        icon: Flame,
        es: "Accesorios para gas",
        en: "Gas Accessories",
      },
    ],

    agricultura: [
      {
        slug: "picadoras-y-ensiladora",
        icon: Tractor,
        es: "Picadoras y Ensiladora",
        en: "Choppers and Silage Machines",
      },
      {
        slug: "trituradores-y-molinos",
        icon: Cog,
        es: "Trituradores y Molinos",
        en: "Crushers and Mills",
      },
      {
        slug: "desgranadoras",
        icon: Wheat,
        es: "Desgranadoras",
        en: "Shellers",
      },
      {
        slug: "trapiches",
        icon: Settings,
        es: "Trapiches",
        en: "Sugarcane Mills",
      },
      {
        slug: "cosechadora-de-forrajes",
        icon: Tractor,
        es: "Cosechadora de Forrajes",
        en: "Forage Harvesters",
      },
    ],

    cafe: [
      {
        slug: "despulpadoras-y-modulos-clasificadores",
        icon: Settings,
        es: "Despulpadoras y Módulos Clasificadores",
        en: "Pulpers and Screening Modules",
      },
      {
        slug: "beneficios-compactos-para-cafe",
        icon: Cog,
        es: "Beneficios Compactos para Café",
        en: "Compact Coffee Processing Systems",
      },
      {
        slug: "accesorios-de-preclasificacion-y-transporte-de-cafe",
        icon: Settings,
        es: "Accesorios de Preclasificación y Transporte de Café",
        en: "Coffee Pre-classification and Transport Accessories",
      },
      {
        slug: "lavadores-de-cafe",
        icon: Settings,
        es: "Lavadores de Café",
        en: "Coffee Washers",
      },
      {
        slug: "tanques-de-fermentacion",
        icon: Cog,
        es: "Tanques de Fermentación",
        en: "Fermentation Tanks",
      },
      {
        slug: "secadoras-de-cafe",
        icon: Flame,
        es: "Secadoras de Café",
        en: "Coffee Dryers",
      },
    ],

    /* ========================================================
       DAEWOO
       4 CATEGORÍAS
    ======================================================== */

    daewoo: [
      {
        slug: "fumigadora-motorizada",
        icon: Sprout,
        es: "Fumigadora Motorizada",
        en: "Motorized Sprayer",
      },
      {
        slug: "motobombas",
        icon: Settings,
        es: "Motobombas",
        en: "Water Pumps",
      },
      {
        slug: "compresores-de-aire",
        icon: Cog,
        es: "Compresores de Aire",
        en: "Air Compressors",
      },
      {
        slug: "generador-de-energia",
        icon: Settings,
        es: "Generador de energía",
        en: "Power Generator",
      },
    ],

    gas: [
      {
        slug: "fittings",
        icon: Cog,
        es: "Fittings",
        en: "Fittings",
      },
      {
        slug: "accesorios-para-gas-domiciliario",
        icon: Flame,
        es: "Accesorios para Gas Domiciliario",
        en: "Domestic Gas Accessories",
      },
    ],
  };

  const categoriasActuales =
    categorias[categoriasTipo] || [];

  /* ==========================================================
     SELECCIONAR AUTOMÁTICAMENTE LA PRIMERA CATEGORÍA
  ========================================================== */

  useEffect(() => {
    if (categoriasActuales.length > 0) {
      setCategoriaSeleccionada(
        categoriasActuales[0].slug
      );
    }
  }, [
    categoriasTipo,
    setCategoriaSeleccionada,
  ]);

  return (
    <section
    id="categorias-productos"
    className="w-full bg-white py-5 md:py-6"
    >
      <div className="mx-auto w-full max-w-7xl px-5 md:px-6">

        {/* ====================================================
            ENCABEZADO
        ==================================================== */}

        <div className="mb-3 flex items-center justify-between gap-4">

          <div>
            <span
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#0b3b82]
              "
            >
              {isEnglish
                ? "Categories"
                : "Categorías"}
            </span>

            <h2
              className="
                mt-0.5
                text-lg
                font-bold
                tracking-tight
                text-[#07133d]
                md:text-xl
              "
            >
              {isEnglish
                ? "Explore our categories"
                : "Explora nuestras categorías"}
            </h2>
          </div>

          {/* ==================================================
              SELECT
              SIN "TODAS"
          ================================================== */}

          <div
            className="
              relative
              hidden
              w-44
              sm:block
            "
          >
            <select
              value={categoriaSeleccionada}
              onChange={(e) =>
                setCategoriaSeleccionada(
                  e.target.value
                )
              }
              className="
                w-full
                cursor-pointer
                appearance-none
                rounded-md
                border
                border-gray-200
                bg-gray-50
                px-3
                py-2
                pr-8
                text-xs
                font-medium
                text-[#07133d]
                outline-none
                transition
                focus:border-[#0b3b82]
              "
            >
              {categoriasActuales.map(
                (categoria) => (
                  <option
                    key={categoria.slug}
                    value={categoria.slug}
                  >
                    {isEnglish
                      ? categoria.en
                      : categoria.es}
                  </option>
                )
              )}
            </select>

            <ChevronDown
              size={14}
              className="
                pointer-events-none
                absolute
                right-2.5
                top-1/2
                -translate-y-1/2
                text-gray-400
              "
            />
          </div>
        </div>

        {/* ====================================================
            FRANJA DE CATEGORÍAS
            SIN NÚMEROS
            CON SALTO DE LÍNEA
        ==================================================== */}

        <div
          className="
            flex
            w-full
            flex-wrap
            gap-2
          "
        >
          {categoriasActuales.map(
            (categoria) => {
              const Icon = categoria.icon;

              const activa =
                categoriaSeleccionada ===
                categoria.slug;

              return (
                <button
                  key={categoria.slug}
                  type="button"
                  onClick={() =>
                    setCategoriaSeleccionada(
                      categoria.slug
                    )
                  }
                  className={`
                    group
                    flex
                    cursor-pointer
                    items-center
                    gap-2
                    rounded-lg
                    border
                    px-3
                    py-2
                    transition-all
                    duration-200

                    ${
                      activa
                        ? "border-[#0b3b82] bg-[#0b3b82] text-white shadow-sm"
                        : "border-gray-200 bg-white text-[#07133d] hover:border-[#0b3b82]/40 hover:bg-gray-50"
                    }
                  `}
                >

                  {/* ICONO */}

                  <Icon
                    size={15}
                    strokeWidth={1.8}
                    className={
                      activa
                        ? "shrink-0 text-white"
                        : "shrink-0 text-[#0b3b82]"
                    }
                  />

                  {/* NOMBRE */}

                  <span
                    className="
                      text-left
                      text-xs
                      font-semibold
                    "
                  >
                    {isEnglish
                      ? categoria.en
                      : categoria.es}
                  </span>

                </button>
              );
            }
          )}
        </div>

      </div>
    </section>
  );
}

export default CategoriasProductos;
