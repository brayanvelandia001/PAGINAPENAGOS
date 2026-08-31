    import React from "react";

function ModalDespulpado({
  etapa,
  language = "ES",
  cerrarModal
}) {

  const isEnglish = language === "EN";

  return (
    <div>

      <h2>
        {isEnglish
          ? "Pulping and classification"
          : "Despulpado y clasificación"}
      </h2>

      <button onClick={cerrarModal}>
        X
      </button>

    </div>
  );
}


export default ModalDespulpado;