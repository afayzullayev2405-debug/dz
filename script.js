let a = 4;
let b = 5;

const P = 2 * (a + b);
const S = a * b;

console.log(`Perimetri: ${P}, Yuzasi: ${S}`);



let F = 95;

const C = (F - 32) * 5 / 9;

console.log(`Natija: ${C} Selsiy`);

let x = 2;
let y = 4;
let z = 5;

const kop = x * y * z;

console.log(`Ko'paytmasi: ${kop}`);

let km = 2;

const meter = km * 1000;
const cm = km * 100000;

console.log(`Natija: ${meter} metr, ${cm} santimetr`);


let cost = 50000;

const totalPrice = cost * 1.12;

console.log(`Natija: ${totalPrice} so'm`);
let K = 1255;

const ton = Math.floor(K / 1000);
const centner = Math.floor((K % 1000) / 100);
const kg = K % 100;

console.log(`Natija: ${ton} tonna ${centner} sentner ${kg} kg`);
let N = 234;

const d1 = N % 10;
const d2 = Math.floor(N / 10) % 10;
const d3 = Math.floor(N / 100);   

const prod = d1 * d2 * d3;

console.log(`Natija: ${prod}`);