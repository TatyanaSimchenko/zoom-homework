const fruit = 15.678;
const coffe = 123.965;
const meat = 90.2345;

// Максимальне число:
const maxPrise = Math.max(15.678, 123.965, 90.2345);
console.log(maxPrise);

// Мінімальне число:
const minPrise = Math.min(15.678, 123.965, 90.2345);
console.log(minPrise);

// Вартість всіх товарів:
const sumPrice = fruit + coffe + meat;
console.log(sumPrice);

//  Округлення в меньшу сторону:
const floorSumPrise = Math.floor(fruit) + Math.floor(coffe) + Math.floor(meat);
console.log(floorSumPrise);

//  Сума округлена до сотень:
const roundToSumPrise = Math.round(sumPrice / 100) * 100;
console.log(roundToSumPrise);

// Парне чи не парне:
if (roundToSumPrise % 2 == 0) {
  console.log("even!");
} else {
  console.log("odd!");
}

//  Сума решти:
const delivery = 500 - sumPrice;
console.log(delivery);

//  Середнє значення:
const averageSum = (sumPrice / 3).toFixed(2);
console.log(averageSum);

//  Випадкова знижка:
const discount = Math.floor(Math.random() * 101);
const sumDiscount = (sumPrice - sumPrice * (discount / 100)).toFixed(2);
console.log(sumDiscount);

//  Чистий прибуток:
const clientCost = (Math.floor(sumPrice) * discount) / 100;
console.log(clientCost);
const costPrice = Math.floor(sumPrice) / 2;
const profit = (costPrice - clientCost).toFixed(2);
console.log(profit);

// Шаблонний рядок:
const button = document.getElementById("btn");
const div = document.getElementById("out");
button.onclick = function () {
  div.innerHTML = `Максимальне число:  ${maxPrise} <br/>\n
  Мінімальне число: ${minPrise} <br/>\n
  Вартість всіх товарів: ${sumPrice} <br/>\n
  Округлення в меньшу сторону: ${floorSumPrise} <br/>\n
  Сума округлена до сотень: ${roundToSumPrise} <br/>\n
  Парне: true <br/>\n
  Сума решти: ${delivery} <br/>\n
  Середнє значення: ${averageSum} <br/>\n
  Випадкова знижка: ${discount} <br/>\n
  Чистий прибуток: ${profit} <br/>\n
  `;
};
