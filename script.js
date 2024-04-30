// HTML DOM Elements
let button1 = document.getElementById("btn1");
let button2 = document.getElementById("btn2");
let span1 = document.getElementById("span1");
let span2 = document.getElementById("span2");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");

var allPokemon;

fetch("pokemon.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (allPokemon = strData.split(/\r?\n/)));

button1.addEventListener("click", showPokemon);
button2.addEventListener("click", threePokemon);
input1.addEventListener("change", showLetter);
input2.addEventListener("change", pokemonLength);

function showPokemon() {
  let randNum = Math.floor(Math.random() * allPokemon.length);
  span1.innerHTML = allPokemon[randNum];
}
function threePokemon() {
  span2.innerHTML = " ";
  for (let i = 0; i < 3; i++) {
    let randNum = Math.floor(Math.random() * allPokemon.length);
    span2.innerHTML += allPokemon[randNum] + " ";
  }
}

function showLetter() {
  div1.innerHTML = " ";
  let letter = input1.value;
  input1.value = "";
  for (let i = 0; i < allPokemon.length; i++) {
    let currentPokemon = allPokemon[i];
    let firstLetter = currentPokemon.charAt(0);

    if (firstLetter == letter) {
      div1.innerHTML += currentPokemon + "<br>";
    }
  }
}

function pokemonLength() {
  div2.innerHTML = " ";
  let length = input2.value;
  input2.value = "";
  for (let i = 0; i < allPokemon.length; i++) {
    let currentPokemon = allPokemon[i];
    let pokeLength = currentPokemon.length;

    if (pokeLength == length) {
      div2.innerHTML += currentPokemon + "<br>";
    }
  }
}
