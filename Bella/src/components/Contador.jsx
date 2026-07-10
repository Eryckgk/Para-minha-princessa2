import { useEffect, useState } from "react";

export default function Contador({ aoFinalizar }) {
  const TEMPO_INICIAL = 30 * 60;

  const [tempo, setTempo] = useState(TEMPO_INICIAL);

  useEffect(() => {
    if (tempo <= 0) {
      aoFinalizar();
      return;
    }

    const intervalo = setInterval(() => {
      setTempo((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(intervalo);
  }, [tempo, aoFinalizar]);

  const minutos = Math.floor(tempo / 60);
  const segundos = tempo % 60;

  return (
    <div className="contador-container">

      <div className="contador-card">

        <h1 className="contador-titulo">
          💖 Uma surpresa está chegando... 💖
        </h1>


        <p className="contador-frase">
          Minha princessa, prepare seu coração... 🥹
        </p>


        <p className="contador-texto">
          Eu preparei algo muito especial para você.
          <br />
          Cada detalhe foi feito pensando em você, Bella 🤍
        </p>


        <div className="contador-tempo">
          ⏳ {String(minutos).padStart(2, "0")}:
          {String(segundos).padStart(2, "0")}
        </div>


        <p className="contador-texto">
          Quando esse tempo acabar...
          <br />
          uma surpresa feita com todo meu amor vai aparecer 💌
        </p>


        <p className="contador-aviso">
          Não fecha essa página, hein? 😭💖
        </p>

      </div>

    </div>
  );
}