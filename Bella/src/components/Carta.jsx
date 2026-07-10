import "../css/carta.css";
import "../css/animacoes.css";

import EmojisCaindo from "./EmojisCaindo";

export default function Carta({ avancar }) {
  return (
    <div className="carta fade-in">

      <EmojisCaindo />

      <div className="papel-carta">

        <h1>
          💌 Para minha princesa 💌
        </h1>

        <h1>
          FELIZZZZZ ANIVERSÁRIOOOOOO MINHA PRINCESAAAAA!!!! 🥳🥳🥳💖💖💖
        </h1>

        <p>
          Minha princesaaaa, meu amor, meu amorzinho, minha linda!!! 🥹🤍🤍🤍
        </p>

        <p>
          Hoje é o seu diaaaaa!!! O dia da pessoa que Deus colocou no mundo
          e que se tornou alguém tão especial pra mim. 😭😭💖💖💖
        </p>

        <p>
          Eu queria conseguir explicar o tamanho do carinho que eu sinto por
          você, mas parece que nenhuma palavra consegue chegar perto do que
          você significa pra mim. 🥺🤍✨
        </p>

        <p>
          Minha pequenaaaa, obrigado por existir!!! 😭😭🤍🤍
          Obrigado pelos momentos, pelas conversas, pelas risadas, pelo
          carinho e por fazer meus dias muito mais felizes. 🥹💖💖💖
        </p>

        <p>
          Você é uma pessoa incrível, princesa. Seu jeito, seu sorriso, sua
          personalidade e até suas pequenas manias fazem você ser única. 😝🤍
        </p>

        <p>
          Quero que você nunca esqueça o quanto você é importante, linda.
          Você merece tudo de mais bonito nesse mundo inteiro!!! 🥳💖✨
        </p>

        <p>
          Eu espero que seu dia seja perfeitoooo, cheio de felicidade,
          sorrisos, amor e momentos inesquecíveis!!! 😍😍😍🤍🤍🤍
        </p>

        <p>
          Que Deus continue cuidando de você, iluminando seus caminhos,
          realizando seus sonhos e protegendo esse coraçãozinho lindo que
          você tem. 🙏🤍✨
        </p>

        <h2>
          EU TE AMOOOOOO MUITOOOOO MINHA PRINCESAAAAA!!!! 😭😭😭🤍🤍🤍💖💖💖
        </h2>

        <p>
          Aproveita muito seu dia, viu?!? 🥳🥳🥳
          Nunca esquece que você é uma pessoa muito especial pra mim. 🥹🤍
        </p>

        <p>
          Feliz aniversário, meu amorzinho!!! 😝💖💖💖
          Espero que essa surpresa consiga mostrar pelo menos um pouquinho
          do carinho enorme que eu tenho por você. 🥺🤍✨
        </p>

        <button onClick={avancar}>
          Continuar a surpresaaaa 😭💖
        </button>

      </div>

    </div>
  )
}