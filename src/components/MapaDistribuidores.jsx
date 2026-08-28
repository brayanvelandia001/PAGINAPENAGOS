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

import ReactCountryFlag from "react-country-flag";

import {
  MapPin,
  Phone,
  Mail,
  UserRound,
  Building2,
  Globe2,
  X,
  Loader2,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  Check,
} from "lucide-react";

import "leaflet/dist/leaflet.css";

// ============================================================
// CONFIGURACIÓN API
// ============================================================

const API_BASE =
  "https://penagos.com/wp-json/penagos/v1";

const API_DISTRIBUIDORES =
  `${API_BASE}/distribuidores`;

// ============================================================
// COLOR PENAGOS
// ============================================================

const PENAGOS_BLUE = "#302B80";

// ============================================================
// CÓDIGOS ISO DE PAÍSES
// ============================================================

const paisesISO = {
  Colombia: "CO",

  "Costa Rica": "CR",

  Panamá: "PA",
  Panama: "PA",

  México: "MX",
  Mexico: "MX",

  Guatemala: "GT",

  Honduras: "HN",

  "El Salvador": "SV",

  Nicaragua: "NI",

  Belice: "BZ",

  "Estados Unidos": "US",
  "United States": "US",

  Canadá: "CA",
  Canada: "CA",

  Ecuador: "EC",

  Perú: "PE",
  Peru: "PE",

  Bolivia: "BO",

  Chile: "CL",

  Argentina: "AR",

  Brasil: "BR",
  Brazil: "BR",

  Paraguay: "PY",

  Uruguay: "UY",

  Venezuela: "VE",

  "República Dominicana": "DO",
  "Republica Dominicana": "DO",

  "Puerto Rico": "PR",

  Cuba: "CU",

  Jamaica: "JM",

  Haití: "HT",
  Haiti: "HT",

  España: "ES",
  Spain: "ES",

  Portugal: "PT",

  Francia: "FR",
  France: "FR",

  Italia: "IT",
  Italy: "IT",

  Alemania: "DE",
  Germany: "DE",

  "Reino Unido": "GB",
  "United Kingdom": "GB",

  "Países Bajos": "NL",
  Netherlands: "NL",

  Australia: "AU",

  "Nueva Zelanda": "NZ",
  "New Zealand": "NZ",

  India: "IN",

  China: "CN",

  Japón: "JP",
  Japan: "JP",

  "Corea del Sur": "KR",
  "South Korea": "KR",

  "Sudáfrica": "ZA",
  "South Africa": "ZA",

  Etiopía: "ET",
  Ethiopia: "ET",

  Uganda: "UG",

  Tanzania: "TZ",

  Ruanda: "RW",
  Rwanda: "RW",

  Kenia: "KE",
  Kenya: "KE",

  Nigeria: "NG",

  Ghana: "GH",

  Marruecos: "MA",
  Morocco: "MA",

  Egipto: "EG",
  Egypt: "EG",

  "Arabia Saudita": "SA",
  "Saudi Arabia": "SA",

  "Emiratos Árabes Unidos": "AE",
  "United Arab Emirates": "AE",

  Israel: "IL",

  Turquía: "TR",
  Turkey: "TR",

  Tailandia: "TH",
  Thailand: "TH",

  Indonesia: "ID",

  Vietnam: "VN",
  "Viet Nam": "VN",

  Filipinas: "PH",
  Philippines: "PH",

  Malasia: "MY",
  Malaysia: "MY",

  Singapur: "SG",
  Singapore: "SG",

  Taiwán: "TW",
  Taiwan: "TW",

  "Hong Kong": "HK",

  Rusia: "RU",
  Russia: "RU",

  Ucrania: "UA",
  Ukraine: "UA",

  Polonia: "PL",
  Poland: "PL",

  "República Checa": "CZ",
  "Czech Republic": "CZ",

  Rumania: "RO",
  Romania: "RO",

  Grecia: "GR",
  Greece: "GR",

  Suiza: "CH",
  Switzerland: "CH",

  Austria: "AT",

  Bélgica: "BE",
  Belgium: "BE",

  Suecia: "SE",
  Sweden: "SE",

  Noruega: "NO",
  Norway: "NO",

  Dinamarca: "DK",
  Denmark: "DK",

  Finlandia: "FI",
  Finland: "FI",

  Irlanda: "IE",
  Ireland: "IE",

  Islandia: "IS",
  Iceland: "IS",

  Guyana: "GY",

  Surinam: "SR",

  "Trinidad y Tobago": "TT",

  Bahamas: "BS",

  Barbados: "BB",

  Granada: "GD",

  "Santa Lucía": "LC",

  Dominica: "DM",

  "San Vicente y las Granadinas": "VC",

  "Antigua y Barbuda": "AG",
};

