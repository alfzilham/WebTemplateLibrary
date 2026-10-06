# Rawframe Studio

Landing page untuk creative studio dengan pendekatan visual editorial brutalist: tipografi besar, grid tegas, border kontras, dan interaksi yang terukur.

## Teknologi

- HTML5 semantik
- CSS3 tanpa framework
- Vanilla JavaScript
- Lenis untuk smooth scrolling
- AOS untuk entrance animation
- Bootstrap Icons

Tidak diperlukan proses build atau dependency lokal. Halaman dapat dijalankan langsung di browser atau melalui static server.

## Struktur

```text
rawframe-studio/
├── index.html
├── assets/
│   ├── css/
│   │   ├── variable.css
│   │   ├── global.css
│   │   ├── components.css
│   │   └── responsive.css
│   └── js/
│       └── main.js
└── docs/
```

## Menjalankan

Buka `index.html` secara langsung, atau gunakan static server sederhana:

```bash
python -m http.server 8000
```

Kemudian buka `http://localhost:8000`.

## Catatan

- Library eksternal dimuat melalui CDN.
- Fitur inti tetap menggunakan HTML, CSS, dan JavaScript vanilla.
- Dukungan `prefers-reduced-motion` disediakan untuk pengguna yang mengurangi animasi.

## Lisensi

Proyek ini bersifat **All Rights Reserved**. Lihat [LICENSE](LICENSE).
