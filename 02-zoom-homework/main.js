"use strict";

let n;
let m;

do {
  n = parseInt(prompt("Введи значення числа N"));
} while (!Number.isInteger(n));

do {
  m = parseInt(prompt("Введи значення числа M"));
} while (!Number.isInteger(m));

if (n > m) {
  [n, m] = [m, n];
}
console.log(n, m);

const skipEvenNum = confirm("Пропускати парні числа?");

let sum = 0;
for (let i = n; i <= m; i++) {
  if (skipEvenNum && i % 2 === 0) {
    continue;
  } else {
    sum += i;
  }
}

console.log(sum);

const div = document.getElementById("out");
div.innerHTML = `Значення числа N: ${n} <br/>\n
Значення числа M: ${m} <br/>\n
Сума чисел: ${sum}`;
