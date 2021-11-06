"use strict";

const baseUrl = "https://swapi.dev/api";
const filmList = document.getElementById("film-list");
const filmBtn = document.getElementById("people-btn");
const filmInput = document.getElementById("input");
const filmInfo = document.getElementById("film-info");
const aboutBtn = document.getElementById("about-btn");
const aboutInput = document.getElementById("about-input");
const planetsBtn = document.getElementById("planets-btn");
const planetsList = document.getElementById("planets-list");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const countPage = document.getElementById("count-page");

// personages info, after choose part of film

const getPeople = () => {
  if (
    filmInput.value === "1" ||
    filmInput.value === "2" ||
    filmInput.value === "3" ||
    filmInput.value === "4" ||
    filmInput.value === "5" ||
    filmInput.value === "6"
  ) {
    document.querySelector(".overlay").classList.add("active");
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
      document.querySelector(".overlay").classList.remove("active");
    })
    .catch((err) => {
      console.log("Something Wrong!", err);
    });
};

// About films info

const getFilm = () => {
  if (
    aboutInput.value === "1" ||
    aboutInput.value === "2" ||
    aboutInput.value === "3" ||
    aboutInput.value === "4" ||
    aboutInput.value === "5" ||
    aboutInput.value === "6"
  ) {
    document.querySelector(".overlay").classList.add("active");
  } else {
    filmInfo.innerHTML = "Please, enter from 1 to 6!";
    return;
  }
  axios
    .get(`${baseUrl}/films/${aboutInput.value}`)
    .then((response) => {
      filmInfo.innerHTML = `
      <div class="about__box">
      <h2>${response.data.title}</h2>
      <p>Release date: ${response.data.release_date}</p>
      <p>Producer: ${response.data.Producer}</p>
      <p>Episode: ${response.data.episode_id}</p>
      </div>`;
      document.querySelector(".overlay").classList.remove("active");
    })
    .catch((err) => {
      console.log("Something Wrong!", err);
    });
};

// Planets list
let currentPage = 1;

const getPlanets = () => {
  document.querySelector(".overlay").classList.add("active");
  countPage.innerHTML = currentPage;
  axios
    .get(`${baseUrl}/planets/?page=${currentPage}`)
    .then((response) => {
      const elems = response.data.results.map(
        (item) => `<li class="planets-item">${item.name}</li>`
      );
      planetsList.innerHTML = elems.join("");
      document.querySelector(".overlay").classList.remove("active");
    })
    .catch((err) => {
      console.log("Something Wrong!", err);
    });
};

getPeople;
getFilm;
getPlanets;

filmBtn.addEventListener("click", getPeople);
aboutBtn.addEventListener("click", getFilm);
planetsBtn.addEventListener("click", getPlanets);

// prev & next buttons

prevBtn.addEventListener("click", () => {
  if (currentPage === 1) return;
  currentPage -= 1;
  getPlanets();
});
nextBtn.addEventListener("click", () => {
  if (currentPage === 6) return;
  currentPage += 1;
  getPlanets();
});
