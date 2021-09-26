"use strict";

const n = parseInt(+prompt("Введи значення числа N"));

if (n % 1 === 0) {
  console.log("OK");
} else {
  alert("Перезавантаж сторінку і введи число!");
}

const m = parseInt(+prompt("Введи значення числа M"));

if (m % 1 === 0) {
  console.log("OK");
} else {
  alert("Перезавантаж сторінку і введи число!");
}

const choiceNum = confirm("Пропускати парні числа?");

let sum = 0;
for (let i = n; i <= m; i++) {
  if (choiceNum && i % 2 === 0) {
    sum += 0;
  } else {
    sum += i;
  }
}

console.log(sum);

const div = document.getElementById("out");
div.innerHTML = `Значення числа N: ${n} <br/>\n
Значення числа M: ${m} <br/>\n
Сума чисел: ${sum}`;
