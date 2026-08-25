import {
  useEffect,
  useState
} from "react";

import {
  Swiper,
  SwiperSlide
} from "swiper/react";

import {
  Autoplay
} from "swiper/modules";

import "swiper/css";


/* ==============================================================
   CLIENTES
============================================================== */

function Clientes({
  language
}) {

  const isEnglish = language === "EN";


  /* ============================================================
     ESTADOS
  ============================================================ */

  const [
    clientes,
    setClientes
  ] = useState([]);


  const [
    cargando,
    setCargando
  ] = useState(true);


  const [
    error,
    setError
  ] = useState(false);


  /* ============================================================
     TRADUCCIONES
  ============================================================ */

  const t = isEnglish

    ? {

        eyebrow:
          "Our clients",

        title:
          "Companies that trust Penagos",

        description:
          "Companies that trust our technology and experience.",

        loading:
          "Loading clients...",

        error:
          "We couldn't load the clients.",

        empty:
          "No clients found.",

        final:
          "Growing together",

      }

    : {

        eyebrow:
          "Nuestros clientes",

        title:
          "Empresas que confían en Penagos",

        description:
          "Empresas que confían en nuestra tecnología y experiencia.",

        loading:
          "Cargando clientes...",

        error:
          "No pudimos cargar los clientes.",

        empty:
          "No se encontraron clientes.",

        final:
          "Creciendo juntos",

      };


  /* ============================================================
     CARGAR TODOS LOS CLIENTES DESDE WORDPRESS

     IMPORTANTE:

     Los clientes se identifican EXCLUSIVAMENTE
     por Alternative Text:

       cliente-penagos-01
       cliente-penagos-02
       cliente-penagos-03
       cliente-penagos-04

     NO buscamos por nombre de archivo.
     NO buscamos por título.
     NO buscamos máquinas.
  ============================================================ */

  useEffect(() => {

    let cancelado = false;


    const cargarClientes = async () => {

      try {

        setCargando(true);

        setError(false);

        setClientes([]);


        console.log(
          "=========================================="
        );

        console.log(
          "BUSCANDO CLIENTES PENAGOS"
        );

        console.log(
          "=========================================="
        );


        /* ======================================================
           ARRAY DONDE GUARDAREMOS LOS CLIENTES
        ====================================================== */

        const clientesEncontrados = [];


        /* ======================================================
           PAGINACIÓN WORDPRESS
        ====================================================== */

        let pagina = 1;

        let totalPaginas = 1;


        /* ======================================================
           CONSULTAR TODAS LAS PÁGINAS
        ====================================================== */

        while (
          pagina <= totalPaginas
        ) {

          console.log(
            `Consultando página ${pagina} de ${totalPaginas}...`
          );


          /* ====================================================
             CACHE BUSTER
          ==================================================== */

          const cacheBuster =
            Date.now();


          const url =
            `https://penagos.com/wp-json/wp/v2/media?per_page=100&page=${pagina}&_=${cacheBuster}`;


          console.log(
            "URL:",
            url
          );


          const respuesta =
            await fetch(
              url,
              {
                cache:
                  "no-store"
              }
            );


          console.log(
            `STATUS PÁGINA ${pagina}:`,
            respuesta.status
          );


          /* ====================================================
             WORDPRESS DEVUELVE 400 SI LA PÁGINA NO EXISTE
          ==================================================== */

          if (
            respuesta.status === 400
          ) {

            console.log(
              `La página ${pagina} no existe. Terminando búsqueda.`
            );

            break;

          }


          /* ====================================================
             OTROS ERRORES
          ==================================================== */

          if (
            !respuesta.ok
          ) {

            throw new Error(
              `Error WordPress: ${respuesta.status}`
            );

          }


          /* ====================================================
             LEER TOTAL DE PÁGINAS
          ==================================================== */

          if (
            pagina === 1
          ) {

            const encabezadoTotalPaginas =
              respuesta.headers.get(
                "X-WP-TotalPages"
              );


            if (
              encabezadoTotalPaginas
            ) {

              totalPaginas =
                parseInt(
                  encabezadoTotalPaginas,
                  10
                );

            }


            console.log(
              "TOTAL DE PÁGINAS WORDPRESS:",
              totalPaginas
            );

          }


          /* ====================================================
             CONVERTIR RESPUESTA A JSON
          ==================================================== */

          const datos =
            await respuesta.json();


          console.log(
            `MEDIA EN PÁGINA ${pagina}:`,
            datos.length
          );


          /* ====================================================
             SI NO HAY RESULTADOS
          ==================================================== */

          if (
            !datos ||
            datos.length === 0
          ) {

            console.log(
              "No hay más imágenes."
            );

            break;

          }


          /* ====================================================
             BUSCAR CLIENTES

             SOLO Alternative Text
          ==================================================== */

          datos.forEach(
            (
              item
            ) => {

              const alt =
                item?.alt_text
                  ?.toString()
                  ?.trim()
                  ?.toLowerCase();


              /* ================================================
                 CLIENTES POTENCIALES
              ================================================= */

              if (
                alt &&
                alt.includes(
                  "cliente-penagos"
                )
              ) {

                console.log(
                  "POSIBLE CLIENTE ENCONTRADO:",
                  {
                    id:
                      item.id,

                    alt:
                      item.alt_text,

                    tipo:
                      item.media_type,

                    url:
                      item.source_url
                  }
                );

              }


              /* ================================================
                 FILTRO DEFINITIVO
              ================================================= */

              if (

                alt &&

                alt.startsWith(
                  "cliente-penagos-"
                ) &&

                item?.media_type === "image"

              ) {

                clientesEncontrados.push(
                  item
                );

              }

            }
          );


          /* ====================================================
             SIGUIENTE PÁGINA
          ==================================================== */

          pagina++;

        }


        /* ======================================================
           SI EL COMPONENTE YA FUE DESMONTADO
        ====================================================== */

        if (
          cancelado
        ) {

          return;

        }


        /* ======================================================
           ELIMINAR DUPLICADOS
        ====================================================== */

        const clientesUnicos =
          Array.from(
            new Map(
              clientesEncontrados.map(
                (
                  cliente
                ) => [
                  cliente.id,
                  cliente
                ]
              )
            ).values()
          );


        /* ======================================================
           ORDENAR POR ALTERNATIVE TEXT
        ====================================================== */

        clientesUnicos.sort(
          (
            a,
            b
          ) => {

            const altA =
              a?.alt_text || "";


            const altB =
              b?.alt_text || "";


            return altA.localeCompare(
              altB,
              undefined,
              {
                numeric:
                  true,

                sensitivity:
                  "base"
              }
            );

          }
        );


        /* ======================================================
           RESULTADOS
        ====================================================== */

        console.log(
          "=========================================="
        );

        console.log(
          "BÚSQUEDA TERMINADA"
        );

        console.log(
          "=========================================="
        );

        console.log(
          "TOTAL CLIENTES ENCONTRADOS:",
          clientesUnicos.length
        );


        clientesUnicos.forEach(
          (
            cliente,
            index
          ) => {

            console.log(
              `${index + 1}.`,
              "ALT:",
              cliente.alt_text,
              "| ID:",
              cliente.id,
              "| URL:",
              cliente.source_url
            );

          }
        );


        console.log(
          "=========================================="
        );


        /* ======================================================
           SI NO ENCONTRÓ NINGUNO
        ====================================================== */

        if (
          clientesUnicos.length === 0
        ) {

          console.warn(
            "NO SE ENCONTRARON CLIENTES."
          );

          console.warn(
            "Verifica que el Alternative Text sea exactamente:"
          );

          console.warn(
            "cliente-penagos-01"
          );

          console.warn(
            "cliente-penagos-02"
          );

          console.warn(
            "cliente-penagos-03"
          );

          console.warn(
            "cliente-penagos-04"
          );

        }


        /* ======================================================
           GUARDAR EN REACT
        ====================================================== */

        setClientes(
          clientesUnicos
        );


      } catch (
        error
      ) {

        console.error(
          "=========================================="
        );

        console.error(
          "ERROR CLIENTES:"
        );

        console.error(
          error
        );

        console.error(
          "=========================================="
        );


        if (
          !cancelado
        ) {

          setError(
            true
          );

          setClientes(
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

        }

      }

    };


    cargarClientes();


    /* ==========================================================
       CLEANUP
    ========================================================== */

    return () => {

      cancelado =
        true;

    };

  }, []);


  /* ============================================================
     RENDER
  ============================================================ */

  return (

    <section
      id="clientes"
      className="
        relative
        overflow-hidden
        bg-white
        py-20
        sm:py-24
        lg:py-28
      "
    >


      {/* ======================================================
          DECORACIÓN SUPERIOR
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[240px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-[#9fd2ff]/20
          blur-[110px]
        "
      />


      {/* ======================================================
          DECORACIÓN INFERIOR
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          h-[180px]
          w-[600px]
          -translate-x-1/2
          rounded-full
          bg-[#302b80]/5
          blur-[100px]
        "
      />


      {/* ======================================================
          LÍNEA SUPERIOR
      ====================================================== */}

      <div
        className="
          absolute
          left-0
          right-0
          top-0
          h-[3px]
          bg-gradient-to-r
          from-transparent
          via-[#9fd2ff]
          to-transparent
        "
      />


      {/* ======================================================
          CONTENEDOR
      ====================================================== */}

      <div
        className="
          relative
          mx-auto
          max-w-[1380px]
          px-6
          lg:px-10
        "
      >


        {/* ====================================================
            CABECERA
        ==================================================== */}

        <div
          className="
            mx-auto
            max-w-3xl
            text-center
          "
        >


          {/* ==================================================
              EYEBROW
          ================================================== */}

          <div
            className="
              inline-flex
              items-center
              gap-3
            "
          >

            <span
              className="
                h-px
                w-8
                bg-[#302b80]
              "
            />


            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.25em]
                text-[#302b80]
                sm:text-[11px]
              "
            >

              {t.eyebrow}

            </span>


            <span
              className="
                h-px
                w-8
                bg-[#302b80]
              "
            />

          </div>


          {/* ==================================================
              TÍTULO
          ================================================== */}

          <h2
            className="
              mt-5
              text-3xl
              font-extrabold
              leading-tight
              tracking-tight
              text-[#07133d]
              sm:text-4xl
              lg:text-5xl
            "
          >

            {isEnglish ? (

              <>

                Companies that{" "}

                <span
                  className="
                    text-[#302b80]
                  "
                >
                  trust Penagos
                </span>

              </>

            ) : (

              <>

                Empresas que{" "}

                <span
                  className="
                    text-[#302b80]
                  "
                >
                  confían en Penagos
                </span>

              </>

            )}

          </h2>


          {/* ==================================================
              DESCRIPCIÓN
          ================================================== */}

          <p
            className="
              mx-auto
              mt-4
              max-w-xl
              text-sm
              leading-6
              text-slate-500
              md:text-base
            "
          >

            {t.description}

          </p>

        </div>


        {/* ====================================================
            ÁREA CLIENTES
        ==================================================== */}

        <div
          className="
            relative
            mt-12
          "
        >


          {/* ==================================================
              LOADING
          ================================================== */}

          {cargando && (

            <div
              className="
                flex
                min-h-[180px]
                items-center
                justify-center
              "
            >

              <div
                className="
                  flex
                  flex-col
                  items-center
                  gap-4
                "
              >

                <div
                  className="
                    h-8
                    w-8
                    animate-spin
                    rounded-full
                    border-2
                    border-slate-200
                    border-t-[#302b80]
                  "
                />


                <span
                  className="
                    text-xs
                    font-medium
                    text-slate-400
                  "
                >

                  {t.loading}

                </span>

              </div>

            </div>

          )}


          {/* ==================================================
              ERROR
          ================================================== */}

          {!cargando &&
            error && (

            <div
              className="
                flex
                min-h-[180px]
                items-center
                justify-center
                text-center
              "
            >

              <p
                className="
                  text-sm
                  text-slate-500
                "
              >

                {t.error}

              </p>

            </div>

          )}


          {/* ==================================================
              CARRUSEL CONTINUO
          ================================================== */}

          {!cargando &&
            !error &&
            clientes.length > 0 && (

            <div
              className="
                relative
              "
            >

              {/* =================================================
                  DEGRADADO IZQUIERDO
              ================================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  left-0
                  top-0
                  z-20
                  h-full
                  w-16
                  bg-gradient-to-r
                  from-white
                  to-transparent
                  sm:w-24
                "
              />


              {/* =================================================
                  DEGRADADO DERECHO
              ================================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  right-0
                  top-0
                  z-20
                  h-full
                  w-16
                  bg-gradient-to-l
                  from-white
                  to-transparent
                  sm:w-24
                "
              />


              <Swiper

                modules={[
                  Autoplay
                ]}


                /* =================================================
                   LOOP
                ================================================= */

                loop={
                  true
                }


                /* =================================================
                   AUTOPLAY CONTINUO
                ================================================= */

                autoplay={{

                  delay:
                    0,

                  disableOnInteraction:
                    false,

                  pauseOnMouseEnter:
                    true,

                }}


                /* =================================================
                   VELOCIDAD

                   Menor número = más rápido
                   Mayor número = más lento
                ================================================= */

                speed={
                  1200
                }


                /* =================================================
                   ESPACIO
                ================================================= */

                spaceBetween={
                  18
                }


                /* =================================================
                   MÓVIL
                ================================================= */

                slidesPerView={
                  2
                }


                /* =================================================
                   RESPONSIVE
                ================================================= */

                breakpoints={{

                  480: {

                    slidesPerView:
                      2,

                    spaceBetween:
                      18,

                  },


                  640: {

                    slidesPerView:
                      3,

                    spaceBetween:
                      20,

                  },


                  768: {

                    slidesPerView:
                      4,

                    spaceBetween:
                      22,

                  },


                  1024: {

                    slidesPerView:
                      5,

                    spaceBetween:
                      24,

                  },


                  1280: {

                    slidesPerView:
                      6,

                    spaceBetween:
                      26,

                  },

                }}


                className="
                  !overflow-visible
                  !pb-4
                "
              >

                {clientes.map(
                  (
                    cliente
                  ) => (

                    <SwiperSlide
                      key={
                        cliente.id
                      }
                    >

                      <ClienteCard
                        cliente={
                          cliente
                        }
                      />

                    </SwiperSlide>

                  )
                )}

              </Swiper>

            </div>

          )}


          {/* ==================================================
              SIN CLIENTES
          ================================================== */}

          {!cargando &&
            !error &&
            clientes.length === 0 && (

            <div
              className="
                py-10
                text-center
                text-sm
                text-slate-400
              "
            >

              {t.empty}

            </div>

          )}

        </div>


        {/* ====================================================
            FRASE FINAL
        ==================================================== */}

        {!cargando &&
          !error &&
          clientes.length > 0 && (

          <div
            className="
              mx-auto
              mt-8
              flex
              max-w-xl
              items-center
              gap-4
            "
          >

            <span
              className="
                h-px
                flex-1
                bg-gradient-to-r
                from-transparent
                to-[#9fd2ff]
              "
            />


            <span
              className="
                whitespace-nowrap
                text-[9px]
                font-bold
                uppercase
                tracking-[0.22em]
                text-[#302b80]
                sm:text-[10px]
              "
            >

              {t.final}

            </span>


            <span
              className="
                h-px
                flex-1
                bg-gradient-to-l
                from-transparent
                to-[#9fd2ff]
              "
            />

          </div>

        )}

      </div>

    </section>

  );

}


/* ==============================================================
   TARJETA CLIENTE
============================================================== */

function ClienteCard({
  cliente
}) {


  /* ============================================================
     IMAGEN
  ============================================================ */

  const imagen =
    cliente?.source_url;


  /* ============================================================
     NOMBRE
  ============================================================ */

  const nombre =
    cliente?.alt_text ||
    cliente?.title?.rendered ||
    "Cliente Penagos";


  /* ============================================================
     TARJETA
  ============================================================ */

  return (

    <div
      className="
        group
        relative
        flex
        h-[145px]
        cursor-pointer
        items-center
        justify-center
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white
        px-5
        shadow-[0_8px_30px_rgba(7,19,61,0.06)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#9fd2ff]
        hover:shadow-[0_15px_35px_rgba(48,43,128,0.12)]
      "
    >


      {/* ======================================================
          BRILLO
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-10
          -top-10
          h-24
          w-24
          rounded-full
          bg-[#9fd2ff]/20
          blur-2xl
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />


      {/* ======================================================
          LÍNEA INFERIOR
      ====================================================== */}

      <div
        className="
          absolute
          bottom-0
          left-1/2
          h-[2px]
          w-0
          -translate-x-1/2
          bg-[#302b80]
          transition-all
          duration-300
          group-hover:w-12
        "
      />


      {/* ======================================================
          LOGO
      ====================================================== */}

      {imagen && (

        <img
          src={
            imagen
          }
          alt={
            nombre
          }
          title={
            nombre
          }
          loading="lazy"
          className="
            relative
            z-10
            max-h-[85px]
            max-w-[88%]
            object-contain
            grayscale
            opacity-70
            transition-all
            duration-500
            group-hover:scale-105
            group-hover:grayscale-0
            group-hover:opacity-100
          "
        />

      )}

    </div>

  );

}


export default Clientes;