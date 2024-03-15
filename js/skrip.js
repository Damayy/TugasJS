function dataPerson() {
  let forms = document.getElementById("frm");
  let nama = document.getElementById("frm").nama.value;
  let pekerjaan = document.getElementById("frm").pekerjaan.value;
  let hobby = document.getElementById("frm").hobby.value;
  let input = "Selamat Datang, Ini hasil data kamu !" + "<br> Nama :" + nama + "<br> Pekerjaan :" + pekerjaan + "<br> Hobby :" + hobby;
  let no_input = "Maaf anda belum selesai mengisi form ini";
  let hasil = nama && pekerjaan && hobby != "" ? input : no_input;

  document.getElementById("hasil").innerHTML = hasil;
}
