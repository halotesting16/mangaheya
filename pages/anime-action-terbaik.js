export default function AnimeActionTerbaik() {
  return (
    <div style={styles.page}>
      <article style={styles.article}>
        <h1 style={styles.title}>
          ⚔️ Anime Action Terbaik dengan Pertarungan Paling Epik
        </h1>

        <p style={styles.meta}>
          Dipublikasikan oleh Mangaheya Anime Hub
        </p>

        <p>
          Anime action selalu menjadi genre favorit karena menghadirkan
          pertarungan intens, animasi berkualitas tinggi, serta karakter
          dengan perkembangan yang kuat. Genre ini terus berkembang dan
          menjadi salah satu alasan utama banyak orang mulai menonton anime.
        </p>

        <p>
          Dari pertarungan antar penyihir, manusia melawan monster, hingga
          perang skala besar, anime action selalu berhasil memberikan
          pengalaman menonton yang mendebarkan.
        </p>

        <h2>1. Jujutsu Kaisen</h2>

        <p>
          :contentReference[oaicite:0]{index=0} menjadi salah satu anime
          modern dengan kualitas animasi terbaik. Setiap pertarungan dibuat
          dengan detail tinggi dan efek visual yang sangat memukau.
        </p>

        <p>
          Selain aksi, anime ini juga memiliki karakter dengan latar belakang
          cerita yang kuat, terutama Gojo Satoru yang menjadi ikon utama
          seri ini.
        </p>

        <h2>2. Demon Slayer</h2>

        <p>
          :contentReference[oaicite:1]{index=1} dikenal karena kualitas
          animasi yang hampir seperti film layar lebar. Setiap arc
          pertarungan dibuat dengan visual yang sangat indah.
        </p>

        <p>
          Cerita Tanjiro dalam melawan iblis juga memiliki sisi emosional
          yang membuat anime ini tidak hanya fokus pada action saja.
        </p>

        <h2>3. Attack on Titan</h2>

        <p>
          :contentReference[oaicite:2]{index=2} menghadirkan pertarungan
          skala besar antara manusia dan titan. Cerita yang gelap dan penuh
          plot twist membuat anime ini sangat ikonik.
        </p>

        <p>
          Banyak penggemar menganggap anime ini sebagai salah satu anime
          terbaik sepanjang masa karena cerita dan eksekusinya.
        </p>

        <h2>4. Bleach</h2>

        <p>
          Bleach kembali populer dengan arc terbaru yang menampilkan
          pertarungan Bankai dengan kualitas animasi modern.
        </p>

        <p>
          Konflik antara Shinigami dan Quincy menjadi salah satu bagian
          paling menarik dalam seri ini.
        </p>

        <h2>5. Solo Leveling</h2>

        <p>
          :contentReference[oaicite:3]{index=3} menghadirkan sistem leveling
          yang membuat karakter utama semakin kuat dari waktu ke waktu.
        </p>

        <p>
          Transformasi Sung Jin-Woo dari hunter terlemah menjadi karakter
          overpower menjadi daya tarik utama anime ini.
        </p>

        <div style={styles.box}>
          <h3>📖 Rekomendasi Lanjutan</h3>

          <p>
            Jika kamu menyukai anime action seperti di atas, kamu juga bisa
            membaca rekomendasi anime lainnya atau versi manga yang memiliki
            cerita lebih detail.
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
            <li><a href="/anime-isekai-terbaik" style={styles.link}>Anime Isekai Terbaik</a></li>
            <li><a href="/anime-romance-sedih" style={styles.link}>Anime Romance Sedih</a></li>
            <li><a href="/manga-terbaru" style={styles.link}>Manga Terbaru</a></li>
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
    color: "#ef4444",
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
    background: "#ef4444",
    color: "#fff",
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
