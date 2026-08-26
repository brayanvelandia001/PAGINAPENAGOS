import Header from "../components/Header";
import Footer from "../components/Footer";
import SoporteForm from "../components/SoporteForm";
import PreguntasFrecuentes from "../components/PreguntasFrecuentes";

const Soporte = () => {
  return (
    <>
      {/* =========================
          HEADER
      ========================== */}
      <Header />

      <main className="min-h-screen bg-white">

        {/* =========================
            FRANJA CORPORATIVA
        ========================== */}
        <section className="relative h-[210px] overflow-hidden md:h-[230px]">

          {/* Imagen de fondo */}
          <img
            src="https://penagos.com/wp-content/uploads/2023/08/Banner-WEB-Servicio-y-Post-venta.png"
            alt="Servicio y Post Venta Penagos"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              object-[center_22%]
              md:object-[center_20%]
            "
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/35" />

          {/* Degradado para mejorar la lectura del texto */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent" />

          {/* Contenido */}
          <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-6 md:px-8">

            <div className="max-w-xl text-white">


              <h1 className="text-3xl font-bold leading-tight drop-shadow-md md:text-4xl">
                Servicio y Post Venta
              </h1>

              <div className="mt-3 h-1 w-14 rounded-full bg-blue-500" />

              <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/90 md:text-base">
                Estamos para atender sus solicitudes, inquietudes y
                requerimientos relacionados con nuestros equipos.
              </p>

            </div>

          </div>
        </section>

        {/* =========================
            ATENCIÓN AL CLIENTE
            + FORMULARIO
        ========================== */}
        <SoporteForm />

        {/* =========================
            PREGUNTAS FRECUENTES
        ========================== */}
        <PreguntasFrecuentes />

      </main>

      {/* =========================
          FOOTER
      ========================== */}
      <Footer />
    </>
  );
};

export default Soporte;

