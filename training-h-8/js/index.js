function validateForm() {
  // let// tidak permanen
  //  var // tidak permanen
  //  const //ini permanen

  let nameInput = document.getElementById("name-input");
  if (nameInput == null || nameInput == "") {
    alert("Inputan kosong");
  } else {
    console.log(nameInput);
  }
}
