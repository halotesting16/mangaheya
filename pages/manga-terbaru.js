export default function MangaTerbaru() {
  return (
    <div style={styles.page}>
      <article style={styles.article}>
        <h1 style={styles.title}>
          📚 Manga Terbaru yang Sedang Populer di Tahun 2026
        </h1>

        <p style={styles.meta}>
          Dipublikasikan oleh Mangaheya Anime Hub
        </p>

        <p>
          Dunia manga terus berkembang dengan cepat, menghadirkan cerita baru
          yang semakin kreatif dan menarik. Banyak judul baru muncul setiap
          tahun dan berhasil menarik perhatian pembaca di seluruh dunia.
        </p>

        <p>
          Tidak hanya manga lama yang masih populer, tetapi juga banyak judul
          baru yang langsung viral karena cerita, karakter, dan ilustrasi yang
          kuat.
        </p>

        <h2>🔥 1. Kagurabachi</h2>

        <p>
          Kagurabachi menjadi salah satu manga yang paling banyak dibicarakan
          dalam beberapa waktu terakhir. Dengan tema aksi dan balas dendam,
          manga ini langsung menarik perhatian komunitas pembaca.
        </p>

        <h2>⚔️ 2. Sakamoto Days</h2>

        <p>
          Sakamoto Days menggabungkan aksi dan komedi dengan sangat baik.
          Ceritanya tentang mantan pembunuh bayaran yang mencoba hidup normal,
          tetapi masa lalunya terus menghantuinya.
        </p>

        <h2>💥 3. Chainsaw Man</h2>

        <p>
          :contentReference[oaicite:0]{index=0} tetap menjadi salah satu manga
          paling populer karena cerita yang gelap, brutal, dan penuh kejutan
          tidak terduga di setiap chapter.
        </p>

        <h2>🐉 4. Kaiju No. 8</h2>

        <p>
          Manga ini menceritakan dunia yang dipenuhi monster raksasa dan
          pasukan pertahanan manusia. Karakter utama memiliki kekuatan unik
          yang membuat cerita semakin menarik.
        </p>

        <h2>⚡ 5. Dandadan</h2>

        <p>
          Dandadan menjadi salah satu manga dengan pertumbuhan penggemar
          tercepat karena kombinasi antara supernatural, alien, dan humor
          yang unik.
        </p>

        <h2>📈 Mengapa Manga Baru Cepat Populer?</h2>

        <p>
          Salah satu alasan utama adalah akses yang lebih mudah melalui platform
          digital. Pembaca dapat langsung mengikuti chapter terbaru tanpa harus
          menunggu lama seperti dulu.
        </p>

        <p>
          Selain itu, banyak manga baru memiliki gaya visual modern dan cerita
          yang lebih cepat berkembang sehingga lebih menarik untuk generasi
          sekarang.
        </p>

        <div style={styles.box}>
          <h3>📖 Baca Lebih Banyak di Mangaheya</h3>

          <p>
            Jika kamu suka membaca manga terbaru, kamu bisa menemukan lebih
            banyak rekomendasi dan update cerita di Mangaheya.
          </p>

          <a
            href="https://mangaheya.net"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.button}
          >
            🚀 Kunjungi Mangaheya
          </a>

          <h3>📚 Artikel Terkait</h3>

          <ul>
            <li><a href="/anime-terbaik-2026" style={styles.link}>Anime Terbaik 2026</a></li>
            <li><a href="/anime-action-terbaik" style={styles.link}>Anime Action Terbaik</a></li>
            <li><a href="/anime-isekai-terbaik" style={styles.link}>Anime Isekai Terbaik</a></li>
            <li><a href="/anime-romance-sedih" style={styles.link}>Anime Romance Sedih</a></li>
          </ul>
        </div>
      </article>
    </div>
  );
}

const styles = {
  page: {
    background: "#0f172a",
    minHeight: "100vh",
    color: "#e2e8f0",
    padding: "50px 20px",
    fontFamily: "Arial, sans-serif"
  },

  article: {
    maxWidth: "850px",
    margin: "0 auto",
    lineHeight: "1.9"
  },

  title: {
    color: "#22c55e",
    fontSize: "42px",
    fontWeight: "800",
    marginBottom: "10px",
    lineHeight: "1.2"
  },

  meta: {
    color: "#94a3b8",
    marginBottom: "30px"
  },

  box: {
    marginTop: "40px",
    background: "#1e293b",
    padding: "20px",
    borderRadius: "12px"
  },

  button: {
    display: "inline-block",
    background: "#22c55e",
    color: "#0f172a",
    padding: "12px 20px",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "bold",
    marginBottom: "20px"
  },

  link: {
    color: "#60a5fa",
    textDecoration: "none"
  }
};
