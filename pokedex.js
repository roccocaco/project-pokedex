import { pokemons } from "./pokemons.js";

const divPokemon = document.getElementById('pokemon');
const btnRigth = document.getElementById('rigth');
const btnLeft = document.getElementById('left');

let index = 0;

divPokemon.innerHTML = `
    <img src="${pokemons[index].url}" alt="${pokemons[index].name}">
`;

btnRigth.addEventListener('click', function () {
    index++
    divPokemon.innerHTML = `
    <img src="${pokemons[index].url}" alt="${pokemons[index].name}">
    `;
});

btnLeft.addEventListener('click', function () {
    index--
    divPokemon.innerHTML = `
    <img src="${pokemons[index].url}" alt="${pokemons[index].name}">
    `;
});
