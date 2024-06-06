# Training-Web-RevoU

Vito Julio Korengkeng

catatan untuk pemebelajaran RevoU

- HTML(hyper Text Markup Language)
  Bahasa standar untuk membuat web dimana menggambarkan struktur halaman wen

elemen HTML diwakili dengan tag seperti:

- heading
- paragraph
- table
- dan lainnya

HTML Layout Element

- header
  Mendefinisikan header untuk document atau section
- nav
  Mendefinisikan satu set link navigasi
- section
  Mendefinisikan bagian dalam dokumen
- aside
  Mendefinisikan bagian samping dari content (seperti sidebar)
- footer
  Mendefinisikan footer/ atau bagian bawah dari document atau section
- details
  Mendefinisikan details tambahan yang dapat dibuka dan ditutup pengguna sesuai permintaan
- summary
  Mendefinisikan heading untuk element details

- <!DOCTYPE>
  Tag muncul paling atas dari setia dokumen HTML memberitahu browser bahwa file adalah HTML 5
- head
  tag head yang berisi informasi tentang halaman itu sendiri. termasuk judul halaman yang anda lihat diatas berisi file eksternal apapun seperti fileCSS dan javScript, dan informasi meta tambahan
- body
  tag body adalah tempat konten utama yang akan anda lihat ditampilkan dilayar anda. Anda perlu meletakan apapun yang anda inginkan benar-benar dirender diantara tag body
- div
  Div adalah sebuah tag HTML yang berfungsi mendeskripsikan bagian atau divisi tertentu yang sifatnya fleksibel
- span
  Tag span adalah wadah sebarais yang digunakan untuk menandai bagian dari teks, atau dari dokumen
  tag ini mudah ditata oleh CSS atau dimanipulasi dengan JavaScript menggunakan atribut class atau id

tag ini sangat mirip dengan elemen div tetapi div adalah elemen tingkat blok dan span adalah sebaris

- CSS (cascading Style Sheets)
  aturan untuk mengatur beberapa komponen dalam sebuah web sehingga akan lebih terstruktur

  CSS dapat mengontrol tata letak beberapa halaman web sekaliguus.
  Stylesheets lebih baik disimpan di file CSS secara terpisah

  CSS selector untuk menemukan atau memilih elemen HTML yang ingin distyling
  note: ID diCSS akan lebih diprioritaskan stylingnya karena berifatunik dan spesifik

Atribut selector
Dimungkinkan untuk menata elemen HTML yang memiliki atribut ata nilai atribut tertentu

Display
propeti tampilan CSS yang mengatur apakah suatu elemen diperlukan sebagai bloc atau inline element dan tata letak yang digunakan untuk turunnanya , seperti flow layout, grid, atau flex

- inline
  Menampilkan elemen sebagai elemen inline seperti span. properti height dan widht appun tidak akan berpengaaruh
- block
  Menampilkan elemen sebagai block seperti p . itu dimulai pada baris baru, dan menempati seluruh lebar.
- flex
  Menampilkan element sebagai contrainer yang flexible
- grid
  Menampilkan element sebagai grid contrainer

width dan height
digunakan untuk mengatur lebar dan tinggi

border
digunakan untuk menentukan style, lebar, dan warna border element

- CSS align
  align atau alignment pada css digunakan untuk menyelaraskan elemen secara horizontal atau vertikal

Source Code Repository
Tempat menyimpan file proyek yang dapat berupa file source, file gambar, text, dan file lainnya

Version Control System
sistem yang mencatat setiap perubahan sebuah file atau kumpulan file (kode)
Contoh : Developer (user) dapat kembali ke salah satu versi dari berkas (kode) yang diinginkan. Saat terjadi masalah di kode yang terbaru

Konsep Box Sizing tanpa border BOx
Properti CSS box-sizing memungkinkan kita untuk menyertakan padding dan border dalam lebar dan tinggi total elemen
tanpa properti CSS box-sizing
secara default, lebar dan tinggi elemen dihitung seperti ini:
Lebar + padding + border = lebar sebenarnya elemen
tinggi + padding + border = tinggi sebenarnya elemen

    ini berarti ketika kita mengatur lebar atau tinggi elemen, elemen tersebut seringkali muncul lebih besar dari yang kita atur(karena border dan padding elemen ditambahkan ke lebar atau tinggi yang tentukan pada eleme).

Flexbox

- Main axis
  Primary axis dari flex contrainer, dari kanan ke kiri kalau horizontal, dari atas kebawah kalau vertical
- main size
  flex item untuk size width dan heigth
- main start|main end
  flex item yang ada di dalam contrainer dari main start ke main end
- flex contrainer
  parent element yang memiliki property display:flex
- flex item
  child element dari parent element

Javascript validation and dynamic view

javascript adalah bahasa pemrograman populer yang digunakan untuk membuat situs dengan konten website yang dinamis

Di tahun 2022 kemarin juga state od JS Survey mengatakan kalau javascript itu digunakan lebih dari 78% di dunia

Client Side and Server side

Client Side

- Membuat tata letak situs web
- merancang antar muka pengguna
- menambahkan validasi formulir
- menambah elemen visual seperti warna dan font

Server Side

- pengkodean situs web dinamis
- mengembangkan aplikasi web
- menghubungkan situs web ke database

Form Validation

- Server side validation dilakukan oleh server, setelah menerima hasil dari sisi client
- Client side validation dilakukan pada browser sebelum data dikirim ke server

Apa itu responsive web design
responsive web design adalah sebuah metode dimana membuat sebuah tampilan website yang kita buat, yang dapat menyesuaikan dengan layar perangkat, dan masihlah terlihat dan nyaman digunakan

Media query
media query adalah sebuah fungsi yang disediakan oleh CSS terutama modul di CSS3, untuk membuat kita membuat tampilan yang responsive untuk pengguna aplikasi/ website

Banner Autoslide
banner autoslide dimana kita akan menggunakan Javascript untuk tampilan yang satu ini, banner autoslide ini adalah sebuah gambar yang dapat berubah secara otomatis yang akan kita pasang pada website

apa itu git branch?
Git branch adalah suatu tempat dimana ita bisa membuat sebuah perubahan pada aplikasi kita tanpa perlu khawatir kita dapat merusak/mengacaukan aplikasi kita yang ada ditempat utama (master branch)

apa itu git merge ?
setelah mengaetahui git branch, tentu kita ingin menggabungkan perubahan kita kepada branch utama kita buka?

Git merge adalah sebuah fitur yang terdapat pada git untuk kita menggabungkan perubahan yang kita buat kepada baik branch ataupun bisa juga branch lainnya

Git pull request
sebelum kita melakukan merge branch pada branch lainnya, saat kita berkolaborasi dalam sebuah tim tertentu kita tidak bisa sembarangan menggabungkan kode yang kita bat kepada branch utama

maka dari itu kita memerlukan Git pull request, dimana kita meminta penggabungan perubahan kode yang kita buat ke tim kita
