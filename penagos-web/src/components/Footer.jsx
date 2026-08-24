import {
  Link
} from "react-router-dom";


// ============================================================
// ICONOS
// ============================================================

function LocationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-3.5 w-3.5"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z"
      />

      <circle
        cx="12"
        cy="10"
        r="2.2"
      />
    </svg>
  );
}


function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-3.5 w-3.5"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
      />

      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4 7 8 6 8-6"
      />
    </svg>
  );
}


function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-3.5 w-3.5"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.5 4.5 8 3l2.5 5-2 1.5a15.8 15.8 0 0 0 6 6l1.5-2 5 2.5-1.5 2.5c-.7 1.2-2.1 1.8-3.5 1.5C9.8 18.4 5.6 14.2 4 8c-.3-1.4.3-2.8 1.5-3.5Z"
      />
    </svg>
  );
}


function ChevronIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="
        h-3
        w-3
        transition-transform
        duration-200
        group-hover:translate-x-0.5
      "
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m9 6 6 6-6 6"
      />
    </svg>
  );
}


function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-3.5 w-3.5"
    >
      <path
        d="
          M14 8h3V4h-3c-3.3 0-5 1.9-5 5v3H6v4h3v5h4v-5h3l1-4h-4V9
          c0-.7.3-1 1-1Z
        "
      />
    </svg>
  );
}


function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-3.5 w-3.5"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
      />

      <circle
        cx="12"
        cy="12"
        r="4"
      />

      <circle
        cx="17.5"
        cy="6.5"
        r="1"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}


function XIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-3.5 w-3.5"
    >
      <path
        d="M18.9 3H22l-6.8 7.8L23 21h-6.1l-4.8-6.3L6.6 21H3.5l7.2-8.3L3 3h6.3l4.4 5.8L18.9 3Zm-1.1 15.8h1.7L8.3 5H6.5l11.3 13.8Z"
      />
    </svg>
  );
}


function YoutubeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-3.5 w-3.5"
    >
      <path
        d="
          M21.6 7.2a2.9 2.9 0 0 0-2-2C17.8 4.7 12 4.7 12 4.7
          s-5.8 0-7.6.5a2.9 2.9 0 0 0-2 2A30 30 0 0 0 1.9 12
          a30 30 0 0 0 .5 4.8 2.9 2.9 0 0 0 2 2c1.8.5 7.6.5 7.6.5
          s5.8 0 7.6-.5a2.9 2.9 0 0 0 2-2 30 30 0 0 0 .5-4.8
          30 30 0 0 0-.5-4.8ZM10 15.5v-7l6 3.5-6 3.5Z
        "
      />
    </svg>
  );
}


function LinkedinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-3.5 w-3.5"
    >
      <path
        d="
          M5.2 8.5H2V21h3.2V8.5ZM3.6 3A1.9 1.9 0 1 0 3.6 6.8
          1.9 1.9 0 0 0 3.6 3ZM21 13.9c0-3.8-2-5.6-4.8-5.6
          -2.2 0-3.1 1.2-3.7 2v-1.8H9.3V21h3.2v-6.2
          c0-1.6.3-3.1 2.2-3.1 1.8 0 1.8 1.7 1.8 3.2V21H21v-7.1Z
        "
      />
    </svg>
  );
}


// ============================================================
// FOOTER
// ============================================================

