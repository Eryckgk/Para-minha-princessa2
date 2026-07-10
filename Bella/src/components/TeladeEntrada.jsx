import { useState } from "react";
import Carta from "./Carta";

export default function TeladeEntrada() {
  const [mostrarCarta, setMostrarCarta] = useState(false);

  function handleClick() {
    setMostrarCarta(true);
  }

  if (mostrarCarta) {
    return <Carta />
  }

  return (
    <div>
      <h1>🎉 Feliz Aniversário, Princessa 💖</h1>

      <p>
        Hoje é o dia da pessoa mais especial da minha vida…
        A garota que mudou tudo pra melhor.
      </p>

      <p>
        Você é meu amor, minha felicidade, minha paz…
        Eu te amo mais do que qualquer coisa nesse mundo 💞
      </p>

      <p>
        Que Deus abençoe sua vida hoje e sempre,
        e que eu possa viver todos os próximos aniversários ao seu lado 💍
      </p>

      <h2>✨ Bella ✨</h2>

      <button onClick={handleClick}>
        Clique aqui, meu amor 💌
      </button>
    </div>
  );
}