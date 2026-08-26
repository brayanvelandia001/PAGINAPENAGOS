function PagosContenido({
  language
}) {

  const isEnglish = language === "EN";


  /* ============================================================
     ENLACES DE PAGO
  ============================================================ */

  // PAGO CON TARJETA → AVALPAYCENTER
  const enlaceTarjeta =
    "https://www.avalpaycenter.com/wps/portal/portal-de-pagos/web/banco-avvillas/resultado-busqueda/realizar-pago?idConv=00014575&origen=buscar";


  // TRANSFERENCIA → MIPAGOAMIGO
  const enlaceTransferencia =
    "https://www.mipagoamigo.com/MPA_WebSite/ServicePayments/StartPayment?id=6326&searchedCategoryId=&searchedAgreementName=PENAGOS%20HERMANOS%20Y%20COMPANIA%20SAS";


  /* ============================================================
     IMÁGENES
  ============================================================ */

  const imagenTarjeta =
    "https://penagos.com/wp-content/uploads/2021/12/tarjeta-credito-800x800-1.png";


  const imagenTransferencia =
    "https://penagos.com/wp-content/uploads/2021/12/transferencia-800x800-1.png";


  return (

    <section
      className="
        relative
        overflow-hidden
        bg-white
        py-14
        sm:py-16
        lg:py-20
      "
    >

      {/* ======================================================
          DECORACIÓN DE FONDO
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-[-180px]
          top-[100px]
          h-[380px]
          w-[380px]
          rounded-full
          bg-[#302b80]/5
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[-180px]
          bottom-[30px]
          h-[380px]
          w-[380px]
          rounded-full
          bg-blue-400/5
          blur-3xl
        "
      />


      <div
        className="
          relative
          mx-auto
          max-w-[1240px]
          px-5
          sm:px-6
          lg:px-10
        "
      >

        {/* ====================================================
            ENCABEZADO
        ==================================================== */}

        <div
          className="
            mx-auto
            max-w-[800px]
            text-center
          "
        >

          {/* TÍTULO */}

          <h1
            className="
              text-3xl
              font-extrabold
              tracking-tight
              text-[#07133d]
              sm:text-4xl
              lg:text-[52px]
              lg:leading-[1.08]
            "
          >

            {isEnglish
              ? "Make your payment online"
              : "Realice sus pagos aquí"
            }

          </h1>


          {/* SUBTÍTULO */}

          <p
            className="
              mx-auto
              mt-5
              max-w-[700px]
              text-[15px]
              leading-7
              text-slate-500
              sm:text-base
              lg:text-[17px]
            "
          >

            {isEnglish
              ? "Choose your preferred payment method and complete your transaction securely."
              : "Seleccione el medio de pago de su preferencia y realice su transacción de forma segura."
            }

          </p>


          {/* COLOMBIA */}

          <div
            className="
              mt-4
              text-sm
              font-semibold
              text-[#302b80]
            "
          >

            {isEnglish
              ? "Available for Colombia"
              : "Disponible para Colombia"
            }

          </div>

        </div>



        {/* ====================================================
            TARJETAS DE PAGO
        ==================================================== */}

        <div
          className="
            mx-auto
            mt-10
            grid
            max-w-[1120px]
            gap-7
            md:grid-cols-2
            lg:mt-12
          "
        >


          {/* ==================================================
              PAGO CON TARJETA
              AVALPAYCENTER
          ================================================== */}

          <a
            href={enlaceTarjeta}
            target="_blank"
            rel="noopener noreferrer"

            className="
              group
              block
              overflow-hidden
              rounded-[30px]
              border
              border-slate-200
              bg-white
              shadow-[0_12px_40px_rgba(8,15,50,0.07)]
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-[#302b80]/20
              hover:shadow-[0_25px_60px_rgba(8,15,50,0.14)]
            "
          >

            {/* IMAGEN */}

            <div
              className="
                relative
                flex
                h-[300px]
                items-center
                justify-center
                overflow-hidden
                bg-gradient-to-br
                from-[#f7f8fc]
                to-[#eef0f8]
              "
            >

              {/* DECORACIÓN */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-20
                  -top-20
                  h-56
                  w-56
                  rounded-full
                  bg-[#302b80]/[0.06]
                  blur-3xl
                  transition-transform
                  duration-700
                  group-hover:scale-125
                "
              />


              {/* IMAGEN REAL */}

              <img
                src={imagenTarjeta}
                alt={
                  isEnglish
                    ? "Credit and debit card payment"
                    : "Pago con tarjeta débito y crédito"
                }
                className="
                  relative
                  z-10
                  h-full
                  w-full
                  object-contain
                  p-4
                  transition-transform
                  duration-700
                  group-hover:scale-[1.05]
                "
              />


              {/* ETIQUETA */}

              <div
                className="
                  absolute
                  left-5
                  top-5
                  z-20
                  rounded-full
                  bg-white
                  px-3.5
                  py-2
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-wider
                  text-[#302b80]
                  shadow-sm
                "
              >

                {isEnglish
                  ? "Option 01"
                  : "Opción 01"
                }

              </div>

            </div>


            {/* CONTENIDO */}

            <div
              className="
                p-8
                sm:p-9
              "
            >

              <div
                className="
                  flex
                  items-start
                  justify-between
                  gap-5
                "
              >

                <div>

                  <p
                    className="
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.14em]
                      text-[#302b80]
                    "
                  >

                    {isEnglish
                      ? "Payment method"
                      : "Medio de pago"
                    }

                  </p>


                  <h2
                    className="
                      mt-2
                      text-[26px]
                      font-extrabold
                      tracking-tight
                      text-[#07133d]
                    "
                  >

                    {isEnglish
                      ? "Credit or debit card"
                      : "Pago con tarjeta"
                    }

                  </h2>

                </div>


                {/* FLECHA */}

                <span
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#302b80]
                    text-white
                    shadow-[0_8px_20px_rgba(48,43,128,0.18)]
                    transition-all
                    duration-300
                    group-hover:translate-x-1
                  "
                >

                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >

                    <path
                      d="M5 12h14"
                    />

                    <path
                      d="m13 6 6 6-6 6"
                    />

                  </svg>

                </span>

              </div>


              {/* DESCRIPCIÓN */}

              <p
                className="
                  mt-4
                  text-[14px]
                  leading-6
                  text-slate-500
                "
              >

                {isEnglish
                  ? "Pay securely using your credit or debit card through AvalPayCenter."
                  : "Realice su pago de forma segura utilizando su tarjeta débito o crédito a través de AvalPayCenter."
                }

              </p>


              {/* ACCIÓN */}

              <div
                className="
                  mt-7
                  flex
                  items-center
                  justify-between
                  border-t
                  border-slate-100
                  pt-5
                "
              >

                <span
                  className="
                    text-sm
                    font-bold
                    text-[#302b80]
                  "
                >

                  {isEnglish
                    ? "Pay now"
                    : "Pagar ahora"
                  }

                </span>


                <span
                  className="
                    flex
                    items-center
                    gap-2
                    text-sm
                    font-bold
                    text-[#302b80]
                  "
                >

                  AvalPayCenter

                  <span
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  >
                    →
                  </span>

                </span>

              </div>

            </div>

          </a>



          {/* ==================================================
              TRANSFERENCIA BANCARIA
              MIPAGOAMIGO
          ================================================== */}

          <a
            href={enlaceTransferencia}
            target="_blank"
            rel="noopener noreferrer"

            className="
              group
              block
              overflow-hidden
              rounded-[30px]
              border
              border-slate-200
              bg-white
              shadow-[0_12px_40px_rgba(8,15,50,0.07)]
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-[#302b80]/20
              hover:shadow-[0_25px_60px_rgba(8,15,50,0.14)]
            "
          >

            {/* IMAGEN */}

            <div
              className="
                relative
                flex
                h-[300px]
                items-center
                justify-center
                overflow-hidden
                bg-gradient-to-br
                from-[#f7f8fc]
                to-[#eef0f8]
              "
            >

              {/* DECORACIÓN */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -left-20
                  -top-20
                  h-56
                  w-56
                  rounded-full
                  bg-[#302b80]/[0.06]
                  blur-3xl
                  transition-transform
                  duration-700
                  group-hover:scale-125
                "
              />


              {/* IMAGEN REAL */}

              <img
                src={imagenTransferencia}
                alt={
                  isEnglish
                    ? "Bank transfer payment"
                    : "Pago mediante transferencia bancaria"
                }
                className="
                  relative
                  z-10
                  h-full
                  w-full
                  object-contain
                  p-4
                  transition-transform
                  duration-700
                  group-hover:scale-[1.05]
                "
              />


              {/* ETIQUETA */}

              <div
                className="
                  absolute
                  left-5
                  top-5
                  z-20
                  rounded-full
                  bg-white
                  px-3.5
                  py-2
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-wider
                  text-[#302b80]
                  shadow-sm
                "
              >

                {isEnglish
                  ? "Option 02"
                  : "Opción 02"
                }

              </div>

            </div>


            {/* CONTENIDO */}

            <div
              className="
                p-8
                sm:p-9
              "
            >

              <div
                className="
                  flex
                  items-start
                  justify-between
                  gap-5
                "
              >

                <div>

                  <p
                    className="
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.14em]
                      text-[#302b80]
                    "
                  >

                    {isEnglish
                      ? "Payment method"
                      : "Medio de pago"
                    }

                  </p>


                  <h2
                    className="
                      mt-2
                      text-[26px]
                      font-extrabold
                      tracking-tight
                      text-[#07133d]
                    "
                  >

                    {isEnglish
                      ? "Bank transfer"
                      : "Transferencia bancaria"
                    }

                  </h2>

                </div>


                {/* FLECHA */}

                <span
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#302b80]
                    text-white
                    shadow-[0_8px_20px_rgba(48,43,128,0.18)]
                    transition-all
                    duration-300
                    group-hover:translate-x-1
                  "
                >

                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >

                    <path
                      d="M5 12h14"
                    />

                    <path
                      d="m13 6 6 6-6 6"
                    />

                  </svg>

                </span>

              </div>


              {/* DESCRIPCIÓN */}

              <p
                className="
                  mt-4
                  text-[14px]
                  leading-6
                  text-slate-500
                "
              >

                {isEnglish
                  ? "Make your payment directly through a secure bank transfer using MiPagoAmigo."
                  : "Realice su pago directamente mediante transferencia bancaria utilizando MiPagoAmigo."
                }

              </p>


              {/* ACCIÓN */}

              <div
                className="
                  mt-7
                  flex
                  items-center
                  justify-between
                  border-t
                  border-slate-100
                  pt-5
                "
              >

                <span
                  className="
                    text-sm
                    font-bold
                    text-[#302b80]
                  "
                >

                  {isEnglish
                    ? "Continue"
                    : "Continuar"
                  }

                </span>


                <span
                  className="
                    flex
                    items-center
                    gap-2
                    text-sm
                    font-bold
                    text-[#302b80]
                  "
                >

                  MiPagoAmigo

                  <span
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  >
                    →
                  </span>

                </span>

              </div>

            </div>

          </a>

        </div>



        {/* ====================================================
            MENSAJE INFERIOR
        ==================================================== */}

        <div
          className="
            mx-auto
            mt-8
            max-w-[900px]
            text-center
          "
        >

          <p
            className="
              text-[13px]
              leading-6
              text-slate-400
            "
          >

            {isEnglish
              ? "By continuing, you will be redirected to the corresponding payment platform to complete your payment."
              : "Al continuar será redirigido a la plataforma correspondiente para completar su pago."
            }

          </p>

        </div>

      </div>

    </section>

  );

}


export default PagosContenido;