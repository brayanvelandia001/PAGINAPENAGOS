import React, { useEffect, useMemo, useState } from "react";

import CardProducto from "./CardProducto";

/* ============================================================
   CATEGORÍAS REALES DE WOOCOMMERCE
============================================================ */

const categoriasCatalogos = {
  agricola: [
    {
      es: "picadoras-y-ensiladora",
      en: "choppers-and-silages",
    },
    {
      es: "trituradores-y-molinos",
      en: "shredders-and-mills",
    },
    {
      es: "desgranadoras",
      en: "shellers",
    },
    {
      es: "trapiches",
      en: "sugar-cane-mills",
    },
    {
      es: "cosechadora-de-forrajes",
      en: "forage-harvester",
    },
  ],

  cafe: [
    {
      es: "beneficios-compactos-para-cafe",
      en: "compact-coffee-wet-mills",
    },
    {
      es: "despulpadoras-y-modulos-clasificadores",
      en: "pulpers-and-screening-modules",
    },
    {
      es: "lavadores-de-cafe",
      en: "coffee-washers",
    },
    {
      es: "secadoras-de-cafe",
      en: "coffee-dryers",
    },
    {
      es: "accesorios-de-preclasificacion-y-transporte-de-cafe",
      en: "coffee-pre-sorting-and-transportation-accessories",
    },
    {
      es: "tanques-de-fermentacion",
      en: "fermentation-tanks",
    },
  ],

  /* ==========================================================
     DAEWOO
     4 CATEGORÍAS
  ========================================================== */

  daewoo: [
    {
      es: "fumigadora-motorizada",
      en: "motorized-sprayer",
    },
    {
      es: "motobombas",
      en: "water-pumps",
    },
    {
      es: "compresores-de-aire",
      en: "air-compressors",
    },
    {
      es: "generador-de-energia",
      en: "power-generator",
    },
  ],

  gas: [
    {
      es: "accesorios-para-gas-domiciliario",
      en: "home-gas-accessories",
    },
  ],
};

/* ============================================================
   LOGO PENAGOS
============================================================ */

const LOGO_PENAGOS =
  "https://penagos.com/wp-content/uploads/2020/03/Logotipo-Penagos-Hermanos-PNG.png";

/* ============================================================
   COMPONENTE
============================================================ */

