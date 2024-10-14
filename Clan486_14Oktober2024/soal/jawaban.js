// Soal 01 :
// Cetaklah di console kalimat perkenalan kamu dengan menyimpan dahulu di variabel nama, umur, dan domisili.
// Hasil Yang Diharapkan : Perkenalkan nama saya Naulan, umur saya 19, domisili saya Malang

// -------- Tulis Kode Kamu Disini (Nomor 1) --------
let nama = "Rena Laurentina";
let umur = 20;
let domisili = "Des.Permanu, Kec.Pakisaji, Kab.Malang";

console.log(`Perkenalkan nama saya ${nama}, umur saya ${umur}, domisili saya ${domisili}`);

// -------- ------ --------

// Soal 02 :
// Buatlah variabel panjang dengan nilai 5 dan variabel lebar dengan nilai 7 untuk menentukan luas persegi panjang. Dan buatlah variabel luasPersegiPanjang untuk menyimpan hasil dari rumus persegi panjang.
// Hasil Yang Diharapkan : 35

// -------- Tulis Kode Kamu Disini (Nomor 2) --------
let panjang = 5;
let lebar = 7;

let luasPersegiPanjang = panjang * lebar;

console.log(luasPersegiPanjang);

// -------- ------ --------

// Soal 03 :
// Buatlah variabel panjang dengan nilai 5 dan variabel lebar dengan nilai 7 untuk menentukan luas persegi panjang. Dan buatlah variabel luasPersegiPanjang untuk menyimpan hasil dari rumus persegi panjang.
// Hasil Yang Diharapkan : 35

// -------- Tulis Kode Kamu Disini (Nomor 3) --------
let panjang = 5;
let lebar = 7;

let luasPersegiPanjang = panjang * lebar;

console.log(luasPersegiPanjang);

// -------- ------ --------

// Soal 04 :
// Lampu menyala setiap 5 detik sekali. Untuk menyala sebanyak 48 kali, berapa menit yang dibutuhkan?
// Hasil Yang Diharapkan : Dibutuhkan waktu 4 menit untuk menyala sebanyak 48 kali.

// -------- Tulis Kode Kamu Disini (Nomor 4) --------
let nyala = 48;
let interval = 5; 

let totalDetik = (nyala - 1) * interval;

let totalMenit = totalDetik / 60;

console.log(`Dibutuhkan waktu ${totalMenit} menit untuk menyala sebanyak ${nyala} kali.`);

// -------- ------ --------

// Soal 05 :
// Buatlah program untuk menghitung total belanja. Simpan harga barang dan jumlah beli di variabel, lalu cetak total belanja
// Hasil Yang Diharapkan : Total belanja saya adalah 150000.

// -------- Tulis Kode Kamu Disini (Nomor 5) --------
let hargaBarang = 50000; 
let jumlahBeli = 3;      

let totalBelanja = hargaBarang * jumlahBeli;

console.log(`Total belanja saya adalah ${totalBelanja}.`);

// -------- ------ --------

// Soal 06 :
// Buatlah program untuk menghitung keliling lingkaran. Simpan jari-jari lingkaran di variabel dan gunakan rumus keliling = 2 * π * r. Cetak kelilingnya.
// Hasil Yang Diharapkan : Keliling lingkaran adalah 62.8

// -------- Tulis Kode Kamu Disini (Nomor 6) --------
let jariJari = 10; 
const pi = 3.14;   

let keliling = 2 * pi * jariJari;

console.log(`Keliling lingkaran adalah ${keliling}.`);

// -------- ------ --------

// Soal 07 :
// Buatlah program untuk menentukan apakah angka adalah genap atau ganjil. Simpan angka di variabel dan cetak hasilnya.
// Hasil Yang Diharapkan : Angka 7 adalah ganjil

// -------- Tulis Kode Kamu Disini (Nomor 7) --------
let angka = 7; 
if (angka % 2 === 0) {
    console.log(`Angka ${angka} adalah genap.`);
} else {
    console.log(`Angka ${angka} adalah ganjil.`);
}

// -------- ------ --------

// Soal 08 :
// Buatlah program untuk menghitung rata-rata dari tiga nilai. Simpan nilai di variabel dan cetak rata-ratanya.
// Hasil Yang Diharapkan : Rata-rata nilai adalah 80

// -------- Tulis Kode Kamu Disini (Nomor 8) --------
let nilai1 = 75; 
let nilai2 = 85; 
let nilai3 = 80; 

let totalNilai = nilai1 + nilai2 + nilai3;
let rataRata = totalNilai / 3;

console.log(`Rata-rata nilai adalah ${rataRata}.`);

// -------- ------ --------