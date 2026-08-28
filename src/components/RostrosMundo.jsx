import React, { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Globe2,
  X,
} from "lucide-react";

function RostrosMundo({ language = "ES" }) {
  const isEnglish = language === "EN";

  // ============================================================
  // GALERÍAS
  // ============================================================

  const galerias = [
    // ==========================================================
    // AMÉRICA
    // ==========================================================

    {
      id: "america",

      nombre: isEnglish ? "America" : "América",

      subtitulo: isEnglish
        ? "People who grow with Penagos"
        : "Personas que crecen con Penagos",

      banner:
        "https://penagos.com/wp-content/uploads/2021/05/Banner-America.jpg",

      fotos: [
        {
          image:
            "https://penagos.com/wp-content/uploads/2020/12/América-7.jpg",
          country: "Colombia",
        },

        {
          image:
            "https://penagos.com/wp-content/uploads/2020/04/Costa-Rica-Am%C3%A9rica-imagen-globalidad-galeria-4.jpg",
          country: "Costa Rica",
        },

        {
          image:
            "https://penagos.com/wp-content/uploads/2020/11/AGRICULTORES-PENAGOS-am%C3%A9rica-7.jpg",
          country: "Colombia",
        },

        {
          image:
            "https://penagos.com/wp-content/uploads/2020/12/Am%C3%A9rica-6.jpg",
          country: "Colombia",
        },

        {
          image:
            "https://penagos.com/wp-content/uploads/2020/12/Am%C3%A9rica-5.jpg",
          country: "Costa Rica",
        },
      ],
    },

    // ==========================================================
    // ÁFRICA
    // ==========================================================

    {
      id: "africa",

      nombre: isEnglish ? "Africa" : "África",

      subtitulo: isEnglish
        ? "Stories from the African continent"
        : "Historias desde el continente africano",

      banner:
        "https://penagos.com/wp-content/uploads/2021/05/Banner-Africa-1.jpg",

      fotos: [
        {
          image:
            "https://penagos.com/wp-content/uploads/2020/12/%C3%81frica-7.jpg",
          country: "Etiopía",
        },

        {
          image:
            "https://penagos.com/wp-content/uploads/2020/12/%C3%81frica-8.jpg",
          country: "Etiopía",
        },

        {
          image:
            "https://penagos.com/wp-content/uploads/2020/02/ÁFRICA-COOPERATIVAS-NYARUGURU-Y-KAYONZA-RUANDA-ECOLINE-PENAGOS-1-1.jpg",
          country: "Ruanda",
        },

        {
          image:
            "https://penagos.com/wp-content/uploads/2020/12/África-9.jpg",
          country: "Uganda",
        },

        {
          image:
            "https://penagos.com/wp-content/uploads/2020/11/Imagen-africa-penagos-7-2.jpg",
          country: isEnglish ? "Africa" : "África",
        },
      ],
    },

    // ==========================================================
    // ASIA
    // ==========================================================

    {
      id: "asia",

      nombre: "Asia",

      subtitulo: isEnglish
        ? "Faces from Asia and Oceania"
        : "Rostros de Asia y Oceanía",

      banner:
        "https://penagos.com/wp-content/uploads/2020/02/Banner-Asia-galeria-globalidad-Penagos.jpg",

      fotos: [
        {
          image:
            "https://penagos.com/wp-content/uploads/2020/12/Asia-7.jpg",
          country: "Vietnam",
        },

        {
          image:
            "https://penagos.com/wp-content/uploads/2020/12/Asia-10.jpg",
          country: "Myanmar",
        },

        {
          image:
            "https://penagos.com/wp-content/uploads/2020/12/Asia-8.jpg",
          country: "Tailandia",
        },

        {
          image:
            "https://penagos.com/wp-content/uploads/2020/12/Asia-9.jpg",
          country: "India",
        },

        {
          image:
            "https://penagos.com/wp-content/uploads/2020/12/Asia-6.jpg",
          country: "Myanmar",
        },
      ],
    },
  ];

  // ============================================================
  // ESTADOS
  // ============================================================

  const [selected, setSelected] = useState(null);
  const [activeGallery, setActiveGallery] = useState(0);
  const [changingGallery, setChangingGallery] = useState(false);

  const galeriaActual = galerias[activeGallery];

  // ============================================================
  // ABRIR FOTO
  // ============================================================

  const abrirFoto = (foto, index) => {
    setSelected({
      ...foto,
      index,
      gallery: activeGallery,
    });
  };

  // ============================================================
  // CERRAR LIGHTBOX
  // ============================================================

  const cerrarLightbox = () => {
    setSelected(null);
  };

  // ============================================================
  // FOTO ANTERIOR
  // ============================================================

  const fotoAnterior = () => {
    if (!selected) return;

    const fotos = galerias[selected.gallery].fotos;

    const nuevoIndex =
      selected.index === 0
        ? fotos.length - 1
        : selected.index - 1;

    setSelected({
      ...fotos[nuevoIndex],
      index: nuevoIndex,
      gallery: selected.gallery,
    });
  };

  // ============================================================
  // FOTO SIGUIENTE
  // ============================================================

  const fotoSiguiente = () => {
    if (!selected) return;

    const fotos = galerias[selected.gallery].fotos;

    const nuevoIndex =
      selected.index === fotos.length - 1
        ? 0
        : selected.index + 1;

    setSelected({
      ...fotos[nuevoIndex],
      index: nuevoIndex,
      gallery: selected.gallery,
    });
  };

  // ============================================================
  // TECLADO LIGHTBOX
  // ============================================================

  useEffect(() => {
    if (!selected) return;

    const manejarTeclado = (event) => {
      if (event.key === "Escape") {
        cerrarLightbox();
      }

      if (event.key === "ArrowLeft") {
        fotoAnterior();
      }

      if (event.key === "ArrowRight") {
        fotoSiguiente();
      }
    };

    window.addEventListener("keydown", manejarTeclado);

    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", manejarTeclado);
      document.body.style.overflow = "";
    };
  }, [selected]);

  // ============================================================
  // CAMBIAR GALERÍA
  // ============================================================

  const cambiarGaleria = (index) => {
    if (index === activeGallery) return;

    setChangingGallery(true);

    setTimeout(() => {
      setActiveGallery(index);

      setTimeout(() => {
        setChangingGallery(false);
      }, 50);
    }, 180);
  };

  // ============================================================
  // RENDER
  // ============================================================

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#f7f7f5]
        text-[#07133d]
      "
    >
      {/* ========================================================
          DECORACIÓN DE FONDO
      ======================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-20
          h-[400px]
          w-[400px]
          rounded-full
          bg-[#6d6aff]/10
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          bottom-10
          h-[350px]
          w-[350px]
          rounded-full
          bg-[#07133d]/5
          blur-[100px]
        "
      />

      {/* ========================================================
          CONTENEDOR PRINCIPAL
      ======================================================== */}

      <div
        className="
          relative
          mx-auto
          max-w-[1100px]
          px-5
          py-10
          sm:px-6
          md:px-8
          md:py-12
        "
      >
        {/* ======================================================
            HEADER
        ====================================================== */}

        <div className="mb-6">
          <div
            className="
              mb-2
              flex
              items-center
              gap-2
            "
          >

          </div>

          <div
            className="
              flex
              flex-col
              gap-3
              md:flex-row
              md:items-end
              md:justify-between
            "
          >
            <h2
              className="
                max-w-[700px]
                text-3xl
                font-black
                leading-[0.95]
                tracking-[-0.05em]
                sm:text-4xl
                md:text-[40px]
              "
            >
              {isEnglish
                ? "The faces behind our world"
                : "Los rostros detrás de nuestro mundo"}
            </h2>
          </div>
        </div>

        {/* ======================================================
            SELECTOR DE REGIONES
        ====================================================== */}

        <div
          className="
            mb-5
            flex
            flex-wrap
            gap-2
          "
        >
          {galerias.map((galeria, index) => (
            <button
              key={galeria.id}
              type="button"
              onClick={() => cambiarGaleria(index)}
              className={`
                group
                flex
                cursor-pointer
                items-center
                gap-2
                rounded-full
                px-4
                py-2
                text-[7px]
                font-bold
                uppercase
                tracking-[0.2em]
                transition-all
                duration-300

                ${
                  activeGallery === index
                    ? "bg-[#07133d] text-white shadow-md"
                    : "border border-[#07133d]/10 bg-white text-[#07133d]/45 hover:text-[#07133d]"
                }
              `}
            >
              <span
                className={`
                  h-1.5
                  w-1.5
                  rounded-full
                  transition-all
                  duration-300

                  ${
                    activeGallery === index
                      ? "bg-[#8c8aff] shadow-[0_0_8px_rgba(140,138,255,0.7)]"
                      : "bg-[#07133d]/15 group-hover:bg-[#6d6aff]"
                  }
                `}
              />

              {galeria.nombre}
            </button>
          ))}
        </div>

        {/* ======================================================
            ÁLBUM
        ====================================================== */}

        <div
          className={`
            mx-auto
            max-w-[850px]
            transition-all
            duration-300
            ${
              changingGallery
                ? "translate-y-1 opacity-0"
                : "translate-y-0 opacity-100"
            }
          `}
        >
          {/* ====================================================
              BANNER
          ==================================================== */}

          <div
            className="
              group
              relative
              mb-3
              h-[95px]
              overflow-hidden
              rounded-[16px]
              bg-[#07133d]
              shadow-sm
              sm:h-[105px]
              md:h-[115px]
            "
          >
            <img
              src={galeriaActual.banner}
              alt={galeriaActual.nombre}
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                object-center
                transition-transform
                duration-700
                group-hover:scale-105
              "
            />

            {/* OVERLAY */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-[#07133d]/90
                via-[#07133d]/45
                to-[#07133d]/10
              "
            />

            {/* CONTENIDO */}

            <div
              className="
                absolute
                inset-0
                flex
                items-center
                px-5
                sm:px-6
              "
            >
              <div>
                <h3
                  className="
                    text-2xl
                    font-black
                    leading-none
                    tracking-[-0.04em]
                    text-white
                    sm:text-3xl
                  "
                >
                  {galeriaActual.nombre}
                </h3>

                <p
                  className="
                    mt-1
                    text-[8px]
                    text-white/55
                    sm:text-[9px]
                  "
                >
                  {galeriaActual.subtitulo}
                </p>
              </div>
            </div>

            {/* MARCA DE AGUA */}

            <div
              className="
                pointer-events-none
                absolute
                bottom-3
                right-4
                select-none
                text-[7px]
                font-black
                uppercase
                tracking-[0.3em]
                text-white/25
              "
            >
              PENAGOS
            </div>

            {/* NUMERO */}

            <div
              className="
                absolute
                bottom-3
                left-4
                text-[6px]
                font-bold
                tracking-[0.25em]
                text-white/40
              "
            >
              0{activeGallery + 1} / 0{galerias.length}
            </div>
          </div>

          {/* ====================================================
              MOSAICO
          ==================================================== */}

          <div
            className="
              grid
              grid-cols-2
              gap-2
              sm:grid-cols-4
            "
          >
            {galeriaActual.fotos.map((foto, index) => (
              <button
                key={`${galeriaActual.id}-${index}`}
                type="button"
                onClick={() => abrirFoto(foto, index)}
                className={`
                  group
                  relative
                  cursor-pointer
                  overflow-hidden
                  rounded-[12px]
                  bg-[#dedede]
                  text-left
                  outline-none
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:shadow-md
                  focus-visible:ring-2
                  focus-visible:ring-[#6d6aff]

                  ${
                    index === 0
                      ? "col-span-2 row-span-2 aspect-square"
                      : "aspect-[1.25/1]"
                  }
                `}
              >
                {/* FOTO */}

                <img
                  src={foto.image}
                  alt={foto.country}
                  loading={index === 0 ? "eager" : "lazy"}
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-105
                  "
                />

                {/* DEGRADADO */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#07133d]/80
                    via-[#07133d]/5
                    to-transparent
                    opacity-70
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                />

                {/* =================================================
                    MARCA DE AGUA PENAGOS
                ================================================= */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    bottom-3
                    right-3
                    z-10
                    select-none
                    text-[6px]
                    font-black
                    uppercase
                    tracking-[0.3em]
                    text-white/35
                    transition-all
                    duration-300
                    group-hover:text-white/50
                  "
                >
                  PENAGOS
                </div>

                {/* NUMERO */}

                <span
                  className="
                    absolute
                    left-2.5
                    top-2.5
                    z-10
                    flex
                    h-5
                    w-5
                    items-center
                    justify-center
                    rounded-full
                    bg-black/30
                    text-[6px]
                    font-bold
                    text-white
                    backdrop-blur-sm
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* INFORMACIÓN */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    p-2.5
                  "
                >
                  <div
                    className="
                      flex
                      items-end
                      justify-between
                      gap-2
                    "
                  >
                    <div>
                      <p
                        className="
                          text-[5px]
                          font-bold
                          uppercase
                          tracking-[0.2em]
                          text-white/45
                        "
                      >
                        {isEnglish
                          ? "People"
                          : "Personas"}
                      </p>

                      <p
                        className="
                          mt-0.5
                          text-[9px]
                          font-black
                          leading-tight
                          text-white
                          sm:text-[10px]
                        "
                      >
                        {foto.country}
                      </p>
                    </div>

                    <span
                      className="
                        flex
                        h-5
                        w-5
                        shrink-0
                        translate-y-1
                        items-center
                        justify-center
                        rounded-full
                        bg-white
                        text-[#07133d]
                        opacity-0
                        shadow-lg
                        transition-all
                        duration-300
                        group-hover:translate-y-0
                        group-hover:opacity-100
                      "
                    >
                      <ArrowUpRight size={10} />
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* ====================================================
              PIE DEL ÁLBUM
          ==================================================== */}

          <div
            className="
              mt-4
              flex
              items-center
              justify-between
              border-t
              border-[#07133d]/10
              pt-3
            "
          >
            <div className="flex items-center gap-1.5">
              {galerias.map((galeria, index) => (
                <button
                  key={galeria.id}
                  type="button"
                  onClick={() => cambiarGaleria(index)}
                  aria-label={
                    isEnglish
                      ? `Gallery ${index + 1}: ${galeria.nombre}`
                      : `Galería ${index + 1}: ${galeria.nombre}`
                  }
                  className={`
                    h-1
                    rounded-full
                    transition-all
                    duration-300

                    ${
                      activeGallery === index
                        ? "w-5 bg-[#07133d]"
                        : "w-1 bg-[#07133d]/20 hover:bg-[#07133d]/40"
                    }
                  `}
                />
              ))}
            </div>

            <span
              className="
                text-[6px]
                font-bold
                uppercase
                tracking-[0.25em]
                text-[#07133d]/25
              "
            >
              {isEnglish
                ? "People around the world"
                : "Personas alrededor del mundo"}
            </span>
          </div>
        </div>
      </div>

      {/* ========================================================
          LIGHTBOX
      ======================================================== */}

      {selected && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-[#030712]/90
            p-4
            backdrop-blur-md
            animate-[fadeIn_200ms_ease-out]
          "
          onClick={cerrarLightbox}
        >
          {/* ====================================================
              CERRAR
          ==================================================== */}

          <button
            type="button"
            onClick={cerrarLightbox}
            className="
              absolute
              right-4
              top-4
              z-[120]
              flex
              h-10
              w-10
              cursor-pointer
              items-center
              justify-center
              rounded-full
              border
              border-white/15
              bg-white/10
              text-white
              backdrop-blur-md
              transition
              hover:scale-105
              hover:bg-white/20
              focus:outline-none
              focus:ring-2
              focus:ring-white/30
            "
            aria-label={
              isEnglish
                ? "Close"
                : "Cerrar"
            }
          >
            <X size={17} />
          </button>

          {/* ====================================================
              ANTERIOR
          ==================================================== */}

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              fotoAnterior();
            }}
            className="
              absolute
              left-3
              z-[120]
              flex
              h-9
              w-9
              cursor-pointer
              items-center
              justify-center
              rounded-full
              bg-white
              text-[#07133d]
              shadow-xl
              transition
              hover:scale-105
              sm:left-6
              sm:h-10
              sm:w-10
            "
            aria-label={
              isEnglish
                ? "Previous photo"
                : "Foto anterior"
            }
          >
            <ChevronLeft size={18} />
          </button>

          {/* ====================================================
              CONTENIDO
          ==================================================== */}

          <div
            className="
              relative
              flex
              max-h-[88vh]
              max-w-[850px]
              flex-col
              overflow-hidden
              rounded-[18px]
              bg-[#07133d]
              shadow-2xl
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* FOTO */}

            <div
              className="
                relative
                flex
                max-h-[75vh]
                min-h-[180px]
                items-center
                justify-center
                bg-black
              "
            >
              <img
                src={selected.image}
                alt={selected.country}
                className="
                  max-h-[75vh]
                  max-w-full
                  object-contain
                "
              />

              {/* WATERMARK LIGHTBOX */}

              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-4
                  right-4
                  select-none
                  text-[7px]
                  font-black
                  uppercase
                  tracking-[0.3em]
                  text-white/25
                "
              >
                PENAGOS
              </div>
            </div>

            {/* INFORMACIÓN */}

            <div
              className="
                flex
                items-center
                justify-between
                gap-4
                px-5
                py-3
                text-white
              "
            >
              <div>
                <p
                  className="
                    text-[6px]
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-white/35
                  "
                >
                  {galerias[selected.gallery].nombre}
                </p>

                <h3
                  className="
                    mt-1
                    text-xs
                    font-black
                    uppercase
                    tracking-wide
                  "
                >
                  {selected.country}
                </h3>
              </div>

              <span
                className="
                  text-[7px]
                  font-bold
                  tracking-[0.2em]
                  text-white/30
                "
              >
                {String(selected.index + 1).padStart(2, "0")}
                {" / "}
                {String(
                  galerias[selected.gallery].fotos.length
                ).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* ====================================================
              SIGUIENTE
          ==================================================== */}

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              fotoSiguiente();
            }}
            className="
              absolute
              right-3
              z-[120]
              flex
              h-9
              w-9
              cursor-pointer
              items-center
              justify-center
              rounded-full
              bg-white
              text-[#07133d]
              shadow-xl
              transition
              hover:scale-105
              sm:right-6
              sm:h-10
              sm:w-10
            "
            aria-label={
              isEnglish
                ? "Next photo"
                : "Foto siguiente"
            }
          >
            <ChevronRight size={18} />
          </button>
        </div>
      )}

      {/* ========================================================
          ANIMACIÓN
      ======================================================== */}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}

export default RostrosMundo;
