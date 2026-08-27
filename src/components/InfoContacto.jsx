import React, {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
  useMap,
} from "react-leaflet";

import L from "leaflet";

import {
  MapPin,
  Phone,
  Mail,
  UserRound,
  Building2,
  Globe2,
  X,
  ArrowUpRight,
  Loader2,
  AlertCircle,
} from "lucide-react";

import "leaflet/dist/leaflet.css";

// ============================================================
// CONFIGURACIÓN API
// ============================================================

const API_BASE =
  "https://penagos.com/wp-json/penagos/v1";

const API_DISTRIBUIDORES =
  `${API_BASE}/distribuidores`;

const API_REPRESENTANTES =
  `${API_BASE}/equipo-comercial`;

// ============================================================
// COLOR PENAGOS
// ============================================================

const PENAGOS_BLUE = "#302B80";

// ============================================================
// ICONO PERSONALIZADO PENAGOS
// ============================================================

const crearIconoPenagos = (
  seleccionado = false
) => {
  return L.divIcon({
    className: "penagos-marker-wrapper",

    html: `
      <div class="penagos-marker ${
        seleccionado ? "selected" : ""
      }">
        <div class="penagos-marker-inner">

          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            stroke-width="2.4"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M20 10c0 4.5-8 11-8 11S4 14.5 4 10a8 8 0 1 1 16 0Z"/>
            <circle cx="12" cy="10" r="2.5"/>
          </svg>

        </div>
      </div>
    `,

    iconSize: [44, 54],
    iconAnchor: [22, 54],
    popupAnchor: [0, -50],
  });
};

// ============================================================
// COMPONENTE PARA MOVER EL MAPA
// ============================================================

const MoverMapa = ({
  paisSeleccionado,
  distribuidores,
  distribuidorSeleccionado,
}) => {
  const map = useMap();

  useEffect(() => {
    // --------------------------------------------------------
    // SI HAY UN DISTRIBUIDOR SELECCIONADO
    // --------------------------------------------------------

    if (
      distribuidorSeleccionado &&
      Array.isArray(
        distribuidorSeleccionado.coordenadas
      ) &&
      distribuidorSeleccionado.coordenadas.length === 2
    ) {
      const [lat, lng] =
        distribuidorSeleccionado.coordenadas;

      map.flyTo(
        [lat, lng],
        7,
        {
          duration: 1.2,
        }
      );

      return;
    }

    // --------------------------------------------------------
    // FILTRAR DISTRIBUIDORES DEL PAÍS
    // --------------------------------------------------------

    let distribuidoresMapa =
      distribuidores.filter(
        (item) =>
          Array.isArray(item.coordenadas) &&
          item.coordenadas.length === 2
      );

    if (
      paisSeleccionado &&
      paisSeleccionado !== "Todos"
    ) {
      distribuidoresMapa =
        distribuidoresMapa.filter(
          (item) =>
            item.pais ===
            paisSeleccionado
        );
    }

    // --------------------------------------------------------
    // SI NO HAY DISTRIBUIDORES
    // --------------------------------------------------------

    if (
      distribuidoresMapa.length === 0
    ) {
      return;
    }

    // --------------------------------------------------------
    // UN SOLO DISTRIBUIDOR
    // --------------------------------------------------------

    if (
      distribuidoresMapa.length === 1
    ) {
      const [lat, lng] =
        distribuidoresMapa[0].coordenadas;

      map.flyTo(
        [lat, lng],
        6,
        {
          duration: 1.2,
        }
      );

      return;
    }

    // --------------------------------------------------------
    // VARIOS DISTRIBUIDORES
    // AJUSTAR MAPA A TODOS
    // --------------------------------------------------------

    const bounds =
      L.latLngBounds(
        distribuidoresMapa.map(
          (item) =>
            item.coordenadas
        )
      );

    map.flyToBounds(
      bounds,
      {
        padding: [70, 70],
        maxZoom: 6,
        duration: 1.2,
      }
    );
  }, [
    paisSeleccionado,
    distribuidores,
    distribuidorSeleccionado,
    map,
  ]);

  return null;
};