// ============================================================
// NOMBRES DE PAÍSES EN INGLÉS
// ============================================================

const paisesEN = {
  Colombia: "Colombia",

  "Costa Rica": "Costa Rica",

  Panamá: "Panama",
  Panama: "Panama",

  México: "Mexico",
  Mexico: "Mexico",

  Guatemala: "Guatemala",

  Honduras: "Honduras",

  "El Salvador": "El Salvador",

  Nicaragua: "Nicaragua",

  Belice: "Belize",

  "Estados Unidos": "United States",
  "United States": "United States",

  Canadá: "Canada",
  Canada: "Canada",

  Ecuador: "Ecuador",

  Perú: "Peru",
  Peru: "Peru",

  Bolivia: "Bolivia",

  Chile: "Chile",

  Argentina: "Argentina",

  Brasil: "Brazil",
  Brazil: "Brazil",

  Paraguay: "Paraguay",

  Uruguay: "Uruguay",

  Venezuela: "Venezuela",

  "República Dominicana": "Dominican Republic",
  "Republica Dominicana": "Dominican Republic",

  "Puerto Rico": "Puerto Rico",

  Cuba: "Cuba",

  Jamaica: "Jamaica",

  Haití: "Haiti",
  Haiti: "Haiti",

  España: "Spain",
  Spain: "Spain",

  Portugal: "Portugal",

  Francia: "France",
  France: "France",

  Italia: "Italy",
  Italy: "Italy",

  Alemania: "Germany",
  Germany: "Germany",

  "Reino Unido": "United Kingdom",
  "United Kingdom": "United Kingdom",

  "Países Bajos": "Netherlands",
  Netherlands: "Netherlands",

  Australia: "Australia",

  "Nueva Zelanda": "New Zealand",
  "New Zealand": "New Zealand",

  India: "India",

  China: "China",

  Japón: "Japan",
  Japan: "Japan",

  "Corea del Sur": "South Korea",
  "South Korea": "South Korea",

  "Sudáfrica": "South Africa",
  "South Africa": "South Africa",

  Etiopía: "Ethiopia",
  Ethiopia: "Ethiopia",

  Uganda: "Uganda",

  Tanzania: "Tanzania",

  Ruanda: "Rwanda",
  Rwanda: "Rwanda",

  Kenia: "Kenya",
  Kenya: "Kenya",

  Nigeria: "Nigeria",

  Ghana: "Ghana",

  Marruecos: "Morocco",
  Morocco: "Morocco",

  Egipto: "Egypt",
  Egypt: "Egypt",

  "Arabia Saudita": "Saudi Arabia",
  "Saudi Arabia": "Saudi Arabia",

  "Emiratos Árabes Unidos": "United Arab Emirates",
  "United Arab Emirates": "United Arab Emirates",

  Israel: "Israel",

  Turquía: "Turkey",
  Turkey: "Turkey",

  Tailandia: "Thailand",
  Thailand: "Thailand",

  Indonesia: "Indonesia",

  Vietnam: "Vietnam",
  "Viet Nam": "Vietnam",

  Filipinas: "Philippines",
  Philippines: "Philippines",

  Malasia: "Malaysia",
  Malaysia: "Malaysia",

  Singapur: "Singapore",
  Singapore: "Singapore",

  Taiwán: "Taiwan",
  Taiwan: "Taiwan",

  "Hong Kong": "Hong Kong",

  Rusia: "Russia",
  Russia: "Russia",

  Ucrania: "Ukraine",
  Ukraine: "Ukraine",

  Polonia: "Poland",
  Poland: "Poland",

  "República Checa": "Czech Republic",
  "Czech Republic": "Czech Republic",

  Rumania: "Romania",
  Romania: "Romania",

  Grecia: "Greece",
  Greece: "Greece",

  Suiza: "Switzerland",
  Switzerland: "Switzerland",

  Austria: "Austria",

  Bélgica: "Belgium",
  Belgium: "Belgium",

  Suecia: "Sweden",
  Sweden: "Sweden",

  Noruega: "Norway",
  Norway: "Norway",

  Dinamarca: "Denmark",
  Denmark: "Denmark",

  Finlandia: "Finland",
  Finland: "Finland",

  Irlanda: "Ireland",
  Ireland: "Ireland",

  Islandia: "Iceland",
  Iceland: "Iceland",

  Guyana: "Guyana",

  Surinam: "Suriname",

  "Trinidad y Tobago": "Trinidad and Tobago",

  Bahamas: "Bahamas",

  Barbados: "Barbados",

  Granada: "Grenada",

  "Santa Lucía": "Saint Lucia",

  Dominica: "Dominica",

  "San Vicente y las Granadinas":
    "Saint Vincent and the Grenadines",

  "Antigua y Barbuda":
    "Antigua and Barbuda",
};

