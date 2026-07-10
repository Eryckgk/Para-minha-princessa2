import { useState } from "react";

import Contador from "./components/Contador";
import TeladeEntrada from "./components/TeladeEntrada";
import Carta from "./components/Carta";
import SurprezaFinal from "./components/SurprezaFinal";

export default function App() {
  const [etapa, setEtapa] = useState("contador");

  return (
    <div>
      {etapa === "contador" && (
        <Contador avancar={() => setEtapa("entrada")} />
      )}

      {etapa === "entrada" && (
        <TeladeEntrada avancar={() => setEtapa("carta")} />
      )}

      {etapa === "carta" && (
        <Carta avancar={() => setEtapa("final")} />
      )}

      {etapa === "final" && (
        <SurprezaFinal />
      )}
    </div>
  );
}