<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profil Pribadi - Alex Tama</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <header>
        <h2>Portofolio Pribadi</h2>
    </header>

    <div class="container">
        <div class="profile-card">
            <h1>Alex Tama</h1>
            <p>Web Developer & Mahasiswa</p>
        </div>

        <h3 class="section-title">Tentang Saya</h3>
        <p>Halo! Saya seorang developer pemula yang berfokus pada pengembangan front-end web. Saya senang memecahkan masalah lewat baris kode dan selalu tertarik mempelajari teknologi baru.</p>

        <h3 class="section-title">Keahlian (Dibuat via Looping JS)</h3>
        <div class="skills-container" id="skill-list"></div>

        <h3 class="section-title">Simulasi Nilai Proyek (Fitur JS If-Else)</h3>
        <div class="interactive-box">
            <p>Masukkan nilai proyek web kamu (0-100) untuk cek status kelulusan standar:</p>
            <input type="number" id="inputNilai" placeholder="Contoh: 80">
            <button id="btnCek">Cek Status</button>
            <p id="hasilCek"></p>
        </div>
    </div>

    <footer>
        <p>&copy; 2026 Alex Tama. Dibuat dengan HTML, CSS, & JS Terpisah.</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>