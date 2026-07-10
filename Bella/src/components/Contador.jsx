import { useEffect, useState } from "react";
import "../css/contador.css"
import "../css/animacoes.css";
import EmojisCaindo from "./EmojisCaindo";

export default function Contador({ avancar }) {
  const [tempo, setTempo] = useState(600); // 10 minutos

  const frases = [
    "Prepare seu coração... tem uma surpresa vindo 💖",
    "Cada segundo dessa espera vale a pena 🤍",
    "Estou preparando algo especial para você 🥹",
    "Obrigado por fazer parte da minha vida 💕",
    "Só mais um pouquinho... a surpresa está chegando ✨",
  ];

  const [frase, setFrase] = useState(frases[0]);

  useEffect(() => {
    const intervaloFrase = setInterval(() => {
      const novaFrase =
        frases[Math.floor(Math.random() * frases.length)];

      setFrase(novaFrase);
    }, 5000);

    return () => clearInterval(intervaloFrase);
  }, []);

  useEffect(() => {
    if (tempo <= 0) {
      avancar();
      return;
    }

    const intervalo = setTimeout(() => {
      setTempo(tempo - 1);
    }, 1000);

    return () => clearTimeout(intervalo);
  }, [tempo]);

  const minutos = Math.floor(tempo / 60);
  const segundos = tempo % 60;

  return (
    
    <div className="contador">
      <h1>Uma surpresa está chegando 💖</h1>

      <p>{frase}</p>

     <h2 className="tempo">
        {minutos}:{segundos.toString().padStart(2, "0")}
      </h2>

      <EmojisCaindo />

      <p>
        Espere só mais um pouco... fiz isso com muito carinho para você 🤍
      </p>
    </div>
  );
}