// Fungsi untuk mengganti nama
function replaceName() {
  // minta user untuk masukkan nama
  let name = prompt("Masukan Nama anda ", "");
  // Menampilkan nama yang dimasukkan pengguna ke dalam elemen dengan id "name"
  document.getElementById("name").innerText = name;
}

replaceName();

// Handler untuk pengiriman form
document
  .getElementById("formulir")
  .addEventListener("submit", function (event) {
    // Mencegah tindakan default dari pengiriman formulir
    event.preventDefault();

    //  tanggal dan waktu saat ini
    const now = new Date();
    const dateTimeString = now.toLocaleString();

    // mengambil nilai dari form
    const nama = document.getElementById("nama").value;
    const tanggalLahir = document.getElementById("tgl-lahir").value;
    const jenisKelamin = document.querySelector(
      "input[name=jenisKelamin]:checked"
    )?.value;
    const pesan = document.getElementById("pesan").value;

    const resultText = `Date/time: ${dateTimeString}\n\nNama: ${nama}\nTanggal Lahir: ${tanggalLahir}\nJenis Kelamin: ${jenisKelamin}\nPesan: ${pesan}\n`;

    // display hasil
    document.getElementById("result").value = resultText;

    // display  bahwa pesan telah dikirim
    alert("Pesan telah dikirim");

    document.getElementById("nama").value = "";
    document.getElementById("tgl-lahir").value = "";
    document.getElementById("pesan").value = "";
    if (document.querySelector("input[name=jenisKelamin]:checked")) {
      document.querySelector(
        "input[name=jenisKelamin]:checked"
      ).checked = false;
    }
  });

let currentSlide = 0;

// Function untuk menggerakkan slide
function moveSlide(direction) {
  // Mendapatkan elemen slides dan jumlah total slide
  const slides = document.querySelector(".slides");
  const totalSlides = document.querySelectorAll(".slide").length;

  // Mengatur slide saat ini berdasarkan arah yang diberikan
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

  // Mengatur posisi offset dari slides
  const offset = -currentSlide * 100;
  slides.style.transform = `translateX(${offset}%)`;
}

// Menginisialisasi posisi slider saat halaman dimuat
document.addEventListener("DOMContentLoaded", function () {
  moveSlide(0); // Inisialisasi posisi slider
});

// Mendapatkan elemen tombol
let mybutton = document.getElementById("myBtn");

//function untuk scrolup
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Ketika user mengklik tombol maka page akan ke atas
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
