import { useEffect, useState } from "react";

export default function Digitacao({ texto }) {
  const [textoAtual, setTextoAtual] = useState("");

  useEffect(() => {
    let i = 0;

    setTextoAtual("");

    const intervalo = setInterval(() => {
      setTextoAtual(texto.substring(0, i));

      i++;

      if (i > texto.length) {
        clearInterval(intervalo);
      }
    }, 40);

    return () => clearInterval(intervalo);
  }, [texto]);

  return <p>{textoAtual}</p>;
}