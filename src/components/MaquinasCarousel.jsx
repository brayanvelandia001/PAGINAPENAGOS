import {
  useEffect,
  useRef,
  useState
} from "react";

import {
  Swiper,
  SwiperSlide
} from "swiper/react";

import {
  Autoplay,
  Navigation
} from "swiper/modules";

import {
  X,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";


function MaquinasCarousel({
  language
}) {

  const [productos, setProductos] = useState([]);

  const [
    productoSeleccionado,
    setProductoSeleccionado
  ] = useState(null);

  const [
    cargando,
    setCargando
  ] = useState(true);


  /*
  ================================================================
  REFERENCIAS PARA LAS FLECHAS
  ================================================================
  */

  const botonAnteriorRef = useRef(null);

  const botonSiguienteRef = useRef(null);


  /*
  ================================================================
  IDIOMA ACTUAL
  ================================================================
  */

  const idiomaActual =
    language === "EN"
      ? "EN"
      : "ES";


  /*
  ================================================================
  DETECTAR IDIOMA DEL PRODUCTO
  ================================================================
  */

  const obtenerIdiomaProducto = (
    producto
  ) => {

    /*
    ============================================================
    1. CAMPOS DIRECTOS
    ============================================================
    */

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


    /*
    ============================================================
    2. OBJETO DE IDIOMA
    ============================================================
    */

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


    /*
    ============================================================
    3. TAXONOMÍAS / CATEGORÍAS
    ============================================================
    */

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


    /*
    ============================================================
    4. SLUG
    ============================================================
    */

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
      "inglés-"
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
      "español-"
    ];


    if (
      palabrasEspanol.some(
        (palabra) =>
          slug.includes(palabra)
      )
    ) {

      return "ES";

    }


    /*
    ============================================================
    5. WPML
    ============================================================
    */

    if (
      producto._links
    ) {

      const linksTexto =
        JSON.stringify(
          producto._links
        ).toLowerCase();


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


  /*
  ================================================================
  CARGAR PRODUCTOS
  ================================================================
  */

  useEffect(() => {

    let cancelado = false;


    const cargarProductos = async () => {

      try {

        setCargando(true);

        setProductos([]);

        setProductoSeleccionado(null);


        console.log(
          "===================================="
        );

        console.log(
          "IDIOMA DEL HEADER:",
          language
        );

        console.log(
          "IDIOMA DEL CARRUSEL:",
          idiomaActual
        );

        console.log(
          "===================================="
        );


        let todosLosProductos = [];

        let pagina = 1;

        let hayMasPaginas = true;


        /*
        ==========================================================
        OBTENER TODAS LAS PÁGINAS
        ==========================================================
        */

        while (
          hayMasPaginas &&
          !cancelado
        ) {

          const url =
            `https://penagos.com/wp-json/wc/store/v1/products` +
            `?per_page=100` +
            `&page=${pagina}`;


          console.log(
            "CONSULTANDO:",
            url
          );


          const response =
            await fetch(
              url
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


          todosLosProductos = [
            ...todosLosProductos,
            ...data
          ];


          const totalPaginas =
            parseInt(
              response.headers.get(
                "X-WP-TotalPages"
              ) || "1",
              10
            );


          if (
            pagina >=
            totalPaginas
          ) {

            hayMasPaginas =
              false;

          } else {

            pagina++;

          }

        }


        if (
          cancelado
        ) {

          return;

        }


        console.log(
          "TOTAL PRODUCTOS RECIBIDOS:",
          todosLosProductos.length
        );


        /*
        ============================================================
        FILTRAR POR IDIOMA
        ============================================================
        */

        const productosFiltrados =
          todosLosProductos.filter(
            (producto) => {

              const tieneImagen =
                Array.isArray(
                  producto.images
                ) &&
                producto.images.length > 0;


              if (
                !tieneImagen
              ) {

                return false;

              }


              const idiomaProducto =
                obtenerIdiomaProducto(
                  producto
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
          "===================================="
        );

        console.log(
          `PRODUCTOS ${idiomaActual}:`,
          productosFiltrados.length
        );

        console.log(
          productosFiltrados
        );

        console.log(
          "===================================="
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

        console.error(
          "ERROR CARGANDO PRODUCTOS:",
          error
        );


        if (
          !cancelado
        ) {

          setProductos([]);

        }

      } finally {

        if (
          !cancelado
        ) {

          setCargando(false);

        }

      }

    };


    cargarProductos();


    return () => {

      cancelado = true;

    };

  }, [
    language,
    idiomaActual
  ]);


  /*
  ================================================================
  CERRAR MODAL CON ESCAPE
  ================================================================
  */

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
    productoSeleccionado
  ]);


  /*
  ================================================================
  LIMPIAR DESCRIPCIÓN
  ================================================================
  */

  const limpiarDescripcion =
    (
      descripcion
    ) => {

      if (
        !descripcion
      ) {

        return "";

      }


      return descripcion

        .replace(
          /<[^>]*>/g,
          ""
        )

        .replace(
          /&nbsp;/g,
          " "
        )

        .replace(
          /&amp;/g,
          "&"
        )

        .replace(
          /&quot;/g,
          '"'
        )

        .replace(
          /&#039;/g,
          "'"
        )

        .trim();

    };


  /*
  ================================================================
  OBTENER IMAGEN
  ================================================================
  */

  const obtenerImagen =
    (
      producto
    ) => {

      if (
        !producto.images ||
        producto.images.length === 0
      ) {

        return null;

      }


      return producto.images[0];

    };


  /*
  ================================================================
  RENDER
  ================================================================
  */

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

        {cargando ? (

          <div
            className="
              flex
              min-h-[240px]
              items-center
              justify-center
              text-sm
              font-semibold
              text-slate-400
            "
          >

            Cargando productos...

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
              No hay productos disponibles.
            </p>

            <p
              className="
                mt-2
                text-xs
                font-normal
                text-slate-400
              "
            >

              Idioma:
              {" "}
              {idiomaActual}

            </p>

          </div>

        ) : (

          /*
          ==========================================================
          CONTENEDOR DEL CARRUSEL + FLECHAS
          ==========================================================
          */

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

            {/* ====================================================
                FLECHA IZQUIERDA
            ==================================================== */}

            <button
              ref={botonAnteriorRef}
              type="button"
              aria-label="Producto anterior"
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


            {/* ====================================================
                FLECHA DERECHA
            ==================================================== */}

            <button
              ref={botonSiguienteRef}
              type="button"
              aria-label="Producto siguiente"
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


            {/* ====================================================
                SWIPER
            ==================================================== */}

            <Swiper

              modules={[
                Autoplay,
                Navigation
              ]}

              onBeforeInit={(swiper) => {

                swiper.params.navigation.prevEl =
                  botonAnteriorRef.current;

                swiper.params.navigation.nextEl =
                  botonSiguienteRef.current;

              }}

              navigation={{
                prevEl:
                  botonAnteriorRef.current,

                nextEl:
                  botonSiguienteRef.current
              }}

              loop={
                productos.length > 4
              }

              autoplay={{

                delay: 1500,

                disableOnInteraction:
                  false,

                pauseOnMouseEnter:
                  true

              }}

              speed={1200}

              spaceBetween={30}

              slidesPerView={1}

              breakpoints={{

                640: {

                  slidesPerView: 2,

                  spaceBetween: 24

                },

                1024: {

                  slidesPerView: 4,

                  spaceBetween: 30

                }

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

                      {/* ==================================================
                          TARJETA
                      ================================================== */}

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

                        {/* =================================================
                            ÁREA DE IMAGEN
                        ================================================= */}

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
                                producto.name
                              }

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


                        {/* =================================================
                            NOMBRE
                        ================================================= */}

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

                            {
                              producto.name
                            }

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


      {/* ==========================================================
          MODAL
      ========================================================== */}

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
            p-4
            backdrop-blur-sm
          "
        >

          <div
            onClick={(e) =>
              e.stopPropagation()
            }

            className="
              relative
              w-full
              max-w-[500px]
              overflow-hidden
              rounded-3xl
              bg-white
              shadow-2xl
            "
          >

            <button
              onClick={() =>
                setProductoSeleccionado(
                  null
                )
              }

              aria-label="Cerrar ventana"

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
                shadow-lg
                transition
                duration-300
                hover:scale-110
                hover:bg-[#07133d]
                focus:outline-none
              "
            >

              <X
                size={20}
              />

            </button>


            <div
              className="
                flex
                h-[340px]
                w-full
                items-center
                justify-center
                overflow-hidden
                bg-slate-50
                p-7
                sm:h-[360px]
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
                    productoSeleccionado.name
                  }

                  className="
                    max-h-full
                    max-w-full
                    object-contain
                  "
                />

              )}

            </div>


            <div
              className="
                border-t
                border-slate-200
                bg-white
                px-6
                py-6
                text-center
              "
            >

              <h2
                className="
                  text-xl
                  font-extrabold
                  uppercase
                  leading-tight
                  text-[#07133d]
                "
              >

                {
                  productoSeleccionado.name
                }

              </h2>


              {productoSeleccionado.description && (

                <p
                  className="
                    mx-auto
                    mt-3
                    max-w-[420px]
                    text-sm
                    leading-relaxed
                    text-slate-500
                  "
                >

                  {
                    limpiarDescripcion(
                      productoSeleccionado.description
                    )
                  }

                </p>

              )}

            </div>

          </div>

        </div>

      )}

    </section>

  );

}


export default MaquinasCarousel;