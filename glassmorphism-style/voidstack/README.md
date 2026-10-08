# Voidstack

Landing page untuk platform modular compute dan AI infrastructure dengan pendekatan dark-futuristic glassmorphism: permukaan hitam berlapis, panel translucent, glow monokrom, visual node-based, dan bahasa interface yang teknis.

## Teknologi

- HTML5 semantik
- CSS3 tanpa framework
- Vanilla JavaScript
- AOS untuk reveal animation
- Lenis untuk smooth scrolling
- Bootstrap Icons
- Hairline-inspired visual treatment

Tidak diperlukan proses build atau dependency lokal. Halaman dapat dibuka langsung melalui browser atau static server.

## Struktur

```text
voidstack/
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

Kemudian buka `http://localhost:8000/glassmorphism-style/voidstack/` dari root repository.

## Catatan

- Library dan icon dimuat melalui CDN dengan versi yang dipin.
- Fitur inti tetap menggunakan HTML, CSS, dan JavaScript vanilla.
- Animasi dan efek visual menghormati `prefers-reduced-motion`.

## Lisensi

Proyek ini bersifat **All Rights Reserved**. Lihat [LICENSE](LICENSE).
