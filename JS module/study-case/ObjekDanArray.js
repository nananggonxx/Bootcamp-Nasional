/** 1 :
 * Buatlah sebuah Array bernama mahasiswa yang berisi dua buah object
 * yang memiliki property nama <string>, stambuk <number>, dan instansi <string>.
 */
// TODO 1: Ketikkan kode Anda di bawah ini!
var mahasiswa = ["Nanang Restu",2020, "UIN AR-RANIRY"];


/** 2 : Tampilkan array mahasiswa */
// TODO 2: Ketikkan kode Anda di bawah ini!
console.log(mahasiswa);

/** 3 :
 * Setelah membuat Array mahasiswa, tambahkan satu buah object dengan property yang sama seperti object sebelumnya
 * dengan menggunakan Array methods.
 */
// TODO 3: Ketikkan kode Anda di bawah ini!
mahasiswa.push({
nama: 'Nasruddin Said',
satambuk: 2020,
instansi: 'Uin AR-RANIRY'
});

/** 4 : Hapus index 1 pada Array mahasiswa dengan menggunakan Array methods */
// TODO 4: Ketikkan kode Anda di bawah ini!
mahasiswa.slice(1, 1);

/** 5 : Tampilkan array mahasiswa dengan menggunkan for loop atau yang sejenisnya */
// TODO 5: Ketikkan kode Anda di bawah ini!
for (let index = 0; index < mahasiswa.length; index++) {
  console.log(mahasiswa[index]);
}

for(let index = 0; index < mahasiswa.length; index++){
    console.log(mahasiswa[index]);
}

/** 6 : Tampilkan nama pada Object didalam Array mahasiswa dengan menggunakan for loop atau yang sejenisnya*/
// TODO 6: Ketikkan kode Anda di bawah ini!
for(let index = 0; index < mahasiswa.length; index++){
    console.log(mahasiswa[index].nama);
}
/** 7 : Ubahlah nama dari object index 0 Array mahasiswa menjadi Royhan*/
// TODO 7: Ketikkan kode Anda di bawah ini!
mahasiswa[0].nama = 'royhan';
console.log(mahasiswa[0]);

mahasiswa.length
