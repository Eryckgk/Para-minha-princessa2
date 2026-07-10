export default function EmojisCaindo() {
  const emojis = [
    "💖",
    "🤍",
    "✨",
    "🥹",
    "💕",
    "🌸",
    "🦋"
  ];

  return (
    <div className="emojis">
      {Array.from({ length: 30 }).map((_, index) => (
        <span key={index}>
          {emojis[Math.floor(Math.random() * emojis.length)]}
        </span>
      ))}
    </div>
  );
}