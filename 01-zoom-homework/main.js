console.log("Hello!");

const fruit = 15.678;

const coffe = 123.965;

const meat = 90.2345;

// 1 Максимальне число:
let maxPrise = Math.max(15.678, 123.965, 90.2345);
console.log(maxPrise);

// 2 Мінімальне число:
let minPrise = Math.min(15.678, 123.965, 90.2345);
console.log(minPrise);

// 3 Вартість всіх товарів:
let sumPrice = fruit + coffe + meat;
console.log(sumPrice);

// 4 Округлення в меньшу сторону:
let floorSumPrise = Math.floor(fruit + coffe + meat);
console.log(floorSumPrise);

// 5 Сума округлена до сотень:
let roundToSumPrise = Math.round((fruit + coffe + meat) / 100) * 100;
console.log(roundToSumPrise);

// 6 Парне чи не парне:
if (roundToSumPrise % 2 == 0) {
  console.log("even!");
} else {
  console.log("odd!");
}

// 7 Сума решти:
let delivery = (500 - (fruit + coffe + meat)).toFixed(2);
console.log(delivery);

// Середнє значення:
let averageSum = ((fruit + coffe + meat) / 3).toFixed(2);
console.log(averageSum);

// 8 Випадкова знижка:
function discount(max, min) {
  return min + Math.random() * (max - min);
}
console.log(discount(1, 10));

let sumDiscount = (500 - discount(1, 10)).toFixed(2);
console.log(sumDiscount);

// 9 Чистий прибуток:

const price = 260.66;

const clientCount = 10;

let clientCost = (Math.floor(price) * clientCount) / 100;
console.log(clientCost);
let costPrice = Math.floor(price) / 2;
let profit = costPrice - clientCost;

console.log(profit);

// Шаблонний рядок:

let button = document.getElementById("btn");
let div = document.getElementById("out");

button.onclick = function () {
  console.log("good job!");
  div.innerHTML = `Максимальне число:  ${maxPrise} <br/>\n
  Мінімальне число: ${minPrise} <br/>\n
  Вартість всіх товарів: ${sumPrice} <br/>\n
  Округлення в меньшу сторону: ${floorSumPrise} <br/>\n
  Сума округлена до сотень: ${roundToSumPrise} <br/>\n
  Парне: true <br/>\n
  Сума решти: ${delivery} <br/>\n
  Середнє значення: ${averageSum} <br/>\n
  Випадкова знижка: ${sumDiscount} <br/>\n
  Чистий прибуток: ${profit} <br/>\n
  `;
};
