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

//declarasi buton untuk scrol ke atas
let mybutton = document.getElementById("myBtn");

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

function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
// function untuk agar smooth perpindahan page
document.querySelectorAll(".nav-item").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth",
    });
  });
});
