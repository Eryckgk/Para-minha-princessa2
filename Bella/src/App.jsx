import { useState } from "react";
import Contador from "./components/Contador";
import TeladeEntrada from "./components/TeladeEntrada";
import Carta from "./components/Carta";
import SurprezaFinal from "./components/SurprezaFinal";
import "./App.css"

export default function App() {
  const [etapa, setEtapa] = useState("contador");

  return (
    <div>
      {etapa === "contador" && (
        <Contador aoFinalizar={() => setEtapa("entrada")} />
      )}

      {etapa === "entrada" && (
        <TeladeEntrada irParaCarta={() => setEtapa("carta")} />
      )}

      {etapa === "carta" && (
        <Carta irParaFinal={() => setEtapa("final")} />
      )}

      {etapa === "final" && <SurprezaFinal />}
    </div>
  );
}