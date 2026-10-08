# Noir Atelier

Landing page untuk studio arsitektur kontemporer dengan pendekatan dark editorial minimalism: fotografi arsitektur yang dominan, ruang gelap yang tenang, tipografi besar, grid presisi, dan detail interaksi yang halus.

## Teknologi

- HTML5 semantik
- CSS3 tanpa framework
- Vanilla JavaScript
- AOS untuk reveal animation
- Lenis untuk smooth scrolling
- Bootstrap Icons
- Hairline enhancement dengan static SVG fallback

Tidak diperlukan proses build atau dependency lokal. Halaman dapat dibuka langsung melalui browser atau static server.

## Struktur

```text
noir-atelier/
├── index.html
├── assets/
│   ├── css/
│   │   ├── components.css
│   │   ├── global.css
│   │   ├── variable.css
│   │   └── responsive.css
│   └── js/
│       └── main.js
└── docs/
    ├── ARCHITECTURE.md
    ├── DESIGN.md
    └── SPEC.md
```

## Menjalankan

Buka `index.html` secara langsung, atau jalankan:

```bash
python -m http.server 8000
```

Kemudian buka `http://localhost:8000/minimalist-style/noir-atelier/` dari root repository.

## Catatan

- Foto, icon, font, dan library enhancement dimuat melalui CDN dengan versi yang dipin.
- Fitur inti tetap menggunakan HTML, CSS, dan JavaScript vanilla.
- Animasi menghormati `prefers-reduced-motion` dan Hairline memiliki fallback statis.

## Lisensi

Proyek ini bersifat **All Rights Reserved**. Lihat [LICENSE](LICENSE).