// ============================================================
// COMPONENTE PRINCIPAL
// ============================================================

const InfoContacto = ({
  language = "ES",
}) => {
  const isEnglish =
    language === "EN";

  // ==========================================================
  // ESTADOS
  // ==========================================================

  const [
    distribuidores,
    setDistribuidores,
  ] = useState([]);

  const [
    representantesColombia,
    setRepresentantesColombia,
  ] = useState([]);

  const [
    cargandoDistribuidores,
    setCargandoDistribuidores,
  ] = useState(true);

  const [
    cargandoRepresentantes,
    setCargandoRepresentantes,
  ] = useState(true);

  const [
    errorDistribuidores,
    setErrorDistribuidores,
  ] = useState(false);

  const [
    errorRepresentantes,
    setErrorRepresentantes,
  ] = useState(false);

  const [
    paisSeleccionado,
    setPaisSeleccionado,
  ] = useState("Todos");

  const [
    distribuidorSeleccionado,
    setDistribuidorSeleccionado,
  ] = useState(null);

  // ==========================================================
  // TEXTOS
  // ==========================================================

  const textos = {
    ES: {
      titulo:
        "Encuentre su distribuidor más cercano",

      descripcion:
        "Seleccione un país para conocer nuestros distribuidores y encontrar el contacto adecuado para sus necesidades.",

      todos:
        "Todos los países",

      filtros:
        "Filtrar por país",

      distribuidores:
        "distribuidores",

      contacto:
        "Contacto",

      telefono:
        "Teléfono",

      email:
        "Correo electrónico",

      direccion:
        "Dirección",

      representante:
        "Representante Penagos",

      llamar:
        "Llamar",

      escribir:
        "Enviar correo",

      comercialEyebrow:
        "Equipo comercial",

      comercial:
        "Red Comercial",

      representantes:
        "Nuestro equipo comercial está disponible para acompañarlo y atender sus necesidades en cada región.",

      cobertura:
        "Cobertura",

      cerrar:
        "Cerrar",

      cargando:
        "Cargando información...",

      error:
        "No fue posible cargar la información.",

      reintentar:
        "Reintentar",
    },

    EN: {
      titulo:
        "Find your nearest distributor",

      descripcion:
        "Select a country to discover our distributors and find the right contact for your needs.",

      todos:
        "All countries",

      filtros:
        "Filter by country",

      distribuidores:
        "distributors",

      contacto:
        "Contact",

      telefono:
        "Phone",

      email:
        "Email",

      direccion:
        "Address",

      representante:
        "Penagos Representative",

      llamar:
        "Call",

      escribir:
        "Send email",

      comercialEyebrow:
        "Sales team",

      comercial:
        "Sales Network",

      representantes:
        "Our sales team is available to assist you and address your needs in every region.",

      cobertura:
        "Coverage",

      cerrar:
        "Close",

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
  // CARGAR DISTRIBUIDORES
  // ==========================================================

  const cargarDistribuidores =
    async () => {
      try {
        setCargandoDistribuidores(
          true
        );

        setErrorDistribuidores(
          false
        );

        const response =
          await fetch(
            API_DISTRIBUIDORES,
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
          "DISTRIBUIDORES API:",
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

        setDistribuidores(
          resultado
        );
      } catch (error) {
        console.error(
          "Error cargando distribuidores:",
          error
        );

        setErrorDistribuidores(
          true
        );
      } finally {
        setCargandoDistribuidores(
          false
        );
      }
    };

  // ==========================================================
  // CARGAR REPRESENTANTES
  // ==========================================================

  const cargarRepresentantes =
    async () => {
      try {
        setCargandoRepresentantes(
          true
        );

        setErrorRepresentantes(
          false
        );

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

        setRepresentantesColombia(
          resultado
        );
      } catch (error) {
        console.error(
          "Error cargando representantes:",
          error
        );

        setErrorRepresentantes(
          true
        );
      } finally {
        setCargandoRepresentantes(
          false
        );
      }
    };

  // ==========================================================
  // CARGAR APIs
  // ==========================================================

  useEffect(() => {
    cargarDistribuidores();
    cargarRepresentantes();
  }, []);

  // ==========================================================
  // PAÍSES
  // ==========================================================

  const paises =
    useMemo(() => {
      const listaPaises =
        distribuidores
          .map(
            (item) =>
              item.pais
          )
          .filter(Boolean);

      return [
        "Todos",
        ...new Set(
          listaPaises
        ),
      ];
    }, [distribuidores]);

  // ==========================================================
  // DISTRIBUIDORES FILTRADOS
  // ==========================================================

  const distribuidoresFiltrados =
    useMemo(() => {
      if (
        paisSeleccionado ===
        "Todos"
      ) {
        return distribuidores;
      }

      return distribuidores.filter(
        (item) =>
          item.pais ===
          paisSeleccionado
      );
    }, [
      paisSeleccionado,
      distribuidores,
    ]);

  // ==========================================================
  // SELECCIONAR DISTRIBUIDOR
  // ==========================================================

  const seleccionarDistribuidor =
    (distribuidor) => {
      setDistribuidorSeleccionado(
        distribuidor
      );
    };

  // ==========================================================
  // CAMBIAR PAÍS
  // ==========================================================

  const cambiarPais =
    (pais) => {
      setPaisSeleccionado(
        pais
      );

      setDistribuidorSeleccionado(
        null
      );
    };

  // ==========================================================
  // LOADING MAPA
  // ==========================================================

  const cargandoMapa =
    cargandoDistribuidores;

  // ==========================================================
  // RENDER
  // ==========================================================

  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">

      {/* ====================================================
          DECORACIÓN
      ==================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-20
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
          top-[600px]
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

          <h2
            className="
              text-4xl
              font-bold
              leading-tight
              tracking-tight
              text-[#302B80]
              md:text-5xl
              lg:text-6xl
            "
          >
            {t.titulo}
          </h2>

          <p
            className="
              mt-6
              max-w-2xl
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
            FILTRO
        ================================================== */}

        <div
          className="
            mt-10
            flex
            flex-col
            gap-5
            rounded-2xl
            border
            border-gray-200
            bg-[#F7F7FB]
            p-5
            shadow-sm
            md:flex-row
            md:items-center
            md:justify-between
          "
        >

          <div className="flex items-center gap-4">

            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                bg-[#302B80]
                text-white
              "
            >
              <Globe2 size={22} />
            </div>

            <div>

              <p
                className="
                  text-sm
                  font-bold
                  text-[#302B80]
                "
              >
                {t.filtros}
              </p>

              <p
                className="
                  mt-1
                  text-xs
                  text-gray-500
                "
              >
                {cargandoDistribuidores
                  ? t.cargando
                  : `${distribuidoresFiltrados.length} ${t.distribuidores}`}
              </p>

            </div>

          </div>

          <div className="relative w-full md:w-80">

            <select
              value={
                paisSeleccionado
              }
              disabled={
                cargandoDistribuidores
              }
              onChange={(e) =>
                cambiarPais(
                  e.target.value
                )
              }
              className="
                w-full
                appearance-none
                rounded-xl
                border
                border-gray-200
                bg-white
                px-4
                py-3.5
                pr-10
                text-sm
                font-semibold
                text-[#302B80]
                shadow-sm
                outline-none
                transition
                focus:border-[#302B80]
                focus:ring-4
                focus:ring-[#302B80]/10
                disabled:cursor-not-allowed
                disabled:bg-gray-100
              "
            >

              {paises.map(
                (pais) => (
                  <option
                    key={pais}
                    value={pais}
                  >
                    {pais ===
                    "Todos"
                      ? t.todos
                      : pais}
                  </option>
                )
              )}

            </select>

            <div
              className="
                pointer-events-none
                absolute
                right-4
                top-1/2
                -translate-y-1/2
                text-[#302B80]
              "
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>

          </div>

        </div>

        {/* ==================================================
            ERROR DISTRIBUIDORES
        ================================================== */}

        {errorDistribuidores && (
          <div
            className="
              mt-6
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

            <div className="flex items-center gap-3">
              <AlertCircle size={20} />

              <span>
                {t.error}
              </span>
            </div>

            <button
              onClick={
                cargarDistribuidores
              }
              className="
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
            MAPA
        ================================================== */}

        <div
          className="
            relative
            mt-8
            overflow-hidden
            rounded-[28px]
            border
            border-[#DCD9EF]
            bg-[#F0EFF8]
            p-1.5
            shadow-[0_25px_70px_-25px_rgba(48,43,128,0.30)]
          "
        >

          <div
            className="
              relative
              overflow-hidden
              rounded-[22px]
            "
          >

            {cargandoMapa ? (

              <div
                className="
                  flex
                  h-[560px]
                  w-full
                  items-center
                  justify-center
                  bg-[#F0EFF8]
                  md:h-[650px]
                "
              >

                <div className="flex flex-col items-center gap-4">

                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-full
                      bg-[#302B80]
                      text-white
                    "
                  >
                    <Loader2
                      size={26}
                      className="animate-spin"
                    />
                  </div>

                  <p
                    className="
                      text-sm
                      font-semibold
                      text-[#302B80]
                    "
                  >
                    {t.cargando}
                  </p>

                </div>

              </div>

            ) : (

              <MapContainer
                center={[
                  10,
                  -35,
                ]}
                zoom={2}
                minZoom={2}
                maxZoom={8}
                scrollWheelZoom={true}
                zoomControl={false}
                className="
                  h-[560px]
                  w-full
                  md:h-[650px]
                "
              >

                <MoverMapa
                  paisSeleccionado={
                    paisSeleccionado
                  }
                  distribuidores={
                    distribuidores
                  }
                  distribuidorSeleccionado={
                    distribuidorSeleccionado
                  }
                />

                <ZoomControl
                  position="bottomright"
                />

                <TileLayer
                  attribution="&copy; OpenStreetMap contributors"
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {/* ==========================================
                    MARKERS
                ========================================== */}

                {distribuidoresFiltrados.map(
                  (distribuidor) => {

                    if (
                      !Array.isArray(
                        distribuidor.coordenadas
                      ) ||
                      distribuidor
                        .coordenadas
                        .length !== 2
                    ) {
                      return null;
                    }

                    return (
                      <Marker
                        key={
                          distribuidor.id
                        }
                        position={
                          distribuidor.coordenadas
                        }
                        icon={crearIconoPenagos(
                          distribuidorSeleccionado?.id ===
                            distribuidor.id
                        )}
                        eventHandlers={{
                          click: () =>
                            seleccionarDistribuidor(
                              distribuidor
                            ),
                        }}
                      >

                        <Popup>

                          <div className="min-w-[230px]">

                            <div
                              className="
                                mb-2
                                flex
                                items-start
                                gap-3
                              "
                            >

                              <div
                                className="
                                  flex
                                  h-9
                                  w-9
                                  shrink-0
                                  items-center
                                  justify-center
                                  rounded-lg
                                  bg-[#302B80]
                                  text-white
                                "
                              >
                                <Building2
                                  size={17}
                                />
                              </div>

                              <div>

                                <h3
                                  className="
                                    text-sm
                                    font-bold
                                    text-[#302B80]
                                  "
                                >
                                  {
                                    distribuidor.nombre
                                  }
                                </h3>

                                <p
                                  className="
                                    mt-0.5
                                    text-xs
                                    text-gray-500
                                  "
                                >
                                  {distribuidor.ciudad
                                    ? `${distribuidor.ciudad}, ${distribuidor.pais}`
                                    : distribuidor.pais}
                                </p>

                              </div>

                            </div>

                            {distribuidor.contacto && (
                              <p className="text-xs text-gray-600">
                                <strong>
                                  {t.contacto}:
                                </strong>{" "}
                                {
                                  distribuidor.contacto
                                }
                              </p>
                            )}

                            {distribuidor.telefono && (
                              <p className="mt-1 text-xs text-gray-600">
                                <strong>
                                  {t.telefono}:
                                </strong>{" "}
                                {
                                  distribuidor.telefono
                                }
                              </p>
                            )}

                          </div>

                        </Popup>

                      </Marker>
                    );
                  }
                )}

              </MapContainer>
            )}

            {/* ==================================================
                CONTADOR
            ================================================== */}

            {!cargandoMapa && (
              <div
                className="
                  absolute
                  left-5
                  top-5
                  z-[900]
                "
              >

                <div
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-2xl
                    border
                    border-white/60
                    bg-white/95
                    px-4
                    py-3
                    shadow-xl
                    backdrop-blur-md
                  "
                >

                  <div
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      bg-[#302B80]
                      text-white
                    "
                  >
                    <MapPin size={18} />
                  </div>

                  <div>

                    <p
                      className="
                        text-xs
                        font-semibold
                        text-gray-500
                      "
                    >
                      {t.distribuidores}
                    </p>

                    <p
                      className="
                        text-lg
                        font-bold
                        leading-none
                        text-[#302B80]
                      "
                    >
                      {
                        distribuidoresFiltrados.length
                      }
                    </p>

                  </div>

                </div>

              </div>
            )}

            {/* ==================================================
                CARD DISTRIBUIDOR
            ================================================== */}

            {distribuidorSeleccionado && (
              <div
                className="
                  absolute
                  bottom-5
                  left-5
                  right-5
                  z-[1000]
                  sm:right-auto
                  sm:w-[390px]
                "
              >

                <div
                  className="
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/80
                    bg-white/95
                    shadow-[0_20px_50px_-15px_rgba(48,43,128,0.35)]
                    backdrop-blur-xl
                  "
                >

                  {/* CABECERA */}

                  <div
                    className="
                      relative
                      bg-[#302B80]
                      px-5
                      py-5
                      text-white
                    "
                  >

                    <button
                      onClick={() =>
                        setDistribuidorSeleccionado(
                          null
                        )
                      }
                      className="
                        absolute
                        right-4
                        top-4
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-full
                        bg-white/10
                        text-white
                        transition
                        hover:bg-white/20
                      "
                      aria-label={
                        t.cerrar
                      }
                    >
                      <X size={17} />
                    </button>

                    <div
                      className="
                        flex
                        items-start
                        gap-4
                        pr-8
                      "
                    >

                      <div
                        className="
                          flex
                          h-12
                          w-12
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          bg-white/15
                        "
                      >
                        <Building2
                          size={23}
                        />
                      </div>

                      <div>

                        <p
                          className="
                            text-[10px]
                            font-bold
                            uppercase
                            tracking-[0.2em]
                            text-white/70
                          "
                        >
                          {
                            distribuidorSeleccionado.pais
                          }
                        </p>

                        <h3
                          className="
                            mt-1
                            text-lg
                            font-bold
                            leading-tight
                          "
                        >
                          {
                            distribuidorSeleccionado.nombre
                          }
                        </h3>

                        {distribuidorSeleccionado.ciudad && (
                          <p
                            className="
                              mt-1
                              text-xs
                              text-white/60
                            "
                          >
                            {
                              distribuidorSeleccionado.ciudad
                            }
                          </p>
                        )}

                      </div>

                    </div>

                  </div>

                  {/* INFORMACIÓN */}

                  <div className="space-y-4 p-5">

                    {/* CONTACTO */}

                    {distribuidorSeleccionado.contacto && (
                      <div className="flex gap-3">

                        <div
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
                          <UserRound
                            size={17}
                          />
                        </div>

                        <div className="min-w-0">

                          <p
                            className="
                              text-[10px]
                              font-bold
                              uppercase
                              tracking-wider
                              text-gray-400
                            "
                          >
                            {t.contacto}
                          </p>

                          <p
                            className="
                              mt-0.5
                              text-sm
                              font-semibold
                              text-[#302B80]
                            "
                          >
                            {
                              distribuidorSeleccionado.contacto
                            }
                          </p>

                        </div>

                      </div>
                    )}

                    {/* DIRECCIÓN */}

                    {distribuidorSeleccionado.direccion && (
                      <div className="flex gap-3">

                        <div
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
                          <MapPin
                            size={17}
                          />
                        </div>

                        <div className="min-w-0">

                          <p
                            className="
                              text-[10px]
                              font-bold
                              uppercase
                              tracking-wider
                              text-gray-400
                            "
                          >
                            {t.direccion}
                          </p>

                          <p
                            className="
                              mt-0.5
                              text-sm
                              leading-5
                              text-gray-600
                            "
                          >
                            {
                              distribuidorSeleccionado.direccion
                            }
                          </p>

                        </div>

                      </div>
                    )}

                    {/* TELÉFONO */}

                    {distribuidorSeleccionado.telefono && (
                      <div className="flex gap-3">

                        <div
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
                          <Phone size={17} />
                        </div>

                        <div>

                          <p
                            className="
                              text-[10px]
                              font-bold
                              uppercase
                              tracking-wider
                              text-gray-400
                            "
                          >
                            {t.telefono}
                          </p>

                          <a
                            href={`tel:${distribuidorSeleccionado.telefono}`}
                            className="
                              mt-0.5
                              block
                              text-sm
                              font-semibold
                              text-[#302B80]
                              transition
                              hover:opacity-70
                            "
                          >
                            {
                              distribuidorSeleccionado.telefono
                            }
                          </a>

                        </div>

                      </div>
                    )}

                    {/* EMAIL */}

                    {distribuidorSeleccionado.email && (
                      <div className="flex gap-3">

                        <div
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
                          <Mail size={17} />
                        </div>

                        <div className="min-w-0">

                          <p
                            className="
                              text-[10px]
                              font-bold
                              uppercase
                              tracking-wider
                              text-gray-400
                            "
                          >
                            {t.email}
                          </p>

                          <a
                            href={`mailto:${distribuidorSeleccionado.email}`}
                            className="
                              mt-0.5
                              block
                              break-all
                              text-sm
                              font-medium
                              text-[#302B80]
                              transition
                              hover:opacity-70
                            "
                          >
                            {
                              distribuidorSeleccionado.email
                            }
                          </a>

                        </div>

                      </div>
                    )}

                  </div>

                  {/* BOTONES */}

                  {(distribuidorSeleccionado.telefono ||
                    distribuidorSeleccionado.email) && (

                    <div
                      className="
                        flex
                        gap-3
                        border-t
                        border-gray-100
                        bg-gray-50
                        p-4
                      "
                    >

                      {distribuidorSeleccionado.telefono && (
                        <a
                          href={`tel:${distribuidorSeleccionado.telefono}`}
                          className="
                            flex
                            flex-1
                            items-center
                            justify-center
                            gap-2
                            rounded-xl
                            bg-[#302B80]
                            px-4
                            py-3
                            text-xs
                            font-bold
                            text-white
                            shadow-sm
                            transition
                            hover:opacity-90
                          "
                        >
                          <Phone size={15} />
                          {t.llamar}
                        </a>
                      )}

                      {distribuidorSeleccionado.email && (
                        <a
                          href={`mailto:${distribuidorSeleccionado.email}`}
                          className="
                            flex
                            flex-1
                            items-center
                            justify-center
                            gap-2
                            rounded-xl
                            border
                            border-[#302B80]/20
                            bg-white
                            px-4
                            py-3
                            text-xs
                            font-bold
                            text-[#302B80]
                            transition
                            hover:border-[#302B80]
                            hover:bg-[#302B80]/5
                          "
                        >
                          <Mail size={15} />
                          {t.escribir}
                        </a>
                      )}

                    </div>
                  )}

                </div>

              </div>
            )}

          </div>

        </div>

        {/* ==================================================
            RED COMERCIAL
        ================================================== */}

        <div className="mt-28">

          <div className="max-w-3xl">

            <div className="mb-5 flex items-center gap-3">

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
                {t.comercialEyebrow}
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
              {t.comercial}
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
              {t.representantes}
            </p>

          </div>

          {/* ==================================================
              ERROR REPRESENTANTES
          ================================================== */}

          {errorRepresentantes && (
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

              <div className="flex items-center gap-3">

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
              LOADING REPRESENTANTES
          ================================================== */}

          {cargandoRepresentantes ? (

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
                TARJETAS REPRESENTANTES
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

              {representantesColombia.map(
                (representante) => (

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

                    <div
                      className="
                        h-1.5
                        w-full
                        bg-[#302B80]
                      "
                    />

                    <div className="p-6">

                      {/* PERFIL */}

                      <div
                        className="
                          flex
                          items-start
                          gap-4
                        "
                      >

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
                            bg-[#302B80]
                            text-white
                            shadow-md
                          "
                        >

                          <UserRound
                            size={25}
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

                          <p
                            className="
                              mt-1.5
                              text-xs
                              font-semibold
                              leading-5
                              text-[#302B80]
                            "
                          >
                            {
                              representante.cargo
                            }
                          </p>

                        </div>

                      </div>

                      {/* COBERTURA */}

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

                          {(representante.zonas ||
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

                      {/* CONTACTO */}

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

                )
              )}

            </div>

          )}

        </div>

      </div>

      {/* ======================================================
          ESTILOS LEAFLET
      ====================================================== */}

      <style>{`

        .penagos-marker-wrapper {
          background: transparent !important;
          border: none !important;
        }

        .penagos-marker {
          position: relative;
          width: 44px;
          height: 54px;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          filter: drop-shadow(
            0 5px 5px rgba(0,0,0,0.22)
          );
          transition: transform 0.2s ease;
        }

        .penagos-marker-inner {
          width: 40px;
          height: 40px;
          margin-top: 1px;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          background: #302B80;
          border: 3px solid white;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow:
            0 3px 10px
            rgba(48,43,128,0.30);
        }

        .penagos-marker-inner svg {
          transform: rotate(45deg);
        }

        .penagos-marker.selected
        .penagos-marker-inner {
          background: #211D62;
          transform:
            rotate(-45deg)
            scale(1.12);
        }

        .leaflet-popup-content-wrapper {
          border-radius: 14px !important;
          box-shadow:
            0 15px 40px
            rgba(48,43,128,0.20) !important;
        }

        .leaflet-popup-content {
          margin: 14px !important;
        }

        .leaflet-popup-tip {
          box-shadow:
            0 3px 5px
            rgba(0,0,0,0.08);
        }

        .leaflet-control-zoom {
          border: none !important;
          box-shadow:
            0 8px 25px
            rgba(48,43,128,0.18) !important;
        }

        .leaflet-control-zoom a {
          width: 38px !important;
          height: 38px !important;
          line-height: 38px !important;
          color: #302B80 !important;
          font-weight: 700 !important;
          border: none !important;
        }

        .leaflet-control-zoom a:hover {
          background: #F0EFF8 !important;
          color: #302B80 !important;
        }

        .leaflet-control-attribution {
          background:
            rgba(255,255,255,0.85) !important;
          border-radius:
            8px 0 0 0 !important;
          padding:
            3px 7px !important;
        }

      `}</style>

    </section>
  );
};

export default InfoContacto;
