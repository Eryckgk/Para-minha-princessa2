
import musica from "../assets2/musica.mp3";
import foto from "../assets2/foto-dela.jpg";

import "../css/surprezafinal.css";
import "../css/animacoes.css";

import EmojisCaindo from "./EmojisCaindo";
import Digitacao from "./Digitacao";
import { useEffect, useState, useRef } from "react";


export default function SurprezaFinal() {

  const frases = [
    "Antes de tudo... eu quero que você saiba uma coisa 🥹🤍",
    "Você é uma das pessoas mais especiais que já apareceu na minha vida 💖",
    "Cada momento com você se tornou uma lembrança que eu quero guardar para sempre ✨",
    "Seu sorriso consegue deixar meus dias muito melhores 😭🤍",
    "Eu sou muito feliz por ter você na minha vida 🥺💖",
    "Obrigado por ser essa pessoa incrível, minha princesa 🤍",
    "Nunca esqueça o quanto você é importante para mim 💕",
    "Você merece todo amor, carinho e felicidade desse mundo 🌎💖",
    "Eu espero estar presente em muitos momentos especiais da sua vida 🥹",
    "Eu te amo muito, minha princesa 🤍✨"
  ];

  const [tocando, setTocando] = useState(false);
  const [fraseAtual, setFraseAtual] = useState(0);

  const audioRef = useRef(null);
  

  useEffect(() => {

    const intervalo = setInterval(() => {

      setFraseAtual((anterior) => {

        if (anterior < frases.length - 1) {
          return anterior + 1;
        }

        return anterior;

      });

    }, 4000);


    return () => clearInterval(intervalo);

  }, []);


  return (

    <div className="surpresa-final fade-in">

      <EmojisCaindo />


     <audio 
      ref={audioRef}
      src={musica}
       loop
    />

      {!tocando && (

      <button
       className="botao-musica"
       onClick={() => {

      audioRef.current.play();

      setTocando(true);

     }}
    >
    🎵 Tocar nossa música 🤍
    </button>

     )}


      <h1>
        Para você, minha princesa 💖
      </h1>


      <img
        className="foto-princesa"
        src={foto}
        alt="Minha princesa"
      />


      <p className="frase" key={fraseAtual}>
        <Digitacao texto={frases[fraseAtual]} />
      </p>



      {fraseAtual === frases.length - 1 && (

        <div className="dedicatoria abrir">

          <h2>
            Uma mensagem para guardar 🤍
          </h2>


          <p>
            Minha princesa, nunca esqueça o quanto você é especial.
            Obrigado por cada sorriso, cada conversa, cada call nossa
            kskssksk 😂🤍 e cada momento.
          </p>


          <p>
            Que Deus continue cuidando de você e realizando todos os
            seus sonhos. 🤍✨
          </p>


          <p>
            Feliz aniversário, meu amorzinho!!! 🥳💖
            Eu te amo muito!!! 🤍😭
          </p>


        </div>

      )}

    </div>

  );
}