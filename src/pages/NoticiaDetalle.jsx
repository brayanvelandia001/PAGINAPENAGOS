import {
  useEffect,
  useState
} from "react";


import {
  useParams,
  Link
} from "react-router-dom";


import Header from "../components/Header";


import {
  CalendarDays,
  ArrowLeft,
  RefreshCw
} from "lucide-react";





function NoticiaDetalle({
  language,
  changeLanguage
}) {


  const { id } = useParams();


  const [noticia, setNoticia] = useState(null);

  const [cargando, setCargando] = useState(true);

  const [error, setError] = useState(false);


  const isEnglish = language === "EN";



  /* ============================================================
     TEXTOS
  ============================================================ */

  const textos = {

    es: {

      noPudoCargar:
        "No pudimos cargar la noticia",

      intentaNuevamente:
        "Intenta nuevamente en unos segundos.",

      intentar:
        "Intentar nuevamente",

      volver:
        "Volver",

      volverNoticias:
        "Volver a noticias",

      regresarNoticias:
        "Regresar a noticias"

    },


    en: {

      noPudoCargar:
        "We couldn't load the news article",

      intentaNuevamente:
        "Please try again in a few seconds.",

      intentar:
        "Try again",

      volver:
        "Back",

      volverNoticias:
        "Back to news",

      regresarNoticias:
        "Back to news"

    }

  };


  const t = isEnglish
    ? textos.en
    : textos.es;



  /* ============================================================
     CARGAR NOTICIA
  ============================================================ */

  const cargarNoticia = async () => {

    setCargando(true);

    setError(false);

    setNoticia(null);


    try {

      const response = await fetch(
        `https://penagos.com/wp-json/wp/v2/posts/${id}?_embed`
      );


      if (!response.ok) {

        throw new Error(
          `Error HTTP ${response.status}`
        );

      }


      const data = await response.json();


      /* ========================================================
         WORDPRESS PUEDE DEVOLVER UN OBJETO DE ERROR
      ======================================================== */

      if (
        !data ||
        data.code ||
        !data.id
      ) {

        throw new Error(
          "La noticia no existe."
        );

      }


      setNoticia(data);


    } catch (error) {

      console.error(
        "ERROR CARGANDO NOTICIA:",
        error
      );

      setError(true);


    } finally {

      setCargando(false);

    }

  };





  /* ============================================================
     CARGAR CUANDO CAMBIA EL ID
  ============================================================ */

  useEffect(() => {

    cargarNoticia();

  }, [id]);





  /* ============================================================
     PANTALLA DE CARGA
  ============================================================ */

  if (cargando) {

    return (

      <>

        <Header
          language={language}
          changeLanguage={changeLanguage}
        />


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
              src="https://penagos.com/wp-content/uploads/2020/03/Logotipo-Penagos-Hermanos-PNG.png"

              alt="Penagos Hermanos"

              className="
                w-[210px]
                object-contain
                animate-[logoPulseNoticia_2s_ease-in-out_infinite]
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
                  animate-[loadingNoticia_1.4s_ease-in-out_infinite]
                "
              />

            </div>


          </div>



          {/* ====================================================
              ANIMACIONES
          ==================================================== */}

          <style>
            {`

              @keyframes logoPulseNoticia {

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


              @keyframes loadingNoticia {

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

      </>

    );

  }





  /* ============================================================
     PANTALLA DE ERROR
  ============================================================ */

  if (error) {

    return (

      <>

        <Header
          language={language}
          changeLanguage={changeLanguage}
        />


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
              src="https://penagos.com/wp-content/uploads/2020/03/Logotipo-Penagos-Hermanos-PNG.png"

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

              {t.noPudoCargar}

            </h2>


            <p
              className="
                mt-2
                text-sm
                text-slate-500
              "
            >

              {t.intentaNuevamente}

            </p>



            {/* ==================================================
                BOTONES
            ================================================== */}

            <div
              className="
                mt-6
                flex
                flex-col
                items-center
                gap-3
                sm:flex-row
              "
            >


              {/* REINTENTAR */}

              <button
                type="button"

                onClick={cargarNoticia}

                className="
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

                <RefreshCw
                  size={16}
                />

                {t.intentar}

              </button>



              {/* VOLVER */}

              <Link
                to="/blog"

                className="
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
                  duration-300
                  hover:bg-[#302b80]
                  hover:text-white
                "
              >

                <ArrowLeft
                  size={16}
                />

                {t.volver}

              </Link>


            </div>


          </div>

        </section>

      </>

    );

  }





  /* ============================================================
     IMAGEN DESTACADA
  ============================================================ */

  const imagen =
    noticia
      ?._embedded
      ?.["wp:featuredmedia"]
      ?.[0]
      ?.source_url;





  /* ============================================================
     FECHA
  ============================================================ */

  const fecha = new Date(
    noticia.date
  ).toLocaleDateString(

    isEnglish
      ? "en-US"
      : "es-CO",

    {
      day: "numeric",
      month: "long",
      year: "numeric"
    }

  );





  /* ============================================================
     NOTICIA
  ============================================================ */

  return (

    <div
      className="
        min-h-screen
        bg-white
      "
    >


      {/* ========================================================
          HEADER
      ======================================================== */}

      <Header
        language={language}
        changeLanguage={changeLanguage}
      />



      <main
        className="
          bg-white
        "
      >


        <section
          className="
            mx-auto
            max-w-[1100px]
            px-6
            py-16
            lg:py-24
          "
        >


          {/* ==================================================
              VOLVER
          ================================================== */}

          <Link
            to="/blog"

            className="
              mb-10
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#302b80]
              px-5
              py-3
              text-sm
              font-bold
              text-[#302b80]
              transition-all
              duration-300
              hover:bg-[#302b80]
              hover:text-white
            "
          >

            <ArrowLeft
              size={17}
            />

            {t.volverNoticias}

          </Link>



          {/* ==================================================
              IMAGEN PRINCIPAL
          ================================================== */}

          {imagen && (

            <div
              className="
                flex
                justify-center
              "
            >

              <img
                src={imagen}

                alt={
                  noticia.title.rendered
                }

                className="
                  w-full
                  max-h-[560px]
                  rounded-3xl
                  object-cover
                  shadow-xl
                "
              />

            </div>

          )}



          {/* ==================================================
              INFORMACIÓN
          ================================================== */}

          <div
            className="
              mt-10
            "
          >


            {/* ==================================================
                FECHA
            ================================================== */}

            <div
              className="
                flex
                items-center
                gap-2
                text-sm
                font-bold
                uppercase
                tracking-wide
                text-[#302b80]
              "
            >

              <CalendarDays
                size={17}
              />


              {fecha}

            </div>



            {/* ==================================================
                TITULO
            ================================================== */}

            <h1
              className="
                mt-6
                text-4xl
                font-extrabold
                leading-tight
                text-[#07133d]
                md:text-6xl
              "

              dangerouslySetInnerHTML={{
                __html:
                  noticia.title.rendered
              }}
            />



            {/* ==================================================
                CONTENIDO WORDPRESS
            ================================================== */}

            <article
              className="
                noticia-contenido
                mt-12
                text-lg
                leading-8
                text-slate-600
              "

              dangerouslySetInnerHTML={{
                __html:
                  noticia.content.rendered
              }}
            />



            {/* ==================================================
                BOTÓN FINAL
            ================================================== */}

            <div
              className="
                mt-16
                border-t
                border-slate-200
                pt-8
              "
            >

              <Link
                to="/blog"

                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-[#302b80]
                  px-7
                  py-3
                  font-bold
                  text-white
                  transition
                  hover:bg-[#24205f]
                "
              >

                <ArrowLeft
                  size={18}
                />

                {t.regresarNoticias}

              </Link>

            </div>


          </div>


        </section>


      </main>

    </div>

  );

}


export default NoticiaDetalle;