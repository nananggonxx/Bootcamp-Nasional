/** Jangan mengubah Kode di Bawah ini! */
const mahasiswa = [
  {
    nama: 'Royhan',
    nim: 20017001,
    mk: [
      { nama: 'Pemrograman Web', kuis: 65, uts: 80, uas: 75 },
      { nama: 'Mobile Programming', kuis: 70, uts: 80, uas: 70 },
      { nama: 'Ethical Hacking', kuis: 75, uts: 70, uas: 75 },
    ],
  },
  {
    nama: 'Reyhan',
    stambuk: 20017002,
    mk: [
      { nama: 'Pemrograman Web', kuis: 70, uts: 80, uas: 75 },
      { nama: 'Mobile Programming', kuis: 70, uts: 80, uas: 80 },
      { nama: 'Ethical Hacking', kuis: 80, uts: 70, uas: 75 },
    ],
  },
];

// console.log(mahasiswa.length)
// data2=mahasiswa.length;
// /** 1 :
//  * Buatlah sebuah function tanpa parameter yang berfungsi untuk
//  * menampilkan nilai uas mk Pemrograman Web pada Array of Object mahasiswa
//  */
// // TODO 1: Ketikkan kode Anda di bawah ini!

// function tampilNilaiProgram(){
// console.log(mahasiswa[0],mk[0]);
// }

// tampilNilaiProgram();
// /** 2 :
//  * Buatlah sebuah function dengan parameter nama yang berfungsi untuk
//  * menampilkan nilai uas mk Pemrograman Web pada Array of Object mahasiswa
//  * berdasarkan nama mahasiswa
//  */
// TODO 2: Ketikkan kode Anda di bawah ini!
function tampilNilaiProgram(data){
  console.log(data.length);
  for (let index = 0; index <data.length; index++) {
    console.log(data[index].nama,":" ,data[index].mk[0].uas);
  }
}

// tampilkanNilai();
tampilNilaiProgram(mahasiswa);

