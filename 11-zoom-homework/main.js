"use strict";

function getRandomChinese(length) {
  return new Promise(function (resolve, reject) {
    let i = 1;
    const arr = [];

    while (i <= length) {
      setTimeout(() => {
        const sign = String(Date.now() % 100000);
        arr.push(String.fromCharCode(sign));

        if (arr.length === length) {
          resolve(arr);
        }
      }, i * 50);

      i++;
    }
  });
}

getRandomChinese(4).then((result) => {
  console.log(result.join(""));
});

const randomChinese = getRandomChinese(4);

const div = document.getElementById("out");
div.innerHTML = `Результати в консолі!`;
