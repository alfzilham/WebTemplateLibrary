# Lawncare Studio

Landing page untuk layanan lawn care dan property maintenance dengan pendekatan clean-premium: whitespace lapang, tipografi editorial, palet hijau alami, foto landscape, dan CTA lime yang terukur.

## Teknologi

- HTML5 semantik
- CSS3 tanpa framework
- Vanilla JavaScript
- AOS untuk reveal animation
- Lenis untuk smooth scrolling
- Bootstrap Icons
- Hairline visual enhancement dengan graceful fallback

Tidak diperlukan proses build atau dependency lokal. Halaman dapat dibuka langsung melalui browser atau static server.

## Struktur

```text
lawncare-studio/
├── index.html
├── assets/
│   ├── css/
│   │   └── styles.css
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

Kemudian buka `http://localhost:8000/clean-style/lawncare-studio/` dari root repository.

## Catatan

- Foto, icon, font, dan library enhancement dimuat melalui CDN.
- Fitur inti tetap menggunakan HTML, CSS, dan JavaScript vanilla.
- Fallback visual dan dukungan `prefers-reduced-motion` disediakan untuk kondisi tanpa enhancement eksternal.

## Lisensi

Proyek ini bersifat **All Rights Reserved**. Lihat [LICENSE](LICENSE).
