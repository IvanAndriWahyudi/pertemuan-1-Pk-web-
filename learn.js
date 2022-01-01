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
// menampilkan informasi dalam bentuk alert pada window
window.alert("Angka favorit saya adalah : " + myNumber);
window.alert('Angka favorit saya adalah : ' + myNumber);
window.alert(`Angka favorit saya adalah : ${myNumber}`);

//Aritmatika
console.log("\nAritmatika");
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
console.log("\nPerbandingan");
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
console.log("\nOperator logika")
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
console.log("\nFungsi")
function luas_persegi(panjang){
    let lebar = 5;
    let luas = panjang * lebar;
    console.log("Panjang = " + panjang)
    console.log("Lebar + " + lebar)
    console.log(panjang +" * " + lebar+ " = " + luas)

}

luas_persegi(10);