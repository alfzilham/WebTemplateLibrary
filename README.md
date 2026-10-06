# Web Template Library

Kumpulan template website yang dikelompokkan berdasarkan visual style dan karakter desain. Repository ini disiapkan sebagai pustaka website yang dapat terus berkembang dengan project-project baru.

## Koleksi

```text
.templates/
├── brutalist-style/
│   └── rawframe-studio/
├── claymorphism-style/
├── glassmorphism-style/
└── minimalist-style/
```

Folder style dapat berisi satu atau lebih project website. Setiap project sebaiknya berdiri sendiri dan memiliki dokumentasi, asset, serta struktur source yang jelas.

## Style yang Tersedia

- **Brutalist** — grid tegas, border kontras, tipografi besar, dan komposisi editorial.
- **Claymorphism** — permukaan lembut, bentuk dimensional, dan visual yang playful.
- **Glassmorphism** — transparansi, blur, layering, dan efek kaca.
- **Minimalist** — whitespace, hirarki tipografi, dan elemen visual yang terukur.

## Konvensi Project

Gunakan nama folder dengan format kebab-case dan nama yang spesifik terhadap konsep project:

```text
<style>/<project-name>/
```

Contoh:

```text
brutalist-style/rawframe-studio/
minimalist-style/quiet-archive/
glassmorphism-style/lumen-dashboard/
```

Setiap project baru sebaiknya memiliki:

- `README.md` yang menjelaskan project dan cara menjalankannya;
- `LICENSE` jika project memiliki ketentuan penggunaan khusus;
- `index.html` atau entry point utama;
- folder asset yang tertata;
- dukungan responsive dan accessibility dasar.

## Menjalankan Project

Sebagian besar template dapat dibuka langsung melalui browser. Untuk menghindari kendala pada asset atau module, gunakan static server dari root repository:

```bash
python -m http.server 8000
```

Kemudian buka folder project yang ingin dilihat melalui `http://localhost:8000`.

## Status

Repository ini bersifat living library. Struktur, dokumentasi, dan koleksi style dapat berkembang seiring bertambahnya template.

## Lisensi

Seluruh isi repository ini dilindungi oleh lisensi **All Rights Reserved**. Lihat [LICENSE](LICENSE).
