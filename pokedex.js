// Importa a lista de pokémons do arquivo pokemons.js
import { pokemons } from "./pokemons.js";

// Obtém referências para os elementos do DOM
const divPokemon = document.getElementById("pokemon"); // Div onde a imagem do pokémon será exibida
const btnRigth = document.getElementById("rigth"); // Botão para avançar para o próximo pokémon
const btnLeft = document.getElementById("left"); // Botão para voltar para o pokémon anterior

let index = 0; // Inicializa o índice para controlar a posição atual do pokémon exibido

// Define a imagem inicial na div do pokémon
divPokemon.innerHTML = `
    <img src="${pokemons[index].url}" alt="${pokemons[index].name}">
`;

// Adiciona um ouvinte de evento para o clique no botão "Próximo"
btnRigth.addEventListener("click", function () {
  index++; // Incrementa o índice para avançar para o próximo pokémon
  // Atualiza a imagem na div do pokémon com base no novo índice
  divPokemon.innerHTML = `
        <img src="${pokemons[index].url}" alt="${pokemons[index].name}">
    `;
});

// Adiciona um ouvinte de evento para o clique no botão "Anterior"
btnLeft.addEventListener("click", function () {
  index--; // Decrementa o índice para voltar para o pokémon anterior
  // Atualiza a imagem na div do pokémon com base no novo índice
  divPokemon.innerHTML = `
        <img src="${pokemons[index].url}" alt="${pokemons[index].name}">
    `;
});

//Inicialização: Ao carregar a página, o primeiro pokémon da lista (pokemons[0]) é exibido na <div> com ID pokemon.

//Botão "Próximo" (btnRigth): Cada vez que o usuário clica neste botão, o índice (index) é incrementado, e a imagem do próximo pokémon na lista (pokemons[index]) é exibida na <div>.

//Botão "Anterior" (btnLeft): Cada vez que o usuário clica neste botão, o índice (index) é decrementado, e a imagem do pokémon anterior na lista (pokemons[index]) é exibida na <div>.

//Atualização da Imagem: A cada clique nos botões "Próximo" e "Anterior", o conteúdo da <div> é atualizado com a nova imagem do pokémon correspondente, utilizando o valor do índice (index) para acessar a propriedade url do objeto pokémon em pokemons[index].

//Este código permite uma navegação simples entre imagens de pokémons utilizando JavaScript, manipulando o DOM para exibir e atualizar as imagens conforme os botões são clicados.
