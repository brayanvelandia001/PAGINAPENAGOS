import React, { useState } from "react";

const SoporteForm = () => {
  const [form, setForm] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    telefono: "",
    pais: "",
    ciudad: "",
    descripcion: "",
    terminos: false,
  });

  const [estado, setEstado] = useState("formulario");
  // formulario | enviando | exitoso | error

  const [mensajeError, setMensajeError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.terminos) {
      alert("Debe aceptar los términos y condiciones para continuar.");
      return;
    }

    setEstado("enviando");
    setMensajeError("");

    try {
      // =====================================================
      // PREPARAR DATOS
      // =====================================================

      const datos = new FormData();

      datos.append("nombre", form.nombre.trim());
      datos.append("apellidos", form.apellidos.trim());
      datos.append("email", form.email.trim());
      datos.append("telefono", form.telefono.trim());
      datos.append("pais", form.pais.trim());
      datos.append("ciudad", form.ciudad.trim());
      datos.append("descripcion", form.descripcion.trim());
      datos.append("terminos", form.terminos ? "1" : "0");

      // =====================================================
      // ENVIAR A PHP EN PRODUCCIÓN
      // =====================================================

      const respuesta = await fetch(
        "https://react.penagos.com/soporte.php",
        {
          method: "POST",
          body: datos,
        }
      );

      // =====================================================
      // LEER RESPUESTA
      // =====================================================

      let resultado;

      try {
        resultado = await respuesta.json();
      } catch {
        throw new Error(
          "El servidor no devolvió una respuesta válida."
        );
      }

      console.log("Respuesta del servidor:", resultado);

      // =====================================================
      // VALIDAR RESPUESTA DEL PHP
      // =====================================================

      if (!respuesta.ok || !resultado.success) {
        throw new Error(
          resultado.message ||
            "No fue posible enviar la solicitud."
        );
      }

      // =====================================================
      // ÉXITO
      // =====================================================

      setEstado("exitoso");

    } catch (error) {
      console.error(
        "Error enviando formulario:",
        error
      );

      setMensajeError(
        error.message ||
          "No fue posible enviar la solicitud. Por favor inténtelo nuevamente."
      );

      setEstado("error");
    }
  };

  const limpiarFormulario = () => {
    setForm({
      nombre: "",
      apellidos: "",
      email: "",
      telefono: "",
      pais: "",
      ciudad: "",
      descripcion: "",
      terminos: false,
    });

    setMensajeError("");
    setEstado("formulario");
  };

  // =====================================================
  // LOGO PENAGOS
  // =====================================================

  const LogoPenagos = () => {
    return (
      <img
        src="https://penagos.com/wp-content/uploads/2026/08/favicon.png"
        alt="Penagos"
        className="h-16 w-16 object-contain"
      />
    );
  };

  return (
    <section className="w-full bg-white py-14">
      <div className="mx-auto max-w-6xl px-6">

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.5fr]">

          {/* =====================================================
              INFORMACIÓN DE CONTACTO
          ===================================================== */}

          <div className="flex flex-col justify-start">

            <span className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">
              Atención al cliente
            </span>

            <h2 className="text-3xl font-bold leading-tight text-gray-800">
              ¿Necesita
              <br />
              <span className="text-blue-600">
                ayuda?
              </span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-gray-500">
              Complete el siguiente formulario y nuestro equipo
              de servicio y post venta podrá revisar su solicitud
              y ponerse en contacto con usted.
            </p>

            {/* TELÉFONO */}

            <div className="mt-8 flex items-start gap-4">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                ☎
              </div>

              <div>
                <p className="text-xs font-semibold uppercase text-gray-400">
                  Teléfono
                </p>

                <a
                  href="tel:+573102987026"
                  className="text-sm font-medium text-gray-700 transition hover:text-blue-600"
                >
                  +57 310 298 7026
                </a>
              </div>

            </div>

            {/* CORREO */}

            <div className="mt-5 flex items-start gap-4">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                ✉
              </div>

              <div>

                <p className="text-xs font-semibold uppercase text-gray-400">
                  Correo electrónico
                </p>

                <a
                  href="mailto:servicioalcliente@penagos.com"
                  className="text-sm font-medium text-gray-700 transition hover:text-blue-600"
                >
                  servicioalcliente@penagos.com
                </a>

              </div>

            </div>

            {/* AVISO */}

            <div className="mt-8 rounded-xl border border-blue-100 bg-blue-50 p-5">

              <p className="text-xs leading-6 text-blue-800">

                <strong>Importante:</strong>{" "}
                Los campos marcados con{" "}
                <span className="font-bold">*</span>{" "}
                son obligatorios.

                Procure proporcionar información detallada
                sobre su solicitud para facilitar nuestra atención.

              </p>

            </div>

          </div>

          {/* =====================================================
              FORMULARIO
          ===================================================== */}

          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg md:p-8">

            {estado === "formulario" && (
              <>

                <div className="mb-7">

                  <h2 className="text-2xl font-bold text-gray-800">
                    Consultas Post Venta
                  </h2>

                  <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    Diligencie sus datos y cuéntenos cómo podemos ayudarle.
                  </p>

                </div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >

                  {/* NOMBRE + APELLIDOS */}

                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                    <div>

                      <label
                        htmlFor="nombre"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        Nombre{" "}
                        <span className="text-red-500">*</span>
                      </label>

                      <input
                        id="nombre"
                        name="nombre"
                        type="text"
                        required
                        value={form.nombre}
                        onChange={handleChange}
                        placeholder="Ingrese su nombre"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                      />

                    </div>

                    <div>

                      <label
                        htmlFor="apellidos"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        Apellidos{" "}
                        <span className="text-red-500">*</span>
                      </label>

                      <input
                        id="apellidos"
                        name="apellidos"
                        type="text"
                        required
                        value={form.apellidos}
                        onChange={handleChange}
                        placeholder="Ingrese sus apellidos"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                      />

                    </div>

                  </div>

                  {/* EMAIL + TELÉFONO */}

                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                    <div>

                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        Correo electrónico{" "}
                        <span className="text-red-500">*</span>
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="ejemplo@correo.com"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                      />

                    </div>

                    <div>

                      <label
                        htmlFor="telefono"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        Teléfono{" "}
                        <span className="text-red-500">*</span>
                      </label>

                      <input
                        id="telefono"
                        name="telefono"
                        type="tel"
                        required
                        value={form.telefono}
                        onChange={handleChange}
                        placeholder="+57 300 000 0000"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                      />

                    </div>

                  </div>

                  {/* PAÍS + CIUDAD */}

                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                    <div>

                      <label
                        htmlFor="pais"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        País{" "}
                        <span className="text-red-500">*</span>
                      </label>

                      <input
                        id="pais"
                        name="pais"
                        type="text"
                        required
                        value={form.pais}
                        onChange={handleChange}
                        placeholder="Ej. Colombia"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                      />

                    </div>

                    <div>

                      <label
                        htmlFor="ciudad"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        Ciudad{" "}
                        <span className="text-red-500">*</span>
                      </label>

                      <input
                        id="ciudad"
                        name="ciudad"
                        type="text"
                        required
                        value={form.ciudad}
                        onChange={handleChange}
                        placeholder="Ej. Bucaramanga"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                      />

                    </div>

                  </div>

                  {/* DESCRIPCIÓN */}

                  <div>

                    <label
                      htmlFor="descripcion"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Descripción de la solicitud{" "}
                      <span className="text-red-500">*</span>
                    </label>

                    <textarea
                      id="descripcion"
                      name="descripcion"
                      required
                      rows={6}
                      value={form.descripcion}
                      onChange={handleChange}
                      placeholder="Describa detalladamente su solicitud, inconveniente o requerimiento..."
                      className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />

                  </div>

                  {/* TÉRMINOS */}

                  <div className="rounded-lg bg-gray-50 p-4">

                    <label className="flex cursor-pointer items-start gap-3">

                      <input
                        type="checkbox"
                        name="terminos"
                        checked={form.terminos}
                        onChange={handleChange}
                        required
                        className="mt-1 h-4 w-4 cursor-pointer accent-blue-600"
                      />

                      <span className="text-xs leading-5 text-gray-500">

                        He leído y acepto los{" "}

                        <a
                          href="/terminos-y-condiciones"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-blue-600 hover:underline"
                        >
                          términos y condiciones
                        </a>{" "}

                        y autorizo el tratamiento de mis datos personales
                        de acuerdo con la política de privacidad de Penagos.

                        <span className="ml-1 text-red-500">
                          *
                        </span>

                      </span>

                    </label>

                  </div>

                  {/* ENVIAR */}

                  <button
                    type="submit"
                    disabled={estado === "enviando"}
                    className="w-full rounded-lg bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    Enviar solicitud
                  </button>

                  <p className="text-center text-xs text-gray-400">
                    Los campos marcados con * son obligatorios.
                  </p>

                </form>

              </>
            )}

            {/* =====================================================
                ENVIANDO
            ===================================================== */}

            {estado === "enviando" && (

              <div className="flex min-h-[500px] flex-col items-center justify-center text-center">

                <div className="mb-7 flex h-28 w-28 items-center justify-center rounded-full border border-gray-100 bg-white shadow-md">
                  <LogoPenagos />
                </div>

                <div className="mb-5 h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600" />

                <h2 className="text-2xl font-bold text-gray-800">
                  Enviando solicitud...
                </h2>

                <p className="mt-3 max-w-md text-sm leading-relaxed text-gray-500">
                  Estamos procesando su solicitud.
                  Por favor espere un momento.
                </p>

              </div>

            )}

            {/* =====================================================
                ÉXITO
            ===================================================== */}

            {estado === "exitoso" && (

              <div className="flex min-h-[500px] flex-col items-center justify-center text-center">

                <div className="mb-7 flex h-28 w-28 items-center justify-center rounded-full border border-gray-100 bg-white shadow-md">
                  <LogoPenagos />
                </div>

                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl font-bold text-green-600">
                  ✓
                </div>

                <h2 className="text-2xl font-bold text-gray-800">
                  ¡Solicitud enviada!
                </h2>

                <p className="mt-3 max-w-md text-sm leading-relaxed text-gray-500">
                  Hemos recibido correctamente su solicitud.
                  Nuestro equipo de servicio y post venta revisará
                  la información y se pondrá en contacto con usted.
                </p>

                <button
                  type="button"
                  onClick={limpiarFormulario}
                  className="mt-7 rounded-lg border border-blue-600 px-6 py-3 text-sm font-semibold text-blue-600 transition hover:bg-blue-50"
                >
                  Registrar otra solicitud
                </button>

              </div>

            )}

            {/* =====================================================
                ERROR
            ===================================================== */}

            {estado === "error" && (

              <div className="flex min-h-[500px] flex-col items-center justify-center text-center">

                <div className="mb-7 flex h-28 w-28 items-center justify-center rounded-full border border-gray-100 bg-white shadow-md">
                  <LogoPenagos />
                </div>

                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-3xl font-bold text-red-600">
                  !
                </div>

                <h2 className="text-2xl font-bold text-gray-800">
                  No pudimos enviar la solicitud
                </h2>

                <p className="mt-3 max-w-md text-sm leading-relaxed text-gray-500">
                  {mensajeError}
                </p>

                <button
                  type="button"
                  onClick={() => setEstado("formulario")}
                  className="mt-7 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Intentar nuevamente
                </button>

              </div>

            )}

          </div>

        </div>

      </div>
    </section>
  );
};

export default SoporteForm;
