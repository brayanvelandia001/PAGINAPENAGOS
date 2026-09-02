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
        d="
          M18.9 3H22l-6.8 7.8L23 21h-6.1l-4.8-6.3L6.6 21H3.5l7.2-8.3L3 3h6.3l4.4 5.8L18.9 3Zm-1.1 15.8h1.7L8.3 5H6.5l11.3 13.8Z
        "
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

function Footer({
  language
}) {

  const isEnglish = language === "EN";


  // ==========================================================
  // TRADUCCIONES
  // ==========================================================

  const t = {

    certificaciones: isEnglish
      ? "Certifications"
      : "Certificaciones",

    sucursalQuindio: isEnglish
      ? "Quindío Branch"
      : "Sucursal Quindío",

    sucursalHuila: isEnglish
      ? "Huila Branch"
      : "Sucursal Huila",

    certificacionSGS: isEnglish
      ? "SGS Certification"
      : "Certificación SGS",

    certificadoBASC: isEnglish
      ? "BASC Certificate"
      : "Certificado BASC",

    proteccionDatos: isEnglish
      ? "Personal Data Protection"
      : "Protección de Datos Personales",

    derechos: isEnglish
      ? "ALL RIGHTS RESERVED"
      : "TODOS LOS DERECHOS RESERVADOS",

    colombia: isEnglish
      ? "Colombia"
      : "Colombia",

    brasil: isEnglish
      ? "Brazil"
      : "Brasil",

    penagosHermanos: "Penagos Hermanos",

    monteAlegre: "Monte Alegre"

  };


  // ==========================================================
  // IMÁGENES
  // ==========================================================

  const penagosLogo =
    "http://penagos.com/wp-content/uploads/2020/03/Logotipo-Penagos-Hermanos-PNG.png";

  const colombiaFlag =
    "http://penagos.com/wp-content/uploads/2020/02/Bandera-de-Colombia_Mesa-de-trabajo-1.jpg";

  const brasilFlag =
    "http://penagos.com/wp-content/uploads/2020/02/Bandera-brasil-penagos.png";

  const monteAlegreLogo =
    "http://penagos.com/wp-content/uploads/2020/04/logo1.png";

  const sgsLogo =
    "http://penagos.com/wp-content/uploads/2020/02/SGS.png";

  const bascLogo =
    "http://penagos.com/wp-content/uploads/2020/02/BaSc.png";

  const footerBackground =
    "http://penagos.com/wp-content/uploads/2026/09/P2n.png";


  return (

    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-slate-300
        bg-[#f3f3f3]
        text-slate-600
      "
    >

      {/* ======================================================
          IMAGEN DE FONDO
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
        "
      >

        <img
          src={footerBackground}
          alt=""
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-center
            opacity-[0.50]
          "
        />


        {/* ==================================================
            CAPA DE LEGIBILIDAD
        ================================================== */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#f3f3f3]/95
            via-[#f3f3f3]/90
            to-[#f3f3f3]/75
          "
        />


        {/* ==================================================
            LIGERO DEGRADADO INFERIOR
        ================================================== */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-24
            bg-gradient-to-t
            from-[#f3f3f3]/70
            to-transparent
          "
        />

      </div>


      {/* ======================================================
          CONTENIDO
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1280px]
          px-5
          py-8
          lg:px-8
          lg:py-9
        "
      >

        <div
          className="
            grid
            grid-cols-1
            gap-8
            sm:grid-cols-2
            lg:grid-cols-3
            lg:gap-0
          "
        >


          {/* ==================================================
              COLUMNA 1
          ================================================== */}

          <div
            className="
              flex
              flex-col
              lg:pr-10
            "
          >

            <div
              className="
                inline-flex
                w-fit
                items-center
                gap-3
              "
            >

              <img
                src={penagosLogo}
                alt={t.penagosHermanos}
                className="
                  h-[42px]
                  w-[150px]
                  object-contain
                  object-left
                "
              />

              <img
                src={colombiaFlag}
                alt={t.colombia}
                className="
                  h-[22px]
                  w-[34px]
                  rounded-sm
                  object-cover
                  shadow-sm
                "
              />

            </div>


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
                  cursor-pointer
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
                href="https://www.facebook.com/penagoscompany/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="
                  flex
                  h-7
                  w-7
                  cursor-pointer
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-slate-300
                  bg-white
                  text-[#00a4e4]
                  shadow-sm
                  transition-all
                  duration-200
                  hover:-translate-y-1
                  hover:border-[#00a4e4]
                  hover:bg-[#00a4e4]
                  hover:text-white
                "
              >
                <FacebookIcon />
              </a>


              <a
                href="https://www.instagram.com/penagoscompany/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="
                  flex
                  h-7
                  w-7
                  cursor-pointer
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-slate-300
                  bg-white
                  text-[#00a4e4]
                  shadow-sm
                  transition-all
                  duration-200
                  hover:-translate-y-1
                  hover:border-[#00a4e4]
                  hover:bg-[#00a4e4]
                  hover:text-white
                "
              >
                <InstagramIcon />
              </a>


              <a
                href="https://twitter.com/penagoscompany/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="
                  flex
                  h-7
                  w-7
                  cursor-pointer
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-slate-300
                  bg-white
                  text-[#00a4e4]
                  shadow-sm
                  transition-all
                  duration-200
                  hover:-translate-y-1
                  hover:border-[#00a4e4]
                  hover:bg-[#00a4e4]
                  hover:text-white
                "
              >
                <XIcon />
              </a>


              <a
                href="https://www.youtube.com/channel/UC0RWQ6bpF75tCfGLUo38X0g"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="
                  flex
                  h-7
                  w-7
                  cursor-pointer
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-slate-300
                  bg-white
                  text-[#00a4e4]
                  shadow-sm
                  transition-all
                  duration-200
                  hover:-translate-y-1
                  hover:border-[#00a4e4]
                  hover:bg-[#00a4e4]
                  hover:text-white
                "
              >
                <YoutubeIcon />
              </a>


              <a
                href="https://www.linkedin.com/company/penagoscompany/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  flex
                  h-7
                  w-7
                  cursor-pointer
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-slate-300
                  bg-white
                  text-[#00a4e4]
                  shadow-sm
                  transition-all
                  duration-200
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


          {/* ==================================================
              COLUMNA 2
          ================================================== */}

          <div
            className="
              border-slate-300
              lg:border-l
              lg:px-10
            "
          >

            <div
              className="
                inline-flex
                w-fit
                items-center
                gap-3
              "
            >

              <img
                src={penagosLogo}
                alt={t.penagosHermanos}
                className="
                  h-[42px]
                  w-[150px]
                  object-contain
                  object-left
                "
              />

              <img
                src={colombiaFlag}
                alt={t.colombia}
                className="
                  h-[22px]
                  w-[34px]
                  rounded-sm
                  object-cover
                  shadow-sm
                "
              />

            </div>


            {/* SUCURSAL QUINDÍO */}

            <div
              className="
                mt-4
                rounded-xl
                border
                border-slate-200
                bg-white/70
                px-3
                py-2.5
                transition-all
                duration-200
                hover:border-[#00a4e4]/30
                hover:bg-white
                hover:shadow-sm
              "
            >

              <p
                className="
                  text-[10px]
                  font-bold
                  text-slate-700
                "
              >
                {t.sucursalQuindio}
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
                  cursor-pointer
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


            {/* SUCURSAL HUILA */}

            <div
              className="
                mt-2.5
                rounded-xl
                border
                border-slate-200
                bg-white/70
                px-3
                py-2.5
                transition-all
                duration-200
                hover:border-[#00a4e4]/30
                hover:bg-white
                hover:shadow-sm
              "
            >

              <p
                className="
                  text-[10px]
                  font-bold
                  text-slate-700
                "
              >
                {t.sucursalHuila}
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
                  cursor-pointer
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


          {/* ==================================================
              COLUMNA 3
          ================================================== */}

          <div
            className="
              border-slate-300
              lg:border-l
              lg:pl-10
            "
          >

            <div
              className="
                flex
                w-fit
                items-center
                gap-3
              "
            >

              <img
                src={penagosLogo}
                alt={t.penagosHermanos}
                className="
                  h-[42px]
                  w-[150px]
                  shrink-0
                  object-contain
                  object-left
                "
              />


              <img
                src={monteAlegreLogo}
                alt={t.monteAlegre}
                className="
                  h-[42px]
                  w-[100px]
                  shrink-0
                  object-contain
                "
              />


              <div
                className="
                  flex
                  h-[25px]
                  w-[38px]
                  shrink-0
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-[3px]
                  border
                  border-slate-200
                  bg-white
                  shadow-sm
                "
              >

                <img
                  src={brasilFlag}
                  alt={t.brasil}
                  className="
                    block
                    h-full
                    w-full
                    object-cover
                  "
                />

              </div>

            </div>


            {/* DIRECCIÓN BRASIL */}

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


            {/* TELÉFONOS BRASIL */}

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
                  cursor-pointer
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
                  cursor-pointer
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


            {/* CORREO BRASIL */}

            <a
              href="mailto:contato@montealegre.com.br"
              className="
                mt-2
                flex
                cursor-pointer
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


            {/* ==================================================
                CERTIFICACIONES
            ================================================== */}

            <div
              className="
                mt-6
                flex
                flex-col
                items-center
              "
            >

              <div
                className="
                  mb-3
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                "
              >

                <span
                  className="
                    h-[2px]
                    w-7
                    rounded-full
                    bg-gradient-to-r
                    from-[#00a4e4]
                    to-[#302b80]
                  "
                />


                <span
                  className="
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    text-slate-500
                  "
                >
                  {t.certificaciones}
                </span>


                <span
                  className="
                    h-[2px]
                    w-7
                    rounded-full
                    bg-gradient-to-r
                    from-[#302b80]
                    to-[#00a4e4]
                  "
                />

              </div>


              <div
                className="
                  flex
                  items-center
                  justify-center
                  gap-5
                "
              >

                {/* SGS */}

                <a
                  href="https://www.sgs.com/es-co/productos-y-clientes-certificados"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t.certificacionSGS}
                  className="
                    group
                    relative
                    flex
                    h-[76px]
                    w-[76px]
                    shrink-0
                    cursor-pointer
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-slate-200
                    bg-white
                    p-2
                    shadow-[0_5px_18px_rgba(15,23,42,0.08)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:scale-[1.04]
                    hover:border-[#00a4e4]/60
                    hover:shadow-[0_12px_28px_rgba(0,164,228,0.20)]
                  "
                >

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-[4px]
                      rounded-full
                      border
                      border-[#00a4e4]/15
                      transition-all
                      duration-300
                      group-hover:inset-[3px]
                      group-hover:border-[#00a4e4]/50
                    "
                  />


                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      rounded-full
                      bg-gradient-to-br
                      from-[#00a4e4]/5
                      to-transparent
                      opacity-0
                      transition
                      duration-300
                      group-hover:opacity-100
                    "
                  />


                  <img
                    src={sgsLogo}
                    alt={t.certificacionSGS}
                    className="
                      relative
                      z-10
                      max-h-[52px]
                      max-w-[52px]
                      object-contain
                      transition
                      duration-300
                      group-hover:scale-110
                    "
                  />

                </a>


                {/* BASC */}

                <a
                  href="https://penagos.com/wp-content/uploads/2024/09/2024-Certificado-BASC.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t.certificadoBASC}
                  className="
                    group
                    relative
                    flex
                    h-[76px]
                    w-[76px]
                    shrink-0
                    cursor-pointer
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-slate-200
                    bg-white
                    p-2
                    shadow-[0_5px_18px_rgba(15,23,42,0.08)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:scale-[1.04]
                    hover:border-[#302b80]/55
                    hover:shadow-[0_12px_28px_rgba(48,43,128,0.20)]
                  "
                >

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-[4px]
                      rounded-full
                      border
                      border-[#302b80]/15
                      transition-all
                      duration-300
                      group-hover:inset-[3px]
                      group-hover:border-[#302b80]/45
                    "
                  />


                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      rounded-full
                      bg-gradient-to-br
                      from-[#302b80]/5
                      to-transparent
                      opacity-0
                      transition
                      duration-300
                      group-hover:opacity-100
                    "
                  />


                  <img
                    src={bascLogo}
                    alt={t.certificadoBASC}
                    className="
                      relative
                      z-10
                      max-h-[52px]
                      max-w-[52px]
                      object-contain
                      transition
                      duration-300
                      group-hover:scale-110
                    "
                  />

                </a>

              </div>

            </div>

          </div>

        </div>


        {/* ======================================================
            SEPARADOR
        ====================================================== */}

        <div
          className="
            mt-7
            border-t
            border-slate-300/80
          "
        />


        {/* ======================================================
            BARRA INFERIOR
        ====================================================== */}

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
            Penagos Hermanos © 2024 –

            <span
              className="
                font-bold
                text-slate-600
              "
            >
              {" "}
              {t.derechos}
            </span>
          </p>


          {/* PROTECCIÓN DE DATOS */}

          <div
            className="
              flex
              items-center
            "
          >

            <Link
              to="/proteccion-de-datos-personales"
              className="
                cursor-pointer
                text-[9px]
                font-semibold
                text-[#007fc2]
                transition
                duration-200
                hover:text-[#302b80]
              "
            >
              {t.proteccionDatos}
            </Link>

          </div>

        </div>

      </div>

    </footer>

  );

}


export default Footer;
