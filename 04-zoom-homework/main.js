"use strict";

const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = [
  "Диференційне рівняння",
  "Теорія автоматів",
  "Алгоритми і структури даних",
];
const marks = [4, 5, 5, 3, 4, 5];

// №1 Розділіть студентів на пари (хлопець + дівчина) для роботи над проєктом. У вас повинен вийти вкладений масив з парами студентів: [ ["Олександр і Олена"], [...], [...]]
console.log(students);

const getPairs = (students) => {
  const male = [];
  const female = [];
  const pairs = [];

  for (let i = 0; i < students.length; i++) {
    let arrLetters = students[i];

    if (arrLetters.endsWith("а")) {
      female.push(arrLetters);
    } else {
      male.push(arrLetters);
    }
  }

  for (let i = 0; i < male.length; i++) {
    pairs.push([male[i], female[i]]);
  }

  return pairs;
};

// №2 Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати. Повинен вийти вкладений масив виду: [["Олександр і Олена", "Теорія автоматів"], [...], [...] ]

const getPairsWithThems = (pairs, themes) => {
  const arrPairs = pairs.map((item) => item.join(" і "));
  const pairsWithThemes = arrPairs.map((item, i) => [item, themes[i]]);

  return pairsWithThemes;
};

// №3 Зіставте оцінки (marks) зі студентом (students): [["Олександр", 4], [...], [...] ]

const getStudentMark = (students, marks) =>
  students.map((item, i) => [item, marks[i]]);

// №4 Поставте кожній парі випадкову оцінку (від 1 до 5) за проєкт (тут функція буде не чистою, але не повинна мутувати масив): [["Олександр і Олена", "Теорія автоматів", 5], [...], [...] ]

const getThemesPairsRandomMarks = (pairsThemes) =>
  pairsThemes.map((pairTheme) => [
    ...pairTheme,
    Math.round(Math.random() * (5 - 1) + 1),
  ]);

const pairs = getPairs(students);
const pairsThemes = getPairsWithThems(pairs, themes);
const getMarks = getStudentMark(students, marks);
const pairWithThemeMark = getThemesPairsRandomMarks(pairsThemes);

console.log(pairs);
console.log(pairsThemes);
console.log(getMarks);
console.log(pairWithThemeMark);

const div = document.getElementById("out");
div.innerHTML = `№1: ${pairs} <br/>\n
 №2: ${pairsThemes} <br/>\n
 №3: ${getMarks} <br/>\n
 №4: ${pairWithThemeMark} <br/>\n`;
