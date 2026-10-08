# Orange Ledger

Landing page fintech dengan pendekatan editorial neo-brutalist: kontras hitam-putih yang kuat, aksen oranye terang, tipografi oversized, kartu metrik modular, dan komposisi financial card yang berani.

## Teknologi

- HTML5 semantik
- CSS3 inline tanpa framework
- Vanilla JavaScript inline
- AOS untuk reveal animation
- Lenis untuk smooth scrolling
- Bootstrap Icons
- Canvas illustration untuk visual kartu dan monitoring

Tidak diperlukan proses build atau dependency lokal. Halaman dapat dibuka langsung melalui browser atau static server.

## Struktur

```text
orange-ledger/
├── index.html
├── ARCHITECTURE.md
├── DESIGN.md
├── SPEC.md
└── README.md
```

## Menjalankan

Buka `index.html` secara langsung, atau jalankan:

```bash
python -m http.server 8000
```

Kemudian buka `http://localhost:8000/brutalist-style/orange-ledger/` dari root repository.

## Catatan

- Library dan icon dimuat melalui CDN dengan versi yang dipin.
- Fitur inti tetap berjalan menggunakan HTML, CSS, dan JavaScript vanilla.
- Animasi dinonaktifkan atau dikurangi saat `prefers-reduced-motion` aktif.

## Lisensi

Proyek ini bersifat **All Rights Reserved**. Lihat [LICENSE](LICENSE).
