/* ==============================================================
   MAPA / DE COLOMBIA PARA EL MUNDO
============================================================== */

function Mapa({
  language
}) {

  const isEnglish = language === "EN";


  /* ============================================================
     TRADUCCIONES
  ============================================================ */

  const t = isEnglish
    ? {

        eyebrow:
          "From Colombia to the world",

        title:
          "More than a century taking our machinery around the world",

        years:
          "Years of experience",

        yearsDescription:
          "serving agriculture",

        countries:
          "Countries",

        countriesDescription:
          "with Penagos equipment in operation",

        international:
          "International distributors",

        internationalDescription:
          "around the world",

        colombia:
          "Distributors",

        colombiaDescription:
          "in Colombia",

        final:
          "Colombian technology with global reach",

      }

    : {

        eyebrow:
          "De Colombia para el mundo",

        title:
          "Más de un siglo llevando nuestra maquinaria al mundo",

        years:
          "Años de trayectoria",

        yearsDescription:
          "en la agricultura",

        countries:
          "Países",

        countriesDescription:
          "con equipos Penagos en funcionamiento",

        international:
          "Distribuidores internacionales",

        internationalDescription:
          "a nivel internacional",

        colombia:
          "Distribuidores",

        colombiaDescription:
          "en Colombia",

        final:
          "Tecnología colombiana con alcance mundial",

      };


  /* ============================================================
     ESTADÍSTICAS
  ============================================================ */

  const estadisticas = [

    {
      numero: "128",
      titulo: t.years,
      descripcion: t.yearsDescription,
    },

    {
      numero: "40",
      titulo: t.countries,
      descripcion: t.countriesDescription,
    },

    {
      numero: "24",
      titulo: t.international,
      descripcion: t.internationalDescription,
    },

    {
      numero: "+300",
      titulo: t.colombia,
      descripcion: t.colombiaDescription,
    },

  ];


  return (

    <section
      id="mundo"
      className="
        relative
        overflow-hidden
        bg-[#07133d]
        py-20
        sm:py-24
        lg:py-28
      "
    >


      {/* ======================================================
          FONDO
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
        "
      >

        {/* LUZ CELESTE */}

        <div
          className="
            absolute
            left-1/2
            top-[48%]
            h-[260px]
            w-[700px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#9fd2ff]/20
            blur-[100px]
          "
        />


        {/* AZUL PENAGOS */}

        <div
          className="
            absolute
            -right-40
            -top-40
            h-[450px]
            w-[450px]
            rounded-full
            bg-[#302b80]/30
            blur-[120px]
          "
        />


        <div
          className="
            absolute
            -bottom-40
            -left-40
            h-[450px]
            w-[450px]
            rounded-full
            bg-[#302b80]/30
            blur-[120px]
          "
        />


        {/* LÍNEA SUPERIOR */}

        <div
          className="
            absolute
            left-0
            right-0
            top-0
            h-px
            bg-[#9fd2ff]/30
          "
        />

      </div>



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


          {/* EYEBROW */}

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
                bg-[#9fd2ff]
              "
            />


            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.25em]
                text-[#b9ddff]
                sm:text-[11px]
              "
            >

              {t.eyebrow}

            </span>


            <span
              className="
                h-px
                w-8
                bg-[#9fd2ff]
              "
            />

          </div>



          {/* TÍTULO */}

          <h2
            className="
              mt-5
              text-3xl
              font-extrabold
              leading-tight
              tracking-tight
              text-white
              sm:text-4xl
              lg:text-5xl
            "
          >

            {isEnglish ? (

              <>
                More than a century taking{" "}

                <span
                  className="
                    text-[#9fd2ff]
                  "
                >
                  our machinery
                </span>

                {" "}around the world
              </>

            ) : (

              <>
                Más de un siglo llevando{" "}

                <span
                  className="
                    text-[#9fd2ff]
                  "
                >
                  nuestra maquinaria
                </span>

                {" "}al mundo
              </>

            )}

          </h2>

        </div>



        {/* ====================================================
            CONTENIDO
        ==================================================== */}

        <div
          className="
            mt-14
            grid
            items-center
            gap-8
            lg:grid-cols-[220px_minmax(0,1fr)_220px]
            lg:gap-10
          "
        >


          {/* ==================================================
              ESTADÍSTICAS IZQUIERDA
          ================================================== */}

          <div
            className="
              order-2
              grid
              gap-4
              lg:order-1
            "
          >

            <StatCard
              numero={estadisticas[0].numero}
              titulo={estadisticas[0].titulo}
              descripcion={estadisticas[0].descripcion}
            />


            <StatCard
              numero={estadisticas[1].numero}
              titulo={estadisticas[1].titulo}
              descripcion={estadisticas[1].descripcion}
            />

          </div>



          {/* ==================================================
              MAPA
          ================================================== */}

          <div
            className="
              order-1
              relative
              flex
              min-h-[280px]
              items-center
              justify-center
              lg:order-2
              lg:min-h-[430px]
            "
          >


            {/* BRILLO DETRÁS DEL MAPA */}

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[260px]
                w-[420px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#9fd2ff]/25
                blur-[80px]
              "
            />


            {/* MAPA */}

            <img
              src="https://penagos.com/wp-content/uploads/2021/08/Mapa-de-Colombia-para-el-Mundo.png"

              alt={
                isEnglish
                  ? "Penagos machinery from Colombia to the world"
                  : "Maquinaria Penagos de Colombia para el mundo"
              }

              className="
                relative
                z-10
                w-full
                max-w-[570px]
                object-contain
                drop-shadow-[0_20px_40px_rgba(7,19,61,0.45)]
                transition-transform
                duration-500
                hover:scale-[1.02]
              "
            />

          </div>



          {/* ==================================================
              ESTADÍSTICAS DERECHA
          ================================================== */}

          <div
            className="
              order-3
              grid
              gap-4
            "
          >

            <StatCard
              numero={estadisticas[2].numero}
              titulo={estadisticas[2].titulo}
              descripcion={estadisticas[2].descripcion}
            />


            <StatCard
              numero={estadisticas[3].numero}
              titulo={estadisticas[3].titulo}
              descripcion={estadisticas[3].descripcion}
            />

          </div>

        </div>



        {/* ====================================================
            FRASE FINAL
        ==================================================== */}

        <div
          className="
            mx-auto
            mt-10
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
              to-[#9fd2ff]/40
            "
          />


          <span
            className="
              text-center
              text-[9px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-[#b9ddff]
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
              to-[#9fd2ff]/40
            "
          />

        </div>


      </div>

    </section>

  );

}



/* ==============================================================
   TARJETA DE ESTADÍSTICA
============================================================== */

function StatCard({
  numero,
  titulo,
  descripcion
}) {

  return (

    <div
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-[#9fd2ff]/20
        bg-[#10205a]/80
        px-5
        py-6
        shadow-[0_15px_35px_rgba(7,19,61,0.25)]
        backdrop-blur-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#9fd2ff]/60
        hover:bg-[#152968]
      "
    >


      {/* ==================================================
          BRILLO
      ================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-8
          -top-8
          h-20
          w-20
          rounded-full
          bg-[#9fd2ff]/20
          blur-2xl
          transition-all
          duration-500
          group-hover:bg-[#9fd2ff]/35
        "
      />


      {/* ==================================================
          NÚMERO
      ================================================== */}

      <div
        className="
          relative
        "
      >

        <span
          className="
            text-4xl
            font-black
            leading-none
            tracking-tight
            text-white
            transition-colors
            duration-300
            group-hover:text-[#e5f3ff]
            lg:text-[44px]
          "
        >

          {numero}

        </span>

      </div>



      {/* ==================================================
          TÍTULO
      ================================================== */}

      <h3
        className="
          relative
          mt-4
          text-sm
          font-bold
          leading-5
          text-white
        "
      >

        {titulo}

      </h3>



      {/* ==================================================
          DESCRIPCIÓN
      ================================================== */}

      <p
        className="
          relative
          mt-1
          text-xs
          leading-5
          text-[#cce2f7]
        "
      >

        {descripcion}

      </p>



      {/* ==================================================
          DETALLE CELESTE
      ================================================== */}

      <div
        className="
          relative
          mt-5
          h-[3px]
          w-9
          rounded-full
          bg-[#9fd2ff]
          transition-all
          duration-300
          group-hover:w-14
          group-hover:bg-white
        "
      />

    </div>

  );

}


export default Mapa;