const myForm = document.getElementById("myForm");
const dataTable = document.getElementById("data-table");

myForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const nama = document.getElementById("nama").value;
  const tanggalLahir = document.getElementById("birthdate").value;
  const jenisKelamin = document.querySelector(
    'input[name="gender"]:checked'
  ).value;
  const pesan = document.getElementById("message").value;

  const newRow = dataTable.insertRow();
  const namaCell = newRow.insertCell();
  const tanggalLahirCell = newRow.insertCell();
  const jenisKelaminCell = newRow.insertCell();
  const pesanCell = newRow.insertCell();
  const profileCell = newRow.insertCell();
  const deleteCell = newRow.insertCell();

  namaCell.innerHTML = nama;
  tanggalLahirCell.innerHTML = tanggalLahir;
  jenisKelaminCell.innerHTML = jenisKelamin;
  pesanCell.innerHTML = pesan;
  profileCell.innerHTML = '<button class="profile-button">Klik Disini</button>';
  deleteCell.innerHTML = '<button class="delete-button">Delete</button>';

  myForm.reset();
});

dataTable.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-button")) {
    const rowToDelete = event.target.parentElement.parentElement;
    dataTable.deleteRow(rowToDelete.rowIndex);
  }
});

dataTable.addEventListener("click", (event) => {
  if (event.target.classList.contains("profile-button")) {
    const row = event.target.parentElement.parentElement;
    const nama = row.cells[0].innerHTML;
    const tanggalLahir = row.cells[1].innerHTML;
    const jenisKelamin = row.cells[2].innerHTML;
    const pesan = row.cells[3].innerHTML;

    alert(
      `Nama: ${nama}\nTanggal Lahir: ${tanggalLahir}\nJenis Kelamin: ${jenisKelamin}\nmesage: ${pesan}`
    );
  }
});
