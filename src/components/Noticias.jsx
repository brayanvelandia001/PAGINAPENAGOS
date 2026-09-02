import React, { useEffect, useMemo, useState } from "react";

import {
  ArrowUpRight,
  CalendarDays,
  RefreshCw,
  Newspaper,
  ChevronRight,
  Clock3,
  TrendingUp,
} from "lucide-react";

import { Link } from "react-router-dom";

// ============================================================
// NOTICIAS — PENAGOS NEWSROOM
// DISEÑO EDITORIAL / PREMIUM
// ============================================================

function Noticias({ language = "ES" }) {
  const isEnglish = language === "EN";

  const [noticias, setNoticias] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);

  // ==========================================================
  // URL WORDPRESS SEGÚN IDIOMA
  // ==========================================================

  const urlNoticias = useMemo(() => {
    const base =
      "https://penagos.com/wp-json/wp/v2/posts";

    const parametros =
      "?per_page=13" +
      "&orderby=date" +
      "&order=desc" +
      "&_embed";

    // ESPAÑOL
    // WordPress utiliza el endpoint normal
    if (!isEnglish) {
      return `${base}${parametros}`;
    }

    // INGLÉS
    // WordPress devuelve la traducción inglesa
    return `${base}${parametros}&lang=en`;
  }, [isEnglish]);

  // ==========================================================
  // CARGAR NOTICIAS
  // ==========================================================

  const cargarNoticias = async () => {
    setCargando(true);
    setError(false);

    try {
      const response = await fetch(urlNoticias);

      if (!response.ok) {
        throw new Error(`Error HTTP ${response.status}`);
      }

      const data = await response.json();

      if (!Array.isArray(data)) {
        throw new Error("Respuesta inválida de WordPress");
      }

      setNoticias(data);
    } catch (err) {
      console.error(
        `ERROR CARGANDO NOTICIAS ${
          isEnglish ? "EN" : "ES"
        }:`,
        err
      );

      setNoticias([]);
      setError(true);
    } finally {
      setCargando(false);
    }
  };

  // ==========================================================
  // INIT / CAMBIO DE IDIOMA
  // ==========================================================

  useEffect(() => {
    cargarNoticias();
  }, [urlNoticias]);

  // ==========================================================
  // FECHA
  // ==========================================================

  const formatearFecha = (fecha) => {
    return new Date(fecha).toLocaleDateString(
      isEnglish ? "en-US" : "es-CO",
      {
        day: "numeric",
        month: "long",
        year: "numeric",
      }
    );
  };

  // ==========================================================
  // IMAGEN
  // ==========================================================

  const obtenerImagen = (noticia) => {
    return (
      noticia?._embedded?.["wp:featuredmedia"]?.[0]
        ?.source_url ||
      "https://penagos.com/wp-content/uploads/2026/08/favicon.png"
    );
  };

  // ==========================================================
  // TITULO
  // ==========================================================

  const obtenerTitulo = (noticia) => {
    return (
      noticia?.title?.rendered ||
      (isEnglish ? "Penagos news" : "Noticias Penagos")
    );
  };

  // ==========================================================
  // EXTRACTO
  // ==========================================================

  const obtenerExtracto = (noticia) => {
    const texto = noticia?.excerpt?.rendered
      ?.replace(/(<([^>]+)>)/gi, "")
      ?.replace(/&nbsp;/gi, " ")
      ?.trim();

    return (
      texto ||
      (isEnglish
        ? "Discover the latest stories, projects and developments from Penagos."
        : "Conoce las últimas historias, proyectos y desarrollos de Penagos.")
    );
  };

  // ==========================================================
  // CATEGORIA
  // ==========================================================

  const obtenerCategoria = (noticia) => {
    const categorias = noticia?._embedded?.["wp:term"];

    if (Array.isArray(categorias)) {
      const grupoCategorias = categorias.find(
        (grupo) => Array.isArray(grupo)
      );

      if (grupoCategorias?.length) {
        return grupoCategorias[0]?.name || null;
      }
    }

    return null;
  };

  // ==========================================================
  // TIEMPO DE LECTURA
  // ==========================================================

  const obtenerTiempoLectura = (noticia) => {
    const contenido =
      noticia?.content?.rendered
        ?.replace(/(<([^>]+)>)/gi, "")
        ?.trim() || "";

    const palabras = contenido
      .split(/\s+/)
      .filter(Boolean).length;

    const minutos = Math.max(
      1,
      Math.ceil(palabras / 200)
    );

    return `${minutos} ${
      isEnglish ? "min read" : "min de lectura"
    }`;
  };

  // ==========================================================
  // DATOS
  // ==========================================================

  const noticiaPrincipal = noticias[0];

  const noticiasRestantes = noticias.slice(1);

  const noticiasFoco = useMemo(() => {
    return noticiasRestantes.slice(0, 4);
  }, [noticiasRestantes]);

  const noticiasGrid = useMemo(() => {
    return noticiasRestantes.slice(4);
  }, [noticiasRestantes]);

  // ==========================================================
  // LOADING
  // ==========================================================

  if (cargando) {
    return (
      <section className="flex min-h-[420px] items-center justify-center bg-white px-6">
        <div className="flex flex-col items-center">

          <div
            className="
              relative
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              bg-[#07133d]
              text-[#00A4E4]
              shadow-xl
            "
          >
            <Newspaper size={27} />

            <span
              className="
                absolute
                -right-1
                -top-1
                h-3
                w-3
                animate-ping
                rounded-full
                bg-[#00A4E4]
              "
            />

            <span
              className="
                absolute
                -right-1
                -top-1
                h-3
                w-3
                rounded-full
                bg-[#00A4E4]
              "
            />
          </div>

          <span
            className="
              mt-6
              text-[10px]
              font-black
              uppercase
              tracking-[0.3em]
              text-[#07133d]/40
            "
          >
            Penagos Newsroom
          </span>

          <div
            className="
              mt-5
              h-[3px]
              w-40
              overflow-hidden
              rounded-full
              bg-slate-100
            "
          >
            <div
              className="
                h-full
                w-1/2
                animate-[loadingNoticias_1.2s_ease-in-out_infinite]
                rounded-full
                bg-[#00A4E4]
              "
            />
          </div>

          <style>
            {`
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

        </div>
      </section>
    );
  }

  // ==========================================================
  // ERROR
  // ==========================================================

  if (error) {
    return (
      <section
        className="
          flex
          min-h-[420px]
          items-center
          justify-center
          bg-white
          px-6
        "
      >
        <div className="text-center">

          <div
            className="
              mx-auto
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              bg-[#07133d]
              text-[#00A4E4]
            "
          >
            <Newspaper size={27} />
          </div>

          <h2
            className="
              mt-6
              text-2xl
              font-black
              text-[#07133d]
            "
          >
            {isEnglish
              ? "We couldn't load the news"
              : "No pudimos cargar las noticias"}
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            {isEnglish
              ? "Please try again in a few seconds."
              : "Intenta nuevamente en unos segundos."}
          </p>

          <button
            type="button"
            onClick={cargarNoticias}
            className="
              mt-6
              inline-flex
              cursor-pointer
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
              hover:bg-[#07133d]
            "
          >
            <RefreshCw size={16} />

            {isEnglish
              ? "Try again"
              : "Intentar nuevamente"}
          </button>

        </div>
      </section>
    );
  }

  // ==========================================================
  // SIN NOTICIAS
  // ==========================================================

  if (!noticias.length) {
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
        <div className="text-center">

          <div
            className="
              mx-auto
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              bg-[#07133d]
              text-[#00A4E4]
            "
          >
            <Newspaper size={26} />
          </div>

          <h2
            className="
              mt-6
              text-2xl
              font-black
              text-[#07133d]
            "
          >
            {isEnglish
              ? "No news available"
              : "No hay noticias disponibles"}
          </h2>

          <button
            type="button"
            onClick={cargarNoticias}
            className="
              mt-6
              cursor-pointer
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
            {isEnglish ? "Refresh" : "Actualizar"}
          </button>

        </div>
      </section>
    );
  }

  // ==========================================================
  // RENDER
  // ==========================================================

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#f7f9fc]
        py-5
        md:py-8
      "
    >

      {/* DECORACIÓN */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-[500px]
          w-[500px]
          rounded-full
          border
          border-[#302b80]/[0.035]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-52
          top-[600px]
          h-[650px]
          w-[650px]
          rounded-full
          border
          border-[#00A4E4]/[0.045]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-[8%]
          top-[32%]
          h-1.5
          w-1.5
          rounded-full
          bg-[#00A4E4]/30
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[12%]
          top-[52%]
          h-2
          w-2
          rounded-full
          bg-[#302b80]/20
        "
      />

      {/* CONTENEDOR */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-4
          sm:px-6
          lg:px-10
        "
      >

        {/* ====================================================
            NOTICIA PRINCIPAL
        ==================================================== */}

        <article
          className="
            group
            relative
            overflow-hidden
            rounded-[24px]
            bg-[#07133d]
            shadow-[0_30px_90px_rgba(7,19,61,0.16)]
            md:rounded-[30px]
          "
        >
          <Link
            to={`/noticia/${noticiaPrincipal.id}`}
            className="
              relative
              block
              min-h-[440px]
              cursor-pointer
              overflow-hidden
              md:min-h-[560px]
            "
          >

            <img
              src={obtenerImagen(noticiaPrincipal)}
              alt={obtenerTitulo(noticiaPrincipal)}
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                transition
                duration-[1200ms]
                ease-out
                group-hover:scale-[1.04]
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-[#07133d]/95
                via-[#07133d]/65
                to-[#07133d]/10
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[#07133d]/80
                via-transparent
                to-transparent
              "
            />

            {/* ETIQUETA */}

            <div
              className="
                absolute
                left-5
                top-5
                flex
                items-center
                gap-3
                md:left-10
                md:top-10
              "
            >
              <div
                className="
                  flex
                  h-10
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/15
                  bg-white/10
                  px-4
                  backdrop-blur-xl
                "
              >
                <TrendingUp
                  size={14}
                  className="text-[#00A4E4]"
                />

                <span
                  className="
                    text-[9px]
                    font-black
                    uppercase
                    tracking-[0.22em]
                    text-white
                  "
                >
                  {isEnglish ? "In focus" : "En foco"}
                </span>
              </div>
            </div>

            {/* FLECHA */}

            <div
              className="
                absolute
                right-5
                top-5
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-white
                text-[#07133d]
                transition
                duration-500
                group-hover:rotate-12
                md:right-10
                md:top-10
                md:h-12
                md:w-12
              "
            >
              <ArrowUpRight size={20} />
            </div>

            {/* CONTENIDO */}

            <div
              className="
                absolute
                bottom-0
                left-0
                max-w-3xl
                p-6
                md:p-10
                lg:p-14
              "
            >

              <div
                className="
                  mb-4
                  flex
                  flex-wrap
                  items-center
                  gap-3
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-white/60
                  md:mb-5
                  md:gap-4
                  md:text-[10px]
                "
              >

                <span
                  className="
                    flex
                    items-center
                    gap-2
                    text-[#00A4E4]
                  "
                >
                  <CalendarDays size={14} />

                  {formatearFecha(
                    noticiaPrincipal.date
                  )}
                </span>

                <span
                  className="
                    h-1
                    w-1
                    rounded-full
                    bg-white/30
                  "
                />

                <span>
                  {obtenerTiempoLectura(
                    noticiaPrincipal
                  )}
                </span>

                {obtenerCategoria(
                  noticiaPrincipal
                ) && (
                  <>
                    <span
                      className="
                        h-1
                        w-1
                        rounded-full
                        bg-white/30
                      "
                    />

                    <span>
                      {obtenerCategoria(
                        noticiaPrincipal
                      )}
                    </span>
                  </>
                )}

              </div>

              <h3
                className="
                  text-3xl
                  font-black
                  leading-[1.04]
                  tracking-[-0.04em]
                  text-white
                  sm:text-4xl
                  md:text-5xl
                  lg:text-6xl
                "
                dangerouslySetInnerHTML={{
                  __html:
                    obtenerTitulo(
                      noticiaPrincipal
                    ),
                }}
              />

              <p
                className="
                  mt-4
                  max-w-2xl
                  line-clamp-2
                  text-sm
                  leading-6
                  text-white/65
                  md:mt-6
                  md:text-base
                  md:leading-7
                "
              >
                {obtenerExtracto(
                  noticiaPrincipal
                )}
              </p>

              <div
                className="
                  mt-6
                  flex
                  items-center
                  gap-3
                  text-xs
                  font-black
                  uppercase
                  tracking-[0.18em]
                  text-white
                  md:mt-8
                "
              >
                <span>
                  {isEnglish
                    ? "Read story"
                    : "Leer historia"}
                </span>

                <span
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    bg-[#00A4E4]
                    text-[#07133d]
                    transition
                    group-hover:translate-x-1
                  "
                >
                  <ArrowUpRight size={14} />
                </span>
              </div>

            </div>

          </Link>
        </article>

        {/* ====================================================
            EN FOCO / MÁS HISTORIAS
        ==================================================== */}

        {noticiasFoco.length > 0 && (
          <section className="mt-14 md:mt-20">

            <div
              className="
                mb-8
                flex
                items-end
                justify-between
              "
            >
              <div>

                <div
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >
                  <span
                    className="
                      h-2
                      w-2
                      rounded-full
                      bg-[#00A4E4]
                    "
                  />

                  <span
                    className="
                      text-[10px]
                      font-black
                      uppercase
                      tracking-[0.3em]
                      text-[#302b80]
                    "
                  >
                    {isEnglish
                      ? "More stories"
                      : "Más historias"}
                  </span>
                </div>

                <h3
                  className="
                    mt-3
                    text-3xl
                    font-black
                    tracking-tight
                    text-[#07133d]
                    md:text-4xl
                  "
                >
                  {isEnglish
                    ? "What's new"
                    : "Lo más reciente"}
                </h3>

              </div>

              <div
                className="
                  hidden
                  items-center
                  gap-2
                  text-[9px]
                  font-black
                  uppercase
                  tracking-[0.25em]
                  text-slate-400
                  md:flex
                "
              >

                <span>
                  {String(
                    noticiasFoco.length
                  ).padStart(2, "0")}
                </span>

                <span
                  className="
                    h-px
                    w-8
                    bg-slate-300
                  "
                />

                <span>
                  {isEnglish
                    ? "Stories"
                    : "Historias"}
                </span>

              </div>
            </div>

            <div
              className="
                grid
                gap-5
                md:grid-cols-2
                lg:grid-cols-4
              "
            >

              {noticiasFoco.map(
                (noticia, index) => (
                  <Link
                    key={noticia.id}
                    to={`/noticia/${noticia.id}`}
                    className="
                      group
                      relative
                      cursor-pointer
                      overflow-hidden
                      rounded-[24px]
                      bg-white
                      shadow-[0_15px_50px_rgba(7,19,61,0.06)]
                    "
                  >

                    <div
                      className="
                        relative
                        aspect-[4/5]
                        overflow-hidden
                      "
                    >

                      <img
                        src={obtenerImagen(
                          noticia
                        )}
                        alt={obtenerTitulo(
                          noticia
                        )}
                        className="
                          h-full
                          w-full
                          object-cover
                          transition
                          duration-700
                          group-hover:scale-110
                        "
                      />

                      <div
                        className="
                          absolute
                          inset-0
                          bg-gradient-to-t
                          from-[#07133d]/90
                          via-[#07133d]/15
                          to-transparent
                        "
                      />

                      <div
                        className="
                          absolute
                          left-4
                          top-4
                          flex
                          h-9
                          w-9
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-white/20
                          bg-[#07133d]/50
                          text-[9px]
                          font-black
                          text-white
                          backdrop-blur-md
                        "
                      >
                        {String(
                          index + 2
                        ).padStart(2, "0")}
                      </div>

                      <div
                        className="
                          absolute
                          right-4
                          top-4
                          flex
                          h-9
                          w-9
                          translate-y-2
                          items-center
                          justify-center
                          rounded-full
                          bg-white
                          text-[#07133d]
                          opacity-0
                          transition
                          duration-300
                          group-hover:translate-y-0
                          group-hover:opacity-100
                        "
                      >
                        <ArrowUpRight size={15} />
                      </div>

                      <div
                        className="
                          absolute
                          bottom-0
                          left-0
                          right-0
                          p-5
                        "
                      >

                        <div
                          className="
                            mb-3
                            flex
                            items-center
                            gap-2
                            text-[8px]
                            font-black
                            uppercase
                            tracking-[0.18em]
                            text-[#00A4E4]
                          "
                        >
                          <CalendarDays size={12} />

                          {formatearFecha(
                            noticia.date
                          )}
                        </div>

                        <h4
                          className="
                            line-clamp-3
                            text-xl
                            font-black
                            leading-6
                            tracking-tight
                            text-white
                          "
                          dangerouslySetInnerHTML={{
                            __html:
                              obtenerTitulo(
                                noticia
                              ),
                          }}
                        />

                      </div>

                    </div>

                  </Link>
                )
              )}

            </div>
          </section>
        )}

        {/* ====================================================
            SEPARADOR
        ==================================================== */}

        <div
          className="
            my-16
            flex
            items-center
            gap-5
            md:my-20
          "
        >

          <div
            className="
              h-px
              flex-1
              bg-slate-200
            "
          />

          <div
            className="
              flex
              items-center
              gap-3
            "
          >

            <span
              className="
                text-[9px]
                font-black
                uppercase
                tracking-[0.3em]
                text-slate-300
              "
            >
              Penagos
            </span>

            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#00A4E4]
              "
            />

          </div>

          <div
            className="
              h-px
              flex-1
              bg-slate-200
            "
          />

        </div>

        {/* ====================================================
            TODAS LAS NOTICIAS
        ==================================================== */}

        {noticiasGrid.length > 0 && (
          <section>

            <div
              className="
                mb-10
                flex
                flex-col
                justify-between
                gap-5
                md:flex-row
                md:items-end
              "
            >

              <div>

                <span
                  className="
                    text-[10px]
                    font-black
                    uppercase
                    tracking-[0.3em]
                    text-[#00A4E4]
                  "
                >
                  {isEnglish
                    ? "Explore the newsroom"
                    : "Explora la sala de prensa"}
                </span>

                <h3
                  className="
                    mt-3
                    text-3xl
                    font-black
                    tracking-tight
                    text-[#07133d]
                    md:text-4xl
                  "
                >
                  {isEnglish
                    ? "More from Penagos"
                    : "Más de Penagos"}
                </h3>

              </div>

              <div className="text-sm text-slate-400">
                {noticiasGrid.length}{" "}
                {isEnglish
                  ? "stories"
                  : "historias"}
              </div>

            </div>

            <div
              className="
                divide-y
                divide-slate-200
              "
            >

              {noticiasGrid.map(
                (noticia, index) => (
                  <Link
                    key={noticia.id}
                    to={`/noticia/${noticia.id}`}
                    className="
                      group
                      grid
                      cursor-pointer
                      gap-6
                      py-7
                      transition
                      md:grid-cols-[90px_240px_1fr_auto]
                      md:items-center
                    "
                  >

                    {/* NUMERO */}

                    <div className="hidden md:block">
                      <span
                        className="
                          text-xs
                          font-black
                          tracking-[0.15em]
                          text-slate-300
                          transition
                          group-hover:text-[#00A4E4]
                        "
                      >
                        {String(
                          index + 6
                        ).padStart(2, "0")}
                      </span>
                    </div>

                    {/* IMAGEN */}

                    <div
                      className="
                        relative
                        aspect-[16/10]
                        overflow-hidden
                        rounded-2xl
                        bg-slate-100
                      "
                    >

                      <img
                        src={obtenerImagen(
                          noticia
                        )}
                        alt={obtenerTitulo(
                          noticia
                        )}
                        className="
                          h-full
                          w-full
                          object-cover
                          transition
                          duration-700
                          group-hover:scale-105
                        "
                      />

                    </div>

                    {/* CONTENIDO */}

                    <div>

                      <div
                        className="
                          mb-3
                          flex
                          flex-wrap
                          items-center
                          gap-3
                          text-[9px]
                          font-black
                          uppercase
                          tracking-[0.18em]
                          text-[#302b80]
                        "
                      >

                        <span
                          className="
                            flex
                            items-center
                            gap-2
                          "
                        >
                          <CalendarDays size={12} />

                          {formatearFecha(
                            noticia.date
                          )}
                        </span>

                        <span
                          className="
                            h-1
                            w-1
                            rounded-full
                            bg-slate-300
                          "
                        />

                        <span
                          className="
                            flex
                            items-center
                            gap-2
                            text-slate-400
                          "
                        >
                          <Clock3 size={12} />

                          {obtenerTiempoLectura(
                            noticia
                          )}
                        </span>

                      </div>

                      <h4
                        className="
                          line-clamp-2
                          text-xl
                          font-black
                          leading-7
                          tracking-tight
                          text-[#07133d]
                          transition
                          group-hover:text-[#302b80]
                          md:text-2xl
                        "
                        dangerouslySetInnerHTML={{
                          __html:
                            obtenerTitulo(
                              noticia
                            ),
                        }}
                      />

                      <p
                        className="
                          mt-2
                          line-clamp-2
                          max-w-2xl
                          text-sm
                          leading-6
                          text-slate-500
                        "
                      >
                        {obtenerExtracto(
                          noticia
                        )}
                      </p>

                    </div>

                    {/* FLECHA */}

                    <div
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-slate-200
                        text-[#07133d]
                        transition
                        duration-300
                        group-hover:border-[#00A4E4]
                        group-hover:bg-[#00A4E4]
                      "
                    >
                      <ChevronRight
                        size={18}
                        className="
                          transition
                          group-hover:translate-x-0.5
                        "
                      />
                    </div>

                  </Link>
                )
              )}

            </div>

          </section>
        )}

        {/* ====================================================
            CTA FINAL
        ==================================================== */}

        <div
          className="
            mt-16
            overflow-hidden
            rounded-[30px]
            bg-[#07133d]
            md:mt-20
          "
        >

          <div
            className="
              relative
              px-7
              py-12
              md:px-12
              md:py-14
            "
          >

            <div
              className="
                pointer-events-none
                absolute
                -right-20
                -top-32
                h-80
                w-80
                rounded-full
                border
                border-[#00A4E4]/10
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -right-4
                -top-16
                h-48
                w-48
                rounded-full
                border
                border-white/[0.05]
              "
            />

            <div
              className="
                relative
                z-10
                max-w-2xl
              "
            >

              <div
                className="
                  flex
                  items-center
                  gap-3
                "
              >

                <Newspaper
                  size={16}
                  className="text-[#00A4E4]"
                />

                <span
                  className="
                    text-[9px]
                    font-black
                    uppercase
                    tracking-[0.3em]
                    text-white/40
                  "
                >
                  Penagos Newsroom
                </span>

              </div>

              <h3
                className="
                  mt-5
                  text-3xl
                  font-black
                  tracking-tight
                  text-white
                  md:text-4xl
                "
              >
                {isEnglish
                  ? "Technology that keeps moving."
                  : "Tecnología que sigue avanzando."}
              </h3>

              <p
                className="
                  mt-4
                  max-w-xl
                  text-sm
                  leading-7
                  text-white/50
                  md:text-base
                "
              >
                {isEnglish
                  ? "Explore the latest developments, projects and stories from Penagos."
                  : "Conoce los últimos desarrollos, proyectos e historias de Penagos."}
              </p>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Noticias;

