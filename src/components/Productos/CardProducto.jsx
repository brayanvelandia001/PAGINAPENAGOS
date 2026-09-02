import React from "react";
import { ArrowUpRight } from "lucide-react";

/* ============================================================
   CARD PRODUCTO
   PENAGOS
============================================================ */

function CardProducto({
  producto,
  language = "ES",
}) {
  const isEnglish = language === "EN";

  const image =
    producto?.images?.[0]?.src ||
    "https://penagos.com/wp-content/uploads/2020/04/Picapasto-Penagos-PP-300R-Picadora-de-forrajes-y-alimentos-5-300x300.jpg";

  const productName =
    producto?.name ||
    "Producto Penagos";

  const productDescription =
    producto?.short_description
      ?.replace(/<[^>]*>/g, "")
      ?.trim() || "";

  const productUrl =
    producto?.permalink || "#";

  return (
    <article
      className="
        group/product
        relative
        flex
        min-h-[450px]
        flex-col
        overflow-hidden
        rounded-[24px]
        border
        border-slate-200
        bg-white
        transition-all
        duration-500
        hover:-translate-y-1.5
        hover:border-[#302b80]/25
        hover:shadow-[0_22px_50px_rgba(7,19,61,0.10)]
      "
    >

      {/* ======================================================
          IMAGEN
      ====================================================== */}

      <div
        className="
          relative
          flex
          h-[270px]
          items-center
          justify-center
          overflow-hidden
          bg-[#f7f8fa]
        "
      >

        {/* Fondo decorativo */}
        <div
          className="
            pointer-events-none
            absolute
            -right-16
            -top-16
            h-40
            w-40
            rounded-full
            bg-[#302b80]/[0.04]
            transition-transform
            duration-700
            group-hover/product:scale-125
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-20
            -left-16
            h-44
            w-44
            rounded-full
            bg-[#07133d]/[0.025]
          "
        />

        {/* Imagen */}
        <img
          src={image}
          alt={productName}
          loading="lazy"
          className="
            relative
            z-10
            h-full
            w-full
            object-contain
            p-7
            transition-transform
            duration-700
            ease-out
            group-hover/product:scale-[1.06]
          "
        />

        {/* Indicador visual al pasar el mouse */}
        <div
          className="
            absolute
            bottom-4
            right-4
            z-20
            flex
            h-10
            w-10
            translate-y-2
            items-center
            justify-center
            rounded-full
            bg-[#07133d]
            text-white
            opacity-0
            shadow-lg
            transition-all
            duration-300
            group-hover/product:translate-y-0
            group-hover/product:opacity-100
          "
        >
          <ArrowUpRight size={17} strokeWidth={2} />
        </div>

      </div>

      {/* ======================================================
          INFORMACIÓN
      ====================================================== */}

      <div
        className="
          flex
          flex-1
          flex-col
          px-6
          pb-6
          pt-5
        "
      >

        {/* Marca */}
        <div
          className="
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
              bg-[#302b80]
            "
          />

          <span
            className="
              text-[9px]
              font-bold
              uppercase
              tracking-[0.22em]
              text-[#302b80]
            "
          >
            Penagos
          </span>
        </div>

        {/* Nombre */}
        <h3
          className="
            mt-2.5
            line-clamp-2
            text-[19px]
            font-semibold
            leading-[1.15]
            tracking-[-0.025em]
            text-[#07133d]
          "
        >
          {productName}
        </h3>

        {/* Descripción */}
        {productDescription && (
          <p
            className="
              mt-3
              line-clamp-2
              text-[12px]
              leading-5
              text-slate-500
            "
          >
            {productDescription}
          </p>
        )}

        {/* ====================================================
            BOTÓN
        ==================================================== */}

        <div
          className="
            mt-auto
            pt-5
          "
        >
          <a
            href={productUrl}
            target="_blank"
            rel="noreferrer"
            className="
              group/button
              flex
              w-full
              items-center
              justify-between
              rounded-xl
              border
              border-slate-200
              px-4
              py-3
              text-[10px]
              font-bold
              uppercase
              tracking-[0.16em]
              text-[#07133d]
              transition-all
              duration-300
              hover:border-[#302b80]
              hover:bg-[#302b80]
              hover:text-white
            "
          >
            <span>
              {isEnglish
                ? "View product"
                : "Ver producto"}
            </span>

            <span
              className="
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-full
                bg-[#07133d]/[0.05]
                transition-all
                duration-300
                group-hover/button:bg-white/10
              "
            >
              <ArrowUpRight
                size={14}
                className="
                  transition-transform
                  duration-300
                  group-hover/button:translate-x-0.5
                  group-hover/button:-translate-y-0.5
                "
              />
            </span>
          </a>
        </div>

      </div>

    </article>
  );
}

export default CardProducto;
