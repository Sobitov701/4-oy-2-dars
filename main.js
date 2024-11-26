// data types

// 1. number
// 2. string
// 3. boolen
// 4. bigint
// 5. undefined
// 6. null
// 7. symbol
// 8. object

// Arifmetik operatorlar
// console.log(2 ** 3);

// Asssignment ozlashtirma operator
// let age = 3;

// Solishtrish operatori

// let age1 = 12;
// let age2 = 12;
// console.log(age1 > age2);
// console.log(age1 < age2);
// console.log(age1 >= age2);
// console.log(age1 <= age2);
// console.log(age1 == age2);
// console.log(age1 === age2);
// console.log(age1 != age2);
// console.log(age1 !== age2);

// Mantiqiy operator
// let a = true;
// let b = false;
// let d = true;
// let c = a && b && d;
// console.log (c);

// Tarmoqlanuvchi operatpor
// let num = (sonni kiriting)

let num1 = +prompt("sonni kiriting");
if (num1 > 0) {
  num1 = num1 / num1;
  0;
}

console.log(num1);

let num2 = +prompt("sonni kiriting");
if (num2 < 0) {
  num2 = -num2 / num2;
} else {
  num2 = num2 * 0;
}

console.log(num2);

let num3 = +prompt("sonni kiriting");
if (num3 == 0) {
  num3 = num3 + 1;
} else {
  num3 = num3 * 0;
}

console.log(num3);

let num4 = +prompt("sonni kiriting");
if (num4 > 100) {
  num4 = num4 / num4;
}

console.log(num4);

let num5 = +prompt("sonni kiriting");
if (num5 < 0) {
  num5 = -num5 / num5;
}

console.log(num5);

let num6 = +prompt("sonni kiriting");
if (num6 > 0) {
  num6 = num6 ** 2;
} else {
  num6 = -num6 * 0;
}

console.log(num6);

let num7 = +prompt(`sonni kiriting`);

if (num7 < 0) {
  num7 = -num7;
}

console.log(num7);

let num8 = +prompt("sonni kiriting");
if (num8 == 0) {
  num8 = num8 + 10;
} else {
  num8 = num8;
}

console.log(num8);

let num9 = +prompt("sonni kiriting");
if (num9 > 1) {
  num9 = num9 ** 3;
}

console.log(num9);

let num10 = +prompt("sonni kiriting");
if (num10 < 0) {
  num10 = num10 * 0 - 10;
} else {
  num10 = num10 * 0 + 10;
}

console.log(num10);

let num11 = +prompt("sonni kiriting");
if (num11 % 2 == 0) {
  num11 = num11 * 0 + 2;
} else {
  num11 = num11 * 0 + 1;
}

console.log(num11);

let num12 = +prompt("sonni kiriting");
if (num12 % 2 == 0) {
  num12 = num12 * 0 + 4;
} else {
  num12 = num12 * 0 + 3;
}

console.log(num12);

let num13 = +prompt("sonni kiriting");
if (num13 > 10 && num13 % 2 == 0) {
  num13 = num13 / num13;
}

console.log(num13);

let num14 = +prompt("sonnni kiriting");
if (num14 < 0 && num14 % 2 == 0) {
  num14 = -num14 / num14;
}

console.log(num14);

let num15 = +prompt("sonni kiriting");
if (num15 % 2 == 0 && num15 % 5 == 0) {
  num15 = num15 * 0 + 100;
}

console.log(num15);

let num16 = prompt("sonni kiritng");
if (num16 % 2 == 1) {
  num16 ** 2;
}

console.log(num16);

let num17 = +prompt("sonni kiriting");
if (num17 % 2 == 0 && num17 > 0) {
  num17 ** 3;
}

console.log(num17);

let num18 = +prompt("sonni kriting");
if (num18 % 2 == 0 && num18 > 20) {
  num18 * 0 + 50;
} else {
  num18 * 0 - 50;
}

