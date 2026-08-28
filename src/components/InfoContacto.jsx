import React, {
  useEffect,
  useState,
} from "react";

import {
  Phone,
  Mail,
  Globe2,
  ArrowUpRight,
  Loader2,
  AlertCircle,
} from "lucide-react";

import ReactCountryFlag from "react-country-flag";

// ============================================================
// CONFIGURACIÓN API
// ============================================================

const API_BASE =
  "https://penagos.com/wp-json/penagos/v1";

const API_REPRESENTANTES =
  `${API_BASE}/equipo-comercial`;

// ============================================================
// COLOR PENAGOS
// ============================================================

const PENAGOS_BLUE = "#302B80";

// ============================================================
// COMPONENTE
// ============================================================

const ZonasColombia = ({
  language = "ES",
}) => {

  const isEnglish =
    language === "EN";

  // ==========================================================
  // ESTADOS
  // ==========================================================

  const [
    representantes,
    setRepresentantes,
  ] = useState([]);

  const [
    cargando,
    setCargando,
  ] = useState(true);

  const [
    error,
    setError,
  ] = useState(false);

  // ==========================================================
  // TEXTOS
  // ==========================================================

  const textos = {

    ES: {

      eyebrow:
        "Equipo comercial",

      titulo:
        "Zonas de Colombia",

      descripcion:
        "Nuestro equipo comercial está disponible para acompañarlo y atender sus necesidades en cada región.",

      cobertura:
        "Cobertura",

      telefono:
        "Teléfono",

      email:
        "Correo electrónico",

      cargando:
        "Cargando información...",

      error:
        "No fue posible cargar la información.",

      reintentar:
        "Reintentar",

    },

    EN: {

      eyebrow:
        "International sales team",

      titulo:
        "International coverage",

      descripcion:
        "Our international sales team is available to assist you and address your needs in different regions around the world.",

      cobertura:
        "Coverage",

      telefono:
        "Phone",

      email:
        "Email",

      cargando:
        "Loading information...",

      error:
        "The information could not be loaded.",

      reintentar:
        "Retry",

    },

  };

  const t =
    textos[
      isEnglish
        ? "EN"
        : "ES"
    ];

  // ==========================================================
  // TRADUCIR CARGO
  // ==========================================================
  //
  // El API entrega el cargo en español.
  // Aquí lo traducimos visualmente cuando language === "EN".
  //
  // ==========================================================

  const obtenerCargo = (
    cargo
  ) => {

    if (!cargo) {
      return "";
    }

    // En español dejamos exactamente
    // lo que viene del API.

    if (!isEnglish) {
      return cargo;
    }

    const cargoOriginal =
      String(cargo)
        .trim()
        .toLowerCase();

    // ========================================================
    // REPRESENTANTE COMERCIAL INTERNACIONAL
    // ========================================================

    if (
      cargoOriginal.includes(
        "representante comercial internacional"
      )
    ) {
      return "International Sales Representative";
    }

    if (
      cargoOriginal.includes(
        "representante comercial"
      )
    ) {
      return "Sales Representative";
    }

    if (
      cargoOriginal.includes(
        "asesor comercial internacional"
      )
    ) {
      return "International Sales Advisor";
    }

    if (
      cargoOriginal.includes(
        "asesor comercial"
      )
    ) {
      return "Sales Advisor";
    }

    if (
      cargoOriginal.includes(
        "gerente comercial internacional"
      )
    ) {
      return "International Sales Manager";
    }

    if (
      cargoOriginal.includes(
        "gerente comercial"
      )
    ) {
      return "Sales Manager";
    }

    if (
      cargoOriginal.includes(
        "director comercial internacional"
      )
    ) {
      return "International Sales Director";
    }

    if (
      cargoOriginal.includes(
        "director comercial"
      )
    ) {
      return "Sales Director";
    }

    if (
      cargoOriginal.includes(
        "jefe comercial internacional"
      )
    ) {
      return "International Sales Manager";
    }

    if (
      cargoOriginal.includes(
        "jefe comercial"
      )
    ) {
      return "Sales Manager";
    }

    if (
      cargoOriginal.includes(
        "coordinador comercial internacional"
      )
    ) {
      return "International Sales Coordinator";
    }

    if (
      cargoOriginal.includes(
        "coordinador comercial"
      )
    ) {
      return "Sales Coordinator";
    }

    if (
      cargoOriginal.includes(
        "ejecutivo comercial internacional"
      )
    ) {
      return "International Sales Executive";
    }

    if (
      cargoOriginal.includes(
        "ejecutivo comercial"
      )
    ) {
      return "Sales Executive";
    }

    // ========================================================
    // SI EL API YA VIENE EN INGLÉS
    // ========================================================

    if (
      cargoOriginal.includes(
        "international sales representative"
      )
    ) {
      return "International Sales Representative";
    }

    if (
      cargoOriginal.includes(
        "sales representative"
      )
    ) {
      return "Sales Representative";
    }

    if (
      cargoOriginal.includes(
        "international sales manager"
      )
    ) {
      return "International Sales Manager";
    }

    if (
      cargoOriginal.includes(
        "sales manager"
      )
    ) {
      return "Sales Manager";
    }

    if (
      cargoOriginal.includes(
        "international sales"
      )
    ) {
      return "International Sales";
    }

    // ========================================================
    // SI NO TENEMOS UNA TRADUCCIÓN ESPECÍFICA
    // DEVOLVEMOS EL CARGO ORIGINAL
    // ========================================================

    return cargo;
  };

  // ==========================================================
  // DETERMINAR SI ES REPRESENTANTE INTERNACIONAL
  // ==========================================================

  const esRepresentanteInternacional =
    (representante) => {

      const cargo =
        String(
          representante?.cargo || ""
        )
          .trim()
          .toLowerCase();

      const nombre =
        String(
          representante?.nombre || ""
        )
          .trim()
          .toLowerCase();

      const zonas =
        Array.isArray(
          representante?.zonas
        )
          ? representante.zonas
          : [];

      const zonasTexto =
        zonas
          .map(
            (zona) =>
              String(zona)
                .trim()
                .toLowerCase()
          )
          .join(" ");

      // ======================================================
      // SI DICE COLOMBIA → NO ES INTERNACIONAL
      // ======================================================

      if (
        cargo.includes("colombia") ||
        zonasTexto.includes("colombia")
      ) {
        return false;
      }

      // ======================================================
      // REPRESENTANTES INTERNACIONALES
      // ======================================================

      return (
        cargo.includes(
          "internacional"
        ) ||
        cargo.includes(
          "international"
        ) ||
        cargo.includes(
          "international sales"
        ) ||
        nombre.includes(
          "internacional"
        ) ||
        nombre.includes(
          "international"
        )
      );
    };

  // ==========================================================
  // DETERMINAR SI LA COBERTURA ES COLOMBIA
  // ==========================================================

  const esCoberturaColombia =
    (representante) => {

      const cargo =
        String(
          representante?.cargo || ""
        )
          .trim()
          .toLowerCase();

      const zonas =
        Array.isArray(
          representante?.zonas
        )
          ? representante.zonas
          : [];

      const zonasNormalizadas =
        zonas.map(
          (zona) =>
            String(zona)
              .trim()
              .toLowerCase()
        );

      // ======================================================
      // 1. CARGO
      // ======================================================

      if (
        cargo.includes(
          "colombia"
        )
      ) {
        return true;
      }

      // ======================================================
      // 2. COLOMBIA EN ZONAS
      // ======================================================

      if (
        zonasNormalizadas.some(
          (zona) =>
            zona.includes(
              "colombia"
            )
        )
      ) {
        return true;
      }

      // ======================================================
      // 3. REGIONES / DEPARTAMENTOS
      // ======================================================

      const esZonaColombiana =
        zonasNormalizadas.some(
          (zona) =>

            zona.includes(
              "zona cafetera"
            ) ||

            zona.includes(
              "eje cafetero"
            ) ||

            zona.includes(
              "occidente del país"
            ) ||

            zona.includes(
              "occidente del pais"
            ) ||

            zona.includes(
              "región cafetera"
            ) ||

            zona.includes(
              "region cafetera"
            ) ||

            zona.includes(
              "santander"
            ) ||

            zona.includes(
              "antioquia"
            ) ||

            zona.includes(
              "cundinamarca"
            ) ||

            zona.includes(
              "boyacá"
            ) ||

            zona.includes(
              "boyaca"
            ) ||

            zona.includes(
              "caldas"
            ) ||

            zona.includes(
              "risaralda"
            ) ||

            zona.includes(
              "quindío"
            ) ||

            zona.includes(
              "quindio"
            ) ||

            zona.includes(
              "tolima"
            ) ||

            zona.includes(
              "huila"
            ) ||

            zona.includes(
              "nariño"
            ) ||

            zona.includes(
              "narino"
            ) ||

            zona.includes(
              "cauca"
            ) ||

            zona.includes(
              "valle del cauca"
            ) ||

            zona.includes(
              "meta"
            ) ||

            zona.includes(
              "casanare"
            ) ||

            zona.includes(
              "cesar"
            ) ||

            zona.includes(
              "bolívar"
            ) ||

            zona.includes(
              "bolivar"
            ) ||

            zona.includes(
              "atlántico"
            ) ||

            zona.includes(
              "atlantico"
            ) ||

            zona.includes(
              "magdalena"
            ) ||

            zona.includes(
              "córdoba"
            ) ||

            zona.includes(
              "cordoba"
            ) ||

            zona.includes(
              "sucre"
            ) ||

            zona.includes(
              "norte de santander"
            )
        );

      return esZonaColombiana;
    };

  // ==========================================================
  // CARGAR REPRESENTANTES
  // ==========================================================

  const cargarRepresentantes =
    async () => {

      try {

        setCargando(true);
        setError(false);

        const response =
          await fetch(
            API_REPRESENTANTES,
            {
              method: "GET",

              headers: {
                Accept:
                  "application/json",
              },
            }
          );

        if (!response.ok) {

          throw new Error(
            `Error HTTP ${response.status}`
          );
        }

        const data =
          await response.json();

        console.log(
          "REPRESENTANTES API:",
          data
        );

        const resultado =
          Array.isArray(data)
            ? data
            : Array.isArray(
                data.data
              )
            ? data.data
            : [];

        setRepresentantes(
          resultado
        );

      } catch (err) {

        console.error(
          "Error cargando representantes:",
          err
        );

        setError(true);

      } finally {

        setCargando(false);

      }
    };

  // ==========================================================
  // CARGAR
  // ==========================================================

  useEffect(() => {

    cargarRepresentantes();

  }, []);

  // ==========================================================
  // FILTRAR REPRESENTANTES SEGÚN IDIOMA
  // ==========================================================

  const representantesVisibles =
    representantes.filter(
      (representante) => {

        // ====================================================
        // ESPAÑOL
        // MOSTRAR TODOS
        // ====================================================

        if (!isEnglish) {
          return true;
        }

        // ====================================================
        // INGLÉS
        // SOLO INTERNACIONALES
        // ====================================================

        return esRepresentanteInternacional(
          representante
        );
      }
    );

  // ==========================================================
  // RENDER
  // ==========================================================

  return (

    <section
      className="
        relative
        overflow-hidden
        bg-white
        py-20
        md:py-28
      "
    >

      {/* ======================================================
          DECORACIÓN
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-10
          h-96
          w-96
          rounded-full
          bg-[#302B80]/10
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          bottom-10
          h-96
          w-96
          rounded-full
          bg-[#302B80]/5
          blur-3xl
        "
      />

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-5
          sm:px-6
          lg:px-8
        "
      >

        {/* ==================================================
            HEADER
        ================================================== */}

        <div className="max-w-3xl">

          <div
            className="
              mb-5
              flex
              items-center
              gap-3
            "
          >

            <span
              className="
                h-[2px]
                w-10
                bg-[#302B80]
              "
            />

            <span
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.25em]
                text-[#302B80]
              "
            >
              {t.eyebrow}
            </span>

          </div>

          <h2
            className="
              text-4xl
              font-bold
              tracking-tight
              text-[#302B80]
              md:text-5xl
            "
          >
            {t.titulo}
          </h2>

          <p
            className="
              mt-5
              text-base
              leading-8
              text-gray-600
              md:text-lg
            "
          >
            {t.descripcion}
          </p>

        </div>

        {/* ==================================================
            ERROR
        ================================================== */}

        {error && (

          <div
            className="
              mt-8
              flex
              items-center
              justify-between
              gap-4
              rounded-xl
              border
              border-red-200
              bg-red-50
              p-4
              text-sm
              text-red-700
            "
          >

            <div
              className="
                flex
                items-center
                gap-3
              "
            >

              <AlertCircle
                size={20}
              />

              <span>
                {t.error}
              </span>

            </div>

            <button
              onClick={
                cargarRepresentantes
              }
              className="
                cursor-pointer
                rounded-lg
                bg-red-600
                px-4
                py-2
                text-xs
                font-bold
                text-white
                transition
                hover:bg-red-700
              "
            >
              {t.reintentar}
            </button>

          </div>

        )}

        {/* ==================================================
            LOADING
        ================================================== */}

        {cargando ? (

          <div
            className="
              mt-12
              flex
              items-center
              justify-center
              rounded-2xl
              border
              border-gray-200
              bg-[#F7F7FB]
              py-16
            "
          >

            <div
              className="
                flex
                items-center
                gap-3
                text-sm
                font-semibold
                text-[#302B80]
              "
            >

              <Loader2
                size={22}
                className="animate-spin"
              />

              {t.cargando}

            </div>

          </div>

        ) : (

          /* ==================================================
              TARJETAS
          ================================================== */

          <div
            className="
              mt-12
              grid
              gap-6
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >

            {representantesVisibles.map(
              (representante) => {

                const esColombia =
                  esCoberturaColombia(
                    representante
                  );

                return (

                  <article
                    key={
                      representante.id ||
                      representante.nombre
                    }
                    className="
                      group
                      relative
                      cursor-pointer
                      overflow-hidden
                      rounded-2xl
                      border
                      border-gray-200
                      bg-white
                      shadow-sm
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-[#302B80]/30
                      hover:shadow-[0_20px_45px_-20px_rgba(48,43,128,0.30)]
                    "
                  >

                    {/* LÍNEA SUPERIOR */}

                    <div
                      className="
                        h-1.5
                        w-full
                        bg-[#302B80]
                      "
                    />

                    <div className="p-6">

                      {/* ==================================================
                          PERFIL
                      ================================================== */}

                      <div
                        className="
                          flex
                          items-start
                          gap-4
                        "
                      >

                        {/* ==================================================
                            BANDERA COLOMBIA / MUNDO
                        ================================================== */}

                        {esColombia ? (

                          <div
                            className="
                              relative
                              flex
                              h-14
                              w-14
                              shrink-0
                              items-center
                              justify-center
                              overflow-hidden
                              rounded-2xl
                              bg-white
                              shadow-md
                            "
                          >

                            <ReactCountryFlag
                              countryCode="CO"
                              svg
                              style={{
                                width:
                                  "3.2em",

                                height:
                                  "3.2em",

                                objectFit:
                                  "cover",
                              }}
                              title="Colombia"
                            />

                            <span
                              className="
                                absolute
                                -bottom-1
                                -right-1
                                h-4
                                w-4
                                rounded-full
                                border-[3px]
                                border-white
                                bg-[#302B80]
                              "
                            />

                          </div>

                        ) : (

                          <div
                            className="
                              relative
                              flex
                              h-14
                              w-14
                              shrink-0
                              items-center
                              justify-center
                              rounded-2xl
                              bg-[#302B80]/10
                              text-[#302B80]
                              shadow-md
                            "
                          >

                            <Globe2
                              size={30}
                              strokeWidth={1.8}
                            />

                            <span
                              className="
                                absolute
                                -bottom-1
                                -right-1
                                flex
                                h-4
                                w-4
                                items-center
                                justify-center
                                rounded-full
                                border-[3px]
                                border-white
                                bg-[#302B80]
                              "
                            />

                          </div>

                        )}

                        {/* ==================================================
                            INFORMACIÓN
                        ================================================== */}

                        <div
                          className="
                            min-w-0
                            flex-1
                          "
                        >

                          <h3
                            className="
                              text-lg
                              font-bold
                              leading-tight
                              text-[#302B80]
                            "
                          >
                            {
                              representante.nombre
                            }
                          </h3>

                          {representante.cargo && (

                            <p
                              className="
                                mt-1.5
                                text-xs
                                font-semibold
                                leading-5
                                text-[#302B80]
                              "
                            >
                              {obtenerCargo(
                                representante.cargo
                              )}
                            </p>

                          )}

                        </div>

                      </div>

                      {/* ==================================================
                          COBERTURA
                      ================================================== */}

                      <div
                        className="
                          mt-6
                          rounded-xl
                          bg-[#F5F4FA]
                          p-4
                        "
                      >

                        <div
                          className="
                            mb-3
                            flex
                            items-center
                            gap-2
                          "
                        >

                          <Globe2
                            size={15}
                            className="text-[#302B80]"
                          />

                          <p
                            className="
                              text-[10px]
                              font-bold
                              uppercase
                              tracking-[0.15em]
                              text-gray-500
                            "
                          >
                            {t.cobertura}
                          </p>

                        </div>

                        <div
                          className="
                            flex
                            flex-wrap
                            gap-1.5
                          "
                        >

                          {(
                            representante.zonas ||
                            []
                          ).map(
                            (zona) => (

                              <span
                                key={zona}
                                className="
                                  rounded-full
                                  border
                                  border-[#302B80]/15
                                  bg-white
                                  px-2.5
                                  py-1
                                  text-[11px]
                                  font-medium
                                  text-gray-600
                                "
                              >
                                {zona}
                              </span>

                            )
                          )}

                        </div>

                      </div>

                      {/* ==================================================
                          CONTACTO
                      ================================================== */}

                      <div
                        className="
                          mt-5
                          space-y-3
                          border-t
                          border-gray-100
                          pt-5
                        "
                      >

                        {representante.telefono && (

                          <a
                            href={`tel:${representante.telefono}`}
                            className="
                              flex
                              cursor-pointer
                              items-center
                              gap-3
                              text-sm
                              font-semibold
                              text-gray-700
                              transition
                              hover:text-[#302B80]
                            "
                          >

                            <span
                              className="
                                flex
                                h-9
                                w-9
                                shrink-0
                                items-center
                                justify-center
                                rounded-lg
                                bg-[#302B80]/10
                                text-[#302B80]
                              "
                            >

                              <Phone
                                size={16}
                              />

                            </span>

                            <span>
                              {
                                representante.telefono
                              }
                            </span>

                            <ArrowUpRight
                              size={14}
                              className="
                                ml-auto
                                opacity-0
                                transition
                                group-hover:opacity-100
                              "
                            />

                          </a>

                        )}

                        {representante.email && (

                          <a
                            href={`mailto:${representante.email}`}
                            className="
                              flex
                              cursor-pointer
                              items-center
                              gap-3
                              text-sm
                              text-gray-500
                              transition
                              hover:text-[#302B80]
                            "
                          >

                            <span
                              className="
                                flex
                                h-9
                                w-9
                                shrink-0
                                items-center
                                justify-center
                                rounded-lg
                                bg-[#302B80]/10
                                text-[#302B80]
                              "
                            >

                              <Mail
                                size={16}
                              />

                            </span>

                            <span
                              className="
                                min-w-0
                                break-all
                              "
                            >
                              {
                                representante.email
                              }
                            </span>

                          </a>

                        )}

                      </div>

                    </div>

                  </article>

                );

              }
            )}

          </div>

        )}

        {/* ==================================================
            SIN RESULTADOS
        ================================================== */}

        {!cargando &&
          !error &&
          representantesVisibles.length === 0 && (

            <div
              className="
                mt-12
                rounded-2xl
                border
                border-gray-200
                bg-[#F7F7FB]
                p-10
                text-center
              "
            >

              <Globe2
                size={36}
                className="
                  mx-auto
                  mb-4
                  text-[#302B80]
                "
              />

              <p
                className="
                  text-sm
                  font-semibold
                  text-gray-600
                "
              >
                {isEnglish
                  ? "No international sales representatives found."
                  : "No se encontraron representantes comerciales."
                }
              </p>

            </div>

          )}

      </div>

    </section>

  );
};

export default ZonasColombia;
