export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Mangaheya - Anime & Manga Hub</h1>

      <p>
        Mangaheya adalah website rekomendasi anime dan manga yang
        membahas berbagai genre seperti action, isekai, romance, dan
        fantasy. Semua artikel disusun untuk membantu pembaca menemukan
        anime terbaik sesuai selera.
      </p>

      <h2>Artikel Populer</h2>

      <ul>
        <li><a href="/anime-terbaik-2026">Anime Terbaik 2026</a></li>
        <li><a href="/anime-isekai-terbaik">Anime Isekai Terbaik</a></li>
        <li><a href="/anime-action-terbaik">Anime Action Terbaik</a></li>
        <li><a href="/anime-romance-sedih">Anime Romance Sedih</a></li>
        <li><a href="/manga-terbaru">Manga Terbaru</a></li>
      </ul>

      <hr />

      <p>
        Baca manga lengkap di{" "}
        <a href="https://mangaheya.net" target="_blank">
          Mangaheya
        </a>
      </p>
    </div>
  );
}
