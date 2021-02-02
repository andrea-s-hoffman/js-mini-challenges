"use strict";

let total = 0;
let totalParagraph = document.querySelector(`.total`);
let cola = document.querySelector(`.cola`);
let chocolate = document.querySelector(`.chocolate`);
let gummies = document.querySelector(`.gummies`);
let peanuts = document.querySelector(`.peanuts`);
let coinsContainer = document.querySelector(`.coins-container`);
// let newCoin = document.createElement(`div`);
// let newPenny = document.createElement(`.penny`);
// let newNickel = document.createElement(`.nickel`);
// let newDime = document.createElement(`.dime`);
// let newQuarter = document.createElement(`.quarter`);

cola.addEventListener(`click`, () => {
  total += 2;
  totalParagraph.textContent = `Total: $${total}`;
});
chocolate.addEventListener(`click`, () => {
  total += 4;
  totalParagraph.textContent = `Total: $${total}`;
});
gummies.addEventListener(`click`, () => {
  total += 6;
  totalParagraph.textContent = `Total: $${total}`;
});
peanuts.addEventListener(`click`, () => {
  total += 3;
  totalParagraph.textContent = `Total: $${total}`;
});