console.log(num18);

let num19 = +prompt("sonni kiriting");
if (num19 % 2 == 1 && num19 % 7 == 0) {
  num19 * 0 + 7;
}

console.log(num19);

let num20 = +prompt("sonnni kiritng");
if (num20 % 2 == 0 && num20 < 0) {
  num20 * 0 - 20;
}

console.log(num20);

let num31 = +prompt("sonni kiriitng");
if (num31 > 0 && num % 3 == 0) {
  num31 * 0 + 3;
} else {
  num31 * 0;
}

console.log(num31);

let num21 = +prompt("sonni kirting");
let $num21 = +prompt("sonni kirting");

if (num21 == $num21) {
  console.log(1);
} else {
  console.log(0);
}

let num22 = +prompt("sonni kirting");
let _num22 = +prompt("sonni kirting");

if (num22 > _num22) {
  console.log(2);
} else {
  console.log(3);
}

let num23 = +prompt("sonni kiritng");
let _num23 = +prompt("sonni kiritng");

if (num23 < _num23 && num23 > 0) {
  console.log(10);
}

let num24 = +prompt("sonni kiritng");
let _num24 = +prompt("sonni kiritng");

if (num24 > _num24 && num23 % 2 == 1) {
  console.log(5);
}

let num25 = +prompt("sonni kirting");
let _num25 = +prompt("sonni kirting");

if (num25 > 0 && _num25 > 0) {
  console.log(num25 + _num25);
}

let num26 = +prompt("sonni kirting");
let _num26 = +prompt("sonni kirting");

if (num26 < _num26 && _num26 % 2 == 0) {
  console.log(-1);
}

let num27 = +prompt("sonni kirting");
let _num27 = +prompt("sonni kirting");

if (num27 == _num27) {
  console.log(100);
} else {
  console.log(-100);
}

let num28 = +prompt("sonni kirting");
let _num28 = +prompt("sonni kirting");

if (num28 % 10 == 0 && _num28 % 5 == 0) {
  console.log(50);
}

let num29 = +prompt("sonni kirting");
let _num29 = +prompt("sonni kirting");

if (num29 + _num29 > _num29) {
  console.log(2);
}

let num30 = +prompt("sonni kirtimg");
let _num30 = +prompt("sonni kirtimg");

if (num30 < _num30 && _num30 % 2 == 1) {
  console.log(-10);
}

let num32 = +prompt("sonni kiritng");
if (num32 < 0 && num32 % 2 == 0) {
  num32 * 0 - 2;
}

console.log(num32);

let num33 = +prompt("sonni kiriting");
if (num33 > 0 && num33 % 5 == 0) {
  num33 % 5;
}

console.log(num33);

let num34 = +prompt("sonni kiriting");
if (num34 > 0 && num34 < 10) {
  num34 ** 2;
}

console.log(num34);

let num35 = +prompt("sonni kiriting");
if (num35 % 2 == 0 && num35 % 4 == 0) {
  num35 * 0 + 1;
}

console.log(num35);

let num36 = +prompt("sonni kirting");
if (num36 % 2 == 0 && num36 > 15) {
  num36 * 0 + 15;
}

console.log(num36);

let num37 = +prompt("sonni kirting");
if (num37 % 2 == 0 && num37 % 3 == 0) {
  num37 * 0 + 6;
} else {
  num37 * 0 + 1;
}

console.log(num37);

let num38 = +prompt("sonni kirting");
if (num38 > 0 && num38 % 7 == 0) {
  num38 * 0 + 14;
}

console.log(num38);

let num39 = +prompt("sonni kirting");
if (num39 >= 0) {
  num39 * 0;
} else {
  num39 * 0 - 5;
}

console.log(num39);

let num40 = +prompt("sonni kirting");
if (num40 < 0 && num40 % 10 != 0) {
  num40 * 0 - 3;
}

console.log(num40);
