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

  const texto = textos[language] || textos.ES;


  return (

    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-black
      "
    >

      {/* ========================================================
          CONTENEDOR DEL VIDEO
      ======================================================== */}

      <div
        className="
          relative
          min-h-screen
          w-full
          overflow-hidden
        "
      >

        {/* ======================================================
            VIDEO
        ====================================================== */}

        <iframe

          className="
            pointer-events-none
            absolute
            left-1/2
            top-[54%]

            h-[56.25vw]
            w-[177.78vh]

            min-h-[650px]
            min-w-full

            -translate-x-1/2
            -translate-y-1/2

            scale-[1.08]

            border-0

            sm:top-[55%]
            sm:scale-[1.10]

            md:top-[56%]
            md:scale-[1.12]

            lg:top-[57%]
            lg:scale-[1.15]
          "

          src="https://www.youtube.com/embed/4xnqphAYfh4?autoplay=1&mute=1&loop=1&playlist=4xnqphAYfh4&controls=0&modestbranding=1&rel=0&playsinline=1&iv_load_policy=3&disablekb=1"

          title="Penagos Hermanos"

          allow="autoplay; encrypted-media"

          frameBorder="0"

        />


        {/* ======================================================
            SOMBRA / OVERLAY
        ====================================================== */}

        <div
          className="
            absolute
            inset-0

            bg-gradient-to-r

            from-[#07133d]/60

            via-black/25

            to-black/45

            pointer-events-none
          "
        />


        {/* ======================================================
            TEXTO CENTRADO
            SE MANTIENE EN EL CENTRO
        ====================================================== */}

        <div
          className="
            absolute
            inset-0

            flex
            items-center
            justify-center

            px-6

            pointer-events-none
          "
        >

          <div
            className="
              max-w-4xl
              text-center
              text-white

              translate-y-8

              sm:translate-y-10

              md:translate-y-12
            "
          >

            {/* =================================================
                TÍTULO
            ================================================== */}

            <h2
              className="
                text-[30px]

                font-light

                leading-[1.08]

                tracking-[-0.025em]

                text-white

                drop-shadow-[0_4px_20px_rgba(0,0,0,0.35)]

                sm:text-[38px]

                md:text-[46px]

                lg:text-[56px]

                xl:text-[60px]
              "
            >

              {texto.titulo1}

              <br />

              <span
                className="
                  font-semibold
                  tracking-[-0.03em]
                "
              >
                {texto.titulo2}
              </span>

              <br />

              <span
                className="
                  font-light
                  italic
                  text-white/85
                  tracking-[-0.025em]
                "
              >
                {texto.titulo3}
              </span>

              <br />

              <span
                className="
                  font-semibold
                  text-white
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

                mt-7

                h-[3px]

                w-20

                rounded-full

                bg-[#00A4E4]

                shadow-[0_0_15px_rgba(0,164,228,0.45)]
              "
            />


            {/* =================================================
                DESCRIPCIÓN
            ================================================== */}

            <p
              className="
                mx-auto

                mt-6

                max-w-xl

                text-[14px]

                font-light

                leading-7

                tracking-[0.01em]

                text-white/75

                drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]

                sm:text-[15px]

                md:text-[16px]

                lg:text-[17px]
              "
            >

              {texto.descripcion}

            </p>

          </div>

        </div>


        {/* ======================================================
            LÍNEA INFERIOR PENAGOS
        ====================================================== */}

        <div
          className="
            absolute
            bottom-0
            left-0

            h-[3px]

            w-full

            bg-[#00A4E4]

            pointer-events-none
          "
        />

      </div>

    </section>

  );

}


export default VideoSection;