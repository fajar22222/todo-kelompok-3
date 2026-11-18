// US-6: menampilkan jumlah tugas secara otomatis
const daftarHitung = document.getElementById("daftarTugas");
const teksJumlah = document.getElementById("jumlahTugas");

function perbaruiJumlah() {
  teksJumlah.textContent = daftarHitung.children.length;
}

// Hanya memantau penambahan/penghapusan item langsung di dalam daftar.
const pengamat = new MutationObserver(perbaruiJumlah);
pengamat.observe(daftarHitung, { childList: true });

perbaruiJumlah(); // tampilan awal (0 jika belum ada tugas)
