# Business Alliance

Landing page untuk layanan commercial real estate dengan pendekatan clean architectural editorial: layout lapang, fotografi properti yang dominan, tipografi restrained, katalog modular, dan pengalaman B2B yang terpercaya.

## Teknologi

- HTML5 semantik
- CSS3 tanpa framework
- Vanilla JavaScript
- AOS untuk reveal animation
- Lenis untuk smooth scrolling
- Bootstrap Icons

Tidak diperlukan proses build atau dependency lokal. Halaman dapat dibuka langsung melalui browser atau static server.

## Struktur

```text
business-alliance/
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

Kemudian buka `http://localhost:8000/clean-style/business-alliance/` dari root repository.

## Catatan

- Foto, icon, font, dan library enhancement dimuat melalui CDN dengan versi yang dipin.
- Fitur inti tetap menggunakan HTML, CSS, dan JavaScript vanilla.
- Dukungan responsive, keyboard navigation, dan `prefers-reduced-motion` disediakan.

## Lisensi

Proyek ini bersifat **All Rights Reserved**. Lihat [LICENSE](LICENSE).
