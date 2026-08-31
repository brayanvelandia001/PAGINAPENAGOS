import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import {
  Autoplay,
  Navigation,
} from "swiper/modules";

import {
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

// ============================================================
// CARRUSEL DE PRODUCTOS
// ============================================================

function MaquinasCarousel({
  language,
  onMaquinasListas,
}) {

  // ==========================================================
  // PRODUCTOS
  // ==========================================================

  const [
    productos,
    setProductos,
  ] = useState([]);

  // ==========================================================
  // PRODUCTO SELECCIONADO
  // ==========================================================

  const [
    productoSeleccionado,
    setProductoSeleccionado,
  ] = useState(null);

  // ==========================================================
  // CARGANDO
  // ==========================================================

  const [
    cargando,
    setCargando,
  ] = useState(true);

  // ==========================================================
  // REFERENCIAS FLECHAS
  // ==========================================================

  const botonAnteriorRef =
    useRef(null);

  const botonSiguienteRef =
    useRef(null);

  // ==========================================================
  // IDIOMA
  // ==========================================================

  const idiomaActual =
    language === "EN"
      ? "EN"
      : "ES";

  // ==========================================================
  // LIMPIAR TEXTO
  // ==========================================================

  const limpiarTexto = (
    texto,
    convertirSaltos = false
  ) => {

    if (!texto) {
      return "";
    }

    let resultado =
      String(texto);

    // ========================================================
    // CONVERTIR HTML
    // ========================================================

    if (convertirSaltos) {

      resultado =
        resultado
          .replace(
            /<br\s*\/?>/gi,
            "\n"
          )
          .replace(
            /<\/p>/gi,
            "\n"
          )
          .replace(
            /<\/div>/gi,
            "\n"
          )
          .replace(
            /<li>/gi,
            "\n- "
          )
          .replace(
            /<\/li>/gi,
            ""
          );
    }

    // ========================================================
    // QUITAR RESTO DE HTML
    // ========================================================

    resultado =
      resultado.replace(
        /<[^>]*>/g,
        ""
      );

    // ========================================================
    // DECODIFICAR ENTIDADES HTML
    // ========================================================

    resultado =
      resultado
        .replace(
          /&nbsp;/gi,
          " "
        )
        .replace(
          /&#8211;/gi,
          "-"
        )
        .replace(
          /&#8212;/gi,
          "-"
        )
        .replace(
          /&ndash;/gi,
          "-"
        )
        .replace(
          /&mdash;/gi,
          "-"
        )
        .replace(
          /&#8208;/gi,
          "-"
        )
        .replace(
          /&#8209;/gi,
          "-"
        )
        .replace(
          /&amp;/gi,
          "&"
        )
        .replace(
          /&quot;/gi,
          '"'
        )
        .replace(
          /&#039;/gi,
          "'"
        )
        .replace(
          /&apos;/gi,
          "'"
        )
        .replace(
          /&lt;/gi,
          "<"
        )
        .replace(
          /&gt;/gi,
          ">"
        );

    // ========================================================
    // NORMALIZAR GUIONES
    // ========================================================

    resultado =
      resultado.replace(
        /[–—−]/g,
        "-"
      );

    // ========================================================
    // NORMALIZAR ESPACIOS
    // ========================================================

    resultado =
      resultado
        .replace(
          /[ \t]+/g,
          " "
        )
        .replace(
          /[ \t]*\n[ \t]*/g,
          "\n"
        )
        .replace(
          /\n{3,}/g,
          "\n\n"
        )
        .trim();

    return resultado;
  };

  // ==========================================================
  // NOMBRE LIMPIO DEL PRODUCTO
  // ==========================================================

  const obtenerNombreProducto = (
    producto
  ) => {

    if (!producto) {
      return "";
    }

    return limpiarTexto(
      producto.name,
      false
    );
  };

  // ==========================================================
  // DESCRIPCIÓN LIMPIA
  // ==========================================================

  const limpiarDescripcion = (
    descripcion
  ) => {

    return limpiarTexto(
      descripcion,
      true
    );
  };

  // ==========================================================
  // DETECTAR IDIOMA DEL PRODUCTO
  // ==========================================================

  const obtenerIdiomaProducto = (
    producto
  ) => {

    // ========================================================
    // 1. CAMPOS DIRECTOS
    // ========================================================

    const idiomaDirecto =
      producto.lang ||
      producto.language ||
      producto.locale ||
      producto.wpml_language ||
      producto.language_code ||
      producto.lang_code;

    if (
      typeof idiomaDirecto === "string"
    ) {

      const idioma =
        idiomaDirecto
          .toLowerCase()
          .trim();

      if (
        idioma === "es" ||
        idioma === "es-es" ||
        idioma === "spa" ||
        idioma === "spanish"
      ) {
        return "ES";
      }

      if (
        idioma === "en" ||
        idioma === "en-us" ||
        idioma === "en-gb" ||
        idioma === "eng" ||
        idioma === "english"
      ) {
        return "EN";
      }
    }

    // ========================================================
    // 2. OBJETO LANGUAGE
    // ========================================================

    if (
      producto.language &&
      typeof producto.language === "object"
    ) {

      const idiomaObjeto =
        producto.language.code ||
        producto.language.slug ||
        producto.language.locale ||
        producto.language.name;

      if (
        typeof idiomaObjeto === "string"
      ) {

        const idioma =
          idiomaObjeto
            .toLowerCase()
            .trim();

        if (
          idioma === "es" ||
          idioma === "es-es" ||
          idioma === "spa" ||
          idioma === "spanish"
        ) {
          return "ES";
        }

        if (
          idioma === "en" ||
          idioma === "en-us" ||
          idioma === "en-gb" ||
          idioma === "eng" ||
          idioma === "english"
        ) {
          return "EN";
        }
      }
    }

    // ========================================================
    // 3. CATEGORÍAS
    // ========================================================

    if (
      Array.isArray(
        producto.categories
      )
    ) {

      for (
        const categoria
        of producto.categories
      ) {

        const textoCategoria =
          `${categoria.name || ""} ${categoria.slug || ""}`
            .toLowerCase();

        if (
          textoCategoria.includes(
            "español"
          ) ||
          textoCategoria.includes(
            "espanol"
          ) ||
          textoCategoria.includes(
            "spanish"
          ) ||
          textoCategoria === "es"
        ) {
          return "ES";
        }

        if (
          textoCategoria.includes(
            "english"
          ) ||
          textoCategoria.includes(
            "inglés"
          ) ||
          textoCategoria.includes(
            "ingles"
          ) ||
          textoCategoria === "en"
        ) {
          return "EN";
        }
      }
    }

    // ========================================================
    // 4. SLUG
    // ========================================================

    const slug =
      (
        producto.slug ||
        ""
      )
        .toLowerCase();

    const palabrasIngles = [
      "-english",
      "-ingles",
      "-inglés",
      "_english",
      "_ingles",
      "_en",
      "/en/",
      "english-",
      "ingles-",
      "inglés-",
    ];

    if (
      palabrasIngles.some(
        (palabra) =>
          slug.includes(palabra)
      )
    ) {
      return "EN";
    }

    const palabrasEspanol = [
      "-spanish",
      "-espanol",
      "-español",
      "_spanish",
      "_espanol",
      "_español",
      "_es",
      "/es/",
      "spanish-",
      "espanol-",
      "español-",
    ];

    if (
      palabrasEspanol.some(
        (palabra) =>
          slug.includes(palabra)
      )
    ) {
      return "ES";
    }

    // ========================================================
    // 5. WPML
    // ========================================================

    if (
      producto._links
    ) {

      const linksTexto =
        JSON.stringify(
          producto._links
        )
        .toLowerCase();

      if (
        linksTexto.includes(
          "language"
        )
      ) {

        if (
          linksTexto.includes(
            "en"
          )
        ) {
          return "EN";
        }

        if (
          linksTexto.includes(
            "es"
          )
        ) {
          return "ES";
        }
      }
    }

    return null;
  };

  // ==========================================================
  // CARGAR PRODUCTOS
  // ==========================================================

  useEffect(() => {

    let cancelado = false;

    const controlador =
      new AbortController();

    const cargarProductos =
      async () => {

        try {

          setCargando(true);

          setProductos([]);

          setProductoSeleccionado(
            null
          );

          console.log(
            "===================================="
          );

          console.log(
            "IDIOMA:",
            idiomaActual
          );

          console.log(
            "CARGANDO PRODUCTOS..."
          );

          console.log(
            "===================================="
          );

          const url =
            "https://penagos.com/wp-json/wc/store/v1/products?per_page=100";

          console.log(
            "CONSULTANDO:",
            url
          );

          const response =
            await fetch(
              url,
              {
                signal:
                  controlador.signal,
              }
            );

          console.log(
            "RESPUESTA HTTP:",
            response.status
          );

          if (
            !response.ok
          ) {

            throw new Error(
              `Error HTTP ${response.status}`
            );
          }

          const data =
            await response.json();

          if (
            cancelado
          ) {
            return;
          }

          console.log(
            "TOTAL PRODUCTOS:",
            data.length
          );

          // ==================================================
          // FILTRAR PRODUCTOS
          // ==================================================

          const productosFiltrados =
            data.filter(
              (
                producto
              ) => {

                const tieneImagen =
                  Array.isArray(
                    producto.images
                  ) &&
                  producto.images.length >
                    0;

                if (
                  !tieneImagen
                ) {
                  return false;
                }

                const idiomaProducto =
                  obtenerIdiomaProducto(
                    producto
                  );

                console.log(
                  "PRODUCTO:",
                  obtenerNombreProducto(
                    producto
                  ),
                  "| IDIOMA:",
                  idiomaProducto
                );

                if (
                  idiomaProducto
                ) {

                  return (
                    idiomaProducto ===
                    idiomaActual
                  );
                }

                return false;
              }
            );

          console.log(
            `PRODUCTOS ${idiomaActual}:`,
            productosFiltrados.length
          );

          if (
            !cancelado
          ) {

            setProductos(
              productosFiltrados
            );
          }

        } catch (
          error
        ) {

          if (
            error.name ===
            "AbortError"
          ) {
            return;
          }

          console.error(
            "ERROR CARGANDO PRODUCTOS:",
            error
          );

          if (
            !cancelado
          ) {

            setProductos(
              []
            );
          }

        } finally {

          if (
            !cancelado
          ) {

            setCargando(
              false
            );

            if (
              onMaquinasListas
            ) {

              onMaquinasListas();
            }
          }
        }
      };

    cargarProductos();

    return () => {

      cancelado = true;

      controlador.abort();
    };

  }, [
    language,
  ]);

  // ==========================================================
  // ESCAPE PARA CERRAR MODAL
  // ==========================================================

  useEffect(() => {

    const manejarEscape =
      (event) => {

        if (
          event.key ===
          "Escape"
        ) {

          setProductoSeleccionado(
            null
          );
        }
      };

    if (
      productoSeleccionado
    ) {

      document.addEventListener(
        "keydown",
        manejarEscape
      );

      document.body.style.overflow =
        "hidden";
    }

    return () => {

      document.removeEventListener(
        "keydown",
        manejarEscape
      );

      document.body.style.overflow =
        "";
    };

  }, [
    productoSeleccionado,
  ]);

  // ==========================================================
  // OBTENER IMAGEN
  // ==========================================================

  const obtenerImagen = (
    producto
  ) => {

    if (
      !producto ||
      !producto.images ||
      producto.images.length ===
        0
    ) {
      return null;
    }

    return producto.images[0];
  };

  // ==========================================================
  // RENDER
  // ==========================================================

  return (

    <section
      className="
        w-full
        overflow-x-hidden
        bg-white
        py-20
      "
    >

      <div
        className="
          mx-auto
          w-full
          max-w-[1380px]
          min-w-0
          px-6
          lg:px-10
        "
      >

        {/* ====================================================
            CARGANDO PRODUCTOS
            LOGO + BARRA PENAGOS
        ==================================================== */}

        {cargando ? (

          <div
            className="
              flex
              min-h-[350px]
              flex-col
              items-center
              justify-center
              px-6
            "
          >

            {/* ==================================================
                LOGO PENAGOS
            ================================================== */}

            <img
              src="https://penagos.com/wp-content/uploads/2020/03/Logotipo-Penagos-Hermanos-PNG.png"
              alt="Penagos Hermanos"
              className="
                w-[210px]
                object-contain
                animate-[logoPulseProductos_2s_ease-in-out_infinite]
              "
            />

            {/* ==================================================
                BARRA DE CARGA
            ================================================== */}

            <div
              className="
                mt-8
                h-[4px]
                w-[180px]
                overflow-hidden
                rounded-full
                bg-slate-200
              "
            >

              <div
                className="
                  h-full
                  w-1/2
                  rounded-full
                  bg-[#302b80]
                  animate-[loadingProductos_1.4s_ease-in-out_infinite]
                "
              />

            </div>

            {/* ==================================================
                TEXTO
            ================================================== */}

            <p
              className="
                mt-5
                text-xs
                font-semibold
                tracking-wide
                text-slate-400
              "
            >
              {idiomaActual === "EN"
                ? "Loading products..."
                : "Cargando productos..."
              }
            </p>

          </div>

        ) : productos.length === 0 ? (

          <div
            className="
              flex
              min-h-[240px]
              flex-col
              items-center
              justify-center
              text-center
              text-sm
              font-semibold
              text-slate-400
            "
          >

            <p>
              {idiomaActual === "EN"
                ? "No products available."
                : "No hay productos disponibles."
              }
            </p>

            <p
              className="
                mt-2
                text-xs
                font-normal
                text-slate-400
              "
            >
              {idiomaActual === "EN"
                ? "Language:"
                : "Idioma:"
              }

              {" "}

              {idiomaActual}

            </p>

          </div>

        ) : (

          /* ==================================================
             CARRUSEL
          ================================================== */

          <div
            className="
              relative
              w-full
              min-w-0
              overflow-hidden
              px-1
              sm:px-8
              lg:px-10
            "
          >

            {/* ==================================================
                FLECHA IZQUIERDA
            ================================================== */}

            <button
              ref={
                botonAnteriorRef
              }
              type="button"
              aria-label={
                idiomaActual === "EN"
                  ? "Previous product"
                  : "Producto anterior"
              }
              className="
                absolute
                left-0
                top-1/2
                z-20
                flex
                h-11
                w-11
                -translate-y-1/2
                cursor-pointer
                items-center
                justify-center
                rounded-full
                border
                border-slate-200
                bg-white
                text-[#302b80]
                shadow-lg
                transition-all
                duration-300
                hover:scale-110
                hover:border-[#00a4e4]
                hover:bg-[#00a4e4]
                hover:text-white
                active:scale-95
                focus:outline-none
                focus:ring-2
                focus:ring-[#00a4e4]/30
                max-sm:h-9
                max-sm:w-9
              "
            >

              <ChevronLeft
                size={22}
                strokeWidth={2}
              />

            </button>

            {/* ==================================================
                FLECHA DERECHA
            ================================================== */}

            <button
              ref={
                botonSiguienteRef
              }
              type="button"
              aria-label={
                idiomaActual === "EN"
                  ? "Next product"
                  : "Producto siguiente"
              }
              className="
                absolute
                right-0
                top-1/2
                z-20
                flex
                h-11
                w-11
                -translate-y-1/2
                cursor-pointer
                items-center
                justify-center
                rounded-full
                border
                border-slate-200
                bg-white
                text-[#302b80]
                shadow-lg
                transition-all
                duration-300
                hover:scale-110
                hover:border-[#00a4e4]
                hover:bg-[#00a4e4]
                hover:text-white
                active:scale-95
                focus:outline-none
                focus:ring-2
                focus:ring-[#00a4e4]/30
                max-sm:h-9
                max-sm:w-9
              "
            >

              <ChevronRight
                size={22}
                strokeWidth={2}
              />

            </button>

            {/* ==================================================
                SWIPER
            ================================================== */}

            <Swiper
              modules={[
                Autoplay,
                Navigation,
              ]}
              onBeforeInit={(
                swiper
              ) => {

                swiper.params.navigation.prevEl =
                  botonAnteriorRef.current;

                swiper.params.navigation.nextEl =
                  botonSiguienteRef.current;
              }}
              navigation={{
                prevEl:
                  botonAnteriorRef.current,
                nextEl:
                  botonSiguienteRef.current,
              }}
              loop={
                productos.length > 4
              }
              autoplay={{
                delay: 1500,
                disableOnInteraction:
                  false,
                pauseOnMouseEnter:
                  true,
              }}
              speed={1200}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
              className="
                !w-full
                !overflow-hidden
                cursor-grab
              "
            >

              {productos.map(
                (
                  producto
                ) => {

                  const imagen =
                    obtenerImagen(
                      producto
                    );

                  const nombre =
                    obtenerNombreProducto(
                      producto
                    );

                  return (

                    <SwiperSlide
                      key={
                        producto.id
                      }
                      className="
                        !h-auto
                        !box-border
                      "
                    >

                      <div
                        className="
                          group
                          flex
                          h-[350px]
                          w-full
                          min-w-0
                          flex-col
                          overflow-hidden
                          rounded-3xl
                          border
                          border-slate-200
                          bg-white
                          shadow-sm
                          transition-all
                          duration-300
                          hover:-translate-y-2
                          hover:shadow-xl
                        "
                      >

                        {/* ==================================
                            IMAGEN
                        ================================== */}

                        <div
                          onClick={() =>
                            setProductoSeleccionado(
                              producto
                            )
                          }
                          className="
                            flex
                            h-[270px]
                            min-h-[270px]
                            w-full
                            cursor-pointer
                            items-center
                            justify-center
                            overflow-hidden
                            p-6
                          "
                        >

                          {imagen && (

                            <img
                              src={
                                imagen.src
                              }
                              alt={
                                imagen.alt ||
                                nombre
                              }
                              loading="lazy"
                              decoding="async"
                              className="
                                max-h-full
                                max-w-full
                                object-contain
                                transition-transform
                                duration-500
                                group-hover:scale-110
                              "
                            />

                          )}

                        </div>

                        {/* ==================================
                            NOMBRE
                        ================================== */}

                        <div
                          className="
                            flex
                            h-[80px]
                            min-h-[80px]
                            items-center
                            justify-center
                            border-t
                            border-slate-100
                            bg-white
                            px-5
                            py-4
                            text-center
                          "
                        >

                          <h3
                            className="
                              line-clamp-2
                              w-full
                              overflow-hidden
                              text-sm
                              font-extrabold
                              uppercase
                              leading-5
                              text-[#07133d]
                              transition-colors
                              duration-300
                              group-hover:text-[#302b80]
                            "
                          >
                            {nombre}
                          </h3>

                        </div>

                      </div>

                    </SwiperSlide>

                  );
                }
              )}

            </Swiper>

          </div>

        )}

      </div>

      {/* ========================================================
          MODAL
      ======================================================== */}

      {productoSeleccionado && (

        <div
          onClick={() =>
            setProductoSeleccionado(
              null
            )
          }
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            overflow-y-auto
            bg-black/75
            p-3
            backdrop-blur-sm
          "
        >

          {/* ====================================================
              MODAL
          ==================================================== */}

          <div
            onClick={(e) =>
              e.stopPropagation()
            }
            className="
              relative
              w-[92%]
              max-w-[420px]
              overflow-hidden
              rounded-2xl
              bg-white
              shadow-2xl
              sm:w-[420px]
            "
          >

            {/* ================================================
                BOTÓN CERRAR
            ================================================= */}

            <button
              type="button"
              onClick={() =>
                setProductoSeleccionado(
                  null
                )
              }
              aria-label={
                idiomaActual === "EN"
                  ? "Close window"
                  : "Cerrar ventana"
              }
              className="
                absolute
                right-3
                top-3
                z-30
                flex
                h-9
                w-9
                cursor-pointer
                items-center
                justify-center
                rounded-full
                bg-[#302b80]
                text-white
                shadow-md
                transition
                duration-300
                hover:scale-110
                hover:bg-[#07133d]
                focus:outline-none
              "
            >

              <X
                size={18}
              />

            </button>

            {/* ================================================
                IMAGEN
            ================================================= */}

            <div
              className="
                flex
                h-[280px]
                w-full
                items-center
                justify-center
                overflow-hidden
                bg-slate-50
                p-5
              "
            >

              {obtenerImagen(
                productoSeleccionado
              ) && (

                <img
                  src={
                    obtenerImagen(
                      productoSeleccionado
                    ).src
                  }
                  alt={
                    obtenerImagen(
                      productoSeleccionado
                    ).alt ||
                    obtenerNombreProducto(
                      productoSeleccionado
                    )
                  }
                  className="
                    max-h-full
                    max-w-full
                    object-contain
                  "
                />

              )}

            </div>

            {/* ================================================
                INFORMACIÓN
            ================================================= */}

            <div
              className="
                border-t
                border-slate-200
                bg-white
                px-5
                py-5
                text-center
              "
            >

              {/* ============================================
                  TÍTULO
              ============================================= */}

              <h2
                className="
                  text-base
                  font-extrabold
                  uppercase
                  leading-tight
                  text-[#07133d]
                "
              >

                {
                  obtenerNombreProducto(
                    productoSeleccionado
                  )
                }

              </h2>

              {/* ============================================
                  DESCRIPCIÓN
              ============================================= */}

              {productoSeleccionado.description && (

                <div
                  className="
                    mx-auto
                    mt-3
                    max-h-[180px]
                    max-w-[360px]
                    overflow-y-auto
                    whitespace-pre-line
                    text-left
                    text-xs
                    leading-5
                    text-slate-500
                    pr-2
                  "
                >

                  {
                    limpiarDescripcion(
                      productoSeleccionado.description
                    )
                  }

                </div>

              )}

            </div>

          </div>

        </div>

      )}

      {/* ========================================================
          ANIMACIONES DEL LOADER
      ======================================================== */}

      <style>
        {`

          @keyframes logoPulseProductos {

            0% {
              transform: scale(1);
              opacity: 0.70;
            }

            50% {
              transform: scale(1.06);
              opacity: 1;
            }

            100% {
              transform: scale(1);
              opacity: 0.70;
            }

          }

          @keyframes loadingProductos {

            0% {
              transform: translateX(-120%);
            }

            100% {
              transform: translateX(220%);
            }

          }

        `}
      </style>

    </section>
  );
}

export default MaquinasCarousel;