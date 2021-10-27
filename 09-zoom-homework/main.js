"use strict";

const body = document.body;
const header = document.createElement("h1");
header.textContent = "DOM (Document Object Model)";
body.appendChild(header);

const div = document.createElement("div");
div.classList.add("list");
body.appendChild(div);

const ul = `
<ul>
<li> Зробіть 25 квадратів розміру 50х50 пікселів кожен, зафарбовані у випадковий колір. Квадрати мають розташовуватись по 5 в ряд. </li>
<li>Щоб квадрати з'явились на сторінці, необхідно викликати функцію generateBlocks();</li>
<li><span>Advanced:</span> зробіть так, щоб квадрати змінювали колір раз на секунду. Щоб квадрати з'явились на сторінці та почали змінюватись, необхідно викликати функцію generateBlocksInterval();</li>
</ul>`;
div.innerHTML = ul;

const sqareContainer = (className) => {
  let div = document.querySelector(`${className}`);
  if (div) {
    div.innerHTML = " ";
  } else {
    div = document.createElement("div");
    div.classList.add("container");
    document.body.appendChild(div);
  }
  return div;
};

const generateBlocks = () => {
  const squareContainerBlock = sqareContainer(".container");
  const squareSize = 50;

  for (let i = 0; i < 25; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.background =
      "#" + Math.floor(Math.random() * 0xffffff).toString(16);
    squareContainerBlock.append(square);
  }
};

generateBlocks();

const generateBlocksInterval = () => {
  setInterval(generateBlocks, 1000);
};

generateBlocksInterval();

// console.log(body);
