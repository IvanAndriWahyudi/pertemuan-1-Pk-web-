// membuat variabel
let myNumber = 16;
let myString = "Hello"
let myBoolean = true
const phi = 3.14
// menampilkan informasi ke console
console.log(myNumber);
console.log(myString);
console.log(myBoolean);
console.log(phi);
// // menampilkan informasi dalam bentuk alert pada window
// window.alert("Angka favorit saya adalah : " + myNumber);
// window.alert('Angka favorit saya adalah : ' + myNumber);
// window.alert(`Angka favorit saya adalah : ${myNumber}`);

//Aritmatika
console.log("\nARITMATIKA");
let x = 8
let y = 4
console.log(x, y)
console.log('x + y =', x + y)
console.log('x - y =', x - y)
console.log('x * y =', x * y)
console.log('x / y =', x / y)
console.log('x % y =', x % y)
console.log('x++ =', x++)
console.log('++x =', ++x)
console.log('x-- =', x--)
console.log('--x =', --x)

//Perbandingan
console.log("\nPERBANDINGAN");
let a = 8
let b = 4
console.log(a, b)
console.log('a > b =', a > b)
console.log('a < b =', a < b)
console.log('a >= b =', a >= b)
console.log('a <= b =', a <= b)
console.log('a == b =', a == b)
console.log('a != b =', a != b)
console.log('a === b =', a === b)
console.log('a !== b =', a !== b)

//Operator Logika
console.log("\nOPERATOR LOGIKA")
console.log('true && true =', true && true)
console.log('true && false =', true && false)
console.log('false && true =', false && true)
console.log('false && false =', false && false)
console.log('true || true =', true || true)
console.log('true || false =', true || false)
console.log('false || true =', false || true)
console.log('false || false =', false || false)
console.log('!true =', !true)
console.log('!false =', !false)

//Fungsi
console.log("\nFUNGSI")
function luas_persegi(panjang){
    let lebar = 5;
    let luas = panjang * lebar;
    console.log("Panjang = " + panjang)
    console.log("Lebar = " + lebar)
    console.log(panjang +" * " + lebar+ " = " + luas)

}
luas_persegi(10);

//Array
console.log("\nARRAY")
//mendeklarasikan array
var hewan = ["Kucing", "Burung", "Ular", "Belalang"];

//mengakses nilai array
console.log("MENGAKSES ARRAY =");
console.log(hewan[0] + "\n\n");

console.log("MENGUBAH NILAI INDEKS 1 =\n")
hewan[1] = "Harimau";//mengubah nilai array
//menampilkan array
console.log(hewan + "\n\n");

console.log("MENAMBAHKAN INDEK BARU PADA ARRRAY DENGAN MENGGUNAKAN METHOD PUSH() =");
hewan.push("Singa");//menambahkan item dengan 
console.log(hewan + "\n\n");//menampilkan arrray

console.log("HILANGKAN ITE PADA ARRAY DENGAN MENGGUNAKAN POP() =");
hewan.pop(); //menghilangkan item array dengan pop
console.log(hewan + "\n\n");

console.log("HITUNG ARRAY DENGAN MENGGUNAKAN PROPERTY LENGTH =");
console.log(hewan.length+ "\n\n"); //menghitung array

console.log("TAMBAHKAN ITEM BARU PADA ARRAY DENGAN MENGGUNAKAN METHOD UNSHIFT() =");
hewan.unshift("Ikan")//menambahkan array dengan unshift
console.log(hewan + "\n\n"); //menampilkan array

console.log("HILANGKAN ITEM DENGAN MENGGUNAKAN SHIFT() =");
hewan.shift();//menghilangkan data array dengan shift
console.log(hewan + "\n\n");

console.log("URUTKAN ARRAY DENGAN MENGGUNAKAN SORT() =");
hewan.sort();//mengurutkan array
console.log(hewan + "\n\n");

console.log("BUATLAH ARRAY DENGAN TERURUT SECARA KEBALIKANNYA DENGAN MENGGUNAKAN REVERSE() =");
hewan.reverse();
console.log(hewan + "\n\n");

//Objek
console.log("Objek");
let mobil = {
    namaPemilik : "Ivan",
    model : "Honda Civic",
    type : "Sport",
    warna : "Putih",
    noPolosi : "BM2322GD",
    identitas : function(){
        return this.namaPemilik +  " " + this.model + " " + this.noPolosi;
    }
};
console.log("AKSESLAH PROPERTI ATAU METHOD YANG ADA DENGAN MENGGUNAKAN TANDA TITIK =");
console.log("Nama Pemilik = " + mobil.namaPemilik);
console.log("Model = " + mobil.model);
console.log("Type = " + mobil.type);
console.log("Warna = " + mobil.warna);
console.log("No Polisi = " + mobil.noPolosi);
console.log("Identitas = " + mobil.identitas() + "\n\n");

console.log("AKSESLAH PROPERTI ATAU METHOD YANG ADA DENGAN MKURUNG SIKU =");
console.log("Nama Pemilik = " + mobil["namaPemilik"]);
console.log("Model = " + mobil["model"]);
console.log("Type = " + mobil["type"]);
console.log("Warna = " + mobil["warna"]);
console.log("No Polisi = " + mobil["noPolosi"]);
console.log("Identitas = " + mobil["identitas"]() + "\n\n");

//Anomali pada Javascript
console.log("ANOMALI PADA JAVASCRIPT =");
console.log(0.1 + 0.2 == 0.3)
console.log(1 + "1")
console.log(1 - "1")
console.log(1 < 2 < 3)
console.log(3 > 2 > 1)
console.log(null == 0)
console.log(null > 0)
console.log(null >= 0)