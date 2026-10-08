# Repository Workflow

Dokumen ini menjadi acuan kerja untuk menambahkan atau menata project website di repository WebTemplateLibrary.

## Scope dan Konfirmasi

- Kerjakan hanya pada path project yang disebutkan user.
- Jangan menyentuh project, folder, atau file lain yang tidak termasuk scope.
- Jika user meminta konfirmasi terlebih dahulu, jangan menjalankan command perubahan sebelum konfirmasi diberikan.
- Pertahankan perubahan user yang sudah ada.

## Sumber Project dari Downloads

Jika user menyediakan source project di `C:/Users/LENOVO/Downloads/`:

1. Cari file `.html` dan tiga dokumentasi yang disediakan.
2. Pindahkan file ke folder project target, bukan menyalin project ke lokasi lain tanpa alasan.
3. Gunakan nama project yang konsisten, biasanya `index.html`, `ARCHITECTURE.md`, `DESIGN.md`, dan `SPEC.md`.
4. Pastikan file sumber sudah berada di target sebelum melanjutkan refactor.

## Struktur Project Standar

Setiap project website harus mengikuti struktur berikut:

```text
<style>/<project>/
├── index.html
├── assets/
│   ├── css/
│   │   ├── components.css
│   │   ├── global.css
│   │   ├── variable.css
│   │   └── responsive.css
│   └── js/
│       └── main.js
├── docs/
│   ├── ARCHITECTURE.md
│   ├── DESIGN.md
│   └── SPEC.md
├── README.md
├── LICENSE
├── .gitignore
└── .gitattributes
```

## Frontend Refactor

- CSS inline di `index.html` harus dipisahkan ke empat file CSS:
  - `variable.css`: design tokens, warna, typography tokens, dan variable global.
  - `global.css`: reset, base element, accessibility utility, dan global layout utility.
  - `components.css`: navbar, hero, cards, sections, footer, dan komponen UI.
  - `responsive.css`: media query, breakpoint, dan reduced-motion behavior.
- JavaScript inline harus dipindahkan ke `assets/js/main.js`.
- Perbarui referensi CSS dan JavaScript di `index.html` setelah pemisahan.
- Pertahankan tampilan, fungsi interaksi, responsive layout, dan accessibility.
- Gunakan dependency CDN dengan versi yang dipin, bukan `@latest`, jika dependency eksternal diperlukan.
- Sediakan fallback untuk enhancement eksternal dan hormati `prefers-reduced-motion`.
- Jangan memasukkan screenshot referensi sebagai pengganti implementasi HTML/CSS.

## File Project

- `README.md` harus menjelaskan style, teknologi, struktur, cara menjalankan, dan lisensi.
- `LICENSE` mengikuti kebijakan project yang berlaku.
- `.gitignore` dan `.gitattributes` harus tersedia di setiap project mandiri.
- Dokumentasi project harus berada di `docs/`, bukan di root project.
- Jika root `README.md` perlu diperbarui untuk daftar project, ubah hanya bagian yang relevan.

## Validasi

Sebelum commit:

1. Pastikan semua path asset di `index.html` benar dan file target benar-benar ada.
2. Jalankan `node --check` pada `assets/js/main.js` jika file JavaScript tersedia.
3. Jalankan `git diff --check`.
4. Periksa struktur dengan `git status --short` dan pastikan tidak ada file di luar scope.
5. Pastikan CSS terbagi sesuai tanggung jawab dan tidak ada blok CSS/JavaScript inline yang tertinggal tanpa alasan.

## Branch, Commit, Push, dan Pull Request

1. Ambil update terbaru dari remote sebelum membuat branch:

   ```bash
   git fetch origin master
   git switch master
   git pull --ff-only origin master
   ```

2. Buat branch khusus project, misalnya:

   ```bash
   git switch -c feature/<project-name>
   ```

3. Jangan gunakan `git add .`.
4. Gunakan staging path eksplisit.
5. Buat satu commit per file agar mudah direview. Untuk rename atau perpindahan file, stage source dan destination dalam commit file tersebut.
6. Gunakan commit message Conventional Commits yang menjelaskan file atau tanggung jawabnya.
7. Verifikasi `git status --short`, `git log --oneline --decorate`, dan `git diff --stat master..HEAD`.
8. Push branch project:

   ```bash
   git push -u origin feature/<project-name>
   ```

9. Buat Pull Request ke `master` dengan ringkasan perubahan, catatan review, dan hasil validasi.
10. Pastikan working tree bersih setelah push.

## Root README dan Master

- Perubahan project website dikirim melalui branch dan Pull Request.
- Perubahan root `README.md` boleh di-push langsung ke `master` hanya jika user memintanya secara eksplisit.
- Sebelum push langsung ke `master`, pastikan branch lokal sudah diselaraskan dengan `origin/master` dan jangan gunakan force push.

## Staging Safety

- Jangan menambahkan project lain ke task yang tidak menargetkannya.
- Selalu verifikasi daftar file staged sebelum commit.
- Jika remote sudah memiliki commit baru, lakukan fetch dan fast-forward/rebase yang aman sebelum push.