function Footer() {

  const penagosLogo =
    "http://penagos.com/wp-content/uploads/2020/03/Logotipo-Penagos-Hermanos-PNG.png";

  const colombiaFlag =
    "http://penagos.com/wp-content/uploads/2020/02/Bandera-de-Colombia_Mesa-de-trabajo-1.jpg";

  const brasilFlag =
    "http://penagos.com/wp-content/uploads/2020/02/Bandera-brasil-penagos.png";

  const monteAlegreLogo =
    "http://penagos.com/wp-content/uploads/2020/04/logo1.png";

  const sgsLogo =
    "http://penagos.com/wp-content/uploads/2020/02/Logo-SGS-con-codigo-de-certificado.png";

  const bascLogo =
    "http://penagos.com/wp-content/uploads/2020/02/BaSc.png";


  return (

    <footer
      className="
        border-t
        border-slate-300
        bg-[#f3f3f3]
        text-slate-600
      "
    >

      <div
        className="
          mx-auto
          max-w-[1280px]
          px-5
          py-7
          lg:px-8
          lg:py-8
        "
      >

        <div
          className="
            grid
            grid-cols-1
            gap-8
            sm:grid-cols-2
            lg:grid-cols-[1.05fr_1.35fr_1.35fr_0.85fr]
            lg:gap-0
          "
        >


          {/* ========================================================
              COLUMNA 1
              PENAGOS HERMANOS
          ======================================================== */}

          <div
            className="
              lg:pr-7
            "
          >

            {/* LOGO PENAGOS + BANDERA COLOMBIA */}

            <Link
              to="/"
              className="
                inline-flex
                items-center
                gap-3
              "
            >

              <img
                src={penagosLogo}
                alt="Penagos Hermanos"
                className="
                  h-[42px]
                  w-[150px]
                  object-contain
                  object-left
                  transition
                  duration-300
                  hover:scale-[1.03]
                "
              />

              <img
                src={colombiaFlag}
                alt="Colombia"
                className="
                  h-[22px]
                  w-[34px]
                  rounded-sm
                  object-cover
                "
              />

            </Link>


            {/* LÍNEA DECORATIVA */}

            <div
              className="
                mt-2
                h-[2px]
                w-10
                rounded-full
                bg-gradient-to-r
                from-[#00a4e4]
                to-[#302b80]
              "
            />


            {/* DIRECCIÓN */}

            <div
              className="
                mt-4
                flex
                gap-2.5
              "
            >

              <span
                className="
                  mt-[1px]
                  flex
                  h-6
                  w-6
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#00a4e4]/10
                  text-[#00a4e4]
                "
              >
                <LocationIcon />
              </span>


              <p
                className="
                  text-[10px]
                  leading-[1.55]
                  text-slate-500
                "
              >
                Kilómetro 3 Vía Guatiguará
                <br />
                Frente a Tecnicol
                <br />
                Piedecuesta - Colombia
              </p>

            </div>


            {/* CORREO */}

            <div
              className="
                mt-2.5
                flex
                items-center
                gap-2.5
              "
            >

              <span
                className="
                  flex
                  h-6
                  w-6
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#00a4e4]/10
                  text-[#00a4e4]
                "
              >
                <MailIcon />
              </span>


              <a
                href="mailto:sales@penagos.com"
                className="
                  text-[10px]
                  text-slate-500
                  transition
                  duration-200
                  hover:text-[#007fc2]
                "
              >
                sales@penagos.com
              </a>

            </div>


            {/* REDES SOCIALES */}

            <div
              className="
                mt-4
                flex
                items-center
                gap-2
              "
            >

              <a
                href="#"
                aria-label="Facebook"
                className="
                  flex h-7 w-7 items-center justify-center
                  rounded-full border border-slate-300
                  bg-white text-[#00a4e4] shadow-sm
                  transition-all duration-200
                  hover:-translate-y-1
                  hover:border-[#00a4e4]
                  hover:bg-[#00a4e4]
                  hover:text-white
                "
              >
                <FacebookIcon />
              </a>


              <a
                href="#"
                aria-label="Instagram"
                className="
                  flex h-7 w-7 items-center justify-center
                  rounded-full border border-slate-300
                  bg-white text-[#00a4e4] shadow-sm
                  transition-all duration-200
                  hover:-translate-y-1
                  hover:border-[#00a4e4]
                  hover:bg-[#00a4e4]
                  hover:text-white
                "
              >
                <InstagramIcon />
              </a>


              <a
                href="#"
                aria-label="X"
                className="
                  flex h-7 w-7 items-center justify-center
                  rounded-full border border-slate-300
                  bg-white text-[#00a4e4] shadow-sm
                  transition-all duration-200
                  hover:-translate-y-1
                  hover:border-[#00a4e4]
                  hover:bg-[#00a4e4]
                  hover:text-white
                "
              >
                <XIcon />
              </a>


              <a
                href="#"
                aria-label="YouTube"
                className="
                  flex h-7 w-7 items-center justify-center
                  rounded-full border border-slate-300
                  bg-white text-[#00a4e4] shadow-sm
                  transition-all duration-200
                  hover:-translate-y-1
                  hover:border-[#00a4e4]
                  hover:bg-[#00a4e4]
                  hover:text-white
                "
              >
                <YoutubeIcon />
              </a>


              <a
                href="#"
                aria-label="LinkedIn"
                className="
                  flex h-7 w-7 items-center justify-center
                  rounded-full border border-slate-300
                  bg-white text-[#00a4e4] shadow-sm
                  transition-all duration-200
                  hover:-translate-y-1
                  hover:border-[#00a4e4]
                  hover:bg-[#00a4e4]
                  hover:text-white
                "
              >
                <LinkedinIcon />
              </a>

            </div>

          </div>



          {/* ========================================================
              COLUMNA 2
              SUCURSALES PENAGOS
          ======================================================== */}

          <div
            className="
              lg:border-l
              lg:border-slate-300
              lg:px-7
            "
          >

            {/* PENAGOS + COLOMBIA */}

            <div
              className="
                flex
                h-[42px]
                items-center
                gap-3
              "
            >

              <img
                src={penagosLogo}
                alt="Penagos"
                className="
                  h-[34px]
                  w-[105px]
                  object-contain
                  object-left
                "
              />

              <img
                src={colombiaFlag}
                alt="Colombia"
                className="
                  h-[18px]
                  w-[28px]
                  rounded-sm
                  object-cover
                "
              />

            </div>


            {/* QUINDÍO */}

            <div
              className="
                mt-4
                rounded-xl
                border
                border-slate-200
                bg-white/50
                px-3
                py-2.5
                transition
                duration-200
                hover:border-[#00a4e4]/30
                hover:bg-white
              "
            >

              <p
                className="
                  text-[10px]
                  font-bold
                  text-slate-700
                "
              >
                Sucursal Quindío
              </p>


              <div
                className="
                  mt-1.5
                  flex
                  gap-2
                "
              >

                <span
                  className="
                    mt-0.5
                    shrink-0
                    text-[#00a4e4]
                  "
                >
                  <LocationIcon />
                </span>

                <p
                  className="
                    text-[9px]
                    leading-[1.5]
                    text-slate-500
                  "
                >
                  Finca Kilómetro 13 Vía Armenia
                  <br />
                  a Quimbaya
                  <br />
                  Quimbaya - Colombia
                </p>

              </div>


              <a
                href="tel:+573184871233"
                className="
                  mt-1.5
                  flex
                  items-center
                  gap-1.5
                  text-[9px]
                  font-semibold
                  text-[#007fc2]
                  transition
                  hover:text-[#302b80]
                "
              >
                <PhoneIcon />
                +57 318 487 1233
              </a>

            </div>



            {/* HUILA */}

            <div
              className="
                mt-2.5
                rounded-xl
                border
                border-slate-200
                bg-white/50
                px-3
                py-2.5
                transition
                duration-200
                hover:border-[#00a4e4]/30
                hover:bg-white
              "
            >

              <p
                className="
                  text-[10px]
                  font-bold
                  text-slate-700
                "
              >
                Sucursal Huila
              </p>


              <div
                className="
                  mt-1.5
                  flex
                  gap-2
                "
              >

                <span
                  className="
                    mt-0.5
                    shrink-0
                    text-[#00a4e4]
                  "
                >
                  <LocationIcon />
                </span>

                <p
                  className="
                    text-[9px]
                    leading-[1.5]
                    text-slate-500
                  "
                >
                  Avenida Circunvalar # 9a - 26
                  <br />
                  Centro Logístico La Florida
                  <br />
                  Local 3
                </p>

              </div>


              <a
                href="tel:+573160170206"
                className="
                  mt-1.5
                  flex
                  items-center
                  gap-1.5
                  text-[9px]
                  font-semibold
                  text-[#007fc2]
                  transition
                  hover:text-[#302b80]
                "
              >
                <PhoneIcon />
                +57 316 017 0206
              </a>

            </div>

          </div>



          {/* ========================================================
              COLUMNA 3
              PENAGOS + MONTE ALEGRE + BRASIL
          ======================================================== */}

          <div
            className="
              lg:border-l
              lg:border-slate-300
              lg:px-7
            "
          >

            {/* CABECERA */}

            <div
              className="
                flex
                h-[42px]
                items-center
                gap-3
              "
            >

              {/* PENAGOS */}

              <img
                src={penagosLogo}
                alt="Penagos"
                className="
                  h-[34px]
                  w-[90px]
                  shrink-0
                  object-contain
                  object-left
                "
              />


              {/* MONTE ALEGRE */}

              <img
                src={monteAlegreLogo}
                alt="Monte Alegre"
                className="
                  h-[34px]
                  w-[100px]
                  shrink-0
                  object-contain
                "
              />


              {/* BRASIL */}

              <img
                src={brasilFlag}
                alt="Brasil"
                className="
                  h-[20px]
                  w-[30px]
                  shrink-0
                  rounded-sm
                  object-cover
                "
              />

            </div>


            {/* DIRECCIÓN */}

            <div
              className="
                mt-4
                flex
                gap-2
              "
            >

              <span
                className="
                  mt-0.5
                  shrink-0
                  text-[#00a4e4]
                "
              >
                <LocationIcon />
              </span>


              <p
                className="
                  text-[9px]
                  leading-[1.55]
                  text-slate-500
                "
              >
                Rua Rachid Elias Sobrinho, 290
                <br />
                Jd. Monte Alegre
                <br />
                Espírito Santo do Pinhal
                <br />
                SP CEP 13990-000
              </p>

            </div>


            {/* TELÉFONOS */}

            <div
              className="
                mt-2
                space-y-1
              "
            >

              <a
                href="tel:+551936515623"
                className="
                  flex
                  items-center
                  gap-1.5
                  text-[9px]
                  font-semibold
                  text-[#007fc2]
                  transition
                  hover:text-[#302b80]
                "
              >
                <PhoneIcon />
                +55 (19) 3651 5623
              </a>


              <a
                href="tel:+5535516524"
                className="
                  flex
                  items-center
                  gap-1.5
                  text-[9px]
                  font-semibold
                  text-[#007fc2]
                  transition
                  hover:text-[#302b80]
                "
              >
                <PhoneIcon />
                +55 (35) 516 524
              </a>

            </div>


            {/* CORREO */}

            <a
              href="mailto:contato@montealegre.com.br"
              className="
                mt-2
                flex
                items-center
                gap-1.5
                text-[9px]
                text-slate-500
                transition
                duration-200
                hover:text-[#007fc2]
              "
            >
              <MailIcon />
              contato@montealegre.com.br
            </a>


            {/* ====================================================
                CERTIFICACIONES REALES
            ==================================================== */}

            <div
              className="
                mt-5
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

                <span
                  className="
                    h-[2px]
                    w-5
                    rounded-full
                    bg-[#00a4e4]
                  "
                />

                <span
                  className="
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.14em]
                    text-slate-500
                  "
                >
                  Certificaciones
                </span>

              </div>


              <div
                className="
                  flex
                  items-center
                  gap-3
                "
              >

                {/* SGS */}

                <div
                  className="
                    flex
                    h-[48px]
                    flex-1
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-slate-200
                    bg-white
                    px-2
                    py-1.5
                    shadow-sm
                    transition
                    duration-200
                    hover:-translate-y-0.5
                    hover:shadow-md
                  "
                >

                  <img
                    src={sgsLogo}
                    alt="Certificación SGS"
                    className="
                      max-h-[38px]
                      max-w-[100px]
                      object-contain
                    "
                  />

                </div>


                {/* BaSc */}

                <div
                  className="
                    flex
                    h-[48px]
                    flex-1
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-slate-200
                    bg-white
                    px-2
                    py-1.5
                    shadow-sm
                    transition
                    duration-200
                    hover:-translate-y-0.5
                    hover:shadow-md
                  "
                >

                  <img
                    src={bascLogo}
                    alt="Certificación BaSc"
                    className="
                      max-h-[38px]
                      max-w-[100px]
                      object-contain
                    "
                  />

                </div>

              </div>

            </div>

          </div>



          {/* ========================================================
              COLUMNA 4
              ENLACES RÁPIDOS
          ======================================================== */}

          <div
            className="
              lg:border-l
              lg:border-slate-300
              lg:pl-7
            "
          >

            <h3
              className="
                text-[12px]
                font-semibold
                text-slate-700
              "
            >
              Enlaces Rápidos
            </h3>


            <div
              className="
                mt-3
                space-y-1
              "
            >

              <Link
                to="/distribuidores"
                className="
                  group
                  flex
                  items-center
                  gap-1.5
                  rounded-md
                  px-1
                  py-1
                  text-[9px]
                  text-slate-500
                  transition
                  duration-200
                  hover:translate-x-1
                  hover:bg-white
                  hover:text-[#007fc2]
                "
              >
                <span className="text-[#00a4e4]">
                  <ChevronIcon />
                </span>
                Distribuidores
              </Link>


              <Link
                to="/pqrs"
                className="
                  group
                  flex
                  items-center
                  gap-1.5
                  rounded-md
                  px-1
                  py-1
                  text-[9px]
                  text-slate-500
                  transition
                  duration-200
                  hover:translate-x-1
                  hover:bg-white
                  hover:text-[#007fc2]
                "
              >
                <span className="text-[#00a4e4]">
                  <ChevronIcon />
                </span>
                PQRS
              </Link>


              <Link
                to="/trabaja-con-nosotros"
                className="
                  group
                  flex
                  items-center
                  gap-1.5
                  rounded-md
                  px-1
                  py-1
                  text-[9px]
                  text-slate-500
                  transition
                  duration-200
                  hover:translate-x-1
                  hover:bg-white
                  hover:text-[#007fc2]
                "
              >
                <span className="text-[#00a4e4]">
                  <ChevronIcon />
                </span>
                Trabaja con nosotros
              </Link>


              <Link
                to="/historia"
                className="
                  group
                  flex
                  items-center
                  gap-1.5
                  rounded-md
                  px-1
                  py-1
                  text-[9px]
                  text-slate-500
                  transition
                  duration-200
                  hover:translate-x-1
                  hover:bg-white
                  hover:text-[#007fc2]
                "
              >
                <span className="text-[#00a4e4]">
                  <ChevronIcon />
                </span>
                Historia
              </Link>


              <Link
                to="/sagrilaft"
                className="
                  group
                  flex
                  items-center
                  gap-1.5
                  rounded-md
                  px-1
                  py-1
                  text-[9px]
                  text-slate-500
                  transition
                  duration-200
                  hover:translate-x-1
                  hover:bg-white
                  hover:text-[#007fc2]
                "
              >
                <span className="text-[#00a4e4]">
                  <ChevronIcon />
                </span>
                SAGRILAFT
              </Link>


              <Link
                to="/pte"
                className="
                  group
                  flex
                  items-center
                  gap-1.5
                  rounded-md
                  px-1
                  py-1
                  text-[9px]
                  text-slate-500
                  transition
                  duration-200
                  hover:translate-x-1
                  hover:bg-white
                  hover:text-[#007fc2]
                "
              >
                <span className="text-[#00a4e4]">
                  <ChevronIcon />
                </span>
                PTEE
              </Link>


              <Link
                to="/picadoras"
                className="
                  group
                  flex
                  items-center
                  gap-1.5
                  rounded-md
                  px-1
                  py-1
                  text-[9px]
                  text-slate-500
                  transition
                  duration-200
                  hover:translate-x-1
                  hover:bg-white
                  hover:text-[#007fc2]
                "
              >
                <span className="text-[#00a4e4]">
                  <ChevronIcon />
                </span>
                Picadoras
              </Link>


              <Link
                to="/despulpadoras"
                className="
                  group
                  flex
                  items-center
                  gap-1.5
                  rounded-md
                  px-1
                  py-1
                  text-[9px]
                  text-slate-500
                  transition
                  duration-200
                  hover:translate-x-1
                  hover:bg-white
                  hover:text-[#007fc2]
                "
              >
                <span className="text-[#00a4e4]">
                  <ChevronIcon />
                </span>
                Despulpadoras
              </Link>

            </div>

          </div>

        </div>



        {/* ============================================================
            SEPARADOR
        ============================================================ */}

        <div
          className="
            mt-6
            border-t
            border-slate-300
          "
        />



        {/* ============================================================
            BARRA INFERIOR
        ============================================================ */}

        <div
          className="
            flex
            flex-col
            items-center
            justify-between
            gap-2
            pt-3
            text-center
            sm:flex-row
            sm:text-left
          "
        >

          <p
            className="
              text-[9px]
              text-slate-500
            "
          >
            Penagos Hermanos @ 2024 –

            <span
              className="
                font-bold
                text-slate-600
              "
            >
              {" "}TODOS LOS DERECHOS RESERVADOS
            </span>
          </p>


          <div
            className="
              flex
              items-center
              gap-4
            "
          >

            <Link
              to="/proteccion-datos"
              className="
                text-[9px]
                font-semibold
                text-[#007fc2]
                transition
                duration-200
                hover:text-[#302b80]
              "
            >
              Protección de Datos Personales
            </Link>


            <span
              className="
                hidden
                h-3
                w-px
                bg-slate-300
                sm:block
              "
            />


            <button
              type="button"
              className="
                flex
                items-center
                gap-1
                text-[9px]
                font-semibold
                text-slate-500
                transition
                duration-200
                hover:text-[#302b80]
              "
            >
              🇺🇸
              EN
            </button>

          </div>

        </div>

      </div>

    </footer>

  );
}


export default Footer;