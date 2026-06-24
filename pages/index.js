export default function Home() {
  return (
    <div style={styles.body}>
      <div style={styles.container}>

        <h1 style={styles.title}>🎌 Mangaheya Anime Hub</h1>

        <p style={styles.subtitle}>
          Temukan rekomendasi anime, review, dan manga terbaik
          dengan desain modern seperti anime database site.
        </p>

        <div style={styles.card}>
          <h2>🔥 Anime & Manga Populer</h2>

          <ul style={styles.list}>
            <li><a href="/anime-terbaik-2026">Anime Terbaik 2026</a></li>
            <li><a href="/anime-isekai-terbaik">Anime Isekai Terbaik</a></li>
            <li><a href="/anime-action-terbaik">Anime Action Terbaik</a></li>
            <li><a href="/anime-romance-sedih">Anime Romance Sedih</a></li>
            <li><a href="/manga-terbaru">Manga Terbaru</a></li>
          </ul>
        </div>

        <p style={styles.footer}>
          © 2026 Mangaheya • Anime Recommendation Platform
        </p>

      </div>
    </div>
  );
}

const styles = {
  body: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "radial-gradient(circle at top, #1e293b, #0f172a)",
    fontFamily: "Arial",
    color: "#fff",
    padding: "20px"
  },

  container: {
    textAlign: "center",
    maxWidth: "650px"
  },

  title: {
    fontSize: "38px",
    color: "#38bdf8",
    marginBottom: "10px"
  },

  subtitle: {
    fontSize: "15px",
    opacity: 0.8,
    marginBottom: "25px"
  },

  card: {
    background: "rgba(255,255,255,0.05)",
    padding: "20px",
    borderRadius: "16px",
    border: "1px solid rgba(255,255,255,0.1)",
    backdropFilter: "blur(12px)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.4)"
  },

  list: {
    listStyle: "none",
    padding: 0,
    lineHeight: "2"
  },

  footer: {
    marginTop: "20px",
    fontSize: "12px",
    opacity: 0.5
  }
};
