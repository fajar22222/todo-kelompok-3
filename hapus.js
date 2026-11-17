// US-5: menghapus satu tugas dengan double-click
const daftarHapus = document.getElementById("daftarTugas");

function hapusTugas(event) {
  const item = event.target.closest("li");
  if (item === null) return;
  // Hanya item yang diklik yang dihapus, bukan seluruh daftar.
  // Double-click memicu dua kali click (status selesai berganti dua kali),
  // lalu item dihapus, jadi tidak ada perubahan yang tersisa.
  item.remove();
}

daftarHapus.addEventListener("dblclick", hapusTugas);
