//Vito Julio Korengkeng
//nanti dilanjutkan
//Javascript
/*
//meminta message
prompt("halo, siapakah nama anda", "");
// bisa mengubah
var number = 10;
 number = 11;

 //tidak bisa diubah
 const bumber = 10;
*/
function replaceName() {
  let name = prompt("Siapakah nama anda?", "");
  document.getElementById("name").innerHTML = name;
}

//replaceName();
/*
document.getElementById("btn-name").addEventListener("click", function () {
  replaceName();
});
*/
let nameInput = document.getElementById("name-input");

documment.getElementById("submit").addEventListener("click", function () {
  const nama = nameInput.value;
  if ((nama = "")) {
    document.getElementById("error-name").innerHTML =
      "Nama tidak boleh Kosong!";
  } else {
    document.getElementById("name").innerHTML = name;
  }
  //document.getElementById("name").innerHTML = nama;
});

function validateForm() {
  const nama = document.forms["message-form"]["name-input"].value;
  if (nama == "") {
    document.getElementById("error-name").innerHTML = "Tidak boleh kosong!";
    return false;
  }
  //document.getElementById("name").innerHTML = nama;
  //document.getElementById("error-name").innerHTML = "";
  setName(nama, angka);
  return false;
}

function setName(name, number) {
  document.getElementById("name").innerHTML = name;
  document.getElementById("error-name").innerHTML = "";
}