// ============================================================
// OBTENER NOMBRE DEL PAÍS SEGÚN IDIOMA
// ============================================================

const obtenerNombrePais = (
  pais,
  isEnglish
) => {

  if (!pais) {
    return "";
  }

  const nombre =
    String(pais).trim();

  if (!isEnglish) {
    return nombre;
  }

  return (
    paisesEN[nombre] ||
    paisesEN[
      Object.keys(paisesEN).find(
        (key) =>
          key.toLowerCase() ===
          nombre.toLowerCase()
      )
    ] ||
    nombre
  );
};

// ============================================================
// OBTENER CÓDIGO ISO
// ============================================================

const obtenerCodigoPais = (pais) => {

  if (!pais) {
    return null;
  }

  const nombre =
    String(pais).trim();

  if (paisesISO[nombre]) {
    return paisesISO[nombre];
  }

  const encontrado =
    Object.keys(paisesISO).find(
      (key) =>
        key.toLowerCase() ===
        nombre.toLowerCase()
    );

  return encontrado
    ? paisesISO[encontrado]
    : null;
};

// ============================================================
// COMPONENTE BANDERA
// ============================================================

const BanderaPais = ({
  pais,
  size = "1.35em",
  className = "",
}) => {

  const codigo =
    obtenerCodigoPais(pais);

  if (!codigo) {

    return (
      <span
        className={`inline-flex items-center justify-center ${className}`}
        style={{
          fontSize: size,
        }}
      >
        🌎
      </span>
    );
  }

  return (
    <ReactCountryFlag
      countryCode={codigo}
      svg
      style={{
        width: size,
        height: size,
        objectFit: "cover",
        borderRadius: "2px",
        display: "inline-block",
      }}
      className={className}
      title={pais}
      aria-label={pais}
    />
  );
};

// ============================================================
// ICONO PERSONALIZADO PENAGOS
// ============================================================

