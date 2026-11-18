# todo-kelompok-3

# TaskFlow — Simple Task Management

Proyek praktikum Rekayasa Perangkat Lunak (RPL) — Kelompok 3.

## 1. Deskripsi singkat

TaskFlow adalah aplikasi To-Do List sederhana yang berjalan langsung di browser. Pengguna dapat menulis tugas, menandainya selesai, menghapusnya, dan melihat jumlah tugas yang ada.

## 2. Tujuan pembuatan proyek

- Berlatih alur kerja tim dengan metode Scrum.
- Berlatih Git dan GitHub: branch per User Story, commit, dan Pull Request.
- Berlatih membuat aplikasi web dasar dengan HTML, CSS, dan JavaScript.

## 3. Teknologi yang digunakan

- HTML5
- CSS3
- JavaScript murni (Vanilla JavaScript)

Tanpa framework, tanpa backend, tanpa database, dan tanpa instalasi tambahan.

## 4. Fitur aplikasi

- Menambah tugas (tombol **Tambah tugas** atau tekan Enter).
- Input kosong atau hanya spasi ditolak.
- Klik tugas untuk menandai selesai (teks dicoret, class `completed`). Klik lagi untuk membatalkan.
- Klik dua kali pada tugas untuk menghapusnya.
- Jumlah tugas diperbarui otomatis memakai `MutationObserver`.
- Tampilan responsif untuk laptop, tablet, dan HP.

## 5. Struktur folder

```
todo-kelompok-3/
├── index.html   # US-1: struktur halaman
├── style.css    # US-3: tampilan
├── script.js    # US-2: tambah tugas & tandai selesai
├── hapus.js     # US-5: hapus tugas (double-click)
├── hitung.js    # US-6: hitung jumlah tugas (MutationObserver)
└── README.md    # US-4: dokumentasi
```

## 6. Cara menjalankan aplikasi

1. Unduh atau clone proyek ini.
2. Buka folder `todo-kelompok-3`.
3. Klik dua kali `index.html` (atau buka lewat browser). Tidak perlu instalasi apa pun.

## 7. Cara menggunakan aplikasi

1. Ketik tugas di kolom input, lalu klik **Tambah tugas** atau tekan Enter.
2. Klik sebuah tugas untuk menandainya selesai.
3. Klik dua kali sebuah tugas untuk menghapusnya.
4. Lihat jumlah seluruh tugas (selesai maupun belum) di bagian **Jumlah tugas**.

## 8. Pembagian anggota dan peran

| Anggota | Nama | Peran | User Story |
|---|---|---|---|
| Anggota 1 | Rismawati          | Product Owner | US-4 (README)    |
| Anggota 2 | Muhammad Fajar     | Scrum Master  | US-1 (index.html)|
| Anggota 3 | Afra Naila Arkarna | Developer 1   | US-2 (script.js) |
| Anggota 4 | Muh Azriel Fabian  | Developer 2   | US-3 (style.css) |
| Anggota 5 | Padia              | Developer 3   | US-5 (hapus.js) dan US-6 (hitung.js) |

## 9. Branch dan User Story

Setiap User Story dikerjakan di branch sendiri, lalu digabung ke `main` lewat Pull Request. Tidak ada yang bekerja langsung di `main`.

| Branch | User Story | File | Penanggung jawab |
|---|---|---|---|
| `fitur/us-1-halaman` | US-1 Struktur halaman | `index.html` | Anggota 2 |
| `fitur/us-2-tambah-tugas` | US-2 Tambah & selesaikan tugas | `script.js` | Anggota 3 |
| `fitur/us-3-tampilan` | US-3 Tampilan | `style.css` | Anggota 4 |
| `fitur/us-4-readme` | US-4 Dokumentasi | `README.md` | Anggota 1 |
| `fitur/us-5-hapus-tugas` | US-5 Hapus tugas | `hapus.js` | Anggota 5 |
| `fitur/us-6-jumlah-tugas` | US-6 Jumlah tugas | `hitung.js` | Anggota 5 |

Anggota 5 memakai dua branch dan dua Pull Request yang terpisah.

Urutan penggabungan yang disarankan: US-1 lebih dulu (kerangka halaman), lalu US-2, US-3, US-5, US-6, dan US-4 kapan saja. Setiap file JavaScript dibuat berdiri sendiri (memiliki variabel sendiri), sehingga branch dapat dikerjakan tanpa saling menunggu.

## 10. Panduan Git dasar

Ganti `<URL-REPOSITORY>` dengan alamat repository kelompok.

```bash
# Clone repository
git clone <URL-REPOSITORY>
cd todo-kelompok-3

# Ambil perubahan terbaru dari main sebelum membuat branch
git checkout main
git pull origin main

# Buat branch baru dan pindah ke branch tersebut (contoh: US-5)
git checkout -b fitur/us-5-hapus-tugas

# Cek file yang berubah, lalu tambahkan ke staging
git status
git add hapus.js

# Commit
git commit -m "Tambah fitur hapus tugas dengan double-click (US-5)"

# Push branch ke GitHub
git push origin fitur/us-5-hapus-tugas

# Pull perubahan terbaru dari main ke branch kerja (bila main sudah berubah)
git pull origin main
```

### Membuat Pull Request di GitHub

1. Buka repository di GitHub, lalu klik tombol **Compare & pull request** untuk branch yang baru di-push (atau tab **Pull requests** → **New pull request**).
2. Pilih base `main` dan compare branch fitur Anda.
3. Isi judul dan deskripsi singkat (User Story yang dikerjakan dan hasilnya).
4. Pilih reviewer dari anggota lain, lalu klik **Create pull request**.
5. Setelah disetujui, klik **Merge pull request**. Anggota lain menjalankan `git pull origin main` untuk mengambil hasil terbaru.

## 11. Hasil pengujian

Pengujian dilakukan secara nyata menggunakan browser Chromium otomatis (Playwright) pada layar laptop (1280 px) dan HP (375 px), membuka `index.html` langsung dari file.

| No | Pengujian | Hasil |
|---|---|---|
| 1 | Halaman HTML dapat dibuka | Lulus |
| 2 | CSS berhasil dimuat | Lulus |
| 3 | Seluruh file JavaScript berhasil dimuat | Lulus |
| 4 | Pengguna dapat menambahkan tugas | Lulus |
| 5 | Input kosong ditolak | Lulus |
| 6 | Tugas dapat ditandai selesai dengan klik | Lulus |
| 7 | Tugas selesai memiliki garis coret | Lulus |
| 8 | Tugas dapat dihapus dengan double-click | Lulus |
| 9 | Jumlah tugas bertambah otomatis | Lulus |
| 10 | Jumlah tugas berkurang otomatis saat tugas dihapus | Lulus |
| 11 | Jumlah tetap benar setelah beberapa kali tambah dan hapus | Lulus |
| 12 | Tampilan tidak rusak pada layar HP | Lulus |
| 13 | Tidak ada error JavaScript | Lulus |

Pemeriksaan tambahan yang juga lulus: jumlah awal 0, teks HTML (misalnya `<b>`) tampil apa adanya, status selesai tugas lain tidak terganggu saat satu tugas dihapus, dan pesan "Belum ada tugas" muncul saat daftar kosong.

Catatan: pengujian belum dilakukan pada browser sungguhan di perangkat HP; tampilan HP diuji dengan emulasi layar 375 px.
