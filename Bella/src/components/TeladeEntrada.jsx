import "../css/teladeinicil.css";
import "../css/animacoes.css";
import EmojisCaindo from "./EmojisCaindo";

export default function TeladeEntrada({ avancar }) {
  return (
    <div className="tela-inicial zoom-in">

      <EmojisCaindo />

      <h1>
        Oiiiii, minha princesa!!! 🥹💖
      </h1>

      <p className="mensagem">
        Eu preparei uma coisinha especial para você...
        🤍✨
      </p>

      <p className="mensagem">
        Antes de continuar, quero que você saiba:
        você é muito importante para mim. 💕
      </p>

      <button 
        className="botao-surpresa"
        onClick={avancar}
      >
        Abrir minha surpresa 💖
      </button>

    </div>
  );
}