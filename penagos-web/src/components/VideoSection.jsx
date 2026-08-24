function VideoSection({ language = "ES" }) {

  /* ============================================================
     TRADUCCIONES
  ============================================================ */

  const textos = {

    ES: {
      titulo1: "Contribuimos a la protección del agua",

      titulo2: "para que la agricultura sea",

      titulo3: "fuente de progreso sostenible",

      titulo4: "para todos",

      descripcion:
        "Innovación, tecnología y compromiso con una agricultura más sostenible."
    },


    EN: {
      titulo1: "We contribute to water protection",

      titulo2: "so that agriculture can be",

      titulo3: "a source of sustainable progress",

      titulo4: "for everyone",

      descripcion:
        "Innovation, technology and commitment to more sustainable agriculture."
    }

  };


  /* ============================================================
     TEXTO SEGÚN IDIOMA
  ============================================================ */

  const texto =
    textos[language] || textos.ES;


  return (

    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-black
      "
    >


      {/* =====================================================
          CONTENEDOR
      ====================================================== */}

      <div
        className="
          relative
          h-[360px]
          w-full
          overflow-hidden
          sm:h-[400px]
          md:h-[460px]
          lg:h-[500px]
        "
      >


        {/* =====================================================
            VIDEO
        ====================================================== */}

        <iframe

          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            w-full
            -translate-x-1/2
            -translate-y-1/2
            border-0
          "

          style={{
            height: "56.25vw",
            minHeight: "650px",
          }}

          src="https://www.youtube.com/embed/4xnqphAYfh4?autoplay=1&mute=1&loop=1&playlist=4xnqphAYfh4&controls=0&modestbranding=1&rel=0&playsinline=1&iv_load_policy=3&disablekb=1"

          title="Penagos Hermanos"

          allow="autoplay; encrypted-media"

          frameBorder="0"

        />


        {/* =====================================================
            SOMBRA
        ====================================================== */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#07133d]/55
            via-black/20
            to-black/40
          "
        />


        {/* =====================================================
            TEXTO
        ====================================================== */}

        <div
          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
            px-6
          "
        >


          <div
            className="
              max-w-4xl
              text-center
              text-white
            "
          >


            {/* =================================================
                TÍTULO
            ================================================== */}

            <h2
              className="
                text-2xl
                font-light
                leading-tight
                tracking-tight
                sm:text-3xl
                md:text-4xl
                lg:text-5xl
              "
            >

              {texto.titulo1}


              <br />


              <span
                className="
                  font-semibold
                "
              >
                {texto.titulo2}
              </span>


              <br />


              <span
                className="
                  italic
                  text-white/85
                "
              >
                {texto.titulo3}
              </span>


              <br />


              <span
                className="
                  font-semibold
                "
              >
                {texto.titulo4}
              </span>


            </h2>


            {/* =================================================
                LÍNEA
            ================================================== */}

            <div
              className="
                mx-auto
                mt-6
                h-[2px]
                w-20
                bg-white/70
              "
            />


            {/* =================================================
                DESCRIPCIÓN
            ================================================== */}

            <p
              className="
                mx-auto
                mt-5
                max-w-xl
                text-sm
                text-white/75
                md:text-base
              "
            >

              {texto.descripcion}

            </p>


          </div>


        </div>


      </div>


    </section>

  );

}


export default VideoSection;