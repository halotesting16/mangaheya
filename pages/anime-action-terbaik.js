export default function AnimeActionTerbaik() {
  const animeList = [
    "Jujutsu Kaisen",
    "Demon Slayer",
    "Attack on Titan",
    "Bleach",
    "Solo Leveling"
  ];

  return (
    <div style={{ padding: 20, color: "white", background: "#0f172a" }}>
      <h1>Anime Action Terbaik</h1>

      {animeList.map((anime, index) => (
        <div key={index} style={{ marginBottom: 10 }}>
          ⚔️ {anime}
        </div>
      ))}
    </div>
  );
}
