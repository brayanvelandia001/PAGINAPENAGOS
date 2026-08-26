import React, { useState } from "react";

const preguntasGenerales = [
  {
    pregunta: "¿Cuál es el horario de servicio al cliente?",
    respuesta:
      "Nuestro equipo de servicio al cliente está disponible para atender sus solicitudes y consultas durante el horario establecido por Penagos.",
  },
  {
    pregunta: "¿Cómo puedo ser un distribuidor Penagos?",
    respuesta:
      "Puede comunicarse con nuestro equipo comercial para conocer los requisitos y el proceso para convertirse en distribuidor Penagos.",
  },
  {
    pregunta: "¿El servicio de despacho de mi pedido incluye la instalación?",
    respuesta:
      "La instalación depende del tipo de máquina y de las condiciones establecidas para cada pedido. Consulte con nuestro equipo comercial o de servicio técnico.",
  },
  {
    pregunta: "¿Cuál es el significado de PQRS?",
    respuesta:
      "PQRS corresponde a Peticiones, Quejas, Reclamos y Sugerencias.",
  },
  {
    pregunta: "¿Cómo puedo realizar una PQRS?",
    respuesta:
      "Puede utilizar el formulario de consultas disponible en esta página para registrar su solicitud.",
  },
  {
    pregunta: "¿En dónde puedo encontrar la política de garantía?",
    respuesta:
      "Puede consultar las condiciones de garantía comunicándose con nuestro equipo de servicio al cliente.",
  },
];

const preguntasEquipos = [
  {
    pregunta: "¿Cómo puedo solicitar soporte técnico para mi equipo?",
    respuesta:
      "Diligencie el formulario de consultas post venta indicando sus datos y una descripción detallada de la solicitud.",
  },
  {
    pregunta: "¿Dónde puedo consultar información de mi máquina?",
    respuesta:
      "Nuestro equipo de soporte puede orientarlo de acuerdo con la referencia y características de su máquina.",
  },
  {
    pregunta: "¿Cómo solicito repuestos para mi equipo?",
    respuesta:
      "Puede comunicarse con el área de servicio y repuestos indicando la referencia de la máquina y los componentes que necesita.",
  },
];

const FAQItem = ({ pregunta, respuesta }) => {
  return (
    <details className="group border-b border-gray-200 last:border-b-0">

      <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 text-sm font-medium text-gray-700 transition hover:text-blue-600">

        <span>
          {pregunta}
        </span>

        <span className="ml-4 flex-shrink-0 text-lg text-blue-500 transition-transform duration-200 group-open:rotate-180">
          ˅
        </span>

      </summary>

      <div className="px-5 pb-5 text-sm leading-relaxed text-gray-500">
        {respuesta}
      </div>

    </details>
  );
};

const PreguntasFrecuentes = () => {
  const [categoria, setCategoria] = useState("general");

  const preguntas =
    categoria === "general"
      ? preguntasGenerales
      : preguntasEquipos;

  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-4xl px-6">

        {/* TÍTULO */}
        <div className="mb-8 text-center">

          <h2 className="text-2xl font-semibold text-gray-700 md:text-3xl">
            Preguntas{" "}
            <span className="text-blue-600">
              Frecuentes
            </span>
          </h2>

          <div className="mx-auto mt-3 h-0.5 w-12 bg-blue-500" />

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-500">
            A continuación encontrará las respuestas a las preguntas o
            inconvenientes más comunes relacionados con nuestros equipos
            y nuestro servicio.
          </p>

        </div>

        {/* TABS */}
        <div className="flex border-b border-gray-200">

          <button
            type="button"
            onClick={() => setCategoria("general")}
            className={`border-b-2 px-5 py-3 text-sm font-medium transition ${
              categoria === "general"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-500 hover:text-blue-600"
            }`}
          >
            General
          </button>

          <button
            type="button"
            onClick={() => setCategoria("equipos")}
            className={`border-b-2 px-5 py-3 text-sm font-medium transition ${
              categoria === "equipos"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-500 hover:text-blue-600"
            }`}
          >
            Equipos
          </button>

        </div>

        {/* PREGUNTAS */}
        <div className="border-x border-b border-gray-200">

          {preguntas.map((item, index) => (
            <FAQItem
              key={index}
              pregunta={item.pregunta}
              respuesta={item.respuesta}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default PreguntasFrecuentes;
