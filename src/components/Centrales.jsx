import React, { useEffect, useMemo, useState } from "react";

import {
  MapPin,
  Factory,
  Droplets,
  Sprout,
  Settings2,
  Wind,
  Cog,
} from "lucide-react";

// ============================================================
// CENTRALES DE PROCESAMIENTO
// API WORDPRESS
// ============================================================

const API_URL =
  "https://penagos.com/wp-json/penagos/v1/centrales";

const LOGO_PENAGOS =
  "http://penagos.com/wp-content/uploads/2020/03/Logotipo-Penagos-Hermanos-PNG.png";

function Centrales({ language = "ES" }) {
  const isEnglish = language === "EN";

  const [centrales, setCentrales] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [regionActiva, setRegionActiva] =
    useState("Centro América");

  // ============================================================
  // TRADUCCIONES
  // ============================================================

  const textos = {
    ES: {
      eyebrow: "PENAGOS",

      titulo: "Centrales de procesamiento",

      descripcion:
        "Tecnología Penagos presente en centrales de procesamiento de café alrededor del mundo.",

      cargando: "Cargando centrales...",

      error: "No fue posible cargar las centrales.",

      capacidad: "Capacidad",

      tipoCafe: "Tipo de café",

      tecnologia: "Tecnología",

      plantas: "centrales",

      regiones: {
        "Centro América": "Centro América",
        "Sur América": "Sur América",
        África: "África",
        Asia: "Asia",
        Caribe: "Caribe",
        "Norte América": "Norte América",
        Oceanía: "Oceanía",
      },

      sinCentrales:
        "No hay centrales disponibles en esta región.",
    },

    EN: {
      eyebrow: "PENAGOS",

      titulo: "Coffee processing plants",

      descripcion:
        "Penagos technology present in coffee processing plants around the world.",

      cargando: "Loading plants...",

      error:
        "The processing plants could not be loaded.",

      capacidad: "Capacity",

      tipoCafe: "Coffee type",

      tecnologia: "Technology",

      plantas: "plants",

      regiones: {
        "Centro América": "Central America",
        "Sur América": "South America",
        África: "Africa",
        Asia: "Asia",
        Caribe: "Caribbean",
        "Norte América": "North America",
        Oceanía: "Oceania",
      },

      sinCentrales:
        "No plants available in this region.",
    },
  };

  const t = textos[language] || textos.ES;

  // ============================================================
  // CARGAR CENTRALES
  // ============================================================

  useEffect(() => {
    let activo = true;

    async function cargarCentrales() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(API_URL, {
          method: "GET",

          headers: {
            Accept: "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(
            `HTTP ${response.status}`
          );
        }

        const data = await response.json();

        if (!activo) return;

        if (
          data &&
          data.success &&
          Array.isArray(data.data)
        ) {
          setCentrales(data.data);

          if (data.data.length > 0) {
            const regionesDisponibles = [
              ...new Set(
                data.data
                  .map(
                    (central) =>
                      central.region
                  )
                  .filter(Boolean)
              ),
            ];

            if (
              regionesDisponibles.length > 0 &&
              !regionesDisponibles.includes(
                regionActiva
              )
            ) {
              setRegionActiva(
                regionesDisponibles[0]
              );
            }
          }
        } else {
          setCentrales([]);
        }
      } catch (err) {
        console.error(
          "Error cargando centrales:",
          err
        );

        if (activo) {
          setError(err);
        }
      } finally {
        if (activo) {
          setLoading(false);
        }
      }
    }

    cargarCentrales();

    return () => {
      activo = false;
    };
  }, []);

  // ============================================================
  // REGIONES
  // ============================================================

  const regiones = useMemo(() => {
    const orden = [
      "Centro América",
      "Sur América",
      "África",
      "Asia",
      "Caribe",
      "Norte América",
      "Oceanía",
    ];

    const disponibles = [
      ...new Set(
        centrales
          .map(
            (central) =>
              central.region
          )
          .filter(Boolean)
      ),
    ];

    return orden.filter((region) =>
      disponibles.includes(region)
    );
  }, [centrales]);

  // ============================================================
  // CENTRALES DE LA REGIÓN
  // ============================================================

  const centralesFiltradas = useMemo(() => {
    return centrales
      .filter(
        (central) =>
          central.region === regionActiva
      )
      .sort(
        (a, b) =>
          Number(a.orden || 0) -
          Number(b.orden || 0)
      );
  }, [centrales, regionActiva]);

  // ============================================================
  // TECNOLOGÍAS
  // ============================================================

  function obtenerTecnologias(central) {
    if (
      Array.isArray(central.tecnologia)
    ) {
      return central.tecnologia.filter(
        (item) =>
          item &&
          String(item).trim() !== ""
      );
    }

    if (
      typeof central.tecnologia ===
        "string" &&
      central.tecnologia.trim() !== ""
    ) {
      return central.tecnologia
        .split("\n")
        .map((item) => item.trim())
        .filter(Boolean);
    }

    return [];
  }

  // ============================================================
  // IMAGEN
  // ============================================================

  function obtenerImagen(central) {
    if (
      central.imagen &&
      typeof central.imagen === "string"
    ) {
      return central.imagen;
    }

    if (
      Array.isArray(central.galeria) &&
      central.galeria.length > 0
    ) {
      return (
        central.galeria[0]?.url || ""
      );
    }

    return "";
  }

  // ============================================================
  // UBICACIÓN
  // ============================================================

  function obtenerUbicacion(central) {
    if (central.nombre) {
      return central.nombre;
    }

    if (
      central.ciudad &&
      central.pais
    ) {
      return `${central.ciudad}, ${central.pais}`;
    }

    return central.pais || "";
  }

  // ============================================================
  // ICONO TECNOLOGÍA
  // ============================================================

  function IconoTecnologia({ index }) {
    const iconos = [
      Settings2,
      Droplets,
      Wind,
      Cog,
      Sprout,
    ];

    const Icon =
      iconos[index % iconos.length];

    return (
      <Icon
        size={13}
        strokeWidth={1.8}
      />
    );
  }

  // ============================================================
  // LOADING
  // MISMO ESTILO DE NOTICIAS
  // ============================================================

  if (loading) {
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
              LOGO PENAGOS
          ================================================== */}

          <img
            src={LOGO_PENAGOS}
            alt="Penagos Hermanos"
            className="
              w-[210px]
              object-contain
              animate-[logoPulseCentrales_2s_ease-in-out_infinite]
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
                animate-[loadingCentrales_1.4s_ease-in-out_infinite]
              "
            />
          </div>

          {/* ==================================================
              TEXTO
          ================================================== */}

          <p
            className="
              mt-4
              text-xs
              font-medium
              tracking-wide
              text-slate-400
            "
          >
            {t.cargando}
          </p>
        </div>

        {/* ====================================================
            ANIMACIONES
        ==================================================== */}

        <style>
          {`

            @keyframes logoPulseCentrales {

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


            @keyframes loadingCentrales {

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

  // ============================================================
  // ERROR
  // ============================================================

  if (error) {
    return (
      <section
        className="
          w-full
          bg-white
          px-6
          py-16
        "
      >
        <div
          className="
            mx-auto
            max-w-3xl
          "
        >
          <div
            className="
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-8
              text-center
              shadow-xl
            "
          >
            <img
              src={LOGO_PENAGOS}
              alt="Penagos Hermanos"
              className="
                mx-auto
                w-[210px]
                object-contain
              "
            />

            <h3
              className="
                mt-8
                text-xl
                font-bold
                text-red-700
              "
            >
              {t.error}
            </h3>

            <p
              className="
                mt-2
                text-sm
                text-red-600
              "
            >
              {error.message}
            </p>
          </div>
        </div>
      </section>
    );
  }

  // ============================================================
  // RENDER
  // ============================================================

  return (
    <section
      id="centrales"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#171843]
      "
    >
      {/* ======================================================
          FONDO
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          pointer-events-none
          bg-[radial-gradient(circle_at_85%_10%,rgba(48,63,159,0.65),transparent_42%),linear-gradient(115deg,#171843_0%,#202363_45%,#303f9f_100%)]
        "
      />

      {/* ======================================================
          GRID SUTIL
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          pointer-events-none
          opacity-[0.045]
          bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)]
          bg-[size:70px_70px]
        "
      />

      {/* ======================================================
          CONTENIDO
      ====================================================== */}

      <div className="relative z-10">

        {/* ====================================================
            HEADER
        ==================================================== */}

        <div
          className="
            mx-auto
            max-w-7xl
            px-6
            pb-7
            pt-12
            md:pt-14
          "
        >
          <div className="max-w-3xl">

            {/* EYEBROW */}

            <div
              className="
                mb-3
                flex
                items-center
                gap-3
              "
            >
              <span
                className="
                  h-[2px]
                  w-8
                  bg-[#00A9E8]
                "
              />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-white
                "
              >
                {t.eyebrow}
              </span>
            </div>

            {/* TITULO */}

            <h2
              className="
                text-3xl
                font-bold
                leading-[1.05]
                tracking-tight
                text-white
                md:text-4xl
                lg:text-5xl
              "
            >
              {t.titulo}
            </h2>

            {/* DESCRIPCIÓN */}

            <p
              className="
                mt-3
                max-w-2xl
                text-sm
                leading-relaxed
                text-white/65
                md:text-base
              "
            >
              {t.descripcion}
            </p>
          </div>
        </div>

        {/* ====================================================
            REGIONES
        ==================================================== */}

        {regiones.length > 0 && (
          <div
            className="
              mx-auto
              mb-7
              max-w-7xl
              px-6
            "
          >
            <div
              className="
                scrollbar-hide
                flex
                gap-2
                overflow-x-auto
                pb-2
              "
            >
              {regiones.map((region) => {
                const activa =
                  region === regionActiva;

                const cantidad =
                  centrales.filter(
                    (central) =>
                      central.region ===
                      region
                  ).length;

                return (
                  <button
                    key={region}
                    type="button"
                    onClick={() =>
                      setRegionActiva(
                        region
                      )
                    }
                    className={`
                      flex-shrink-0
                      flex
                      items-center
                      gap-2
                      cursor-pointer
                      rounded-full
                      border
                      px-4
                      py-2
                      text-xs
                      font-medium
                      transition-all
                      duration-300
                      ${
                        activa
                          ? `
                            border-[#00A9E8]
                            bg-[#00A9E8]
                            text-white
                            shadow-[0_8px_25px_rgba(0,169,232,0.25)]
                          `
                          : `
                            border-white/15
                            bg-white/10
                            text-white/70
                            backdrop-blur-sm
                            hover:border-white/25
                            hover:bg-white/15
                            hover:text-white
                          `
                      }
                    `}
                  >
                    <span>
                      {t.regiones[
                        region
                      ] || region}
                    </span>

                    <span
                      className={`
                        rounded-full
                        px-1.5
                        py-0.5
                        text-[10px]
                        ${
                          activa
                            ? "bg-white/20 text-white"
                            : "bg-white/10 text-white/50"
                        }
                      `}
                    >
                      {cantidad}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* ====================================================
            CONTENIDO REGIÓN
        ==================================================== */}

        <div
          className="
            mx-auto
            max-w-7xl
            px-6
            pb-14
            md:pb-16
          "
        >

          {/* HEADER REGIÓN */}

          <div
            className="
              mb-5
              flex
              items-center
              justify-between
              gap-4
            "
          >
            <div>

              <div
                className="
                  mb-1
                  flex
                  items-center
                  gap-2
                  text-xs
                  text-white/50
                "
              >
                <MapPin size={14} />

                <span>
                  {t.regiones[
                    regionActiva
                  ] || regionActiva}
                </span>
              </div>

              <h3
                className="
                  text-xl
                  font-bold
                  text-white
                  md:text-2xl
                "
              >
                {t.regiones[
                  regionActiva
                ] || regionActiva}
              </h3>
            </div>

            {/* CONTADOR */}

            <div
              className="
                hidden
                items-center
                gap-2
                text-xs
                text-white/50
                md:flex
              "
            >
              <Factory size={15} />

              <span>
                {centralesFiltradas.length}{" "}
                {t.plantas}
              </span>
            </div>
          </div>

          {/* ==================================================
              GRID
          ================================================== */}

          {centralesFiltradas.length === 0 ? (
            <div
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/10
                p-8
                text-center
                backdrop-blur-sm
              "
            >
              <Factory
                size={34}
                className="
                  mx-auto
                  mb-3
                  text-white/35
                "
              />

              <p
                className="
                  text-sm
                  text-white/55
                "
              >
                {t.sinCentrales}
              </p>
            </div>
          ) : (
            <div
              className="
                grid
                grid-cols-1
                gap-5
                md:grid-cols-2
                lg:grid-cols-3
              "
            >
              {centralesFiltradas.map(
                (central) => {

                  const imagen =
                    obtenerImagen(
                      central
                    );

                  const tecnologias =
                    obtenerTecnologias(
                      central
                    );

                  return (
                    <article
                      key={central.id}
                      className="
                        group
                        relative
                        cursor-pointer
                        overflow-hidden
                        rounded-[22px]
                        border
                        border-white/10
                        bg-white
                        shadow-[0_12px_35px_rgba(0,0,0,0.16)]
                        transition-all
                        duration-500
                        ease-out
                        hover:-translate-y-2
                        hover:border-[#00A9E8]/30
                        hover:shadow-[0_25px_65px_rgba(0,0,0,0.30)]
                      "
                    >

                      {/* ==================================
                          IMAGEN
                      ================================== */}

                      <div
                        className="
                          relative
                          aspect-[16/9]
                          overflow-hidden
                          bg-slate-100
                        "
                      >
                        {imagen ? (
                          <img
                            src={imagen}
                            alt={obtenerUbicacion(
                              central
                            )}
                            loading="lazy"
                            className="
                              h-full
                              w-full
                              object-cover
                              transition-transform
                              duration-700
                              ease-out
                              group-hover:scale-[1.07]
                            "
                          />
                        ) : (
                          <div
                            className="
                              flex
                              h-full
                              w-full
                              items-center
                              justify-center
                              bg-gradient-to-br
                              from-slate-100
                              to-slate-200
                            "
                          >
                            <Factory
                              size={48}
                              strokeWidth={1}
                              className="text-slate-300"
                            />
                          </div>
                        )}

                        {/* OVERLAY */}

                        <div
                          className="
                            absolute
                            inset-0
                            bg-gradient-to-t
                            from-[#090b22]/80
                            via-[#090b22]/10
                            to-transparent
                            transition-all
                            duration-500
                            group-hover:from-[#090b22]/90
                          "
                        />

                        {/* BRILLO */}

                        <div
                          className="
                            pointer-events-none
                            absolute
                            inset-x-0
                            top-0
                            h-24
                            bg-gradient-to-b
                            from-black/20
                            to-transparent
                          "
                        />

                        {/* PAÍS */}

                        <div
                          className="
                            absolute
                            bottom-4
                            left-4
                            z-10
                            flex
                            items-center
                            gap-2
                            text-xs
                            font-semibold
                            text-white
                          "
                        >
                          <div
                            className="
                              flex
                              h-7
                              w-7
                              items-center
                              justify-center
                              rounded-full
                              border
                              border-white/20
                              bg-white/15
                              backdrop-blur-md
                            "
                          >
                            <MapPin size={13} />
                          </div>

                          <span>
                            {central.pais}
                          </span>
                        </div>

                        {/* LÍNEA AZUL */}

                        <div
                          className="
                            absolute
                            bottom-0
                            left-0
                            h-[3px]
                            w-0
                            bg-[#00A9E8]
                            transition-all
                            duration-500
                            group-hover:w-full
                          "
                        />
                      </div>

                      {/* ==================================
                          CONTENIDO
                      ================================== */}

                      <div className="p-5 md:p-6">

                        {/* REGIÓN */}

                        <div
                          className="
                            mb-2
                            flex
                            items-center
                            gap-2
                          "
                        >
                          <span
                            className="
                              h-1.5
                              w-1.5
                              rounded-full
                              bg-[#00A9E8]
                            "
                          />

                          <span
                            className="
                              text-[9px]
                              font-bold
                              uppercase
                              tracking-[0.18em]
                              text-slate-400
                            "
                          >
                            {central.region}
                          </span>
                        </div>

                        {/* UBICACIÓN */}

                        <h4
                          className="
                            text-lg
                            font-bold
                            leading-[1.15]
                            text-[#171843]
                            transition-colors
                            duration-300
                            group-hover:text-[#00A9E8]
                            md:text-xl
                          "
                        >
                          {obtenerUbicacion(
                            central
                          )}
                        </h4>

                        {/* DIVISOR */}

                        <div
                          className="
                            my-5
                            h-px
                            w-full
                            bg-slate-100
                          "
                        />

                        {/* INFORMACIÓN */}

                        <div
                          className="
                            grid
                            grid-cols-2
                            gap-2.5
                          "
                        >

                          {/* CAPACIDAD */}

                          {central.capacidad && (
                            <div
                              className="
                                rounded-xl
                                border
                                border-slate-100
                                bg-slate-50
                                p-3
                                transition-all
                                duration-300
                                group-hover:border-[#00A9E8]/10
                                group-hover:bg-[#171843]/[0.025]
                              "
                            >
                              <div
                                className="
                                  mb-2
                                  flex
                                  items-center
                                  gap-2
                                "
                              >
                                <div
                                  className="
                                    flex
                                    h-7
                                    w-7
                                    items-center
                                    justify-center
                                    rounded-lg
                                    bg-[#171843]/[0.06]
                                    text-[#171843]
                                  "
                                >
                                  <Droplets
                                    size={14}
                                  />
                                </div>

                                <span
                                  className="
                                    text-[8px]
                                    font-bold
                                    uppercase
                                    tracking-wider
                                    text-slate-400
                                  "
                                >
                                  {t.capacidad}
                                </span>
                              </div>

                              <p
                                className="
                                  text-[11px]
                                  font-semibold
                                  leading-snug
                                  text-slate-700
                                "
                              >
                                {central.capacidad}
                              </p>
                            </div>
                          )}

                          {/* TIPO DE CAFÉ */}

                          {central.tipo_cafe && (
                            <div
                              className="
                                rounded-xl
                                border
                                border-slate-100
                                bg-slate-50
                                p-3
                                transition-all
                                duration-300
                                group-hover:border-[#00A9E8]/10
                                group-hover:bg-[#171843]/[0.025]
                              "
                            >
                              <div
                                className="
                                  mb-2
                                  flex
                                  items-center
                                  gap-2
                                "
                              >
                                <div
                                  className="
                                    flex
                                    h-7
                                    w-7
                                    items-center
                                    justify-center
                                    rounded-lg
                                    bg-[#171843]/[0.06]
                                    text-[#171843]
                                  "
                                >
                                  <Sprout
                                    size={14}
                                  />
                                </div>

                                <span
                                  className="
                                    text-[8px]
                                    font-bold
                                    uppercase
                                    tracking-wider
                                    text-slate-400
                                  "
                                >
                                  {t.tipoCafe}
                                </span>
                              </div>

                              <div
                                className="
                                  text-[11px]
                                  font-semibold
                                  leading-snug
                                  text-slate-700
                                "
                              >
                                {central.tipo_cafe}
                              </div>
                            </div>
                          )}
                        </div>

                        {/* TECNOLOGÍAS */}

                        {tecnologias.length > 0 && (
                          <div className="mt-5">

                            {/* HEADER */}

                            <div
                              className="
                                mb-3
                                flex
                                items-center
                                justify-between
                              "
                            >
                              <div
                                className="
                                  flex
                                  items-center
                                  gap-2
                                "
                              >
                                <div
                                  className="
                                    flex
                                    h-7
                                    w-7
                                    items-center
                                    justify-center
                                    rounded-lg
                                    bg-[#00A9E8]/10
                                    text-[#00A9E8]
                                  "
                                >
                                  <Settings2
                                    size={14}
                                    strokeWidth={2}
                                  />
                                </div>

                                <span
                                  className="
                                    text-[9px]
                                    font-bold
                                    uppercase
                                    tracking-[0.15em]
                                    text-slate-500
                                  "
                                >
                                  {t.tecnologia}
                                </span>
                              </div>

                              <span
                                className="
                                  text-[9px]
                                  font-bold
                                  text-slate-400
                                "
                              >
                                {tecnologias.length}
                              </span>
                            </div>

                            {/* CHIPS */}

                            <div
                              className="
                                flex
                                flex-wrap
                                gap-1.5
                              "
                            >
                              {tecnologias.map(
                                (
                                  tecnologia,
                                  index
                                ) => (
                                  <div
                                    key={`${central.id}-tec-${index}`}
                                    className="
                                      inline-flex
                                      items-center
                                      gap-2
                                      rounded-lg
                                      border
                                      border-slate-100
                                      bg-[#171843]/[0.035]
                                      px-2.5
                                      py-2
                                      transition-all
                                      duration-200
                                      group-hover:border-[#00A9E8]/15
                                      group-hover:bg-[#00A9E8]/[0.035]
                                    "
                                  >
                                    <div
                                      className="
                                        flex
                                        h-5
                                        w-5
                                        flex-shrink-0
                                        items-center
                                        justify-center
                                        rounded-md
                                        border
                                        border-slate-100
                                        bg-white
                                        text-[#171843]
                                        shadow-sm
                                      "
                                    >
                                      <IconoTecnologia
                                        index={
                                          index
                                        }
                                      />
                                    </div>

                                    <span
                                      className="
                                        text-[10px]
                                        font-medium
                                        leading-tight
                                        text-slate-600
                                      "
                                    >
                                      {tecnologia}
                                    </span>
                                  </div>
                                )
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </article>
                  );
                }
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Centrales;