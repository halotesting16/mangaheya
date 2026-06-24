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
            <p> Salah satu alasan mengapa Jujutsu Kaisen terus populer adalah 
            keseimbangan antara pertarungan, karakter, dan komedi. 
              Pertarungan antar penyihir terasa dinamis, sementara karakter seperti Gojo Satoru dan Yuji Itadori 
              memiliki perkembangan yang membuat penonton terus mengikuti ceritanya. </p>
          <li>Demon Slayer</li>
                <p> Banyak anime memiliki cerita bagus, tetapi Demon Slayer berhasil mencuri perhatian berkat kualitas visualnya. Setiap pertarungan terasa seperti film layar lebar. Jika kamu menyukai cerita tentang keluarga, pengorbanan, dan perjalanan karakter utama menjadi lebih kuat, anime ini masih sangat layak ditonton. </p>
          <li>Solo Leveling</li>
                <p> Adaptasi anime dari webtoon populer ini menjadi salah satu pembicaraan terbesar dalam beberapa tahun terakhir. Perjalanan Sung Jin-Woo dari hunter terlemah menjadi karakter yang sangat kuat membuat banyak penonton sulit berhenti menonton.</p>
          <li>Black Clover</li>
                <p> Meski sempat diremehkan pada awal penayangannya, Black Clover berkembang menjadi salah satu anime shounen yang memiliki fanbase setia. Hubungan antara Asta dan Yuno menjadi salah satu daya tarik utama serial ini.</p>
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
