import {
  useEffect,
  useState
} from "react";


import {
  ArrowRight,
  CalendarDays,
  RefreshCw
} from "lucide-react";


import {
  Link
} from "react-router-dom";





function Noticias() {


  const [noticias, setNoticias] = useState([]);

  const [cargando, setCargando] = useState(true);

  const [error, setError] = useState(false);





  /* ============================================================
     CARGAR NOTICIAS
  ============================================================ */

  const cargarNoticias = async () => {

    setCargando(true);

    setError(false);


    try {

      const response = await fetch(
        "https://penagos.com/wp-json/wp/v2/posts?per_page=13&orderby=date&order=desc&_embed"
      );


      if (!response.ok) {

        throw new Error(
          `Error HTTP ${response.status}`
        );

      }


      const data = await response.json();


      if (!Array.isArray(data)) {

        throw new Error(
          "Respuesta inválida de WordPress"
        );

      }


      setNoticias(data);


    } catch (error) {

      console.error(
        "ERROR CARGANDO NOTICIAS:",
        error
      );

      setNoticias([]);

      setError(true);


    } finally {

      setCargando(false);

    }

  };





  /* ============================================================
     CARGAR AL INICIAR
  ============================================================ */

  useEffect(() => {

    cargarNoticias();

  }, []);





  /* ============================================================
     PANTALLA DE CARGA
  ============================================================ */

  if (cargando) {

    return (

      <section
        className="
          flex
          min-h-[500px]
          items-center
          justify-center
          bg-white
          px-6
        "
      >

        <div
          className="
            flex
            w-full
            flex-col
            items-center
            justify-center
          "
        >


          {/* ==================================================
              LOGO
          ================================================== */}

          <img
            src="http://penagos.com/wp-content/uploads/2020/03/Logotipo-Penagos-Hermanos-PNG.png"

            alt="Penagos Hermanos"

            className="
              w-[210px]
              object-contain
              animate-[logoPulse_2s_ease-in-out_infinite]
            "
          />



          {/* ==================================================
              BARRA
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
                animate-[loadingNoticias_1.4s_ease-in-out_infinite]
              "
            />

          </div>


        </div>


        {/* ====================================================
            ANIMACIONES
        ==================================================== */}

        <style>
          {`

            @keyframes logoPulse {

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


            @keyframes loadingNoticias {

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





  /* ============================================================
     ERROR
  ============================================================ */

  if (error) {

    return (

      <section
        className="
          flex
          min-h-[500px]
          items-center
          justify-center
          bg-white
          px-6
        "
      >

        <div
          className="
            flex
            w-full
            flex-col
            items-center
            text-center
          "
        >


          {/* ==================================================
              LOGO
          ================================================== */}

          <img
            src="http://penagos.com/wp-content/uploads/2020/03/Logotipo-Penagos-Hermanos-PNG.png"

            alt="Penagos Hermanos"

            className="
              w-[210px]
              object-contain
            "
          />


          {/* ==================================================
              MENSAJE
          ================================================== */}

          <h2
            className="
              mt-8
              text-2xl
              font-extrabold
              text-[#07133d]
            "
          >

            No pudimos cargar las noticias

          </h2>


          <p
            className="
              mt-2
              text-sm
              text-slate-500
            "
          >

            Intenta nuevamente en unos segundos.

          </p>


          {/* ==================================================
              BOTÓN
          ================================================== */}

          <button
            type="button"

            onClick={cargarNoticias}

            className="
              mt-6
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-[#302b80]
              px-6
              py-3
              text-sm
              font-bold
              text-white
              transition
              duration-300
              hover:bg-[#07133d]
            "
          >

            <RefreshCw size={16} />

            Intentar nuevamente

          </button>


        </div>

      </section>

    );

  }





  /* ============================================================
     SIN NOTICIAS
  ============================================================ */

  if (noticias.length === 0) {

    return (

      <section
        className="
          flex
          min-h-[400px]
          items-center
          justify-center
          bg-white
          px-6
        "
      >

        <div
          className="
            text-center
          "
        >

          <img
            src="http://penagos.com/wp-content/uploads/2020/03/Logotipo-Penagos-Hermanos-PNG.png"

            alt="Penagos Hermanos"

            className="
              mx-auto
              w-[210px]
              object-contain
            "
          />


          <h2
            className="
              mt-7
              text-2xl
              font-extrabold
              text-[#07133d]
            "
          >

            No hay noticias disponibles

          </h2>


          <button
            type="button"

            onClick={cargarNoticias}

            className="
              mt-6
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#302b80]
              px-6
              py-3
              text-sm
              font-bold
              text-[#302b80]
              transition
              hover:bg-[#302b80]
              hover:text-white
            "
          >

            <RefreshCw size={16} />

            Actualizar

          </button>

        </div>

      </section>

    );

  }





  /* ============================================================
     NOTICIAS
  ============================================================ */

  const noticiaPrincipal = noticias[0];

  const noticiasSecundarias = noticias.slice(1);





  return (

    <section
      className="
        bg-white
        py-24
      "
    >

      <div
        className="
          mx-auto
          max-w-[1380px]
          px-6
          lg:px-10
        "
      >


        {/* ======================================================
            TITULO
        ====================================================== */}

        <div
          className="
            mb-14
          "
        >

          <h2
            className="
              mt-3
              text-4xl
              font-extrabold
              text-[#07133d]
              md:text-5xl
            "
          >

            Noticias

          </h2>


          <p
            className="
              mt-4
              max-w-2xl
              text-lg
              text-slate-500
            "
          >

            Conoce nuestras novedades,
            proyectos, eventos y avances
            de Penagos.

          </p>

        </div>





        {/* ======================================================
            NOTICIA DESTACADA
        ====================================================== */}

        <article
          className="
            group
            mb-16
            overflow-hidden
            rounded-3xl
            border
            border-slate-200
            bg-white
            shadow-md
            transition
            duration-300
            hover:shadow-xl
          "
        >

          <div
            className="
              grid
              lg:grid-cols-2
            "
          >


            {/* ==================================================
                IMAGEN
            ================================================== */}

            <Link
              to={`/noticia/${noticiaPrincipal.id}`}

              className="
                overflow-hidden
              "
            >

              <img
                src={
                  noticiaPrincipal
                    ._embedded
                    ?.["wp:featuredmedia"]
                    ?.[0]
                    ?.source_url

                  ||

                  "https://penagos.com/wp-content/uploads/2026/08/favicon.png"
                }

                alt={
                  noticiaPrincipal.title.rendered
                }

                className="
                  h-[360px]
                  w-full
                  object-cover
                  transition
                  duration-500
                  group-hover:scale-105
                  lg:h-full
                "
              />

            </Link>



            {/* ==================================================
                INFORMACION
            ================================================== */}

            <div
              className="
                flex
                flex-col
                justify-center
                p-8
                md:p-12
              "
            >


              {/* FECHA */}

              <div
                className="
                  flex
                  items-center
                  gap-2
                  text-xs
                  font-bold
                  uppercase
                  tracking-widest
                  text-[#302b80]
                "
              >

                <CalendarDays size={15} />

                {
                  new Date(
                    noticiaPrincipal.date
                  ).toLocaleDateString(
                    "es-CO",
                    {
                      day: "numeric",
                      month: "long",
                      year: "numeric"
                    }
                  )
                }

              </div>



              {/* TITULO */}

              <h1
                className="
                  mt-5
                  text-3xl
                  font-extrabold
                  leading-tight
                  text-[#07133d]
                  transition
                  duration-300
                  group-hover:text-[#302b80]
                  md:text-4xl
                "

                dangerouslySetInnerHTML={{
                  __html:
                    noticiaPrincipal.title.rendered
                }}
              />



              {/* EXTRACTO */}

              <p
                className="
                  mt-5
                  line-clamp-3
                  text-base
                  leading-7
                  text-slate-500
                "
              >

                {
                  noticiaPrincipal.excerpt
                    ?.rendered
                    .replace(/(<([^>]+)>)/gi, "")
                }

              </p>



              {/* BOTÓN */}

              <Link
                to={`/noticia/${noticiaPrincipal.id}`}

                className="
                  mt-7
                  inline-flex
                  w-fit
                  items-center
                  gap-3
                  rounded-full
                  bg-[#302b80]
                  px-7
                  py-3
                  text-sm
                  font-bold
                  text-white
                  transition
                  duration-300
                  hover:bg-[#07133d]
                "
              >

                Leer noticia completa

                <ArrowRight size={18} />

              </Link>


            </div>

          </div>

        </article>





        {/* ======================================================
            TARJETAS
        ====================================================== */}

        <div
          className="
            grid
            gap-8
            md:grid-cols-2
            lg:grid-cols-3
          "
        >

          {
            noticiasSecundarias.map(
              (noticia) => (

                <article
                  key={noticia.id}

                  className="
                    group
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


                  {/* IMAGEN */}

                  <Link
                    to={`/noticia/${noticia.id}`}

                    className="
                      block
                      overflow-hidden
                    "
                  >

                    <img
                      src={
                        noticia
                          ._embedded
                          ?.["wp:featuredmedia"]
                          ?.[0]
                          ?.source_url

                        ||

                        "https://penagos.com/wp-content/uploads/2026/08/favicon.png"
                      }

                      alt={
                        noticia.title.rendered
                      }

                      className="
                        h-64
                        w-full
                        object-cover
                        transition
                        duration-500
                        group-hover:scale-105
                      "
                    />

                  </Link>



                  {/* INFORMACION */}

                  <div
                    className="
                      p-6
                    "
                  >


                    {/* FECHA */}

                    <div
                      className="
                        flex
                        items-center
                        gap-2
                        text-xs
                        font-bold
                        uppercase
                        tracking-wide
                        text-[#302b80]
                      "
                    >

                      <CalendarDays size={14} />

                      {
                        new Date(
                          noticia.date
                        ).toLocaleDateString(
                          "es-CO",
                          {
                            day: "numeric",
                            month: "short",
                            year: "numeric"
                          }
                        )
                      }

                    </div>



                    {/* TITULO */}

                    <h3
                      className="
                        mt-4
                        line-clamp-3
                        text-xl
                        font-extrabold
                        leading-7
                        text-[#07133d]
                        transition
                        duration-300
                        group-hover:text-[#302b80]
                      "

                      dangerouslySetInnerHTML={{
                        __html:
                          noticia.title.rendered
                      }}
                    />



                    {/* LINK */}

                    <Link
                      to={`/noticia/${noticia.id}`}

                      className="
                        mt-6
                        inline-flex
                        items-center
                        gap-2
                        text-sm
                        font-bold
                        text-[#302b80]
                        transition
                        hover:text-[#07133d]
                      "
                    >

                      Leer noticia

                      <ArrowRight size={15} />

                    </Link>


                  </div>


                </article>

              )
            )
          }

        </div>


      </div>

    </section>

  );

}


export default Noticias;