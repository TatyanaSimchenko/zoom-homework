"use strict";

//  №1 Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел. У функції є параметри: length - довжина масиву, min – мінімальне значення цілого числа, max – максимальне значення цілого числа. Приклад: getRandomArray(15, 1, 100) –> [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]

const getRandomArray = (length, min, max) => {
  let randomArray = [];

  for (let i = 0; i < length; i++) {
    randomArray.push(Math.floor(Math.random() * (max - min) + min + 1));
  }
  return randomArray;
};

const randomArr = getRandomArray(15, 1, 100);
console.log(randomArr);

// №2 Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
// Приклад: getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 34.4

const getAverage = (...numbers) => {
  return (
    numbers
      .filter((number) => Number.isInteger(number))
      .reduce((sum, number) => sum + number) / numbers.length
  );
};

const average = getAverage(
  6,
  2,
  55,
  11,
  78,
  2,
  55,
  77,
  57,
  87,
  23,
  2,
  56,
  3,
  2
);
console.log(average);

// №3 Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
// Приклад: getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 23 Приклад: getMedian(1, 2, 3, 4) –> 2.5 Приклад: getMedian(1, 2, 3, 4, 5) –> 3

const getMedian = (...numbers) => {
  const sortNum = numbers
    .filter((number) => Number.isInteger(number))
    .sort((a, b) => a - b);
  const num = numbers.length / 2;

  if (numbers.length % 2 === 0) {
    return (sortNum[num - 1] + sortNum[num]) / 2;
  }
  return sortNum[Math.floor(num)];
};

const median = getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
console.log(median);

// №4 Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції
// Приклад: filterEvenNumbers(1, 2, 3, 4, 5, 6) -> [1, 3, 5]

const filterEvenNumbers = (...numbers) => {
  return numbers.filter((number) => number % 2 !== 0);
};

const filterEvenNum = filterEvenNumbers(1, 2, 3, 4, 5, 6);
console.log(filterEvenNum);

// №5 Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0
// Приклад: countPositiveNumbers(1, -2, 3, -4, -5, 6) -> 3

const countPositiveNumbers = (...numbers) => {
  const positiveNumbers = numbers.reduce((sum, number) => {
    if (number > 0) {
      sum++;
    }
    return sum;
  }, 0);
  return positiveNumbers;
};

const countPositiveNum = countPositiveNumbers(5, -1, 3, 2);
console.log(countPositiveNum);

// №6 Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5
// Приклад: getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) -> [55, 55]

const getDividedByFive = (...numbers) =>
  numbers.filter((number) => number % 5 === 0);

const dividedByFive = getDividedByFive(
  6,
  2,
  55,
  11,
  78,
  2,
  55,
  77,
  57,
  87,
  23,
  2,
  56,
  3,
  2
);
console.log(dividedByFive);

// №7 Створіть функцію replaceBadWords(string) – яка 1) розіб'є фразу на слова, 2) замінить погані слова на зірочки (*). При вирішенні цього завдання необхідно розбити масив на слова за допомогою функції .split(" "), після чого масив необхідно буде склеїти .join(" ") Погані слова: shit та fuck. Передбачте можливість розширювати список цих слів у майбутньому.
// Приклад: replaceBadWords("Are you fucking kidding?") -> "Are you ****ing kidding?" Приклад: replaceBadWords("Holy shit!") -> "Holy ****!" Приклад: replaceBadWords("It's bullshit!") -> "It's bull****!"

const replaceBadWords = (string) => {
  const badWord = ["shit", "fuck"];
  let badString = string;

  for (let word of badWord) {
    let length = word.length;
    let starHide = "*".repeat(length);
    if (string.toLowerCase().includes(word)) {
      badString = badString
        .toLowerCase()
        .replaceAll(word.toLowerCase(), starHide);
    }
    badString = badString[0].toUpperCase() + badString.slice(1);
  }
  return badString;
};

const getReplaceBadWords = replaceBadWords("Are you fucking  kidding?");
console.log(getReplaceBadWords);

/* Можна використати і такий варіант:
  for (let i = 0; i < badWord.length; i++) {
    const length = badWord[i].length;
    const starHide = "*".repeat(length);
    badString = badString.split(badWord[i]).join(starHide);
  } */

// №8 Створіть функцію divideByThree(word), яка розбиває кожне слово на умовні склади по 3 букви. Якщо букв менше трьох – не розбиває. Пробіли завжди видаляються. Рядок приводится до нижнього регістру. Приклад: divideByThree("Commander) -> ["com", "man", "der"] Приклад: divideByThree("live") -> ["liv", "e"]

const divideByThree = (word) => {
  let lowerCaseWord = word.toLowerCase().replaceAll(" ", "");
  let result = [];

  if (lowerCaseWord.length > 3) {
    for (let i = 0; i < lowerCaseWord.length; i += 3) {
      if (lowerCaseWord.length - i >= 3) {
        result.push(lowerCaseWord.slice(i, i + 3));
      } else {
        result.push(lowerCaseWord.substring(i));
      }
    }
  } else {
    result = lowerCaseWord;
  }
  return result;
};
// lowerCaseWord[i] + lowerCaseWord[i + 1] + lowerCaseWord[i + 2]
const getDivideByThree = divideByThree("Commander");
console.log(getDivideByThree);

const div = document.getElementById("out");
div.innerHTML = `
№1: ${randomArr} <br/>\n
№2: ${average} <br/>\n
№3: ${median} <br/>\n
№4: ${filterEvenNum} <br/>\n
№5: ${countPositiveNum} <br/>\n
№6: ${dividedByFive} <br/>\n
№7: ${getReplaceBadWords} <br/>\n
№8: ${getDivideByThree} <br/>\n`;