function CatalogoProductos({
  language = "ES",
  catalogo = "todos",
  categoriaSeleccionada = "todas",
}) {
  const [productos, setProductos] = useState([]);

  const [cargando, setCargando] = useState(false);

  const [error, setError] = useState(false);

  const isEnglish = language === "EN";

  /* ==========================================================
     TRAER TODOS LOS PRODUCTOS DEL API
  ========================================================== */

  useEffect(() => {
    let cancelado = false;

    const cargarTodosLosProductos = async () => {
      try {
        setCargando(true);
        setError(false);

        let todosLosProductos = [];
        let pagina = 1;

        while (true) {
          const response = await fetch(
            `https://penagos.com/wp-json/wc/store/v1/products?per_page=100&page=${pagina}`
          );

          if (!response.ok) {
            throw new Error(
              `Error HTTP ${response.status}`
            );
          }

          const productosPagina = await response.json();

          console.log(
            `WooCommerce - Página ${pagina}:`,
            productosPagina.length,
            "productos"
          );

          if (!Array.isArray(productosPagina)) {
            throw new Error(
              "La respuesta del API no es válida"
            );
          }

          if (productosPagina.length === 0) {
            break;
          }

          todosLosProductos = [
            ...todosLosProductos,
            ...productosPagina,
          ];

          if (productosPagina.length < 100) {
            break;
          }

          pagina++;

          if (pagina > 100) {
            console.warn(
              "Se alcanzó el límite de seguridad de páginas."
            );

            break;
          }
        }

        /* ======================================================
           ELIMINAR DUPLICADOS
        ====================================================== */

        const productosUnicos = Array.from(
          new Map(
            todosLosProductos.map((producto) => [
              producto.id,
              producto,
            ])
          ).values()
        );

        console.log(
          "===================================="
        );

        console.log(
          "TOTAL PRODUCTOS WOOCOMMERCE:",
          productosUnicos.length
        );

        console.log(
          "===================================="
        );

        if (!cancelado) {
          setProductos(productosUnicos);
        }
      } catch (err) {
        console.error(
          "Error cargando productos:",
          err
        );

        if (!cancelado) {
          setError(true);
          setProductos([]);
        }
      } finally {
        if (!cancelado) {
          setCargando(false);
        }
      }
    };

    /* ========================================================
       SOLO CARGAR CUANDO EXISTE CATEGORÍA
    ======================================================== */

    if (
      categoriaSeleccionada &&
      categoriaSeleccionada !== "todas"
    ) {
      cargarTodosLosProductos();
    }

    return () => {
      cancelado = true;
    };
  }, [categoriaSeleccionada]);

  /* ==========================================================
     DETECTAR IDIOMA
  ========================================================== */

  const productosPorIdioma = useMemo(() => {
    return productos.filter((producto) => {
      const permalink =
        producto.permalink || "";

      const esInglesPorUrl =
        permalink.includes("/en/") ||
        permalink.includes("/en-products/");

      const categorias =
        producto.categories || [];

      const tieneCategoriaIngles =
        categorias.some(
          (categoria) =>
            categoria.slug === "ingles"
        );

      if (isEnglish) {
        return (
          esInglesPorUrl ||
          tieneCategoriaIngles
        );
      }

      return (
        !esInglesPorUrl &&
        !tieneCategoriaIngles
      );
    });
  }, [productos, isEnglish]);

  /* ==========================================================
     PRODUCTOS DEL CATÁLOGO
  ========================================================== */

  const productosPorCatalogo = useMemo(() => {
    if (catalogo === "todos") {
      return productosPorIdioma;
    }

    const categorias =
      categoriasCatalogos[catalogo] || [];

    const slugsPermitidos =
      categorias.map((categoria) =>
        isEnglish
          ? categoria.en
          : categoria.es
      );

    return productosPorIdioma.filter(
      (producto) => {
        const categoriasProducto =
          producto.categories || [];

        return categoriasProducto.some(
          (categoria) =>
            slugsPermitidos.includes(
              categoria.slug
            )
        );
      }
    );
  }, [
    productosPorIdioma,
    catalogo,
    isEnglish,
  ]);

  /* ==========================================================
     FILTRO POR SUBCATEGORÍA
  ========================================================== */

  const productosFiltrados = useMemo(() => {
    if (
      !categoriaSeleccionada ||
      categoriaSeleccionada === "todas"
    ) {
      return [];
    }

    const categorias =
      categoriasCatalogos[catalogo] || [];

    const categoriaEncontrada =
      categorias.find(
        (categoria) =>
          categoria.es ===
            categoriaSeleccionada ||
          categoria.en ===
            categoriaSeleccionada
      );

    if (!categoriaEncontrada) {
      return [];
    }

    const slugCategoria =
      isEnglish
        ? categoriaEncontrada.en
        : categoriaEncontrada.es;

    return productosPorCatalogo.filter(
      (producto) => {
        const categoriasProducto =
          producto.categories || [];

        return categoriasProducto.some(
          (categoria) =>
            categoria.slug ===
            slugCategoria
        );
      }
    );
  }, [
    productosPorCatalogo,
    catalogo,
    categoriaSeleccionada,
    isEnglish,
  ]);

  /* ==========================================================
     ESTADO SIN CATEGORÍA
  ========================================================== */

  if (
    !categoriaSeleccionada ||
    categoriaSeleccionada === "todas"
  ) {
    return (
      <section
        id="catalogo-productos"
        className="
          w-full
          bg-white
          py-4
          md:py-5
        "
      >
        <div
          className="
            mx-auto
            max-w-7xl
            px-5
            md:px-6
          "
        >
          <div
            className="
              flex
              min-h-[150px]
              items-center
              justify-center
              rounded-2xl
              border
              border-dashed
              border-slate-200
              bg-slate-50/50
              px-6
              py-10
              text-center
            "
          >
            <div>
              <div
                className="
                  mx-auto
                  mb-3
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-[#07133d]/5
                "
              >
                <span
                  className="
                    text-sm
                    font-bold
                    text-[#07133d]/40
                  "
                >
                  +
                </span>
              </div>

              <p
                className="
                  text-sm
                  font-semibold
                  text-[#07133d]
                "
              >
                {isEnglish
                  ? "Select a category"
                  : "Selecciona una categoría"}
              </p>

              <p
                className="
                  mt-1
                  text-xs
                  text-slate-400
                "
              >
                {isEnglish
                  ? "Choose a category above to explore our products."
                  : "Elige una categoría arriba para explorar nuestros productos."}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  /* ==========================================================
     CARGANDO
     LOGO + SPINNER
  ========================================================== */

  if (cargando) {
    return (
      <section
        id="catalogo-productos"
        className="
          flex
          min-h-[280px]
          w-full
          items-center
          justify-center
          bg-white
        "
      >
        <div
          className="
            flex
            flex-col
            items-center
            justify-center
          "
        >
          <img
            src={LOGO_PENAGOS}
            alt="Penagos Hermanos"
            className="
              mb-6
              h-auto
              w-32
              animate-pulse
              object-contain
              opacity-80
              md:w-40
            "
          />

          <div
            className="
              mb-3
              h-6
              w-6
              animate-spin
              rounded-full
              border-2
              border-slate-200
              border-t-[#07133d]
            "
          />

          <p
            className="
              text-sm
              font-semibold
              text-[#07133d]
            "
          >
            {isEnglish
              ? "Loading products..."
              : "Cargando productos..."}
          </p>
        </div>
      </section>
    );
  }

  /* ==========================================================
     ERROR
  ========================================================== */

  if (error) {
    return (
      <section
        className="
          w-full
          bg-white
          py-10
          md:py-12
        "
      >
        <div
          className="
            mx-auto
            max-w-7xl
            px-5
            md:px-6
          "
        >
          <div
            className="
              rounded-xl
              border
              border-red-100
              bg-red-50
              px-5
              py-8
            "
          >
            <p
              className="
                text-sm
                font-semibold
                text-red-600
              "
            >
              {isEnglish
                ? "Could not load the products."
                : "No se pudieron cargar los productos."}
            </p>
          </div>
        </div>
      </section>
    );
  }

  /* ==========================================================
     VISTA
  ========================================================== */

  return (
    <section
      id="catalogo-productos"
      className="
        w-full
        bg-white
        py-4
        md:py-5
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl
          px-5
          md:px-6
        "
      >

        {/* ====================================================
            ENCABEZADO
            CONTADOR A LA DERECHA
        ==================================================== */}

        <div
          className="
            mb-3
            flex
            items-center
            justify-end
            border-b
            border-slate-100
            pb-3
          "
        >
          {categoriaSeleccionada !== "todas" && (
            <span
              className="
                text-xs
                font-medium
                text-slate-400
              "
            >
              {productosFiltrados.length}{" "}
              {isEnglish
                ? "products"
                : "productos"}
            </span>
          )}
        </div>

        {/* ====================================================
            SIN PRODUCTOS
        ==================================================== */}

        {productosFiltrados.length === 0 ? (
          <div
            className="
              rounded-2xl
              border
              border-slate-200
              bg-slate-50
              px-6
              py-16
              text-center
            "
          >
            <p
              className="
                text-sm
                font-semibold
                text-slate-600
              "
            >
              {isEnglish
                ? "No products found."
                : "No se encontraron productos."}
            </p>
          </div>
        ) : (
          /* ==================================================
             GRID DE PRODUCTOS
          ================================================== */

          <div
            className="
              grid
              grid-cols-1
              gap-5
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {productosFiltrados.map(
              (producto) => (
                <CardProducto
                  key={producto.id}
                  producto={producto}
                  language={language}
                />
              )
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default CatalogoProductos;
