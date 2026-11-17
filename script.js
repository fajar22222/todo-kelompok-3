// US-2: menambah tugas dan menandai tugas selesai
const inputTugas = document.getElementById("inputTugas");
const btnTambah = document.getElementById("btnTambah");
const daftarTugas = document.getElementById("daftarTugas");

function tambahTugas() {
  const teks = inputTugas.value.trim();

  if (teks === "") {
    inputTugas.focus();
    return;
  }

  const item = document.createElement("li");
  item.className = "tugas";
  item.textContent = teks; // textContent: teks pengguna tidak dibaca sebagai HTML
  daftarTugas.appendChild(item);

  inputTugas.value = "";
  inputTugas.focus();
}

function tandaiSelesai(event) {
  const item = event.target.closest("li");
  if (item === null) return;
  item.classList.toggle("completed");
}

btnTambah.addEventListener("click", tambahTugas);
inputTugas.addEventListener("keydown", function (event) {
  if (event.key === "Enter") tambahTugas();
});
daftarTugas.addEventListener("click", tandaiSelesai);
