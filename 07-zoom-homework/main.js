"use strict";

const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

/* №1: Створіть функцію getMyTaxes.call(country, salary) -> number; – яка рахує скільки податків ви заплатите як IT-спеціаліст в якійсь з країн. Функція повинна викликатись через call та працювати з даними через this */

const getMyTaxes = function (salary) {
  return +(this.tax * salary).toFixed(2);
};
const myTaxes = getMyTaxes.call(latvia, 1000);
console.log(myTaxes);

/* №2: Створіть функцію getMiddleTaxes.call(country) -> number; – яка рахує скільки у середньому податків платять IT-спеціалісти у кожній країні. (tax * middleSalary). Функція повинна викликатись через call та працювати з даними через this */

const getMiddleTaxes = function () {
  return +(this.tax * this.middleSalary).toFixed(2);
};
const middleTaxes = getMiddleTaxes.call(ukraine);
console.log(middleTaxes);

/* №3: Створіть функцію getTotalTaxes.call(country) -> number; – яка рахує, скільки всього податків платять IT-спеціалісти у кожній країні. (tax * middleSalary * vacancies). Функція повинна викликатись через call та працювати з даними через this */

const getTotalTaxes = function () {
  return +(this.tax * this.middleSalary * this.vacancies).toFixed(2);
};

const totalTaxes = getTotalTaxes.call(ukraine);
console.log(totalTaxes);

/* №4: Створіть функцію getMySalary(country) – яка буде писати в консоль об'єкт виду: { salary: number, taxes: number, profit: number } кожні 10 секунд. Значення salary – генеруйте випадковим чином у діапазоні 1500-2000. taxes – розраховується в залежності від вибраної країни та значення salary.
profit = salary - taxes; */

const getMySalary = function () {
  const randomSalary = Math.random() * (2000 - 1500) + 1500;
  return {
    salary: +randomSalary.toFixed(2),
    taxes: +(this.tax * randomSalary).toFixed(2),
    profit: +(randomSalary - this.tax * randomSalary).toFixed(2),
  };
};
const mySalary = getMySalary.call(ukraine);
console.log(mySalary);
setInterval(() => console.log(getMySalary.call(ukraine)), 10000);

const div = document.getElementById("out");
div.innerHTML = `
Результати в консолі!<br/>\n <br/>\n
№1: Створіть функцію getMyTaxes.call(country, salary) -> number; – яка рахує скільки податків ви заплатите як IT-спеціаліст в якійсь з країн. Функція повинна викликатись через call та працювати з даними через this <br/>\n <br/>\n
№2: Створіть функцію getMiddleTaxes.call(country) -> number; – яка рахує скільки у середньому податків платять IT-спеціалісти у кожній країні. (tax * middleSalary). Функція повинна викликатись через call та працювати з даними через this<br/>\n <br/>\n
№3: Створіть функцію getTotalTaxes.call(country) -> number; – яка рахує, скільки всього податків платять IT-спеціалісти у кожній країні. (tax * middleSalary * vacancies). Функція повинна викликатись через call та працювати з даними через this <br/>\n <br/>\n
№4: Створіть функцію getMySalary(country) – яка буде писати в консоль об'єкт виду: { salary: number, taxes: number, profit: number } кожні 10 секунд. Значення salary – генеруйте випадковим чином у діапазоні 1500-2000. taxes – розраховується в залежності від вибраної країни та значення salary.
profit = salary - taxes;<br/>\n <br/>\n`;
