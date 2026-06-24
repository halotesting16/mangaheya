export default function Page() {
  return (
    <div style={styles.body}>
      <div style={styles.container}>

        <h1>Anime Terbaik 2026 Wajib Ditonton</h1>

        <p>
          Tahun 2026 menghadirkan banyak anime berkualitas tinggi dengan
          visual modern dan cerita yang semakin matang. Industri anime
          terus berkembang dengan genre yang semakin luas.
        </p>

        <p>
          Beberapa anime yang paling banyak dibicarakan tahun ini adalah
          Jujutsu Kaisen, Demon Slayer, Solo Leveling, dan Black Clover.
          Masing-masing memiliki gaya cerita yang berbeda namun tetap
          menarik untuk ditonton.
        </p>

        <ul>
          <li>Jujutsu Kaisen</li>
          <li>Demon Slayer</li>
          <li>Solo Leveling</li>
          <li>Black Clover</li>
        </ul>

        <p>
          Jika kamu suka membaca versi manga, kamu bisa menemukan
          pembahasan lebih lengkap di Mangaheya.
        </p>

        <a href="https://mangaheya.net">➡ Kunjungi Mangaheya</a>

      </div>
    </div>
  );
}

const styles = {
  body: {
    minHeight: "100vh",
    background: "#0f172a",
    color: "white",
    display: "flex",
    justifyContent: "center",
    padding: "40px",
    fontFamily: "Arial"
  },

  container: {
    maxWidth: "700px",
    lineHeight: "1.8"
  }
};
