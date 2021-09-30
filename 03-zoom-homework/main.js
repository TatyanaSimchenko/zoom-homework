"use strict";

//..отримує будь яке число, а виводить найбільшу цифру

const getMaxDigit = (number) => {
  if (number === 0) {
    return 0;
  } else {
    return Math.max(number % 10, getMaxDigit(Math.floor(number / 10)));
  }
};

//...визначає ступінь числа

const getPow = (a, pow) => {
  let result = a;
  for (let i = 1; i < pow; i++) {
    result *= a;
  }
  return result;
};

//... форматує ім'я, роблячи першу букву великою

const uppFirstLetter = (string) => {
  if (!string) return string;

  return string[0].toUpperCase() + string.toLowerCase().slice(1);
};

//...вираховує суму, що залишається після оплати податку від заробітньої плати

const salaryNetto = (tax1, tax2, salary) => {
  tax1 = 18;
  tax2 = 1.5;
  const tax = tax1 + tax2;
  return salary - salary * (tax / 100);
};

//...повертає випадкове число в діапазоні від N до M

const getRandomNumber = (N, M) => {
  N = Math.ceil(N);
  M = Math.floor(M);

  return Math.floor(Math.random() * (M - N + 1)) + N;
};

//...рахує скільки разів певна буква повторюється в слові

const countLetter = (letter, string) => {
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i].toLowerCase() === letter.toLowerCase()) {
      counter++;
    }
  }
  return counter;
};

//...конвертує долари в гривні та навпаки в залежності ваід наявності $ або UAH в рядку

const convertCurrency = (currency) => {
  if (currency.includes("$")) {
    return parseInt(currency) * 25 + "UAH";
  }
  if (currency.includes("UAH")) {
    return parseInt(currency) / 25 + "$";
  }
  alert("Вибери '$' або 'UAH'");
  return 0;
};

// ... генерeує випадковий пароль (тільки числа), довжина встановлюється користвачем або по замовчуванню = 8 символам

const getRandomPassword = (number = 8) => {
  let result = "";
  for (let i = 0; i < number; i++) {
    result += Math.round(Math.random() * 9);
  }
  return result;
};

//...видаляє всі букви з речення

const delLetter = (letter, string) => {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i].toLowerCase() === letter.toLowerCase()) {
      continue;
    }
    result += string[i];
  }
  return result;
};

//...чи є слово паліндромом

const isPalindrom = (string) => {
  string = string.toLowerCase().replaceAll(" ", "");
  const stringReverse = string.split("").reverse().join("");
  return string === stringReverse;
};

//...видаляє з речення букви, які зустрічаються більше одного разу

const deleteDuplicateLetter = (str) => {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (str.toLowerCase().replaceAll(str[i], "").length === str.length - 1) {
      result += str[i];
    }
  }
  return result;
};

console.log(getMaxDigit(1236));
console.log(getPow(3, 3));
console.log(uppFirstLetter("влад"));
console.log(salaryNetto(18, 1.5, 1000));
console.log(getRandomNumber(1, 5));
console.log(countLetter("а", "Асталавіста"));
console.log(convertCurrency("100'$'"));
console.log(getRandomPassword(4));
console.log(delLetter("s", "stgostgostgo"));
console.log(isPalindrom("Я несу гусеня"));
console.log(deleteDuplicateLetter("Бісквіт був дуже ніжним"));

const div = document.getElementById("out");
div.innerHTML = `Функція №1: ${getMaxDigit(1236)} <br/>\n
Функція №2: ${getPow(3, 3)} <br/>\n
Функція №3: ${uppFirstLetter("влад")} <br/>\n
Функція №4: ${salaryNetto(18, 1.5, 1000)} <br/>\n
Функція №5: ${getRandomNumber(1, 5)} <br/>\n
Функція №6: ${countLetter("а", "Асталавіста")} <br/>\n
Функція №7: ${convertCurrency("100'$'")} <br/>\n
Функція №8: ${getRandomPassword(4)} <br/>\n
Функція №9: ${delLetter("s", "stgostgostgo")} <br/>\n
Функція №10: ${isPalindrom("Я несу гусеня")} <br/>\n
Функція №11: ${deleteDuplicateLetter("Бісквіт був дуже ніжним")} <br/>\n`;
