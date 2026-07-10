import { useEffect, useState } from "react";

export default function SurprezaFinal() {
  const frases = [
    "Você é a pessoa mais incrível que existe 💖",
    "Seu sorriso ilumina tudo ao seu redor ✨",
    "Eu sou a pessoa mais sortuda por ter você 💞",
    "Você é meu sonho realizado 💭",
    "Nada no mundo se compara a você 🌍",
    "Você é perfeita do seu jeitinho 💕",
    "Minha vida ficou mais bonita com você 🌸",
    "Eu te amo mais do que tudo ❤️",
    "Mas que tchutchuzinho é esse em!!!"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndex((prev) => (prev + 1) % frases.length);
    }, 3000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div>
      <h1>💖 Pra você, minha Princessa 💖</h1>

      {/* 🎵 MP4 rodando como áudio */}
      <video autoPlay loop>
        <source src="/musica.mp4" type="video/mp4" />
      </video>

      <p key={index}>
        {frases[index]}
      </p>
    </div>
  );
}