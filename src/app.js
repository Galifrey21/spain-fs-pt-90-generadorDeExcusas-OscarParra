/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  console.log("Hello Rigo from the console!");

  function aleatorio(listaElementos) {
    let elemento = "";
    elemento =
      listaElementos[Math.floor(Math.random() * listaElementos.length)];
    return elemento;
  }

  let excusas = document.querySelector("#excuse");
  console.log(excusas);
  excusas.innerHTML =
    aleatorio(who) +
    " " +
    aleatorio(action) +
    " " +
    aleatorio(what) +
    " " +
    aleatorio(when);
};
