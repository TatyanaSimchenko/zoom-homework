"use strict";
const APP = {
  urls: {
    base: "https://swapi.dev/api/",
    films: "films/",
    people: "people/",
    planets: "planets",
    starships: "starships/",
  },
  init: () => {
    APP.addListeners();
    APP.buildNav();
  },
  addListeners: () => {
    let nav = document.getElementById("nav");
    nav.addEventListener("click", APP.getData);
    footer.addEventListener("click", APP.getData);
  },
  buildNav: () => {
    let df = new DocumentFragment();
    for (let nm in APP.urls) {
      if (nm != "base") {
        let link = document.createElement("a");
        link.href = `${APP.urls.base}${APP.urls[nm]}`;
        link.textContent = nm;
        link.setAttribute("data-link", `${APP.urls.base}${APP.urls[nm]}`);
        df.append(link);
      }
    }
    document.getElementById("nav").append(df);
  },
  getData: (e) => {
    if (e) e.preventDefault();
    document.querySelector(".overlay").classList.add("active");
    let link = e.target;
    let url = link.getAttribute("data-link");
    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error(response.statusText);
        return response.json();
      })
      .then(APP.buildList)
      .catch((err) => {
        console.log(err);
        document.querySelector(".overlay").classList.remove("active");
      });
  },
  buildList: (data) => {
    let m = document.getElementById("main");
    console.log(data);
    document.querySelector(".overlay").classList.remove("active");
    m.innerHTML = data.results
      .map((item) => {
        let nm = item.name || item.title;
        return `<p>${nm}</p>`;
      })
      .join("");

    // prev/next navigation
    let footer = document.getElementById("footer");
    footer.innerHTML = "";

    if (data.previous) {
      let prev = document.createElement("a");
      prev.href = data.previous;
      let url = new URL(data.previous);
      let labels = url.pathname.split("/");
      let label = labels[labels.length - 2];
      prev.textContent = `<< Prev ${label}`;
      prev.setAttribute("data-link", data.previous);
      footer.append(prev);
    }
    if (data.next) {
      let next = document.createElement("a");
      next.href = data.next;
      let url = new URL(data.next);
      let labels = url.pathname.split("/");
      let label = labels[labels.length - 2];
      next.textContent = `Next ${label} >>`;
      next.setAttribute("data-link", data.next);
      footer.append(next);
    }
  },
};

document.addEventListener("DOMContentLoaded", APP.init);