const crearIconoPenagos = (
  seleccionado = false
) => {

  return L.divIcon({

    className:
      "penagos-marker-wrapper",

    html: `
      <div class="penagos-marker ${
        seleccionado
          ? "selected"
          : ""
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

            <circle
              cx="12"
              cy="10"
              r="2.5"
            />

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
// MOVER MAPA
// ============================================================

const MoverMapa = ({
  paisSeleccionado,
  distribuidores,
  distribuidorSeleccionado,
}) => {

  const map = useMap();

  useEffect(() => {

    if (
      distribuidorSeleccionado &&
      Array.isArray(
        distribuidorSeleccionado.coordenadas
      ) &&
      distribuidorSeleccionado
        .coordenadas.length === 2
    ) {

      const [
        lat,
        lng,
      ] =
        distribuidorSeleccionado.coordenadas;

      map.flyTo(
        [lat, lng],
        14,
        {
          duration: 1.2,
        }
      );

      return;
    }

    let distribuidoresMapa =
      distribuidores.filter(
        (item) =>
          Array.isArray(
            item.coordenadas
          ) &&
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

    if (
      distribuidoresMapa.length === 0
    ) {
      return;
    }

    if (
      distribuidoresMapa.length === 1
    ) {

      const [
        lat,
        lng,
      ] =
        distribuidoresMapa[0]
          .coordenadas;

      map.flyTo(
        [lat, lng],
        10,
        {
          duration: 1.2,
        }
      );

      return;
    }

    const bounds =
      L.latLngBounds(
        distribuidoresMapa.map(
          (item) =>
            item.coordenadas
        )
      );

    let distanciaMaxima = 0;

    for (
      let i = 0;
      i < distribuidoresMapa.length;
      i++
    ) {

      for (
        let j = i + 1;
        j < distribuidoresMapa.length;
        j++
      ) {

        const puntoA =
          L.latLng(
            distribuidoresMapa[i]
              .coordenadas
          );

        const puntoB =
          L.latLng(
            distribuidoresMapa[j]
              .coordenadas
          );

        const distancia =
          puntoA.distanceTo(
            puntoB
          );

        distanciaMaxima =
          Math.max(
            distanciaMaxima,
            distancia
          );
      }
    }

    if (
      distanciaMaxima > 0 &&
      distanciaMaxima < 1000
    ) {

      map.flyTo(
        bounds.getCenter(),
        16,
        {
          duration: 1.2,
        }
      );

      return;
    }

    if (
      distanciaMaxima > 0 &&
      distanciaMaxima < 5000
    ) {

      map.flyTo(
        bounds.getCenter(),
        14,
        {
          duration: 1.2,
        }
      );

      return;
    }

    map.flyToBounds(
      bounds,
      {
        padding: [
          70,
          70,
        ],
        maxZoom: 10,
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

const MapaDistribuidores = ({
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
    cargando,
    setCargando,
  ] = useState(true);

  const [
    error,
    setError,
  ] = useState(false);

  const [
    paisSeleccionado,
    setPaisSeleccionado,
  ] = useState("Todos");

  const [
    distribuidorSeleccionado,
    setDistribuidorSeleccionado,
  ] = useState(null);

  const [
    listaAbierta,
    setListaAbierta,
  ] = useState(false);

  const [
    comboAbierto,
    setComboAbierto,
  ] = useState(false);

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

      llamar:
        "Llamar",

      escribir:
        "Enviar correo",

      cerrar:
        "Cerrar",

      cargando:
        "Cargando información...",

      error:
        "No fue posible cargar la información.",

      reintentar:
        "Reintentar",

      seleccionar:
        "Seleccionar distribuidor",

      verLista:
        "Ver distribuidores",

      ocultarLista:
        "Ocultar distribuidores",

      sinDistribuidores:
        "No hay distribuidores disponibles.",
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

      llamar:
        "Call",

      escribir:
        "Send email",

      cerrar:
        "Close",

      cargando:
        "Loading information...",

      error:
        "The information could not be loaded.",

      reintentar:
        "Retry",

      seleccionar:
        "Select distributor",

      verLista:
        "View distributors",

      ocultarLista:
        "Hide distributors",

      sinDistribuidores:
        "No distributors available.",
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

        setCargando(true);
        setError(false);

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

      } catch (err) {

        console.error(
          "Error cargando distribuidores:",
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

    cargarDistribuidores();

  }, []);

  // ==========================================================
  // PAÍSES
  // ==========================================================

  const paises =
    useMemo(() => {

      const lista =
        distribuidores
          .map(
            (item) =>
              item.pais
          )
          .filter(Boolean);

      return [
        "Todos",
        ...new Set(lista),
      ];

    }, [
      distribuidores,
    ]);

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

      setComboAbierto(
        false
      );

      setListaAbierta(
        true
      );
    };

  // ==========================================================
  // SELECCIONAR DISTRIBUIDOR
  // ==========================================================

  const seleccionarDistribuidor =
    (distribuidor) => {

      setDistribuidorSeleccionado(
        distribuidor
      );

      if (
        distribuidor.pais
      ) {

        setPaisSeleccionado(
          distribuidor.pais
        );
      }

      setListaAbierta(
        false
      );
    };

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

      {/* DECORACIÓN */}

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

        {/* HEADER */}

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

        {/* FILTRO */}

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
                {cargando
                  ? t.cargando
                  : `${distribuidoresFiltrados.length} ${t.distribuidores}`}
              </p>

            </div>

          </div>

          {/* ==================================================
              COMBO
          ================================================== */}

          <div
            className="
              relative
              w-full
              md:w-80
            "
          >

            <button
              type="button"
              disabled={cargando}
              onClick={() =>
                setComboAbierto(
                  !comboAbierto
                )
              }
              className="
                flex
                w-full
                cursor-pointer
                items-center
                justify-between
                gap-3
                rounded-xl
                border
                border-gray-200
                bg-white
                px-4
                py-3.5
                text-left
                shadow-sm
                outline-none
                transition
                hover:border-[#302B80]/40
                focus:border-[#302B80]
                focus:ring-4
                focus:ring-[#302B80]/10
                disabled:cursor-not-allowed
                disabled:bg-gray-100
              "
            >

              <div
                className="
                  flex
                  min-w-0
                  items-center
                  gap-3
                "
              >

                <BanderaPais
                  pais={
                    paisSeleccionado ===
                    "Todos"
                      ? null
                      : paisSeleccionado
                  }
                  size="1.5em"
                />

                <span
                  className="
                    truncate
                    text-sm
                    font-semibold
                    text-[#302B80]
                  "
                >
                  {paisSeleccionado ===
                  "Todos"
                    ? t.todos
                    : obtenerNombrePais(
                        paisSeleccionado,
                        isEnglish
                      )}
                </span>

              </div>

              {comboAbierto ? (
                <ChevronUp
                  size={18}
                  className="shrink-0 text-[#302B80]"
                />
              ) : (
                <ChevronDown
                  size={18}
                  className="shrink-0 text-[#302B80]"
                />
              )}

            </button>

            {/* LISTA DESPLEGABLE */}

            {comboAbierto && (

              <div
                className="
                  absolute
                  left-0
                  right-0
                  top-full
                  z-[2000]
                  mt-2
                  max-h-[320px]
                  overflow-y-auto
                  rounded-xl
                  border
                  border-gray-200
                  bg-white
                  p-2
                  shadow-[0_15px_40px_rgba(48,43,128,0.18)]
                "
              >

                {paises.map(
                  (pais) => {

                    const seleccionado =
                      paisSeleccionado ===
                      pais;

                    return (

                      <button
                        type="button"
                        key={pais}
                        onClick={() =>
                          cambiarPais(
                            pais
                          )
                        }
                        className={`
                          flex
                          w-full
                          cursor-pointer
                          items-center
                          gap-3
                          rounded-lg
                          px-3
                          py-2.5
                          text-left
                          transition
                          ${
                            seleccionado
                              ? "bg-[#302B80]/10"
                              : "hover:bg-[#F7F7FB]"
                          }
                        `}
                      >

                        {/* BANDERA */}

                        <span
                          className="
                            flex
                            h-7
                            w-8
                            shrink-0
                            items-center
                            justify-center
                            overflow-hidden
                            rounded
                            bg-gray-100
                          "
                        >

                          {pais ===
                          "Todos" ? (

                            <span className="text-lg">
                              🌎
                            </span>

                          ) : (

                            <BanderaPais
                              pais={pais}
                              size="1.35em"
                            />

                          )}

                        </span>

                        {/* NOMBRE TRADUCIDO */}

                        <span
                          className={`
                            min-w-0
                            flex-1
                            truncate
                            text-sm
                            ${
                              seleccionado
                                ? "font-bold text-[#302B80]"
                                : "font-medium text-gray-700"
                            }
                          `}
                        >

                          {pais ===
                          "Todos"
                            ? t.todos
                            : obtenerNombrePais(
                                pais,
                                isEnglish
                              )}

                        </span>

                        {/* CHECK */}

                        {seleccionado && (

                          <Check
                            size={17}
                            className="
                              shrink-0
                              text-[#302B80]
                            "
                          />

                        )}

                      </button>

                    );
                  }
                )}

              </div>
            )}

          </div>

        </div>

        {/* ERROR */}

        {error && (

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

            <div
              className="
                flex
                items-center
                gap-3
              "
            >

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

        {/* MAPA */}

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

            {cargando ? (

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

                <div
                  className="
                    flex
                    flex-col
                    items-center
                    gap-4
                  "
                >

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
                maxZoom={18}
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

                {/* MARKERS */}

                {distribuidoresFiltrados.map(
                  (distribuidor) => {

                    if (
                      !Array.isArray(
                        distribuidor.coordenadas
                      ) ||
                      distribuidor.coordenadas
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

                          <div
                            className="
                              min-w-[230px]
                            "
                          >

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
                                    ? `${distribuidor.ciudad}, ${obtenerNombrePais(
                                        distribuidor.pais,
                                        isEnglish
                                      )}`
                                    : obtenerNombrePais(
                                        distribuidor.pais,
                                        isEnglish
                                      )}
                                </p>

                              </div>

                            </div>

                            {distribuidor.contacto && (

                              <p
                                className="
                                  text-xs
                                  text-gray-600
                                "
                              >

                                <strong>
                                  {t.contacto}:
                                </strong>{" "}

                                {
                                  distribuidor.contacto
                                }

                              </p>

                            )}

                            {distribuidor.telefono && (

                              <p
                                className="
                                  mt-1
                                  text-xs
                                  text-gray-600
                                "
                              >

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
                PANEL DE DISTRIBUIDORES
            ================================================== */}

            {!cargando && (

              <div
                className="
                  absolute
                  left-5
                  top-5
                  z-[900]
                  w-[calc(100%-40px)]
                  sm:w-[360px]
                "
              >

                <div
                  className="
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/70
                    bg-white/95
                    shadow-xl
                    backdrop-blur-md
                  "
                >

                  <button
                    type="button"
                    onClick={() =>
                      setListaAbierta(
                        !listaAbierta
                      )
                    }
                    className="
                      flex
                      w-full
                      cursor-pointer
                      items-center
                      justify-between
                      gap-3
                      px-4
                      py-3
                      text-left
                      transition
                      hover:bg-[#F7F7FB]
                    "
                  >

                    <div
                      className="
                        flex
                        items-center
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
                          overflow-hidden
                          rounded-full
                          bg-[#302B80]
                        "
                      >

                        {paisSeleccionado ===
                        "Todos" ? (

                          <Globe2
                            size={18}
                            className="text-white"
                          />

                        ) : (

                          <BanderaPais
                            pais={
                              paisSeleccionado
                            }
                            size="100%"
                          />

                        )}

                      </div>

                      <div>

                        <p
                          className="
                            text-xs
                            font-semibold
                            text-gray-500
                          "
                        >

                          {paisSeleccionado ===
                          "Todos"
                            ? t.distribuidores
                            : obtenerNombrePais(
                                paisSeleccionado,
                                isEnglish
                              )}

                        </p>

                        <p
                          className="
                            mt-0.5
                            text-base
                            font-bold
                            leading-none
                            text-[#302B80]
                          "
                        >

                          {
                            distribuidoresFiltrados.length
                          }{" "}

                          <span
                            className="
                              text-xs
                              font-semibold
                              text-gray-500
                            "
                          >
                            {t.distribuidores}
                          </span>

                        </p>

                      </div>

                    </div>

                    <div
                      className="
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        text-[#302B80]
                        transition
                        hover:bg-[#302B80]/10
                      "
                    >

                      {listaAbierta ? (
                        <ChevronUp
                          size={18}
                        />
                      ) : (
                        <ChevronDown
                          size={18}
                        />
                      )}

                    </div>

                  </button>

                  {/* LISTA */}

                  {listaAbierta && (

                    <div
                      className="
                        max-h-[330px]
                        overflow-y-auto
                        border-t
                        border-gray-100
                        bg-white
                      "
                    >

                      {distribuidoresFiltrados.length ===
                      0 ? (

                        <div
                          className="
                            px-4
                            py-5
                            text-center
                            text-xs
                            text-gray-500
                          "
                        >
                          {
                            t.sinDistribuidores
                          }
                        </div>

                      ) : (

                        <div className="p-2">

                          {distribuidoresFiltrados.map(
                            (
                              distribuidor
                            ) => {

                              const seleccionado =
                                distribuidorSeleccionado?.id ===
                                distribuidor.id;

                              return (

                                <button
                                  type="button"
                                  key={
                                    distribuidor.id
                                  }
                                  onClick={() =>
                                    seleccionarDistribuidor(
                                      distribuidor
                                    )
                                  }
                                  className={`
                                    group
                                    flex
                                    w-full
                                    cursor-pointer
                                    items-center
                                    gap-3
                                    rounded-xl
                                    p-3
                                    text-left
                                    transition
                                    ${
                                      seleccionado
                                        ? "bg-[#302B80]/10"
                                        : "hover:bg-[#F7F7FB]"
                                    }
                                  `}
                                >

                                  <div
                                    className={`
                                      flex
                                      h-10
                                      w-10
                                      shrink-0
                                      items-center
                                      justify-center
                                      rounded-xl
                                      transition
                                      ${
                                        seleccionado
                                          ? "bg-[#302B80] text-white"
                                          : "bg-[#302B80]/10 text-[#302B80]"
                                      }
                                    `}
                                  >

                                    <Building2
                                      size={18}
                                    />

                                  </div>

                                  <div
                                    className="
                                      min-w-0
                                      flex-1
                                    "
                                  >

                                    <p
                                      className={`
                                        truncate
                                        text-sm
                                        font-bold
                                        ${
                                          seleccionado
                                            ? "text-[#302B80]"
                                            : "text-gray-800"
                                        }
                                      `}
                                    >
                                      {
                                        distribuidor.nombre
                                      }
                                    </p>

                                    <p
                                      className="
                                        mt-0.5
                                        truncate
                                        text-xs
                                        text-gray-500
                                      "
                                    >

                                      {distribuidor.ciudad
                                        ? `${distribuidor.ciudad}, ${obtenerNombrePais(
                                            distribuidor.pais,
                                            isEnglish
                                          )}`
                                        : obtenerNombrePais(
                                            distribuidor.pais,
                                            isEnglish
                                          )}

                                    </p>

                                  </div>

                                  <div
                                    className="
                                      shrink-0
                                      text-xs
                                      font-bold
                                      text-[#302B80]
                                      opacity-0
                                      transition
                                      group-hover:opacity-100
                                    "
                                  >
                                    →
                                  </div>

                                </button>

                              );

                            }
                          )}

                        </div>

                      )}

                    </div>

                  )}

                </div>

              </div>

            )}

            {/* ==================================================
                CARD DISTRIBUIDOR SELECCIONADO
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
                        cursor-pointer
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
                          overflow-hidden
                          rounded-xl
                          bg-white/15
                          p-1
                        "
                      >

                        <BanderaPais
                          pais={
                            distribuidorSeleccionado.pais
                          }
                          size="100%"
                        />

                      </div>

                      <div>

                        <p
                          className="
                            flex
                            items-center
                            gap-2
                            text-[10px]
                            font-bold
                            uppercase
                            tracking-[0.2em]
                            text-white/70
                          "
                        >

                          <BanderaPais
                            pais={
                              distribuidorSeleccionado.pais
                            }
                            size="1.1em"
                          />

                          {
                            obtenerNombrePais(
                              distribuidorSeleccionado.pais,
                              isEnglish
                            )
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

                  <div
                    className="
                      space-y-4
                      p-5
                    "
                  >

                    {/* CONTACTO */}

                    {distribuidorSeleccionado.contacto && (

                      <div
                        className="
                          flex
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
                            bg-[#302B80]/10
                            text-[#302B80]
                          "
                        >

                          <UserRound
                            size={17}
                          />

                        </div>

                        <div
                          className="
                            min-w-0
                          "
                        >

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

                      <div
                        className="
                          flex
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
                            bg-[#302B80]/10
                            text-[#302B80]
                          "
                        >

                          <MapPin
                            size={17}
                          />

                        </div>

                        <div
                          className="
                            min-w-0
                          "
                        >

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

                      <div
                        className="
                          flex
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
                            bg-[#302B80]/10
                            text-[#302B80]
                          "
                        >

                          <Phone
                            size={17}
                          />

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
                              cursor-pointer
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

                      <div
                        className="
                          flex
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
                            bg-[#302B80]/10
                            text-[#302B80]
                          "
                        >

                          <Mail
                            size={17}
                          />

                        </div>

                        <div
                          className="
                            min-w-0
                          "
                        >

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
                              cursor-pointer
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
                            cursor-pointer
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
                            cursor-pointer
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

          transition:
            transform 0.2s ease;
        }

        .penagos-marker-inner {
          width: 40px;
          height: 40px;

          margin-top: 1px;

          border-radius:
            50% 50% 50% 0;

          transform:
            rotate(-45deg);

          background:
            ${PENAGOS_BLUE};

          border:
            3px solid white;

          display:
            flex;

          align-items:
            center;

          justify-content:
            center;

          box-shadow:
            0 3px 10px
            rgba(48,43,128,0.30);
        }

        .penagos-marker-inner svg {
          transform:
            rotate(45deg);
        }

        .penagos-marker.selected
        .penagos-marker-inner {

          background:
            #211D62;

          transform:
            rotate(-45deg)
            scale(1.12);
        }

        .leaflet-popup-content-wrapper {

          border-radius:
            14px !important;

          box-shadow:
            0 15px 40px
            rgba(48,43,128,0.20) !important;
        }

        .leaflet-popup-content {

          margin:
            14px !important;
        }

        .leaflet-popup-tip {

          box-shadow:
            0 3px 5px
            rgba(0,0,0,0.08);
        }

        .leaflet-control-zoom {

          border:
            none !important;

          box-shadow:
            0 8px 25px
            rgba(48,43,128,0.18) !important;
        }

        .leaflet-control-zoom a {

          width:
            38px !important;

          height:
            38px !important;

          line-height:
            38px !important;

          color:
            ${PENAGOS_BLUE} !important;

          font-weight:
            700 !important;

          border:
            none !important;
        }

        .leaflet-control-zoom a:hover {

          background:
            #F0EFF8 !important;

          color:
            ${PENAGOS_BLUE} !important;
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

export default MapaDistribuidores;
