import { useEffect } from "react";

function ChatPenagos() {

  useEffect(() => {

    const SCRIPT_ID = "hs-script-loader";
    const SCRIPT_URL = "https://js.hs-scripts.com/8988956.js";

    // Evitar cargar HubSpot más de una vez
    if (document.getElementById(SCRIPT_ID)) {
      return;
    }

    // Crear script de HubSpot
    const script = document.createElement("script");

    script.id = SCRIPT_ID;
    script.type = "text/javascript";
    script.async = true;
    script.defer = true;
    script.src = SCRIPT_URL;

    // Cargar HubSpot
    document.body.appendChild(script);

  }, []);

  return null;
}

export default ChatPenagos;