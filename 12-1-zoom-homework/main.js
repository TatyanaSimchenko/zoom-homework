"use strict";

const baseUrl = "https://swapi.dev/api";
const filmList = document.getElementById("film-list");
const filmBtn = document.getElementById("people-btn");
const filmInput = document.getElementById("input");

const getPeople = () => {
  if (
    filmInput.value === "1" ||
    filmInput.value === "2" ||
    filmInput.value === "3" ||
    filmInput.value === "4" ||
    filmInput.value === "5" ||
    filmInput.value === "6"
  ) {
    filmList.innerHTML = "Loading...";
  } else {
    filmList.innerHTML = "Please, enter from 1 to 6!";
    return;
  }
  axios
    .get(`${baseUrl}/films/${filmInput.value}`)
    .then((response) => {
      const personList = response.data.characters;
      personList.map((person) => {
        getInfo(person);
        filmList.innerHTML = "";
      });
    })
    .catch((err) => {
      console.log("Something Wrong!", err);
    });
};

const getInfo = (link) => {
  axios
    .get(link)
    .then((response) => {
      const name = response.data.name;
      const birthYear = response.data.birth_year;
      const gender = response.data.gender;
      const mass = response.data.mass;
      const avatar = name.replaceAll(" ", "_");
      const allPersonInfo = `
    <div class="card">
    <img class="avatar" src="./assets/${avatar}.jpeg" alt="avatar"
    <h1>${name}</h1>
    <p>Birth Year: ${birthYear}</p>
    <p>Mass: ${mass}</p>
    <p>Gender: ${gender}</p>
    </div>`;
      filmList.innerHTML += allPersonInfo;
    })
    .catch((err) => {
      console.log("Something Wrong!", err);
    });
};

getPeople;

filmBtn.addEventListener("click", getPeople);
